import React from "react";
import { IconImported } from "../extras/IconsImported";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={style.footerContainer}>
        <div className={style.roleContainer}>
          <p className={style.role}>Full Stack Developer </p> |
          <p>Open to work</p>
        </div>
        <div className={style.contentContainer}>
          <p>
            Let's work together Available for freelance & full-time
            opportunities
          </p>
        </div>
        <div className={style.icons}>
          <IconImported />
        </div>
        <div>© 2025 | Aug, Mohd Salman</div>
      </div>
    </>
  );
};
