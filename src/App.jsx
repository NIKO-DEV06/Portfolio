import React, { Fragment, useEffect, useState } from "react";

import Typewriter from "typewriter-effect";
import Components from "./Components";
import { BarLoader } from "react-spinners";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <section className="bg-black-gradient h-screen flex flex-col gap-2 justify-center lg:gap-4 md:gap-3">
          <h1 className=" text-center lg:text-6xl md:text-5xl text-2xl w-full text-white opacity-80 italic font-light">
            <Typewriter
              options={{
                strings: ["< EMMANUEL />"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className=" w-[10rem] transform mx-auto px-8 ">
            <BarLoader
              loading={isLoading}
              size={50}
              color="#ffffff"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </section>
      ) : (
        <Components />
      )}
    </Fragment>
  );
};

export default App;
