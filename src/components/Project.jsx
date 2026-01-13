import { motion } from "framer-motion";
import { projectsData } from "../assets/assets";
import ProjectCard from "./cards/ProjectCard"; 
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Project({ isHomePage = false }) {
  const displayedProjects = isHomePage 
    ? projectsData.slice(0, 3) 
    : projectsData;

  return (
    <section
      id="work"
      className="w-full px-6 md:px-[12%] py-20 scroll-mt-20 bg-white dark:bg-[#0a0a0f]"
    >
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
            Portfolio
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4"
          >
            {isHomePage ? "Recent Projects" : "All Projects"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400"
          >
            {isHomePage
              ? "A selection of my work across various technologies."
              : "A comprehensive collection of projects that showcase my skills in full-stack development."}
          </motion.p>
        </div>

\        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {isHomePage ? (
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold overflow-hidden transition-all shadow-xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <a
              href="https://github.com/tanishjain09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              View More on GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Project;