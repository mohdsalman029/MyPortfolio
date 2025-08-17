import React from "react";
import style from "./button.module.css";

export const Button = ({ label }) => {
  return (
    <>
      <div className={style.button}>{label}</div>
    </>
  );
};
