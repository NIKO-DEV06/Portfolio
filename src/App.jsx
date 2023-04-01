import React, { Fragment } from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import MobileHeader from "./components/MobileHeader";

const App = () => {
  return (
    <Fragment>
      <main className="bg-white-gradient h-full">
        <SideBar />
        <MobileHeader />
        <Home />
      </main>
    </Fragment>
  );
};

export default App;
