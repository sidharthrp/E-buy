import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../components/Cart/CartActions'
import { getAuth } from 'firebase/auth'

function ProductPage() {
  const {id} = useParams()
  const [productDtls, setProductDtls] = useState()
  const [add,setAdd] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth()
  const user = auth.currentUser

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
        console.log(res.data)
        setProductDtls(res.data)
    }
    )
  },[])
  function handleAddToCart(){
    if(user){
    addToCart(productDtls)
    setAdd(true)
    setTimeout(()=> {
      setAdd(false)
    },2000)
    }
    else{
      navigate('/login')
    }
  }
  return (
    <div>
        {productDtls && 
        <div className='flex flex-col md:flex-row justify-around items-start sm:justify-center sm:items-center mt-10'>
            <div className='p-16 border-2 m-8'>
                <img src={productDtls.image} className=' h-96 w-72'></img>
                <div className='mt-10 flex justify-between items-center'>
                    <button className='bg-amber-500 text-white h-12 uppercase p-2 border-4' onClick={handleAddToCart}>Add to Cart</button>
                    <button className='bg-green-500 text-white h-12 uppercase p-2 border-4'>Buy Now</button>
                    
                </div>
                {add && <p className='text-green-500 my-5 font-bold'>Item Added to Cart</p>}
            </div>
            <div className='m-8 w-[450px] lg:w-[900px]'>
                <h1 className=' text-3xl'>{productDtls.title}</h1>
                <p className='py-2'>{productDtls.rating.rate}⭐ ({productDtls.rating.count} ratings)</p>
                <h1 className='text-4xl mt-16 font-bold'>${productDtls.price} </h1>
                <p className='mt-10'>{productDtls.description}</p>
               
            </div>
        </div>}
    </div>
  )
}

export default ProductPage