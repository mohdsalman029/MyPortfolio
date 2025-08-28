import React from "react";
import style from "./skill.module.css";

export const SkillContent = ({ heading, content }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.heading}>{heading}</div>
        <div className={style.content}>{content}</div>
      </div>
    </>
  );
};
