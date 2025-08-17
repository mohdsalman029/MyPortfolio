import React from "react";
import style from "./skill.module.css";

import { SkillContent } from "./SkillContent";
import { Image } from "../component/Image";
import { IconImported } from "../extras/IconsImported";
export const Skill = () => {
  return (
    <>
      <div className={style.SkillPageContainer}>
        <div className={style.imagecontainer}>
          <div>
            <Image />
          </div>
          <div>
            <IconImported />
          </div>
        </div>
        <div className={style.skillContainer}>
          <SkillContent
            heading="Coding Language"
            content="C/C++, JavaScript, Java"
          />
          <SkillContent
            heading="Software Engineer"
            content="Coding Language,DBMS with
         MySQL, OOP, DSA"
          />
          <SkillContent
            heading="Database Managment"
            content="DMBS, MySQL, Express"
          />
          <SkillContent
            heading="Web Devlopment"
            content=" HTML, CSS, React, JS, Express,(MERN)"
          />
          <SkillContent
            heading="Coding Methodolgies"
            content="Test-Driven-Development, User Friendly GUIs,
           Agile Clean Code, Useful Comments"
          />
          <SkillContent
            heading="Project Managment"
            content="Github, VS-Code, Visual Studio, MS-Office"
          />
          <SkillContent heading="Interest" content="Adapting New Skills" />
        </div>
      </div>
    </>
  );
};
