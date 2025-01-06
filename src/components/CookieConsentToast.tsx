"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const cookieSchema = z.enum(["accepted", "declined"]).optional();
const COOKIE_NAME = "cookie-consent";

export default function CookieConsentToast() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const cookieValue = Cookies.get(COOKIE_NAME);
    const parsedCookie = cookieSchema.safeParse(cookieValue);
    if (!parsedCookie.success || !parsedCookie.data) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set(COOKIE_NAME, "accepted", { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set(COOKIE_NAME, "declined", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50 mx-auto w-[90%] max-w-md rounded-lg bg-white p-4 shadow-lg sm:flex sm:items-center sm:justify-between",
        "sm:w-full"
      )}
    >
      <div className="text-sm text-gray-700">
        Utilizziamo cookie tecnici per migliorare l'esperienza utente. Nessun
        dato personale viene raccolto.
      </div>
      <div className="mt-2 flex justify-end gap-2 sm:mt-0">
        <Button
          onClick={handleAccept}
          className="bg-green-500 text-white hover:bg-green-700"
        >
          Accetto
        </Button>
        <Button
          onClick={handleDecline}
          className="bg-gray-500 text-white hover:bg-gray-600"
        >
          Rifiuto
        </Button>
      </div>
    </div>
  );
}
