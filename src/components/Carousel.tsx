"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { Card, CardContent } from "@/components/ui/Card";

import Image from "next/image";
import Link from "next/link";
import { cards } from "@/data/cards";

export default function CarouselHome() {
  return (
    <Carousel className="relative w-full">
      <br />
      <CarouselContent>
        {cards.map((image, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full">
            <div className="relative w-full">
              <Card className="w-full">
                <CardContent className="p-0">
                  <Link href={image.link}>
                    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1920}
                        height={1080}
                        loading="eager" // Forza il caricamento immediato
                        priority={true} // Dà priorità a questa immagine
                        className="object-cover w-full h-full rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                        <span className="text-3xl font-semibold">
                          {image.title}
                        </span>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        aria-label="Precedente"
      >
        &lt;
      </CarouselPrevious>
      <CarouselNext
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        aria-label="Sucessivo"
      >
        &gt;
      </CarouselNext>
    </Carousel>
  );
}
