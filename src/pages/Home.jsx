import React from "react";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import GeneralContextProvider from "../context/GeneralContext";

const Home = () => {
  return (
    <GeneralContextProvider>
      <CategorySection />
      <ProductSection />
    </GeneralContextProvider>
  );
};

export default Home;
