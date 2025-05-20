import { Facebook, Github } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Avatar } from "../assets/images";
import Resume from "../assets/TrinhThiPhuongQuynh_WebDeveloper_CV.pdf"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center" id="hero">
      <div className="container mx-auto flex flex-row md:flex-col pt-30">
        <div className="absolute w-100 min-h-screen top-5 bg-indigo-500/20 blur-3xl -right-50 blur-3xl rounded-full"></div>
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-6 z-10 w-full lg:w-2/3 relative mb-6 text-center lg:text-left text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
              Trịnh Thị Phương Quỳnh
            </h1>
            <div className="opacity-0 lg:opacity-100 rounded-full w-60 h-60 absolute -top-5 -left-10 bg-violet-500/20 dark:bg-purple-500/40 blur-3xl"></div>
            <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
              <span className="mr-2 font-bold text-purple-400">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Dreamer",
                  2000,
                ]}
                speed={50}
                className="bg-gradient-to-r from-[#48017a] to-[#ae7edc]"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-600 max-w-150 dark:text-white/70">
              {" "}
              Welcome to my portfolio. I'm a creative and passionate web
              developer dedicated to building beautiful and functional digital
              experiences
            </p>
            <motion.a
              href={Resume}
              download="TrinhThiPhuongQuynh_WebDeveloper_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#48017a] to-[#ae7edc] rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/20 transition duration-300 font-bold"
            >
              <span>Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </motion.a>
          </motion.div>

          {/* Image with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex relative w-full lg:w-1/2 size-90 md:size-120 bg-transparent items-center justify-center mt-15 lg:mt-0 lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, rotate: 160 }}
              animate={{ opacity: 1, rotate: 165 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute w-80 h-100 dark:bg-slate-200/10 bg-violet-500/10 rotate-170 rounded-[3em]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 170 }}
              animate={{ opacity: 1, rotate: 170 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute w-80 h-100 dark:bg-slate-300/10 bg-violet-500/10 rotate-180 rounded-[3em]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, delay: 0.8 }}
              className="absolute w-80 h-95 dark:bg-slate-300 bg-violet-50 rounded-[3em] overflow-hidden hover:shadow-violet-400/60 hover:shadow-lg"
            > <img
                src={Avatar}
                alt="Profile"
                className="w-full h-full object-cover rounded-[2.5em]"
              /></motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
