import React from "react";
import "../App.css";
import IconSuccess from "../assets/images/icon-success.svg";

const CardBody2 = () => {
  return (
    <>
      <div className="md:whitespace-nowrap">
        <img className="" src={IconSuccess} alt="A success icon" />
        <h1 className="leading-[45px] text-dark-slate-greys text-[44px] font-bold mt-[30px] mb-[20px] md:mt-[10px] md:mb-[5px] md:text-[24px] md:leading-[25px]">
          Thanks for subscribing!
        </h1>
        <p className="text-charcoal-greys md:text-[14px] md:whitespace-normal">
          A confirmation email has been sent to <b>rere.</b> Please open it and
          click the button inside to confirm your subscription.
        </p>
      </div>
    </>
  );
};

export default CardBody2;
