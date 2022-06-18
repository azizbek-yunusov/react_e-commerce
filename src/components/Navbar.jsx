import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import BasketList from './BasketList'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import SearchInput from './SearchInput'
import CatalogBtn from './Catalog/CatalogBtn'
import UserBtn from './User/UserBtn'
import SideBarCatalog from './Catalog/SideBarCatalog'
import { handleSideBar } from '../redux/actions'
import SignIn from './User/SignIn'

const Navbar = ({id, title, imgUrl, price}) => {
  const { order, isBasketShow, isSideBarShow, isSignInShow } = useSelector(state => state)
  const [stickyClass, setStickyClass] = useState('relative');
  const dispatch = useDispatch()
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 180 ? setStickyClass('fixed top-0 left-0 z-10 scrollAnimated lg:py-[6px] py-2') : setStickyClass('relative');
    }
  };
  //  
  return (
    <nav className={`w-full py-2 bg-gray-100 ${stickyClass} navbar-class  scroll-smooth`}>
      <div className="container-full lg:overflow-visible overflow-hidden flex items-center lg:justify-between">
        <div className="lg:flex hidden items-center justify-between">
          <Link className='lg:pr-11 pr-2 text-red-600 font-bold lg:text-4xl text-xl lg:block hidden' to="/">Logo.uz</Link>
          <CatalogBtn />
        </div>
        <div onClick={() => dispatch(handleSideBar())} className="p-[6px] lg:hidden bg-yellow-400 rounded-lg mr-3">
          <svg className="h-7 w-7 text-zinc-700" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="14" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" /></svg>
        </div>
        <SearchInput />
        <div className="cart-responsive md:flex items-center hidden mr-1">
          <Cart quantity={order.length} />
          <UserBtn />
        </div>
          {isBasketShow && <BasketList id={id} title={title} imgUrl={imgUrl} price={price} />}
      </div>
      {isSideBarShow && <SideBarCatalog />}
      {isSignInShow && <SignIn />}
    </nav>
  )
}

export default Navbar