import { motion } from "framer-motion";

const SkillCard = ({ name, icon, level, years }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-darkCard rounded-xl p-5 w-40
      border border-gray-300 dark:border-gray-600 text-center"
    >
      <img src={icon} className="w-10 mx-auto mb-3" />

      <h4 className="font-semibold">{name}</h4>
      <p className="text-xs text-gray-500">{level}</p>
      <p className="text-xs text-gray-400">{years}</p>
    </motion.div>
  );
};

export default SkillCard;
