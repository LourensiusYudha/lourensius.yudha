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
  title: "Lourensius Yudha | Operational Systems Developer",
  description:
    "Explore Lourensius Yudha's experience in operational systems, SQL reporting, IT support, and retail infrastructure. View case studies and download his CV.",
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
    title: "Lourensius Yudha | Operational Systems Developer",
    description: "Career portfolio: operational systems, reporting automation, and hands-on IT operations. Explore experience, project contributions, and CV.",
    type: "website",
    url: "/",
    siteName: "Lourensius Yudha Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lourensius Yudha | Operational Systems Developer",
    description: "Career portfolio: operational systems, reporting automation, and hands-on IT operations. Explore experience, project contributions, and CV.",
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
