import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "", // lascia vuoto se non usi una porta specifica
        pathname: "/**", // consente tutte le immagini da questo dominio
      },
    ],
  },
};

export default nextConfig;
