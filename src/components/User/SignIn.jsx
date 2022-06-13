import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSignIn, handleSignUp } from '../../redux/actions'
import { CloseIcon } from '../svg'
import SignUp from './SignUp'

const SignIn = () => {
  const dispatch = useDispatch()
  const { isSignUpShow } = useSelector(state => state)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  })
  return (
    <div className="w-full flex justify-center items-center min-h-screen fixed inset-0 z-[1001] lg:bg-transparent bg-white">
      <div onClick={() => dispatch(handleSignIn())} className="bg-[#0000008f] w-screen min-h-screen fixed inset-0 backdrop-blur-[1px]"></div>

      <div className="BasketAnimated fixed lg:w-[500px] py-8 w-full lg:h-auto h-full lg:rounded-xl flex justify-center flex-col items-center bg-white">
        <h1 className='text-2xl capitalize mb-8 text-zinc-800 font-semibold'>войти</h1>
        <form className='lg:p-2 w-full px-5'>
          <div className="mb-6 lg:px-8 ">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">ваш адрес электронной почты</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:p-2.5 p-3" placeholder="email" required="" />
          </div>
          <div className="mb-6 lg:px-8">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Ваш пароль</label>
            <input type="password" placeholder='пароль' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:p-2.5 p-3" required="" />
          </div>
          <div className="flex items-start mb-6 lg:px-8">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required="" />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Запомните меня</label>
          </div>
          <div className="lg:flex lg:justify-between block lg:px-8">

            <button type="submit" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg lg:text-sm text-lg w-full sm:w-auto px-8 py-2.5 text-center">Submit</button>
            <div onClick={() => dispatch(handleSignUp())} className='cursor-pointer lg:text-lg lg:mt-0 mt-4 text-blue-600 font-medium'>зарегистрироваться</div>
          </div>

          <div onClick={() => dispatch(handleSignIn())} className="cursor-pointer absolute top-2 m-1 rounded-full right-2 p-1 border border-gray-200">
            {CloseIcon}
          </div>
        </form>
      </div>
      {isSignUpShow && <SignUp />}
    </div>
  )
}

export default SignIn