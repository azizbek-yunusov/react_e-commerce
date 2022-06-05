import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { productData } from '../../dataBase/productData'
import NotFound from '../NotFound'
import CategoryItem from './CategoryItem'

const CategoryList = () => {
  const location = useLocation()
  const { category } = useParams()
  const categoryFilter = productData.filter((ctg, index) => {
    return ctg.category === category
  })

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])
  return (
    <div className="container-full lg:my-5 my-3">
      {categoryFilter.length ? <h1 className="mb-3 font-semibold text-xl lg:text-4xl">{category}</h1> : null }
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