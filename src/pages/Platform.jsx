import React from "react";
import { Link } from "react-router-dom";
import findingForServer from "../assets/productpgSS/findingForServer.svg";
import blastRaius from "../assets/productpgSS/blastRadius.svg";
import git from "../assets/productpgSS/git.svg";
import adminPriv from "../assets/productpgSS/adminPriv.svg";
import sysOverview from "../assets/productpgSS/sysOverview.svg";
import plathfrompgDai from "../assets/productpgSS/plathfrompgDai.svg";
import Footer from "../components/Footer";
const Platform = () => {
  return (
    <>
      <div className="my-5  mt-[120px]  font-dmsans">
        <div className=" mt-10 mx-[54px] font-dmsans text-center  ">
          <h1 className=" font-medium text-[64px] mb-6 leading-none ">
           Remediation first-NHI platform
          </h1>
          <p className=" text-[22px] mb-[52px]  font-normal mt-2 ">
            50:1. That's the ratio of non-human to human identities. Your
            service <br />
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
        <div className="mt-20">
          <img src={plathfrompgDai} alt="diagram" />
          
        </div>

        <div className="w-[100%] h-25 bg-[repeating-linear-gradient(to_right,#C0C0C0_0px,#C0C0C0_2px,transparent_1px,transparent_8px)] border border-[#C0C0C0]"></div>


        <div className="my-40 mx-[54px] ">
          <ul>
            <li className="my-40 flex justify-between">
              <div className="w-[40%] space-y-4">
                <h1 className="text-[32px] leading-none text-[#383838] font-medium">
                  Deep Scanning + Service Account Intelligence
                </h1>
                <p className="text-xl mb-5  text-[#000000]">
                  Uncover every hidden access path—human or machine.
                  StackGuard’s Deep Scanning Tech™ dives far beyond
                  surface-level checks, analyzing main branches, feature
                  branches, commit histories, VCS logs, and even archived zip
                  files to reveal deeply embedded Non-Human Identities (NHIs)
                  that static analysis tools miss.
                </p>
                <p className="text-xl  text-[#000000]">
                  At the same time, StackGuard automatically discovers all
                  Service Accounts across your environment mapping their
                  permissions, usage patterns, and trust relationships to
                  enforce true least privilege and eliminate blind spots created
                  by automated access.
                </p>
              </div>
              <div className="">
                <img src={findingForServer} alt="findingForServerImg" />
              </div>
            </li>
            <li className="my-40 flex justify-between">
              <div className="w-[40%] space-y-4">
                <h1 className="text-[32px] leading-none text-[#383838] font-medium">
                  Risk Prioritization & Contextual Visibility
                </h1>
                <p className="text-xl mb-5 text-[#000000]">
                  Fix the most dangerous issues first—confidently. StackGuard’s
                  Risk Prioritization engine analyzes every NHI in context:
                  active secrets, exposed endpoints, permissions, expiry, usage
                  patterns, and the developer who deployed it.
                </p>
                <p className="text-xl text-[#000000]">
                  The result? A precise, real-world risk score that tells your
                  team exactly what to fix and why—no guesswork, no noise.
                </p>
              </div>
              <div className="order-first">
                <img src={blastRaius} alt="blastRaius" />
              </div>
            </li>
            <li className=" my-40 flex justify-between">
              <div className="w-[40%] space-y-4">
                <h1 className="text-[32px] leading-none text-[#383838] font-medium">
                  Risk Prioritization & Contextual Visibility
                </h1>
                <p className="text-xl text-[#000000]">
                  Fix security issues instantly and accurately. Our AI Automated
                  Remediation provides one-click fixes and generates secure,
                  pull-request-ready code, validates code patches in a sandbox,
                  stores and rotates risky NHIs in a vault.
                </p>
              </div>
              <div className="">
                <img src={git} alt="gitImg" />
              </div>
            </li>
            <li className=" my-40 flex justify-between">
              <div className="w-[40%] space-y-4">
                <h1 className="text-[32px] leading-none text-[#383838] font-medium">
                  Reporting & Governance
                </h1>
                <p className="text-xl text-[#000000]">
                  Prove security impact and enforce policies automatically.
                  StackGuard’s Reporting delivers clear, executive-ready
                  summaries of NHI risk across your entire environment showing
                  what was discovered, what was remediated, and how quickly
                  critical issues were fixed with AI-powered remediation. <br /> At the
                  same time, NHI Governance ensures problems never reach
                  production by enforcing CI Gating to block risky identities
                  during builds and automatically anonymizing or blocking NHIs
                  shared in chat tools like Slack or Teams.
                </p>
              </div>
              <div className="order-first">
                <img src={adminPriv} alt="adminPrivImg" />
              </div>
            </li>
            {/*  */}
            <li className=" my-40 flex justify-between">
              <div className="w-[40%] space-y-4">
                <h1 className="text-[32px] leading-none text-[#383838] font-medium">
                  Local deployment
                </h1>
                <p className="text-xl text-[#000000]">
                  Prove security impact and enforce policies automatically.
                  StackGuard’s Reporting delivers clear, executive-ready
                  summaries of NHI risk across your entire environment showing
                  what was discovered, what was remediated, and how quickly
                  critical issues were fixed with AI-powered remediation. 
                  
                   <br />At the
                  same time, NHI Governance ensures problems never reach
                  production by enforcing CI Gating to block risky identities
                  during builds and automatically anonymizing or blocking NHIs
                  shared in chat tools like Slack or Teams.
                </p>
              </div>
              <div className="">
                <img src={sysOverview} alt="sysOverviewImg" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer bgclass="bg-[#200639]" btnColor="bg-[#F6CB12]" />
    </>
  );
};

export default Platform;
