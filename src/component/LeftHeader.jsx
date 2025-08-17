import React from "react";
import style from "./Header.module.css";
import image from "../assets/salman.png";

export const LeftHeader = () => {
  return (
    <div className={style.leftheader}>
      <div className={style.image}>
        <img className={style.photo} src={image} alt="salman" />
      </div>
      <div className={style.name}> Mohd Salman</div>
    </div>
  );
};
