import React from "react";
import { Hero } from "../components/Hero";
import FullLength from "../components/Music/FullLength";
import OtherReleases from "../components/OtherReleases";

import MusicHeroImg from "../assets/Hero-Images/music-hero.webp";

const Music = () => {
  return (
    <div>
      <Hero image={MusicHeroImg} h1Text="Music" />
      <FullLength />
      <OtherReleases short />
    </div>
  );
};

export default Music;
