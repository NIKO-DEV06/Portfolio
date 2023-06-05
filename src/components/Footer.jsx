import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);
  return (
    <section
      data-aos="fade-right"
      className="dark:text-white text-black border-t border-[#4c4c4c]"
    >
      <div className="flex flex-col py-10 text-[11px] tracking-[0.1em] font-[500] leading-[1rem] md:ml-[13rem] md:tracking-[0.13em] md:leading-[1.3rem]">
        <p className="text-center ">Designed and Built</p>
        <p className="text-center">By</p>
        <p className="text-center opacity-70">&copy; Emmanuel Ayeniko</p>
      </div>
    </section>
  );
};

export default Footer;
