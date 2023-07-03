import React from "react";
import { motion } from "framer-motion";
import { SocialMediaIcons } from "../UI/SocialIcons";

import Member1 from "../../assets/About/Band-Members/member1.webp";
import Member2 from "../../assets/About/Band-Members/member2.webp";
import Member3 from "../../assets/About/Band-Members/member3.webp";
import Member4 from "../../assets/About/Band-Members/member4.webp";

const BandMembers = () => {
  const bandMembers = [
    {
      image: Member1,
      name: "Annabell Bjelland",
      role: "Vocals",
    },
    {
      image: Member2,
      name: "Bernard Dayes",
      role: "Saxophone",
    },
    {
      image: Member3,
      name: "Kurt Sparks",
      role: "Bass",
    },
    {
      image: Member4,
      name: "Judd Finch",
      role: "Drums",
    },
  ];

  return (
    <div className="w-full xl:w-[1224px] mx-auto py-16 xl:py-24 px-4 sm:px-8 xl:px-0">
      <motion.h3
        className="pb-16 h3-style md:pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Band members
      </motion.h3>
      <div className="grid justify-between grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
        {bandMembers.map((member, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1 * (i + 0.2), duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-[32px] w-full"
            />
            <h6 className="pt-4 pb-1 h6-style">{member.name}</h6>
            <p className="pb-5">{member.role}</p>
            <SocialMediaIcons />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BandMembers;
