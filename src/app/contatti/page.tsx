import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Corazza - Pagina Contatti",
  description:
    "Sito internet di Andrea Corazza, pagina per mandare un breve messaggio.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6 pt-20">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-8 sm:p-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
            Contattaci
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Hai domande o richieste? Compila il modulo e ti risponderemo il
            prima possibile.
          </p>
        </div>
        <Contact />
      </div>
    </main>
  );
}
