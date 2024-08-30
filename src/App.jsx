import React,{useState} from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Products from './components/Products/Products'

function App() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (value) => {
    setSelectedValue(value);
    console.log("Value from Category:", value);
  };

  return (
    <div>
      <Header></Header>
      <Category onClick={handleClick}></Category>
      <Banner></Banner>
      <Products isSelected= {selectedValue ? selectedValue : false}></Products>
    </div>
  )
}

export default App