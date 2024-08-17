import React from "react";

const FooterContent = () => {
  return (
    <>
      <p className=" text-neutral-100 flex gap-2.5">
        Copyright &copy; {new Date().getFullYear()}
        <a href="#" className="underline text-neutral-200">
          E-commerce.
        </a>{" "}
        All rights reserved.
      </p>
    </>
  );
};

export default FooterContent;
