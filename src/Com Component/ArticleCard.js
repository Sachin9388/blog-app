import React from "react";
import { Link } from "react-router-dom";
import { SmallArticleCard } from "./SmallArticleCard";

export const ArticleCard = ({
  to,
  imageSrc,
  title,
  description,
  dayOfVisit,
  subtitle,
  alt,
}) => {
  return (
    <>
      <div className="px-4 py-4">
        {/* <div className=" grid grid-cols-1 md:grid-cols-1 gap-2"> */}
        <div className="">
          <div className="border-b-[1px] border-gray-700  grid grid-cols-1 md:grid-cols-2 gap-3 ">
            <div className="mb-5">
              <Link to={to}>
                <img src={imageSrc} alt={alt} className="w-full h-auto object-cover" />
              </Link>
            </div>

            <div className="">
              <h2 className="text-3xl font-bold mb-3">{title}</h2>
              <p>{description}</p>
              <p className="text-xl font-bold mb-5 mt-3">
                Day of Visit
                <span className="text-base font-medium">{dayOfVisit}</span>
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
