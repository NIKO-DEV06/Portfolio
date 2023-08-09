import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import myLogo from "../images/IMG_5969.jpeg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="dark:text-white text-black dark:bg-black-gradient bg-white-gradient h-screen md:mb-[20rem] lg:mb-auto"
      id="about"
      data-aos="fade-up"
    >
      <div className="relative md:ml-[13rem]">
        <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
        <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
        <h1 className="text-[1.5rem] font-[800] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font-[500] uppercase font-cereal-medium">
          About Me
        </h1>
      </div>
      <div className="lg:flex lg:mx-auto lg:mt-[8rem]">
        <p className="font[300] p-[1.35rem] md:ml-[16rem] md:mt-3 md:leading-[1.5rem] lg:mt-8 lg:ml-[19rem] lg:w-[43%] lg:scale-110 lg:leading-[1.7rem] font-cereal-light">
          I'm a coding enthusiast who loves crafting remarkable solutions. With
          a solid foundation in{" "}
          <span className="opacity-50"> computer science and programming</span>{" "}
          and my trusty keyboard, I create web and mobile applications using
          technologies like{" "}
          <span className="opacity-50">
            JavaScript, React Js, NextJs, Typescript, Firebase, MongoDB, Redux,
            TailwindCSS, SCSS and other lastest technologies.
          </span>
          <br />
          <br />I never stop learning, I'm constantly exploring the latest
          trends and technologies to stay ahead of the curve. When I'm not
          immersed in coding, you'll find me cheering for my favorite football
          team (PSG🔴🔵).
          <br />
          <br /> If you're looking for a dedicated software developer who is
          both skilled and eager to learn, look no further! Let's team up and
          make something truly amazing. Together, we'll transform your ideas
          into reality.
        </p>
        <div className="lg:translate-y-[-0.6rem] relative w-[18rem] mx-auto lg:mx-auto md:mx-[23rem]  lg:scale-90 md:scale[0.5] lg:my-auto group cursor-pointer mdmt-[6.5rem]">
          <img
            src={myLogo}
            alt=""
            className="rounded-sm dark:border-white border-black h-[18rem] mt-3 relative z-[2] border-2"
          />

          <div className="w-[18rem] h-[18rem] border-2 dark:border-white border-black absolute inset-0 left-[1rem] top-[1rem] lg:left-[1.1rem] lg:top-[1.8rem] group-hover:lg:left-0 group-hover:lg:top-3 group-hover:lg:scale-110 duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
