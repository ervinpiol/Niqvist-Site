import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { otherReleasesData } from "../data/otherReleasesData";
import Separator from "./UI/Separator";

const OtherReleases = ({ showLess, hasSeparator }) => {
  const itemsToShow = showLess ? 4 : otherReleasesData.length;

  return (
    <div className="w-full xl:w-[1224px] mx-auto px-4 sm:px-8 xl:px-0">
      <div className="py-20">
        <motion.div
          className="flex items-center justify-between pb-8 xl:pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="h3-style">Other releases</h3>
          {showLess && (
            <Link to="/music">
              <p className="hidden text-lg font-bold underline text-LightRed md:block">
                SEE MORE
              </p>
            </Link>
          )}
        </motion.div>
        <div className="grid justify-between grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:gap-y-20">
          {otherReleasesData.slice(0, itemsToShow).map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * (i + 0.2), duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-[32px] w-full"
              />
              <h6 className="pt-4 h6-style">{item.name}</h6>
              <p className="pt-2 opacity-70">Single</p>
            </motion.div>
          ))}
        </div>
      </div>
      {showLess && hasSeparator && <Separator />}
    </div>
  );
};

export default OtherReleases;
