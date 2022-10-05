import React from "react";
import ShowBoxTech from "./ShowBoxTech";

const ShowBox = (props) => {
  return (
    <div className=" shadow-md bg-pink-100 m-3">
      <div className="h-52 bg-slate-300"></div>
      <ShowBoxTech />
      <button className="block mx-auto">View Details</button>
    </div>
  );
};
export default ShowBox;
