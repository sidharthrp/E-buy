import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()
  return (
    <div className='mt-4 py-5 bg-[#008ECC] text-white'>
    <div className='p-2 flex justify-center gap-10'>
        <p className=' cursor-pointer' onClick={()=>navigate('/')}>Home</p>
        <p className=' cursor-pointer' onClick={()=>navigate('/about')}>About Us</p>
        <p className=' cursor-pointer' onClick={()=>navigate('/contact')}>Contact</p>
    </div>
    <div className='p-2 flex justify-center gap-10'>
        <a href='https://github.com/sidharthrp' target="_blank" rel="noopener noreferrer"><FaGithub className='h-7 w-7 '/></a>
        <a href='https://www.linkedin.com/in/sidharth-r-prakash-a83199236/' target="_blank" rel="noopener noreferrer"><FaLinkedin className='h-7 w-7' /></a>
    </div>
    </div>
  )
}

export default Footer