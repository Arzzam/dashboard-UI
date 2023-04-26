import React from "react";
import { Chart } from "react-google-charts";

function MyChart() {
  const data = [
    ["Week", "User", "Guest"],
    // [0, 100, 200],
    ["Week 1", 425, 390],
    ["Week 2", 150, 200],
    ["Week 3", 450, 300],
    ["Week 4", 175, 225],
    // ["Week 5", 225, 400],
  ];

  const options = {
    hAxis: {
      baseline: 0,
      textStyle: {
        fontName: "Lato",
        fontSize: 12,
        fontWeight: 400,
      },
    },
    vAxis: {
      ticks: [0, 100, 200, 300, 400, 500],
      vireWindow: {
        min: 0,
      },
      baseline: 0,
      textStyle: {
        fontName: "OpenSans",
        fontSize: 12,
        fontWeight: 400,
      },
    },
    colors: ["#9BDD7C", "#E9A0A0"],
    // pointShape: "circle",
    legend: "none",
    curveType: "function",
  };

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width="100%"
      height="200px"
    />
  );
}

export default MyChart;
