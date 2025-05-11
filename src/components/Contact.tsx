"use client";

import { sendEmail } from "@/lib/send-email";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const MAX_MESSAGE_LENGTH = 500;

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [charCount, setCharCount] = useState(0);

  // Aggiorna il conteggio dei caratteri dinamicamente
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCharCount(value.length);
  };

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl bg-transparent p-8 rounded-lg shadow-md space-y-6 mx-auto"
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          Nome Completo
        </label>
        <input
          required
          type="text"
          id="name"
          placeholder="Inserisci il tuo nome"
          className="w-full rounded-lg border border-gray-300 bg-transparent dark:bg-transparent py-3 px-4 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          placeholder="esempio@dominio.com"
          className="w-full rounded-lg border border-gray-300 bg-transparent dark:bg-transparent py-3 px-4 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          Oggetto
        </label>
        <input
          required
          type="text"
          id="subject"
          placeholder="Inserisci l'oggetto"
          className="w-full rounded-lg border border-gray-300 bg-transparent dark:bg-transparent py-3 px-4 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
          {...register("subject", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          Messaggio
        </label>
        <textarea
          required
          id="message"
          rows={5}
          maxLength={MAX_MESSAGE_LENGTH}
          placeholder={`Scrivi il tuo messaggio (max ${MAX_MESSAGE_LENGTH} caratteri)`}
          className="w-full rounded-lg border border-gray-300 bg-transparent dark:bg-transparent py-3 px-4 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
          {...register("message", { required: true })}
          onChange={handleMessageChange}
        ></textarea>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Caratteri rimanenti: {MAX_MESSAGE_LENGTH - charCount}
        </div>
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
