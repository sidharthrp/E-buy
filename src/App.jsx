import React,{useState} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Layout from './pages/Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShoppingCart from './pages/ShoppingCart'


function App() {
return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element= {<HomePage />}></Route>
      <Route path=':id' element={<ProductPage />}></Route>  
      <Route path='/cart' element={<ShoppingCart />}> </Route>
      </Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App