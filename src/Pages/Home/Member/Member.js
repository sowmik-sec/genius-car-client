import React from "react";

const Member = ({ member }) => {
  const { img, name } = member;
  return (
    <div className="card w-96 bg-base-100 shadow-xl md:mx-0 mx-auto">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
      </div>
    </div>
  );
};

export default Member;
