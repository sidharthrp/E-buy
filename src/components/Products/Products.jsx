import axios from 'axios'
import React, { useEffect, useState} from 'react'

function Products({isSelected}) {
    console.log(isSelected)
    const url= isSelected?`https://fakestoreapi.com/products/category/${isSelected}` : 'https://fakestoreapi.com/products'
    const [data,setData] = useState()
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[isSelected])
  return (
    <div className='mt-10'>
        <h1 className=' m-10 text-2xl font-bold capitalize text-[#008ECC]'>{isSelected?isSelected:"Products"}</h1>
        {data &&
         <div className="grid grid-cols-4 grid-rows-5 gap-4 overflow-hidden">
            {data.map((entry,index)=>{
                return(
                    <div key={index} className='flex flex-col items-center m-1  '>
                        <img  className='h-32 w-28  cursor-pointer hover:scale-110' src={entry.image}></img>
                        <h1 className='p-2 text-sm cursor-pointer'>{entry.title.length>40?entry.title.substring(0,40)+'...':entry.title}</h1>
                        <h2 className=' font-bold text-[#388e3c]'>${entry.price}</h2>
                        <h2 className=''>{entry.rating.rate}⭐ ({entry.rating.count})</h2>
                    </div>
                )
            })
            }
            </div>
        }
    </div>
  )
}

export default Products