import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className=" w-full bg-neutral-700 py-3 mt-auto ">
      <Container>
        <p className=" text-neutral-100 flex flex-wrap text-sm md:text-base gap-1.5 md:gap-2.5">
          Copyright &copy; {new Date().getFullYear()}
          <a href="#" className="underline text-neutral-200">
            E-commerce.
          </a>{" "}
          All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
