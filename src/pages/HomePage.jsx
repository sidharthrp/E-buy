import React,{useState} from 'react'
import Header from '../components/Header/Header'
import Category from '../components/Category/Category'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import { useOutletContext } from 'react-router-dom'

function HomePage() {
    const {selectedValue, setSelectedValue} = useOutletContext(); // instead of state, we use the outlet context

    const handleClick = (value) => {
      setSelectedValue(value);
      console.log("Value from Category:", value);
    };
  
    return (
      <div>
        <Category onClick={handleClick}></Category>
        <Banner></Banner>
        <Products isSelected= {selectedValue ? selectedValue : false}></Products>
      </div>
    )
}

export default HomePage