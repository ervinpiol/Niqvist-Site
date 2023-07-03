import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { SocialMediaIcons } from "../components/UI/SocialIcons";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-BGBlack">
      <div className="px-4 sm:px-8 xl:px-0 w-full xl:w-[1224px] mx-auto">
        <div className="w-full h-1.5 bg-white" />
        <motion.div
          className="flex flex-col items-center justify-between w-full gap-8 pt-10 pb-14 lg:pt-14 lg:pb-28 lg:flex-row xl:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-36 lg:w-48" />
          </Link>
          <SocialMediaIcons isWhite />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
