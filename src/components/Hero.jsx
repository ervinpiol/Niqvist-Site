import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = ({ image, h1Text, isHome, isProduct }) => {
  return (
    <div
      className={`relative ${
        isHome
          ? "h-[580px] lg:h-[850px]"
          : isProduct
          ? "h-[270px] lg:h-[410px]"
          : "h-[300px] lg:h-[530px]"
      }`}
    >
      <img src={image} alt="Image" className="object-cover w-full h-full" />
      <motion.div
        className={`absolute right-1/2 translate-x-1/2 flex flex-col items-center text-white w-full xl:w-auto px-4 xl:px-0 ${
          isHome
            ? "bottom-32 xl:bottom-40"
            : isProduct
            ? "bottom-16"
            : "bottom-10"
        }`}
        initial={{ opacity: 0, y: 100, x: "50%" }}
        animate={{ opacity: 1, y: 0, x: "50%" }}
        transition={{ duration: 0.6 }}
      >
        {isProduct ? (
          <h2 className="h2-style">{h1Text}</h2>
        ) : (
          <h1 className="text-[64px] lg:text-[200px] font-bold pb-5 xl:pb-0">
            {h1Text}
          </h1>
        )}
        {isHome && (
          <>
            <p className="w-full pb-6 text-lg text-center xs:w-2/3 md:w-[46%] xl:w-3/4 xl:pb-16">
              Amsterdam-based punk rock ensemble, putting to words what it's
              like to be a human on the 21st century.
            </p>
            <Link to="/all-products">
              <button className="h-12 text-sm font-bold text-black bg-white w-44">
                Buy merch
              </button>
            </Link>
          </>
        )}
      </motion.div>
    </div>
  );
};
