import * as React from "react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { cards } from "@/data/cards";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Corazza - pagina delle attivita",
  description: "Pagina che illustra tutte le attivà di Andrea Corazza",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 flex flex-col items-center">
      <br />
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        Le attività offerte
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} className="w-full max-w-[350px] mx-auto">
            <Image
              src={card.src}
              alt={card.title}
              width={350}
              height={200}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <CardHeader>
              <CardTitle className="text-center">{card.title}</CardTitle>
              <CardDescription>{card.sub_title}</CardDescription>
            </CardHeader>
            <CardContent>{card.description}</CardContent>
            <CardFooter className="flex justify-between content-center">
              <Button
                className="content-center flex justify-center"
                variant="outline"
              >
                <Link href={card.link}>Vai alla pagina</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
