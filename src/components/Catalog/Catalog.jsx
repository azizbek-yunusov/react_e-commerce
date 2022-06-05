import React from 'react'
import Carousel from 'react-multi-carousel'
import { categoryData } from '../../dataBase/productData'
import { CatalogItem } from './CatalogItem'
import "react-multi-carousel/lib/styles.css"
import { customLeftArrowPro, customRightArrowPro } from '../svg'

const responsive = {
  superLargerDesktop : {
    breakpoint: {max: 2560, min: 1024},
    items: 5
  },
  desktop: {
    breakpoint: {max: 1024, min: 768},
    items: 5
  },
  tablet: {
    breakpoint: {max: 768, min: 640},
    items: 3
  },
  mobile: {
    breakpoint: {max: 640, min: 320},
    items: 3.5,
  }
}
var settings = {
  responsive: responsive,
  removeArrowOnDeviceType: ['mobile'],
  
}
    
const Catalog = () => {
  return (
    <div className="container-full lg:my-6 my-4">
      <Carousel 
        {...settings}
        shouldResetAutoplay={false} 
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite
        customLeftArrow={customLeftArrowPro}
        customRightArrow={customRightArrowPro} >
        {categoryData.map(item => (
          <CatalogItem key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  )
}

export default Catalog