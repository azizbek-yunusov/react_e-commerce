import React from 'react'
import { Link } from 'react-router-dom'
import shopImg from "../assets/img/shopping.png"

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center overflow-hidden emptyAnimated items-center py-5">
      <img src={shopImg} className="lg:w-96 " alt="not-found" />
      <p className="text-zinc-800 lg:mb-7 mb-4 lg:text-2xl text-xl font-semibold ">продукт не найден</p>
      <Link className='px-4 py-3 text-white bg-green-600 rounded-lg lg:hover:bg-yellow-600 transition active:scale-105 duration-300 ease-in-out' to={"/"} >Вернуться на главную</Link>
    </div>
  )
}

export default NotFound