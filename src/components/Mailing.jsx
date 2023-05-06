import React, { useContext } from "react";
import { ModeContext } from "../features/ModeContext";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

const Mailing = () => {
    const [mode] = useContext(ModeContext)
    const location = useLocation()
    const contact = location.state

  return (
    <div>
      <div
        className=" h-screen w-screen flex"
        data-theme={`${mode && "light"}`}
      >
        <SideBar />
        <div className="w-full">
          <div className=" relative w-full h-full flex items-center justify-center">
            <p>Sending Mail to {contact.email} ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailing;
