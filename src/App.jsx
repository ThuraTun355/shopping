import React from "react";
import Container from "./components/Container";
import Heading from "./components/Heading";
import GeneralContextProvider from "./context/GeneralContext";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import FooterContent from "./components/FooterContent";
import ProductSection from "./components/ProductSection";

const App = () => {
  return (
    <>
      <GeneralContextProvider>
        <Container>
          <Heading />
          <CategorySection />
          <ProductSection />
        </Container>
        <Footer />
      </GeneralContextProvider>
    </>
  );
};

export default App;
