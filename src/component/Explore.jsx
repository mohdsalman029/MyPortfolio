import React from "react";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";
import style from "./Explore.module.css";
import { Footer } from "../footer/Footer";

export const Explore = () => {
  return (
    <>
      <div className={style.exploreContainer}>
        <About />
        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  );
};
