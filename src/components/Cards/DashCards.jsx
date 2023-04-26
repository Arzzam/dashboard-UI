import React from "react";

const DashCards = (props) => {
  return (
    <div
      className={`flex flex-col w-40 h-32 py-5 px-6 rounded-3xl mr-5${
        props.className ? " " + props.className : ""
      }`}
    >
      <span className="flex justify-end">{props.vector}</span>
      <h3 className="font-Lato text-sm font-normal">{props.name}</h3>
      <h2 className="font-OpenSans text-2xl font-bold">{props.value}</h2>
    </div>
  );
};

export default DashCards;
