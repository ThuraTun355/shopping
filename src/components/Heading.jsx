import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Heading = () => {
  const { carts } = useCartStore();
  return (
    <header className=" py-5 pe-3">
      <Container>
        <div className="flex justify-between items-center ">
          <h1 className=" font-bold text-3xl">E-commerce</h1>
          <div className="flex items-center justify-center gap-4">
            <button className=" border border-neutral-900 p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <Link
              to={"/my-cart"}
              className="border border-neutral-600 p-2 bg-neutral-700 text-white rounded hover:bg-white hover:text-black duration-200 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className=" size-6 bg-red-500 text-white inline-flex justify-center items-center rounded-full absolute top-0 right-0 text-xs transform translate-x-1/2 -translate-y-1/2">
                {carts.length}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Heading;
