import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { HeartRegIcon, HeartSolIcon } from '../svg'
import { numberWithCommas } from '../numberWithCommas'
import { addToBasket } from '../../redux/actions'
const ProductCard = ({id, title, price, imgUrl, groupName, classes, group}) => {
  const loc = useLocation()
  console.log(loc);
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
    <div className="mx-3 selection:inset-0 lg:border-0 rounded-2xl border border-gray-100 mt-4 hover:rounded-xl lg:hover:shadow-xl ease-linear opacityAnimeted">
      <div className="relative flex flex-col pt-1 px-3 pb-3">
        <div className="absolute top-0 right-0 p-2 cursor-pointer">
            {!showHeart ? <div onMouseEnter={toggleHovered} onMouseLeave={toggleHovered} onClick={handleHeart} className={animtedHeart ? "animtedHeart text-red-600" : " text-red-600"}>{HeartRegIcon} </div> : <div onClick={handleHeart} className="">{HeartSolIcon} </div> }
        </div>
        <div className="absolute top-0 ml-3 mt-2 left-0 text-yellow-500 rounded-md px-3 py-[2px] pb-[4px] bg-zinc-800 font-semibold text-xs">{group}</div>
        {/* <div className="absolute top-12 right-0 p-2 cursor-pointer">
            {!copyUrl ? <div onClick={copy} className="">{BackIcon} </div> : <div className="">"copy"</div> }
        </div> */}
        <Link to={`/product/detail/${id}`} >
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
          className='mt-2 flex max-w-max px-3 py-[8px] bg-yellow-400 rounded-lg text-zinc-700 text-base font-medium active:scale-105 duration-100 active:shadow-md ease-linear transition-all'
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
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-1 font-black" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg> */}
            в корзину
        </button>

      </div>
    </div>
  )
}

export default ProductCard