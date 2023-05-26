import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosPeople, IoMdPeople, IoMdPerson } from "react-icons/io";
import { RiHomeGearFill, RiLogoutCircleLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";

import { NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/AuthApi";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { FiDollarSign, FiPackage, FiRepeat } from "react-icons/fi";

const SideBar = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  // console.log(token);
  const [logout] = useLogoutMutation();
  const logoutHandler = (token) => {
    swal({
      title: "Are you sure to logout?",

      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const data = logout(token);

        Cookies.remove("user");
        Cookies.remove("token");
        navigate("/login");

        // swal(" Logged out successfully!", {
        //   icon: "success",
        // });
        toast("logouted ..;");
      }
    });
  };
  return (
    <div className="h-full hidden md:block fixed top-0 left-0">
      <div className=" h-full">
        <div className="w-[280px] bg-base-100 h-full shadow-base-300 shadow-xl">
          <h3 className="text-center py-5  text-xl text-blue-700">MMS IT</h3>
          {/* <ToastContainer /> */}
          <div className="flex items-center flex-col gap-[118px] justify-between">
            <div className="mt-5 w-full flex flex-col items-start  justify-start">
              <NavLink to="/" className="text-slate-500 w-full hover-active">
                <button className="flex text-base-400 items-center justify-start px-5 py-2 gap-3">
                  <span>
                    <AiOutlineHome />
                  </span>
                  <span className="text-sm">Dashboard</span>
                </button>
              </NavLink>
              <NavLink to="/team?page=1" className="w-full text-slate-500 hover-active">
                <div className="flex w-full items-center justify-start px-5  py-2  gap-3">
                  <span>
                    <IoIosPeople />
                  </span>
                  <span className="text-sm">Team</span>
                </div>
              </NavLink>
              <NavLink to="/profile" className="text-slate-500 hover-active w-full">
                <div className="flex items-center justify-start px-5  py-2  gap-3">
                  <span>
                    <IoMdPerson />
                  </span>
                  <span className="text-sm">Profile</span>
                </div>
              </NavLink>
              <NavLink to="/last-projects" className="text-slate-500 hover-active w-full ">
                <div className="flex text-base-400 text-sm items-center justify-start px-5 hover:ml-[3px] py-2  gap-3">
                  <span>
                    <FiPackage />
                  </span>
                  <span className="text-sm">Last Projects</span>
                </div>
              </NavLink>
              <NavLink to="/transition" className="text-slate-500 hover-active w-full">
                <div className="flex text-base-400  items-center justify-start px-5  py-2  gap-3">
                  <span>
                    <FiRepeat />
                  </span>
                  <span className="text-sm">Transitions</span>
                </div>
              </NavLink>
              <NavLink to="/seller" className="text-slate-500 hover-active w-full">
                <div className="flex text-base-400  items-center justify-start px-5  py-2  gap-3">
                  <span>
                    <FiDollarSign />
                  </span>
                  <span className="text-sm">Sellers</span>
                </div>
              </NavLink>
              <NavLink to="/customer" className="text-slate-500 hover-active w-full">
                <div className="flex text-base-400  items-center justify-start px-5  py-2  gap-3">
                  <span>
                    <IoMdPeople />
                  </span>
                  <span className="text-sm">Customers</span>
                </div>
              </NavLink>
              <NavLink to="/setting" className="text-slate-500 hover-active w-full">
                <div className="flex text-base-400  items-center justify-start px-5  py-2  gap-3">
                  <span>
                    <GoGear />
                  </span>
                  <span className="text-sm">Setting</span>
                </div>
              </NavLink>
            <button
              className="flex text-slate-500 hover-active w-full items-center justify-start px-5   py-2  gap-3"
              onClick={() => logoutHandler(token)}
            >
              <span>
                <RiLogoutCircleLine />
              </span>
              <span className="text-sm">Logout</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
