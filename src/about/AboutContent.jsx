import React from "react";
import style from "./about.module.css";
import { Image } from "../component/Image";
import { IconImported } from "../extras/IconsImported";

export const AboutContent = () => {
  return (
    <>
      <div className={style.aboutContainer}>
        <div className={style.aboutPage}>
          <div className={style.introContainer}>
            <p className={style.introduction}>Introduction</p>
            <p className={style.name}>
              I'm <span className={style.nameColor}>Mohd Salman</span>
            </p>
            <p className={style.student}>Student</p>
          </div>
          <div className={style.content}>
            I'm a passionate and dedicated Full Stack Web Developer,
            specializing in the MERN stack (MongoDB, Express.js, React,
            Node.js). I recently completed my Bachelor of Computer Applications
            (BCA) from Galgotias University, batch 2022–2025.I enjoy every step
            of the development process. I take pride in writing maintainable
            code and continuously learning new tools, frameworks, and best
            practices.
          </div>
          <div className={style.content}>
            <p className={style.responsiblity}>What I bring</p>
            <ul className={style.bringList}>
              <li>Solid foundation in HTML, CSS, JavaScript</li>
              <li>Hands-on experience with the MERN stack</li>
              <li>
                Familiarity with version control (Git/GitHub) and modern
                development workflow
              </li>
              <li>Strong problem-solving mindset and eagerness to learn</li>
            </ul>
          </div>
          <div className={style.content}>
            I’m actively looking for opportunities to grow as a developer and
            contribute to real-world projects. Whether it's a collaborative team
            environment or an individual challenge, I'm excited to bring energy,
            commitment, and a hunger to learn.
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image />
          <IconImported />
        </div>
      </div>
    </>
  );
};
