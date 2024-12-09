import type { Metadata } from "next";
import { CarouselHome } from "@/components/Carousel";
import { Button, buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Andrea Corazza",
  description: "Sito internet di Andrea Corazza, esperto in sicurezza",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <CarouselHome />
      </div>
    </div>
  );
}
