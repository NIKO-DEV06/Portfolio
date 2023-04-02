import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";

import myLogo from "../images/IMG_5969.jpeg";
import hamburgerSvg from "../images/hamburger.svg";
import SideBar from "./SideBar";

const MobileHeader = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const open = () => {
    setIsMobileNav(true);
  };

  const close = () => {
    setIsMobileNav(false);
  };

  return (
    <Fragment>
      {isMobileNav && (
        <SideBar isNav={isMobileNav} backdropClose={close} onExit={close} />
      )}

      <div className="md:hidden bg-[#1c1c1c] fixed w-full border-b border-[#424242] z-20">
        <div className="flex mx-7 py-5">
          <div className="flex w-full gap-3 h-auto">
            <img
              src={myLogo}
              alt=""
              className="rounded-full w-[2.7rem] cursor-pointer border-[1px]"
            />
            <p className="text-[12.5px] my-auto font-[500] tracking-[1.1px] text-white">
              Emmanuel Ayeniko
              <br />
              <span className="text-white opacity-50">Software Engineer</span>
            </p>
          </div>
          <div onClick={open}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid cursor-pointer bg-[#414040] h-[2.5rem] w-[2.5rem] rounded-lg"
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
    </Fragment>
  );
};

export default MobileHeader;
