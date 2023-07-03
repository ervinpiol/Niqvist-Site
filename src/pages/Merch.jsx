import React from "react";
import { Hero } from "../components/Hero";
import Products from "../components/Products";
import ReleaseTour from "../components/ReleaseTour";

import MerchHeroImg from "../assets/Hero-Images/merch-hero.webp";

const Merch = ({ data, selectedCategory }) => {
  const getCategoryName = () => {
    switch (selectedCategory) {
      case "all":
        return "All products";
      case "vinyls":
        return "Vinyls";
      case "tshirts":
        return "T-shirts";
      default:
        return "";
    }
  };

  const categoryName = getCategoryName();

  return (
    <div>
      <Hero image={MerchHeroImg} h1Text={categoryName} isProduct />
      <Products data={data} isProduct />
      <ReleaseTour />
    </div>
  );
};

export default Merch;
