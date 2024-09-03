import React,{useState} from 'react'
import Header from '../components/Header/Header'
import Category from '../components/Category/Category'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'

function HomePage() {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleClick = (value) => {
      setSelectedValue(value);
      console.log("Value from Category:", value);
    };
  
    return (
      <div>
        {/* <Header></Header> */}
        <Category onClick={handleClick}></Category>
        <Banner></Banner>
        <Products isSelected= {selectedValue ? selectedValue : false}></Products>
      </div>
    )
}

export default HomePage