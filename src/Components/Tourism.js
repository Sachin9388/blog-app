import React from "react";
import { ArticleCard } from "../Com Component/ArticleCard";
import { SmallArticleCard } from "../Com Component/SmallArticleCard";
export const Tourism = () => {
  return (
    <>
      <div className="mx-4 md:mx-10  xl:mx-20  2xl:container 2xl:mx-auto">
        <h2 className=" text-4xl ml-4 font-bold font-serif my-6">Tourism</h2>
        <div className="lg:flex">
          <div className="w-full">
            <ArticleCard
              imageSrc="istockphoto-1031430214-170667a.jpg"
              title="Kerala : God's Own Country"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              imageSrc="istockphoto-472909442-170667a.jpg"
              title="Madhya Pradesh: The Heart of Incredible India"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.[40] Lacking worthy enemies, he besieged the sea by throwing his spear into it."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              imageSrc="istockphoto-1347088244-170667a.jpg"
              title="Madhya Pradesh: The Heart of Incredible India"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="istockphoto-1160316337-170667a.jpg"
              title="Kerala : God's Own Country"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="photo-1602216056096-3b40cc0c9944.avif"
              title="Kerala : God's Own Country"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="istockphoto-511119924-170667a.jpg"
              title="Kerala : God's Own Country"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
          </div>
          <div className=" ">
            <SmallArticleCard
              Stories="Top Most"
              imageSrc="istockphoto-1031430214-170667a.jpg"
              title="Kerala : God's Own Country"
              subtitle="Tourism"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="istockphoto-472909442-170667a.jpg"
              title="Madhya Pradesh: The Heart of Incredible India"
              subtitle="Tourism"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="istockphoto-1347088244-170667a.jpg"
              title="Madhya Pradesh: The Heart of Incredible India"
              subtitle="Tourism"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="istockphoto-1160316337-170667a.jpg"
              title="Kerala : God's Own Country"
              subtitle="Tourism"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="photo-1602216056096-3b40cc0c9944.avif"
              title="Kerala : God's Own Country"
              subtitle="Tourism"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="istockphoto-511119924-170667a.jpg"
              title="Kerala : God's Own Country"
              subtitle="Tourism"
              dayOfVisit=" / December 11,2023"
            />
            <div>
              <div className="border-2 mt-10 pr-0 border-black p-4 md:w-64">
                <marquee>
                  <h3 className="text-xl font-bold">Advertising</h3>
                </marquee>
                <img src="Times-Interact.png" alt="Advertising" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
