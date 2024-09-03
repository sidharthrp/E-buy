import React,{useState} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Layout from './pages/Layout'
import LoginPage from './pages/LoginPage'


function App() {
return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element= {<HomePage />}></Route>
      <Route path=':id' element={<ProductPage />}></Route>  
      <Route path='/login' element={<LoginPage />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App