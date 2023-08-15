import React from "react";
import "../App.css";
import CardBody from "./CardBody";

import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";

const Card = () => {
  return (
    <>
      <div className="flex flex-col bg-tomatos font-roboto ">
        <img className="" src={SignUpMobile} alt="A sign-up picture" />
        aaa
        <CardBody />
      </div>
    </>
  );
};

export default Card;
