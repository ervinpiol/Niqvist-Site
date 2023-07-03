import React from "react";
import { motion } from "framer-motion";
import Separator from "../UI/Separator";

import OurStoryImg from "../../assets/About/our-story-img.webp";

const OurStory = () => {
  return (
    <div className="px-4 sm:px-8 xl:px-0">
      <div className="w-full xl:w-[1224px] mx-auto flex items-center py-16 xl:py-32 justify-between flex-col lg:flex-row">
        <motion.div
          className="pb-14 xl:pb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="pb-3 h3-style xl:pb-0">Our story</h3>
          <p className="w-full text-lg lg:w-4/5">
            NQVST is an alternative punk band currently based in Amsterdam but
            has its origins in Scandinavia. Annabell Bjelland originally started
            writing lyrics and short melodies during her studies at the
            University of Oslo, with no intention of ever sharing them with
            anyone. As fate would have it, it wasn't until a friend of a friend
            told Annabell that Kurt Sparks and Bernard Dayes were looking for a
            vocalist to expand their two-man sax-bass duo into what later become
            NQVST. Kurt and Bernard were impressed by the lyrical prowness of
            Bjelland and soon the trio was self-producing singles that would
            eventually become their first studio album, Centerfold.
          </p>
        </motion.div>
        <motion.img
          src={OurStoryImg}
          alt="OurStoryImg"
          className="rounded-[50px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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

export default OurStory;
