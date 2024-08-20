import React from "react";

const Container = ({ children }) => {
  return (
    <section className=" w-full px-4 sm:px-10 md:px-0  md:w-5/6 lg:h-4/5 xl:w-9/12 mx-auto">
      {children}
    </section>
  );
};

export default Container;
