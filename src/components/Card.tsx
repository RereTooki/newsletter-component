import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import "../App.css";
import CardBody from "./CardBody";
import CardBody2 from "./CardBody2";
import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";

const Card = () => {
  const [persons, setPersons] = useState({
    emails: "",
  });

  const { register, handleSubmit, getValues } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    console.log(data.email);
    const rere = data.email;
    console.log("the value of rere is " + rere);

    console.log("the value of person.email is " + persons.emails);
  };

  //SH4
  //console.log(register("email"));

  const [isVisible, setIsVisible] = useState(true);

  //Using the state hook to manage the input form SH1
  // const [person, setPerson] = useState({
  //   email: "",
  // });

  //SH2
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  //   //   //console.log(person.email);
  //   //   //const rere = person.email;
  //   //   //console.log(rere + "is the value of rere");
  // };

  return (
    <>
      {isVisible && (
        <div className=" h-full w-full flex flex-col md:bg-charcoal-greys font-roboto  md:justify-center md:items-center md:h-max md:py-[55px]">
          <div className=" md:w-fit md:h-fit md:bg-whites md:justify-center md:items-center md:flex-row-reverse flex flex-col rounded-[25px] ">
            <img
              className="md:h-1/2  md:w-1/2  relative top-[-20px] md:top-0  md:py-[15px] md:px-[25px]  "
              src={SignUpDesktop}
              alt="A sign-up picture"
            />
            <div className=" px-[15px] md:w-1/2 md:h-1/2 md:justify-center md:items-center">
              <CardBody //onClick={() => setIsVisible(false)}
              />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-dark-slate-greys text-[12px] font-bold mb-[5px]"
                  >
                    Email address
                  </label>
                  <input
                    // SH3
                    // onChange={(event) =>
                    //   setPerson({ ...person, email: event.target.value })
                    // }
                    // value={person.email}
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="email@company.com"
                    className=" border-2 rounded-[5px] outline-greys p-[10px]"
                  />
                </div>

                <button
                  className=" mt-[25px] mb-[30px] text-whites p-[10px] rounded-[5px] bg-dark-slate-greys hover:gradient w-full shadow-lg hover:shadow-tomatos/70"
                  type="submit"
                  onClick={() => {
                    setIsVisible(true);
                    const singleValue = getValues("email");
                    setPersons({ ...persons, emails: singleValue });
                  }}
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
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
          <div className=" px-[15px] md:bg-charcoal-greys h-screen w-fit md:w-screen md:h-screen md:px-[355px] flex flex-col justify-center items-center">
            <div className="md:bg-whites md:rounded-[25px] md:pt-[10px] md:pb-[15px] md:px-[15px]">
              <div className="h-[60vh] md:h-fit md:mb-[20px]">
                <CardBody2 emailconfirm={persons.emails} />
              </div>
              <div className="w-full">
                <button
                  className="text-whites w-full py-[15px] md:py-[5px] rounded-[5px] bg-dark-slate-greys hover:gradient shadow-lg hover:shadow-tomatos/70"
                  type="submit"
                  onClick={() => setIsVisible(true)}
                >
                  Dismiss message
                </button>
              </div>
            </div>
            <div className="attribution md:whitespace-nowrap">
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
