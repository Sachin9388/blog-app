// ScrollableList.js

import React, { useEffect, useState, useRef } from "react";
import { Latestcard } from "./Com Component/LatestCard";

const ScrollableList = () => {
  const [scrolling, setScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  let scrollInterval;

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setScrolling(false);
      }, 300); // Set your desired timeout value
    };
    const handleMouseDown = () => {
      clearInterval(scrollInterval);
    };
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Attach the scroll event listener to the scroll container
      scrollContainer.addEventListener("scroll", handleScroll);
      scrollContainer.addEventListener("mousedown", handleMouseDown);

      // Automatically scroll left to right
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      const scrollSpeed = 5; // Adjust scroll speed as needed

      const lastCard = scrollContainer.lastChild;

      const scrollLeft = () => {
        if (scrollContainer.scrollLeft < maxScrollLeft) {
          scrollContainer.scrollLeft += scrollSpeed;

          // Check if the last card is in view
          const lastCardRight = lastCard.getBoundingClientRect().right;
          const containerRight = scrollContainer.getBoundingClientRect().right;

          if (lastCardRight <= containerRight) {
            clearInterval(scrollInterval);
          }
        } else {
          clearInterval(scrollInterval);
          scrollContainer.scrollLeft = 0;
        }
      };

      const scrollInterval = setInterval(scrollLeft, 30); // Adjust interval as needed

      // Stop auto-scrolling when the component unmounts
      return () => {
        clearInterval(scrollInterval);
        // Remove the scroll event listener when the component unmounts
        scrollContainer.removeEventListener("scroll", handleScroll);
        scrollContainer.removeEventListener("mousedown", handleMouseDown);

        clearTimeout(timeout);
      };
    }
  }, [scrollContainerRef, scrollInterval]);

  const latestCardsData = [
    {
      to: "/food",
      imageSrc: "97px-Yorkshire_Pudding.jpg",
      title: "Bedfordshire clanger",
      description:
        "According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas king Senkuttuvan conquered.",
      dayOfVisit: "/ December 8, 2023",
      alt: "user",
    },
    {
      to: "/technology",
      imageSrc: "photo-1568952433726-3896e3881c65.avif",
      title: "Blockchain",
      description:
        "Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change.",
      dayOfVisit: "/ December 8, 2023",
      alt: "user",
    },
    {
      to: "/fitness",
      imageSrc: "webmd_photo_of_improper_crunch_technique.webp",
      title: "Mastering Crunches",
      description:
        "Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision.",
      dayOfVisit: "/ December 8, 2023",
      alt: "user",
    },
    {
      to: "/food",
      imageSrc: "97px-Yorkshire_Pudding.jpg",
      title: "Bedfordshire clanger",
      description:
        "According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas king Senkuttuvan conquered.",
      dayOfVisit: "/ December 8, 2023",
      alt: "user",
    },
    {
      to: "/technology",
      imageSrc: "photo-1568952433726-3896e3881c65.avif",
      title: "Blockchain",
      description:
        "Blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change.",
      dayOfVisit: "/ December 8, 2023",
      alt: "user",
    },
    {
      to: "/fitness",
      imageSrc: "webmd_photo_of_improper_crunch_technique.webp",
      title: "Mastering Crunches",
      description:
        "Keep your neck in line with your spine. Tuck in your chin so it doesn't stick out. Breathe normally. To keep chest and shoulders open, keep your elbows out of your line of vision.",
      dayOfVisit: "/ December 8, 2023",
      alt: "user",
    },
    // Add more Latestcard data objects as needed
  ];

  return (
    <div
      ref={scrollContainerRef}
      className={`flex overflow-x-scroll mx-24 2xl:mx-auto 2xl:container pb-10 max-w-none outline-none ${
        scrolling ? "scrolling" : ""
      }`}
    >
      <div className="flex flex-nowrap space-x-5 ">
        {latestCardsData.map((card, index) => (
          <div
            key={index}
            className="inline-block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <Latestcard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableList;
