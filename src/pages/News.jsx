import React from "react";
import { Hero } from "../components/Hero";
import RecentNews from "../components/RecentNews";
import ReleaseTour from "../components/ReleaseTour";

import NewHeroImg from "../assets/Hero-Images/news-hero.webp";

const News = () => {
  return (
    <div>
      <Hero image={NewHeroImg} h1Text="News" />
      <RecentNews />
      <ReleaseTour />
    </div>
  );
};

export default News;
