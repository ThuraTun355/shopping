import React from "react";
import useCartStore from "../store/useCartStore";

const Cart = ({
  cart: { cartId, productImage, productTitle, productPrice, quantity },
}) => {
  const { carts, updateQuantity, deleteCart } = useCartStore();
  const cost = (quantity * productPrice).toFixed(2);
  const handleAddQuantityBtn = () => {
    updateQuantity(cartId, 1);
  };
  const handleSubQuantityBtn = () => {
    quantity > 1
      ? updateQuantity(cartId, -1)
      : confirm("Are you remove to this ?") && deleteCart(cartId);
  };

  return (
    <div className=" border-2 border-neutral-800 p-5">
      <div className=" grid grid-cols-12 items-center justify-center gap-5">
        <div className=" col-span-1 flex justify-center items-center">
          <img src={productImage} className=" h-16  " />
        </div>
        <div className=" col-span-6">
          <h4 className=" font-semibold text-lg">{productTitle}</h4>
          <p className=" font-medium text-gray-500">Price ($ {productPrice})</p>
        </div>

        <div className=" col-span-3 flex flex-col justify-center items-center">
          <h4 className=" font-semibold text-lg mb-2">Quantity</h4>
          <div className=" flex items-center justify-center gap-6">
            <button
              onClick={handleSubQuantityBtn}
              className=" size-7 inline-flex justify-center rounded items-center  bg-neutral-700 text-neutral-50 border border-neutral-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="size-3 stroke-white fill-white pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <p className=" font-bold">{quantity}</p>
            <button
              onClick={handleAddQuantityBtn}
              className=" size-7  inline-flex justify-center rounded  items-center  bg-neutral-700 text-neutral-50 border border-neutral-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="size-3 stroke-white fill-white pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="col-span-2 flex flex-col items-end justify-center">
          <h5 className=" text-lg font-semibold">Cost</h5>
          <h5 className=" font-bold text-xl">$ {cost}</h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;
