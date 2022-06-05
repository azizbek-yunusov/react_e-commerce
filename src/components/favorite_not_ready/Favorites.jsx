import React from 'react'
import { handleFavoritesShow } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const Favorites = () => {
  const dispatch = useDispatch()
  const { favorite } = useSelector(state => state)
  const liked = favorite.length
  return (
    <div className="z-30 block cursor-pointer" onClick={() => dispatch(handleFavoritesShow())}>
      <div className="heart">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
      {liked ? <span className="inline-block text-xs p-1 px-2 rounded-xl -m-1 bg-red-600 align-top text-white">{liked}</span> :<span className="inline-block text-xs p-1 px-2 rounded-xl -m-1 bg-red-600 align-top text-white">0</span>}
    </div>
  )
}

export default Favorites