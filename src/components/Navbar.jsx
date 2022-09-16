import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BasketList from "./BasketList";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "./SearchInput";
import CatalogBtn from "./Catalog/CatalogBtn";
import UserBtn from "./User/UserBtn";
import SideBarCatalog from "./Catalog/SideBarCatalog";
import { handleSideBar } from "../redux/actions";
import SignIn from "./User/SignIn";

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isTop;
}
const Navbar = ({ id, title, imgUrl, price }) => {
  const isTop = useIsScrollTop();
  const { order, isBasketShow, isSideBarShow, isSignInShow } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  return (
    <nav
      className={`w-full md:py-1 py-2 sticky z-50 select-none bg-gray-100 transition duration-300 ease-linear ${
        !isTop
          ? "fixed top-0 transition duration-300 scrollAnimated ease-linear left-0 z-50  lg:py-1 py-2"
          : ""
      } navbar-class  scroll-smooth`}
    >
      <div className="container-full lg:overflow-visible overflow-hidden flex items-center lg:justify-between">
        <div className="lg:flex hidden items-center justify-between">
          <Link
            className="lg:pr-11 pr-2 text-red-600 font-bold lg:text-4xl text-xl lg:block hidden"
            to="/"
          >
            Logo.uz
          </Link>
          <CatalogBtn />
        </div>
        <div
          onClick={() => dispatch(handleSideBar())}
          className="p-[6px] lg:hidden bg-yellow-400 rounded-lg mr-3"
        >
          <svg
            className="h-7 w-7 text-zinc-700"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <rect x="4" y="4" width="6" height="6" rx="1" />{" "}
            <rect x="14" y="4" width="6" height="6" rx="1" />{" "}
            <rect x="4" y="14" width="6" height="6" rx="1" />{" "}
            <rect x="14" y="14" width="6" height="6" rx="1" />
          </svg>
        </div>
        <SearchInput />
        <div className="cart-responsive md:flex items-center hidden mr-1">
          <Cart quantity={order.length} />
          <UserBtn />
        </div>
        {isBasketShow && (
          <BasketList id={id} title={title} imgUrl={imgUrl} price={price} />
        )}
      </div>
      {isSideBarShow && <SideBarCatalog />}
      {isSignInShow && <SignIn />}
    </nav>
  );
};

export default Navbar;
