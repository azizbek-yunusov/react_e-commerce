import React from 'react'
import { UserIcon } from './svg'

const UserBtn = () => {
  return (
    <div className="ml-9 flex flex-col items-center mt-2 border-gray-200 rounded-full">
      {UserIcon}
      <p className="mt-1 text-base font-medium">Войти</p>
    </div>
  )
}

export default UserBtn