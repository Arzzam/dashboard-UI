import React from "react";
import NotificationSvg from "../../assets/NotificationSvg";
import Image from "../../assets/image 1.png";
import DashCards from "../Cards/DashCards";
import DATAS from "../../Test/TestData";
import MyChart from "../Charts/LineChart/MyChart";
import Ellipse1 from "../../assets/Ellipse/Ellipse1";
import Ellipse2 from "../../assets/Ellipse/Ellipse2";
import Products from "../Products/Products";
import Schedule from "../Schedule/Schedule";
import SearchBar from "../Input/SearchBar";

const Dash = () => {
  return (
    <div className="flex flex-col gap-10 font-Montserra rounded-3xl h-full py-5 px-14">
      <div className="flex flex-row justify-between text-black">
        <h2 className="font-Montserrat font-bold text-2xl">Dashboard</h2>
        <div className="flex flex-row gap-8">
          {/* <input type="text" value="search" /> */}
          <SearchBar />
          <NotificationSvg />
          <img
            src={Image}
            alt="profile"
            className="rounded-2xl h-8 self-center cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between gap-4 flex-wrap">
        {DATAS.map((e) => {
          return (
            <>
              <DashCards
                className={e.className}
                vector={e.vector}
                name={e.name}
                value={e.value}
              />
            </>
          );
        })}
      </div>
      <div className="px-10 py-5 bg-white rounded-2xl">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="font-Montserrat font-bold text-lg">Activities</h2>
              <h3 className="font-Montserrat font-normal text-sm">
                May - June 2021
              </h3>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <Ellipse1 />
              <span>Guest</span>
              <Ellipse2 />
              <span>User</span>
            </div>
          </div>
          <MyChart />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Products />
        <Schedule />
      </div>
    </div>
  );
};

export default Dash;
