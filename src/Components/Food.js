import React from "react";
import { ArticleCard } from "../Com Component/ArticleCard";
import { SmallArticleCard } from "../Com Component/SmallArticleCard";

export const Food = () => {
  return (
    <>
      <div className="mx-4 md:mx-10  xl:mx-20  2xl:container 2xl:mx-auto">
        <h2 className="text-4xl ml-4 font-bold font-serif my-6">Foods</h2>
        <div className="lg:flex">
          <div className="w-full">
            <ArticleCard
              imageSrc="97px-Yorkshire_Pudding.jpg"
              title="Bedfordshire clanger"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="Bangers_and_mash_1.jpg"
              title="Bangers and mash"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.[40] Lacking worthy enemies, he besieged the sea by throwing his spear into it."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="Battenberg Cake.jpg"
              title="Battenberg Cake"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.[40] Lacking worthy enemies, he besieged the sea by throwing his spear into it."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="Lardy_cake.jpg"
              title="Lardy cake"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="Faggots-and-gravy.jpg"
              title="Faggotsy"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="Lincolnshire_sausage_dinner.jpg"
              title="Lincolnshire sausage"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas. "
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
          </div>
          <div className=" ">
            <SmallArticleCard
              Stories="Top Most"
              imageSrc="97px-Yorkshire_Pudding.jpg"
              title="Bedfordshire clanger"
              subtitle="Foods"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="Bangers_and_mash_1.jpg"
              title="Bangers and mash"
              subtitle="Foods"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="Battenberg Cake.jpg"
              title="Battenberg Cake"
              subtitle="Foods"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="Lardy_cake.jpg"
              title="Lardy cake"
              subtitle="Foods"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="Faggots-and-gravy.jpg"
              title="Faggotsy"
              subtitle="Foods"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="Lincolnshire_sausage_dinner.jpg"
              title="Lincolnshire sausage "
              subtitle="Foods"
              dayOfVisit=" / December 11,2023"
            />
            <div>
              <div className="border-2 mt-5 pr-0 border-black p-4 md:w-64">
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
