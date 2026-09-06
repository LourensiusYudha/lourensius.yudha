import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lourensius Yudha Kristianto Portfolio",
    short_name: "LYK Portfolio",
    description: "Systems development, reporting automation, IT support, and infrastructure portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f0e9",
    theme_color: "#2457f5",
    icons: [
      {
        src: "/icons/lyk-app-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/lyk-app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/lyk-app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
