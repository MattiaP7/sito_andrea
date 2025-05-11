import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Corazza - attività: catasto",
  description: "Pagina sull'attività del catasto di Andrea Corazza",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <Image
          src="/static/image/catasto.webp"
          alt="Catasto"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
          <h1 className="text-4xl sm:text-5xl font-semibold">Catasto</h1>
        </div>
      </section>

      <section className="px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Pratiche catastali e rilievi topografici
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            Le pratiche di aggiornamento catastale e i rilievi topografici sono
            fondamentali per la gestione del territorio, la pianificazione
            urbanistica e la regolarizzazione delle proprietà immobiliari.
            Queste operazioni richiedono competenze tecniche specifiche e una
            conoscenza approfondita delle normative vigenti.
          </p>

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
