import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const navigate = useNavigate()
  return (
    <div className='mt-4 py-5 bg-[#008ECC] text-white'>
    <div className='p-2 flex justify-center gap-10'>
        <motion.p whileHover={{scale:1.1, color:"rgb(0, 0, 0)" }} className=' cursor-pointer' onClick={()=>navigate('/')}>Home</motion.p>
        <motion.p whileHover={{scale:1.1, color:"rgb(0, 0, 0)" }} className=' cursor-pointer' onClick={()=>navigate('/about')}>About Us</motion.p>
        <motion.p whileHover={{scale:1.1, color:"rgb(0, 0, 0)" }} className=' cursor-pointer' onClick={()=>navigate('/contact')}>Contact</motion.p>
    </div>
    <div className='p-2 flex justify-center gap-10'>
        <motion.a whileHover={{scale:1.1, color:"rgb(0, 0, 0)" }} href='https://github.com/sidharthrp' target="_blank" rel="noopener noreferrer"><FaGithub className='h-7 w-7 '/></motion.a>
        <motion.a whileHover={{scale:1.1, color:"rgb(0, 0, 0)" }} href='https://www.linkedin.com/in/sidharth-r-prakash-a83199236/' target="_blank" rel="noopener noreferrer"><FaLinkedin className='h-7 w-7' /></motion.a>
    </div>
    </div>
  )
}

export default Footer