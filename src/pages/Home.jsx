import React, { useEffect } from "react";
import BannerCarousel from "../components/Banner/BannerCarousel";
import BrandsList from "../components/Brands/BrandsList";
import Catalog from "../components/Catalog/Catalog";
import GroupsList from "../components/Products/GroupsList";
import Offer from "../components/Offers/Offer";
import AnimationLayout from "../components/AnimationLayout";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <AnimationLayout>
        <BannerCarousel />
        <Catalog />
        <GroupsList />
        <BrandsList />
        <Offer />
      </AnimationLayout>
    </>
  );
};

export default Home;
