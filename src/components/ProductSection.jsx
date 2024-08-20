import React, { useContext } from "react";
import { generalContext } from "../context/GeneralContext";
import ProductCard from "./ProductCard";
import Container from "./Container";

const ProductSection = () => {
  const { products } = useContext(generalContext);
  return (
    <section className="mb-5">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
