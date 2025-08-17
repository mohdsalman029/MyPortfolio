import React from "react";
import style from "./Container.module.css";
import { Image } from "./Image";

export const Container = () => {
  const handleclick = () => {
    console.log("I'm explore button");
  };
  return (
    <div className={style.container}>
      <div>
        <Image />
      </div>

      <div className={style.content}>
        <p className={style.name}>Mohd Salman</p>
        <p className={style.collage}>
          <span className={style.course}>BCA</span>(SCSE) - Galgotias University
        </p>
        <p className={style.role}>Student</p>
      </div>
      <div onClick={handleclick}>
        <p className={style.explore}>Explore</p>
      </div>
    </div>
  );
};
