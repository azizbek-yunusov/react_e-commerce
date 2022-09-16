import React, { useEffect } from "react";
import { CloseIcon } from "./svg";
import { useSelector, useDispatch } from "react-redux";
import { closeToastify, handeleBasketShow } from "../redux/actions";

const WarningToastify = () => {
  const { isShowToastify } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      clearInterval(2000, closeToastify());
    };
  }, []);

  return (
    <>
      {isShowToastify ? (
        <div className="max-w-[300px] toastifyAnimated w-full h-20 bg-gray-800 flex items-center justify-center rounded-md fixed right-4 bottom-28 z-10">
          <button
            onClick={() => dispatch(handeleBasketShow())}
            className="p-3 bg-green-500 text-white rounded-lg"
          >
            товар добавлен в корзину
          </button>
          <button
            onClick={() => dispatch(closeToastify())}
            className="absolute top-0 right-0 m-1 text-white"
          >
            {" "}
            {CloseIcon}{" "}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default WarningToastify;
