import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { motion} from 'framer-motion';

function Banner() {
    const [data, setData] = useState([])
    const [index,setIndex] = useState(0)
    const navigate = useNavigate()
    
    useEffect(()=>{
        
        axios.get(`https://fakestoreapi.com/products?limit=5`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
            console.log(data)
        })
    },[]);

    useEffect(() => {
        // Set up the interval for automatic image change
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex === data.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [data]);

    const nextImage = () => {
        setIndex((prevIndex) => {
            if (prevIndex === data.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const prevImage = () => {
        setIndex((prevIndex) => {
            if (prevIndex === 0 ) {
                return data.length-1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    return (
    <div className="hidden lg:block relative w-full h-64 md:h-80 lg:h-96 overflow-hidden" >
        {data.length>0?
        <div className=' mx-40 w-[full] h-[300px] flex items-center'>
            <div className=' relative md:w-[700px] lg:w-full h-[216px]' > 
                <img className='"absolute inset-0 w-full h-[216px]  object-contain bg-gradient-to-r from-[#008ECC] from-5% via-white via-50% to-[#008ECC] to-100% hover:cursor-pointer'
                 
                 src={data[index].image} onClick={()=>navigate(`/${data[index].id}`)} /> 
                    

                 <div className="absolute bottom-4 left-4 text-black uppercase text-xl font-bold">
                        {data[index].category}
                </div>
                <div className="absolute bottom-24 left-20 xl:bottom-24 xl:left-28 text-black text-3xl  xl:text-5xl font-bold uppercase">
                        Best Deals
                </div>
                <div className="absolute bottom-16 left-20  xl:bottom-16 xl:left-28 text-black text-xl  xl:text-3xl ">
                        Upto <strong>80% </strong>off
                </div>
                <button onClick={prevImage}
                        className=" absolute top-1/2 left-4 transform -translate-y-1/2  text-black px-3 py-1 rounded h-20 bg-white hover:scale-110">
                        <FaChevronLeft />
                </button>
                <button onClick={nextImage} 
                        className=" absolute top-1/2 right-4 transform -translate-y-1/2 text-black px-3 py-1 h-20 bg-white rounded hover:scale-110">
                        <FaChevronRight />
                </button>
                
            </div>
        </div>:null}
        
    </div>
  )
}

export default Banner