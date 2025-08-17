import React from "react";
import { Call } from "../assets/Icons";
import style from "./ContactNumber.module.css";

export const ContacNumber = () => {
  return (
    <>
      <div className={style.CallContainer}>
        <div className={style.Call}>
          <Call />
        </div>
        <div className={style.number}>+91 8766255019</div>
      </div>
    </>
  );
};
