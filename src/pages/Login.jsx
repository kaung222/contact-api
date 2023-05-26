import React, { useCallback, useState } from "react";
import loginIamge from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addUser } from "../features/services/AuthSlice";
import { useLoginMutation } from "../features/api/AuthApi";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [hidePassword, setHidePassword] = useState(true);

  const user = { email, password };
  const loginHandler = useCallback(async (user) => {
    const response = await login(user);
    console.log(response?.data);
    if (response?.data?.success) {
      dispatch(addUser({ user: response?.data?.user, token: response?.data?.token }));
      console.log("login successfully!");
      navigate("/");
    } else {
      swal(response.error.data.message);
    }
  },[hidePassword]);
  return (
    <div>
      <div className="flex items-center justify-center gap-10 bg-white h-screen md:p-5 md:px-10 w-full">
        {/* left side start  */}
        <div className=" w-full md:w-1/2 md:p-5 rounded-lg h-full bg-[#f3f5f9]">
          <div className=" px-10 md:px-3">
            {/* <span className=" px-1 text-[#3c37ff] text-3xl">Logo</span> */}
            <div className=" my-3 flex items-center justify-center flex-col">
              <h1 className=" text-2xl md:text-3xl mt-5 font-bold text-slate-700">
                Login
              </h1>
              <p className="my-3  font-semibold text-slate-400">
                Welcome back , Chief!
              </p>
            </div>
            <div className="text-sm">
              <div className=" mt-2">
                <label htmlFor="" className=" text-base-300">
                  Email
                </label>
                <br />
                <input
                  value={email}
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="example@gmail.com"
                  className=" border-none bg-white  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className=" text-base-300">
                    Password
                  </label>
                  {hidePassword ? (
                    <button onClick={() => setHidePassword(!hidePassword)}>
                      <AiOutlineEyeInvisible className="text-xl" />
                    </button>
                  ) : (
                    <button onClick={() => setHidePassword(!hidePassword)}>
                      <AiOutlineEye className=" text-xl" />
                    </button>
                  )}
                </div>

                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={hidePassword ? "password" : "text"}
                  placeholder="****"
                  className=" border-none bg-white  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
                <span className=" text-end w-full text-sm text-[#3c37ff] hover:underline cursor-pointer">
                  Recover Password
                </span>
              </div>
              <button
                className="border-none  w-full my-5 bg-[#3c37ff] text-slate-300 focus:outline-blue-700 py-2 px-3 rounded-lg"
                onClick={() => loginHandler(user)}
              >
                Login
              </button>
              <span className="text-sm font-normal text-slate-400 mt-5">
                Don't have an account?
              </span>
              <Link to="/register">
                <span className="text-[#3c37ff] text-sm mx-3 hover:underline cursor-pointer">
                  Register
                </span>
              </Link>
            </div>
            <div className=" mt-[50px]">
              <div className=" flex items-center justify-start gap-3 text-sm text-slate-500">
                <span className="text-[#3c37ff] ">
                  <AiOutlineMail />
                </span>
                <span>
                  Need help or suggest anything{" "}
                  <Link to="/" className="text-[#3c37ff] hover:underline ">
                    {" "}
                    here
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* left side end  */}

        {/* right side start  */}
        <div className="md:w-1/2 hidden md:block h-full ">
          <img src={loginIamge} alt="" />
        </div>

        {/* right side end  */}
      </div>
    </div>
  );
};

export default Login;
