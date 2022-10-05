import React from "react";

const ShowBoxTech = (props) => {
  return (
    <ul className="flex flex-wrap justify-around my-2">
      {props.dataPoints.map((dataPoint) => (
        <li key={dataPoint} className=" bg-red-200 px-1 my-1 rounded">
          {dataPoint}
        </li>
      ))}
    </ul>
  );
};
export default ShowBoxTech;
