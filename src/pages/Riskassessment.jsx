import React from "react";
import blueBox from "../assets/riskAssPgAssests/bluebox.svg";
import screenshort from "../assets/riskAssPgAssests/screenshort.svg";
import clidpboard from "../assets/riskAssPgAssests/clipboard.svg";
import Group from "../assets/riskAssPgAssests/Group.svg";
import Line from "../assets/riskAssPgAssests/Line.svg";
import linkk from "../assets/riskAssPgAssests/link.svg";
import LineFlip from "../assets/riskAssPgAssests/LineFlip.svg";

import Footer from "../components/Footer";

const Riskassessment = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="mt-[220px] font-dmsans   ">
        <div className="  mx-[54px]  flex justify-between">
          <div className="w-[40%] font-medium">
            <h1 className="text-[48px]  leading-none mb-4">
              StackGuard free NHI <br /> assessment
            </h1>
            <h2 className="text-[24px] leading-none mb-8">
              Unblock your hidden Non-Human Identity (NHI) <br /> risks in 5
              minutes
            </h2>
            <p className="font-regular">
              You can’t protect what you can’t see. Use StackGuard’s (patent
              pending) deep scan technology to discover and remediate sprawling
              NHIs and misconfigured IAM rules and get an audit ready report on
              your machine identity security posture.{" "}
            </p>
          </div>
          <div className=" w-[50%] p-8 rounded-2xl border border-[#CCCCCC]">
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

              <button
                className=" w-full mt-[32px] h-[61px]   bg-[#44087D] text-[#FFFFFF] text-[24px] rounded-xl "
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-20 h-25 bg-[repeating-linear-gradient(to_right,#C0C0C0_0px,#C0C0C0_2px,transparent_1px,transparent_8px)] border border-[#C0C0C0]"></div>

        <div className="mt-24 text-center">
          <h1 className="text-[#383838] text-[38px] font-medium ">
            The invisible threat is your biggest risk
          </h1>
          <p className="text-[20px] leading-snug">
            Your cloud environment is exploding with non-human identities.
            Service accounts, API <br /> keys, certificates, machine identities,
            and now autonomous AI agents are multiplying <br /> faster than your
            security team can track.
          </p>
          <div className="w-[80%] mx-auto grid grid-cols-3 justify-items-center   gap-[60px]   mt-[114px] ">
            <div className="flex flex-col items-center">
              <img src={blueBox} alt="packageBlue" />
              <h1 className="text-[30px] mt-4 leading-none">
                Are they <br />
                over-privileged?
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={blueBox} alt="packageBlue" />
              <h1 className="text-[30px] mt-4 leading-none">
                Are they domant, just waiting to be exploited?
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={blueBox} alt="packageBlue" />
              <h1 className="text-[30px] mt-4 leading-none">
                What’s the <span className="italic">real</span> blast radius if
                one is comprised?
              </h1>
            </div>
          </div>
        </div>

        <div className="  mt-[211px] text-center">
          <h1 className="text-[#383838] text-[38px] font-medium ">
            Stop guessing. Start seeing.
          </h1>
          <p className="text-[20px] font-medium leading-snug">
            StackGuard free NHI risk assessment gives
            <span className="font-normal">
              you the power of enterprise-grade security <br />
              visibility in the 5 minutes it takes to install.
            </span>
          </p>
          <button className="mt-3 text-[#ffffff] bg-[#44087D] text-[21px] px-6 py-2 ">
            Explore StackGuard
          </button>
        </div>

        {/*  */}
        <div className="relative w-full mt-10">
          <div className="absolute top-0 left-0 w-full px-10 z-10">
            <img
              src={screenshort}
              alt="screenshort"
              className="w-[90%] mx-auto border border-[#CFCFCF]"
            />
          </div>

          <div className="h-[550px] bg-[#8B50C4] relative top-100 bg-cover bg-no-repeat "></div>
        </div>

        <div className="w-full mt-100 h-25 bg-[repeating-linear-gradient(to_right,#C0C0C0_0px,#C0C0C0_2px,transparent_1px,transparent_8px)] border border-[#C0C0C0]"></div>

        {/*  */}
        <div className=" mt-20 text-center  ">
          <h1 className="text-[#383838] text-[38px] font-medium ">
            How It Works
          </h1>
          <p className="text-[24px] font-medium leading-none">
            Go from Zero to Full Visibility in 3 Simple Steps <br />
            <span className="font-normal text-[20px]">
              We designed the process to deliver immediate value with zero
              friction.
            </span>
          </p>
          <div className="mt-20 flex justify-center ">
            <div className="w-[15%]  keycontainer flex flex-col items-center  ">
              <div className="w-[100px] h-[100px] mb-4 flex justify-center items-center rounded-full shadow-[3px_4px_8.6px_3px_#D9D9D940]  border border-[#F2F2F2] ">
                <img className=" " src={Group} alt="key" />
              </div>
              <h1 className="font-medium text-[24px]">Request Your Key</h1>
              <p className="text-18px ">
                Fill out the form on this page. We’ll instantly email your free
                12-month license key along with installation instructions.
              </p>
            </div>
            <div>
              {" "}
              <img src={Line} alt="line" />
            </div>
            <div className="w-[20%]   keycontainer flex flex-col items-center  ">
              <div className="w-[100px] h-[100px] mb-4  flex justify-center items-center rounded-full shadow-[3px_4px_8.6px_3px_#D9D9D940]  border border-[#F2F2F2] ">
                <img className=" " src={linkk} alt="link" />
              </div>
              <h1 className="font-medium text-[24px]">
                Install & Connect (5 mins)
              </h1>
              <p className="text-18px ">
                Our lightweight agent installs in about 5 minutes. Enter your
                key and connect to as many target systems as you like there are
                no limits.
              </p>
            </div>
            <div className="mt-15">
              {" "}
              <img src={LineFlip} alt="line" />
            </div>
            <div className="w-[15%]  keycontainer flex flex-col items-center  ">
              <div className="w-[100px] h-[100px] mb-4  flex justify-center items-center rounded-full shadow-[3px_4px_8.6px_3px_#D9D9D940]  border border-[#F2F2F2] ">
                <img className=" " src={clidpboard} alt="Clipboard" />
              </div>
              <h1 className="font-medium text-[24px]">Get Your Report</h1>
              <p className="text-18px ">
                Instantly view your environment’s key risks, with AI-powered
                remediation and blast-radius analysis.
              </p>
            </div>
          </div>
        </div>
        {/* questions */}
        <div className=" mb-8  mt-[241px] bg-[#D9D9D940] flex flex-col items-center  ">
          <h1 className="py-8 text-[38px] font-medium text-[#383838] text-center">
            Your Free Assessment Includes:
          </h1>
          <ul className="w-[60%] text-[24px] list-decimal list-outside">
            <li className="mb-4 leading-snug">
            
              <span className="font-medium">Free Local Risk Assessment:</span>Run StackGuard locally in your environment for a full risk
              assessment. No sensitive data ever leaves your infrastructure.
            </li>
             <li className="mb-4 leading-snug">
              <span className="font-medium">Scan Up to 5 Repos and 5 Buckets:</span>  Analyze up to 5 code
              repositories and 5 cloud storage buckets for exposed identities,
              misconfigurations, and hidden NHIs.
            </li>
            <li className="mb-4 leading-snug">
               <span className="font-medium">Unlimited Branch Scanning:</span> Scan unlimited branches within your
              onboarded repositories to ensure complete coverage across your
              development workflow.
            </li>
            <li className="mb-4 leading-snug">
               <span className="font-medium">Comprehensive Environment Overview:</span> Receive a unified report of
              your entire identity posture. We scan everything from traditional
              Cloud IAM settings to hidden NHIs embedded deep within your
              codebase.
            </li>
            <li className="mb-4 leading-snug">
               <span className="font-medium">Blast Radius Reporting:</span> Understand the real impact of high-risk
              findings. StackGuard shows you exactly what an attacker could
              access, helping you prioritize what matters most.
            </li>
             <li className="mb-4 leading-snug">
               <span className="font-medium">AI-Based Remediation:</span> Don’t just find problems—fix them. For your
              most critical findings, our platform provides AI-driven
              remediation guidance to help your team resolve issues fast.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Riskassessment;
