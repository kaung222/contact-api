import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { ModeContext } from "../features/ModeContext";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../features/api/ContactApi";
import Cookies from "js-cookie";

const DetailPage = () => {
  const token = Cookies.get("token");
  const [mode, setMode] = useContext(ModeContext);
  const { id } = useParams();
  const { data } = useGetSingleProductQuery({ token, id });
  // console.log(data);
  const contact = data?.contact;

  return (
    <div data-theme={`${mode && "light"}`}>
      <div className="">
        <Navbar />
        <div className="flex ml-[300px] w-full h-screen items-start justify-start">
          <SideBar />
          <div className=" p-5">
            <Link to="/team">
              <button className=" my-5 py-1 px-2 bg-base-200 rounded">back</button>
            </Link>
            <table className=" table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>{contact?.name}</th>
                </tr>
                <tr>
                  <th>Email</th>
                  <th>{contact?.email}</th>
                </tr>
                <tr>
                  <th>Phone</th>
                  <th>{contact?.phone}</th>
                </tr>
                <tr>
                  <th>Address</th>
                  <th>{contact?.address}</th>
                </tr>
                <tr>
                  <th>Create At</th>
                  <th>{contact?.created_at}</th>
                </tr>
                <tr>
                  <th>Updated At</th>
                  <th>{contact?.updated_at}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
