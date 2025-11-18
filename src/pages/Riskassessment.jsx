import React from "react";

const Riskassessment = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="mt-[220px] font-dmsans  ">
        <div className="  mx-[54px]  flex justify-between">
          <div className="w-[40%] font-medium">
            <h1 className="text-[48px] leading-none">
              The most advanced risk assessment in the industry for free
            </h1>
            <ul className="mt-5 text-[20px] list-disc list-inside">
              <li>Lorem Ipsum has been the industry's </li>
              <li>Lorem Ipsum has been the industry's </li>
              <li>Lorem Ipsum has been the industry's </li>
              <li>Lorem Ipsum has been the industry's </li>
            </ul>
          </div>
          <div className=" w-[50%] p-[32px] border border-[#CCCCCC]">
            <h1 className="text-[32px] mb-[39px] text-center font-medium">
              Start your free data risk assessment
            </h1>
            <form className="w-full" onSubmit={handleSubmit}>
              <label className=" ">
                <h1 className="font-medium text-[18px]">Full name </h1>
                <input
                  className="px-5 mb-6 w-full h-[53px]  rounded-xl bg-[#F7F6F6] text-[17px] border border-[#DBDBDB] "
                  type="text"
                  placeholder="First & last name"
                />
              </label>

              <label className="  ">
                <h1 className="font-medium text-[18px]">Email ID </h1>
                <input
                  className="px-5 mb-6 w-full h-[53px]  rounded-xl bg-[#F7F6F6] text-[17px] border border-[#DBDBDB] "
                  type="email"
                  placeholder="abcd@gmail.com"
                />
              </label>

              <label className="  ">
                <h1 className="font-medium text-[18px]">Company name</h1>
                <input
                  className="px-5 mb-6 w-full h-[53px]  rounded-xl bg-[#F7F6F6] text-[17px] border border-[#DBDBDB] "
                  type="text"
                  placeholder="Example company "
                />
              </label>

              <label className=" ">
                <h1 className="font-medium text-[18px]">Job title </h1>
                <input
                  className="px-5 mb-6 w-full h-[53px]  rounded-xl bg-[#F7F6F6] text-[17px] border border-[#DBDBDB] "
                  type="text"
                  placeholder="Example job title"
                />
              </label>

              <label className="flex justify-between ">
                <input
                  className=" w-[19px] h-[19px] border border-[#C6C6C6] "
                  type="checkbox"
                  placeholder="Example job title"
                />
                <h1 className="text-[14px] leadin-none">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries
                </h1>
              </label>

               <button className=" w-full mt-[32px] h-[61px]   bg-[#44087D] text-[#FFFFFF] text-[24px] rounded-xl " type="submit">
                Submit
               </button>
            </form>
          </div>
        </div>
              <div className="w-full mt-60 h-25 bg-[repeating-linear-gradient(to_right,#C0C0C0_0px,#C0C0C0_2px,transparent_1px,transparent_8px)] border border-[#C0C0C0]"></div>
      </div>
    </>
  );
};

export default Riskassessment;
