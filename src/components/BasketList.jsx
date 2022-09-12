import React, { useEffect } from "react";
import { handeleBasketShow } from "../redux/actions";
import BasketListItem from "./BasketListItem";
import { useSelector, useDispatch } from "react-redux";
import emptyIcon from "../assets/img/empty.png";
import { CloseIcon } from "./svg";
import { numberWithCommas } from "./numberWithCommas";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const BasketList = () => {
  const dispatch = useDispatch();
  const { order, isBasketShow } = useSelector((state) => state);
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  return (
    <div className="slider-animation z-40 fixed top-0 left-0 w-[100vw] lg:h-full h-full bg-[#000000] backdrop-blur-[1px] bg-opacity-40 lg:py-9 ">
      <div
        onClick={() => dispatch(handeleBasketShow())}
        className="absolute inset-0 bgAnime transition-opacity"
      ></div>

      <div className="BasketAnimated w-full flex items-center justify-center z-50 h-full">
        <div className="relative rounded-none lg:min-w-[850px] min-w-full lg:rounded-md flex flex-col h-full justify-start lg:my-16 lg:min-h-full mt-0 z-50 bg-white overflow-hidden">
          <div className="overflow-hidden w-full bg-yellow-400 lg:py-5 py-3 px-4 lg:px-5 flex lg:items-center items-start justify-between">
            <h1 className="text-lg font-semibold text-zinc-800">
              Купить сейчас
            </h1>
            <div
              onClick={() => dispatch(handeleBasketShow())}
              className="close cursor-pointer p-1 border text-zinc-600 border-zinc-600 rounded-full"
            >
              {CloseIcon}
            </div>
          </div>
          <ul className="overflow-y-scroll lg:max-h-[500px] h-full  px-4">
            {order.length ? (
              order.map((item) => {
                return <BasketListItem key={item.id} {...item} />;
              })
            ) : (
              <div className="w-full flex py-6 items-center flex-col justify-center emptyAnimated ">
                <LazyLoadImage
                  src={emptyIcon}
                  alt="not order"
                  className="align-middle"
                  width={300}
                  height={300}
                  effect="blur"
                />
                <h1 className="text-2xl text-center font-semibold max-w-[200px]">
                  В корзине поканичего нет
                </h1>
              </div>
            )}
          </ul>
          {order.length ? (
            <div className="bg-gray-100 relative bottom-0 left-0 w-full flex lg:flex-col justify-between lg:px-5 px-3 lg:pb-5 pb-2">
              <div className="float-right lg:flex lg:justify-between py-3">
                <p className="text-zinc-700 lg:text-lg font-medium ">
                  Итого {order.length} товара
                </p>
                <p className="float-right mt-2 lg:mt-0 lg:text-2xl text-xl font-bold">
                  {numberWithCommas(totalPrice)} cум
                </p>
              </div>
              <div className="flex lg:justify-between lg:items-center items-end">
                <button
                  onClick={() => dispatch(handeleBasketShow())}
                  className="border-2 border-gray-200 lg:px-11 lg:py-3 px-2 py-2 rounded-lg hidden lg:block font-medium text-zinc-800"
                >
                  Продолжить покупки
                </button>
                <button className="bg-yellow-400 lg:px-11 lg:py-3 lg:m-0 mb-4 px-2 py-2 rounded-md font-medium text-zinc-800">
                  Оформить покупку
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={() => dispatch(handeleBasketShow())}
              className="flex items-center justify-center"
            >
              <button className="cursor-pointer px-4 lg:mb-9 my-5 py-2 border-2 rounded-lg border-orange-500">
                Перейти к покупкам
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketList;

// <div className="z-20 fixed inset-0 overflow-hidden basket">
// <div className="absolute inset-0 overflow-hidden">
//   <div onClick={() => dispatch(handeleBasketShow())} className="absolute inset-0 bg-[#0000009a] bg-opacity-75 transition-opacity"></div>

//   <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//     <div className="pointer-events-auto w-screen md:max-w-lg">
//       <div className="flex h-full flex-col bg-white shadow-xl basketShowlist">
//         <div className="flex-1 overflow-y-auto py-5 sm:px-4 px-2">
//           <div className="flex items-start justify-between border-b divide-slate-700 pb-5">
//             <h2 className="text-lg font-medium text-gray-900 ">Купить сейчас</h2>
//             <div className="flex h-7 items-center ml-5">
//               <button onClick={() => dispatch(handeleBasketShow())} className="-m-2 p-2 text-gray-400 hover:text-gray-500">X</button>
//             </div>
//           </div>

//           <div className="sm:mt-8 mt-4">
//             <div className="flow-root">
//               <ul className=" divide-y divide-gray-200">
//                 {order.length ? order.map(item => {
//                   return (
//                     <BasketListItem key={item.id} {...item} />
//                   )
//                 }) : <div className='w-full h-full flex items-center justify-center emptyAnimated'><img src={emptyIcon} alt="not order" className='align-middle' width={300} height={300} /></div>}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
//           <div className="flex justify-between text-base font-medium text-gray-900">
//             <p>Total price</p>
//             <p className="text-2xl">{totalPrice}$</p>
//           </div>
//           <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//           <div className="mt-6">
//             <p className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</p>
//           </div>
//           <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//             <p onClick={() => dispatch(handeleBasketShow())}>
//             or <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span> &rarr;</span></button>
//           </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
