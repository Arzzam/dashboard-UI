import React from "react";
import DashboardSvg from "../../assets/SideBarIcons/DashboardSvg";
import TransactionSvg from "../../assets/SideBarIcons/TransactionSvg";
import ScheduleSvg from "../../assets/SideBarIcons/ScheduleSvg";
import UsersSvg from "../../assets/SideBarIcons/UsersSvg";
import SettingSvg from "../../assets/SideBarIcons/SettingSvg";

const Sidebar = () => {
  return (
    <div className="font-Montserrat bg-black rounded-3xl h-full ">
      <div className="py-14 px-12 text-white">
        <h2 className="font-bold text-4xl pb-14">Board.</h2>
        <div className="flex flex-col">
          <div className="pb-10">
            <DashboardSvg className="inline-block" />
            <span className="px-5 font-bold">Dashboard</span>
          </div>
          <div className="pb-10">
            <TransactionSvg className="inline-block" />
            <span className="px-5">Transaction</span>
          </div>
          <div className="pb-10">
            <ScheduleSvg className="inline-block" />
            <span className="px-5">Schedules</span>
          </div>
          <div className="pb-10">
            <UsersSvg className="inline-block" />
            <span className="px-5">Users</span>
          </div>
          <div className="pb-10">
            <SettingSvg className="inline-block" />
            <span className="px-5">Settings</span>
          </div>
        </div>
        <div className="text-white absolute bottom-28">
          <h4 className="font-normal text-sm pb-5">Help</h4>
          <h4 className="font-normal text-sm">Contact Us</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
