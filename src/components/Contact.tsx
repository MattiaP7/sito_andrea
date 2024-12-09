"use client";

import { sendEmail } from "@/lib/send-email";
import { FC } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          placeholder="Inserisci il tuo nome"
          className="w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-700 py-3 px-4 text-sm text-gray-700 dark:text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="esempio@dominio.com"
          className="w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-700 py-3 px-4 text-sm text-gray-700 dark:text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Oggetto
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Inserisci l'oggetto"
          className="w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-700 py-3 px-4 text-sm text-gray-700 dark:text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          {...register("subject", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Messaggio
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Scrivi il tuo messaggio"
          className="w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-700 py-3 px-4 text-sm text-gray-700 dark:text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 font-semibold transition-all duration-200"
        >
          Invia Messaggio
        </button>
      </div>
    </form>
  );
};

export default Contact;
