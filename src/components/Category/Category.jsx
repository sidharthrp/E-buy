import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';

function Category({onClick, isSelected }) {
    const [data,setData] = useState();
    const [activeCategory, setActiveCategory] = useState();
    
    

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])

    useEffect(() => {
        if (!isSelected) {
          setActiveCategory(null);
        }
      }, [isSelected]);

    function handleCategoryClick(category){
        onClick(category)
        setActiveCategory(category)
    }

    let categoryCSS= 'bg-[#F3F9FB] rounded-xl p-1 hover:text-[#008ECC] capitalize hover:bg-white hover:font-bold'
    let activeBtnCSS = 'text-[#008ECC] rounded-xl p-1 capitalize underline font-bold '

    return (
    <>
        {data &&
        <div className='flex justify-evenly mt-5'>
        {data.map((entry,index)=>{
            return(
                <motion.button whileHover={{scale:1.1}} layoutId={`tab-indicator-${index}`} onClick={()=>handleCategoryClick(entry)} className={activeCategory===entry?activeBtnCSS:categoryCSS} key={index}>{entry}</motion.button>
            )
        })}
        </div>
        }
    
    </>
  )
}

export default Category