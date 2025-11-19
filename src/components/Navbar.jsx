import React, { useState } from "react";
import logo from "../assets/icons/Weblogo.svg";
import { IoIosMenu,IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen,setIsOpen]=useState(false);
  return (
    <> 
    <nav className="font-dmsans text-[22px] px-4 md:px-10    bg-[white] flex items-center justify-between  h-9 my-5 ">
      
      <Link to="/" onClick={()=>setIsOpen(false)} className="flex items-center gap-1 outline-none" ><img src={logo} alt="logo" /> StackGuard</Link>
        
     
      <div className="hidden   md:flex gap-5">
        <Link  to="/product" className="text-[#817D7D]">
          Platform
        </Link>
        <Link to="/resources"  className="text-[#817D7D]" >
          Resources
        </Link>
        <Link to="/aboutus" className="text-[#817D7D]" >
          About us
        </Link>
      </div>

      <div className=" hidden md:flex items-center gap-5">
        <Link to="/contactus" className="" >Contact us</Link>
        <button className="text-[18px] w-[66px] px-3 py-1 rounded-full text-white bg-[#44087D]" type="button">Risk </button>
      </div>
      
      <button className="md:hidden " 
       onClick={()=>{ setIsOpen(prev=> !prev)} } >
        { isOpen ? <IoMdClose size={24} /> : <IoIosMenu size={24}/> }
       
      </button>
       
    </nav>

     {isOpen && (
        <div className="md:hidden font-dmsans w-full x-1 mt-3 flex flex-col gap-3 bg-white border-t border-gray-200 py-4">
          <Link to="/product" onClick={()=>setIsOpen(false)} className="px-4 text-[#817D7D]">Product</Link>
          <Link to="/resources" className="px-4 text-[#817D7D]">Resources</Link>
          <Link to="/aboutus" className="px-4 text-[#817D7D]">About us</Link>
          <Link to="/contactus" className="px-4 text-[#817D7D]">Contact us</Link>
          <button
            className="mt-2 font-dmsans  mx-4 text-base py-2 rounded-full text-white bg-[#44087D]"
            type="button"
          >
            Risk
          </button>
        </div>
      )}
      </>
  );
};

export default Navbar;
