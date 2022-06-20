import React, { useEffect, useState } from 'react'
import { CloseIcon } from './svg'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    setShowModal(!showModal)
  
    // return () => {
    //   second
    // }
  }, [])
  
  return (
    <div className="hidden lg:max-w-sm w-full lg:h-[250px] lg:rounded-xl p-2 bg-red-600 fixed bottom-11 right-10">
      <div className="absolute top-0 right-0 m-1 p-1 border border-red-600 transition-opacity duration-200 ease-linear hover:border-gray-100 rounded-full text-gray-100">{CloseIcon}</div>
    </div>
  )
}

export default Modal