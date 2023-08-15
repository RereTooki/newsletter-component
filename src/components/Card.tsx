import React from "react";
import "../App.css";
import CardBody from "./CardBody";

import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";

const Card = () => {
  return (
    <>
      <div className="flex flex-col bg-whites font-roboto ">
        <img className="" src={SignUpMobile} alt="A sign-up picture" />
        <CardBody />
      </div>
    </>
  );
};

export default Card;
