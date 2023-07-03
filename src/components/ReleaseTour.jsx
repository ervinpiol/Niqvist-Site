import React from "react";
import { motion } from "framer-motion";
import ReleaseTourHero from "../assets/Release-Tour/release-tour-hero.webp";

const ReleaseTour = ({ isText }) => {
  return (
    <div className="relative w-full">
      <img
        src={ReleaseTourHero}
        alt="ReleaseTourHero"
        className={`w-full object-cover ${
          isText ? "lg:h-[550px] h-[415px]" : "lg:h-[650px] h-[415px]"
        }`}
      />
      <motion.div
        className="text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full xl:w-[1224px] px-4 sm:px-20 xl:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 0, x: "-50%" },
          visible: { opacity: 1, y: "-50%", x: "-50%" },
        }}
      >
        <h2 className="leading-[1.15] pb-6 w-2/3 sm:w-3/5 md:w-2/5 lg:w-[55%] h2-style">
          Anhedonia release tour
        </h2>
        <h4 className={`text-2xl font-black ${isText ? "pb-4" : "pb-16"}`}>
          2022 • MARCH-MAY • EUROPE
        </h4>
        {isText ? (
          <p className="w-full sm:w-2/3 md:w-3/4 lg:w-2/5">
            Join us across the top live venues around Europe to relive the
            Anhedonia album's gritty realities first-hand.
          </p>
        ) : (
          <button className="text-sm font-bold text-black bg-white w-72 h-14">
            GET YOUR TICKETS NOW
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default ReleaseTour;
