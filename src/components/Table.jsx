import React, { useContext, useEffect, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import Cookies from "js-cookie";
import { SlOptionsVertical } from "react-icons/sl";
import {
  useDeleteContactMutation,
  usePaginatePagesQuery,
  useSearchByNameQuery,
} from "../features/api/ContactApi";
import { Link, useSearchParams } from "react-router-dom";
import swal from "sweetalert";
import Pagination from "./Pagination";
import { ModeContext } from "../features/ModeContext";

const Table = () => {
  const [mode, setMode, search] = useContext(ModeContext);
  const token = Cookies.get("token");
  console.log(search);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  const page = searchParams.get("page")
    ? searchParams.get("page")
    : currentPage;
  const { data } = usePaginatePagesQuery({ token, page }, { skip: false });
  const temp = useSearchByNameQuery({ token, search, page });
  // const tem = useSearchByNameQuery({ token, search });
  const [deleteContact] = useDeleteContactMutation();

  // console.log(temp);
  const contacts =
    search === "" ? data?.contacts?.data : temp?.data?.contacts?.data;
  const totalPages =
    search === ""
      ? Math.ceil(data?.contacts?.total / data?.contacts?.per_page)
      : Math.ceil(temp.data?.contacts?.total / temp?.data?.contacts?.per_page);
  // console.log(contacts);
  const totalResults =
    search === "" ? data?.contacts?.total : temp?.data?.contacts?.total;

  const deleteHandler = (token, id) => {
    swal({
      title: "Are you sure to delete this contact?",
      text: "Once deleted, you will not be able to recover this contact",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const data = deleteContact({ token, id });
        swal("Contact has been deleted!", {
          icon: "success",
        });
      } else {
        swal("You cancel to delete");
      }
    });
  };
  // useEffect(() => {
  //   setSearchParams("?page=1");
  // }, []);
  return (
    <div>
      <table className=" table w-full mt-5 rounded-lg">
        <thead className=" table-header-group">
          <tr className="text-sm bg-base-100 border-b-[1px] border-slate-300">
            {/* <th></th> */}
            <th className="py-3">Name</th>
            {/* <th>Date Added</th> */}
            <th className="">Phone No.</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody className="">
          {contacts?.map((contact) => {
            return (
              <tr
                className="text-sm border-b-[1px] border-slate-300"
                key={contact.id}
              >
                {/* <td className='py-3'> 1</td> */}
                <td className=" px-7 text-start">{contact.name}</td>
                {/* <td className="text-center"> 22 March,2039</td> */}
                <td className="text-start px-7"> {contact.phone}</td>
                <td className="text-start px-7"> {contact.email}</td>
                <td className="text-start px-7"> {contact.address}</td>
                <td className="text-center">
                  <div className="flex items-center justify-center text-lg gap-1">
                    <button
                      className="px-2 py-1"
                      onClick={() => deleteHandler(token, contact.id)}
                    >
                      <IoMdTrash />
                    </button>
                    <Link to={`/edit/${contact.id}`} state={contact}>
                      <button className=" px-2 py-1">
                        <HiPencil />
                      </button>
                    </Link>
                  </div>
                </td>
                <td className="text-center p-2">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className=" cursor-pointer m-1">
                      <SlOptionsVertical />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
                    >
                      <li>
                        <Link to={`/${contact.id}/detail`}>
                          <button>Detail</button>
                        </Link>
                        <Link
                          to={`/contact/${contact.id}/call`}
                          state={contact}
                        >
                          <button>Call</button>
                        </Link>
                        <Link
                          to={`/contact/${contact.id}/mail`}
                          state={contact}
                        >
                          <button>Send Mail</button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {!contacts ||
        (contacts.length === 0 && (
          <div className="">
            <p className="mt-8 text-center w-full">No contact avaiable</p>
            <p className="mt-3 text-center w-full">
              Check your connection or
              <button
                className="text-blue-700"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </p>
          </div>
        ))}
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        totalResults={totalResults}
      />
    </div>
  );
};

export default Table;
