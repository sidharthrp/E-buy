import { db } from "../Firebase/firebase";
import { collection, addDoc } from 'firebase/firestore';

const completeOrder = async(cartItems, finalPrice, user) => {
    console.log("Inside complete order")
    try{
    const orderData = {
        userId : user.uid,
        items: cartItems.map(item => ({
            id: item.id,
            name: item.title,
            price:item.price
        })),
        totalAmount : finalPrice,
        orderDate : new Date()
    }
    await addDoc(collection(db, 'Orders'),orderData)
    console.log("Order saved succesfully")
    }catch(err){
        console.error(err)
    }
}

export default completeOrder