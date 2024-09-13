import { signOut,getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useSignOut = () => {
    const navigate = useNavigate()

    const handleSignOut = async() => {
        const auth = getAuth()
        try{
            await signOut(auth)
            console.log("Signed Out successfully")
            navigate("/")
        }catch(error){
            console.error("Error :",error)
        }
    }

    return handleSignOut
}