import React, { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

import myLogo from "../images/photo.jpg";
import hamburgerSvg from "../images/hamburger.svg";
import SideBar from "./SideBar";

import nikoWhite from "../images/nikocodes-w.svg";

import homeSvg from "../images/home.svg";
import aboutSvg from "../images/about.svg";
import projectsSvg from "../images/projects.svg";
import stackSvg from "../images/stack.svg";
import contactSvg from "../images/mailbox.svg";
import linkedinSvg from "../images/linkedin.svg";
import githubSvg from "../images/github.svg";
import femSvg from "../images/frontendmentor.svg";
import sun from "../images/icon-light-theme.svg";
import moon from "../images/icon-dark-theme.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const MobileHeader = ({ theme, handleThemeSwitch }) => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const open = () => {
    setIsMobileNav(true);
  };

  const close = () => {
    setIsMobileNav(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const navVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <Fragment>
      {/* {isMobileNav && (
        <SideBar isNav={isMobileNav} backdropClose={close} onExit={close} />
      )} */}

      <div
        data-aos="fade-down"
        className="md:hidden dark:bg-[#1c1c1cf4] bg-[#eeededf4] fixed w-full border-b border-[#424242] z-20"
      >
        <div className="flex mx-7 py-5">
          <div className="flex w-full gap-3 h-auto">
            <img
              src={myLogo}
              alt=""
              className="rounded-full w-[2.8rem] h-[2.8rem] object-cover cursor-pointer border-[1.5px] border-black dark:border-white"
            />
            <p className="text-[12.5px] my-auto font-[500] tracking-[1.1px] dark:text-white text-black font-cereal-normal">
              Emmanuel Ayeniko
              <br />
              <span className="dark:text-white text-black opacity-50">
                Software Engineer
              </span>
            </p>
          </div>
          <div onClick={open}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid cursor-pointer dark:bg-[#414040] bg-[#bebfbf] h-[2.5rem] w-[2.5rem] rounded-lg"
            >
              <img
                src={hamburgerSvg}
                alt=""
                className="h-[1.8rem] mx-auto my-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence initial={true} mode="wait">
        {isMobileNav && (
          <Fragment>
            {isMobileNav && (
              <motion.div
                key="bd"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.25,
                }}
                onClick={close}
                className="top-0 bottom-0 right-0 left-0 fixed z-30 bg-[#1c1c1c] md:hidden"
              ></motion.div>
            )}

            <motion.div
              key="sdb"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navVariants}
              className={`${
                !isMobileNav && "hidden"
              } z-40 fixed top-0 bottom-0 left-0 w-[250px] overflow-y-auto text-center dark:bg-black-gradient bg-white-gradient border-r-[1.5px] border-[#282828] md:flex flex-col dark:text-white text-black`}
            >
              <div className="w-full cursor-pointer">
                <img
                  src={nikoWhite}
                  alt=""
                  className=" h-[5rem] mx-auto scale-[1.8] translate-y-[-0.6rem] filter invert dark:filter-none"
                />
              </div>
              <div className="flex w-full pl-[1.7rem] translate-y-[-1rem] gap-2 h-auto">
                <img
                  src={myLogo}
                  alt=""
                  className="rounded-full w-[2.8rem] h-[2.8rem] object-cover cursor-pointer border-[1.5px] border-black dark:border-white"
                />
                <p className="text-[12.5px] my-auto font-[500] tracking-[1.1px] font-cereal-normal">
                  Emmanuel Ayeniko
                  <br />
                  <span className="dark:text-white text-black opacity-50">
                    Software Engineer
                  </span>
                </p>
              </div>
              <div className="text-[14px] flex flex-col gap-2 mt-3 font-cereal-normal">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={close}
                  className="flex mx-6 text-left opacity-50 duration-300 hover:opacity-100 cursor-pointer"
                  activeClass="w-[13rem] mx-auto rounded-md  bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
                >
                  <img
                    src={homeSvg}
                    alt=""
                    className="h-[1.7rem] my-auto ml-2 filter invert dark:filter-none"
                  />
                  <p className="p-[8px]">Home</p>
                </Link>

                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={close}
                  className="flex mx-6 text-left opacity-50 duration-300 hover:opacity-100 cursor-pointer"
                  activeClass="w-[13rem] mx-auto rounded-md bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
                >
                  <img
                    src={aboutSvg}
                    alt=""
                    className="h-[1.7rem] my-auto ml-2 filter invert dark:filter-none"
                  />
                  <p className="p-[8px]">About</p>
                </Link>

                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={close}
                  className="flex mx-6 text-left opacity-50 duration-300 hover:opacity-100 cursor-pointer"
                  activeClass="w-[13rem] mx-auto rounded-md bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
                >
                  <img
                    src={projectsSvg}
                    alt=""
                    className="h-[1.7rem] my-auto ml-2 filter invert dark:filter-none"
                  />
                  <p className="p-[8px]">Projects</p>
                </Link>

                <Link
                  to="tech-stack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={close}
                  className="flex mx-6 text-left opacity-50 duration-300 hover:opacity-100 cursor-pointer"
                  activeClass="w-[13rem] mx-auto rounded-md bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
                >
                  <img
                    src={stackSvg}
                    alt=""
                    className="h-[1.7rem] my-auto ml-2 filter invert dark:filter-none"
                  />
                  <p className="p-[8px]">Tech Stack</p>
                </Link>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={close}
                  className="flex mx-6 text-left opacity-50 duration-300 hover:opacity-100 cursor-pointer"
                  activeClass="w-[13rem] mx-auto rounded-md bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
                >
                  <img
                    src={contactSvg}
                    alt=""
                    className="h-[1.7rem] my-auto ml-2 filter invert dark:filter-none scale-[0.85]"
                  />
                  <p className="p-[8px]">Contact</p>
                </Link>
              </div>

              <p className="mx-6 pl-2 text-[13px] opacity-80 mt-[3rem] font-light text-left tracking-[0.2em]">
                Socials
              </p>
              <div className="text-[14px] flex flex-col gap-3 mt-3">
                <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
                  <img
                    src={linkedinSvg}
                    alt=""
                    className="h-[1.7rem] my-auto ml-2 filter invert dark:filter-none"
                  />
                  <a
                    href="https://www.linkedin.com/in/emmanuel-ayeniko-72a758258/"
                    className="p-[6px]"
                  >
                    Linkedin
                  </a>
                </div>
                <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
                  <img
                    src={githubSvg}
                    alt=""
                    className="h-[1.7rem] my-auto ml-2 filter invert dark:filter-none"
                  />
                  <a
                    href="https://github.com/NIKO-DEV06?tab=repositories"
                    className="p-[6px]"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex mx-6 text-left opacity-50 hover:opacity-100 duration-300 cursor-pointer">
                  <img
                    src={femSvg}
                    alt=""
                    className="h-[1.7rem] my-auto ml-2 filter invert dark:filter-none"
                  />
                  <a
                    href="https://www.frontendmentor.io/profile/NIKO-DEV06"
                    className="p-[6px]"
                  >
                    Frontend Mentor
                  </a>
                </div>
              </div>
              <a href="https://drive.google.com/file/d/1emWWLUIi33wif7iWwBX-NlYYUEib2u4E/view?usp=sharing">
                <motion.div
                  className="border-2 border-black dark:border-white mx-[3rem] mt-[3rem] rounded-lg scale-75 cursor-pointer group dark:hover:bg-white hover:bg-black duration-150"
                  initial={{ scale: 0.75 }}
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 0.5 }}
                >
                  <p className="p-3 font-semibold tracking-[0.25em] group-hover:text-black duration-150">
                    RESUME
                  </p>
                </motion.div>
              </a>
              <div className="flex justify-center items-center gap-[1rem] bg-[#c1c1c1] dark:bg-[#2e2e2e] mx-[3rem] py-[0.5rem] rounded-md cursor-pointer translate-y-[1.3rem]">
                <img
                  src={sun}
                  alt="sun"
                  className="filter invert dark:filter-none"
                />
                <div
                  onClick={handleThemeSwitch}
                  className=" relative w-[3.3rem] h-[1.5rem] bg-[#1c1c1c] border-[#ffffff70] border-[1.5px] rounded-full"
                >
                  <div
                    className={`absolute h-[1rem] w-[1rem] bg-white rounded-full top-[3px]
                right-[3px] transition-all duration-200 ${
                  theme === "light" ? "transform translate-x-[-180%]" : ""
                } `}
                  ></div>
                </div>
                <img
                  src={moon}
                  alt="moon"
                  className="filter invert dark:filter-none"
                />
              </div>
            </motion.div>
          </Fragment>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default MobileHeader;
