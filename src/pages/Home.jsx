import React, { useEffect, useState } from 'react'
import BannerCarousel from '../components/Banner/BannerCarousel'
import BrandsList from '../components/Brands/BrandsList'
import Catalog from '../components/Catalog/Catalog'
import GroupsList from '../components/Products/GroupsList'
import HomeLoaderSkeleton from '../components/Loaders/HomeLoaderSkeleton'
import Offer from '../components/Offer'

const Home = () => {
  return (
    <> 
      <BannerCarousel />
      <Catalog />
      <GroupsList />
      <BrandsList />
      <Offer />
    </>

  )
}

export default Home