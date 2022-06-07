import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { productData } from '../../dataBase/productData'
import NotFound from '../NotFound'
import CategoryItem from './CategoryItem'

const CategoryList = () => {
  const location = useLocation()
  const goback = useNavigate()
  const { category } = useParams()
  const categoryFilter = productData.filter((ctg, index) => {
    return ctg.category === category
  })

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])
  return (
    <div className="container-full lg:my-5 my-3 PageAnimated overflow-hidden">
      {categoryFilter.length ? 
      <div className="flex items-center lg:my-2 my-2 ">
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
      <h1 className="font-semibold text-xl capitalize lg:text-4xl">{category}</h1>
      </div>  : null }
      {/* <h1 className="">{category}</h1> */}
      <div className=" flex items-center justify-center">
        {categoryFilter.length ? <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-7 gap-0">
          {categoryFilter.map(ctg => (
          <CategoryItem key={ctg.id} {...ctg} />
        ))}
        </div>  : <NotFound /> }
      </div>
    </div>
  )
}

export default CategoryList