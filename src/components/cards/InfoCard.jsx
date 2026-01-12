
import { motion } from 'framer-motion'

function InfoCard({ icon, iconDark, title, description, isDarkMode }) {
  return (
    <motion.li
    whileHover={{scale: 1.05}}
    className='bg-white dark:bg-darkCard hover:dark:bg-darkCardHover border border-gray-400
     dark:border-gray-600 rounded-xl p-6 cursor-pointer hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 duration-500'>
      <img  
        src={isDarkMode ? iconDark : icon} 
        alt={title} 
        className='w-7 mt-3'
        width={28}
        height={28}
      />
      <h3  className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
      <p className='text-gray-700 text-sm dark:text-white/80'>{description}</p>
    </motion.li>
  )
}

export default InfoCard