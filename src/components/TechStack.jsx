import React from "react";
import Marquee from "react-fast-marquee";

import { stack1, stack2 } from "../helpers/stacks";

const TechStack = () => {
  return (
    <section
      className="text-white mt-[2000px] md:mt-[2350px] lg:mt-[1150px] pb-6"
      id="tech-stack"
    >
      <div className="relative md:ml-[13rem]">
        <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
        <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
        <h1 className=" uppercase text-[1.5rem] font-[800] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font-[500]">
          Tech-Stack
        </h1>
      </div>
      <div className="pb-8 pt-10 flex  overflow-hidden">
        <Marquee gradient={false} direction="right" speed={70} pauseOnHover>
          {stack1.map((stack) => (
            <div className="flex w-[15.5rem] lg:w-[21rem] lg:h-[8rem] h-[6rem] bg-[#363636] rounded-[0.275rem] mr-4 gap-4 border-[#5a5a5a] border-[1.5px]">
              <img src={stack.img} alt="" className="w-[3rem] ml-2" />
              <div className="my-auto flex flex-col gap-1">
                <h1 className="text-[0.9rem] lg:text-[1.1rem] font-[800] undeline tracking-[.09em] uppercase ">
                  .{stack.name}.
                </h1>
                <p className="text-[0.65rem] lg:text-[0.8rem] font-[500] pr-2 lg:opacity-75">
                  {stack.desc}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="pb-8 flex  overflow-hidden">
        <Marquee gradient={false} direction="left" speed={70} pauseOnHover>
          {stack2.map((stack) => (
            <div className="flex lg:w-[21rem] lg:h-[8rem] w-[15.5rem] h-[6rem] bg-[#363636] rounded-[0.275rem] mr-4 gap-4 border-[#5a5a5a] border-[1.5px]">
              <img src={stack.img} alt="" className="w-[3rem] ml-2" />
              <div className="my-auto flex flex-col gap-1">
                <h1 className="lg:text-[1.1rem] text-[0.9rem] font-[800] undeline tracking-[.09em] uppercase ">
                  .{stack.name}.
                </h1>
                <p className="lg:text-[0.8rem] text-[0.65rem] font-[500] pr-2 opacity-75">
                  {stack.desc}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TechStack;
