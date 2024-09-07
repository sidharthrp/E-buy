import React, { useState } from 'react';
// import Login from '../components/LoginInput/Login';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/Firebase/firebase';
import google from '/SignIn/google.png';
import bg from '/SignIn/bg.jpg';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const navigate = useNavigate()


    const register = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user); // Log user details (optional)
        } catch (err) {
            console.error(err.message);
        }
    };

    function handleEmail(event) {
        setRegisterEmail(event.target.value);
    }

    function handlePassword(event) {
        setRegisterPassword(event.target.value);
    }

    return (
        <div className="relative h-screen flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg})`,
                    filter: 'blur(8px)',
                    opacity: 0.7,
                    zIndex: -1,
                }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center bg-white bg-opacity-80 p-10 rounded-lg shadow-md max-w-md mx-auto">
                <h1 className="py-10 text-4xl text-center">Get Started Now</h1>

                <form onSubmit={register} className="w-full">
                    <div className="py-6">
                        <p className="text-[16px]">Email Address</p>
                        <input
                            type="email"
                            className="border-2 w-full h-[32px] rounded-lg p-2"
                            onChange={handleEmail}
                        />
                    </div>

                    <div className="py-6">
                        <p className="text-[16px]">Password</p>
                        <input
                            type="password"
                            className="border-2 w-full h-[32px] rounded-lg p-2"
                            onChange={handlePassword}
                        />
                    </div>

                    <div className="py-6">
                        <button
                            type="submit"
                            className="bg-[#3A5B22] text-white rounded-lg h-[32px] uppercase w-full hover:text-black">
                                Register
                        </button>
                    </div>

                    <p className="text-center">Or</p>

                    <div className="flex mt-4 gap-2">
                        <div className="flex items-center border-2 rounded-lg w-[202px] bg-white">
                            <img src={google} alt="Google Icon" className="h-6 w-6" />
                            <button className="text-[14px] px-3 text-center hover:text-[15px]">Sign in with Google</button>
                        </div>
                        <div className='bg-white'>
                            <button className="text-[14px] px-2 py-1 text-center border-2 rounded-lg hover:text-[15px]" onClick={()=>navigate("/login")}>
                                Have an Account? Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
