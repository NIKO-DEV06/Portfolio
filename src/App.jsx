import React, { Fragment, useEffect, useState } from "react";

import Typewriter from "typewriter-effect";
import Components from "./Components";

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
        <section className=" bg-black-gradient h-screen">
          <h1 className="absolute text-center top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-6xl md:text-5xl text-4xl w-full  text-white z-30 italic opacity-50">
            <Typewriter
              options={{
                strings: ["< Emmanuel />..."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </section>
      ) : (
        <Components />
      )}
    </Fragment>
  );
};

export default App;
