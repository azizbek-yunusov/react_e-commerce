import React from 'react'
import Carousel from 'react-multi-carousel'
import OfferItem from './OfferItem'
import "react-multi-carousel/lib/styles.css"
import { offers} from '../../dataBase/productData'
import { customLeftArrowPro, customRightArrowPro } from '../svg'


const responsive = {
  superLargerDesktop : {
    breakpoint: {max: 2560, min: 1024},
    items: 3
  },
  desktop: {
    breakpoint: {max: 1024, min: 768},
    items: 3
  },
  tablet: {
    breakpoint: {max: 768, min: 640},
    items: 2
  },
  mobile: {
    breakpoint: {max: 640, min: 320},
    items: 1,
  }
}
var settings = {
  responsive: responsive,
  removeArrowOnDeviceType: ['mobile'],
  autoPlay: false,
  
}

const Offer = () => {
  return (
    <div className="container-full lg:my-8 my-5 offers PageAnimated">
      <h1 className="lg:text-2xl text-xl font-semibold text-center text-zinc-800">Телефоны и бытовая техника в рассрочку</h1>
        <Carousel 
        {...settings}
        shouldResetAutoplay={false} 
        customLeftArrow={customLeftArrowPro}
        customRightArrow={customRightArrowPro}
        itemClass="lg:my-2 my-0"
        showDots={true}
        infinite={true} >
        {offers.map(item => (
          <OfferItem key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  )
}

export default Offer