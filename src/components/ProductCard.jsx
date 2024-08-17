import React from "react";
import StarRating from "./StarRating";

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
  return (
    <div className=" p-4 border border-neutral-700 flex flex-col gap-2 items-start justify-center">
      <img src={image} className=" h-24 w-auto" />
      <h5 className=" font-bold line-clamp-1">{title}</h5>
      <p className=" font-medium text-sm line-clamp-3 text-neutral-500">
        {description}
      </p>

      <div className=" flex justify-between items-center w-full">
        <StarRating rate={rate} />
        <p className="">( 4.2 / 250 )</p>
      </div>
      <div className=" flex justify-between items-center w-full">
        <p className=" font-bold ">
          $ <span className=" text-neutral-800">{price}</span>
        </p>

        <button className=" bg-neutral-700 px-8 py-1 text-neutral-100 border border-neutral-700 rounded">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
