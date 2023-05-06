import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";
import Navbar from "../components/Navbar";
import { ModeContext } from "../features/ModeContext";

const Dashboard = () => {
  const [mode, setMode] = useContext(ModeContext);
  return (
    <div data-theme={`${mode && "light"}`}>
      <Navbar />
      <div className="flex gap-5 items-center justify-bwtween w-screen h-screen">
        <SideBar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
