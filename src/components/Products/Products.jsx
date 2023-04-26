import React from "react";
import PieChart from "../Charts/PieChart/PieChart";

const Products = () => {
  return (
    <div className="bg-white py-8 px-12 w-[45%] rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-Montserrat font-bold text-lg">Top products</h2>
        <h2 className="font-Montserrat text-xs font-normal">May - June 2021</h2>
      </div>
      <div className="flex flex-row gap-1">
        <PieChart />
      </div>
    </div>
  );
};

export default Products;
