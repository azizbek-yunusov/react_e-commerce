import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopLink from './components/TopLink';
import Home from './pages/Home';
import Error from './pages/Error';
import "./assets/styles/apply.css"
import "./assets/styles/carouselTerm.scss"
import BottomNavigation from './components/BottomNavigation';
import ProductDetail from './components/Products/ProductDetail';
import SearchReslut from './components/SearchReslut';
import CategoryList from './components/Catalog/CategoryList';
import BrandProductsList from './components/Brands/BrandProductsList';
import AllProductsList from './components/Products/AllProductsList';

function App() {
  return (
    <>
      <TopLink />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search?q=searchTerm" element={<SearchReslut />} />
          <Route path="*" title="error" element={<Error />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/category/:category" element={<CategoryList />} />
          <Route path="/product/:group" element={<AllProductsList />} />
          <Route path="/manufacturer/:brandName" element={<BrandProductsList />} />
        </Routes>
      </main>
      <BottomNavigation />
      <Footer />
    </>
  );
}

export default App;
