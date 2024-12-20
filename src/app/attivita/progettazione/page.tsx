import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Corazza - attività: progettazione",
  description: "Pagina sull'attività della progettazione di Andrea Corazza",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sezione di copertura con immagine */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <Image
          src="/static/image/progettazione.webp"
          alt="Progettazione"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
          <h1 className="text-4xl sm:text-5xl font-semibold">Progettazione</h1>
        </div>
      </section>

      {/* Sezione di contenuti */}
      <section className="px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Cos'è la Progettazione?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            fugit dolorem commodi praesentium, debitis officia sunt, magni,
            sequi explicabo obcaecati exercitationem quis modi laboriosam
            voluptate aliquid maxime nobis! Rem obcaecati laborum corporis
            accusamus labore, harum illum earum, inventore maxime, aut molestias
            ex! Temporibus repellat aspernatur ut, excepturi aut necessitatibus
            iste velit amet vitae ea rerum alias, sunt nihil repellendus autem
            nesciunt ipsum, corrupti rem porro quisquam! Debitis quam vero quod
            accusantium laborum ut natus at voluptates hic repellat aperiam
            dolores, commodi molestias atque illo omnis? Cumque fugit nulla id
            quia ipsam placeat praesentium tempore, et pariatur, perspiciatis,
            perferendis sit aliquid?
          </p>

          {/* Link per altre pagine */}
          <div className="text-center">
            <Link
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
              href="/altre-pagine"
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
