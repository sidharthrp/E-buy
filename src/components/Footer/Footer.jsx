import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='mt-4 py-5 bg-[#008ECC] text-white'>
    <div className='p-2 flex justify-center gap-10'>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact</p>
    </div>
    <div className='p-2 flex justify-center gap-10'>
        <FaGithub className='h-7 w-7'/>
        <FaLinkedin className='h-7 w-7' />
    </div>
    </div>
  )
}

export default Footer