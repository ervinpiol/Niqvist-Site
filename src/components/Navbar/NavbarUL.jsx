import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import TriangleIcon from "../../assets/triangle-icon.svg";

const NavbarUL = ({ handleFilterClick, setOpenMenu }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleOpenSubMenu = () => {
    setOpenSubMenu(() => !openSubMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <motion.ul
      className="absolute top-0 left-0 flex flex-col items-end w-full gap-6 px-5 pt-24 pb-6 bg-BGBlack"
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -200 }}
    >
      <li className="relative cursor-pointer" onClick={handleOpenSubMenu}>
        <span className="flex flex-row-reverse gap-3">
          Merch
          <img
            src={TriangleIcon}
            alt="TriangleIcon"
            className={`transition duration-300 ${openSubMenu && "rotate-180"}`}
          />
        </span>
        {openSubMenu && (
          <ul className="flex-col flex gap-4 p-4 w-[135px] top-6 items-end">
            <li onClick={() => handleFilterClick("all")}>
              <NavLink
                to="/all-products"
                className="border-white hover:border-b"
              >
                All products
              </NavLink>
            </li>
            <li onClick={() => handleFilterClick("vinyls")}>
              <NavLink to="/vinyl" className="border-white hover:border-b">
                Vinyls
              </NavLink>
            </li>
            <li onClick={() => handleFilterClick("tshirts")}>
              <NavLink to="/tshirts" className="border-white hover:border-b">
                T-shirts
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li onClick={handleCloseMenu}>
        <NavLink to="/music" className="border-white hover:border-b">
          Music
        </NavLink>
      </li>
      <li onClick={handleCloseMenu}>
        <NavLink to="/news" className="border-white hover:border-b">
          News
        </NavLink>
      </li>
      <li onClick={handleCloseMenu}>
        <NavLink to="/gallery" className="border-white hover:border-b">
          Gallery
        </NavLink>
      </li>
      <li onClick={handleCloseMenu}>
        <NavLink to="/about" className="border-white hover:border-b">
          About
        </NavLink>
      </li>
    </motion.ul>
  );
};

export default NavbarUL;
