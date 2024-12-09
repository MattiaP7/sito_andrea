import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Corazza - page not found",
  description: "Pagina non trovata nel sito di Andrea Corazza",
};

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-red-500 animate-bounce">
          404
        </h1>
        <p className="text-xl md:text-2xl">
          Oops! La pagina che stai cercando non esiste.
        </p>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
          La pagina potrebbe essere stata spostata o rimossa.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
