import React from "react";

export const SmallArticleCard = ({
  to,
  imageSrc,
  title,
  Stories,
  alt,
  dayOfVisit,
  subtitle,
}) => {
  return (
    <>
      <h2 className="text-4xl font-bold font-serif ">{Stories}</h2>
      <div className="border-b mt-5 pb-3 p-2  border-gray-600">
        <div className="flex flex-col mr-10  w-full  sm:flex-row  ">
          <img className="w-full h-40 object-cover mb-3 " src={imageSrc} alt={alt} />
          <div className="flex flex-col pl-3 ">
            <h3 className="text-xl  font-bold">{title}</h3>
            <p className="mt-2 text-xl font-bold">
              {subtitle}
              <span className="text-base font-normal ">{dayOfVisit}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
