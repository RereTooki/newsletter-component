import React, { FormEvent, useRef } from "react";
import "../App.css";

const CardForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (emailRef.current !== null) console.log(emailRef.current.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <label
            htmlFor="email"
            className="text-dark-slate-greys text-[12px] font-bold mb-[5px]"
          >
            Email address
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            placeholder="email@company.com"
            className=" border-2 rounded-[5px] outline-greys p-[10px]"
          />
        </div>

        <button
          className=" mt-[25px] mb-[30px] text-whites p-[10px] rounded-[5px] bg-dark-slate-greys hover:gradient w-full shadow-lg hover:shadow-tomatos/70"
          type="submit"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default CardForm;
