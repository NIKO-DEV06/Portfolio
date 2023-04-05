import React, { Fragment } from "react";

import SideBar from "./components/SideBar";
import MobileHeader from "./components/MobileHeader";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <main className="h-full">
        <SideBar />
        <MobileHeader />
        <Home />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
};

export default App;
