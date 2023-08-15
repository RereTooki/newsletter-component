import React from "react";
import "../App.css";
import CardBody from "./CardBody";

import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";

const Card = () => {
  return (
    <>
      <div className="flex flex-col md:bg-charcoal-greys font-roboto  md:justify-center md:items-center md:h-screen md:py-[55px]">
        <div className="md:h-[75vh] md:bg-whites md:flex-row-reverse flex flex-col rounded-[25px] ">
          <img
            className=" relative top-[-18px] md:w-3/6 md:h-[70vh] md:mt-[35px]"
            src={SignUpDesktop}
            alt="A sign-up picture"
          />
          <div className="md:w-3/6  md:mt-[5px]">
            <CardBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
