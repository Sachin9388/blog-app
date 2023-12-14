import React from "react";
import { Link } from "react-router-dom";

export const Latestcard = ({
  to,
  imageSrc,
  title,
  description,
  dayOfVisit,
  alt,
}) => {
  return (
    <>
      <div className="py-8 px-2 w-96 ">
        <div className=" ">
          {/* <div className="">
          <div className=""> */}
          <div className="">
            <Link to={to}>
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-60 object-cover "
              />
            </Link>
            <div>
              <h2 className="text-3xl font-bold mb-3">{title}</h2>
              <p>{description}</p>
              <p className="text-xl font-bold mt-3">
                Day of Visit
                <span className="text-base font-medium">{dayOfVisit}</span>
              </p>
            </div>
          </div>
          {/* </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
