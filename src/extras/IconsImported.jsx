import React from "react";
import style from "./Icons.module.css";
import {
  Github,
  LeetCode,
  Resume,
  Whatsapp,
  Linkedin,
  Gmail,
} from "../assets/Icons";

export const IconImported = () => {
 
  return (
    <>
      <div className={style.icons}>
        <Github />
        <Whatsapp />
        <LeetCode />
        <Linkedin />
        <Resume />
        <Gmail />
      </div>
    </>
  );
};
