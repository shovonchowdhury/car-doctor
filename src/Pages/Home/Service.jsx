import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <div className="p-6 border rounded-lg space-y-5">
      <img src={img} alt="" className="w-[314px] rounded-lg" />
      <h3 className="text-[#444] text-2xl font-bold">{title}</h3>
      <div className="text-[#FF3811] text-xl font-semibold flex justify-between">
        <h3>Price: ${price}</h3>
        <Link to={`/checkout/${_id}`}>Book Now</Link>
      </div>
    </div>
  );
};

export default Service;
