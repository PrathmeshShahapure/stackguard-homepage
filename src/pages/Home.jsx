import { useState,useEffect } from "react"; 
import { Link } from "react-router-dom";

import workflow from "../assets/workflow.svg";
import neverexpires from "../assets/neverexpires.svg";
import permissions from "../assets/permissions.svg";
import machineMayhem from "../assets/machineMayhem.svg";
import Detection from "../assets/Detection.svg";
import whyStackbg from "../assets/whyStackbg.svg";

import arrowRightList from "../assets/icons/arrowRightList.svg"; 

import googleCloudImg from "../assets/platformCoverageIcons/googleCloudImg.svg"
import entraImg from "../assets/platformCoverageIcons/entraImg.svg"
import Okta from "../assets/platformCoverageIcons/Okta.svg"
import azureActiveLogo from "../assets/platformCoverageIcons/azureActiveLogo.svg"
import circleciLogo from "../assets/platformCoverageIcons/circleciLogo.svg"
import gitHub from "../assets/platformCoverageIcons/gitHub.svg"
import azureLogo from "../assets/platformCoverageIcons/azureLogo.svg"
import jenkinsLogo from "../assets/platformCoverageIcons/jenkinsLogo.svg"
import ecrLogo from "../assets/platformCoverageIcons/ecrLogo.svg"
import dockerLogo from "../assets/platformCoverageIcons/docker.svg"
import awsLogo from "../assets/platformCoverageIcons/awsLogo.svg"
import OracleCloudLogo from "../assets/platformCoverageIcons/OracleCloudLogo.svg"
import GCSLogo from "../assets/platformCoverageIcons/GCSLogo.svg"
import S3Logo from "../assets/platformCoverageIcons/S3Logo.svg"
import azureblobLogo from "../assets/platformCoverageIcons/azureblobLogo.svg"
import onedriveLogo from "../assets/platformCoverageIcons/onedriveLogo.svg"
import bitbucketLogo from "../assets/platformCoverageIcons/bitbucketLogo.svg"
import gitlabLogo from "../assets/platformCoverageIcons/gitlabLogo.svg"
import postman from "../assets/platformCoverageIcons/postman.svg"
import huggingface from "../assets/platformCoverageIcons/huggingface.svg"
import snowflake from "../assets/platformCoverageIcons/snowflake.svg"
import Airtable from "../assets/platformCoverageIcons/Airtable.svg"
import webex from "../assets/platformCoverageIcons/webex.svg"
import slack from "../assets/platformCoverageIcons/slack.svg"
import Googlechat from "../assets/platformCoverageIcons/Googlechat.svg"
import team from "../assets/platformCoverageIcons/teams.svg"

import Qanda from "../homepageComponents/Qanda.jsx";
import Footer from "../components/Footer.jsx";


const Home = () => {
   const [activeIndex, setActiveIndex] = useState(1);
   const sections = [
    { id: 1, title: "Service Accounts" },
    { id: 2, title: "DevOps Tools" },
    { id: 3, title: "Container registries" },
    { id: 4, title: "Cloud infrastructure analysis" },
    { id: 5, title: "Cloud storage and buckets" },
    { id: 6, title: "Version control system" },
    { id: 7, title: "other sass application" },
    { id: 8, title: "chat application" },
  ];
  useEffect(()=>{
    const interval = setInterval(()=>{
      setActiveIndex((prev)=> (prev%8) + 1  );
    },2000)
    return () => clearInterval(interval);
  },[])

 

  return (
    <> 
    <div className="my-5  mt-[120px]   ">
      <div className=" mt-10 font-dmsans text-center mx-10 ">
        <h1 className=" font-medium text-[64px] mb-6 leading-none ">
          AI-powered Security for <br /> Non-Human Identities (NHIs) and Secrets
        </h1>
        <p className=" text-[22px] mb-[52px]  font-normal mt-2 ">
          50:1. That's the ratio of non-human to human identities. Your service <br />
          accounts, keys, and tokens dominate your attack surface
        </p>
        <div className="flex justify-center gap-2 my-4">
         
          <Link  to="/riskassessment"
            className="px-2 py-1 md:px-4 h-10 bg-[#44087D] font-medium  text-[19px]  rounded-full text-[#ffffff] border "
            type="button"
          >
            Get a free risk assessment
          </Link>
          <button className="px-2 py-1 md:px-4 h-10 font-medium  text-[19px]  rounded-full text-[#282828] border border-[#D1D1D1]"
            type="button"> 
             See it in action
            </button>
        </div>
      </div>
      <div className="relative w-full mt-14">
        <div className="absolute top-0 left-0 w-full px-10 z-10">
          <img src={workflow} alt="workflow" className="w-full mx-auto" />
        </div>

     
        <div
          className="h-[455px] bg-[#8B50C4] relative top-100 bg-cover bg-no-repeat "
           
        ></div>
      </div>

      <div className="w-full mt-100 h-25 bg-[repeating-linear-gradient(to_right,#C0C0C0_0px,#C0C0C0_2px,transparent_1px,transparent_8px)] border border-[#C0C0C0]"></div>

      <div className="mt-40 mx-[55px] font-dmsans">
        <div>
          <h1 className=" text-[40px] font-medium leading-none text-[#383838]">
            The Biggest Security Risk Is Not Even Human.
          </h1>
          <h1 className=" text-[40px] mb-8 font-medium text-purple-gra ">
            It’s machine access.
          </h1>
          <p className=" text-[28px] mb-[72px] text-[#454545] font-normal">
            NHIs are growing, and introducing vulnerabilities with them. Your
            tokens, keys, and service accounts are gateways to your secrets -
            and can be exploited by outsiders to gain production access.
          </p>
        </div>

        <div className="mt-10  grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
          <div className="p-3 gap-4 flex flex-col justify-between rounded-lg shadow-[6px_0_12px_rgba(0,0,0,0.1)] border border-[#9E9E9E3D]">
            <div>
              <h1 className=" text-xl  font-medium">No lifecycle management</h1>
              <p className=" text-sm ">
                NHIs lack human-like governance with no onboarding, rotation,
                revocation, or regular review.
              </p>
            </div>
            <img className="mx-auto w-56" src={neverexpires} />
          </div>
          <div className="p-3 gap-4 flex flex-col justify-between rounded-lg  shadow-[6px_0_12px_rgba(0,0,0,0.1)] border border-[#9E9E9E3D]">
            <div>
              <h1 className=" text-[24px]  font-medium">Overprivileged access</h1>
              <p className=" text-sm ">
                NHIs are often granted more access than they need. It's an
                easily preventable breach waiting to occur.
              </p>
            </div>
            <img className="mx-auto w-56" src={permissions} />
          </div>
          <div className="p-3 gap-4  flex flex-col justify-between rounded-lg   shadow-[6px_0_12px_rgba(0,0,0,0.1)] border border-[#9E9E9E3D]">
            <div>
              <h1 className=" text-xl  font-medium">Machine Mayhem</h1>
              <p className=" text-sm ">
                For every human identity, there are at least 50 non-human
                identities. Traditional IAM just can't keep up.
              </p>
            </div>
            <img className="mx-auto w-56" src={machineMayhem} />
          </div>
        </div>
      </div>

      <div className="mt-40 mx-[55px] font-dmsans">
        <div className="mb-24">
          <h1 className=" text-[40px] font-medium leading-none text-[#383838]">
            Complete control over your machine identities.
          </h1>
          <h1 className=" text-[40px] mb-5 font-medium text-purple-gra">
            IAM with AI - for NHIs at scale.
          </h1>
          <p className=" text-[28px] mb-24 text-[#454545] font-normal">
            With AI-powered detection, 1500+ discovery rules, and
            auto-remediation, we secure your tokens, keys, bots, and service
            accounts - to make them even more secure and leak -proof than your
            people.
          </p>
        </div>

        <div className="mt-10 flex justify-between">
          <div className=" flex flex-col">
            <ol className="flex flex-col gap-8  ">
              <li
                className=" after:content-[''] after:border-[70px] after:border-t-transparent  after:border-r-transparent  after:border-b-transparent relative  after:absolute after:right-[-137px] rounded-lg
  after:border-[#F5EAFF] flex min-h-[110px] w-full items-center justify-evenly  bg-[#F5EAFF] p-4   "
              >
                <div className=" h-10 w-10  bg-[#E8D0FF]  ">
                  <h1 className="pt-2 text-center text-normal text-[22px] "> 1</h1>
                </div>
                <div className="w-[80%]">
                  <div>
                    <h1 className="text-[28px] text-[#000000]"> Detection </h1>
                    <p className="text-[22px]">
                      Continuous NHI Discovery which is Sustained,
                      Comprehensive, Complete.
                    </p>
                  </div>
                </div>
              </li>
              <li className="w-full min-h-[110px] p-4 flex items-center justify-evenly  rounded-tr-xl">
                <div className=" h-10 w-10  bg-[#E6E6E68C]  ">
                  <h1 className="pt-2 text-center text-normal text-[22px] "> 2</h1>
                </div>
                <div className="w-[80%]">
                  <div>
                    <h1 className="text-[28px] text-[#000000]"> Remediation </h1>
                    <p className="text-[22px]">
                      Reducing the blast radius before it blasts your
                      compliance.
                    </p>
                  </div>
                </div>
              </li>
              <li className="w-full min-h-[110px] p-4 flex items-center justify-evenly  rounded-tr-xl">
                <div className=" h-10 w-10  bg-[#E6E6E68C]  ">
                  <h1 className="pt-2 text-center text-normal text-[22px] "> 3</h1>
                </div>
                <div className="w-[80%]">
                  <div>
                    <h1 className="text-[28px] text-[#000000]"> Governance </h1>
                    <p className="text-[22px]">
                      Translating complex identity behaviors into actionable
                      insights.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex justify-end">
            <img className="w-[70%]" src={Detection} alt="detection" />
          </div>
        </div>
      </div>

      <div className="mt-40 mx-[55px] font-dmsans">
        <h1 className="text-[40px] mb-5  font-medium">Why StackGuard</h1>
        <div className="flex gap-2">
          <div className=" p-5 w-[90vw] flex justify-between    bg-[#D6ABFF2E]  border border-[#DDBCFB]">
            <div className=" w-[30%] flex flex-col justify-between">
              <div>
                <h1 className=" text-[24px] font-medium text-[#2C2B2D]   p-0 m-0">
                  Deep Scan Technology: <br /> <span className="font-normal italic"> Faster, Smarter NHI Detection</span>
                </h1>
                <ul className="mt-[39px] text-[20px]  text-[#2C2B2D]  ">
                  <li className="flex items-start gap-2"> <img className="mt-2" src={arrowRightList} alt="arrow"/> Multi-layer detection with regex, heuristics & ML</li>
                  <li className="flex items-start gap-2"> <img className="mt-2" src={arrowRightList} alt="arrow"/>Fast & efficient scanning at scale </li>
                  <li className="flex items-start gap-2"> <img className="mt-2" src={arrowRightList} alt="arrow"/>High accuracy with broader NHI coverage</li>
                </ul>
              </div>
              <h1 className="text-[#2C2B2D] w-[104px] text-center text-[16px] bg-[#C8A3E957] border border-[#C8A3E957]">Read More</h1>
            </div>
            <div className="">
              <img
                className=" hidden md:block w-200 rounded-xl"
                src={whyStackbg}
                alt="gitIntegrationPage"
              />
            </div>
          </div>
          <div className="   w-[5%]  rounded bg-[#FCF0FF]">{""}</div>
          <div className="  w-[5%] rounded  bg-[#E9C3FF57]"> {""}</div>
        </div>
      </div>

      <div className=" my-50 w-full  font-dmsans py-20">
      <div className="grid grid-cols-9 grid-rows-7 gap-1">
        {/* ROW 1 */}

        <div className={` ${activeIndex ===1 ? " bg-[#B35FF952]" : "bg-white"}  w-full h-[74px] transition-all duration-1000  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={googleCloudImg} className="w-16 h-14  " />
          <p className="text-[10px] font-medium "> Google workspace</p>
        </div>

        <div className={` ${activeIndex ===1 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={entraImg} className="w-16 h-14  " />
          <p className="text-[10px] font-medium ">Entra ID </p>
        </div>

        <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]"></div>

        <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]"></div>

        <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]"></div>

        <div className={` ${activeIndex ===8 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={team} className="w-16 h-14  " />
          <p className="text-[10px] font-medium ">Teams</p>
        </div>

        <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
      
        </div>

        <div className={` ${activeIndex ===1 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={azureActiveLogo} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">Active directory</p>
        </div>

        <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
      
        </div>
  {/* 2 row */}
        <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
          
        </div>
      
        <div className={` ${activeIndex ===1 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={Okta} className="w-16 h-14  " />
          <p className="text-[10px] font-medium ">Okta</p>
        </div>

        <div className={` ${activeIndex ===4 ? " bg-[#B35FF952]" : "bg-white"}   transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={awsLogo} className="w-16 h-14  " />
          <p className="text-[10px] font-medium ">AWS</p>
        </div>

        <div className={` ${activeIndex ===3 ? " bg-[#B35FF952]" : "bg-white"} transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={dockerLogo} className="w-16 h-14  " />
          <p className="text-[10px] font-medium ">Docker</p>
        </div>

        <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
     
        </div>
         <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
    
        </div>
         <div className={` ${activeIndex === 2 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={circleciLogo} className="w-16 h-14  " />
          <p className="text-[10px] font-medium ">Circle CI</p>
        </div>
         <div className="w-full h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
        
        </div>
         <div className={` ${activeIndex ===5 ? " bg-[#B35FF952]" : "bg-white"} transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={snowflake} className="w-16 h-1/2 mb-2  " />
          <p className="text-[10px] font-medium ">snowflake</p>
        </div>
 {/* 3 row */}
  <div className={` ${activeIndex ===5 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={GCSLogo} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">GCS</p>
        </div>

        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
        
        </div>

        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
       
        </div>

        <div className="w-full text-center col-span-3 row-span-3  flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
         <h1 className="text-[32px] text-[#383838] font-medium">Stackguard integrates with</h1>
         <h1 className="mb-9 text-[40px] text-[#8631D8] font-medium"> Version control system</h1>
         <p className=" tet-[18px] text-[#454545]">Secure your entire modern environment <br />from code to cloud.</p>
        </div>

        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
        
        </div>

        <div className={` ${activeIndex ===5 ? " bg-[#B35FF952]" : "bg-white"} transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={azureblobLogo} className=" w-16 h-1/2 mb-1  " />
          <p className="text-[10px] font-medium ">Azure Blob </p>
        </div>

        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
       
        </div>
        {/* 4 row */}

        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
     
        </div>

        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
        
        </div>
         <div className={` ${[2, 3].includes(activeIndex) ? "bg-[#B35FF952]" : "bg-white"} transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={gitHub} className=" w-16 h-1/2 mb-1  " />
          <p className="text-[10px] font-medium ">Git Hub </p>
        </div>
        <div className={` ${activeIndex ===7 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={Airtable} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">Air Table </p>
        </div>
        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
          
        </div>
        <div className={` ${activeIndex ===3 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={ecrLogo} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">ECR </p>
        </div>
        {/* 5 */}
         <div className={` ${activeIndex === 2 || activeIndex === 6 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={gitlabLogo} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">GitLab </p>
        </div>
         <div className={` ${activeIndex ===6 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={azureLogo } className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">Azure Repo </p>
        </div>

         <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
     
        </div>
         <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
          
        </div>
         <div className={` ${activeIndex ===8 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={Googlechat} className=" w-16 h-1/2 mb-1  " />
          <p className="text-[10px] font-medium ">Google Chat </p>
        </div>
         <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
       
        </div>
        {/* 6 */}
         <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
        
        </div>

        <div className={` ${activeIndex ===5 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={onedriveLogo} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">One Drive </p>
        </div>

        <div className={` ${activeIndex === 5 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={S3Logo} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">S3 </p>
        </div>

        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
      
        </div>

        <div className={` ${activeIndex ===8 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000  w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
        <img src={slack}  alt="slack" className=" w-16 h-1/2 mb-1  " />
          <p className="text-[10px] font-medium ">slack </p>
        </div>
        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
         
        </div>
        <div className={` ${activeIndex ===7 ? " bg-[#B35FF952]" : "bg-white"} transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={huggingface} alt="huggingface" className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">Hugging face </p>
        </div>
        <div className={` ${activeIndex === 2 || activeIndex === 6 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
           <img src={bitbucketLogo} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">Bitbucket  </p>
        </div>
         {/* 7 */}
        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
       
        </div>
       
        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
         
        </div>
        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
         
        </div>
        <div className={` ${activeIndex ===4 ? " bg-[#B35FF952]" : "bg-white"}  transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={OracleCloudLogo} className=" w-16 h-1/2 mb-1  " />
          <p className="text-[10px] font-medium ">OCI </p>
        </div>
        <div className={` ${activeIndex ===7 ? " bg-[#B35FF952]" : "bg-white"} transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
                   <img src={postman} alt="postman" className=" w-16 h-1/2 mb-1  " />
          <p className="text-[10px] font-medium ">Postman </p>
        </div>
        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
         
        </div>
        <div className={` ${activeIndex ===2  ? " bg-[#B35FF952]" : "bg-white"}   transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={jenkinsLogo} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">Jenkins </p>
        </div>
        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
     
        </div>
        <div className="w-full p-2 h-[74px] flex flex-col items-center justify-center bg-white border border-[#E5E5E5]">
       
        </div>
        <div className={` ${activeIndex === 8 ? " bg-[#B35FF952]" : "bg-white"} transition-all duration-1000 w-full h-[74px]  flex flex-col items-center justify-center  border border-[#E5E5E5]`}>
          <img src={webex} className=" w-16 h-3/4 mb-1  " />
          <p className="text-[10px] font-medium ">Webex </p>
        </div>


        
    

      </div>
    </div>

      <div className="my-40 mx-[55px]  flex justify-between font-dmsans  ">
        <div className="w-[40%]">
          <h1 className="text-[40px] font-normal text-[#303030] ">
            Frequently asked questions
          </h1>
        </div>

        <div className="w-[60%]">
          <ul>
              <Qanda  />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;
