import React, { Fragment, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import nikoBlack from "../images/nikocodes-b.svg";
import nikoWhite from '../images/nikocodes-w.svg';
import myLogo from '../images/photo.jpg';
import homeSvg from '../images/home.svg';
import aboutSvg from '../images/about.svg';
import projectsSvg from '../images/projects.svg';
import stackSvg from '../images/stack.svg';
import contactSvg from '../images/mailbox.svg';
import linkedinSvg from '../images/linkedin.svg';
import githubSvg from '../images/github.svg';
import femSvg from '../images/frontendmentor.svg';
import sun from '../images/icon-light-theme.svg';
import moon from '../images/icon-dark-theme.svg';

const SideBar = ({ isNav, backdropClose, theme, handleThemeSwitch }) => {
  useEffect(() => {
    AOS.init({ duration: 100, once: true });
  }, []);

  return (
    <AnimatePresence onExitComplete={backdropClose} mode="wait">
      <Fragment>
        {isNav && (
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.25 }}
            onClick={backdropClose}
            className="top-0 bottom-0 right-0 left-0 fixed z-30 bg-[#1c1c1c] md:hidden"
          ></motion.div>
        )}

        <motion.div
          data-aos="fade-right"
          key="sdb"
          initial={{ x: '-100%' }}
          // initial={{ x: !isNav ? "0%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3 }}
          className={`${
            !isNav && 'hidden'
          } z-40 fixed top-0 bottom-0 font-cereal-normal left-0 w-[250px] overflow-y-auto text-center dark:bg-black-gradient bg-white-gradient border-r-[1.5px] border-[#282828] md:flex flex-col dark:text-white text-black`}
        >
          <div className="w-full cursor-pointer">
            <img
              src={nikoWhite}
              alt=""
              className="h-[5rem] mx-auto scale-[1.8] translate-y-[-0.6rem] filter invert dark:invert-0"
            />
          </div>
          <div className="flex w-full pl-[1.7rem] translate-y-[-1rem] gap-2 h-auto">
            <img
              src={
                'https://res.cloudinary.com/djabkdvek/image/upload/v1748168288/photo_yvb19n.jpg'
              }
              alt=""
              className="rounded-full w-[2.8rem] h-[2.8rem] object-cover cursor-pointer border-[1.5px] border-black dark:border-white"
            />
            <p className="text-[12.5px] my-auto font-[500] tracking-[1.1px] ">
              Emmanuel Ayeniko
              <br />
              <span className="dark:text-white text-black opacity-50">
                Software Engineer
              </span>
            </p>
          </div>
          <div className="text-[14px] flex flex-col gap-2 mt-3">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={backdropClose}
              className="flex mx-6 text-left opacity-80 duration-300 hover:opacity-100 hover:scale-[1.1] hover:translate-x-[1rem] cursor-pointer"
              activeClass="w-[13rem] mx-auto rounded-md bg-[#c0c0c0] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
            >
              <img
                src={homeSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 filter invert dark:invert-0"
              />
              <p className="p-[8px]">Home</p>
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={backdropClose}
              className="flex mx-6 text-left opacity-80 duration-300 hover:opacity-100 hover:scale-[1.1] hover:translate-x-[1rem] cursor-pointer"
              activeClass="w-[13rem] mx-auto rounded-md bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
            >
              <img
                src={aboutSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 filter invert dark:invert-0"
              />
              <p className="p-[8px]">About</p>
            </Link>

            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={backdropClose}
              className="flex mx-6 text-left opacity-80 duration-300 hover:opacity-100 hover:scale-[1.1] hover:translate-x-[1rem] cursor-pointer"
              activeClass="w-[13rem] mx-auto rounded-md bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
            >
              <img
                src={projectsSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 filter invert dark:invert-0"
              />
              <p className="p-[8px]">Projects</p>
            </Link>

            <Link
              to="tech-stack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={backdropClose}
              className="flex mx-6 text-left opacity-80  duration-300 hover:opacity-100 hover:scale-[1.1] hover:translate-x-[1rem] cursor-pointer"
              activeClass="w-[13rem] mx-auto rounded-md bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
            >
              <img
                src={stackSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 filter invert dark:invert-0"
              />
              <p className="p-[8px]">Tech Stack</p>
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={backdropClose}
              className="flex mx-6 text-left opacity-80 duration-300 hover:opacity-100 hover:scale-[1.1] hover:translate-x-[1rem] cursor-pointer"
              activeClass="w-[13rem] mx-auto rounded-md bg-[#d4d4d4] dark:bg-[#2b2b2b] border-[#393939] opacity-100"
            >
              <img
                src={contactSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 scale-[0.85] filter invert dark:invert-0"
              />
              <p className="p-[8px]">Contact</p>
            </Link>
          </div>

          <p className="mx-6 pl-2 text-[13px] mt-[3rem] font-light text-left tracking-[0.2em]">
            Socials
          </p>
          <div className="text-[14px] flex flex-col gap-3 mt-3">
            <div className="flex mx-6 text-left opacity-80 hover:scale-[1.1] hover:translate-x-[1rem] hover:opacity-100 duration-300 cursor-pointer">
              <img
                src={linkedinSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 filter invert dark:invert-0"
              />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/emmanuel-ayeniko-72a758258/"
                className="p-[6px]"
              >
                Linkedin
              </a>
            </div>
            <div className="flex mx-6 text-left opacity-80 hover:scale-[1.1] hover:translate-x-[1rem] hover:opacity-100 duration-300 cursor-pointer">
              <img
                src={githubSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 filter invert dark:invert-0"
              />

              <a
                target="_blank"
                href="https://github.com/NIKO-DEV06"
                className="p-[6px]"
              >
                GitHub
              </a>
            </div>
            <div className="flex mx-6 text-left opacity-80 hover:scale-[1.1] hover:translate-x-[1rem] hover:opacity-100 duration-300 cursor-pointer">
              <img
                src={femSvg}
                alt=""
                className="h-[1.7rem] my-auto ml-2 filter invert dark:invert-0"
              />
              <a
                target="_blank"
                href="https://www.frontendmentor.io/profile/NIKO-DEV06"
                className="p-[6px]"
              >
                Frontend Mentor
              </a>
            </div>
          </div>
          <motion.a
            target="_blank"
            href="https://drive.google.com/file/d/1Be0NVzwag7iZbSft1jGctm0ZbgKllWSR/view?usp=sharing"
            className="border-2 border-black dark:border-white mx[3rem] mt-[3rem] rounded-lg scale-75 cursor-pointer group dark:hover:bg-white hover:bg-black  duration-150"
            initial={{ scale: 0.75 }}
            // whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 0.5 }}
          >
            <p className="p-3 uppercase font-semibold tracking-[0.25em] dark:group-hover:text-black group-hover:text-white dark:text-white text-black duration-150">
              Resumé
            </p>
          </motion.a>
          <div className="px-[1rem] flex justify-center items-center gap-[1rem] bg-[#c1c1c1] dark:bg-[#2e2e2e] mx-[1.5rem] py-[0.5rem] rounded-md mt-[1rem] cursor-pointer translatey-[4rem]">
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
                  theme === 'light' ? 'transform translate-x-[-180%]' : ''
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
    </AnimatePresence>
  );
};

export default SideBar;
