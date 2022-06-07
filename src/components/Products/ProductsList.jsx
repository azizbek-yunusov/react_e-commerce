import React from 'react'
import ProductCard from './ProductCard'
import { productData } from "../../dataBase/productData"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import { customLeftArrowPro, customRightArrowPro } from '../svg'
import { Link} from 'react-router-dom'

const responsive = {
  superLargerDesktop : {
    breakpoint: {max: 2560, min: 1024},
    items: 5
  },
  desktop: {
    breakpoint: {max: 1024, min: 768},
    items: 4
  },
  tablet: {
    breakpoint: {max: 768, min: 640},
    items: 3
  },
  mobile: {
    breakpoint: {max: 640, min: 320},
    items: 1.5,
  }
}
const ProductsList = ({id, groupName, group}) => {
  console.log(group);
  // const { popular } = useParams()
  const groupFilter = productData.filter((item, index) => {
    return item.group === group
  })
  var settings = {
    responsive: responsive,
    removeArrowOnDeviceType: ['mobile'],
    autoPlay: false,
    
}

  return (
    <div className="container-full lg:my-5">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-2xl text-zinc-700 font-medium">{groupName}</h1>
        <Link className='text-blue-500 normal-case flex font-semibold bestAnime' to={`/product/${group}`}>
        Смотреть все {" "}
          <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <Carousel 
        {...settings} 
        shouldResetAutoplay={false} 
        customLeftArrow={customLeftArrowPro}
        customRightArrow={customRightArrowPro}
        itemClass="" >
        {groupFilter.map(item => (
        <ProductCard groupName={groupName} key={item.id} {...item} />
      ))}
      </Carousel>
    </div>
  )
}

export default ProductsList