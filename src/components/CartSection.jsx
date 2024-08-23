import React from "react";
import useCartStore from "../store/useCartStore";
import Cart from "./Cart";
import empty from "../assets/empty.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  // cart.reduce((pv,cv) => pv + cv ,0)
  const total = carts.reduce((pv, cv) => {
    const cost = cv.productPrice * cv.quantity;
    return pv + cost;
  }, 0);
  const tax = total * 0.05;
  const netTotal = total + tax;

  return (
    <>
      <div className=" flex flex-col gap-3 mb-2 flex-grow overflow-scroll  category-btn-group">
        {carts.length === 0 ? (
          <div className=" m-auto flex flex-col items-center justify-center">
            <img src={empty} alt="empty" className=" h-[250px] " />
            <p className=" font-semibold text-xl text-neutral-800 ">
              There is no carts.Please Add something...
            </p>
          </div>
        ) : (
          carts.map((cart, index) => <Cart key={index} cart={cart} />)
        )}
      </div>
      <div className="total-section border-t-2 border-neutral-800 py-2 px-4 flex justify-between items-center mt-auto">
        <div className=" flex justify-between items-center w-2/5">
          <div>
            <p className=" font-medium text-neutral-500">Total</p>
            <p className="font-bold text-neutral-800">{total.toFixed(2)}</p>
          </div>
          <div>
            <p className=" font-medium text-neutral-500">Tax(5%)</p>
            <p className="font-bold text-neutral-800">{tax.toFixed(2)}</p>
          </div>
          <div>
            <p className=" font-medium text-neutral-500">Net Total</p>
            <p className="font-bold text-neutral-800">{netTotal.toFixed(2)}</p>
          </div>
        </div>
        <div>
          <button className=" px-5 py-2 border-2 border-neutral-800 text-neutral-900 hover:bg-neutral-800 hover:text-neutral-50 font-semibold duration-300">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSection;
