import React, { useState } from "react";
import "../App.css";
import CardText from "./CardText";
import CardForm from "./CardForm";

//interface Props {
//  onClick: () => void;
//}

const CardBody = () =>
  //{ onClick }: Props
  {
    return (
      <>
        <div className="">
          <CardText />
          {/* <CardForm //onClick={onClick}
          /> */}
        </div>
      </>
    );
  };

export default CardBody;
