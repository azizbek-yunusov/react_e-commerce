import React from 'react'
import Carousel from 'react-multi-carousel'
import OfferItem from './OfferItem'
import { offers, productData } from '../dataBase/productData'
import "react-multi-carousel/lib/styles.css"


const responsive = {
  all: {
    breakpoint: { max: 2560, min: 320 },
    items: 1
  },
}
// var settings = {
//   responsive: responsive,
  
// }
const Offer = () => {
  return (
    <div className="container-full my-5 flex items-center flex-col">
      <h1 className="text-2xl font-semibold text-center text-zinc-800">Телефоны и бытовая техника в рассрочку</h1>
      <Carousel
      showDots={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite
      itemClass=''
      responsive={responsive}>
        {productData.map(item => (
          <OfferItem key={item.id} {...item} />
        ))}
      </Carousel>
      {offers.map(item => (
          <OfferItem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default Offer