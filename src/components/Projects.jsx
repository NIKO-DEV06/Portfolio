import React, { Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';

import rnb from '../projectsImages/rnb.png';
import rbm from '../projectsImages/rbm.png';
import autograph from '../projectsImages/auto.png';
import kanban from '../projectsImages/kanban.jpg';
import veevents from '../projectsImages/veevents.png';
import wingstop from '../projectsImages/wingstop.png';
import naitram from '../projectsImages/naitram.png';
import hessian from '../projectsImages/hessian.png';
import mediaBeast from '../projectsImages/mb.png';
import pengame from '../projectsImages/pengame-new.png';
import felsunny from '../projectsImages/felsunny.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import linkSvg from '../images/link.svg';
import githubSvg from '../images/github.svg';
import { shimmer, toBase64 } from '../util';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      id: 'ddud',
      name: 'Only Flavours - Wingstop',
      desc: 'Ticketing Web Application for Wingstop UK.',
      tools: [
        'Next.JS',
        'Typescript',
        'Node.JS',
        'Express.JS',
        'ShadCN',
        'Tailwind CSS',
        'Framer-Motion',
      ],
      img: wingstop,
      github: '',
      live: 'https://www.only-flavours.com/',
    },
    {
      id: 'ddddud',
      name: 'Pengame Rap Battle',
      desc: "Developed the official home of PenGame Rap Battle. Dive into the world of lyrical warfare and witness the world's best lyricists competing in rap battles.",
      tools: [
        'Next.JS',
        'Typescript',
        'Sanity',
        'GROQ',
        'API',
        'Shopify',
        'ShadCN',
        'Tailwind CSS',
        'Framer-Motion',
      ],
      img: pengame,
      github: '',
      live: 'https://www.pengame.co.uk/',
    },
    {
      id: 'p5',
      name: 'Rareboots Marketplace',
      desc: 'Worked on frontend development and API integration for RareBoots, a football boots marketplace.',
      tools: [
        'Next.JS',
        'Typescript',
        'MedusaJs REST-API',
        'ShadCN',
        'Tailwind CSS',
      ],
      img: rbm,
      github: '',
      live: 'https://www.rarebootsmarketplace.com/',
    },
    {
      id: 'mediaBeast',
      name: 'Media Beast LTD',
      desc: 'Developed the website for Digital Agency - Media Beast LTD',
      tools: ['Next.JS', 'Typescript', 'Tailwind CSS', 'Framer-Motion'],
      img: mediaBeast,
      github: '',
      live: 'https://mediabeast-v2.vercel.app/',
    },
    {
      id: 'p1',
      name: 'Sweet RNB',
      desc: 'White-Label platform with a gallery, event ticketing, and customizable forms for seamless client branding and user experience.',
      tools: [
        'Next.JS',
        'Typescript',
        'ShadCN',
        'Tailwind CSS',
        'Framer-Motion',
        'Node.JS',
        'Express.JS',
      ],
      img: rnb,
      github: '',
      live: 'https://www.sweetrnb.com/',
    },
    {
      id: 'psdfw9',
      name: 'Hessian',
      desc: 'Led the frontend development for Hessian, a restaurant and events brand focused on delivering care and quality in every experience.',
      tools: ['NextJs', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
      img: hessian,
      github: '',
      live: 'https://www.hessianevents.com/',
    },

    {
      id: 'autograph',
      name: 'Autograh Lifestyle',
      desc: 'Developed the website for Autograph Lifestyle who simplify lives as well as providing a honest and trusted luxury service.',
      tools: [
        'Next.JS',
        'Typescript',
        'Tailwind CSS',
        'Firebase',
        'ShadCN',
        'Framer-Motion',
      ],
      img: autograph,
      github: '',
      live: 'https://www.autographlifestyle.co.uk/',
    },
    {
      id: 'naitam',
      name: 'Naitram',
      desc: 'Led the Frontend Development for a pioneering ticketing platform @naitram.',
      tools: [
        'Next.JS',
        'Typescript',
        'Tailwind CSS',
        'ShadCN',
        'Framer-Motion',
      ],
      img: naitram,
      github: '',
      live: 'https://naitram.live/',
    },
    {
      id: 'felsunny',
      name: 'Felsunny Technology LTD',
      desc: 'Led the Frontend Development for Felsunny, who empower businesses by offering innovative and reliable solutions that drive growth and success.',
      tools: ['Next.JS', 'Typescript', 'Tailwind CSS', 'Framer-Motion'],
      img: felsunny,
      github: '',
      live: 'https://www.felsunny.com/',
    },

    {
      id: 'veevents',
      name: 'Veevents',
      desc: 'Veevents is a modern, responsive fullstack events management app powered by Next.js, TypeScript, and Tailwind CSS.',
      tools: [
        'Next.JS',
        'Typescript',
        'MongoDB',
        'Tailwind CSS',
        'Stripe',
        'Clerk',
        'GSAP',
        'ZOD',
      ],
      img: veevents,
      github: 'https://github.com/NIKO-DEV06/Veevents',
      live: 'https://veevents.vercel.app/',
    },

    {
      id: 'p9',
      name: 'Kanban Task Management',
      desc: 'This project is a responsive task management application featuring a Kanban board. Users can easily add, edit, and delete tasks & boards, and utilize drag and drop functionality for seamless task movement. Redux-Toolkit is used for state management.',
      tools: ['React.JS', 'Typescript', 'Tailwind CSS', 'Redux-Toolkit'],
      img: kanban,
      github: 'https://github.com/NIKO-DEV06/Kanban-Task-Management',
      live: 'https://nikokanban-task-manager.vercel.app/',
    },
  ];

  return (
    <Fragment>
      <section
        data-aos="fade-up"
        className="dark:text-white text-black mt-[7rem] lg:mt-[4rem] h-full lg:h-[3650px] xl:h-[3825px]"
        id="projects"
      >
        <div className="relative md:ml-[13rem]">
          <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#212121]" />
          <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#212121]" />
          <h1 className="text-[1.5rem] font-[800] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font-[500] font-cereal-normal">
            PROJECTS 📁
          </h1>
        </div>
        {/* projects list */}

        <div className="w-full flex flex-col justify-center scale[0.99] lg:scale-[0.86] xl:scale-[0.9] my-12 lg:my-0 lg:-translate-y-[12rem] xl:-translate-y-[7rem]">
          <div className="w-full px-5 md:px-0 md:w-[25rem] mx-auto flex flex-col gap-3 lg:w-[60rem]">
            {/* // */}
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col pb-8 md:translate-x-[9.5rem] lg:flex-row [25rem]"
              >
                <img
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(1200, 1800),
                  )}`}
                  src={project.img}
                  alt={project.name}
                  className={` w-[30rem] h[16rem] mx-auto border-t-2 border-l-2 lg:border-b-2 border-r-2 lg:border-r-0 border-black dark:border-white lg:h-auto`}
                />

                <div className="dark:border-white border-2 border-black">
                  <div className="ml-4 lg:mr-5">
                    <h2 className="mt-5 mb-2 font-cereal-medium tracking-wide uppercase text-[1.3rem] lg:text-[1.55rem]">
                      {project.name}
                    </h2>
                    <p className="font-cereal-light pr-3 tracking-wide text-sm lg:text-base">
                      {project.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap text-[0.9rem] gap-2 pr-1.5 md:pr-0">
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

                  <div className="flex justifycenter translate-y-[-1.5rem]">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      className={`flex border-2 border-black dark:border-white mt-[3rem] rounded-lg scale-75 cursor-pointer duration-150 mr-[-1.5rem] ${
                        project.github === '' ? 'hidden' : ''
                      }`}
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
                      target="_blank"
                      className={`flex border-2 mt-[3rem] rounded-lg scale-75 cursor-pointer dark:bg-white bg-black duration-150 ml[-1.5rem] w-[11rem]`}
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
