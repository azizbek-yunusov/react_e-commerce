import React from 'react'

const FavoriteItem = ({imgUrl, title, price, id}) => {
  return (
    <div className="flex flex-col" id={id} >
      <div className="flex flex-col items-center px-8 py-8 border border-gray-600">
        <img
          src={imgUrl}
          alt={title}
          className="align-middle"
        />
        <h1 className=''>
          {title}
        </h1>
        <p className=''>
          {price}
        </p>
        {/* <button onClick={() => dispatch(addToBasket({ id, title, imgUrl, price }))} className='px-3 py-2 bg-yellow-600 text-white text-lg'>add to cart</button> */}
      </div>
    </div>
  )
}

export default FavoriteItem