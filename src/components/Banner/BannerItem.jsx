import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BannerItem = ({ title, bannerURl }) => {
  return (
    <div className="w-full cursor-pointer">
      <LazyLoadImage
        src={bannerURl}
        alt={title}
        effect="blur"
        className="w-full bg-center object-center h-[200px] lg:h-full"
      />
    </div>
  );
};

export default BannerItem;
