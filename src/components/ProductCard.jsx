import React from "react";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    description,
    image,
    rating: { rate, count },
  },
}) => {
  const { carts, addToCart } = useCartStore();
  const navigate = useNavigate();
  const handleProductDetail = () => {
    navigate(`/product-detail/${id}`);
  };
  const handleAddToCartBtn = (event) => {
    const newCart = {
      cartId: Date.now(),
      productId: id,
      productPrice: price,
      productTitle: title,
      productImage: image,
      quantity: 1,
      // cost: productPrice * quantity,
    };
    event.stopPropagation();
    addToCart(newCart);
  };

  const handleAddedBtn = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleProductDetail}
      className=" p-4 border border-neutral-700 flex flex-col gap-2 items-start justify-center"
    >
      <img src={image} className=" h-24 w-auto" />
      <h5 className=" font-bold line-clamp-1">{title}</h5>
      <p className=" font-medium text-sm line-clamp-3 text-neutral-500">
        {description}
      </p>

      <div className=" flex justify-between items-center w-full">
        <StarRating rate={rate} />
        <p className="">
          ( <span>{rate}</span> / <span>{count}</span> )
        </p>
      </div>
      <div className=" flex justify-between items-center w-full">
        <p className=" font-bold ">
          $ <span className=" text-neutral-800">{price}</span>
        </p>

        {carts.find((el) => el.productId === id) ? (
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
  );
};

export default ProductCard;
