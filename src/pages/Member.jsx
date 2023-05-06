import React from "react";
import  Sidebar  from "../components/SideBar";

const Member = () => {
  return (
    <div>
      <div className=" h-screen w-screen flex">
        <Sidebar />
        <div className=" h-full w-full bg-slate-100 shadow-xl p-5">
          <div className="flex items-center justify-between border-b-[1px] border-slate-400 pb-5">
            <div className="">
              <h3 className=" text-xl">sd</h3>
              <p className="text-slate-500 text-sm">sdf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
