import React from 'react'
import Login from '../components/LoginInput/Login'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
 const navigate = useNavigate();
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-20 bg-blue-200 mx-[500px]'>
      <h1 className='py-10 text-4xl font-bold text-[#008ECC] uppercase'>Login</h1>
      <Login></Login>
      <div className='flex py-10 px-2 mt-3 mb-5'>
        <button className=' bg-green-400 text-white  border-4 px-5 py-3 mx-2 uppercase' onClick={()=>navigate("/register")}>Register New User</button>
        <button className='bg-orange-500 text-white border-4  px-5 py-3 uppercase'>Login</button>
      </div>
    </div>
      
    </div>
  )
}

export default LoginPage