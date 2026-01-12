import React from "react";
import { motion } from "framer-motion";
import { skillsData, assets } from "../assets/assets"; 
import * as LucideIcons from "lucide-react";
import { SpotlightCard } from "./cards/SpotlightCard";
import { Link } from "react-router-dom";

export function Skills({ isDarkMode, isHomePage = true }) {
  const displayedSkills = isHomePage ? skillsData.slice(0, 2) : skillsData;

  return (
    <section
      id="skills"
      className="w-full px-6 md:px-[12%] py-20 scroll-mt-20 bg-neutral-50 dark:bg-[#0a0a0f]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-3"
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            {isHomePage ? "Featured Skills" : "Skills & Proficiency"}
          </motion.h2>
        </div>

        <div className="space-y-16">
          {displayedSkills.map((categoryGroup, categoryIndex) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
                {categoryGroup.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {categoryGroup.skills.map((skill, skillIndex) => {
                  
                  const customIconSrc = assets[skill.icon];
                  
                  const IconComponent = LucideIcons[skill.icon] || LucideIcons.Code2;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <SpotlightCard className="group relative h-full p-6 bg-white dark:bg-[#0a0a16] rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 overflow-hidden hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                              
                              {customIconSrc ? (
                                <img
                                  src={customIconSrc}
                                  alt={skill.name}
                                  className="w-6 h-6 object-contain transition-all group-hover:brightness-0 group-hover:invert"
                                />
                              ) : (
                                <IconComponent size={24} strokeWidth={2} />
                              )}

                            </div>
                            <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                              {skill.experience}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-neutral-800 dark:text-white mb-4">
                            {skill.name}
                          </h4>

                          <div className="space-y-2">
                            <div className="flex justify-between items-end">
                              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                                Proficiency
                              </span>
                              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: 0.5,
                                  ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-full"
                                style={{ backgroundSize: "200% 100%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </SpotlightCard>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {isHomePage && (
          <div className="mt-16 text-center">
            <Link
              to="/skills"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold overflow-hidden transition-all shadow-xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View All Skills</span>
              <LucideIcons.ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Skills;