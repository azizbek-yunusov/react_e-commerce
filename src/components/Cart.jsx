import React from "react";
import { handeleBasketShow } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);
  const quantity = order.length;
  return (
    <div
      className="cursor-pointer text-zinc-700 active:text-yellow-500 transition-all duration-100 ease-linear"
      onClick={() => dispatch(handeleBasketShow())}
    >
      <div className="z-10 block relative">
        <div className="p-3">
          <FiShoppingCart className="md:text-2xl text-gray-800" />
        </div>
        {quantity ? (
          <span className="absolute top-[2px] right-1 mr-1 mt-1 bg-red-500 md:px-[5px] md:py-[1px] px-[5px] py-[2px] rounded-full text-white font-medium text-xs">
            {quantity}
          </span>
        ) : (
          <span className="absolute top-[2px] right-1 mr-1 mt-1 bg-red-500 md:px-[5px] md:py-[1px] px-[5px] py-[2px] rounded-full text-white font-medium text-xs">
            0
          </span>
        )}
        <p className="-mt-[14px] lg:block hidden text-gray-800 md:text-sm text-base font-medium">
          Корзина
        </p>
      </div>
    </div>
  );
};

export default Cart;
