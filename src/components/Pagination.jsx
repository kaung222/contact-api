import React from "react";
import Cookies from "js-cookie";
import { useGetContactsQuery } from "../features/api/ContactApi";

const Pagination = ({
  setCurrentPage,
  currentPage,
  setSearchParams,
  searchParams,
  totalResults,
  totalPages,
}) => {
  const token = Cookies.get("token");
  // const { data } = useGetContactsQuery(token);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  // const newPage = ["...", totalPages][(pages, newPage)];
  console.log(totalPages);
  const isActive = searchParams.get("page");
  // console.log(data);
  return (
    <>
      <div className="btn-group mt-3 mx-5">
        <button
          className="btn"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
              setSearchParams(`?page=${currentPage - 1}`);
            }
          }}
        >
          PREV
        </button>
        {pages?.map((page) => {
          return (
            <button
              className={` btn ${isActive == page && "bg-blue-700"}`}
              key={page}
              onClick={() => {
                setSearchParams(`?page=${page}`);
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          );
        })}
        {/* <p className="btn">page {currentPage}</p> */}
        <button
          className="btn"
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
              setSearchParams(`?page=${currentPage + 1}`);
            }
          }}
        >
          NEXT
        </button>
      </div>
      Total Results : <span className="text-blue-700">{totalResults}</span>
    </>
  );
};

export default Pagination;
