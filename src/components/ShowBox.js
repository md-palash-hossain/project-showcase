import React from "react";
import ShowBoxTech from "./ShowBoxTech";

const ShowBox = (props) => {
  return (
    <div className=" shadow-md  m-3 ">
      <div className="h-52 bg-slate-300"></div>
      <h2 className="px-3 text-lg bg-slate-100">{props.title}</h2>
      <ShowBoxTech dataPoints={props.tech} />

      <button className="block mx-auto px-4 m-1 rounded bg-lime-300 hover:bg-lime-700 hover:text-white">
        View Details
      </button>
    </div>
  );
};
export default ShowBox;
