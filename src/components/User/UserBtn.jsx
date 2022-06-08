import React from 'react'
import { useDispatch } from 'react-redux'
import { handleSignIn } from '../../redux/actions'
import { UserIcon } from '../svg'

const UserBtn = () => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(handleSignIn())} className="cursor-pointer ml-9 flex flex-col items-center mt-2 border-gray-200 rounded-full">
      {UserIcon}
      <p className="mt-1 text-base font-medium">Войти</p>
    </div>
  )
}

export default UserBtn