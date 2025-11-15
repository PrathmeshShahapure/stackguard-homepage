import React, { useState } from "react";
import logo from "../assets/icons/Weblogo.svg";
import { IoIosMenu,IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [isOpen,setIsOpen]=useState(false);
  return (
    <> 
    <nav className="font-dmsans  px-4 md:px-10 text-lg    bg-[white] flex items-center justify-between  h-9 my-5 ">
      
      <a className="flex items-center gap-1 outline-none" href="/"><img src={logo} alt="logo" /> StackGuard</a>
        
     
      <div className="hidden   md:flex gap-5">
        <a className="text-[#817D7D]" href="">
          Product
        </a>
        <a className="text-[#817D7D]" href="">
          Resources
        </a>
        <a className="text-[#817D7D]" href="">
          About us
        </a>
      </div>

      <div className=" hidden md:flex items-center gap-5">
        <a className="" href="">Contack us</a>
        <button className="max-sm:text-xs   text-sm p-3 rounded-full text-white bg-[#44087D]" type="button">Book a demo </button>
      </div>
      
      <button className="md:hidden " 
       onClick={()=>{ setIsOpen(prev=> !prev)} } >
        { isOpen ? <IoMdClose size={24} /> : <IoIosMenu size={24}/> }
       
      </button>
       
    </nav>

     {isOpen && (
        <div className="md:hidden w-full x-1 mt-3 flex flex-col gap-3 bg-white border-t border-gray-200 py-4">
          <a href="#" className="px-4">Home</a>
          <a href="#" className="px-4 text-[#817D7D]">Product</a>
          <a href="#" className="px-4 text-[#817D7D]">Resources</a>
          <a href="#" className="px-4 text-[#817D7D]">About us</a>
          <a href="#" className="px-4 text-[#817D7D]">Contact us</a>
          <button
            className="mt-2  mx-4 text-base py-2 rounded-full text-white bg-[#44087D]"
            type="button"
          >
            Book a demo
          </button>
        </div>
      )}
      </>
  );
};

export default Navbar;
