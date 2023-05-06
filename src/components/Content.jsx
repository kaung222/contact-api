import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Table from "./Table";
import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../features/ModeContext";
import { debounce } from "lodash";

const Content = () => {
  const [mode, setMode, search, setSearch] = useContext(ModeContext);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("q"));
  if (searchParams.get("q")) {
    setSearch(searchParams.get("q"));
  }
  return (
    <div className="w-full h-full ml-[300px]">
      <div className=" h-full w-full bg-base-100 p-5 shadow-xl">
        <div className="flex items-center justify-between border-b-[1px] border-slate-400 pb-5">
          <div className="">
            <h3 className=" text-xl">Team Members</h3>
            <p className="text-slate-500 text-sm">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <div className="btn-group w-[150px]">
            <input
              type="text"
              placeholder="Search..."
              className=" form-control px-5 py-2 outline-none rounded-full"
              // defaultValue={searchParams.get('q')}
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchParams(`?q=${e.target.value}&page=1`);
              }}
            />
            {/* <button className="btn">search</button> */}
          </div>
          <Link to="/create">
            <button className="flex text-sm items-center justify-center gap-5 px-3 py-2 border-slate-500 border-[1px] rounded-full md:rounded-lg">
              <span>
                <AiOutlinePlus />
              </span>
              <span className="hidden md:block">Add Contact</span>
            </button>
          </Link>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Content;
