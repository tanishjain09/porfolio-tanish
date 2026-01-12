import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function ProjectCard({ project, index, isDarkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <SpotlightCard
        className="group relative flex flex-col h-full bg-white dark:bg-[#0a0a16] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden transition-all duration- hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
        spotlightColor={
          isDarkMode ? "rgba(37, 99, 235, 0.25)" : "rgba(37, 99, 235, 0.15)"
        }
      >
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col flex-1 p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            {project.featured && (
              <span className="shrink-0 px-2.5 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 rounded-full">
                Featured
              </span>
            )}
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-700 group-hover:border-blue-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-transparent border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default ProjectCard;