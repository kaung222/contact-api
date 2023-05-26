import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import Guard from "./components/Guard";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm";
import Member from "./pages/Member";
import DetailPage from "./pages/DetailPage";
import ChangePassword from "./pages/ChangePassword";
import Calling from "./components/Calling";
import Mailing from "./components/Mailing";
import Table from "./components/Table";
import Test from "./Test";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
        <Route
          path="/team"
          element={
            <Guard>
              <Team />
            </Guard>
          }
        />
        <Route
          path="/profile"
          element={
            <Guard>
              <Profile />
            </Guard>
          }
        />
        <Route
          path="/create"
          element={
            <Guard>
              <CreateForm />
            </Guard>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Guard>
              <EditForm />
            </Guard>
          }
        />
        <Route
          path="/member/:id"
          element={
            <Guard>
              <Member />
            </Guard>
          }
        />
        <Route
          path="/password-change"
          element={
            <Guard>
              <ChangePassword />
            </Guard>
          }
        />
        <Route
          path="/:id/detail"
          element={
            <Guard>
              <DetailPage />
            </Guard>
          }
        />
        <Route
          path="/contact/:id/call"
          element={
            <Guard>
              <Calling />
            </Guard>
          }
        />
        <Route
          path="/contact/:id/mail"
          element={
            <Guard>
              <Mailing />
            </Guard>
          }
        />
        <Route
          path="/team?page=1"
          element={
            <Guard>
              <Table />
            </Guard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setting" element={<Dashboard />} />
        <Route path="/customer" element={<Dashboard />} />
        <Route path="/last-projects" element={<Dashboard />} />
        <Route path="/transition" element={<Dashboard />} />
        <Route path="/seller" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default App;
