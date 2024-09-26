import React,{useState} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Layout from './pages/Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShoppingCart from './pages/ShoppingCart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import { SearchProvider } from './components/Search/SearchContext'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
return(
  <div>
    <BrowserRouter>
    <SearchProvider>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element= {<HomePage />}></Route>
      <Route path=':id' element={<ProductPage />}></Route>  
      <Route path='/cart' element={<ShoppingCart />}> </Route>
      <Route path='/payment' element={<Checkout />}></Route>
      <Route path='/orders' element={<Orders />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      
      </Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
    </Routes>
    </SearchProvider>
    </BrowserRouter>
  </div>
)
}

export default App