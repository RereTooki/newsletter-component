import React from "react";
import "../App.css";
import CardBody from "./CardBody";

import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";

const Card = () => {
  return (
    <>
      <div className=" h-fit w-full flex flex-col md:bg-charcoal-greys font-roboto  md:justify-center md:items-center md:h-screen md:py-[55px]">
        <div className=" md:w-fit md:h-full object-cover md:bg-whites md:flex-row-reverse flex flex-col rounded-[25px] ">
          <img
            className=" relative top-[-20px] md:top-0 md:left-[20px] md:py-[15px] md:w-fit  "
            src={SignUpDesktop}
            alt="A sign-up picture"
          />
          <div className="md:w-fit md:w-full md:mt-[5px]">
            <CardBody />
          </div>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://linkedin.com/in/rerel-oluwa-tooki-b53396253/"
            target="_blank"
          >
            Rere Tooki
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default Card;
