import React from "react";
import {
  AiFillDollarCircle,
  AiOutlineBackward,
  AiOutlineClockCircle,
  AiOutlineForward,
} from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiWallet2Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";
import ChartCoponent from "./ChartCoponent";
import { FiChevronDown } from "react-icons/fi";

const DashboardContent = () => {
  return (
    <div className="text-center w-full h-screen p-5 px-7 mr-[280px]">
      <div className="flex items-center justify-between">
        <h2 className=" text-2xl">Welcome James!</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" cursor-pointer">
              <button className="flex items-center rounded-xl gap-3 bg-base-300 px-3 py-1 justify-center">
                <span>Daily</span>
                <FiChevronDown />
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-44"
            >
              <li>
                <button>Daily</button>

                <button>Weekly</button>

                <button>Monthly</button>
              </li>
            </ul>
          </div>
          <div className="btns flex gap-3">
            <button className="p-2 rounded-full bg-base-200">
              <AiOutlineBackward />
            </button>
            <button className="p-2 rounded-full bg-base-200">
              <AiOutlineForward />
            </button>
          </div>
        </div>
      </div>
      {/* card  */}
      <div className=" mt-7 flex items-center justify-between">
        <div className="w-[150px] h-[135px] p-5 rounded-xl shadow-md shadow-base-300 bg-base-300">
          <div className="flex  justify-between">
            <RiWallet2Line className="m-2 text-2xl text-[#3c37ff] font-normal" />
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" cursor-pointer">
                <SlOptionsVertical />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu  shadow bg-base-200 rounded-xl w-52"
              >
                <li>
                 
                    <button className="text-sm">Detail</button>
                    <button className="text-sm">Transfer</button>
                  
                </li>
              </ul>
            </div>
          </div>
          <p className="pt-2 font-bold">$ 298,834.50</p>
          <h1 className=" text-sm font-normal text-slate-500">Your Balance</h1>
        </div>
        <div className=" w-[150px] h-[135px] p-5 rounded-xl shadow-md shadow-base-300 bg-base-300">
          <div className="flex  justify-between">
            <IoIosPeople className="m-2 text-2xl text-[#3c37ff]" />
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" cursor-pointer">
                <SlOptionsVertical />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  
                    <button className="text-sm">Detail</button>
                  
                </li>
              </ul>
            </div>
          </div>
          <p className="pt-2 font-bold"> 997 /1000</p>
          <h1 className=" text-sm font-normal text-slate-500">
            Employees Working Today
          </h1>
        </div>
        <div className="w-[150px] h-[135px] p-5 rounded-xl shadow-md shadow-base-300 bg-base-300">
          <div className="flex  justify-between">
            <AiFillDollarCircle className="m-2 text-2xl text-[#3c37ff]" />
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" cursor-pointer">
                <SlOptionsVertical />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-200 rounded-box w-52"
              >
                <li>
                 
                    <button className="text-sm">Detail</button>
                  
                </li>
              </ul>
            </div>
          </div>
          <p className="pt-2 font-bold">$ 78967.60 </p>
          <h1 className=" text-sm font-normal text-slate-500">
            Total Expense Today
          </h1>
        </div>
        <div className="w-[150px] h-[135px] p-5 rounded-xl shadow-md shadow-base-300 bg-base-300">
          <div className="flex  justify-between">
            <AiOutlineClockCircle className="m-2 text-2xl text-[#3c37ff]" />
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" cursor-pointer">
                <SlOptionsVertical />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  
                    <button className=" text-sm">Detail</button>
                  
                </li>
              </ul>
            </div>
          </div>
          <p className="pt-2 font-bold"> 7552 hrs </p>
          <h1 className=" text-sm font-normal text-slate-500">
            Total Working Hours Today
          </h1>
        </div>
      </div>
      {/* chart  */}
      <ChartCoponent />
    </div>
  );
};

export default DashboardContent;
