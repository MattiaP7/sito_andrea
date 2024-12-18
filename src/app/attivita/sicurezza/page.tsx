import Link from "next/link";
import Image from "next/image";
import React from "react";

import { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Andrea Corazza - Sicurezza",
  description:
    "Pagina dedicata alla sicurezza nei cantieri e nei luoghi di lavoro, gestita da Andrea Corazza.",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sezione di copertura con immagine */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <Image
          src="/static/image/sicurezza_generale.jpg"
          alt="Sicurezza generale"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
          <h1 className="text-4xl sm:text-5xl font-semibold">
            Sicurezza nei Cantieri e nei Luoghi di Lavoro
          </h1>
        </div>
      </section>

      {/* Sezione Sicurezza nei Cantieri */}
      <section className="px-4 py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Sicurezza nei Cantieri
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Immagine */}
            <div className="relative">
              <Image
                src="/static/image/sicurezza_cantieri.jpg"
                alt="Sicurezza nei cantieri"
                width={1920}
                height={1080}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {/* Contenuto */}
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                All’interno del D.Lgs. 81/‘08 è presente il Titolo IV che tratta
                specificamente dei Cantieri Temporanei e Mobili. Nei cantieri in
                cui operano più di una impresa esecutrice, o lavoratori
                autonomi, è necessario nominare il Coordinatore per la Sicurezza
                in fase di Progettazione (CSP) ed Esecuzione dell’opera (CSE).
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="documentazione-cantieri">
                  <AccordionTrigger>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Legislazione e Documentazione
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed">
                      Il Piano di Sicurezza e Coordinamento (PSC) è un documento
                      tecnico che analizza le fasi di lavoro svolte in un
                      cantiere in relazione al contesto dell’area di lavoro.
                      Include elaborati grafici integrativi e considera sia
                      l’interno che l’esterno del cantiere.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="attivita-cantieri">
                  <AccordionTrigger>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Principali attività
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    {" "}
                    <ul className=" text-gray-600 leading-relaxed ">
                      <li>
                        Incarico di CSP e CSE (congiuntamente o singolarmente)
                      </li>
                      <li>Elaborazione di PSC</li>
                      <li>Elaborazione di POS</li>
                      <li>Elaborazione di PIMUS</li>
                      <li>
                        Piano di Lavoro per smaltimento copertura in
                        cemento-amianto
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Sicurezza nei Luoghi di Lavoro */}
      <section className="px-4 py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Sicurezza nei Luoghi di Lavoro
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contenuto */}
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                La sicurezza nei luoghi di lavoro è essenziale per prevenire
                infortuni e garantire il benessere dei lavoratori. Attraverso
                una corretta pianificazione, formazione e gestione dei rischi, è
                possibile assicurare un ambiente lavorativo sano e produttivo.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="formazione">
                  <AccordionTrigger>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Formazione e Prevenzione
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed">
                      La formazione dei lavoratori rappresenta un elemento
                      chiave nella prevenzione degli incidenti sul lavoro. I
                      corsi di formazione sono progettati per fornire conoscenze
                      e competenze utili a identificare e gestire i rischi
                      specifici di ogni settore.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="normative-lavoro">
                  <AccordionTrigger>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Normative di Riferimento
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed">
                      Il D.Lgs. 81/08 rappresenta il principale riferimento
                      normativo in materia di sicurezza sul lavoro, garantendo
                      la tutela della salute e la sicurezza dei lavoratori in
                      ogni settore produttivo.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Immagine */}
            <div className="relative">
              <Image
                src="/static/image/sicurezza_lavoro.jpg"
                alt="Sicurezza nei luoghi di lavoro"
                width={1920}
                height={1080}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Link per approfondire */}
      <section className="px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/contatti"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
