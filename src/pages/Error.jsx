import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container-full flex flex-col items-center h-[600px]">
      <img src="https://texnomart.uz/files/global/new-photo/img/error/404.svg" alt="error" className='mt-3 lg:mt-11' />
      <Link to="/" >
        <h1 className='mt-6 px-4 py-3 bg-green-500 text-lg text-white rounded-xl hover:bg-green-900 ease-in duration-200'>Вернуться на главную</h1>
      </Link>
    </div>
  )
}

export default Error