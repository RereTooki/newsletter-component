import { FormEvent, useState } from "react";
import "../App.css";

const CardForm = () => {
  const [person, setPerson] = useState({
    email: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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
            onChange={(event) =>
              setPerson({ ...person, email: event.target.value })
            }
            value={person.email}
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
