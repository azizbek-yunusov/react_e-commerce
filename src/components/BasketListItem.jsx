import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  romoveFromBasket,
  handeleBasketShow,
} from "../redux/actions";
import { numberWithCommas } from "./numberWithCommas";
import { MinusIcon, PlusIcon, TrashIcon } from "./svg";

const BasketListItem = ({ id, title, imgUrl, quantity, price }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex lg:py-4 py-3 ease-in-out duration-300 lg:justify-between border-b border-b-gray-200">
      <Link
        to={`/product/detail/${id}`}
        onClick={() => dispatch(handeleBasketShow())}
        className="lg:h-32 lg:w-32 w-24 h-24 overflow-hidden rounded-md"
      >
        <img
          src={imgUrl[0]}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </Link>
      <div className="flex lg:flex-row lg:justify-between w-full flex-col">
        <div className="float-left lg:px-0 px-2 lg:ml-5 ml-2">
          <p className="font-normal">{title.slice(0, 30)}... </p>
          <p className="font-semibold lg:py-3 p-1 text-lg">
            {numberWithCommas(price * quantity)} cум
          </p>
        </div>
        <div className="flex lg:items-end h-min items-center justify-between py-0 lg:flex-col lg:px-0 pl-5">
          <div className="flex items-center w-max md:justify-center justify-between h-min rounded-md lg:p-1 p-[2px] border">
            <button
              onClick={() => dispatch(decrementQuantity(id))}
              className="h-8 rounded-[50%] text-red-600"
            >
              {MinusIcon}
            </button>
            <p className="mx-3">{quantity}</p>
            <button
              onClick={() => dispatch(incrementQuantity(id))}
              className="w-8 h-8 rounded-[50%] text-red-600"
            >
              {PlusIcon}
            </button>
          </div>
          <button
            onClick={() => dispatch(romoveFromBasket(id))}
            className="font-medium flex text-zinc-500 lg:mt-5  rounded-lg lg:px-0 float-right py-2"
          >
            {TrashIcon}
          </button>
        </div>
      </div>
    </li>
  );
};

export default BasketListItem;
