import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { MusicMediaIcons } from "../UI/SocialIcons";
import Separator from "../UI/Separator";

import Album1 from "../../assets/Music/Full-Length/album1.webp";
import Album2 from "../../assets/Music/Full-Length/album2.webp";

const FullLength = () => {
  const albums = [
    {
      image: Album1,
      name: "Anhedonia",
      year: "2021",
    },
    {
      image: Album2,
      name: "Centrefold",
      year: "2019",
    },
  ];

  return (
    <div className="px-4 sm:px-8 xl:px-0">
      <div className="w-full xl:w-[1224px] mx-auto py-16 xl:py-24">
        <motion.h3
          className="pb-8 h3-style xl:pb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Full lenght albums
        </motion.h3>
        <motion.div
          className="flex flex-col justify-between gap-12 md:flex-row md:gap-8 xl:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {albums.map((album, i) => (
            <div key={i}>
              <Link
                to={`/chosen-album/${album.name}`}
                state={{ albumImage: album.image, year: album.year }}
              >
                <img
                  src={album.image}
                  alt={album.name}
                  className="rounded-[30px] xl:rounded-[50px] w-full"
                />
              </Link>
              <div className="flex items-center justify-between pt-4 pr-20">
                <div>
                  <Link
                    to={`/chosen-album/${album.name}`}
                    state={{ albumImage: album.image, year: album.year }}
                  >
                    <h5 className="pb-3 text-2xl font-bold underline">
                      {album.name}
                    </h5>
                  </Link>
                  <p>Album • 79 min</p>
                </div>
                <MusicMediaIcons />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Separator />
    </div>
  );
};

export default FullLength;
