import { motion } from "framer-motion";
import { assets, socialIcon } from '../../assets/assets';

function SocialCard({isDarkMode}) {
  return (
        <div className="flex gap-6 mt-6">
  <motion.a
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 1.2 }}
    href="https://github.com/tanishjain09"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <img src={socialIcon.github} alt="GitHub" className="w-6 h-6" />
  </motion.a>

  {/* LinkedIn - switches based on dark mode */}
  <motion.a
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 1.3 }}
    href="https://www.linkedin.com/in/tanish995/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <img
      src={isDarkMode ? socialIcon.linkedin_dark : socialIcon.linkedin_light}
      alt="LinkedIn"
      className="w-6 h-6"
    />
  </motion.a>

  
  <motion.a
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 1.4 }}
    href="https://www.instagram.com/tanish_sethiya_/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <img src={socialIcon.instagram} alt="instagram" className="w-6 h-6" />
  </motion.a>
  <motion.a
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 1.5 }}
    href="https://leetcode.com/u/tanishSethiya/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <img src={socialIcon.leetcode} alt="leetcode" className="w-6 h-6" />
  </motion.a>
</div>

  )
}

export default SocialCard