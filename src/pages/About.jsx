import React from "react";

import { Hero } from "../components/Hero";

import NewHeroImg from "../assets/Hero-Images/news-hero.webp";
import OurStory from "../components/About/OurStory";
import BandMembers from "../components/About/BandMembers";
import ReleaseTour from "../components/ReleaseTour";

const About = () => {
  return (
    <div>
      <Hero image={NewHeroImg} h1Text="About" />
      <OurStory />
      <BandMembers />
      <ReleaseTour />
    </div>
  );
};

export default About;
