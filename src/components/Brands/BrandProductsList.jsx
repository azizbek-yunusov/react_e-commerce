import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { productData } from '../../dataBase/productData'
import NotFound from '../NotFound'
import ProductCard from '../Products/ProductCard'

const BrandProductsList = () => {
  const location = useLocation()
  const goback = useNavigate()
  const { brandName } = useParams()
  const brandsFilter = productData.filter((brandel, index) => {
    return brandel.brandName === brandName
  } )
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div className=" lg:my-5 my-3">
      <div className="container-full flex lg:my-2 my-1 items-center">
      <button onClick={() => goback(-1)} className='lg:px-4 px-2 text-md  rounded-full mr-4 py-2 flex items-center font-medium border border-gray-300'>
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
        <p className="font-normal lg:text-3xl text-lg">Товары бренда</p>
        <p className="font-semibold ml-[6px] lg:text-3xl text-lg">{brandName}</p>
      </div>
      <div className=" flex items-center justify-center overflow-hidden">
        {brandsFilter.length ? <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-7 gap-0">
          {brandsFilter.map(ctg => (
          <ProductCard key={ctg.id} {...ctg} />
        ))}
        </div>  : <NotFound /> }
      </div>
    </div>
  )
}

export default BrandProductsList