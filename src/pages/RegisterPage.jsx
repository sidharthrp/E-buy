import React,{useState} from 'react'
// import Login from '../components/LoginInput/Login'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../components/Firebase/firebase';
import google from '/SignIn/google.png'

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
      <div className='flex flex-col items-center justify-center mt-20'>
      <h1 className='py-10 text-4xl'>Get Started Now</h1>
    
    <form onSubmit={register}> 
      <div className='py-10 w-[404px] ' >
        <p className='mt-2 text-[16px]'>Email Address</p>
        <input type='email'className='border-2  w-full h-[32px] rounded-lg' onChange={handleEmail}></input>
      </div>
      <div className=''>
        <p className='mt-2  text-[16px]'>Password</p>
        <input type='password' className='border-2 w-full h-[32px] rounded-lg'onChange={handlePassword}></input>
      </div>
      <div className=' pt-10 mt-3 mb-10'>
        <button type='submit' className=' bg-[#3A5B22] text-white rounded-lg h-[32px] uppercase w-full'>Register</button>
      </div>
      <p className=' text-center'>Or</p>
      <div className='flex mt-4 gap-2'>
        <div className='flex border-2 rounded-lg w-[202px]'>
          <img src={google}></img>
          <button className='text-[14px] px-3 text-center'>Sign in with Google</button>
        </div>
        <div>
          <button className='text-[14px] px-2 py-1 text-center border-2 rounded-lg'>Have an Account? Sign In</button>
        </div>
      </div>
    </form> 
    </div>
    </div>
  )
}

export default RegisterPage