import React from "react";
import cartIcon from "/HeaderImages/DropDown.png";
import SearchIcon from "/HeaderImages/Search.png";
import userIcon from "/HeaderImages/user.png";
import addCart from "/HeaderImages/Stroke-5.png";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useSignOut } from "../Authentication/Logout";


const Header = ({onResetCategory}) => {
  const auth = getAuth()
  const user = auth.currentUser
  const navigate = useNavigate()
  const handleSignOut = useSignOut()
  const handleNavigation = () => {
    onResetCategory();
    navigate('/');
  }
  return (
    <div className="sticky top-0 z-50 pt-5 bg-white flex items-center justify-around pb-2"> {/* Sticky top-0 z-50 fixes header to the top. */}
      <div className="flex">
        <img src={cartIcon} alt="" className="w-[48px] h-[48px]" />
        <span className="w-[138px] h-[28px] py-3 font-bold text-2xl text-[#008ECC] pl-3 cursor-pointer" onClick={handleNavigation}>E-BUY</span>
      </div>
      <div className="relative flex items-center">
        <img
          src={SearchIcon}
          className="absolute left-3 w-5 h-5  cursor-pointer "
          alt="search"
        />
        <input
          className="pl-10 w-[550px] h-[48px] flex items-center justify-between border border-gray-300 rounded-md"
          type="text"
          placeholder="Search for Products, Brands and More"
        />
      </div>
      <div className="relative flex items-center justify-between px-2 ">
        <img src={userIcon} alt="" className=" h-6 w-6 " />
        {user?<>
          <span>{user.displayName}</span>
          <button className="p-2" onClick={handleSignOut}>LogOut</button>
        </>
        :<span className="mx-2 cursor-pointer" onClick={()=>navigate("/login",)} >Log In</span>
        }
        <img src={addCart} className="mx-1 h-4 w-5 " />
        <span className="cursor-pointer" onClick={()=>navigate('/cart')}>Cart</span>
      </div>
    </div>
  );
};

export default Header;