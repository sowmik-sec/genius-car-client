import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  useEffect(() => {
    fetch(
      `https://genius-car-server-sepia-ten.vercel.app/services?search=${search}&order=${
        isAsc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  return (
    <div className="my-14">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <div className="text-5xl font-semibold">Our Service Area</div>
        <p className="w-1/2 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <input
          className="input input-sm border-black"
          ref={searchRef}
          type="text"
        />{" "}
        <button onClick={handleSearch}>Search</button>
        <button className="btn btn-ghost" onClick={() => setIsAsc(!isAsc)}>
          {isAsc ? "desc" : "asc"}
        </button>
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
