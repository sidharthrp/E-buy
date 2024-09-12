import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {db} from '../components/Firebase/firebase'
import {getDocs, collection} from 'firebase/firestore'
import deleteIcon from '/Cart/delete.png'
import { removeCartItem } from '../components/Cart/RemoveCart';
import { getAuth } from 'firebase/auth';

function ShoppingCart() {
    const [items, setItems] = useState([]);
    let totalPrice = 0
    let discount = 1
    let finalPrice = 0
    let delivery = 10
    useEffect(()=>{
        const fetchCartData = async() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if(user){
        try{
            const cartCollection = collection(db,'Cart',user.uid,'CartItems')
            const querySnapshot = await getDocs(cartCollection)
            const cartItems = querySnapshot.docs.map(doc=>{
                const data = doc.data();
                console.log(data)
                return{
                    id:doc.id,
                    title:data.pName,
                    price:data.price,
                    image:data.imageUrl
                }
            })
            console.log("Data Fetched")
            setItems(cartItems)
        }
        catch(error){
            console.error("Error fetching data")
        }
        }
        }
        fetchCartData();
    },[])  
    return (
    <div className='flex justify-around  mt-20'>
        <div className=''>
            <h1 className='font-bold text-xl'>Shopping Cart</h1>
            <p>You have {items.length>0?items.length : 0} items in your cart</p>
            {items.length>0 ? <div className='my-10 '>
                {items.map((item)=>{
                    totalPrice+=parseInt(item.price)
                    {discount=Math.floor(totalPrice*.1)}
                    {finalPrice=totalPrice-discount+delivery}
                    return(
                    <div className='flex text-left gap-5 my-10  rounded-xl p-2 shadow-lg' key={item.id}>
                    <img className=' h-28 w-24' src={item.image}></img>
                    <div className='flex items-center'>
                        <div>
                        <h1 className='font-bold'>{item.title}</h1>
                        <h1  className='font-bold'>${item.price}</h1>
                        <h1>Quantity - 1</h1>
                        <img className='h-5 my-2 cursor-pointer'src={deleteIcon} onClick={()=>removeCartItem(item.id, setItems)}/>   {/*Functionality written in RemoveCart */}
                        </div>
                    </div>
                    
                    </div>
                )
                }
                )}
            <button className='bg-green-600 rounded-lg p-2 text-white hover:text-black shadow-lg'>Proceed to Buy</button>
            </div>: <p>No Items in Cart</p>}
        </div>
        
        <div className=' p-10 '>
            <div className='rounded-xl p-5 shadow-lg'>
                <h1 className='p-5 text-xl'>Price Details</h1>
                <div className='flex justify-between'>
                    <p className='py-2'>Price({items&& items.length} items) </p>
                    <h1 className='py-2 font-bold'>${totalPrice}</h1>
                </div>
                <div className='flex justify-between'>
                    <p className='py-2'>Discount </p>
                    
                    <h1 className='py-2 font-bold'>-${discount}</h1>
                </div>
                <div className='flex justify-between'>
                    <p className='py-2'>Delivery Charge </p>
                    <h1 className='py-2 font-bold'>${delivery}</h1>
                </div>
                <hr></hr>
                <div className='flex pt-3 justify-between'>
                    <p className='py-2'>Final Price </p>
                    
                    <h1 className='py-2 font-bold text-green-500'>${finalPrice}</h1>
                </div>
            
            </div>
        </div>
    </div>
    )
}

export default ShoppingCart