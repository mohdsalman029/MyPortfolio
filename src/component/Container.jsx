import React from "react";
import style from "./Container.module.css";
import { Image } from "./Image";
import { useNavigate } from "react-router-dom";

export const Container = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explore"); // 👉 go to explore page
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
      <div onClick={handleClick}>
        <p className={style.explore}>Explore</p>
      </div>
    </div>
  );
};
