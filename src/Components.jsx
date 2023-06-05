import React, { Fragment } from "react";

import SideBar from "./components/SideBar";
import MobileHeader from "./components/MobileHeader";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Components = ({ theme, handleThemeSwitch }) => {
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
