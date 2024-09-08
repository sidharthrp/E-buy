import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ShoppingCart() {
  const [items, setItems] = useState();
  let totalPrice = 0
  let discount = 1
  let finalPrice = 0
  let delivery = 10
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products?limit=2`)
    .then((res)=>{
        setItems(res.data)
    })
  },[])  
  return (
    <div className='flex justify-around  mt-20'>
        <div className=''>
            <h1 className='font-bold text-xl'>Shopping Cart</h1>
            <p>You have items in your cart</p>
            {items ? <div className='my-10'>
                {items.map((item,index)=>{
                    totalPrice+=parseInt(item.price)
                    {discount=Math.floor(totalPrice*.1)}
                    {finalPrice=totalPrice-discount+delivery}
                    return(
                    <div className='flex gap-10 my-10  rounded-xl p-2 shadow-lg' key={index}>
                    <img className=' h-30 w-20' src={item.image}></img>
                    <div>
                        <h1 className='font-bold'>{item.title}</h1>
                        <h1  className='font-bold'>${item.price}</h1>
                        <h1>Quantity - 1</h1>
                        <h1>Remove</h1>
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