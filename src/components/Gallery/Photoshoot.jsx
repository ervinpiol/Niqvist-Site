import React from "react";
import { motion } from "framer-motion";
import { centrefoldShoot, studioShoot } from "../../data/galleryImages";
import Separator from "../UI/Separator";

const Photoshoot = () => {
  const renderShoot = (shoot) => {
    return shoot.map((item, i) => (
      <div key={i}>
        <motion.h3
          className="w-3/4 h3-style pb-14 lg:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {item.h3Text}
        </motion.h3>
        <div
          className={`grid gap-4 ${
            shoot === centrefoldShoot
              ? "custom-grid-start grid-cols-2"
              : "custom-grid-end"
          }`}
        >
          {item.image.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`w-full ${
                index === (shoot === centrefoldShoot ? 0 : 2) &&
                "lg:row-span-2 col-span-2 lg:col-span-1 order-first lg:order-none h-full"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="px-4 sm:px-8 xl:px-0 w-full xl:w-[1224px] mx-auto pt-16 xl:pt-32 pb-24">
      <div className="pb-16 xl:pb-24">{renderShoot(studioShoot)}</div>
      <Separator />
      <div className="pt-16 xl:pt-32">{renderShoot(centrefoldShoot)}</div>
    </div>
  );
};

export default Photoshoot;
