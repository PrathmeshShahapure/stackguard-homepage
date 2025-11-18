import {  react } from "react";
import { Link } from "react-router-dom";

import workflow from "../assets/workflow.svg";
import neverexpires from "../assets/neverexpires.svg";
import permissions from "../assets/permissions.svg";
import machineMayhem from "../assets/machineMayhem.svg";
import Detection from "../assets/Detection.svg";
import platformCoverage from "../assets/platformCoverage.svg";
import whyStackbg from "../assets/whyStackbg.svg";

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

import Qanda from "../homepageComponents/Qanda.jsx";
import Footer from "../components/Footer.jsx";


const Home = () => {
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
          <button
            className="px-2 md:px-4  h-10  text-lg   rounded-full text-white bg-[#44087D]"
            type="button"
          >
            Book a demo
          </button>
          <Link  to="/riskassessment"
            className="px-2 py-1 md:px-4 h-10   text-lg  rounded-full text-black border border-[#44087D]"
            type="button"
          >
            Book a risk free assessment
          </Link>
        </div>
      </div>
      <div className="relative w-full mt-30">
        <div className="absolute top-0 left-0 w-full px-10 z-10">
          <img src={workflow} alt="workflow" className="w-[90%] mx-auto" />
        </div>

     
        <div
          className="h-[455px] bg-[#8B50C4] relative top-60 bg-cover bg-no-repeat "
           
        ></div>
      </div>

      <div className="w-full mt-60 h-25 bg-[repeating-linear-gradient(to_right,#C0C0C0_0px,#C0C0C0_2px,transparent_1px,transparent_8px)] border border-[#C0C0C0]"></div>

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
              <h1 className=" text-xl  font-medium">Overprivileged access</h1>
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
                <h1 className=" text-[24px] text-[#2C2B2D]   p-0 m-0">
                  Deep Scan Technology: Faster, Smarter NHI Detection
                </h1>
                <ul className="text-[20px] pl-8  text-[#2C2B2D] list-disc ">
                  <li>Multi-layer detection with regex, heuristics & ML</li>
                  <li>Fast & efficient scanning at scale </li>
                  <li>High accuracy with broader NHI coverage</li>
                </ul>
              </div>
              <h1 className="text-[#2C2B2D] text-[20px] ">Read More</h1>
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

      <div className="mt-40 mx-[55px] font-dmsans ">
        <div className="w-[60%] my-10  ">
          <h1 className="text-[40px] mb-8 font-medium text-[#383838]">
            Breadth of Platform Coverage
          </h1>
          <p className=" mt-2 text-[28px] font-normal text-[#000000]">
            Secure your entire modern environment from code to cloud. Stackguard
            offers unparalleled Breadth of Platform Coverage, seamlessly
            integrating with major Version Control Systems, CI/CD pipelines,
            Cloud platforms and Storage (AWS, Azure, GCP, etc.), Chat & SaaS
            applications for a unified security view.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-y-14 gap-1">
            <div>
             <div className="w-full mb-1 flex justify-between p-2 bg-[#F2F2F2]">

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col justify-center items-center">
              <img className="w-12" src={googleCloudImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col justify-center items-center">
              <img className="w-12" src={entraImg} alt="entraImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col justify-center items-center">
              <img className="w-12" src={Okta} alt="Okta" />
              <p className=" text-[7px] text-center font-medium">Okta</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col justify-center items-center">
              <img className="w-12 p-1" src={azureActiveLogo} alt="azureActiveLogo" />
              <p className=" text-[7px] text-center font-medium">Active 
 <br />  directory</p>
              </div>
              
             </div>
             <h1 className=" text-[13px] font-medium text-center">Service accounts</h1>
            </div>
            {/* 2 */}
            <div>
             <div className="w-full mb-1 flex justify-between p-2 bg-[#F2F2F2]">

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-12 mb-1" src={circleciLogo} alt="circleciLogo" />
              <p className=" text-[7px] text-center font-medium">CircleCI </p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-12 mb-1" src={gitHub} alt="gitHub" />
              <p className=" text-[7px] text-center font-medium">Github </p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col justify-center items-center">
              <img className="w-15 mb-3" src={azureLogo} alt="azureLogo" />
              <p className=" text-[7px] text-center font-medium">Azure devOps</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col justify-center items-center">
              <img className="w-10 p-1" src={jenkinsLogo} alt="jenkinsLogo" />
              <p className=" text-[7px] text-center font-medium">Jenkins</p>
              </div>
              
             </div>
             <h1 className=" text-[13px] font-medium text-center">DevOps tools & CI/CD pipelines</h1>
            </div>
            {/* 3 */}
            <div>
             <div className="w-full mb-1 flex justify-between p-2 bg-[#F2F2F2]">

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-12" src={ecrLogo} alt="ecrLogo" />
              <p className=" text-[7px] text-center font-medium">  ECR</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-15 mb-3" src={azureLogo} alt="AzureLogo" />
              <p className=" text-[7px] text-center font-medium">Azure</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-12" src={dockerLogo} alt="Docker" />
              <p className=" text-[7px] text-center font-medium">Docker</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col justify-center items-center">
              <img className="w-12" src={Okta} alt="OktaLogo" />
              <p className=" text-[7px] text-center font-medium">Okta</p>
              </div>
              
             </div>
             <h1 className=" text-[13px] font-medium text-center">Container registries</h1>
            </div>
              {/* 4*/}
            <div>
             <div className="w-full mb-1 flex justify-between p-2 bg-[#F2F2F2]">

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-12 mb-2" src={awsLogo} alt="awsLogo" />
              <p className=" text-[7px] text-center font-medium">  AWS</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-15 mb-2" src={azureLogo} alt="AzureLogo" />
              <p className=" text-[7px] text-center font-medium">Azure</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-12 " src={googleCloudImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium"> GCP</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-12 mb-3" src={OracleCloudLogo} alt="OracleCloudLogo" />
              <p className=" text-[7px] text-center font-medium"> OCI</p>
              </div>
              
             </div>
             <h1 className=" text-[13px] font-medium text-center">Cloud infrastructure analysis</h1>
            </div>
            {/* //2 */}
            <div>
             <div className="w-full mb-1 flex justify-between p-2 bg-[#F2F2F2]">

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12 mb-2" src={azureblobLogo} alt="azureblobLogo" />
              <p className=" text-[7px] text-center font-medium">GCS</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12 p-1" src={S3Logo} alt="S3logo" />
              <p className=" text-[7px] text-center font-medium">S3</p>
              </div>
             
               <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={azureblobLogo} alt="azureblobLogo" />
              <p className=" text-[7px] text-center font-medium">Azure blob</p>
              </div>

              <div className="w-[74px] h-[74px]  bg-[#FFFFFF] flex justify-center flex-col items-center">
              <img className="w-12 mb-1" src={onedriveLogo} alt="onedriveLogo" />
              <p className=" text-[7px] text-center font-medium">One drive</p>
              </div>

              
              
             </div>
             <h1 className=" text-[13px] font-medium text-center">Cloud storage and buckets</h1>
            </div>
            {/* 2 */}
            <div>
             <div className="w-full mb-1 flex justify-between p-2 bg-[#F2F2F2]">

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12 mb-1 " src={gitHub} alt="github" />
              <p className=" text-[7px] text-center font-medium">GitHub</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12 mb-1 " src={bitbucketLogo} alt="BitbucketLogo" />
              <p className=" text-[7px] text-center font-medium">Bitbucket</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12 mb-1 " src={googleCloudImg} alt="AzurerepoLogo" />
              <p className=" text-[7px]  text-center font-medium">Azure repost</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12 mb-1" src={gitlabLogo} alt="GitlabLogo" />
              <p className=" text-[7px] text-center font-medium">  Gitlab</p>
              </div>
              
             </div>
             <h1 className=" text-[13px] font-medium text-center">Version control system</h1>
            </div>
            {/* 3 */}
            <div>
             <div className="w-full flex justify-between p-2 bg-[#F2F2F2]">

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={googleCloudImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={entraImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={googleCloudImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={entraImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>
              
             </div>
             <h1 className=" text-[13px] font-medium text-center">Service accounts</h1>
            </div>
              {/* 4*/}
            <div>
             <div className="w-full flex justify-between p-2 bg-[#F2F2F2]">

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={googleCloudImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={entraImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={googleCloudImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>

              <div className="w-[74px] h-[74px] p-0.5 bg-[#FFFFFF] flex flex-col items-center">
              <img className="w-12" src={entraImg} alt="googleCloudImg" />
              <p className=" text-[7px] text-center font-medium">Google <br />  workspace</p>
              </div>
              
             </div>
             <h1 className=" text-[13px] font-medium text-center">Service accounts</h1>
            </div>
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
