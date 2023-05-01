import React, { Fragment, useEffect } from "react";
import { motion } from "framer-motion";

import sneakers from "../projectsImages/sneakers.jpg";
import forkify from "../projectsImages/forkify.jpg";
import countries from "../projectsImages/countries.jpg";
import todo from "../projectsImages/todo.jpg";
import reactMeals from "../projectsImages/reactmeals.png";
import felsunny from "../projectsImages/felsunny.png";

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
      id: "p5",
      name: "Rest Countries",
      desc: "The project is designed to utilize the REST Countries API to showcase detailed information about countries worldwide, including names, flags, population, capital, and more. The user interface enables users to search, filter, and sort the data according to their preferences.",
      tools: ["Next.JS", "TailwindCSS", "React.JS"],
      img: countries,
      github: "https://github.com/NIKO-DEV06/REST-Countries",
      live: "https://rest-countries-niko.vercel.app/",
    },
    {
      id: "p1",
      name: "E-commerce product page",
      desc: " A responsive product page for an E-Commerce Website with a fully functional cart logic, an image slider and an image gallery modal.",
      tools: ["React.JS", "Redux/Redux Toolkit", "Tailwind Css"],
      img: sneakers,
      github: "https://github.com/NIKO-DEV06/e-commerce-sneaker-page",
      live: "https://e-commerce-sneaker-niko.netlify.app/",
    },
    {
      id: "p6",
      name: "Felsunny Technology",
      desc: "A 10-Page NextJS Web Application for a multipurpose company containing the services, and a sepearte service page, company description with a fully functional contact-form. I designed the frontend infrasture, web functionalities and implemented performance optimization techniques.",
      tools: ["Next.JS", "TailwindCSS", "Framer Motion"],
      img: felsunny,
      github: "https://github.com/NIKO-DEV06/Felsunny-Technology",
      live: "https://www.felsunny.com/",
    },
    {
      id: "p2",
      name: "React Meals",
      desc: "A fully functional Food Ordering Web Application connected to a backend database to send POST requests of the orders to the database. It has fully fucntional cart logic.",
      tools: ["React.JS", "CSS Modules", "Firebase"],
      img: reactMeals,
      github: "https://github.com/NIKO-DEV06/ReactMeal-Firebase",
      live: "https://reactmeals-niko.netlify.app/",
    },
    {
      id: "p3",
      name: "Forkify",
      desc: "A Food recipe web application with consumes data from an API to display large numbers of delicious recipes. Users can add recipes with a form which sends post requests to the API.",
      tools: ["HTML", "SCSS/SASS", "Javascript"],
      img: forkify,
      github: "https://github.com/NIKO-DEV06/forkify-project",
      live: "https://forkify-emmanuelayeniko.netlify.app/",
    },
    {
      id: "p4",
      name: "Todo App",
      desc: "A very interactive todo appliction which can add and delete todos with drag and drop functionality to reorder the list. Todos are stored to local storage and has beautiful light and dark theme modes.",
      tools: ["React.JS", "TailwindCSS", "React Beautiful DND"],
      img: todo,
      github: "https://github.com/NIKO-DEV06/Todo-App",
      live: "https://todo-app-niko.netlify.app/",
    },
  ];

  return (
    <Fragment>
      <section
        data-aos="fade-up"
        className="text-white mt-[5rem] lg:mt-[4rem] h-screen pb-[95rem] md:pb-[75rem]"
        id="projects"
      >
        <div className="relative md:ml-[13rem]">
          <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
          <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
          <h1 className="text-[1.5rem] font-[800] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font-[500]">
            PROJECTS
          </h1>
        </div>
        {/* projects list */}

        <div className="w-full flex flex-col justify-center scale-[0.86] translate-y-[-10rem] lg:mt-[7rem]">
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
                  className={` w-[30rem] h-[16rem] mx-auto ${
                    project.id !== "p6" ? "object-cover" : ""
                  } object-top lg:h-auto`}
                />
                <div className="border-[#8b8b8b] border-2">
                  <div className="ml-4 lg:mr-5">
                    <h2 className="my-5 font-[700] text-[1.55rem] underline">
                      {project.name}
                    </h2>
                    <p className="font-[500] pr-3 tracking-wide">
                      {project.desc}
                    </p>
                    <div className="mt-5 flex text-[0.9rem] gap-2">
                      {project.tools.map((tool) => (
                        <div key={Math.random()} className="border-2 p-1">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center gap-[1.5rem] translate-y-[-1.5rem]">
                    <motion.a
                      href={project.github}
                      className="flex border-2 mt-[3rem] rounded-lg scale-75 cursor-pointer duration-150 mr-[-1.5rem]"
                      initial={{ scale: 0.75 }}
                      whileHover={{ scale: 0.77 }}
                      whileTap={{ scale: 0.5 }}
                    >
                      <img
                        src={githubSvg}
                        alt=""
                        className="h-[1.7rem] my-auto ml-2 scale-95 pl-1"
                      />
                      <p className="p-3 font-semibold tracking-[0.25em] duration-150">
                        GITHUB
                      </p>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex border-2  mt-[3rem] rounded-lg scale-75 cursor-pointer bg-white duration-150 ml-[-1.5rem] w-[11rem]"
                      initial={{ scale: 0.75 }}
                      whileHover={{ scale: 0.77 }}
                      whileTap={{ scale: 0.5 }}
                    >
                      <img
                        src={linkSvg}
                        alt=""
                        className="h-[1.9rem] my-auto ml-2"
                      />
                      <p className="p-3 font-semibold tracking-[0.25em] duration-150 text-black">
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
