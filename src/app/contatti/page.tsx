import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Corazza - pagina contatti",
  description:
    "Sito internet di Andrea Corazza, pagina per mandare un breve messaggio",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <div className="w-full max-w-5xl flex flex-col items-center space-y-12">
        <br />
        <br />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Contattaci
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl">
          Hai domande, richieste o messaggi brevi? Compila il modulo qui sotto e
          ti risponderemo il prima possibile.
        </p>
        <Contact />
      </div>
    </main>
  );
}
