import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosPeople, IoMdPerson } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/AuthApi";
import Cookies from "js-cookie";

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

        swal(" Logged out successfully!", {
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="h-full hidden md:block fixed top-0 left-0">
      <div className=" h-full">
        <div className="w-[300px] bg-base-100 h-full shadow-xl">
          <h3 className="text-center py-5  text-xl text-blue-700">MMS IT</h3>
          <div className="mt-5 flex flex-col items-start  justify-start">
            <NavLink to="/">
              <button className="flex text-base-400 w-[300px] items-center justify-start px-5 py-2 gap-3">
                <span>
                  <AiOutlineHome />
                </span>
                <span>Dashboard</span>
              </button>
            </NavLink>
            <NavLink to="/team?page=1">
              <div className="flex text-base-400 w-[300px] items-center justify-start px-5  py-2  gap-3">
                <span>
                  <IoIosPeople />
                </span>
                <span>Team</span>
              </div>
            </NavLink>
            <NavLink to="/profile">
              <div className="flex text-base-400 w-[300px] items-center justify-start px-5  py-2  gap-3">
                <span>
                  <IoMdPerson />
                </span>
                <span>Profile</span>
              </div>
            </NavLink>

            <button
              className="flex text-base-400 items-center justify-start px-5   py-2  gap-3"
              onClick={() => logoutHandler(token)}
            >
              <span>
                <RiLogoutCircleLine />
              </span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
