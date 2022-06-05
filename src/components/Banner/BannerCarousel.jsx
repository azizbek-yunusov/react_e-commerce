import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import { bannerData } from '../../dataBase/productData'
import BannerItem from './BannerItem'
import { customLeftArrow, customRightArrow } from '../svg'
// import img from "../assets/img/1.jpg"
const responsive = {
  all: {
    breakpoint: { max: 2560, min: 320 },
    items: 1
  },
}
const BannerCarousel = () => {


  return (
    <div className="-z-10">
      <Carousel
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass=''

      >
        {bannerData.map(elem => (
          <BannerItem key={elem.id} {...elem} />
        ))}
      </Carousel>
    </div>
  )
}

export default BannerCarousel