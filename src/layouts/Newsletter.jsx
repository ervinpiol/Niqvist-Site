import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className="text-white bg-BGBlack">
      <div className="w-full xl:w-[1224px] mx-auto py-10 md:py-20 flex justify-between gap-8 lg:gap-28 flex-col lg:flex-row px-4 sm:px-8 xl:px-0">
        <motion.div
          className="w-full lg:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="pb-2 h3-style">Subscribe</h3>
          <p>
            Don't miss out on exclusive behind-the-scenes access, early demos,
            live streams and other benefits by subscribing to our newsletter.
          </p>
        </motion.div>
        <motion.form
          className="flex flex-col flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="h-12 p-4 text-sm text-black placeholder:text-black placeholder:opacity-80"
          />
          <button className="h-12 mt-5 text-sm font-bold text-black bg-white w-36">
            SUBMIT
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Newsletter;
