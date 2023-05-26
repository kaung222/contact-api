import React from "react";
import Test from "../Test";

const ChartCoponent = () => {
  return (
    <div className="w-full my-7 flex items-center justify-center gap-7">
      <div className=" flex flex-col gap-1">
        <div className="w-[150px] h-[95px] p-1 bg-base-300 rounded-2xl">
          <h2 className="text-sm">New Clients</h2>
          <p className=" text-xl py-1 font-bold">67</p>
          <span className=" bg-green-200 px-2 rounded-lg py-1 text-slate-600 text-sm">
            + 18.7%
          </span>
        </div>
        <div className="w-[150px] h-[95px] p-1 bg-base-300 rounded-2xl">
          <h2 className="text-sm">Invoice Overdue</h2>
          <p className=" text-xl py-1 font-bold">6</p>
          <span className=" bg-red-200 px-2 rounded-lg py-1 text-slate-600 text-sm">
            + 2.5 %
          </span>
        </div>
        <div className="w-[150px] h-[95px] p-1 bg-base-300 rounded-2xl">
          <h2 className="text-sm">Pending Projects</h2>
          <p className=" text-xl py-1 font-bold">3</p>
          <span className=" bg-orange-200 px-2 rounded-lg py-1 text-slate-600 text-sm">
            3 weeks
          </span>
        </div>
      </div>
      <div className=" bg-base-300 rounded-xl px-5 p-3 w-full h-[300px]">
        <div className=" flex items-center justify-between">
          <p className=" text-sm">Revenue</p>
          <p className=" text-sm">This Week vs Last Week vs Older Week</p>
        </div>
        <Test/>
        {/* <p className="text-center text-sm font-bold">Weekly Result Chart</p> */}
      </div>
    </div>
  );
};

export default ChartCoponent;
