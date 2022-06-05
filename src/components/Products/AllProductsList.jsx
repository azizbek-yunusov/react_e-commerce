import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { productData } from '../../dataBase/productData'
import BestItem from '../BestItem'
import { ListSkeleton } from "../Loaders/ListSkeleton";
import ProductCard from './ProductCard';

const AllProductsList = () => {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const { group } = useParams()
  const groupFilter = productData.filter(item => {
    return item.group === group
  })

  useEffect(() => {
  
    return () => {
      setTimeout(() => {
        setLoading(false)
      }, 1500);
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  console.log(`grop by ${group}`);
  return (
    <div className="container-full grid lg:grid-cols-5 grid-cols-2 gap-0">
      {
        groupFilter.length ? groupFilter.map(item => (
          <ProductCard key={item.id} {...item} />
        ))
        : <div className="">not</div>
      }
    </div>
  )
}

export default AllProductsList