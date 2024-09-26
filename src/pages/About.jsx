import React from 'react'

function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4 text-center">
        Welcome to <strong>E-Buy</strong>, an eCommerce platform designed to provide you with a seamless shopping experience!
        This project was created by <strong>Sidharth R Prakash</strong> as part of a portfolio showcase, demonstrating full-stack
        development expertise in building modern web applications.
      </p>
      <p className="text-lg mb-4 text-center">
        At <strong>E-Buy</strong>, we aim to offer a wide range of products, from electronics to fashion, with an intuitive user
        interface, secure payment gateways, and real-time data management. This platform showcases advanced web development skills, including:
      </p>
      <ul className="list-disc list-inside text-left mb-4">
        <li><strong>Responsive Design</strong>: Optimized for all screen sizes, ensuring a smooth experience on mobile, tablet, and desktop.</li>
        <li><strong>Full-Stack Development</strong>: Built using <strong>React.js</strong> on the front end and <strong>Firebase</strong> on the back end, with user authentication and cart management.</li>
        <li><strong>Payment Integration</strong>: Simulating a real-world checkout process with secure payment options.</li>
      </ul>
      <p className="text-lg mb-4 text-center">
        As this is a portfolio project, it's designed to demonstrate technical capabilities rather than cater to real customers. We hope you enjoy exploring the platform!
      </p>
      <p className="text-lg text-center">
        Feel free to connect with the developer on <a href="https://github.com/sidharthrp" className="text-blue-600">GitHub</a> or <a href="https://www.linkedin.com/in/sidharth-r-prakash-a83199236/" className="text-blue-600">LinkedIn</a> to learn more about this project and future work.
      </p>
    </div>
  )
}

export default About