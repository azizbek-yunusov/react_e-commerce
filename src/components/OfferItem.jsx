import React from 'react'

const OfferItem = ({id, name, title, imgUrl}) => {
  return (
    <div className="cursor-pointer rounded-lg mt-5 p-5 mx-1 flex flex-col items-center text-center border border-yellow-300 lg:max-w-none max-w-xl w-full">
      <div className="p-4 bg-slate-100 rounded-full">
        <img src={imgUrl} alt={name} />
      </div>
      <h1 className="text-base mt-2 font-medium text-zinc-800">{name}</h1>
      <p className="text-sm mt-1 text-zinc-500">{title}</p>
    </div>
  )
}

export default OfferItem