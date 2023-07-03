import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MusicMediaIcons } from "../components/UI/SocialIcons";
import OtherReleases from "../components/OtherReleases";
import { songsData } from "../data/songsData";

import AlbumHero from "../assets/Hero-Images/chosen-hero.webp";
import Album1 from "../assets/Music/Full-Length/album1.webp";

const ChosenAlbum = () => {
  const { albumName } = useParams();
  const location = useLocation();
  const { albumImage, year } = location.state || {
    albumImage: Album1,
    year: 2021,
  };

  return (
    <div>
      <img src={AlbumHero} alt="" className="h-40 lg:h-56 xl:h-auto" />
      <div className="w-full xl:w-[1224px] mx-auto flex py-16 xl:py-32 gap-12 lg:gap-28 flex-col-reverse lg:flex-row px-4 sm:px-8 xl:px-0">
        <motion.img
          src={albumImage}
          alt="albumImage"
          className="rounded-[50px] w-full lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        />
        <div>
          <motion.p
            className="pb-1.5 text-lg font-bold xl:pb-6 text-BGLightBlack"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            DISCOGRAPHY / ALBUMS
          </motion.p>
          <motion.h3
            className="pb-3 h3-style xl:pb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {albumName}
          </motion.h3>
          <motion.p
            className="w-2/3 pb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Recorded in The Wilts studio with the help of producer Garett Stone.{" "}
            {year}
          </motion.p>
          <motion.div
            className="flex flex-col gap-1 pb-12 xl:pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {songsData.map((song) => (
              <p key={song.id} className="flex gap-3">
                <span className="w-6 font-bold">{song.id}</span>
                {song.title} - {song.duration}
              </p>
            ))}
          </motion.div>
          <motion.div
            className="flex items-center gap-10 md:pb-16 lg:pb-0 xl:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link to="/all-products">
              <button className="text-sm font-bold px-10 py-3.5 bg-LightRed text-white">
                BUY VINYL
              </button>
            </Link>
            <MusicMediaIcons />
          </motion.div>
        </div>
      </div>
      <OtherReleases showLess />
    </div>
  );
};

export default ChosenAlbum;
