import React, { Fragment } from "react";

import SideBar from "./components/SideBar";
import MobileHeader from "./components/MobileHeader";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <Fragment>
      <main className="h-full">
        <SideBar />
        <MobileHeader />
        <Home />
        <About />
      </main>
    </Fragment>
  );
};

export default App;
