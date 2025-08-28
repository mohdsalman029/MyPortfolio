import React from "react";
import image from "../assets/salman1.png";
import style from "./image.module.css";

export const Image = () => {
  return (
    <>
      <div>
        <img className={style.imageContainer} src={image} alt="salman" />
      </div>
    </>
  );
};
