import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { brandData, categoryData } from '../../dataBase/productData'
import { handleSideBar } from '../../redux/actions'
import { CloseIcon } from '../svg'

const SideBarCatalog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
      }
  })
  return (
    <div className="fixed top-0 z-50 min-h-screen lg:min-w-full left-0">
      <div onClick={() => dispatch(handleSideBar())} className="opasityAnimated min-h-screen bg-black w-screen backdrop-blur-[1px]"></div>
      <div className="fixed sideAnimated top-0 min-h-screen left-0 bg-gray-100 lg:w-[50%] w-[80%]">
        <div className="w-full lg:px-5 px-3 bg-zinc-800 lg:py-3 py-2 flex justify-between items-center">
          <Link className='text-red-600 font-bold lg:text-4xl text-lg' to="/">Logo.uz</Link>
          <button onClick={() => dispatch(handleSideBar())} className='p-1 rounded-full border-gray-100 border text-white'>
          {CloseIcon}
          </button>
        </div>
        <div className="overflow-y-scroll h-auto lg:px-4">

          {categoryData.map(item => (
            <div className="my-2">
              <Link onClick={() => dispatch(handleSideBar())} to={`/category/${item.category}`} className="ml-4 text-xl font-medium text-zinc-800 lg:py-3" key={item.id}>{item.title}</Link>
            </div>
          ))}
          <p className="border-t text-red-500 text-2xl border-t-gray-300">Brands</p>
          {brandData.map(item => (
            <div className="my-1 py-1 lg:hover:bg-yellow-300 transition-colors ease-in-out duration-300">
              <Link onClick={() => dispatch(handleSideBar())} to={`/manufacturer/${item.brandName}`} className="ml-4 text-xl font-medium text-zinc-800">{item.brandName}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBarCatalog