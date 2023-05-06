import React, { useCallback, useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import SideBar from "../components/SideBar";
import { useChangePasswordMutation } from "../features/api/ContactApi";
import { ModeContext } from "../features/ModeContext";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();
  const token = Cookies.get("token");
  const [current_password, setCurrent_password] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const [mode, setMode] = useContext(ModeContext);

  const passwordData = { current_password, password, password_confirmation };
  const changePasswordHandler = useCallback(async (passwordData, token) => {
    const { data } = await changePassword({ passwordData, token });
    data;
    if (data?.success) {
      navigate("/profile");
      swal("Password changed successfully!");
    }
  });
  return (
    <div className=" h-screen w-screen flex" data-theme={`${mode && "light"}`}>
      <SideBar />
      <div className="w-full">
        <div className=" relative w-full h-full flex items-center justify-center">
          <div className="w-[450px] h-auto p-5 py-5 shadow-md rounded-lg shadow-slate-700">
            <h1 className="text-center mb-5 text-2xl font-semibold">
              Change Password
            </h1>
            <div className="text-sm">
              <div className=" mt-2 flex items-center justify-center gap-3 ">
                <span className=" w-[200px]">Current Password</span>
                <input
                  onChange={(e) => setCurrent_password(e.target.value)}
                  type="text"
                  placeholder="****"
                  required
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2 flex items-center justify-center gap-3 ">
                <span className=" w-[200px]">New Password</span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="****"
                  required
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2 flex items-center justify-center gap-3 ">
                <span className=" w-[200px]">Confirm New Password</span>
                <input
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                  type="text"
                  placeholder="****"
                  required
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>

              <button
                className="border-none  w-full my-9 bg-[#3c37ff] text-slate-300 py-2 px-3 rounded-lg"
                onClick={() => changePasswordHandler(passwordData, token)}
              >
                Save Change
              </button>
            </div>
          </div>
          <Link to="/profile">
            <button className="flex text-sm textsl items-center absolute top-2 right-2 justify-center gap-5 px-3 py-2 border-slate-500 border-[1px] rounded-lg">
              <span>
                <AiOutlineClose />
              </span>
              <span>Cancel</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
