import React from "react";
import findingForServer from "../assets/productpgSS/findingForServer.svg";
import blastRaius from "../assets/productpgSS/blastRadius.svg";
import git from "../assets/productpgSS/git.svg";
import adminPriv from "../assets/productpgSS/adminPriv.svg";
import sysOverview from "../assets/productpgSS/sysOverview.svg";

const Product = () => {
  return (
    <div className="my-5  mt-[120px] mx-10 font-dmsans border-2 border-[#C0C0C0] ">
      <div className=" mt-10  text-center mx-10 ">
        <h1 className=" font-medium text-3xl  md:text-5xl  lg:text-6xl  m-2 ">
          AI-powered Security for <br /> Non-Human Identities (NHIs) and Secrets
        </h1>
        <p className=" text-base md:text-lg   font-normal mt-2 ">
          50:1. That's the ratio of non-human to human identities. Your service
          accounts, keys, and tokens dominate your attack surface
        </p>
        <div className="flex justify-center gap-2 my-4">
          <button
            className="px-2 md:px-4  h-10  text-xs md:text-sm  rounded-full text-white bg-[#44087D]"
            type="button"
          >
            Book a demo
          </button>
          <button
            className="px-2  md:px-4 h-10  text-xs md:text-sm   rounded-full text-black border border-[#44087D]"
            type="button"
          >
            Book a risk free assessment
          </button>
        </div>
      </div>

      <div className="my-40 mx-10">
        <ul>
          <li className="my-40 flex justify-between">
            <div className="w-[50%] space-y-4">
              <h1 className="text-3xl text-[#383838] font-medium">
                Deep Scanning + Service Account Intelligence
              </h1>
              <p className="text-xl text-[#000000]">
                Uncover every hidden access path—human or machine. StackGuard’s
                Deep Scanning Tech™ dives far beyond surface-level checks,
                analyzing main branches, feature branches, commit histories, VCS
                logs, and even archived zip files to reveal deeply embedded
                Non-Human Identities (NHIs) that static analysis tools miss. At
                the same time, StackGuard automatically discovers all Service
                Accounts across your environment mapping their permissions,
                usage patterns, and trust relationships to enforce true least
                privilege and eliminate blind spots created by automated access.
              </p>
            </div>
            <div className="">
              <img src={findingForServer} alt="findingForServerImg" />
            </div>
          </li>
          {/*  */}
          <li className="my-40 flex justify-between">
            <div className="w-[50%] space-y-4">
              <h1 className="text-3xl text-[#383838] font-medium">
                Risk Prioritization & Contextual Visibility
              </h1>
              <p className="text-xl text-[#000000]">
                Fix the most dangerous issues first—confidently. StackGuard’s
                Risk Prioritization engine analyzes every NHI in context: active
                secrets, exposed endpoints, permissions, expiry, usage patterns,
                and the developer who deployed it. The result? A precise,
                real-world risk score that tells your team exactly what to fix
                and why—no guesswork, no noise.
              </p>
            </div>
            <div className="">
              <img src={blastRaius} alt="findingForServerImg" />
            </div>
          </li>
          {/*  */}
          <li className=" my-40 flex justify-between">
            <div className="w-[50%] space-y-4">
              <h1 className="text-3xl text-[#383838] font-medium">
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
              <img src={git} alt="findingForServerImg" />
            </div>
          </li>
          {/*  */}
          <li className=" my-40 flex justify-between">
            <div className="w-[50%] space-y-4">
              <h1 className="text-3xl text-[#383838] font-medium">
                Reporting & Governance
              </h1>
              <p className="text-xl text-[#000000]">
                Prove security impact and enforce policies automatically.
                StackGuard’s Reporting delivers clear, executive-ready summaries
                of NHI risk across your entire environment showing what was
                discovered, what was remediated, and how quickly critical issues
                were fixed with AI-powered remediation. At the same time, NHI
                Governance ensures problems never reach production by enforcing
                CI Gating to block risky identities during builds and
                automatically anonymizing or blocking NHIs shared in chat tools
                like Slack or Teams.
              </p>
            </div>
            <div className="">
              <img src={adminPriv} alt="findingForServerImg" />
            </div>
          </li>
          {/*  */}
          <li className=" my-40 flex justify-between">
            <div className="w-[50%] space-y-4">
              <h1 className="text-3xl text-[#383838] font-medium">
                Local deployment
              </h1>
              <p className="text-xl text-[#000000]">
                Prove security impact and enforce policies automatically.
                StackGuard’s Reporting delivers clear, executive-ready summaries
                of NHI risk across your entire environment showing what was
                discovered, what was remediated, and how quickly critical issues
                were fixed with AI-powered remediation. At the same time, NHI
                Governance ensures problems never reach production by enforcing
                CI Gating to block risky identities during builds and
                automatically anonymizing or blocking NHIs shared in chat tools
                like Slack or Teams.
              </p>
            </div>
            <div className="">
              <img src={sysOverview} alt="findingForServerImg" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
