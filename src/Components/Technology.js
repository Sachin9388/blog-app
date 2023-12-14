import React from "react";
import { ArticleCard } from "../Com Component/ArticleCard";
import { SmallArticleCard } from "../Com Component/SmallArticleCard";

export const Technology = () => {
  return (
    <>
      <div className="mx-4 md:mx-10  xl:mx-20  2xl:container 2xl:mx-auto">
        <h2 className="text-4xl ml-4 font-bold font-serif my-6">Technology</h2>
        <div className="lg:flex">
          <div className="w-full">
            <ArticleCard
              imageSrc="istockphoto-1515913422-1024x1024.jpg"
              title="Artificial Intelligence (AI) and Machine Learning"
              description="Artificial Intelligence is a method of making a computer, a computer-controlled robot, or a software think intelligently like the human mind. AI is accomplished by studying the patterns of the human brain and by analyzing the cognitive process."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              imageSrc="istockphoto-1160014667-612x612.jpg"
              title="Robotic Process Automation (RPA)"
              description="RPA is another technology that is automating jobs. RPA is the use of software to automate business processes such as interpreting applications, processing transactions, dealing with data, and even replying to emails. RPA automates repetitive tasks that people used to do."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />

            <ArticleCard
              imageSrc="istockphoto-1200559136-612x612.jpg"
              title="Quantum Computing"
              description="Quantum computers are now a multitude times faster than regular computers and huge brands like Splunk, Honeywell, Microsoft, AWS, Google and many others are now involved in making innovations in the field of Quantum Computing."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="photo-1568952433726-3896e3881c65.avif"
              title="Blockchain"
              description="Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you're making a chain of data"
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="istockphoto-1184401187-612x612.jpg"
              title="Internet of Things (IoT)"
              description="Another promising new technology trend is IoT. Many “things” are now being built with WiFi connectivity, meaning they can be connected to the Internet—and to each other. Hence, the Internet of Things, or IoT."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
            <ArticleCard
              imageSrc="cybersecurity.webp"
              title="Cyber Security"
              description="Cyber security might not seem like an emerging technology, given that it has been around for a while, but it is evolving just as other technologies are. That's in part because threats are constantly new. The malevolent hackers who are trying to illegally access data."
              dayOfVisit="/ December 8, 2023"
              alt="user"
            />
          </div>
          <div className=" ">
            <SmallArticleCard
              Stories="Top Most"
              imageSrc="istockphoto-1515913422-1024x1024.jpg"
              title="Artificial Intelligence (AI) and Machine Learning"
              subtitle="Technology"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="istockphoto-1160014667-612x612.jpg"
              title="Robotic Process Automation (RPA)"
              subtitle="Technology"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="istockphoto-1200559136-612x612.jpg"
              title="Quantum Computing"
              subtitle="Technology"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="photo-1568952433726-3896e3881c65.avif"
              title="Blockchain"
              subtitle="Technology"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="istockphoto-1184401187-612x612.jpg"
              title="Internet of Things (IoT)"
              subtitle="Technology"
              dayOfVisit=" / December 11,2023"
            />
            <SmallArticleCard
              imageSrc="cybersecurity.webp"
              title="Cyber Security"
              subtitle="Technology"
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
