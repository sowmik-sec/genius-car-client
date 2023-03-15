import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-server-sepia-ten.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-14">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <div className="text-5xl font-semibold">Our Service Area</div>
        <p className="w-1/2 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center my-8">
        <button className="btn btn-outline btn-warning text-orange-600">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
