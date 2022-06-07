import React from 'react'

const OfferItem = ({id, name, title, imgUrl}) => {
  return (
    <div className="selection:inset-0 cursor-pointer lg:mx-5 my-5 rounded-lg mt-5 p-5 mx-1 flex flex-col items-center text-center border border-yellow-300 lg:max-w-none max-w-xl min-h-[200px]">
      <div className="p-4 bg-slate-100 rounded-full">
        <img src={imgUrl} alt={name} />
      </div>
      <h1 className="text-base mt-2 font-medium text-zinc-800">{name}</h1>
      <p className="text-sm mt-1 text-zinc-500">{title}</p>
    </div>
  )
}

export default OfferItem