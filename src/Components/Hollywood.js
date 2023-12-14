import React from "react";
import { ArticleCard } from "../Com Component/ArticleCard";
import { SmallArticleCard } from "../Com Component/SmallArticleCard";

export const Hollywood = () => {
  return (
    <>
      <div className="mx-4 md:mx-10  xl:mx-20  2xl:container 2xl:mx-auto">
        <h2 className="text-4xl ml-4 font-bold font-serif my-6">Hollywood</h2>
        <div className="lg:flex">
          <div className="w-full">
            <ArticleCard
              imageSrc="DarkSkies.jpg"
              title="Dark Skies"
              description="The Barrett family—mother Lacy, father Daniel, older son Jesse, and younger son Sammy—reside on a quiet suburban street in an unnamed American city. Daniel is currently unemployed, placing the burden of supporting the family on Lacy, who works as a real estate agent. Their two sons enjoy a happy relationship and communicate with each other from their beds via walkie-talkie."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              imageSrc="pp_maleficentmistressofevil_herobanner_mobile_19736_0a0e1915.jpeg"
              title="MaleFicent"
              description="Maleficent is a powerful fairy living in the Moors, a magical forest realm bordering a human kingdom. As a young girl, Maleficent meets and falls in love with a human peasant boy named Stefan. On Maleficent's 16th birthday, he gives her what he calls a true love's kiss. However, as they grow older, the two grow apart; Stefan's love is overshadowed by his ambition to be king, and Maleficent becomes protector of the Moors."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              imageSrc="Venom.webp"
              title="Venom: Let There Be Carnage"
              description="Venom was intended by Sony to be the start of a new shared universe, and plans for a sequel began during production on the first film. Harrelson was cast to make a brief appearance as Kasady at the end of Venom, with the intention of him becoming the villain Carnage in the sequel."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="Black Widow.webp"
              title="Black Widow (2021 film)"
              description="Black Widow premiered at events around the world on June 29, 2021, and was released in the United States on July 9, simultaneously in theaters and through Disney+ with Premier Access."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="The-Night-House.avif"
              title="The Night House"
              description="Intelligent, emotionally compelling and visually sophisticated, for fans of darker fare and old-fashioned spooky stories, The Night House is unmissable. The Night House is a compelling meditation on the horror of one's own mind."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="Raya and the Last Dragon.png"
              title="Raya and the Last Dragon "
              description="Raya and Sisu travel across the realm, reclaiming pieces of the gem and making new friends: the young restaurateur Boun from Tail, the baby con artist Little Noi and her three ongis from Talon, and the warrior Tong from Spine, all of whom have lost loved ones to the Druun."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
          </div>
          <div className=" ">
            <SmallArticleCard
              Stories="Top Most"
              imageSrc="DarkSkies.jpg"
              title="Dark Skies"
              subtitle="Hollywood"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="pp_maleficentmistressofevil_herobanner_mobile_19736_0a0e1915.jpeg"
              title="MaleFicent"
              subtitle="Hollywood"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="Venom.webp"
              title="Venom: Let There Be Carnage"
              subtitle="Hollywood"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="Black Widow.webp"
              title="Black Widow (2021 film)"
              subtitle="Hollywood"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="The-Night-House.avif"
              title="The Night House"
              subtitle="Hollywood"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="Raya and the Last Dragon.png"
              title="Raya and the Last Dragon "
              subtitle="Hollywood"
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
