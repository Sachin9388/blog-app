import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ title, imageSrc, alt, description, dayOfVisit }) => (
  <div className="py-8 px-2 ">
    <div className=" ">
      <div className="">
        <Link>
          <img src={imageSrc} alt={alt} className="w-full h-60 object-cover " />
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
    </div>
  </div>
);

const cards = [
  {
    title: " Bedfordshire clanger",
    imageSrc: "photo-1568952433726-3896e3881c65.avif",
    alt: "user",
    description:
      "According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.",
    dayOfVisit: "December 8, 2023",
  },

  {
    title: "ASDFGHHJ",
    imageSrc: "photo-1568952433726-3896e3881c65.avif",
    alt: "user",
    description:
      "According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.",
    dayOfVisit: "December 8, 2023",
  },

  {
    title: "ZXCVBNMMKKO",
    imageSrc: "photo-1568952433726-3896e3881c65.avif",
    alt: "user",
    description:
      "According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.",
    dayOfVisit: "December 8, 2023",
  },

  {
    title: "Sonagra Sachin",
    imageSrc: "photo-1568952433726-3896e3881c65.avif",
    alt: "user",
    description:
      "According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.",
    dayOfVisit: "December 8, 2023",
  },

  {
    title: "SONAGRA",
    imageSrc: "photo-1568952433726-3896e3881c65.avif",
    alt: "user",
    description:
      "According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.",
    dayOfVisit: "December 8, 2023",
  },

  {
    title: "SACHIN",
    imageSrc: "photo-1568952433726-3896e3881c65.avif",
    alt: "user",
    description:
      "According to the Sangam classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.",
    dayOfVisit: "December 8, 2023",
  },
];

export const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cards.length - 1 : prevSlide - 3
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cards.length - 3 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative w-full ">
      <div className="relative h-56 pb-[38%] overflow-hidden rounded-lg md:h-96 flex">
        {cards.map((card, index) => {
          const adjustedIndex = (index + currentSlide) % cards.length;
          return (
            <div
              key={index}
              className={`${
                index >= currentSlide && index < currentSlide + 3
                  ? "block"
                  : "hidden"
              } duration-700 ease-in-out w-1/3 transform`}
            >
              <Card
                title={cards[adjustedIndex].title}
                imageSrc={cards[adjustedIndex].imageSrc}
                alt={cards[adjustedIndex].alt}
                description={cards[adjustedIndex].description}
                dayOfVisit={cards[adjustedIndex].dayOfVisit}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute z-30 flex bottom-5 left-1/2 -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {cards.map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index >= currentSlide && index < currentSlide + 3
                ? "bg-black"
                : "bg-blue-600 "
            }`}
            aria-current={index >= currentSlide && index < currentSlide + 3}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute text-white py-1 px-1 bg-blue-400 lg top-52 rounded-xl  "
        data-carousel-prev
        onClick={handlePrev}
      >
        Prev
      </button>

      <button
        type="button"
        className="absolute top-52 end-0 py-1 px-1 bg-blue-400 text-white z-30 rounded-xl "
        data-carousel-next
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
