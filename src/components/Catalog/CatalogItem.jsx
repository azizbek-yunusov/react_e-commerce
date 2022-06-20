import React from 'react'
import { Link } from 'react-router-dom'

export const CatalogItem = ({ id, category, title, imgUrl }) => {
  return (
    <Link to={`/category/${category}`} className="cursor-pointer lg:my-5 my-5 flex lg:mx-3 mx-3 items-center lg:justify-evenly  lg:flex-row flex-col lg:py-10 p-0 lg:h-16 lg:w-auto lg:min-w-[200px] min-w-0 bg-red-500 h-28 lg:bg-gray-100  rounded-lg px-0">
      <img className='bg-gray-100 lg:bg-transparent rounded-md p-5' src={imgUrl} alt={title} />
      <p className="text-zinc-800 lg:text-base text-xs">{title}</p>
    </Link>
  )
}
