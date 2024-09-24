import { getAuth } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../components/Firebase/firebase'

function Orders() {
  const [orderData, setOrderData] = useState()

  useEffect(()=>{
    const fetchOrderData = async() =>{
        const auth = getAuth()
        const user = auth.currentUser
        if(user){
            try{
                const orderCollection = collection(db,'Orders')
                const q = query(orderCollection, where('userId','==',user.uid)) // using query to get the correct user
                const querySnapshot = await getDocs(q)

                const fetchedOrders = querySnapshot.docs.map(doc => ({
                    id: doc.id,      
                    ...doc.data()     // Spread all the Firestore fields into the object
                }));
                setOrderData(fetchedOrders)
                console.log("Order Fetched Successfully")
                console.log(orderData)
            }
            catch(err){
                console.error(err)
            }
        }
    }
    fetchOrderData()
  },[])
  return (
    <div >
        <h1 className='pt-20 text-center text-2xl font-bold pb-10'>Orders</h1>
        <div className='flex flex-col items-center justify-center gap-5 '>
        {orderData &&
            orderData.map(order => (
                <div className='w-[500px] rounded-xl p-2 shadow-lg' key={order.id}>
                    <h2 className=''>Order ID: {order.id}</h2>
                    
                    <p>Total Amount: ${order.totalAmount}</p>
                    <h3 >Items:</h3>
                        <ul>
                            {order.items.map(item => (
                                <li className='font-bold' key={item.id}>
                                    {item.name.length>40?item.name.substring(0,40)+'...':item.name} - ${item.price}
                                </li>
                            ))}
                        </ul>
                </div>
            ))
            
        }
        </div>
    </div>
  )
}

export default Orders