import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function Layout() {
  const [selectedValue, setSelectedValue] = useState('')
  const handleCategoryReset = () =>{
    setSelectedValue('')
  }
  return (
    <div className="min-h-screen flex flex-col">
        <Header onResetCategory = {handleCategoryReset} /> {/*Passing the function to toggle reset when pressed */}
        <div className="flex-grow">
        <Outlet context={{selectedValue, setSelectedValue}} /> {/*the resetted value is passed as context to the Homepage if home button is presse*/}
        </div>
        <Footer />
    </div>
  )
}

export default Layout