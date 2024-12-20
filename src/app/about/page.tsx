import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Corazza - pagina about",
  description: "Sito internet di Andrea Corazza, about page",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl">in fase di creazione... v2.3</div>
    </div>
  );
};

export default Page;
