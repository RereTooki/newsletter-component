import React from "react";
import "../App.css";

const CardText = () => {
  return (
    <>
      <h1 className=" md:whitespace-nowrap text-dark-slate-greys text-[44px] font-bold mt-[30px] mb-[20px]">
        Stay updated!
      </h1>
      <p className="text-charcoal-greys">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className=" mt-[20px] list-none list-image-[url(assets/images/icon-list.svg)] pl-[27px] text-charcoal-greys">
        <div>
          <li className="pl-[8px] pb-[15px]">
            <div className="relative top-[-4px]">
              Product discovery and building what matters
            </div>
          </li>
          <li className="pl-[8px] pb-[15px]">
            <div className="relative top-[-4px]">
              Measuring to ensure updates are a success
            </div>
          </li>
          <li className="pl-[8px] pb-[45px] md:pb-[10px]">
            <div className="relative top-[-4px]">And much more!</div>
          </li>
        </div>
      </ul>
    </>
  );
};

export default CardText;
