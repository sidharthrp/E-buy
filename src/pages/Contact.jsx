import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className=" flex flex-col items-center justify-center p-40">
    <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
    <p className="text-center text-lg mb-4">
      I’m always open to discussing new projects, collaborations, or opportunities to showcase my skills. Feel free to reach out to me through any of the following:
    </p>

    <div className="flex space-x-8 mt-4">
      <a href="mailto:sidharthrprakash@gmail.com" className="text-blue-500 hover:text-blue-600">
        <FaEnvelope className="h-8 w-8" />
      </a>
      <a href="https://github.com/sidharthrp" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
        <FaGithub className="h-8 w-8" />
      </a>
      <a href="https://www.linkedin.com/in/sidharth-r-prakash-a83199236/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
        <FaLinkedin className="h-8 w-8" />
      </a>
    </div>

    <div className="mt-8">
      <p className="text-center text-gray-700">
        Email: <a href="mailto:sidharthrprakash@gmail.com" className="text-blue-500 hover:underline">sidharthrprakash@gmail.com</a>
      </p>
      
    </div>
  </div>
  )
}

export default Contact