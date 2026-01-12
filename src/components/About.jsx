import React from "react";
import { motion } from "framer-motion"; 
import { assets } from "../assets/assets"; 
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";

export function About({ isDarkMode }) {
  return (
    <section id="about" className="w-full px-6 md:px-[12%] py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-3"
          >
            Introduction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            About Me
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-full max-w-[350px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={assets.user_image}
                alt="Tanish Sethiya"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500/30 rounded-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              Hi, I’m{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                Tanish Sethiya
              </span>
              , a third-year Computer Science (AI) student passionate about
              software development and problem-solving. I build modern web
              applications using{" "}
              <span className="font-medium text-neutral-900 dark:text-white">
                React.js
              </span>
              , work with{" "}
              <span className="font-medium text-neutral-900 dark:text-white">
                Java and JavaScript
              </span>
              , and enjoy creating clean and efficient software programs.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              I’m currently diving deeper into backend development with{" "}
              <span className="font-medium text-neutral-900 dark:text-white">
                SpringBoot and Java Backend
              </span>{" "}
              while sharpening my fundamentals through regular{" "}
              <span className="font-medium text-neutral-900 dark:text-white">
                DSA practice
              </span>
              . I enjoy breaking down complex problems, learning how systems are
              designed, and writing code that is easy to understand and scale.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Through hands-on projects and continuous learning, I’m preparing
              myself for opportunities where I can contribute, grow, and build
              impactful software.
            </p>

            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 px-10 py-4 mt-10
  bg-neutral-900 dark:bg-white text-white dark:text-neutral-900
  rounded-full font-bold overflow-hidden transition-all
  shadow-xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <span className="relative z-10">My Projects</span>
              <LucideIcons.ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
export default About;
