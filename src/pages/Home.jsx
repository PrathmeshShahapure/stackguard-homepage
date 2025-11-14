import { useRef, useEffect ,React} from "react";
import { motion, useInView } from "motion/react";
import gitIntegrations from "../assets/gitIntegrations.png";
import lifeCycle from "../assets/icons/lifeCyle.svg";
import eyeslogo from "../assets/icons/eyeslogo.svg";
import accesslogo from "../assets/icons/accesslogo.svg";
import keylogo from "../assets/icons/keylogo.svg";
import zombielogo from "../assets/icons/zombielogo.svg";
import ratiologo from "../assets/icons/ratiologo.svg";


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
      <div className=" mt-10 text-center mx-10 font-poppins">
        <h1 className="  text-lg font-normal text-transparent bg-clip-text bg-linear-to-r from-[#7A29C7] to-[#BC7EF6]  ">
          WE ENSURE YOU TO STAY COMPLIANT
        </h1>
        <h1 className=" text-3xl  md:text-5xl  lg:text-6xl font-medium m-2 ">
          AI-powered Security for <br /> Non-Human Identities (NHIs) and 
          Secrets
        </h1>
        <p className=" text-base md:text-lg font-normal mt-2 ">
          50:1. That's the ratio of non-human to human identities. Your
          service accounts, keys, and tokens dominate your attack surface
        </p>
        <div className="flex justify-center gap-2 my-4">
          <button
            className=" p-2 md:p-4 text-xs md:text-sm  rounded-full text-white bg-[rgb(68,8,125)]"
            type="button"
          >
            Book a demo
          </button>
          <button
            className="p-2  md:p-4 text-xs md:text-sm   rounded-full text-black border border-[#44087D]"
            type="button"
          >
            Book a risk free assessment
          </button>
        </div>
      </div>
      <div className="mt-5 grid h-[200px]  text-white grid-rows-1 grid-cols-[2fr_1fr_10fr_2fr_1fr_1fr] ">
        <div className="bg-linear-to-r from-[#D6ABFF] to-[#A14AEA]"></div>
        <div className="bg-purple-grad "></div>
        <div className="bg-purple-grad "></div>
        <div className="bg-purple-grad "></div>
        <div className="bg-purple-grad"></div>
        <div className="bg-purple-grad"></div>
      </div>

      <div className="w-full h-20 bg-[repeating-linear-gradient(to_right,#C0C0C0_0px,#C0C0C0_2px,transparent_1px,transparent_8px)] border border-[#C0C0C0]"></div>

       <div ref={ref} className="  mt-15 font-geist">
        <h1 className="text-xl mb-2 md:text-3xl font-medium"> OUR TOP USPs</h1>
        <div className="flex gap-2">
          {/* desktop */}
          <div className="overflow-x-hidden p-5      
   hidden md:flex justify-between  items-center   gap-0  md:p-10 w-full   bg-[#D6ABFF5C]  ">
           
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
              <motion.img variants={imgVariants}
               initial="hidden"
              animate={isInView ? "show" : "hidden"}
                className=" hidden md:block w-200 rounded-xl"
                src={gitIntegrations}
                alt="gitIntegrationPage"
              />
            </div>
            
          </div>
           {/* Mobile */}
           <div className="overflow-x-hidden p-5    
              flex flex-col    md:hidden   gap-0  md:p-10 w-full   bg-[#D6ABFF5C]  ">
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
              <motion.img variants={imgVariants}
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

      <div className="mt-15 mb-[500px]  text-center mx-5 ">
        <h1 className="text-xl md:text-3xl">
          able to <br />
          <span className=" bg-linear-to-r from-[#7C2BC8] to-[#BB7DF5] bg-clip-text text-transparent">
            integrate with 50+ of service providers
          </span>
        </h1>
      </div>

      <div className=" mx-5 mt-15">
        <h1 className="font-medium text-xl md:text-3xl">
          COMPLETE CONTROL OVER YOUR MACHINE IDENTITIES
        </h1>
        <h1 className="text-lg md:text-2xl bg-linear-to-r from-[#7C2BC8] to-[#BB7DF5] bg-clip-text text-transparent ">
          I am with AI - for NHIs at scale.
        </h1>

        <div className="mt-10  grid grid-cols-1   md:grid-cols-2  lg:grid-cols-3  content-center justify-center gap-6 ">
          <div className="">
            <img className="w-10" src={lifeCycle} alt="lifeCycLogo" />
            <h1 className="font-DmSans font-normal text-lg text-[#000000] ">
              No lifecycle management
            </h1>
            <p className="text-[#535353]">
              NHIs lack human-like governance with no onboarding, rotation,
              revocation, or regular review.
            </p>
          </div>
          <div className="">
            <img className="w-10" src={eyeslogo} alt="lifeCycLogo" />
            <h1 className="font-DmSans font-normal text-lg text-[#000000] ">
             The eyes have it
            </h1>
            <p className="text-[#535353]">
              You can’t secure what you can’t see. Most organizations lack a true NHI inventory.
            </p>
          </div>
          <div className="">
            <img className="w-10" src={ratiologo} alt="lifeCycLogo" />{" "}
            <h1 className="font-DmSans font-normal text-lg text-[#000000] ">
              Machine Mayhem
            </h1>
            <p className="text-[#535353]">
            For every human identity, there are at least 50 non human identities. Traditional IAM just can’t keep up.
            </p>
          </div>
          <div className="">
            <img className="w-10" src={accesslogo} alt="lifeCycLogo" />{" "}
            <h1 className="font-DmSans font-normal text-lg text-[#000000] ">
             Overprivileged access
            </h1>
            <p className="text-[#535353]">
             NHIs are often granted more access than they need. It’s an easily preventable breach waiting to occur.
            </p>
          </div>
          <div className="">
            <img className="w-10" src={zombielogo} alt="lifeCycLogo" />{" "}
            <h1 className="font-DmSans font-normal text-lg text-[#000000] ">
            Zombie NHIs
            </h1>
            <p className="text-[#535353]">
            NHIs are quickly created, rarely managed, and often outlive their purpose.
            </p>
          </div>
          <div className="h-50">
            <img className="w-10" src={keylogo} alt="lifeCycLogo" />{" "}
            <h1 className="font-DmSans font-normal text-lg text-[#000000] ">
              Secret spillage
            </h1>
            <p className="text-[#535353]">
             With unsecured and unmanaged NHIs, your enterprise secrets are sitting ducks for breaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
