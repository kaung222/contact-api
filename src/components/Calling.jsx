import React, { useContext } from "react";
import { ModeContext } from "../features/ModeContext";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

const Calling = () => {
  const [mode] = useContext(ModeContext);
  const location = useLocation();
  const contact = location?.state;
  console.log(contact);
  return (
    <div>
      <div
        className=" h-screen w-full flex"
        data-theme={`${mode && "light"}`}
      >
        <SideBar />
        <div className="">
          <div className=" ml-[300px] relative w-full h-full flex items-center justify-center">
            <p>Calling to {contact.phone}...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calling;
