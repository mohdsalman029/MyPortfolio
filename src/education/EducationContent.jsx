import React from "react";
import style from "./education.module.css";

export const EducationContent = ({ collage, course, passOut }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.course}>{course}</div>
        <div className={collage}>{collage}</div>
        <div className={style.passOut}>{passOut}</div>
      </div>
    </>
  );
};
