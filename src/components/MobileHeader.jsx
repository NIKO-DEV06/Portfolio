import React, { Fragment } from "react";
import { motion } from "framer-motion";

import myLogo from "../images/IMG_5969.jpeg";
import hamburgerSvg from "../images/hamburger.svg";

const MobileHeader = () => {
  return (
    <Fragment>
      <div className="md:hidden bg-[#1c1c1c] cursor-pointer">
        <div className="flex mx-6 py-4">
          <div className="flex w-full gap-2 h-auto">
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
          <div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid cursor-pointer bg-[#414040] h-[2.4rem] w-[2.4rem] rounded-lg"
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
