import { Facebook, Github } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Avatar from '../assets/images/avatar.png';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center" id="hero">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute w-100 min-h-screen top-5 bg-indigo-500/20 -right-50 blur-3xl rounded-full"
        ></motion.div>
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-10 z-10 w-full lg:w-1/2 relative mb-6 text-center lg:text-left text-white"
          >
            <h1 className="font-bold text-3xl md:text-5xl lg:text-[50px]">
              Trịnh Thị Phương Quỳnh
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
              <span className="mr-2">I am a </span>
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
            <p className="">
              {" "}
              Welcome to my portfolio. I create beautiful and functional web
              experiences with modern technologies.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#48017a] to-[#ae7edc] rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/20 transition duration-300 font-bold"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Image with animations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex relative w-full lg:w-1/2 size-90 md:size-100 bg-transparent items-center justify-center lg:justify-end lg:mr-10"
          >
            <motion.div 
              initial={{ opacity: 0, rotate: 160 }}
              animate={{ opacity: 0.7, rotate: 165 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute w-64 h-80 md:w-80 md:h-100 dark:bg-slate-200/10 bg-violet-500/10 rounded-[3em]"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, rotate: 170 }}
              animate={{ opacity: 0.5, rotate: 175 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute w-64 h-80 md:w-80 md:h-100 dark:bg-slate-300/10 bg-violet-500/10 rounded-[3em]"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute w-64 h-80 md:w-80 md:h-95 dark:bg-slate-300 bg-violet-50 rounded-[3em]"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute w-64 h-80 rounded-[3em] md:w-80 md:h-95 overflow-hidden flex items-center justify-center"
            >
              <img 
                src={Avatar} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-[2.5em]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}