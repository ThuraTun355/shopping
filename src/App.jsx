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
        </Container>
        <hr className=" w-full bg-black h-0.5" />
        <Container>
          <CategorySection />
          <ProductSection />
        </Container>
        <Footer>
          <Container>
            <FooterContent />
          </Container>
        </Footer>
      </GeneralContextProvider>
    </>
  );
};

export default App;
