"use client";

import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { projects, type Locale } from "@/lib/portfolio-data";
import { StickyScroll } from "@/components/StickyScroll";

const subscribeLanguage = (callback: () => void) => {
  window.addEventListener("portfolio-language", callback);
  return () => window.removeEventListener("portfolio-language", callback);
};

const getLanguage = (): Locale => document.documentElement.dataset.lang === "id" ? "id" : "en";
const getServerLanguage = (): Locale => "en";

export function ProjectShowcase() {
  const [selected, setSelected] = useState<number | null>(null);
  const locale = useSyncExternalStore(subscribeLanguage, getLanguage, getServerLanguage);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (selected === null) return;
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusRef.current?.focus();
    };
  }, [selected]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="project-grid" data-projects-stack>
        {projects.map((project, index) => (
          <div className={`project-stack-item project-card-${index + 1}`} key={project.title.en}>
            <motion.button
              className="project-card"
              type="button"
              onClick={() => setSelected(index)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`${locale === "id" ? "Buka detail" : "Open details"}: ${project.title[locale]}`}
            >
              <span className="project-media">
                <Image
                  src={project.image}
                  alt={project.imageAlt[locale]}
                  fill
                  sizes={index === 0 ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 100vw, 42vw"}
                  style={{ objectPosition: project.imagePosition ?? "center" }}
                />
                <span className="project-copy">
                  <span className="project-heading-row">
                    <span className="project-category">{project.category[locale]}</span>
                    <span className="project-impact">{project.impacts[locale][0]}</span>
                  </span>
                  <strong>{project.title[locale]}</strong>
                  <span className="project-summary">{project.summary[locale]}</span>
                  <span className="project-open">{locale === "id" ? "Buka studi kasus" : "Open case study"} <span aria-hidden="true">↗</span></span>
                  {project.conceptVisual ? (
                    <span className="concept-note">{locale === "id" ? "Visual konsep" : "Concept visual"}</span>
                  ) : null}
                </span>
              </span>
            </motion.button>
          </div>
        ))}
      </div>
      <StickyScroll />

      <AnimatePresence>
        {selected !== null ? (
          <motion.div
            className="project-dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) setSelected(null);
            }}
          >
            <motion.section
              className="project-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              data-lenis-prevent
              initial={{ opacity: 0, y: 28, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.99 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="dialog-topbar">
                <span>{projects[selected].category[locale]}</span>
                <button ref={closeRef} type="button" onClick={() => setSelected(null)}>
                  {locale === "id" ? "Tutup" : "Close"}
                </button>
              </div>
              <div className="dialog-media">
                <Image
                  src={projects[selected].image}
                  alt={projects[selected].imageAlt[locale]}
                  fill
                  sizes="(max-width: 767px) 100vw, 58vw"
                  style={{ objectPosition: projects[selected].imagePosition ?? "center" }}
                />
              </div>
              <div className="dialog-content">
                <h3 id="project-dialog-title">{projects[selected].title[locale]}</h3>
                <div className="dialog-story">
                  {projects[selected].detail[locale].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="dialog-outcomes">
                  {projects[selected].impacts[locale].map((impact) => (
                    <div key={impact}>{impact}</div>
                  ))}
                </div>
                <div className="dialog-tech">
                  {projects[selected].tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="dialog-resources">
                  <section className="dialog-resource">
                    <span className="dialog-resource-label">{locale === "id" ? "Dokumentasi" : "Documentation"}</span>
                    <p>{locale === "id" ? "Catatan teknis, alur kerja, dan detail implementasi project." : "Technical notes, workflow, and implementation details for this project."}</p>
                    {projects[selected].documentationUrl ? (
                      <a href={projects[selected].documentationUrl} target="_blank" rel="noreferrer">
                        {locale === "id" ? "Buka dokumentasi" : "Open documentation"} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="dialog-resource-pending">{locale === "id" ? "Tautan akan ditambahkan" : "Link will be added"}</span>
                    )}
                  </section>
                  <section className="dialog-resource">
                    <span className="dialog-resource-label">{locale === "id" ? "Demo website" : "Website demo"}</span>
                    <p>{locale === "id" ? "Akses langsung ke versi project yang sudah di-hosting." : "Direct access to the hosted version of this project."}</p>
                    {projects[selected].demoUrl ? (
                      <a href={projects[selected].demoUrl} target="_blank" rel="noreferrer">
                        {locale === "id" ? "Lihat demo" : "View demo"} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="dialog-resource-pending">{locale === "id" ? "Demo belum tersedia" : "Demo not available yet"}</span>
                    )}
                  </section>
                </div>
              </div>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </MotionConfig>
  );
}
