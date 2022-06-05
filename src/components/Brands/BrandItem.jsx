import React from 'react'
import { Link } from 'react-router-dom'

const BrandItem = ({id, brandName, brandImgUrl}) => {
  return (
    <Link to={`/manufacturer/${brandName}`} className="m-1 border cursor-pointer border-gray-200 hover:shadow-md hover:border-white ease-in duration-200 lg:rounded-lg rounded-3xl items-center flex flex-col justify-between lg:p-3 px-9 py-4">
      <img src={brandImgUrl} width="50" height="50" className='' alt={brandName} />
      <p className="normal-case lg:font-normal font-medium  lg:mt-1">{brandName}</p>
    </Link>
  )
}

export default BrandItem