import React from "react";
import { ArticleCard } from "../Com Component/ArticleCard";
import { SmallArticleCard } from "../Com Component/SmallArticleCard";
export const Fitness = () => {
  return (
    <>
      <div className="mx-4 md:mx-10  xl:mx-20  2xl:container 2xl:mx-auto">
        <h2 className="text-4xl ml-4 font-bold font-serif my-6">Fitness</h2>
        <div className="lg:flex">
          <div className="w-full">
            <ArticleCard
              imageSrc="webmd_photo_of_trainer_walking_on_treadmill.webp"
              title="Walking"
              description="If you're just starting to walk for fitness, begin with five to 10 minutes at a time. Add a few minutes to each walk until you get to at least 30 minutes per walk. Then, quicken your pace or add hills."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              imageSrc="webmd_photo_of_trainer_doing_squats.webp"
              title="Squats"
              description="Squats work several muscle groups -- your quadriceps hamstrings, and gluteals -- at the same time."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              imageSrc="webmd_photo_of_trainer_doing_lunges.webp"
              title="Lunges"
              description="Take a big step forward, keeping your back straight. Bend your front knee to about 90 degrees. Keep weight on your back toes and drop the back knee toward the floor. Don't let the back knee touch the floor."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="webmd_photo_of_trainer_doing_pushups.webp"
              title="Push-Ups"
              description="Push-ups strengthen your chest, shoulders, triceps, and core muscles."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="webmd_photo_of_trainer_doing_crunches.webp"
              title="Crunches -- Method A"
              description="Start by lying on your back with your feet flat on the floor and your head resting in the palm of one hand and the other hand reaching toward your knees. Press your lower back down.F"
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="webmd_photo_of_improper_crunch_technique.webp"
              title="Mastering Crunches"
              description="Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
          </div>
          <div className=" ">
            <SmallArticleCard
              Stories="Top Most"
              imageSrc="webmd_photo_of_trainer_walking_on_treadmill.webp"
              title="Walking"
              subtitle="Fitness"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="webmd_photo_of_trainer_doing_squats.webp"
              title="Squats"
              subtitle="Fitness"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="webmd_photo_of_trainer_doing_lunges.webp"
              title="Lunges"
              subtitle="Fitness"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="webmd_photo_of_trainer_doing_pushups.webp"
              title="Push-Ups"
              subtitle="Fitness"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="webmd_photo_of_trainer_doing_crunches.webp"
              title="Crunches -- Method A"
              subtitle="Fitness"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="webmd_photo_of_improper_crunch_technique.webp"
              title="Mastering Crunches"
              subtitle="Fitness"
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
