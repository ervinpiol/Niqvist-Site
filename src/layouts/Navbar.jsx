import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import NavbarUL from "../components/Navbar/NavbarUL";
import Logo from "../assets/Logo.svg";
import TriangleIcon from "../assets/triangle-icon.svg";

const Navbar = ({ setSelectedCategory, setOpenCart, navbarCount }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleFilterClick = (type) => {
    setSelectedCategory(type);
    setOpenMenu(false);
  };

  return (
    <div className="absolute z-50 w-full">
      <div className="font-Roboto w-full xl:w-[1224px] mx-auto relative flex items-center justify-between lg:justify-center py-6 px-4 sm:px-8 text-white">
        <div className="flex items-center gap-4 lg:gap-6 lg:flex-col">
          <button
            id="menu-icon"
            className={`relative w-10 h-10 flex lg:hidden justify-center flex-col gap-1.5 items-center z-20 ${
              openMenu && "active_menu"
            }`}
            onClick={menuClick}
          >
            <span className="w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
            <span className="w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
            <span className="w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
          </button>
          <Link to="/" className="z-20">
            <img src={Logo} alt="Logo" className="w-24" />
          </Link>
          <AnimatePresence>
            {openMenu && (
              <NavbarUL
                handleFilterClick={handleFilterClick}
                setOpenMenu={setOpenMenu}
              />
            )}
          </AnimatePresence>
          <ul className="hidden gap-8 lg:flex">
            <li className="relative flex gap-3 cursor-pointer group">
              Merch
              <ul className="absolute flex-col hidden gap-3 px-6 py-4 text-white w-[135px] top-6 bg-BGBlack rounded-lg group-hover:flex">
                <li>
                  <NavLink
                    to="/all-products"
                    className="border-white hover:border-b"
                    onClick={() => handleFilterClick("all")}
                  >
                    All products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/vinyls"
                    className="border-white hover:border-b"
                    onClick={() => handleFilterClick("vinyls")}
                  >
                    Vinyls
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tshirts"
                    className="border-white hover:border-b"
                    onClick={() => handleFilterClick("tshirts")}
                  >
                    T-shirts
                  </NavLink>
                </li>
              </ul>
              <img
                src={TriangleIcon}
                alt="TriangleIcon"
                className="transition duration-300 group-hover:rotate-180"
              />
            </li>
            <li>
              <NavLink to="/music" className="border-white hover:border-b">
                Music
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className="border-white hover:border-b">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="border-white hover:border-b">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="border-white hover:border-b">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          className="z-20 flex items-center gap-2 lg:right-8 xl:right-0 lg:-translate-y-1/2 lg:absolute top-1/2"
          onClick={() => setOpenCart(true)}
        >
          <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
          <span>({navbarCount})</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
