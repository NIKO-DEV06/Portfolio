import React, { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import nikoBlack from "../images/nikocodes-b.svg";
import nikoWhite from "../images/nikocodes-w.svg";
import myLogo from "../images/IMG_5969.jpeg";
import homeSvg from "../images/home.svg";
import aboutSvg from "../images/about.svg";
import projectsSvg from "../images/projects.svg";
import stackSvg from "../images/stack.svg";
import contactSvg from "../images/mailbox.svg";
import linkedinSvg from "../images/linkedin.svg";
import githubSvg from "../images/github.svg";
import femSvg from "../images/frontendmentor.svg";

const SideBar = ({ isNav, backdropClose }) => {
  return (
    <AnimatePresence onExitComplete={backdropClose} mode="wait">
      <Fragment>
        {isNav && (
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
            onClick={backdropClose}
            className="top-0 bottom-0 right-0 left-0 fixed z-30 bg-[#1c1c1c] md:hidden"
          ></motion.div>
        )}

        <motion.div
          key="sdb"
          initial={{ x: !isNav ? "0%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.25 }}
          className={`${
            !isNav && "hidden"
          } z-40 fixed top-0 bottom-0 left-0 w-[260px] overflow-y-auto text-center bg-[#1c1c1c] border-r-[1.5px] border-[#282828] md:flex flex-col text-white`}
        >
          <div className="w-full cursor-pointer">
            <img
              src={nikoWhite}
              alt=""
              className=" h-[5rem] mx-auto scale-[1.8] translate-y-[-0.6rem]"
            />
          </div>
          <div className="flex w-full pl-[1.7rem] translate-y-[-1rem] gap-2 h-auto">
            <img
              src={myLogo}
              alt=""
              className="rounded-full w-[2.7rem] cursor-pointer border-[1px]"
            />
            <p className="text-[12.5px] my-auto font-[500] tracking-[1.1px]">
              Emmanuel Ayeniko
              <br />
              <span className="text-white opacity-50">Software Engineer</span>
            </p>
          </div>
          <div className="text-[14px] flex flex-col gap-3 mt-3">
            <div className="flex mx-6 text-left bg-[#2b2b2b] hover:opacity-100 cursor-pointer rounded-md border-[1px] border-[#393939]">
              <img src={homeSvg} alt="" className="h-[1.7rem] my-auto ml-2" />
              <p className="p-[6px]">Home</p>
            </div>
            <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
              <img src={aboutSvg} alt="" className="h-[1.7rem] my-auto ml-2" />
              <p className="p-[6px]">About</p>
            </div>
            <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
              <img
                src={projectsSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2"
              />
              <p className="p-[6px]">Projects</p>
            </div>
            <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
              <img src={stackSvg} alt="" className="h-[1.7rem] my-auto ml-2" />
              <p className="p-[6px]">Tech Stack</p>
            </div>
            <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
              <img
                src={contactSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 scale-90"
              />
              <p className="p-[6px]">Contact</p>
            </div>
          </div>
          <p className="mx-6 pl-2 text-[13px] opacity-80 mt-[3rem] font-light text-left tracking-[0.2em]">
            Socials
          </p>
          <div className="text-[14px] flex flex-col gap-3 mt-3">
            <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
              <img
                src={linkedinSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2"
              />
              <a href="" className="p-[6px]">
                Linkedin
              </a>
            </div>
            <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
              <img src={githubSvg} alt="" className="h-[1.7rem] my-auto ml-2" />
              <a
                href="https://github.com/NIKO-DEV06?tab=repositories"
                className="p-[6px]"
              >
                GitHub
              </a>
            </div>
            <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
              <img src={femSvg} alt="" className="h-[1.7rem] my-auto ml-2" />
              <a
                href="https://www.frontendmentor.io/profile/NIKO-DEV06"
                className="p-[6px]"
              >
                Frontend Mentor
              </a>
            </div>
          </div>
          <motion.div
            className="border-2 mx-[3rem] mt-[3rem] rounded-lg scale-75 cursor-pointer group hover:bg-white duration-150"
            initial={{ scale: 0.75 }}
            whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 0.5 }}
          >
            <p className="p-3 font-semibold tracking-[0.25em] group-hover:text-black duration-150">
              RESUME
            </p>
          </motion.div>
        </motion.div>
      </Fragment>
    </AnimatePresence>
  );
};

export default SideBar;
