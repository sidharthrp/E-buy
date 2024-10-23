import React, { useContext } from "react";
import cartIcon from "/HeaderImages/DropDown.png";
import SearchIcon from "/HeaderImages/Search.png";
import userIcon from "/HeaderImages/user.png";
import addCart from "/HeaderImages/Stroke-5.png";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useSignOut } from "../Authentication/Logout";
import { SearchContext } from "../Search/SearchContext";
import { motion } from "framer-motion";


const Header = ({onResetCategory}) => {
  const {setSearchQuery} = useContext(SearchContext)
  const auth = getAuth()
  const user = auth.currentUser
  const navigate = useNavigate()

  const handleSignOut = useSignOut()
  
  const handleNavigation = () => {
    onResetCategory();
    navigate('/');
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
  }

  return (
    <div className="sticky top-0 z-50 pt-5 bg-white flex items-center justify-around pb-2"> {/* Sticky top-0 z-50 fixes header to the top. */}
      {/* <div className="flex"> */}
        {/* <img src={cartIcon} alt="" className="w-[48px] h-[48px]" /> */}
        <motion.span className="w-[138px] h-[28px]  font-bold text-2xl text-[#008ECC] pl-6 cursor-pointer" 
        whileHover={{scale:1.1}} onClick={handleNavigation}>E-BUY</motion.span>
      {/* </div> */}
      <div className="relative flex items-center">
        <img
          src={SearchIcon}
          className="absolute left-3 w-5 h-5  cursor-pointer "
          alt="search"
        />
        <motion.input
          whileTap={{
            borderRadius: "100%"
          }}
          className="hidden sm:block md:w-[300px] pl-10 lg:w-[450px] xl:w-[550px] h-[48px] md-flex items-center justify-between border border-gray-300 rounded-md"
          type="text"
          placeholder="Search for Products, Brands and More"
          onChange={handleInputChange}
        />
      </div>
      <div className="relative flex items-center justify-between px-2 gap-3">
        <motion.div className="flex items-center"
        whileHover={{scale:1.1}}>
        <img src={addCart} className="mx-1 h-4 w-5 " />
        <span className="cursor-pointer hover:text-[#008ECC]" onClick={()=>navigate('/cart')}>Cart</span>
        </motion.div>
        <motion.div className="flex items-center" whileHover={{scale:1.1}}>
        <img src={userIcon} alt="" className=" h-6 w-6 " />
        {user?<div className="group relative">
          <span className='w-19 cursor-pointer hover:text-[#008ECC]'>{user.displayName}</span>
          <div className=" absolute hidden group-hover:block">
            <button className="py-2 text-left whitespace-nowrap bg-[#F3F9FB] w-28 hover:text-[#008ECC]" onClick={()=>navigate('/orders')}>My Orders</button>
            <button className=" hover:text-[#008ECC] bg-[#F3F9FB] w-28 text-left" onClick={handleSignOut}>Logout</button>
          </div>
          {/* <button className="p-2" onClick={handleSignOut}>LogOut</button> */}
        </div>
        :<span className="mx-2 cursor-pointer" onClick={()=>navigate("/login",)} >Login</span>
        }
        </motion.div>
        
      </div>
    </div>
  );
};

export default Header;