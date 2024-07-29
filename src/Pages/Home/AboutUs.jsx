import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row-reverse gap-5">
        <div className="lg:text-left w-1/2 space-y-7">
          <p className="text-xl font-bold text-[#FF3811]">About Us</p>
          <h2 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p>
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn text-white bg-[#FF3811] hover:text-[#FF3811] hover:bg-white">
            Get More Info
          </button>
        </div>

        <div className="relative  w-1/2">
          <img src={person} alt="" className="w-[460px] h-[473px] rounded-lg" />
          <img
            src={parts}
            alt=""
            className="w-[327px] h-[332px] absolute -bottom-16 right-0 border-8 border-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
