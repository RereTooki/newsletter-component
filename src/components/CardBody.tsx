import React from "react";
import "../App.css";
import CardText from "./CardText";
import CardForm from "./CardForm";

const CardBody = () => {
  return (
    <>
      <div className="px-[10px]">
        <CardText />
        <CardForm />
      </div>
    </>
  );
};

export default CardBody;
