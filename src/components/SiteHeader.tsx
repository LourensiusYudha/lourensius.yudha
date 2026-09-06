"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
type Language = "en" | "id";

const themeEvent = "portfolio-theme";
const languageEvent = "portfolio-language";

const subscribeToTheme = (callback: () => void) => {
  window.addEventListener(themeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(themeEvent, callback);
    window.removeEventListener("storage", callback);
  };
};

const subscribeToLanguage = (callback: () => void) => {
  window.addEventListener(languageEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(languageEvent, callback);
    window.removeEventListener("storage", callback);
  };
};

const getThemeSnapshot = (): Theme => {
  const storedTheme = window.localStorage.getItem("portfolio-theme");
  if (storedTheme === "dark" || storedTheme === "light") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getLanguageSnapshot = (): Language =>
  window.localStorage.getItem("portfolio-language") === "id" ? "id" : "en";

const getServerThemeSnapshot = (): Theme => "light";
const getServerLanguageSnapshot = (): Language => "en";

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("portfolio-theme", theme);
  window.dispatchEvent(new Event(themeEvent));
};

const applyLanguage = (language: Language) => {
  document.documentElement.dataset.lang = language;
  document.documentElement.lang = language;
  window.localStorage.setItem("portfolio-language", language);
  window.dispatchEvent(new CustomEvent(languageEvent, { detail: language }));
};

export function SiteHeader({ audience = "recruiters" }: { audience?: "recruiters" | "clients" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  const language = useSyncExternalStore(subscribeToLanguage, getLanguageSnapshot, getServerLanguageSnapshot);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navItems = audience === "clients" ? [
    { href: "/services/#services", en: "Services", id: "Layanan" },
    { href: "/services/#case-studies", en: "Case studies", id: "Studi kasus" },
    { href: "/services/#process", en: "Process", id: "Proses" },
    { href: "/services/#contact", en: "Contact", id: "Kontak" },
    { href: "/", en: "Career portfolio", id: "Profil karier" },
  ] : [
    { href: "/#experience", en: "Experience", id: "Pengalaman" },
    { href: "/#certifications", en: "Certification", id: "Sertifikasi" },
    { href: "/#work", en: "Work", id: "Karya" },
    { href: "/#skills", en: "Skills", id: "Keahlian" },
    { href: "/#contact", en: "Contact", id: "Kontak" },
    { href: "/services/", en: "Services", id: "Layanan" },
  ];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.lang = language;
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  const toggleLanguage = () => {
    const nextLanguage: Language = language === "id" ? "en" : "id";
    applyLanguage(nextLanguage);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        <span className="lang-copy lang-en">Skip to main content</span>
        <span className="lang-copy lang-id">Lewati ke konten utama</span>
      </a>
      <header className="site-header">
        <Link className="site-mark" href="/" aria-label="Lourensius Yudha Kristianto, home">
          LYK
        </Link>

        <nav id="mobile-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              <span className="lang-copy lang-en">{item.en}</span>
              <span className="lang-copy lang-id">{item.id}</span>
            </Link>
          ))}
          {audience === "recruiters" && <a className="mobile-resume-link" href="/files/CV-Yudha.pdf" download onClick={closeMenu}>
            <span className="lang-copy lang-en">Download CV</span>
            <span className="lang-copy lang-id">Unduh CV</span>
          </a>}
          <div className="mobile-nav-controls">
            <button
              type="button"
              className="text-toggle"
              onClick={toggleLanguage}
              aria-label={language === "en" ? "Current language English. Switch to Indonesian" : "Bahasa aktif Indonesia. Ganti ke bahasa Inggris"}
            >
              {language.toUpperCase()}
            </button>
            <button
              type="button"
              className="text-toggle theme-toggle"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
              aria-label={theme === "dark" ? "Dark theme active. Switch to light theme" : "Light theme active. Switch to dark theme"}
            >
              {theme === "dark" ? (language === "id" ? "Gelap" : "Dark") : (language === "id" ? "Terang" : "Light")}
            </button>
          </div>
        </nav>

        <div className="site-controls">
          <button
            type="button"
            className="text-toggle desktop-toggle"
            onClick={toggleLanguage}
            aria-label={language === "en" ? "Current language English. Switch to Indonesian" : "Bahasa aktif Indonesia. Ganti ke bahasa Inggris"}
          >
            {language.toUpperCase()}
          </button>
          <button
            type="button"
            className="text-toggle theme-toggle desktop-toggle"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={theme === "dark" ? "Dark theme active. Switch to light theme" : "Light theme active. Switch to dark theme"}
          >
            {theme === "dark" ? (language === "id" ? "Gelap" : "Dark") : (language === "id" ? "Terang" : "Light")}
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            data-label={menuOpen ? (language === "id" ? "Tutup" : "Close") : "Menu"}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? (language === "id" ? "Tutup menu navigasi" : "Close navigation menu") : (language === "id" ? "Buka menu navigasi" : "Open navigation menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (language === "id" ? "Tutup" : "Close") : "Menu"}
          </button>
        </div>
      </header>
    </>
  );
}
