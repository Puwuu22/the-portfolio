import React from "react";
import { motion } from "framer-motion";
import { Code, Girl, Japan, Tech1, Tech2 } from "../assets/images";

export default function About() {
  const imageShapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
      },
    }),
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "50%",
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section
      className="min-h-screen flex items-center py-16 lg:py-24 relative"
      id="about"
    >
      <div className="absolute w-100 min-h-screen bg-indigo-500/20 -left-50 blur-3xl rounded-full"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:flex relative w-full lg:w-1/2 w-90 h-100 md:w-100 md:h-140 bg-transparent items-center justify-center lg:ml-10"
          >
            <motion.div
              custom={0}
              variants={imageShapeVariants}
              whileHover={{ rotate: 15, scale: 1.05 }}
              className="absolute bg-slate-200 size-15 left-20 top-40 md:size-20 md:left-10 md:rounded-3xl rounded-2xl overflow-hidden"
            >
              <img src={Japan} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              custom={1}
              variants={imageShapeVariants}
              whileHover={{ rotate: -10, scale: 1.05 }}
              className="absolute bg-slate-200 size-25 left-30 -bottom-5 md:left-25 md:bottom-10 md:size-25 rounded-3xl overflow-hidden"
            >
              <img src={Girl} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              custom={0.5}
              variants={imageShapeVariants}
              className="absolute w-64 h-80 md:w-80 md:h-100 dark:bg-slate-200/10 bg-violet-500/10 rotate-10 rounded-[3em]"
            ></motion.div>
            <motion.div
              custom={0.2}
              variants={imageShapeVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute w-64 h-80 md:w-80 md:h-95 dark:bg-slate-300 bg-violet-50 rounded-[3em] overflow-hidden"
            ><img src={Tech1} alt="" className="w-full h-full object-cover" /></motion.div>
            <motion.div
              custom={1.5}
              variants={imageShapeVariants}
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="absolute bg-slate-200 size-35 right-30 -bottom-10 sm:right-15 sm:bottom-0 sm:size-40 rounded-3xl overflow-hidden"
            >
              <img src={Tech2} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-left dark:text-white text-black space-y-6"
          >
            <div className="inline-block">
              <motion.h1
                variants={textVariants}
                custom={0}
                className="relative font-bold text-3xl md:text-4xl"
              >
                About me
                <motion.span
                  variants={underlineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#470284] to-[rgb(204,154,247)]"
                ></motion.span>
              </motion.h1>
            </div>
            <motion.div>
              <motion.p variants={textVariants} custom={1} className="">
                Hello! I'm currently studying at the University of Information
                Technology (UIT), a member of Vietnam National University, Ho
                Chi Minh City.
              </motion.p>
              <br />
              <motion.p variants={textVariants} custom={2}>
                I'm enrolled in the Vietnam-Japan IT Program, where I'm learning
                not only core knowledge of Information Technology but also
                developing strong foundations in both Japanese language and
                international software engineering practices.
              </motion.p>
              <br />
              <motion.p variants={textVariants} custom={3} className="">
                My dream? Chill on a pile of money like a boss. The plan? Code
                hard, learn fast, and upgrade myself every day.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
