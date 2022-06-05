import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon } from './svg'

const MobileSearchList = ({toggleMobileSearchBar, handleAutoComplete, clearFilter, term, filteredData }) => {
  const autoFocus = useRef(null)

  useEffect(() => {
    autoFocus.current.focus()
  })

  const CloseBar = () => {
    toggleMobileSearchBar();
    clearFilter()
  }

  // useEffect(() => {
  //   document.body.style.overflow = "hidden"
  //   return () => {
  //     document.body.style.overflow = "auto"
  //   }
  // })
  return (
    <div className="bg-white animatedMobile lg:hidden fixed inset-0 z-50 min-w-full min-h-screen">
      <div className="w-full">
        <div className="flex px-3 justify-between w-full items-center py-4 bg-gray-100">
          <form className="flex items-center border-2 border-yellow-400 justify-between rounded-lg w-full mr-2 bg-white" >
            <input type="text"
              ref={autoFocus}
            // onClick={showSearchPage()}
              className='lg:w-[550px] px-4 rounded-2xl bg-none'
              placeholder='Поиск товаров'
              value={term}
              onChange={handleAutoComplete}
              />
              <button
            // onClick={handleSubmit}
                type='submit'
                className='py-[4px] px-2 mt-0 rounded-r-md bg-yellow-400'
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          <button onClick={CloseBar} className="p-2 bottom-0 rounded-full border active:border active:border-gray-200 transition text-zinc-600">
            {CloseIcon}
          </button>
        </div>
        {filteredData.length !== 0 && (
        <div className="block w-full mt-[2px] rounded-xl shadow-md text-left overflow-hidden z-20 max-h-full scrollMobile overflow-y-scroll absolute left-0">
          {filteredData.slice(0, 20).map((value, key) => {
            return (
              <Link to={`/product/detail/${value.id}`} onClick={CloseBar} className='cursor-pointer py-4 w-full px-5 active:bg-yellow-50 flex text-left' key={key}>
                <img src={value.imgUrl[0]} alt={value.title} width="40" height="40" />
                <p className="ml-5">{value.title}</p>
              </Link>
            )
          }) }
        </div>
      )}
      </div>
    </div>
  )
}

export default MobileSearchList