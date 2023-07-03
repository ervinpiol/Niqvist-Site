import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { recentNewsData } from "../data/recentNewsData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const RecentNews = ({ isRecent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 2;
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const displayedNews = isRecent
    ? recentNewsData.slice(startIndex, endIndex)
    : recentNewsData;
  const isNextDisabled = endIndex >= recentNewsData.length;
  const isPreviousDisabled = currentPage === 1;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="py-16 md:py-20 w-full xl:w-[1224px] mx-auto px-4 sm:px-8 xl:px-0">
      {isRecent && (
        <motion.h3
          className="pb-8 h3-style lg:pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Recent news
        </motion.h3>
      )}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {displayedNews.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 * (i + 0.2), duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to={`/chosen-news/${item.name}`}
                state={{
                  newsImage: item.image,
                  text: item.pText,
                  date: item.date,
                  time: item.time,
                }}
              >
                <img src={item.image} alt="IMG" className="w-full" />
                <h5 className="pt-4 text-2xl font-bold">{item.name}</h5>
                <p className="pt-2 font-Roboto opacity-80">{item.pText}</p>
                <p className="pt-2 font-Roboto opacity-80">Niqvist</p>
                <p className="flex gap-1 font-Roboto opacity-80">
                  <span>{item.date}</span>
                  <span>&#183;</span>
                  <span>{item.time}</span>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        {isRecent && (
          <div className="flex items-center gap-8 pt-8 text-xs">
            <button onClick={handlePreviousPage} disabled={isPreviousDisabled}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {[1, 2, 3].map((pageNumber) => (
              <span
                key={pageNumber}
                className={`cursor-pointer ${
                  currentPage === pageNumber ? "text-red-500" : ""
                }`}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </span>
            ))}
            <button onClick={handleNextPage} disabled={isNextDisabled}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentNews;
