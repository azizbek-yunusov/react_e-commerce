import React from 'react'
import { handeleBasketShow } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { CartIcon } from './svg';
import { Button, ButtonBase } from '@mui/material';

const Cart = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(state => state)
  const quantity = order.length
  return (
    <div className="cursor-pointer text-zinc-700" onClick={() => dispatch(handeleBasketShow())}>
      <div className="z-10 block relative">
        <div className="p-3">{CartIcon}</div>
        {quantity ? <span className="absolute top-0 right-0 mr-1 mt-1 bg-red-500 lg:px-[9px] lg:py-1 px-[6px] py-[2px] rounded-full text-white font-medium text-xs">{quantity}</span> : <span className="absolute top-0 mr-1 mt-1 right-0 bg-red-500 px-2 py-1 rounded-full text-white text-xs">0</span>}
        <p className='-mt-2 lg:block hidden text-base font-medium'>Корзина</p>
      </div>
    </div>
  )
}

export default Cart