import React from "react";

const Schedule = () => {
  return (
    <div className="bg-white py-8 px-12 w-[45%] rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-Montserrat font-bold text-lg">Top products</h2>
        <h2 className="font-Montserrat text-xs font-normal">See All</h2>
      </div>
      <div className="flex flex-col">
        <div className="font-Lato border-l-4 border-[#9BDD7C] my-5">
          <div className="pl-2">
            <h5 className="font-bold text-sm">
              Meeting with suppliers from Kuta Bali
            </h5>
            <h5 className="font-normal text-xs">14.00-15.00</h5>
            <h5 className="font-normal text-xs">at Sunset Road, Kuta, Bali </h5>
          </div>
        </div>
        <div className="font-Lato border-l-4 border-[#6972C3]">
          <div className="pl-2">
            <h5 className="font-bold text-sm">
              Check operation at Giga Factory 1
            </h5>
            <h5 className="font-normal text-xs">18.00-20.00</h5>
            <h5 className="font-normal text-xs">at Central Jakarta </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
