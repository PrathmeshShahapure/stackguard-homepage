import React from "react";
import arrowright from "../assets/icons/arrow-right.svg";
import promobanner from "../assets/promobanner.png";

const Promo = () => {
  return (  
    <div className={" w-full h-10 text-[11px] md:text-base text-[#FFFFFF]  font-normal flex justify-center items-center gap-1   bg-cover font-geist"} style={{ backgroundImage: `url(${promobanner})` }} >
      <p>Book a risk free risk assessment with stackguard |</p>
      <a className=" flex cursor-pointer items-center font-light gap-1 ">
        <p>Learn more</p>

        <img className="w-4" src={arrowright} alt="->" />
      </a>
    </div>
  );
};

export default Promo;
