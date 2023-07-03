import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Separator from "../UI/Separator";
import { MusicMediaIcons } from "../UI/SocialIcons";

import AnhedoniaAlbumImg from "../../assets/New-Album/Anhedonia.webp";

const NewAlbum = () => {
  return (
    <div className="w-full xl:w-[1224px] mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div>
          <motion.h2
            className="h2-style leading-[1.15] pb-8 xl:pb-10 w-2/3 lg:w-10/12 xl:w-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            New album is out now
          </motion.h2>
          <motion.p
            className="w-3/4 pb-8 xl:pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Anhedonia is our commentary on the hard work of unrealized dreams
            and the gritty reality.
          </motion.p>
          <motion.div
            className="flex items-center gap-10 pb-14 xl:pb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link to="/chosen-album/Anhedonia">
              <button className="text-sm font-bold px-10 py-3.5 bg-LightRed text-white">
                LEARN MORE
              </button>
            </Link>
            <MusicMediaIcons />
          </motion.div>
        </div>
        <motion.img
          src={AnhedoniaAlbumImg}
          alt="AnhedoniaAlbumImg"
          className="rounded-[32px] lg:rounded-[55px] lg:w-1/2 xl:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        />
      </div>
      <Separator />
    </div>
  );
};

export default NewAlbum;
