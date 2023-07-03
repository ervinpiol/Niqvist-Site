import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col">
      <Skeleton
        className="block w-full bg-[#ededed] h-[360px] skeleton-effect"
        highlightColor="#444"
      />
      <Skeleton
        className="block w-full bg-[#ededed] -mt-2 skeleton-effect"
        highlightColor="#444"
      />
      <Skeleton
        className="block w-full bg-[#ededed] -mt-2 skeleton-effect"
        highlightColor="#444"
      />
    </div>
  );
};

export default SkeletonCard;
