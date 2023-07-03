import React from "react";
import { Hero } from "../components/Hero";

import GalleryHeroImg from "../assets/Hero-Images/gallery-hero.webp";
import Photoshoot from "../components/Gallery/Photoshoot";

const Gallery = () => {
  return (
    <div>
      <Hero image={GalleryHeroImg} h1Text="Gallery" />
      <Photoshoot />
    </div>
  );
};

export default Gallery;
