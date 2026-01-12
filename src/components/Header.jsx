import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { ArrowRight, Download, Github, Linkedin, Instagram } from "lucide-react";

export function Header() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="mb-8"
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-neutral-800 shadow-xl">
          <img
            src={assets.profile_img}
            alt="Tanish Sethiya"
            className="rounded-full w-40"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-amber-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            Tanish Sethiya
          </span>
        </h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
          Passionate software developer with expertise in Java, Python, and modern
          web technologies like React and Next.js. I love building scalable,
          user-friendly applications and solving challenging problems through
          clean, efficient code.
        </p>

        <div className="flex flex-wrap justify-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-8">
          <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">Java</span>
          <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">React</span>
          <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">DSA</span>
          <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">Spring</span>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <motion.a
            href="https://github.com/tanishjain09"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tanish995/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/tanish_sethiya_/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-full overflow-hidden transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Contact me</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="/sample-resume.pdf"
            download
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-transparent text-neutral-900 dark:text-white font-medium rounded-full border border-neutral-300 dark:border-neutral-600 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md"
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default Header;