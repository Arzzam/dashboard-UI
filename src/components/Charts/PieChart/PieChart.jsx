import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Products", "Count"],
  ["Super Hoodies", 14],
  ["Custom Short Pants", 31],
  ["Basic Tees", 55],
];

export const options = {
  //   legend: "none",
  pieSliceText: "none",
  colors: ["#EE8484", "#F6DC7D", "#98D89E"],
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="100px"
    />
  );
}
