import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/Firebase/firebase';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log('Logged in as:', user);
            console.log(auth.currentUser.email)
            navigate("/")
        } catch (err) {
            setError(err.message);
            console.error('Error logging in:', err.message);
        }
    };

    function handleEmail(event) {
        setLoginEmail(event.target.value);
    }

    function handlePassword(event) {
        setLoginPassword(event.target.value);
    }

    return (
        <div className='flex flex-col items-center justify-center mt-20 bg-blue-200 mx-[500px]'>
            <h1 className='py-10 text-4xl font-bold text-[#008ECC] uppercase'>Login</h1>
            <form onSubmit={login}>
                <div className='flex py-10'>
                    <p className='m-2 text-[#008ECC] font-bold text-xl'>Email</p>
                    <input
                        type='email'
                        className='border-2'
                        value={loginEmail}
                        onChange={handleEmail}
                    />
                </div>
                <div className='flex'>
                    <p className='m-2 text-[#008ECC] font-bold text-xl'>Password</p>
                    <input
                        type='password'
                        className='border-2'
                        value={loginPassword}
                        onChange={handlePassword}
                    />
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <div className='flex py-10 px-2 mt-3 mb-5'>
                    <button className='bg-green-500 text-white border-4 px-5 py-3 mx-2 uppercase' onClick={()=>navigate("/register")}>Register New User</button>
                    <button type='submit' className='bg-orange-500 text-white border-4 px-5 py-3 mx-2 uppercase'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;