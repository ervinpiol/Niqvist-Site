import React from "react";
import { motion } from "framer-motion";

const MusicVideo = () => {
  return (
    <div className="bg-BGBlack">
      <div className="w-full xl:w-[1224px] mx-auto text-white py-20 px-4 sm:px-8 xl:px-0">
        <motion.h3
          className="h3-style"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Music video is out!
        </motion.h3>
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/670669094?h=bb513e8c70"
            className="w-full h-64 xs:h-80 sm:h-[420px] md:h-[500px] lg:h-[720px]"
          ></iframe>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6 lg:gap-32 xl:pt-10 lg:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h5 className="text-2xl font-bold">HAPHEPHOBIA</h5>
          <p className="w-full lg:w-[46%]">
            They say it's not about the journey, but what if you lose your way
            along the way? 2021, York, Studio WOW, Producer: Kid Jones.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MusicVideo;
