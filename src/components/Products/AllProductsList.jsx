import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { productData } from '../../dataBase/productData'
import BestItem from '../BestItem'
import { ListSkeleton } from "../Loaders/ListSkeleton";
import ProductCard from './ProductCard';

const AllProductsList = () => {
  const location = useLocation()
  const goback = useNavigate()
  const { group } = useParams()
  const groupFilter = productData.filter(item => {
    return item.group === group
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  console.log(`grop by ${group}`);
  return (
    <div className="w-full lg:my-5 my-3">
      <div className="flex justify-between items-center my-2 ">
        <div className="flex lg:px-6 px-3 items-center text-zinc-700">
          <button onClick={() => goback(-1)} className='lg:px-4 lg:pr-5 px-2 text-md  rounded-full mr-4 py-2 flex items-center font-medium border border-gray-300'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <p className="hidden lg:block">Назад</p>
          </button>
          <h1 className="font-semibold capitalize text-xl lg:text-4xl">{group}</h1>
        </div>
        <div className="flex font-medium text-zinc-700 lg:text-xl lg:px-6 px-3"><p className="px-2">Товаров</p>{groupFilter.length} </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 border-t border-gray-300 gap-0">
        {
          groupFilter.length ? groupFilter.map(item => (
            <ProductCard key={item.id} {...item} />
          ))
            : <div className="">not</div>
        }
      </div>
    </div>
  )
}

export default AllProductsList