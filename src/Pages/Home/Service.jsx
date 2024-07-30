import React from "react";
import { IoMdArrowForward } from "react-icons/io";
const Service = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="p-6 border rounded-lg space-y-5">
      <img src={img} alt="" className="w-[314px] rounded-lg" />
      <h3 className="text-[#444] text-2xl font-bold">{title}</h3>
      <div className="text-[#FF3811] text-xl font-semibold flex justify-between">
        <h3>Price: ${price}</h3>
        <IoMdArrowForward />
      </div>
    </div>
  );
};

export default Service;
