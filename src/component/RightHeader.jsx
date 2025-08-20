import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";

export const RightHeader = ({ value }) => {
  const routes = {
    Home: "/",
    About: "/about",
    Skills: "/skills",
    Projects: "/projects",
    Contact: "/contact",
    Education: "/Education",
  };

  return (
    <NavLink 
      to={routes[value]}
      className={({ isActive }) =>
        `${style.rightItems} ${isActive ? style.active : ""}`
      }
    >
      {value}
    </NavLink>
  );
};
