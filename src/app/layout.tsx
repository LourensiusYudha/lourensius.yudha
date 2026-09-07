import type { Metadata } from "next";
import { Fira_Code, Outfit } from "next/font/google";
import "./globals.css";
import "./portfolio.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lourensiusyudha.my.id"),
  applicationName: "LYK Portfolio",
  title: "Lourensius Yudha | Website & Business Systems Developer",
  description:
    "I build business websites, landing pages, inventory applications, and operational web systems from planning to production deployment.",
  keywords: [
    "Website Developer",
    "Web Developer Indonesia",
    "Business Website Development",
    "Landing Page Developer",
    "Inventory System Developer",
    "Operational System Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Reporting Automation",
  ],
  authors: [{ name: "Lourensius Yudha Kristianto" }],
  creator: "Lourensius Yudha Kristianto",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Lourensius Yudha | Website & Business Systems Developer",
    description: "I build business websites, landing pages, inventory applications, and operational web systems from planning to production deployment.",
    type: "website",
    url: "/",
    siteName: "Lourensius Yudha Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lourensius Yudha | Website & Business Systems Developer",
    description: "I build business websites, landing pages, inventory applications, and operational web systems from planning to production deployment.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-lang="en"
      data-theme="light"
      className={`${outfit.variable} ${fira.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
