import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const BreadCrumb = ({ productDetailTitle }) => {
  return (
    <>
      <div className=" w-full flex gap-3 items-center justify-start mb-5">
        <Link className=" font-semibold text-neutral-500" to={"/"}>
          Home
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.0}
          stroke="currentColor"
          className="size-4 text-neutral-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>

        <p className=" font-semibold text-neutral-900">{productDetailTitle}</p>
      </div>
    </>
  );
};

export default BreadCrumb;
