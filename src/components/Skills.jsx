import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-600 dark:text-gray-400" },
    { name: "Git/GitHub", icon: <FaGithub />, color: "text-gray-700 dark:text-gray-400" },
    { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
    { name: "Java", icon: <FaJava />, color: "text-red-500 dark:text-white" },
    { name: "SQL", icon: <SiMysql />, color: "text-cyan-600" },
  ];

  const categories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      description:
        "Building responsive, accessible, and performant user interfaces with modern frameworks and libraries.",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "Java", "SQL"],
      description:
        "Creating scalable APIs and server-side applications with efficient data storage solutions.",
    },
    {
      title: "Tools & Others",
      skills: ["Git/GitHub", "Figma"],
      description:
        "Version control, UI/UX design, and other essential tools for modern development workflows.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "66%", 
      transition: { 
        duration: 0.8, 
        delay: 0.2 
      } 
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: 0.3 + i * 0.1 
      } 
    })
  };

  return (
    <section className="min-h-screen py-20 lg:py-24 relative" id="skills">
      <div className="absolute w-100 min-h-screen bg-violet-300/30 dark:bg-indigo-500/20 -right-50 blur-3xl rounded-full"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-left lg:text-center">
          {/* Title */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 space-y-6"
          >
            <motion.h2 
              variants={titleVariants}
              className="relative text-3xl lg:text-4xl text-gray-800 dark:text-white font-bold inline-block"
            >
              Tech Skills
              <motion.span 
                variants={underlineVariants}
                className="absolute -bottom-2 h-1 left-0 bg-gradient-to-r from-[#48017a] to-[#ae7edc]"
              ></motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="dark:text-white/70 text-gray-600 max-w-2xl mx-auto"
            >
              I'm constantly learning and expanding my skillset. Here are the
              technologies and tools I'm proficient with.
            </motion.p>
          </motion.div>

          {/* Skill List */}          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-16"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(82, 0, 255, 0.15)"
                }}
                className="flex flex-col rounded-lg items-center p-6 justify-center text-center transition-all duration-300 bg-white/80 dark:bg-slate-800/50 hover:bg-violet-100/70 dark:hover:bg-slate-700/70 border border-violet-200/50 dark:border-slate-700/50 shadow-sm"
              >
                <motion.div 
                  className={`text-4xl mb-3 ${skill.color}`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-gray-800 dark:text-white font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={categoryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(82, 0, 255, 0.1)" }}
                transition={{ duration: 0.2 }}
                className="bg-white/80 dark:bg-slate-800/50 rounded-xl p-6 border border-violet-200/50 dark:border-slate-700/50 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
                  {category.title}
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#48017a] to-transparent"
                  ></motion.span>
                </h3>
                <p className="text-gray-600 dark:text-white/50 mb-6">{category.description}</p>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, staggerChildren: 0.1 }}
                  viewport={{ once: true }}
                >
                  {category.skills.map((skillName, idx) => {
                    const skill = skills.find((s) => s.name === skillName);
                    if (!skill) return null;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex items-center gap-1 bg-violet-50 dark:bg-slate-700/50 rounded-full px-3 py-1 border border-violet-100/50 dark:border-slate-600/30"
                      >
                        <span className={`text-sm ${skill.color}`}>
                          {skill.icon}
                        </span>
                        <span className="text-gray-700 dark:text-white/80 text-sm">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}