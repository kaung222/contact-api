import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiProfileFill } from "react-icons/ri";

const RightSideBar = () => {
  const people = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="fixed w-[280px] top-0 right-0 h-screen shadow-base-300 p-3 shadow-md">
      <div className="flex items-center justify-between gap-3 px-3">
        <div className=" flex gap-5">
          <button className=" text-xl">
            <IoMdNotificationsOutline />
          </button>
          <button className=" text-xl">
            <FiMessageSquare />
          </button>
        </div>
        <div className=" flex items-center gap-2 justify-center">
          <p className=" text-sm text-[#3c37ff]">James</p>
          <img
            src="https://previews.123rf.com/images/mrpants/mrpants1304/mrpants130400009/18867353-studio-photo-of-handsome-young-man-in-white-shirt-and-necktie-on-white-background.jpg"
            alt=""
            className=" w-[40px] h-[40px] rounded-full"
          />
        </div>
      </div>
      <div className="">
        <h1 className=" mt-5 text-sm"> Recent Received Mails </h1>
        <div className="">
          {people.map((person) => {
            return (
              <div className="flex items-center mt-5 justify-between" key={person}>
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                    alt=""
                    className=" w-[30px] h-[30px] rounded-full"
                  />
                  <p className=" text-sm">MoCha</p>
                </div>
                <span className="p-1 rounded-full bg-green-600"></span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
