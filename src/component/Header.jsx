import React from "react";
import style from "./Header.module.css";
import { LeftHeader } from "./LeftHeader";
import { RightHeader } from "./RightHeader";

export const Header = () => {
  const headerName = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
    "Education",
  ];
  return (
    <>
      <div className={style.header}>
        <LeftHeader />
        <div className={style.rightItemsContainer}>
          {headerName.map((headerName, index) => (
            <RightHeader value={headerName} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
