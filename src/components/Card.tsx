import React from "react";
import "../App.css";
import CardBody from "./CardBody";

import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";

const Card = () => {
  return (
    <>
      <div className="flex flex-col md:bg-charcoal-greys font-roboto  md:justify-center md:items-center md:h-screen">
        <div className="md:bg-whites md:flex-row-reverse flex flex-col">
          <img className="" src={SignUpMobile} alt="A sign-up picture" />
          <CardBody />
        </div>
      </div>
    </>
  );
};

export default Card;
