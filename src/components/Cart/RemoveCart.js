import {db} from '../Firebase/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

export const removeCartItem = async(id, setItems) => {
    try{
        const docItem = doc(db, 'Cart', id)
        await deleteDoc(docItem)

        setItems((prev) => prev.filter((item) => item.id !==id))
        console.log("Item removed successfully")
    }catch(error){
        console.error("Item not removed",error)
    }
}