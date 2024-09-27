import React, { useEffect, useState } from 'react'
import {db} from '../components/Firebase/firebase'
import {getDocs, collection} from 'firebase/firestore'
import deleteIcon from '/Cart/delete.png'
import { removeCartItem } from '../components/Cart/RemoveCart';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
    const [items, setItems] = useState([]);
    let totalPrice = 0
    let discount = 1
    let finalPrice = 0
    let delivery = 10
    const navigate = useNavigate()
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

    const handleBuy = () => {  //Sending state while navigating and will retrieve using useLocation
        navigate('/payment', {
            state: {
                items,
                finalPrice
            }
        })
    }

    return (
    <>
    <div className='flex flex-col md:flex-row  md:justify-around items-center md:items-start  mt-20'>
        <div className=''>
            <h1 className='font-bold text-xl'>Shopping Cart</h1>
            <p>{items.length>0 && `You have ${items.length}  items in your cart`}</p>
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
            
            </div>: 
                <div>
                <p className='py-5'>Your Cart is Empty</p>
                <p>Browse products to find something you like</p>
                </div>
            }
        </div>
        
        
        <div className=' p-10 w-[400px]'>
        {items.length>0 && <div className='rounded-xl p-5 shadow-lg'>
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
                }
        </div>

    </div>
    <div className='flex justify-center mt-6'>
        <button
          className='bg-green-600 rounded-lg p-2 text-white hover:text-black shadow-lg'
          onClick={handleBuy}
        >
          Proceed to Buy
        </button>
      </div>
    </>
    )
}

export default ShoppingCart