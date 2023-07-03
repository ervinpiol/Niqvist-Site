import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SkeletonCard from "../components/UI/SkeletonCard";

const Products = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [data]);

  return (
    <div className="bg-white">
      <div className="w-full xl:w-[1224px] mx-auto grid justify-between py-16 md:py-28 grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10 px-4 sm:px-8 xl:px-0 ">
        {isLoading
          ? data.map((item, i) => <SkeletonCard key={i} />)
          : data.map((item, i) => (
              <div key={i} className="relative">
                <Link
                  to={`/product/${item.name}`}
                  state={{
                    productImage: item.image,
                    productName: item.name,
                    productPrice: item.price,
                    tshirtColor: item.color,
                    isNew: item.new,
                    productType: item.type,
                    isSoldOut: item.soldOut,
                    recordedDate: item.dateRecorded,
                  }}
                >
                  <motion.div
                    key={animationKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                      hidden: { opacity: 0, y: 100 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full hover:brightness-[.70]"
                    />
                    <h6 className="pt-4 h6-style">{item.name}</h6>
                    <p className="pt-2">
                      {item.new && (
                        <span className="pr-3 line-through opacity-30">
                          $30.00
                        </span>
                      )}
                      {item.soldOut ? "SOLD OUT" : `$${item.price.toFixed(2)}`}
                    </p>
                    {item.new && (
                      <p className="bg-black text-white w-auto py-1.5 px-3 text-center text-sm absolute top-2">
                        NEW
                      </p>
                    )}
                  </motion.div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Products;
