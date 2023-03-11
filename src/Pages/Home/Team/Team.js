import React, { useEffect, useState } from "react";
import Member from "../Member/Member";

const Team = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div className="relative my-20">
      <div className="text-center my-10">
        <p className="text-xl font-bold text-orange-600">Team</p>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between">
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
      <div className="hidden md:absolute md:flex md:justify-between transform -translate-y-1/2 left-0 right-0 top-80">
        <a href={`#`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Team;
