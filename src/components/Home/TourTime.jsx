import React from "react";
import { motion } from "framer-motion";
import ReleaseTourImg from "../../assets/Release-Tour/release-tour-img.webp";

const TourTime = () => {
  const tourInfo = [
    { date: "03.21", location: "Edinburgh, UK", place: "O2 Academy Edinburgh" },
    { date: "03.25", location: "London, UK", place: "The O2 Arena" },
    { date: "03.29", location: "Copenhagen, DK", place: "DR Koncerthuset" },
    { date: "04.01", location: "Amsterdam, NL", place: "Melkweg" },
  ];

  return (
    <div className="w-full xl:w-[1224px] mx-auto flex justify-between py-16 md:py-20 flex-col lg:flex-row px-4 sm:px-8 xl:px-0 gap-10 xl:gap-0">
      <div className="flex flex-col items-center w-full gap-8 lg:gap-6 lg:w-1/2 xl:items-start">
        {tourInfo.map((info, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-between w-full sm:justify-around lg:justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 * (i + 0.2), duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex flex-col items-start gap-1 pb-4 xl:gap-4 lg:items-center lg:flex-row lg:pb-0">
              <h3 className="w-48 h3-style">{info.date}</h3>
              <div>
                <h6 className="pb-2 h6-style">{info.location}</h6>
                <p>{info.place}</p>
              </div>
            </div>
            <button className="text-sm font-bold px-10 py-3.5 bg-LightRed text-white">
              BUY NOW
            </button>
          </motion.div>
        ))}
      </div>
      <motion.img
        src={ReleaseTourImg}
        alt="ReleaseTourImg"
        className="rounded-[50px] w-full lg:w-2/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      />
    </div>
  );
};

export default TourTime;
