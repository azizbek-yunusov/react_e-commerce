import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { addToBasket, handeleBasketShow } from '../../redux/actions'
import { BackIcon, HeartRegIcon, HeartSolIcon } from '../svg'
import { createBrowserHistory } from 'history'
import { numberWithCommas } from '../numberWithCommas'
const CategoryItem = ({id, title, price, imgUrl}) => {
  const loc = useLocation()
  const [showHeart, setShowHeart] = useState(false)
  const [animtedHeart, setAnimtedHeart] = useState(false)
  const handleHeart = () => {
    setShowHeart(!showHeart)
  }
  const dispatch = useDispatch()
  const { isGoBasketShow } = useSelector(state => state)
  const toggleHovered = () => {
    setAnimtedHeart(!animtedHeart)
  }
  return (
    <div className="lg:mx-3 mx-[2px] selection:inset-0 lg:my-4 my-1 hover:rounded-xl lg:hover:shadow-2xl active:shadow-lg  border border-gray-2  00 rounded-xl hover:border-white ease-linear duration-200">
      <div className="relative h-full flex flex-col justify-between pt-1 px-3 pb-3">
        <div className="absolute top-0 right-0 p-2 cursor-pointer">
            {!showHeart ? <div onMouseEnter={toggleHovered} onMouseLeave={toggleHovered} onClick={handleHeart} className={animtedHeart ? "animtedHeart text-red-600" : " text-red-600"}>{HeartRegIcon} </div> : <div onClick={handleHeart} className="">{HeartSolIcon} </div> }
        </div>
        <Link className='w-full flex items-center justify-center' to={`/product/detail/${id}`} >
          <img
            src={imgUrl[0]}
            alt={title}
            className="align-middle mt-0"
          />
        </Link>
        
        <h1 className='float-left mt-2 font-sans text-md'>
          {title}
        </h1>
        <p className='float-left mt-2 font-semibold text-lg'>
          {numberWithCommas(price)}{""}cум
        </p>
        <button 
          onClick={() => dispatch(addToBasket({ id, title, imgUrl, price }))} 
          className='mt-2 flex max-w-max px-3 py-[8px] bg-yellow-400 rounded-lg text-zinc-700 text-base font-medium'
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1 mt-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}>
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
            в корзину
        </button> 
        

      </div>
    </div>
  )
}

export default CategoryItem