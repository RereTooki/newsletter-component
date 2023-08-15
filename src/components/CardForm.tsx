import React from "react";
import "../App.css";

const CardForm = () => {
  return (
    <>
      <form>
        <div className=" flex flex-col">
          <label
            htmlFor="email"
            className="text-dark-slate-greys text-[12px] font-bold mb-[5px]"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@company.com"
            className=" border-2 rounded-[5px] outline-greys p-[10px]"
          />
        </div>

        <button
          className=" mt-[25px] mb-[30px] text-whites p-[10px] rounded-[5px] bg-dark-slate-greys w-full"
          type="submit"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default CardForm;
