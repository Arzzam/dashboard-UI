import React from "react";
import Sidebar from "../components/sideBar/Sidebar";
import Dash from "../components/Dash/Dash";

const Dashboard = () => {
  return (
    <div className="bg-[#DDDDDD] min-h-screen">
      <div className="p-10">
        <div className="grid overflow-hidden grid-cols-[280px_auto] min-h-[90vh]">
          <div className="">
            <Sidebar />
          </div>
          <div>
            <Dash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
