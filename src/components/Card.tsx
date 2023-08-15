import React from "react";
import "../App.css";
import CardBody from "./CardBody";

import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";

const Card = () => {
  return (
    <>
      <div className="flex flex-col md:bg-charcoal-greys font-roboto  md:justify-center md:items-center md:h-screen md:py-[55px]">
        <div className="md:h-[425px] md:bg-whites md:flex-row-reverse flex flex-col rounded-[35px] ">
          <img
            className="md:w-2/6 md:h-max md:truncate backgroundss"
            src={SignUpDesktop}
            alt="A sign-up picture"
          />
          <div className="md:w-4/6">
            <CardBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
