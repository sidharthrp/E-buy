import React,{useState} from 'react'
// import Login from '../components/LoginInput/Login'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../components/Firebase/firebase';

function RegisterPage() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register= async (e)=>
        {
            try{
                const user=createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
            }
            catch(err){
                console.error(err.message)
            }
            e.preventDefault()
        } 


    function handleEmail(event){
        setRegisterEmail(event.target.value)
    }
    function handlePassword(event){
        setRegisterPassword(event.target.value)
    }
    console.log(registerEmail)
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-20 bg-blue-200 mx-[500px]'>
      <h1 className='py-10 text-4xl font-bold text-[#008ECC] uppercase '>Register</h1>
    
    <form onSubmit={register}> 
    <div>
      
    <div className='flex py-10 ' >
        <p className='m-2 text-[#008ECC] font-bold text-xl'>Email</p>
        <input type='email'className='border-2 ' onChange={handleEmail}></input>
        </div>
      <div className='flex'>
        <p className='m-2 text-[#008ECC] font-bold text-xl'>Password</p>
        <input type='password' className='border-2'onChange={handlePassword}></input>
      </div>
    </div>
      <div className='flex py-10 px-2 mt-3 mb-5'>
        <button type='submit' className=' bg-orange-500 text-white  border-4 px-5 py-3 mx-2 uppercase'>Register</button>
      </div>
    </form> 
    </div>
    </div>
  )
}

export default RegisterPage