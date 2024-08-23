import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <Container className=" flex flex-col h-full">
      <BreadCrumb productDetailTitle="My Cart" />
      <CartSection />
    </Container>
  );
};

export default MyCart;
