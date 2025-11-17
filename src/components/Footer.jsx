import React from "react";
import footerlogo from "../assets/footerlogo.svg";
import linkedin from "../assets/linkedin.svg";
import ArrowUp from "../assets/ArrowUp.svg";
import { MdOutlineMail,MdLocationOn  } from "react-icons/md";
const Footer = ({ bgclass, btnColor }) => {
  return (
    <div className={`${bgclass}   w-full md:px-10 pt-5 h-[250px]  font-dmsans`}>
      <div className="flex justify-between items-center text-[#FFFFFF] ">
        <div className="flex items-center gap-2">
          <img className="w-10" src={footerlogo} alt="logo" />
          <h1 className="text-xl font-normal"> StackGuard</h1>
        </div>
        <button
          className={`${btnColor}  ${btnColor === "bg-[#F6CB12]"? "font-semibold":"font-normal" } p-2 px-4 rounded-full font-inter text-xs  text-[#292B22]`}
          type="button"
        >
          Make an appointment
        </button>
      </div>
      <hr className="my-5 text-[#FFFFFF]" />
      <div className="grid grid-cols-4 text-[#FFFFFF] text-xs">
        <div className=" spacing-y-10">
          <h1 className="">Address</h1>
          <p className=" flex items-center  gap-1 my-2"><MdLocationOn className="text-[15px]" /> Singapore </p>
          <p className=" flex items-center gap-1"><MdLocationOn className="text-[15px]"  />India </p>

          <p className="mt-4">© 2025 — Stackgaurd</p>
        </div>
        <div className="leading-loose">
          <h1 className="">Info</h1>
          <p className="mt-2">Platform </p>
          <p className="">About Us </p>
          <p className="">Contact Us </p>
        </div>
        <div className="">
          <h1 className="">Contact us</h1>
          <p className="flex gap-1 items-center mt-2"> <MdOutlineMail />  contact@stackguard.io</p>
        </div>
        <div className=" justify-self-end flex flex-col items-center gap-4 ">
          <img className="w-8" src={linkedin} alt="linkedIn" />
          <img
            className="p-5 px-6 text-lg bg-white rounded-full"
            src={ArrowUp}
            alt="goUP"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
