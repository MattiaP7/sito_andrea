import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Corazza - about page",
  description: "Pagina contenente informazioni su Andrea Corazza",
};

const AboutMePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sezione di copertura con immagine */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <Image
          src="/static/image/about-me.jpg"
          alt="About Me"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
          <h1 className="text-4xl sm:text-5xl font-semibold">Chi Sono</h1>
        </div>
      </section>

      {/* Sezione di contenuti */}
      <section className="px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl text-center sm:text-3xl font-semibold text-gray-800 mb-4">
            Benvenuto nel mio spazio personale
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            expedita totam tempore quidem aperiam voluptatibus eligendi, debitis
            deleniti laborum facere voluptatum, odit quam quos minima.
          </p>

          {/* Capitolo: Studi Superiori */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Studi Superiori
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Image
                src="/static/image/studi-superiori.jpg"
                alt="Studi Superiori"
                width={400}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                qui repellat, eum quam dolore in repudiandae dignissimos odit
                laboriosam maiores facilis fugit aliquam, error neque, hic
                necessitatibus nulla? Soluta, voluptas?
              </p>
            </div>
          </div>

          {/* Capitolo: Università */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Università
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Image
                src="/static/image/universita.jpg"
                alt="Università"
                width={400}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis excepturi minus sunt accusantium magni quae
                asperiores, hic perferendis iusto delectus dolore amet voluptate
                porro qui laboriosam vitae voluptatum, assumenda animi neque
                maiores ipsam vero! Quos repudiandae expedita illum quae ipsum
                iste adipisci quo voluptas, nihil omnis molestias. Consequuntur,
                itaque incidunt?
              </p>
            </div>
          </div>

          {/* Capitolo: Esperienze Lavorative */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Esperienze Lavorative
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Image
                src="/static/image/dentro_il_lavoro.jpg"
                alt="Esperienze Lavorative"
                width={400}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus ducimus error quaerat voluptate labore cupiditate,
                dolor repudiandae fugit eius eum sint, saepe eaque temporibus?
                Cumque voluptas dicta sit similique aperiam error placeat quam
                quo, itaque quasi ipsam doloremque eos nam eius culpa tempore
                dolor mollitia, optio id modi nihil commodi!
              </p>
            </div>
          </div>

          {/* Link per altre informazioni */}
          <div className="text-center">
            <Link
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
              href="/contatti"
            >
              Contattami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
