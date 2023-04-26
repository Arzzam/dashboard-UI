import React from "react";
import Vector1 from "../assets/VectorDash/Vector1";
import Vector2 from "../assets/VectorDash/Vector2";
import Vector3 from "../assets/VectorDash/Vector3";
import Vector4 from "../assets/VectorDash/Vector4";

const DATAS = [
  {
    name: "Total Revenues",
    value: "$2,129,430",
    vector: <Vector1 />,
    className: "bg-[#d1e7d4]",
  },
  {
    name: "Total Transactions",
    value: "1,520",
    vector: <Vector2 />,
    className: "bg-[#f1e6d3]",
  },
  {
    name: "Total Likes",
    value: "9,721",
    vector: <Vector3 />,
    className: "bg-[#ebcfcf]",
  },
  {
    name: "Total Users",
    value: "892",
    vector: <Vector4 />,
    className: "bg-[#d7d9ed]",
  },
];

export default DATAS;
