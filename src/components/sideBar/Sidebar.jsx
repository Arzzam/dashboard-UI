import React from "react";
import DashboardSvg from "../../assets/SideBarIcons/DashboardSvg";
import TransactionSvg from "../../assets/SideBarIcons/TransactionSvg";
import ScheduleSvg from "../../assets/SideBarIcons/ScheduleSvg";
import UsersSvg from "../../assets/SideBarIcons/UsersSvg";
import SettingSvg from "../../assets/SideBarIcons/SettingSvg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="font-Montserrat bg-black rounded-3xl h-full ">
      <div className="py-14 px-12 text-white h-full flex flex-1 flex-col">
        <div className="flex-1">
          <h2 className="font-bold text-4xl pb-14">Board.</h2>
          <div className="flex flex-col">
            <div className="pb-10">
              <Link to="/dashBoard">
                <DashboardSvg className="inline-block" />
                <span className="px-5 font-bold">Dashboard</span>
              </Link>
            </div>
            <Link to="/dashBoard">
              <div className="pb-10">
                <TransactionSvg className="inline-block" />
                <span className="px-5">Transaction</span>
              </div>
            </Link>
            <Link to="/dashBoard">
              <div className="pb-10">
                <ScheduleSvg className="inline-block" />
                <span className="px-5">Schedules</span>
              </div>
            </Link>
            <Link to="/dashBoard">
              <div className="pb-10">
                <UsersSvg className="inline-block" />
                <span className="px-5">Users</span>
              </div>
            </Link>
            <Link to="/dashBoard">
              <div className="pb-10">
                <SettingSvg className="inline-block" />
                <span className="px-5">Settings</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-white bottom-28">
          <h4 className="font-normal text-sm pb-5">Help</h4>
          <h4 className="font-normal text-sm">Contact Us</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
