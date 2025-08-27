import React, { useState } from "react";
import style from "./Header.module.css";
import { LeftHeader } from "./LeftHeader";
import { RightHeader } from "./RightHeader";
import { More } from "../assets/Icons";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerName = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
    "Education",
  ];

  return (
    <div className={style.header}>
      <LeftHeader />

      {/* 3 dot menu icon (only visible on small screens) */}
      <div className={style.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        <More />
      </div>

      {/* Desktop nav */}
      <div className={style.rightItemsContainer}>
        {headerName.map((headerName, index) => (
          <RightHeader value={headerName} key={index} />
        ))}
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className={style.mobileMenu}>
          {headerName.map((headerName, index) => (
            <RightHeader value={headerName} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
