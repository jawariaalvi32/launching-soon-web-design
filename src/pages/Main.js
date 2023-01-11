import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import { Home } from "./Home";
import Notify from "./Notify";

const Main = () => {
  const [pageName, setPageName] = useState("home");
  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <div>
        {pageName === "home" && (
          <Home pageName={pageName} setPageName={setPageName} />
        )}

        {pageName === "contact" && (
          <Contact pageName={pageName} setPageName={setPageName} />
        )}

        {pageName === "about" && (
          <About pageName={pageName} setPageName={setPageName} />
        )}

        {pageName === "notify" && (
          <Notify pageName={pageName} setPageName={setPageName} />
        )}
      </div>
    </AnimatePresence>
  );
};

export default Main;
