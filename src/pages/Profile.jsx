import React, { memo, useCallback, useContext, useState } from "react";
import SideBar from "../components/SideBar";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ModeContext } from "../features/ModeContext";
import { useGetProfileQuery } from "../features/api/ContactApi";

const Profile = memo(() => {
  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");
  const [mode, setMode] = useContext(ModeContext);
  const { data } = useGetProfileQuery(token);
  // console.log(data?.user);
  const account = data?.user;
  const timeStamp = account?.created_at;
  const durationInMs = Date.now() - new Date(timeStamp).getTime();
  const durationInMinus = durationInMs / 3600000;
  return (
    <div className="ml-[300px]" data-theme={`${mode && "light"}`}>
      <Navbar />
      <div className=" h-full w-full flex">
        <SideBar />
        <div className=" h-screen w-full bg-base-100 shadow-xl p-5">
          <div className="flex items-center justify-between border-b-[1px] border-slate-400 pb-5">
            <div className="">
              <h3 className=" text-xl">{user.name}</h3>
              <p className="text-slate-400 text-sm">{user.email}</p>
              <Link to="/password-change">
                <button className=" text-blue-700 text-sm underline">
                  Change Password
                </button>
              </Link>
            </div>
            {/* <button onClick={()=>setcount(count+1)}>click</button> */}

            <div className="">
              <button>
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    // checked={mode}
                    onChange={() => setMode(!mode)}
                  />

                  <svg
                    className="swap-on fill-current w-5 h-5  md:w-8 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  <svg
                    className="swap-off fill-current w-5 h-5 md:w-8 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </button>
            </div>
          </div>
          {/* content  */}
          <div className=" p-5 text-sm">
            <p>Created At = {account?.created_at}</p>
            <p>Updated At = {account?.updated_at}</p>
            <p> This account was created last {durationInMinus.toFixed(2)} hours ago.</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Profile;
