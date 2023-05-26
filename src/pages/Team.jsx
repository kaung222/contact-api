import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import { ModeContext } from "../features/ModeContext";
// import Pagination from "../components/Pagination";

const Team = () => {
  const [mode, setMode] = useContext(ModeContext);
  return (
    <div data-theme={`${mode && "light"}`}>
      <Navbar />
      <div className="flex items-center justify-center w-full h-full min-h-screen">
        <SideBar />
        <Content />

        {/* pagination  */}
      </div>
    </div>
  );
};

export default Team;
