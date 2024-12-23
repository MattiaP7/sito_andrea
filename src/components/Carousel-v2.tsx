"use client";

import { useState } from "react";
import { cards } from "@/data/cards";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CarouselHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center mt-20">
      {/* Aggiunto `mt-20` per evitare la sovrapposizione alla navbar */}
      <div className="relative w-full h-[70vh] overflow-hidden rounded-lg shadow-lg">
        {cards.map((card, index) => (
          <Link
            key={card.title}
            href={card.link}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold bg-black/30">
              {card.title}
            </h1>
          </Link>
        ))}
        <button
          onClick={handlePrevious}
          aria-label="Previous"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 sm:p-4 bg-black/50 text-white rounded-full hover:bg-black/70"
        >
          <ArrowLeft className="w-6 h-6 sm:w-4 sm:h-4" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 sm:p-4 bg-black/50 text-white rounded-full hover:bg-black/70"
        >
          <ArrowRight className="w-6 h-6 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default CarouselHome;
