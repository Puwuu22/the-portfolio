import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Portfolio, Vaxine, Tutor, Shisha } from "../assets/images";

export default function Projects() {
  const projects = [
    {
      title: "SeiSei - Connect Tutor and Student Website",
      description:
        "A platform connecting students and tutors, helping students find tutors and tutors find students. Features a beautiful interface that is easy to manage and use",
      image: Tutor,
      category: "Web Development",
      technologies: ["React", "SASS"],
      status: "Completed",
      liveLink: "https://www.figma.com/proto/8H9yE3zEgWqO0nMrEPsnK4/Prototype?node-id=2228-10483&p=f&t=O5lCWhNwIvE0ag8R-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2228%3A10483&show-proto-sidebar=1",
      codeLink: "https://github.com/ryderthieu/SeiSei.git",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern technologies to showcase projects and skills.",
      image: Portfolio,
      category: "Web Development",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      status: "Completed",
      liveLink: "https://puwuu22.github.io/the-portfolio/",
      codeLink: "https://github.com/Puwuu22/the-portfolio.git",
    },
    {
      title: "Vaxine - Vaccine Tracking App",
      description:
        "An vaccination record book that helps easily track vaccination history for yourself and your family, as well as schedule vaccination appointments",
      image: Vaxine,
      category: "Mobile Application",
      technologies: ["React Native", "Firebase"],
      status: "Completed",
      liveLink:
        "https://www.figma.com/proto/2v3nkgWMdwDdQXua65wqvE/M%E1%BA%ABu?node-id=26-8632&p=f&t=vIEIYiGxOvufHXCw-1&scaling=min-zoom&content-scaling=fixed&page-id=26%3A7366&starting-point-node-id=26%3A8632",
      codeLink: "https://github.com/2itsnhyyy/VaccineApp.git",
    },
    {
      title: "Oshisha - Find Recipe Cooking",
      description:
        "An website to search for cooking recipes, post your own recipes, and connect with others in a food-focused social network",
      image: Shisha,
      category: "Web Application",
      technologies: ["React", "MongoDB", "Nodejs", "Expressjs"],
      status: "In Progress",
      liveLink: "https://github.com/ryderthieu/cooking-social-network.git",
      codeLink: "https://github.com/ryderthieu/cooking-social-network.git",
    },
  ];

  const statuses = ["All", "In Progress", "Completed"];

  const [activeStatus, setActiveStatus] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeStatus === "All" || project.status === activeStatus
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="min-h-screen py-20 lg:py-32 relative" id="projects">
      <div className="absolute w-100 min-h-screen bg-violet-300/30 dark:bg-indigo-500/20 -left-50 blur-3xl rounded-full"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 inline-block relative"
          >
            My Projects
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "50%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 right-1/3 h-1 bg-gradient-to-r from-[#48017a] to-[#ae7edc]"
            ></motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto"
          >
            Here are some of my recent projects.
          </motion.p>
        </motion.div>

        {/* Status filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {statuses.map((status, index) => (
              <motion.button
                key={index}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setActiveStatus(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeStatus === status
                    ? "bg-gradient-to-r from-[#48017a] to-[#ae7edc] text-white shadow-md"
                    : "bg-white/80 dark:bg-slate-800/50 text-gray-700 dark:text-white/70 hover:bg-violet-100 dark:hover:bg-slate-700/50 border border-violet-200 dark:border-slate-700/50"
                }`}
              >
                {status}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStatus}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/90 dark:bg-slate-800/30 rounded-xl overflow-hidden border border-violet-200/70 dark:border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                {/* Project image */}
                <div className="h-80 overflow-hidden bg-gray-100 dark:bg-slate-700/30 relative">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400?text=No+Image";
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
                  >
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
                {/* Project details */}
                <div className="p-6">
                  <div className="flex justify-end mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800"
                          : "bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/70 mb-6">{project.description}</p>

                  {/* Technologies used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ y: -2 }}
                        className="text-xs font-medium bg-violet-50 dark:bg-slate-700/50 text-purple-700 dark:text-white/80 px-2 py-1 rounded border border-violet-100 dark:border-slate-600/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white bg-gradient-to-r from-[#48017a] to-[#ae7edc] hover:opacity-90 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-white bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-200 dark:border-slate-600"
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}