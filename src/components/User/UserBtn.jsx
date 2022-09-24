import React from 'react'
import { useDispatch } from 'react-redux'
import { handleSignIn } from '../../redux/actions'
import { HiOutlineUser } from 'react-icons/hi'

const UserBtn = () => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(handleSignIn())} className="cursor-pointer ml-9 flex flex-col items-center mt-2 border-gray-200 rounded-full">
      <HiOutlineUser className='md:text-2xl text-gray-800' />
      <p className="mt-1 md:text-sm text-base font-medium text-gray-800">Войти</p>
    </div>
  )
}

export default UserBtn