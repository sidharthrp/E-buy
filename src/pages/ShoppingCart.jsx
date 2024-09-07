import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ShoppingCart() {
  const [items, setItems] = useState();
  let totalPrice = 0
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
                    return(
                    <div className='flex gap-10 my-10 border-2 rounded-xl p-2' key={index}>
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
            <button className='bg-green-600 rounded-lg p-2 text-white'>Proceed to Buy</button>
            </div>: <p>No Items in Cart</p>}
        </div>
        <div className='border-2 p-10'>
            <h1 className='p-10 font-bold'>Price Details</h1>
            <p className='py-2'>Price({items&& items.length} items) </p>
            <h1 className='py-2 font-bold'>$ {totalPrice}</h1>
        </div>
    </div>
  )
}

export default ShoppingCart