import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

import resumeSvg from "../images/resume.svg";
import contactSvg from "../images/mailbox.svg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      className="dark:text-white text-black dark:bg-black-gradient bg-white-gradient pb-[280px]"
      id="home"
    >
      <h1 className="pt-[280px] text-[1.6rem] font-[600] leading-[2.5rem] text-center md:text-[2rem] md:leading-[2.5rem] md:ml-[15rem] lg:pt-[270px] lg:text-[3.7rem] lg:leading-[4.5rem] lg:ml-[16rem] lg:font-[500] uppercase">
        Welcome, I'm Emmanuel.
        <br />
        <div className="text-[1.3rem] font-[500] lg:text-[2.7rem] lg:font-[300]">
          <h2 className="flex gap-3 justify-center">
            <span>I am a</span>
            <span className="opacity-50">
              <Typewriter
                options={{
                  strings: ["Frontend Developer.", "Software Engineer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
        </div>
      </h1>
      <div className="flex justify-center translate-y-[-1.5rem] gap-[1.5rem] md:ml-[15rem]">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <motion.div
            className="flex border-2 mt-[3rem] dark:border-white border-black rounded-lg scale-75 cursor-pointer duration-150 mr-[-1.5rem]"
            initial={{ scale: 0.75 }}
            whileHover={{ scale: 0.77 }}
            whileTap={{ scale: 0.5 }}
          >
            <img
              src={contactSvg}
              alt=""
              className="h-[1.7rem] my-auto ml-2 scale-95 pl-1 filter invert dark:filter-none"
            />
            <p className="p-3 font-semibold tracking-[0.25em] duration-150">
              CONTACT
            </p>
          </motion.div>
        </Link>

        <motion.a
          href="https://drive.google.com/file/d/1emWWLUIi33wif7iWwBX-NlYYUEib2u4E/view?usp=sharing"
          className="flex border-2  mt-[3rem] rounded-lg scale-75 cursor-pointer bg-black dark:bg-white duration-150 ml-[-1.5rem]"
          initial={{ scale: 0.75 }}
          whileHover={{ scale: 0.77 }}
          whileTap={{ scale: 0.5 }}
        >
          <img
            src={resumeSvg}
            alt=""
            className="h-[1.9rem] my-auto ml-2 filter invert dark:filter-none"
          />
          <p className="p-3 font-semibold tracking-[0.25em] duration-150 dark:text-black text-white">
            RESUME
          </p>
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
