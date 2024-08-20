import React, { useContext } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { generalContext } from "../context/GeneralContext";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import StarRating from "../components/StarRating";

const ProductDetail = () => {
  const { productId } = useParams();

  const { products, categories } = useContext(generalContext);
  const currentProduct = products.find(
    (product) => product.id === parseInt(productId)
  );
  return (
    <Container>
      <BreadCrumb productDetailTitle="Product-Detail" />
      <div className=" border-2 border-neutral-700 p-10">
        <div className=" grid grid-cols-2 ">
          <div className=" col-span-1 flex justify-center items-center">
            <img src={currentProduct.image} className=" w-1/3 block" />
          </div>
          <div className=" col-span-1 flex flex-col gap-4 items-start justify-center">
            <h4 className=" font-bold text-2xl text-neutral-800">
              {currentProduct.title}
            </h4>
            <p className=" px-4 py-2 bg-neutral-700 text-neutral-100 rounded">
              {currentProduct.category}
            </p>
            <p className="text-neutral-600 font-medium text-justify">
              {currentProduct.description}
            </p>
            <StarRating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center w-full">
              <p className="  text-xl">
                Price{" "}
                <span className="font-bold">($ {currentProduct.price})</span>
              </p>
              <button className=" text-neutral-800 font-medium px-8 py-2 bg-neutral-100 border-2 border-neutral-700 rounded">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
