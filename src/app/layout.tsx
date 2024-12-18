import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import CookieConsentToast from "@/components/CookieConsentToast";
//import MobileMenu from "@/components/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrea Corazza",
  description: "Sito intenet di Andrea Corazza, esperto in sicurezza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 antialiased">
        <Navbar />
        <main>{children}</main>

        {/*<CookieConsentToast />*/}

        <Footer />
      </body>
    </html>
  );
}
