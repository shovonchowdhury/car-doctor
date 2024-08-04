import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="space-y-5">
      <div className="text-center space-y-5">
        <p className="text-[#FF3811] text-xl font-bold">Service</p>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>

        {/* <h1 className="text-5xl">Number of Services:{services.length}</h1> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
