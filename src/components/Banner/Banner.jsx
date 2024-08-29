import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Banner() {
    const [data, setData] = useState()
    const [index,setIndex] = useState(0)
    
    useEffect(()=>{
        
        axios.get(`https://fakestoreapi.com/products?limit=5`)
        .then((res)=>{
            console.log(res.data)
            // let randomNo=Math.floor(Math.random()*res.data.length)
            // console.log(randomNo)
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
    <div>
        {/* {data.map((entry,id)=>{
            return (<>
                <h1>{entry.category}</h1>
                <img className=' w-[1200px] h-[316px] object-contain bg-gradient-to-r from-cyan-500 to-blue-500' src={entry.image}></img>
                </>
            )
        })} */}
        {data?
        <div className=' mx-40 w-[full] h-[300px] flex items-center'>
            {/* <h1>{data[index].category}</h1> */}
            <div className=' relative md:w-[700px] lg:w-full h-[216px]'> 
                {/* <h1>{data[index].category}</h1> */}
                <img className='w-full h-[216px]  object-contain bg-gradient-to-r from-blue-400 from-5% via-white via-50% to-blue-400 to-100%' src={data[index].image}></img> 

                {/* <div className='flex justify-between items-center bg-gradient-to-r from-blue-500 via-white to-blue-500'> */}
                 <div className="absolute bottom-4 left-4 text-black uppercase text-xl font-bold">
                        {data[index].category}
                </div>
                <div className="absolute bottom-24 left-56 text-black text-5xl font-bold uppercase">
                        Best Deals
                </div>
                <div className="absolute bottom-14 left-60 text-black text-2xl font-bold">
                        Upto 80% off.
                </div>
                <button onClick={prevImage}
                        className=" absolute top-1/2 left-4 transform -translate-y-1/2  text-black px-3 py-1 rounded h-20 bg-white">
                        <FaChevronLeft />
                </button>
                <button onClick={nextImage} 
                        className=" absolute top-1/2 right-4 transform -translate-y-1/2 text-black px-3 py-1 h-20 bg-white rounded">
                        <FaChevronRight />
                </button>
                
            </div>
        </div>:null}
        
    </div>
  )
}

export default Banner