import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import "../App.css";
import CardBody from "./CardBody";
import CardBody2 from "./CardBody2";
import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";

interface FormData {
  email: string;
}

const Card = () => {
  const [persons, setPersons] = useState({
    emails: "",
  });

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
                  <div className=" flex flex-row justify-between">
                    <label
                      htmlFor="email"
                      className="text-dark-slate-greys text-[12px] font-bold mb-[5px]"
                    >
                      Email address
                    </label>
                    {errors.email?.type === "required" && (
                      <p className="  text-tomatos text-[12px] font-bold mb-[5px]">
                        The email field is required
                      </p>
                    )}
                    {errors.email?.type === "minLength" && (
                      <p className="  text-tomatos text-[12px] font-bold mb-[5px]">
                        At least 4 characters required
                      </p>
                    )}
                  </div>
                  <input
                    // SH3
                    // onChange={(event) =>
                    //   setPerson({ ...person, email: event.target.value })
                    // }
                    // value={person.email}
                    {...register("email", {
                      required: true,
                      minLength: 4,
                    })}
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
                    const singleValue = getValues("email");
                    setPersons({ ...persons, emails: singleValue });

                    {
                      errors.email?.type === "minLength" ||
                      errors.email?.type === "required" ||
                      persons.emails.includes("@") !== true
                        ? setIsVisible(true)
                        : setIsVisible(false);
                    }
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
                  onClick={() => {
                    setIsVisible(true);
                    setValue("email", "");
                  }}
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
