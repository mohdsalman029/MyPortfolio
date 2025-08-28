import React from "react";
import style from "./Contact.module.css";
import { Slogan } from "./Slogan";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { ContacNumber } from "./ContactNumber";
import { Footer } from "../footer/Footer";

export const Contact = () => {
  return (
    <>
      <div className={style.ContactContainer}>
        <ContacNumber />
        <div className={style.sloganContainer}>
          <Slogan />
        </div>
        <div className={style.InputFieldContainer}>
          <div className={style.InputFieldContainer}>
            <InputField type="text" placeholder="Enter Your Full Name" />
            <InputField type="text" placeholder="Enter Your Email-id" />
            <InputField type="text" placeholder="Write a Message" />
            <div>
              <Button label="Submit" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
