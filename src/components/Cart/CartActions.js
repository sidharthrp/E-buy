
import {db} from '../Firebase/firebase' 
import {addDoc, collection, doc} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

export const addToCart = async(product)=>{
    const auth = getAuth();  {/* For authenticating and adding to cart wrt the user. */}
    const user = auth.currentUser;
    console.log(product.title)
    if(user){
        try{
            const cartCollection = doc(db,'Cart',user.uid) //user id also added
            const cartItemsRef = collection(cartCollection, 'CartItems');
            await addDoc(cartItemsRef,{
                pId:product.id,
                pName:product.title,
                price:product.price,
                imageUrl:product.image
            })
            console.log("Product Added Successfully")
        }catch(error){
            console.error("Error Adding product")
        }
    }
}