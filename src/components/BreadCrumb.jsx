import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const BreadCrumb = ({ productDetailTitle }) => {
  return (
    <>
      <div className=" w-full flex gap-3 items-center justify-start mb-5">
        <Link className=" font-medium text-neutral-400" to={"/"}>
          Home
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-neutral-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>

        <p className=" font-medium text-neutral-800">{productDetailTitle}</p>
      </div>
    </>
  );
};

export default BreadCrumb;
