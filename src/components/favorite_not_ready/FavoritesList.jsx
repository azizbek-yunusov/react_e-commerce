import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteItem from './FavoriteItem'

const FavoritesList = () => {
  const dispatch = useDispatch()
  const { favorite } = useSelector(state => state)
  return (
    <div className="z-20 fixed inset-0 overflow-hidden basket">
    <div className="absolute inset-0 overflow-hidden">
      <div  className="absolute inset-0 bg-[#e44545af] bg-opacity-75 transition-opacity"></div>

      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="pointer-events-auto w-screen md:max-w-lg">
          <div className="flex h-full flex-col bg-white shadow-xl basketShowlist">
            <div className="flex-1 overflow-y-auto py-5 sm:px-4 px-2">
              <div className="flex items-start justify-between border-b divide-slate-700 pb-5">
                <h2 className="text-lg font-medium text-gray-900 ">Shopping cart</h2>
                <div className="flex h-7 items-center ml-5">
                  {/* <button onClick={handleBasketShow} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                  <i className="fa-solid fa-xmark text-2xl"></i>
                  </button> */}
                </div>
              </div>

              <div className="sm:mt-8 mt-4">
                <div className="flow-root">
                  <ul className=" divide-y divide-gray-200">
                  {favorite.length ? favorite.map((item) => {
                      return (
                        <FavoriteItem key={item.id} {...item} />
                      ) 
                    }) : <h1>not order</h1> }
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total price</p>
                {/* <p className="text-2xl">{totalPrice}$</p> */}
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <p className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</p>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                {/* <p onClick={handleBasketShow}>
                  or <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span> &rarr;</span></button>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FavoritesList