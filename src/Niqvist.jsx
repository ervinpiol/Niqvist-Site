import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { productsData } from "./data/productsData";

import Navbar from "./layouts/Navbar";
import Newsletter from "./layouts/Newsletter";
import Footer from "./layouts/Footer";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import ShoppingBag from "./components/Modal/ShoppingBag";

const Niqvist = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(productsData);
  const [openCart, setOpenCart] = useState(false);
  const [addedItems, setAddedItems] = useState([]);
  const [navbarCount, setNavbarCount] = useState(0);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems(productsData);
    } else {
      const filteredData = productsData.filter(
        (item) => item.type === selectedCategory
      );
      setFilteredItems(filteredData);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (openCart) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openCart]);

  return (
    <div className="relative bg-BGColor">
      <AnimatePresence>
        {openCart && (
          <ShoppingBag
            setOpenCart={setOpenCart}
            addedItems={addedItems}
            setNavbarCount={setNavbarCount}
            setAddedItems={setAddedItems}
          />
        )}
      </AnimatePresence>
      <Navbar
        setSelectedCategory={setSelectedCategory}
        setOpenCart={setOpenCart}
        navbarCount={navbarCount}
      />
      <AnimatedRoutes
        data={filteredItems}
        addedItems={addedItems}
        setAddedItems={setAddedItems}
        setNavbarCount={setNavbarCount}
        selectedCategory={selectedCategory}
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Niqvist;
