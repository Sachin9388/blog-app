import React from "react";

export const SSH = () => {
  return (
    <>
      <div></div>
      <h1 className="sm:text-3xl text-xl mb-2 mt-10 lg:ml-2 ml-1 font-sans font-semibold">
        Home
      </h1>
      <div className="md:flex  ">
        <div className="sm:mr-1 xl:w-[70%] md:mr-4 mr-2">
          <Link to="/Fitness">
            <img
              src="webmd_photo_of_trainer_walking_on_treadmill.webp"
              className="rounded-lg sm:mt-3 xl:w-[100%] mr-3 md:ml-5 ml-1"
              alt="fitness"
            />
          </Link>
        </div>
        <div className="   xl:w-[30%] xl:pl-10 ">
          <div className="ml-2 xl:[w-full] flex-none   ">
            <Link to="/Tourism">
              <img
                src="istockphoto-1031430214-170667a.jpg"
                className="sm:w-80 mt-3 xl:w-full  sm:mb-2 rounded-xl"
                alt=""
              />
            </Link>
            <Link to="/Technology">
              <img
                src="pp_maleficentmistressofevil_herobanner_mobile_19736_0a0e1915.jpeg"
                alt=""
                className="sm:w-80 mt-2 xl:w-full rounded-xl "
              />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-4xl font-bold font-serif my-6">The Latest</h2>
        </div>
        <div className="md:flex">
          <Latestcard
            imageSrc="97px-Yorkshire_Pudding.jpg"
            title="Bedfordshire clanger"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />
          <Latestcard
            imageSrc="97px-Yorkshire_Pudding.jpg"
            title="Blockchain"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />
          <Latestcard
            imageSrc="webmd_photo_of_improper_crunch_technique.webp"
            title="Mastering Crunches"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />
        </div>
      </div>
      <h2 className="text-4xl font-bold font-serif my-6">Lateset Article</h2>
      <div className="lg:flex">
        <div className="">
          <ArticleCard
            imageSrc="istockphoto-1031430214-170667a.jpg"
            title="kitran : God's Own Country"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />
          <ArticleCard
            imageSrc="istockphoto-472909442-170667a.jpg"
            title="Madhya Pradesh: The Heart of Incredible India"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />
          <ArticleCard
            imageSrc="istockphoto-1347088244-170667a.jpg"
            title="Madhya Pradesh: The Heart of Incredible India"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />

          <ArticleCard
            imageSrc="istockphoto-511119924-170667a.jpg"
            title="Kerala : God's Own Country"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />
          <ArticleCard
            imageSrc="istockphoto-472909442-170667a.jpg"
            title="Kerala : God's Own Country"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />
          <ArticleCard
            imageSrc="istockphoto-511119924-170667a.jpg"
            title="Kerala : God's Own Country"
            description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
            dayOfVisit="/ December 8, 2023"
          />
        </div>
        <div>
          <SmallArticleCard
            Stories={"Top Most"}
            imageSrc={"istockphoto-472909442-170667a.jpg"}
            title="Kerala : God's Own Country"
            dayOfVisit={" January 24, 2022"}
          />
          <SmallArticleCard
            imageSrc={"istockphoto-511119924-170667a.jpg"}
            title="Madhya Pradesh: The Heart of Incredible India"
            dayOfVisit={" January 24, 2022"}
          />
          <SmallArticleCard
            imageSrc={"istockphoto-1347088244-170667a.jpg"}
            title="Kerala : God's Own Country"
            dayOfVisit={" January 24, 2022"}
          />
          <SmallArticleCard
            imageSrc={"istockphoto-1031430214-170667a.jpg"}
            title="Kerala : God's Own Country"
            dayOfVisit={" January 24, 2022"}
          />
          <SmallArticleCard
            imageSrc={"istockphoto-511119924-170667a.jpg"}
            title="Madhya Pradesh: The Heart of Incredible India"
            dayOfVisit={" January 24, 2022"}
          />
          <SmallArticleCard
            imageSrc={"istockphoto-511119924-170667a.jpg"}
            title="Madhya Pradesh: The Heart of Incredible India"
            dayOfVisit={" January 24, 2022"}
          />
        </div>
      </div>
      <h2 className="text-4xl font-bold font-serif my-6">Latest Stories</h2>
      <div className="sm:flex ml-2 ">
        <Latestcard
          imageSrc="97px-Yorkshire_Pudding.jpg"
          title="Bedfordshire clanger"
          description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
          dayOfVisit="/ December 8, 2023"
        />
        <Latestcard
          imageSrc="97px-Yorkshire_Pudding.jpg"
          title="Blockchain"
          description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
          dayOfVisit="/ December 8, 2023"
        />
        <Latestcard
          imageSrc="webmd_photo_of_improper_crunch_technique.webp"
          title="Mastering Crunches"
          description="According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas."
          dayOfVisit="/ December 8, 2023"
        />
      </div>
    </>
  );
};
