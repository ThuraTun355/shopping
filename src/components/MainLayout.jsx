import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import Footer from "./Footer";
import GeneralContextProvider from "../context/GeneralContext";

const MainLayout = () => {
  return (
    <GeneralContextProvider>
      <Heading />
      <Outlet />
      <Footer />
    </GeneralContextProvider>
  );
};

export default MainLayout;
