import React from 'react'

const BannerItem = ({title, bannerURl}) => {
  return (
    <div className="w-full bg-yellow-500 cursor-pointer" >
      <img src={bannerURl} alt={title} className="w-full bg-center object-center h-[200px] lg:h-full" />
    </div>
  )
}

export default BannerItem