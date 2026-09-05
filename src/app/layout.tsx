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
  title: "Lourensius Yudha Kristianto | IT Developer, Support and Infrastructure",
  description:
    "Portfolio of Lourensius Yudha Kristianto, an IT Developer and Support professional open to remote roles and selected international projects.",
  keywords: [
    "IT Developer",
    "IT Support",
    "IT Infrastructure",
    "System Developer",
    "Database Optimization",
    "Reporting Automation",
    "Remote IT",
  ],
  authors: [{ name: "Lourensius Yudha Kristianto" }],
  creator: "Lourensius Yudha Kristianto",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lourensius Yudha Kristianto | IT Developer",
    description: "IT development, support, infrastructure, database systems, and operational automation.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lourensius Yudha Kristianto | IT Developer",
    description: "IT development, support, infrastructure, database systems, and operational automation.",
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
