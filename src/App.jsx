import React, { Fragment, useEffect, useState } from "react";
import "./index.css";

import Typewriter from "typewriter-effect";
import Components from "./Components";
import { BarLoader } from "react-spinners";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Fragment>
      <AnimatedCursor
        innerSize={40}
        outerSize={0}
        color="255, 255, 255"
        outerAlpha={0.5}
        innerScale={2}
        innerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      {isLoading ? (
        <section className="dark:bg-black-gradient bg-white-gradient dark:bg-red-500 h-screen flex flex-col gap-2 justify-center lg:gap-4 md:gap-3">
          <h1 className=" text-center lg:text-6xl md:text-5xl text-2xl w-full dark:text-white text-black opacity-80 italic font-light font-cereal-light">
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
              color={`${theme === "dark" ? "#ffffff" : "#000000"}`}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </section>
      ) : (
        <Components theme={theme} handleThemeSwitch={handleThemeSwitch} />
      )}
    </Fragment>
  );
};

export default App;
