import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import myLogo from '../images/photo.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="dark:text-white text-black dark:bg-black-gradient bg-white-gradient md:mb-[10rem] lg:mb-[7rem] 2xl:max-w-[1500px] 2xl:m-auto"
      id="about"
      data-aos="fade-up"
    >
      <div className="relative md:ml-[13rem]">
        <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#212121]" />
        <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#212121]" />
        <h1 className="text-[1.5rem] font[800] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font[500] uppercase font-cereal-normal">
          About Me 👨‍🔧
        </h1>
      </div>
      <div className="lg:flex lg:mx-auto lg:mt-[4rem]">
        <p className="font[300] p-[1.35rem] md:ml-[16rem] md:mt-3 md:leading-[1.5rem] lg:mt-8 lg:ml-[19rem] lg:w-[43%] lg:scale-110 lg:leading-[1.7rem] font-cereal-light">
          I'm a passionate Fullstack Developer with 4+ years of experience who
          builds impactful, end-to-end solutions. With a strong computer science
          background, I create scalable apps using tools like{' '}
          <span className="opacity-60 italic">
            Next.js, ReactJS, TypeScript, Tailwind CSS, Nest.js, and Node.js,
          </span>{' '}
          and manage databases like{' '}
          <span className="opacity-60 italic pr-0.5">
            PostgreSQL and MongoDB{' '}
          </span>
          for smooth frontend-backend integration.
          <br />
          <br />
          I'm always learning and exploring the latest trends in frontend and
          backend development, as well as cloud technologies like{' '}
          <span className="opacity-60 italic">AWS, Google Cloud</span>, and
          containerization tools like{' '}
          <span className="opacity-60 italic pr-0.5">
            Docker and Kubernetes
          </span>{' '}
          to stay ahead of the curve.
          <br />
          <br /> If you need a versatile developer to bring ideas to life and
          build high-performing fullstack applications, let's connect!
        </p>
        <div className="lg:translate-y-[-0.6rem] relative w-[18rem] mx-auto lg:mx-auto md:mx-[23rem]  lg:scale-90 md:scale[0.5] lg:my-auto group cursor-pointer mdmt-[6.5rem]">
          <img
            src={myLogo}
            alt=""
            className="rounded-sm dark:border-white border-black w-[18rem] h-[18rem] mt-3 relative z-[2] border-2 object-cover"
          />

          <div className="w-[18rem] h-[18rem] border-2 dark:border-white border-black absolute inset-0 left-[1rem] top-[1rem] lg:left-[1.1rem] lg:top-[1.8rem] group-hover:lg:left-0 group-hover:lg:top-3 group-hover:lg:scale-110 duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
