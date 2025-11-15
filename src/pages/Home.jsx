import { useRef, useEffect, React } from "react";
import { motion, useInView } from "motion/react";
import gitIntegrations from "../assets/gitIntegrations.png";
import lifeCycle from "../assets/icons/lifeCyle.svg";
import eyeslogo from "../assets/icons/eyeslogo.svg";
import accesslogo from "../assets/icons/accesslogo.svg";
import keylogo from "../assets/icons/keylogo.svg";
import zombielogo from "../assets/icons/zombielogo.svg";
import ratiologo from "../assets/icons/ratiologo.svg";
//
import infrastructure from "../assets/infrastructure.svg";
import neverexpires from "../assets/neverexpires.svg";
import permissions from "../assets/permissions.svg";
import machineMayhem from "../assets/machineMayhem.svg";
import Detection from "../assets/Detection.svg";
import platformCoverage from "../assets/platformCoverage.svg";
//

const textVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1.6,
      delay: 0.4,
    },
  },
};
const leftbarVariants = {
  hidden: { x: "-100vw" },
  show: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1.6,
      delay: 0.1,
    },
  },
};
const imgVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1.6,
      delay: 1.3,
    },
  },
};
const rigthBarVariants = {
  hidden: { x: "100vw" },
  show: {
    x: 0,
    transition: { type: "spring", bounce: 0.25, duration: 1.6, delay: 1 },
  },
};
//

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.6,
  });
  useEffect(() => {
    console.log("view :" + isInView);
  }, [isInView]);

  return (
    <div className="my-5  mt-[120px]  mx-10 border-2 border-[#C0C0C0] ">
      <div className=" mt-10 font-dmsans text-center mx-10 ">
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
      <div className="mt-5 w-full   ">
        <div className="w-full px-10">
          <img
            className=" top-50 relative mx-auto  "
            src={infrastructure}
            alt="infrastructure"
          />
        </div>
        <div className="mt-5 h-[300px] grid  text-white grid-rows-1 grid-cols-[2fr_1fr_10fr_2fr_1fr_1fr] ">
          <div className=" bg-linear-to-r from-[#D6ABFF] to-[#A14AEA]"></div>
          <div className="bg-purple-grad "></div>
          <div className="bg-purple-grad "></div>
          <div className="bg-purple-grad "></div>
          <div className="bg-purple-grad"></div>
          <div className="bg-purple-grad"></div>
        </div>
      </div>

      <div className="w-full h-25 bg-[repeating-linear-gradient(to_right,#C0C0C0_0px,#C0C0C0_2px,transparent_1px,transparent_8px)] border border-[#C0C0C0]"></div>

      <div className="mt-40 mx-10 font-dmsans">
        <div>
          <h1 className=" text-3xl font-medium text-[#383838]">
            The Biggest Security Risk Is Not Even Human.
          </h1>
          <h1 className=" text-3xl font-medium text-purple-gra ">
            It’s machine access.
          </h1>
          <p className=" text-xl text-[#454545] font-normal">
            NHIs are growing, and introducing vulnerabilities with them. Your
            tokens, keys, and service accounts are gateways to your secrets -
            and can be exploited by outsiders to gain production access.
          </p>
        </div>

        <div className="mt-10  grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
          <div className="p-3 flex flex-col justify-between rounded-lg shadow-[6px_0_12px_rgba(0,0,0,0.1)] border border-[#9E9E9E3D]">
            <h1 className=" text-lg  font-medium">No lifecycle management</h1>
            <p className=" text-sm ">
              NHIs lack human-like governance with no onboarding, rotation,
              revocation, or regular review.
            </p>
            <img className="mx-auto" src={neverexpires} />
          </div>
          <div className="p-3  flex flex-col justify-between rounded-lg  shadow-[6px_0_12px_rgba(0,0,0,0.1)] border border-[#9E9E9E3D]">
            <h1 className=" text-lg  font-medium">Overprivileged access</h1>
            <p className=" text-sm ">
              NHIs are often granted more access than they need. It's an easily
              preventable breach waiting to occur.
            </p>
            <img className="mx-auto" src={permissions} />
          </div>
          <div className="p-3  flex flex-col justify-between rounded-lg   shadow-[6px_0_12px_rgba(0,0,0,0.1)] border border-[#9E9E9E3D]">
            <h1 className=" text-lg  font-medium">Machine Mayhem</h1>
            <p className=" text-sm ">
              For every human identity, there are at least 50 non-human
              identities. Traditional IAM just can't keep up.
            </p>
            <img className="mx-auto" src={machineMayhem} />
          </div>
        </div>
      </div>

      <div className="mt-40 mx-10 font-dmsans">
        <div>
          <h1 className=" text-3xl font-medium text-[#383838]">
            Complete control over your machine identities.
          </h1>
          <h1 className=" text-3xl font-medium text-purple-gra">
            IAM with AI - for NHIs at scale.
          </h1>
          <p className=" text-xl text-[#454545] font-normal">
            With AI-powered detection, 1500+ discovery rules, and
            auto-remediation, we secure your tokens, keys, bots, and service
            accounts - to make them even more secure and leak -proof than your
            people.
          </p>
        </div>

        <div className="mt-10 flex justify-between">
          <div className=" flex flex-col">
            <ol className="flex flex-col gap-4  ">
              <li className="w-full min-h-[110px] p-4 flex items-center justify-evenly bg-[#F5EAFF] rounded-tr-xl">
                <div className=" h-10 w-10  bg-[#E8D0FF]  ">
                  <h1 className="pt-2 text-center text-normal text-xl "> 1</h1>
                </div>
                <div className="w-[80%]">
                  <div>
                    <h1 className="text-xl text-[#000000]"> Detection </h1>
                    <p>
                      Continuous NHI Discovery which is Sustained,
                      Comprehensive, Complete.
                    </p>
                  </div>
                </div>
              </li>
              <li className="w-full min-h-[110px] p-4 flex items-center justify-evenly  rounded-tr-xl">
                <div className=" h-10 w-10  bg-[#E6E6E68C]  ">
                  <h1 className="pt-2 text-center text-normal text-xl "> 2</h1>
                </div>
                <div className="w-[80%]">
                  <div>
                    <h1 className="text-xl text-[#000000]"> Remediation </h1>
                    <p>
                      Reducing the blast radius before it blasts your
                      compliance.
                    </p>
                  </div>
                </div>
              </li>
              <li className="w-full min-h-[110px] p-4 flex items-center justify-evenly  rounded-tr-xl">
                <div className=" h-10 w-10  bg-[#E6E6E68C]  ">
                  <h1 className="pt-2 text-center text-normal text-xl "> 3</h1>
                </div>
                <div className="w-[80%]">
                  <div>
                    <h1 className="text-xl text-[#000000]"> Governance </h1>
                    <p>
                      Translating complex identity behaviors into actionable
                      insights.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex flex-col">
            <img className="w-[80%]" src={Detection} alt="detection" />
          </div>
        </div>
      </div>

      <div ref={ref} className="  mt-15 font-geist">
        <h1 className="text-xl mb-2 md:text-3xl font-medium"> OUR TOP USPs</h1>
        <div className="flex gap-2">
          {/* desktop */}
          <div
            className="overflow-x-hidden p-5      
   hidden md:flex justify-between  items-center   gap-0  md:p-10 w-full   bg-[#D6ABFF5C]  "
          >
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className=" md:w-auto "
            >
              <h1 className=" text-lg md:text-2xl  p-0 m-0">
                Industry-Leading Deep Scan Technology
              </h1>
              <ul className="text-base md:text-lg pl-8  text-black list-disc ">
                <li>Detects more</li>
                <li> faster Smarter accuracy</li>
                <li>Patent pending innovation</li>
              </ul>
            </motion.div>
            <motion.div
              variants={leftbarVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className=" h-full  w-[5%]  rounded bg-[#E9C3FFBF]"
            ></motion.div>

            <motion.div
              variants={rigthBarVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="hidden md:block  h-full w-[5%] rounded  bg-[#E9C3FFBF]"
            ></motion.div>
            <div>
              <motion.img
                variants={imgVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className=" hidden md:block w-200 rounded-xl"
                src={gitIntegrations}
                alt="gitIntegrationPage"
              />
            </div>
          </div>
          {/* Mobile */}
          <div
            className="overflow-x-hidden p-5    
              flex flex-col    md:hidden   gap-0  md:p-10 w-full   bg-[#D6ABFF5C]  "
          >
            <div className="flex justify-between mb-5 ">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className=" md:w-auto "
              >
                <h1 className=" text-lg md:text-2xl  p-0 m-0">
                  Industry-Leading Deep Scan Technology
                </h1>
                <ul className="text-base md:text-lg pl-8  text-black list-disc ">
                  <li>Detects more</li>
                  <li> faster Smarter accuracy</li>
                  <li>Patent pending innovation</li>
                </ul>
              </motion.div>
              <motion.div
                variants={leftbarVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className=" h-full  w-[5%]  rounded bg-[#E9C3FFBF]"
              ></motion.div>
            </div>
            <div className="flex justify-between gap-1 ">
              <motion.div
                variants={rigthBarVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className=" md:hidden h-full w-[5%] rounded  bg-[#E9C3FFBF]"
              ></motion.div>
              <div>
                <motion.img
                  variants={imgVariants}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  className="  md:hidden w-75 rounded-xl"
                  src={gitIntegrations}
                  alt="gitIntegrationPage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 font-dmsans  mx-5 mb-[500px]   ">
        <div className="w-[55%] my-10 mx-auto ">
          <h1 className="text-3xl font-medium text-[#383838]">
            Breadth of Platform Coverage
          </h1>
          <p className=" mt-2 font-normal text-[#000000]">
            Secure your entire modern environment from code to cloud. Stackguard
            offers unparalleled Breadth of Platform Coverage, seamlessly
            integrating with major Version Control Systems, CI/CD pipelines,
            Cloud platforms and Storage (AWS, Azure, GCP, etc.), Chat & SaaS
            applications for a unified security view.
          </p>
        </div>

        <div>
          <img
            className="mx-auto max-w-[60%]"
            src={platformCoverage}
            alt="platformCoverageImg"
          />
        </div>
      </div>

      <div className="mt-10 mx-10 h-[600px] flex justify-between border border-black font-dmsans  ">
        <div>
          <h1 className="text-3xl font-normal color-[#303030] ">
            Frequently asked questions
          </h1>
        </div>

        <div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
