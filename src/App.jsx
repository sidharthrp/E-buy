import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Products from './components/Products/Products'

function App() {
  return (
    <div>
      <Header></Header>
      <Category></Category>
      <Banner></Banner>
      <Products></Products>
    </div>
  )
}

export default App