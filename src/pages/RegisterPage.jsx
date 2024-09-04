import React from 'react'
import Login from '../components/LoginInput/Login'

function RegisterPage() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-20 bg-blue-200 mx-[500px]'>
      <h1 className='py-10 text-4xl font-bold text-[#008ECC] uppercase '>Register</h1>
      <Login></Login>
      <div className='flex py-10 px-2 mt-3 mb-5'>
        <button className=' bg-orange-500 text-white  border-4 px-5 py-3 mx-2 uppercase'>Register</button>
      </div>
    </div>
    </div>
  )
}

export default RegisterPage