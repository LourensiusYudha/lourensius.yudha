import type { Metadata } from "next";
import { Fira_Code, Outfit } from "next/font/google";
import "./globals.css";

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
  title: "Lourensius Yudha Kristianto | IT Systems and Data Specialist",
  description:
    "Portfolio of Lourensius Yudha Kristianto, focused on internal systems, database engineering, reporting automation, and retail operations.",
  openGraph: {
    title: "Lourensius Yudha Kristianto | Portfolio",
    description: "IT systems, database engineering, and retail operations.",
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
