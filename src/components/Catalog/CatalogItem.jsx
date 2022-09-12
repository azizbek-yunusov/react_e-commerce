import React from "react";
import { Link } from "react-router-dom";

export const CatalogItem = ({ category, title, imgUrl }) => {
  return (
    <Link
      to={`/category/${category}`}
      className="select-none cursor-pointer lg:my-4 my-1 flex lg:mx-3 mx-1 items-center lg:justify-evenly  lg:flex-row flex-col lg:py-10 lg:h-16 lg:w-auto lg:min-w-[200px] min-w-0 h-16 lg:bg-gray-100  rounded-lg px-0"
    >
      <div className="">{imgUrl}</div>
      <p className="text-zinc-800 lg:text-base text-xs">{title}</p>
    </Link>
  );
};
