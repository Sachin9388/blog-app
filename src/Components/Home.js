import React from "react";
import { Link } from "react-router-dom";
import { Latestcard } from "../Com Component/LatestCard";
import { ArticleCard } from "../Com Component/ArticleCard";
import { SmallArticleCard } from "../Com Component/SmallArticleCard";
import ScrollableList from "../ScrollableList";

export const Home = () => {
  return (
    <>
      {/* <ScrollableList/> */}
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-20 2xl:container 2xl:mx-auto">
        <h1 className="text-4xl ml-2 font-bold font-serif my-6">Home</h1>
        <div className="my-6 md:flex">
          <div className="w-full md:w-full xl:w-full 2xl:w-[60%] mb-3 sm:mb-0">
            <Link to="/fitness">
              <img
                className="rounded-3xl w-full sm:h-full mb-4 "
                src="webmd_photo_of_trainer_walking_on_treadmill.webp"
                alt="Fitness"
              />
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3 2xl:w-[35%] flex flex-col">
            <Link to="/tourism">
              <img
                className="rounded-3xl w-full pb-3 "
                src="istockphoto-1031430214-170667a.jpg"
                alt="Tourism"
              />
            </Link>
            <Link to="/hollywood">
              <img
                className="pb-2  w-full  rounded-3xl "
                src="pp_maleficentmistressofevil_herobanner_mobile_19736_0a0e1915.jpeg"
                alt="Hollywood"
              />
            </Link>
          </div>
        </div>
        <div>
          <div>
            <h2 className="ml-3 my-5 text-4xl font-bold font-serif">
              The Latest
            </h2>
          </div>
          <div className="flex overflow-x-scroll pb-10 max-w-none outline-none">
            <div className="flex flex-nowrap space-x-5 ">
              <div className="ml-1 inline-block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Latestcard
                  to="/food"
                  imageSrc="97px-Yorkshire_Pudding.jpg"
                  title="Bedfordshire clanger"
                  description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas king Senkuttuvan conquered."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/technology"
                  imageSrc="photo-1568952433726-3896e3881c65.avif"
                  title="Blockchain"
                  description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/fitness"
                  imageSrc="webmd_photo_of_improper_crunch_technique.webp"
                  title="Mastering Crunches"
                  description="Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/food"
                  imageSrc="97px-Yorkshire_Pudding.jpg"
                  title="Bedfordshire clanger"
                  description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas king Senkuttuvan conquered."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/technology"
                  imageSrc="photo-1568952433726-3896e3881c65.avif"
                  title="Blockchain"
                  description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/fitness"
                  imageSrc="webmd_photo_of_improper_crunch_technique.webp"
                  title="Mastering Crunches"
                  description="Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/food"
                  imageSrc="97px-Yorkshire_Pudding.jpg"
                  title="Bedfordshire clanger"
                  description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas king Senkuttuvan conquered."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/technology"
                  imageSrc="photo-1568952433726-3896e3881c65.avif"
                  title="Blockchain"
                  description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/fitness"
                  imageSrc="webmd_photo_of_improper_crunch_technique.webp"
                  title="Mastering Crunches"
                  description="Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="ml-4 my-5 text-4xl font-bold font-serif">
            Latest Articles
          </h3>
        </div>
        <div className="lg:flex">
          <div className="w-full">
            <ArticleCard
              to="/tourism"
              imageSrc="istockphoto-1031430214-170667a.jpg"
              title="Kerala : God's Own Country"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              to="/tourism"
              imageSrc="istockphoto-472909442-170667a.jpg"
              title="Madhya Pradesh: The Heart of Incredible India"
              description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.[40] Lacking worthy enemies, he besieged the sea by throwing his spear into it."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              to="/tourism"
              imageSrc="istockphoto-1347088244-170667a.jpg"
              title="Madhya Pradesh: The Heart of Incredible India"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              to="/tourism"
              imageSrc="istockphoto-1160316337-170667a.jpg"
              title="Kerala : God's Own Country"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              to="/tourism"
              imageSrc="photo-1602216056096-3b40cc0c9944.avif"
              title="Kerala : God's Own Country"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              to="/tourism"
              imageSrc="istockphoto-511119924-170667a.jpg"
              title="Kerala : God's Own Country"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
          </div>
          <div className="">
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
            <div className="border-2 mt-10 pr-0 border-black p-4 w-64">
              <marquee>
                <h3 className="text-xl font-bold">Advertising</h3>
              </marquee>
              <img src="Times-Interact.png" alt="Advertising" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="ml-2 mt-4 mb-5 text-4xl font-bold font-serif">
              The Latest
            </h2>
          </div>
          <div className="flex overflow-x-scroll pb-10 max-w-none outline-none">
            <div className="flex flex-nowrap space-x-5 ">
              <div className="ml-1 inline-block rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Latestcard
                  to="/food"
                  imageSrc="97px-Yorkshire_Pudding.jpg"
                  title="Bedfordshire clanger"
                  description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas king Senkuttuvan conquered."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/technology"
                  imageSrc="photo-1568952433726-3896e3881c65.avif"
                  title="Blockchain"
                  description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/fitness"
                  imageSrc="webmd_photo_of_improper_crunch_technique.webp"
                  title="Mastering Crunches"
                  description="Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/food"
                  imageSrc="97px-Yorkshire_Pudding.jpg"
                  title="Bedfordshire clanger"
                  description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas king Senkuttuvan conquered."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/technology"
                  imageSrc="photo-1568952433726-3896e3881c65.avif"
                  title="Blockchain"
                  description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/fitness"
                  imageSrc="webmd_photo_of_improper_crunch_technique.webp"
                  title="Mastering Crunches"
                  description="Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/food"
                  imageSrc="97px-Yorkshire_Pudding.jpg"
                  title="Bedfordshire clanger"
                  description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas king Senkuttuvan conquered."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/technology"
                  imageSrc="photo-1568952433726-3896e3881c65.avif"
                  title="Blockchain"
                  description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
              <div className="inline-block  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                <Latestcard
                  to="/fitness"
                  imageSrc="webmd_photo_of_improper_crunch_technique.webp"
                  title="Mastering Crunches"
                  description="Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision."
                  dayOfVisit="/ December 8, 2023"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
