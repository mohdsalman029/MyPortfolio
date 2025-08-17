import React from "react";
import style from "./inputField.module.css";

export const InputField = ({ type, placeholder }) => {
  return (
    <>
      <div >
        <input className={style.InputField} type={type} placeholder={placeholder} />
      </div>
    </>
  );
};
