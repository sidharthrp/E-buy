
import {db} from '../Firebase/firebase' 
import {addDoc, collection} from 'firebase/firestore'

export const addToCart = async(product)=>{
    console.log(product.title)
    try{
        const cartCollection = collection(db,'Cart')
        await addDoc(cartCollection,{
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