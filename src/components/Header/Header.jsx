import React from "react";
import cartIcon from "/HeaderImages/DropDown.png";
import SearchIcon from "/HeaderImages/Search.png";
import userIcon from "/HeaderImages/user.png";
import addCart from "/HeaderImages/Stroke-5.png";

const Header = () => {
  return (
    <div className="pt-5 flex items-center justify-around">
      <div className="flex">
        <img src={cartIcon} alt="" className="w-[48px] h-[48px]" />
        <span className="w-[138px] h-[28px] py-3 font-bold text-2xl text-[#008ECC] pl-3">E-BUY</span>
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
        <span className="mx-2 ">Log In</span>

        <img src={addCart} className="mx-1 h-4 w-5" />
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Header;