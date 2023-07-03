import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Music from "../pages/Music";
import News from "../pages/News";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Merch from "../pages/Merch";
import ChosenProduct from "../pages/ChosenProduct";
import ChosenAlbum from "../pages/ChosenAlbum";
import ChosenNews from "../pages/ChosenNews";

const AnimatedRoutes = ({
  data,
  addedItems,
  setAddedItems,
  setNavbarCount,
  selectedCategory,
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/news" element={<News />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/:category"
        element={<Merch data={data} selectedCategory={selectedCategory} />}
      />
      <Route
        path={`/product/:productName`}
        element={
          <ChosenProduct
            product={data}
            addedItems={addedItems}
            setAddedItems={setAddedItems}
            setNavbarCount={setNavbarCount}
          />
        }
      />
      <Route path="/chosen-album/:albumName" element={<ChosenAlbum />} />
      <Route path="/chosen-news/:newsName" element={<ChosenNews />} />
    </Routes>
  );
};

export default AnimatedRoutes;
