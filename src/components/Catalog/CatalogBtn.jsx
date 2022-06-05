import React from 'react'

const CatalogBtn = () => {
  return (
    <div className="px-5 hidden  py-[10px] rounded-lg cursor-pointer bg-yellow-500 text-zinc-80000 lg:flex">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mt-[2px] w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
      <p className="ml-1 text-lg font-medium">Каталог</p>

    </div>
  )
}

export default CatalogBtn