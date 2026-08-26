"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type Language = "en" | "id";

const setTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("portfolio-theme", theme);
};

const setLanguage = (language: Language) => {
  document.documentElement.dataset.lang = language;
  document.documentElement.lang = language;
  window.localStorage.setItem("portfolio-language", language);
  window.dispatchEvent(new CustomEvent("portfolio-language", { detail: language }));
};

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const storedLanguage = window.localStorage.getItem("portfolio-language");
    const initialTheme: Theme = storedTheme === "dark" ? "dark" : "light";
    const initialLanguage: Language = storedLanguage === "id" ? "id" : "en";
    setTheme(initialTheme);
    setLanguage(initialLanguage);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const toggleLanguage = () => {
    const nextLanguage: Language = document.documentElement.dataset.lang === "id" ? "en" : "id";
    setLanguage(nextLanguage);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="site-mark" href="#home" aria-label="Lourensius Yudha Kristianto, home">
        LYK
      </a>

      <nav id="mobile-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        <a href="#work" onClick={closeMenu}>
          <span className="lang-copy lang-en">Work</span>
          <span className="lang-copy lang-id">Karya</span>
        </a>
        <a href="#skills" onClick={closeMenu}>
          <span className="lang-copy lang-en">Skills</span>
          <span className="lang-copy lang-id">Keahlian</span>
        </a>
        <a href="#experience" onClick={closeMenu}>
          <span className="lang-copy lang-en">Experience</span>
          <span className="lang-copy lang-id">Pengalaman</span>
        </a>
        <a href="#contact" onClick={closeMenu}>
          <span className="lang-copy lang-en">Contact</span>
          <span className="lang-copy lang-id">Kontak</span>
        </a>
        <a className="mobile-resume-link" href="/files/CV-Yudha.pdf" download onClick={closeMenu}>
          <span className="lang-copy lang-en">Download CV</span>
          <span className="lang-copy lang-id">Unduh CV</span>
        </a>
        <div className="mobile-nav-controls">
          <button type="button" className="text-toggle" onClick={toggleLanguage} aria-label="Toggle language between English and Indonesian">
            ID / EN
          </button>
          <button type="button" className="text-toggle theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark theme">
            Theme
          </button>
        </div>
      </nav>

      <div className="site-controls">
        <button
          type="button"
          className="text-toggle desktop-toggle"
          onClick={toggleLanguage}
          aria-label="Toggle language between English and Indonesian"
        >
          ID / EN
        </button>
        <button
          type="button"
          className="text-toggle theme-toggle desktop-toggle"
          onClick={toggleTheme}
          aria-label="Toggle light and dark theme"
        >
          Theme
        </button>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
