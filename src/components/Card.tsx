import React, { useState } from "react";
import "../App.css";
import CardBody from "./CardBody";
import CardBody2 from "./CardBody2";
import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";

const Card = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <div className=" h-full w-full flex flex-col md:bg-charcoal-greys font-roboto  md:justify-center md:items-center md:h-max md:py-[55px]">
          <div className=" md:w-fit md:h-fit object-cover md:bg-whites md:justify-center md:items-center md:flex-row-reverse flex flex-col rounded-[25px] ">
            <img
              className="md:h-1/2  md:w-1/2  relative top-[-20px] md:top-0  md:py-[15px] md:px-[25px]  "
              src={SignUpDesktop}
              alt="A sign-up picture"
            />
            <div className=" px-[15px] md:w-1/2 md:h-1/2 md:justify-center md:items-center">
              <CardBody onClick={() => setIsVisible(false)} />
            </div>
          </div>
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
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
      )}
      {isVisible || (
        <>
          <div className=" px-[15px] h-screen w-screen flex flex-col justify-center items-center">
            <div className="h-[70vh]">
              <CardBody2 />
            </div>

            <div className="w-full">
              <button
                className="text-whites w-full py-[15px] rounded-[5px] bg-dark-slate-greys hover:gradient shadow-lg hover:shadow-tomatos/70"
                type="submit"
                onClick={() => setIsVisible(true)}
              >
                Dismiss message
              </button>
            </div>
            <div className="attribution">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
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
      )}
    </>
  );
};

export default Card;
