import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import BasketList from './BasketList'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import SearchInput from './SearchInput'
import CatalogBtn from './Catalog/CatalogBtn'
import UserBtn from './UserBtn'

const Navbar = ({id, title, imgUrl, price}) => {
  const { order, isBasketShow } = useSelector(state => state)
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 180 ? setStickyClass('fixed top-0 left-0 z-10 scrollAnimated lg:py-[6px] py-[10px]') : setStickyClass('relative');
    }
  };
  //  
  return (
    <nav className={`w-full py-3 bg-gray-100 ${stickyClass} navbar-class  scroll-smooth`}>
      <div className="container-full lg:overflow-visible overflow-hidden flex items-center justify-between">
        <div className="flex items-center justify-between">
          <Link className='lg:pr-11 pr-2 text-red-600 font-bold lg:text-4xl text-xl' to="/">olma.uz</Link>
          <CatalogBtn />
        </div>
        <SearchInput />
        <div className="cart-responsive md:flex items-center hidden">
          <Cart quantity={order.length} />
          <UserBtn />
        </div>
          {isBasketShow && <BasketList id={id} title={title} imgUrl={imgUrl} price={price} />}
      </div>
    </nav>
  )
}

export default Navbar