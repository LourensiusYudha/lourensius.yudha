import type { Metadata } from "next";
import { Bebas_Neue, Fira_Code, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: "400",
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Lourensius Yudha Kristianto – IT Portfolio",
  description:
    "IT portfolio of Lourensius Yudha Kristianto - System Developer, Database Specialist, and Retail Data Analyst.",
  openGraph: {
    title: "Lourensius Yudha Kristianto – IT Portfolio",
    description: "System Developer · Database Specialist · Retail Data Analyst",
    images: ["/images/yudha.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${outfit.variable} ${bebas.variable} ${fira.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
