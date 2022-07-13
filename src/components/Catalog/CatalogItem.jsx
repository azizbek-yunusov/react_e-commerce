import React from 'react'
import { Link } from 'react-router-dom'

export const CatalogItem = ({ category, title, imgUrl }) => {
  return (
    <Link to={`/category/${category}`} className="cursor-pointer lg:my-5 my-2 flex lg:mx-3 mx-1 items-center lg:justify-evenly  lg:flex-row flex-col lg:py-10 lg:h-16 lg:w-auto lg:min-w-[200px] min-w-0 h-24 lg:bg-gray-100  rounded-lg px-0">
      <img className='bg-gray-100 lg:bg-transparent rounded-md p-5' src={imgUrl} alt={title} />
      <p className="text-zinc-800 lg:text-base text-xs">{title}</p>
    </Link>
  )
}
