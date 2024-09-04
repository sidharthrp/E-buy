import React from "react";
import cartIcon from "/HeaderImages/DropDown.png";
import SearchIcon from "/HeaderImages/Search.png";
import userIcon from "/HeaderImages/user.png";
import addCart from "/HeaderImages/Stroke-5.png";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="pt-5 flex items-center justify-around">
      <div className="flex">
        <img src={cartIcon} alt="" className="w-[48px] h-[48px]" />
        <span className="w-[138px] h-[28px] py-3 font-bold text-2xl text-[#008ECC] pl-3 cursor-pointer" onClick={()=>navigate("/",)}>E-BUY</span>
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
        <span className="mx-2 cursor-pointer" onClick={()=>navigate("/login",)} >Log In</span>

        <img src={addCart} className="mx-1 h-4 w-5 " />
        <span className="cursor-pointer">Cart</span>
      </div>
    </div>
  );
};

export default Header;