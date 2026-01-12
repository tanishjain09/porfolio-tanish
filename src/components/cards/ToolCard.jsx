import { motion } from 'framer-motion'

function ToolCard({tool, alt="Tool", dark}) {
  return (
    <motion.li
    whileHover={{scale: 1.1}}
    className='flex items-center justify-center w-12 sm:w-14 aspect-square
    border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500
    '>
        <img src={tool} alt={alt} className='w-5 sm:w-7'/>
    </motion.li>
  )
}

export default ToolCard