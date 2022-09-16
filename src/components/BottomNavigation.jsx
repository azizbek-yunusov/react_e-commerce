import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleSideBar, handleSignIn } from "../redux/actions";
import Cart from "./Cart";
import { HomeIcon, UserIcon } from "./svg";

const BottomNavigation = () => {
  const dispatch = useDispatch();
  return (
    <div className="md:hidden block w-full rounded-t-[30px]  bg-gray-200 fixed left-0 bottom-0 shadow-xl">
      <div className="container-full flex items-center justify-between px-8 py-3">
        <Link
          to={"/"}
          className="p-2 rounded-full text-zinc-800 bottom-1 active:text-yellow-500 transition-all duration-100 ease-linear align-middle border-gray-500"
        >
          {HomeIcon}
        </Link>
        <div
          onClick={() => dispatch(handleSideBar())}
          className="p-2 rounded-full align-middle text-zinc-800 active:text-yellow-500 transition-all duration-100 ease-linear"
        >
          <svg
            className="h-8 w-8 "
            width="24"
            height="24"
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
        <Cart />
        <div
          onClick={() => dispatch(handleSignIn())}
          className="p-2 rounded-full text-zinc-800 active:text-yellow-500 transition-all duration-100 ease-linear"
        >
          {UserIcon}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
