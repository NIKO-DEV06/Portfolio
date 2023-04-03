import React from "react";

import myLogo from "../images/IMG_5969.jpeg";

const About = () => {
  return (
    <section className="text-white bg-black-gradient h-screen">
      <div className="relative md:ml-[13rem]">
        <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
        <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
        <h1 className="text-[1.5rem] font-[600] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font-[500] uppercase">
          About Me
        </h1>
      </div>
      <div className="lg:flex lg:mx-auto lg:mt-[8rem]">
        <p className="font-[300] p-[1.35rem] md:ml-[16rem] md:mt-3 md:leading-[1.5rem] lg:mt-8 lg:ml-[19rem] lg:w-[43%] lg:scale-110 lg:leading-[1.7rem]">
          I'm a code lover and motivated software developer with a passion for
          creating innovative and impactful solutions. With a solid foundation
          in
          <span className="opacity-60"> computer science and programming.</span>
          <br />
          <br /> I have experience in developing web and mobile applications
          using various technologies such as{" "}
          <span className="opacity-50">
            JavaScript, React Js, NextJs, Typescript, Redux, TailwindCSS and
            other lastest technologies.
          </span>
          <br />
          <br /> I am always eager to learn and stay updated with the latest
          technologies by continuing to self teach and develop myself. Outside
          of my professional life i enjoy playing video games and
          watching/playing football.
        </p>
        <div className="relative w-[18rem] mx-auto lg:mx-auto md:mx-[23rem] lg:scale-90 md:scale-[.4] lg:my-auto group cursor-pointer md:translate-y-[-6.5rem]">
          <img
            src={myLogo}
            alt=""
            className="rounded-sm h-[18rem] mt-3 relative z-[2]"
          />

          <div className="w-[18rem] h-[18rem] border-2 absolute inset-0 left-[1rem] top-[1rem] lg:left-[1.1rem] lg:top-[1.8rem] group-hover:lg:left-0 group-hover:lg:top-3 group-hover:lg:scale-110 duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
