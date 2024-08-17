import React, { useContext } from "react";
import { generalContext } from "../context/GeneralContext";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const { products } = useContext(generalContext);
  return (
    <section className=" grid grid-cols-4 gap-4 mb-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductSection;
