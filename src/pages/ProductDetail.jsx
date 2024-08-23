import React, { useContext } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { generalContext } from "../context/GeneralContext";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import StarRating from "../components/StarRating";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useProductStore();
  const { carts, addToCart } = useCartStore();

  const currentProduct = products.find(
    (product) => product.id === parseInt(productId)
  );
  const handleAddToCartBtn = (event) => {
    event.stopPropagation();

    const newCart = {
      cartId: Date.now(),
      productId: currentProduct.id,
      productPrice: currentProduct.price,
      productTitle: currentProduct.title,
      productImage: currentProduct.image,
      quantity: 1,
      // cost: productPrice * quantity,
    };
    addToCart(newCart);
  };

  const handleAddedBtn = (event) => {
    event.stopPropagation();
  };
  return (
    <Container className=" h-full flex flex-col">
      <BreadCrumb productDetailTitle="Product-Detail" />
      <div className="flex-grow overflow-scroll category-btn-group flex flex-col">
        <div className=" border-2 border-neutral-700 p-10 ">
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
              <p className="text-neutral-600 font-medium text-justify ">
                {currentProduct.description}
              </p>
              <div className=" flex justify-between items-center w-full">
                <StarRating rate={currentProduct.rating.rate} />
                <p className="">
                  ( <span>{currentProduct.rating.rate}</span> /{" "}
                  <span>{currentProduct.rating.count}</span> )
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="  text-xl">
                  Price{" "}
                  <span className="font-bold">($ {currentProduct.price})</span>
                </p>
                {carts.find((el) => el.productId === currentProduct.id) ? (
                  <button
                    onClick={handleAddedBtn}
                    className=" bg-neutral-800 px-8 py-1 text-neutral-50 border border-neutral-700 rounded"
                  >
                    Added
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCartBtn}
                    className=" text-neutral-800 px-8 py-1 bg-neutral-100 border border-neutral-700 rounded"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
