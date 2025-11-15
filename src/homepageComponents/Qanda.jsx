import {useState,React } from "react";
import x from "../assets/x.svg";
const Qanda = ({id,question,ans}) => {

 const [isSelected, setIsSelected] = useState(false);

 const handleIsSelected=()=>{
   setIsSelected(prev=>!prev);
 }
 
  return (
    <li className={`pl-4 pr-1 py-1 w-full mb-2  rounded-3xl    ${isSelected?  'bg-[#FFFFFF] border border-[#0000001C]':"bg-[#F8F0FFA6] border border-[#E8D1FF]" } `}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl w-[90%]  text-[#454545] font-medium">
         {question}
        </h1>
        <button className=" w-fit  text-4xl" onClick={handleIsSelected} type="button">
          <img className={` p-2 ${isSelected?"bg-[#F5EAFF]":'bg-[#FFFFFF]'}  rounded-full`} src={x} alt="X" />
        </button>
      </div>
      {isSelected && <p className={` mt-4 text-base text-[#454545] `}>
       {ans}
      </p>}
    </li>
  );
};

export default Qanda;
