import {db} from '../Firebase/firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

export const removeCartItem = async(id, setItems) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
        try{
            const docItem = doc(db, 'Cart', user.uid,'CartItems',id)
            await deleteDoc(docItem)

            setItems((prev) => prev.filter((item) => item.id !==id))
            console.log("Item removed successfully")
        }catch(error){
            console.error("Item not removed",error)
        }
    }
}