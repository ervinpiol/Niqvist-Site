import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { songsData } from "../data/songsData";

const ChosenProduct = ({ addedItems, setAddedItems, setNavbarCount }) => {
  const [count, setCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const { productName } = useParams();
  const location = useLocation();
  const {
    productImage,
    productPrice,
    isNew,
    productType,
    tshirtColor,
    isSoldOut,
    recordedDate,
  } = location.state;
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const addCount = () => {
    if (count === 8) {
      return;
    }
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToBag = () => {
    if (count === 0) {
      return;
    }

    const existingItem = addedItems.find(
      (item) => item.productName === productName
    );
    if (existingItem) {
      const updatedItems = addedItems.map((item) => {
        if (item.productName === productName) {
          return { ...item, count: item.count + count };
        }
        return item;
      });
      setAddedItems(updatedItems);
    } else {
      const newItem = {
        productName,
        productPrice,
        productImage,
        productType,
        isNew,
        count,
        selectedSize,
      };
      setAddedItems([...addedItems, newItem]);
    }

    setNavbarCount((prevCount) => prevCount + count);
    setCount(0);
  };

  return (
    <div className="bg-BGLightBlack">
      <div className="w-full xl:w-[1224px] mx-auto pt-32 lg:pt-56 lg:pb-32 pb-16 flex text-white gap-8 lg:gap-20 justify-between items-start px-4 sm:px-8 xl:px-0 flex-col lg:flex-row">
        <motion.img
          src={productImage}
          alt=""
          className="w-full xl:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: isDesktop && 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        />
        <div className="w-full xl:w-1/2">
          <motion.h3
            className="h3-style pb-4 xl:pb-0 leading-[1.15]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {productName}
          </motion.h3>
          <motion.p
            className="pb-8 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {isNew && (
              <span className="pr-3 line-through opacity-30">$30.00</span>
            )}{" "}
            <span>${productPrice.toFixed(2)}</span>
          </motion.p>
          {productType === "tshirt" && (
            <motion.div
              className="flex flex-col gap-1 pb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label for="cars">Size</label>
              <select
                name="cars"
                id="cars"
                className="w-11/12 px-3 text-black h-11 xl:w-80"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="Xl">XL</option>
              </select>
            </motion.div>
          )}
          <div className={`${isSoldOut ? "opacity-40" : ""}`}>
            <motion.div
              className="flex items-center gap-6 pb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex text-black bg-white">
                <button
                  className="py-2.5 w-12 border-r"
                  disabled={isSoldOut}
                  onClick={minusCount}
                >
                  -
                </button>
                <span className="py-2.5 w-12 text-center">{count}</span>
                <button
                  className="py-2.5 w-12 border-l"
                  disabled={isSoldOut}
                  onClick={addCount}
                >
                  +
                </button>
              </div>
              <p>5+ in stock</p>
            </motion.div>
            <motion.button
              className="text-sm font-bold px-10 py-3.5 bg-LightRed text-white mb-16"
              disabled={isSoldOut}
              onClick={handleAddToBag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Add to bag
            </motion.button>
          </div>
          {productType === "tshirt" ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p>Fabric: Cotton</p>
              <p>Collar Style: Crew Neck</p>
              <p>Fit Type: Standard Fit</p>
              <p>Sleeve Length: Short Sleeve</p>
              <p>
                Care Instructions: Machine Washable, Follow Care Instructions
              </p>
              <p>Color: {tshirtColor}</p>
            </motion.div>
          ) : (
            <>
              <motion.p
                className="pb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Recorded in The Wilts studio with the help of producer Garett
                Stone. {recordedDate}
              </motion.p>
              <motion.div
                className="flex flex-col xl:pb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="pb-1 font-bold">Tracklist</p>
                {songsData.map((song) => (
                  <p key={song.id} className="flex gap-3">
                    <span className="w-6">{song.id}</span>
                    {song.title} - {song.duration}
                  </p>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChosenProduct;
