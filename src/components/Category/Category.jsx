import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Category({onClick}) {
    const [data,setData] = useState();
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])


    return (
    <>
        {data &&
        <div className='flex justify-evenly mt-5'>
        {data.map((entry,index)=>{
            return(
                <button onClick={()=>onClick(entry)} className='bg-[#F3F9FB] rounded-xl p-1 hover:text-[#008ECC] capitalize' key={index}>{entry}</button>
            )
        })}
        </div>
        }
    
    </>
  )
}

export default Category