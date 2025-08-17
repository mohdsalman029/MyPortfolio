import React from "react";
import { Header } from "../component/Header";
import style from "./education.module.css";
import { EducationContent } from "./EducationContent";

export const Education = () => {
  return (
    <>
      <div className={style.educationPageContainer}>
        {/* <div className={style.education}>Education</div> */}
        <div className={style.educationContainer}>
          <EducationContent
            course="BCA School of Computer Science"
            collage="Galgotias University, Uttar pardesh, India"
            passOut="Expected degree : December 2025"
          />
          <EducationContent
            course="Higher Secondry (XII)"
            collage="D.A.V Sr. Sec. School,New Delhi, India"
            passOut="April : 2019"
          />
          <EducationContent
            course="High School (X)"
            collage="Govt Boys Sr. Sec. School, New Delhi India"
            passOut="April : 2017"
          />
        </div>{" "}
      </div>
    </>
  );
};
