import React from 'react'
import { brandData } from '../../dataBase/productData'
import BrandItem from './BrandItem'

const BrandsList = () => {
  return (
    <div className="container-full mb-5 PageAnimated">
      <h1 className="lg:text-4xl text-2xl lg:font-normal text-left font-medium">Бренды</h1>
      <div className="lg:grid lg:grid-cols-6 lg:my-8 my-4 lg:gap-5 flex justify-between overflow-x-scroll">
        {brandData.slice(0, 12).map(brand => (
          <BrandItem key={brand.id} {...brand} />
        ))}
      </div>
    </div>
  )
}

export default BrandsList