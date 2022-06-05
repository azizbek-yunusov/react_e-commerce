import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { productData } from '../../dataBase/productData'
import BrandProductItem from './BrandProductItem'

const BrandProductsList = () => {
  const location = useLocation()
  const { brandName } = useParams()
  const brandsFilter = productData.filter((brandel, index) => {
    return brandel.brandName === brandName
  } )
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div className="container-full my-5">
      <div className="flex my-2">
        <p className="font-normal text-3xl">Товары бренда</p>
        <p className="font-semibold ml-[6px] text-3xl">{brandName}</p>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-7 gap-0">
        {brandsFilter.length ? brandsFilter.map(brandel => (
          <BrandProductItem key={brandel.id} {...brandel} />
        )) : <div className="">404</div> }
      </div>
      
    </div>
  )
}

export default BrandProductsList