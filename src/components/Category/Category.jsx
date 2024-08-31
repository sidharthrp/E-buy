import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Category({onClick}) {
    const [data,setData] = useState();
    const [activeCategory, setActiveCategory] = useState();
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])

    function handleCategoryClick(category){
        onClick(category)
        setActiveCategory(category)
    }

    let categoryCSS= 'bg-[#F3F9FB] rounded-xl p-1 hover:text-[#008ECC] capitalize'
    let activeBtnCSS = 'text-[#008ECC] rounded-xl p-1 capitalize underline font-bold'

    return (
    <>
        {data &&
        <div className='flex justify-evenly mt-5'>
        {data.map((entry,index)=>{
            return(
                <button onClick={()=>handleCategoryClick(entry)} className={activeCategory===entry?activeBtnCSS:categoryCSS} key={index}>{entry}</button>
            )
        })}
        </div>
        }
    
    </>
  )
}

export default Category