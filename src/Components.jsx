import React, { Fragment, useState, useEffect } from "react";

import SideBar from "./components/SideBar";
import MobileHeader from "./components/MobileHeader";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Components = () => {
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
      <SideBar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <MobileHeader theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Home />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Components;
