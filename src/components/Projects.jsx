import React, { Fragment, useEffect } from "react";
import { motion } from "framer-motion";

import audiophile from "../projectsImages/audiophile.jpg";
import countries from "../projectsImages/countries.jpg";
import planets from "../projectsImages/planets.jpg";
import felsunny from "../projectsImages/felsunny.png";
import kanban from "../projectsImages/kanban.jpg";
import krypt from "../projectsImages/krypt.png";

import AOS from "aos";
import "aos/dist/aos.css";

import linkSvg from "../images/link.svg";
import githubSvg from "../images/github.svg";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      id: "p1",
      name: "Audiophile",
      desc: "Audiophile is a responsive e-commerce website built with Next.js, TypeScript, Firebase and Tailwind CSS. It features audio products, user authentication, and a streamlined checkout process.",
      tools: [
        "Next.JS",
        "Typescript",
        "Redux-Toolkit",
        "Firebase",
        "Tailwind CSS",
        "Framer-Motion",
        "React-Hook-Form",
      ],
      img: audiophile,
      github: "https://github.com/NIKO-DEV06/audiophile",
      live: "https://audiophile-niko-dev06.vercel.app/",
    },
    {
      id: "p9",
      name: "Kanban Task Management",
      desc: "This project is a responsive task management application featuring a Kanban board. Users can easily add, edit, and delete tasks & boards, and utilize drag and drop functionality for seamless task movement. Redux-Toolkit is used for state management.",
      tools: ["React.JS", "Typescript", "Tailwind CSS", "Redux-Toolkit"],
      img: kanban,
      github: "https://github.com/NIKO-DEV06/Kanban-Task-Management",
      live: "https://nikokanban-task-manager.vercel.app/",
    },
    {
      id: "p6",
      name: "Felsunny Technology LTD",
      desc: "I built a multipage website for the multipurpose company Felsunny Technology LTD. I handled the frontend design, web functionalities, and optimized performance.",
      tools: [
        "Next.JS",
        "Typescript",
        "Tailwind CSS",
        "Framer-Motion",
        "React-Hook-From",
      ],
      img: felsunny,
      github: "https://github.com/NIKO-DEV06/Felsunny-v2",
      live: "https://www.felsunny.com/",
    },
    {
      id: "p5",
      name: "Rest Countries",
      desc: "The project is designed to utilize the REST Countries API to showcase detailed information about countries worldwide, including names, flags, population, capital, and more. The user interface enables users to search, filter, and sort the data according to their preferences.",
      tools: ["Next.JS", "Tailwind CSS", "React.JS"],
      img: countries,
      github: "https://github.com/NIKO-DEV06/REST-Countries",
      live: "https://rest-countries-niko.vercel.app/",
    },

    {
      id: "p4",
      name: "Krypt",
      desc: "Krypt is a web3.0 app for securely transferring Ethereum, enabling users to send the cryptocurrency to recipients within the Ethereum network.",
      tools: ["React.JS", "Solidity", "Ethers.JS", "HardHat", "Tailwind CSS"],
      img: krypt,
      github: "https://github.com/NIKO-DEV06/Krypt",
      live: "https://krypt-ebon-delta.vercel.app/",
    },
    {
      id: "p2",
      name: "Planets Fact Site",
      desc: "Planets Fact Site is a dynamic website that showcases fascinating planet facts. With its responsive design, animations, and transitions, it offers an engaging user experience. Explore the captivating world of planets on this interactive platform.",
      tools: ["Next.JS", "Typescript", "Tailwind CSS", "Framer-Motion", "JSON"],
      img: planets,
      github: "https://github.com/NIKO-DEV06/Planets-Fact-Site",
      live: "https://niko-planets.vercel.app/",
    },
  ];

  return (
    <Fragment>
      <section
        data-aos="fade-up"
        className="dark:text-white text-black mt-[7rem] lg:mt-[4rem] h-screen pb-[100rem] md:pb-[83rem]"
        id="projects"
      >
        <div className="relative md:ml-[13rem]">
          <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
          <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
          <h1 className="text-[1.5rem] font-[800] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font-[500] font-cereal-medium">
            PROJECTS
          </h1>
        </div>
        {/* projects list */}

        <div className="w-full flex flex-col justify-center scale-[0.86] translate-y-[-14rem] md:translate-y-[-14rem] lg:mt-[7rem]">
          <div className="w-[25rem] mx-auto flex flex-col gap-3 lg:w-[60rem]">
            {/* // */}
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col pb-8 md:translate-x-[9.5rem] lg:flex-row"
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className={` w-[30rem] h-[16rem] mx-auto border-t-2 border-l-2 lg:border-b-2 border-r-2 lg:border-r-0 border-black dark:border-white ${
                    project.id !== "p6" ? "object-cover" : ""
                  } object-top lg:h-auto`}
                />
                <div className="dark:border-white border-2 border-black">
                  <div className="ml-4 lg:mr-5">
                    <h2 className="my-5 font-cereal-bold text-[1.55rem] underlin">
                      {project.name}
                    </h2>
                    <p className="font-cereal-light pr-3 tracking-wide">
                      {project.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap text-[0.9rem] gap-2">
                      {project.tools.map((tool) => (
                        <div
                          key={Math.random()}
                          className="border-2 font-cereal-medium border-black dark:border-white p-1"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center gap-[1.5rem] translate-y-[-1.5rem]">
                    <motion.a
                      href={project.github}
                      className="flex border-2 border-black dark:border-white mt-[3rem] rounded-lg scale-75 cursor-pointer duration-150 mr-[-1.5rem]"
                      initial={{ scale: 0.75 }}
                      whileHover={{ scale: 0.77 }}
                      whileTap={{ scale: 0.5 }}
                    >
                      <img
                        src={githubSvg}
                        alt=""
                        className="h-[1.7rem] my-auto ml-2 scale-95 pl-1 filter invert dark:filter-none"
                      />
                      <p className="p-3 font-semibold tracking-[0.25em] duration-150 ">
                        GITHUB
                      </p>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex border-2  mt-[3rem] rounded-lg scale-75 cursor-pointer dark:bg-white bg-black duration-150 ml-[-1.5rem] w-[11rem]"
                      initial={{ scale: 0.75 }}
                      whileHover={{ scale: 0.77 }}
                      whileTap={{ scale: 0.5 }}
                    >
                      <img
                        src={linkSvg}
                        alt=""
                        className="h-[1.9rem] my-auto ml-2 filter invert dark:filter-none"
                      />
                      <p className="p-3 font-semibold tracking-[0.25em] duration-150 dark:text-black text-white">
                        LIVE SITE
                      </p>
                    </motion.a>
                  </div>
                </div>
              </div>
            ))}

            {/* // */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
