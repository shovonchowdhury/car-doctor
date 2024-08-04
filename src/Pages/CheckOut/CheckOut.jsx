import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, service_id, img } = service;
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const date = form.date.value;
    const email = form.email.value;

    const booking = {
      title,
      service_id,
      name,
      price,
      date,
      email,
      img,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    }).then((data) => {
      if (data.insertedId) alert("Service booked successfully");
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">
        Service name: <span className="text-[#FF3811]">{title}</span>
      </h2>

      <div className="p-24 bg-[#F3F3F3] mt-10">
        <form className="space-y-6" onSubmit={handleBooking}>
          <div className="flex gap-6">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
                className="w-full py-4 px-6 rounded-lg"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="price"
                id=""
                placeholder="Price"
                defaultValue={price}
                className="w-full py-4 px-6 rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-1">
              <input
                type="date"
                name="date"
                id=""
                placeholder="dd/mm/yyyy"
                className="w-full py-4 px-6 rounded-lg"
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                defaultValue={user?.email}
                className="w-full py-4 px-6 rounded-lg"
              />
            </div>
          </div>
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className="w-full h-[250px] py-4 px-6 rounded-lg"
          ></textarea>

          <button className="btn w-full text-white bg-[#FF3811]">
            Order Confirm
          </button>
        </form>
      </div>

      <div></div>
    </div>
  );
};

export default CheckOut;
