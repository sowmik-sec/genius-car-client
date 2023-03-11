import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            src={person}
            className="w-4/5 h-full rounded-lg shadow-2xl"
            alt=""
          />
          <img
            src={parts}
            className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-bold text-orange-500">About Us</h3>
          <h1 className="my-5 text-5xl font-bold">
            We are qualified <br /> & of experience in <br /> this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
