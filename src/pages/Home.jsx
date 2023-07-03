import React from "react";
import Products from "../components/Products";
import ReleaseTour from "../components/ReleaseTour";
import MusicVideo from "../components/Home/MusicVideo";
import { Hero } from "../components/Hero";
import NewAlbum from "../components/Home/NewAlbum";
import OtherReleases from "../components/OtherReleases";
import RecentNews from "../components/RecentNews";
import TourTime from "../components/Home/TourTime";

import HomeHeroImg from "../assets/Hero-Images/homepage-hero.webp";

import { productsData } from "../data/productsData";

const Home = () => {
  const vinylItems = productsData.filter((item) => item.type === "vinyls");

  return (
    <div>
      <Hero image={HomeHeroImg} h1Text="Niqvist" isHome />
      <Products data={vinylItems} />
      <NewAlbum />
      <OtherReleases showLess hasSeparator />
      <RecentNews isRecent />
      <ReleaseTour isText />
      <TourTime />
      <MusicVideo />
    </div>
  );
};

export default Home;
