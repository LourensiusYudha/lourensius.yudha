"use client";

import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { projects, type Locale } from "@/lib/portfolio-data";

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
  const featuredProjectIndexes = [0, 5];
  const supportingProjectIndexes = [1, 2, 3, 4];

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
      <div className="project-showcase">
        <div className="featured-projects">
          {featuredProjectIndexes.map((index) => {
            const project = projects[index];
            return (
              <article className={`featured-project featured-project-${index + 1}`} key={project.title.en}>
                <figure className="featured-project-visual">
                  <div className="featured-project-media">
                    <Image
                      src={project.image}
                      alt={project.imageAlt[locale]}
                      fill
                      sizes="(max-width: 767px) 100vw, 58vw"
                      style={{ objectPosition: project.imagePosition ?? "center" }}
                    />
                  </div>
                  {project.conceptVisual ? (
                    <figcaption>{locale === "id" ? "Visual konsep untuk merepresentasikan sistem yang bersifat internal." : "Concept visual representing a private internal system."}</figcaption>
                  ) : null}
                </figure>
                <div className="featured-project-body">
                  <span className="project-category">{project.category[locale]}</span>
                  <h3>{project.title[locale]}</h3>
                  <p className="featured-project-summary">{project.summary[locale]}</p>

                  <dl className="featured-project-metrics">
                    {project.impacts[locale].map((impact, impactIndex) => (
                      <div key={impact}>
                        <dt>{project.impactLabels?.[locale][impactIndex] ?? (locale === "id" ? "Hasil" : "Outcome")}</dt>
                        <dd>{impact}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="featured-project-contribution">
                    <span>{locale === "id" ? "Kontribusi saya" : "My contribution"}</span>
                    <p>{project.contribution[locale]}</p>
                  </div>

                  <div className="project-tech-list" aria-label={locale === "id" ? "Teknologi" : "Technologies"}>
                    {project.tech.map((item) => <span key={item}>{item}</span>)}
                  </div>

                  <motion.button
                    className="project-detail-button"
                    type="button"
                    onClick={() => setSelected(index)}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.2 }}
                  >
                    {locale === "id" ? "Baca studi kasus" : "Read case study"}
                    <span aria-hidden="true">↗</span>
                  </motion.button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="supporting-projects-header">
          <h3>{locale === "id" ? "Sistem dan otomatisasi lainnya" : "More systems and automation"}</h3>
          <p>{locale === "id" ? "Project tambahan yang menunjukkan jangkauan pekerjaan development dan operasional saya." : "Additional projects showing the range of my development and operational work."}</p>
        </div>

        <div className="supporting-projects">
          {supportingProjectIndexes.map((index) => {
            const project = projects[index];
            return (
              <article className={`supporting-project supporting-project-${index + 1}`} key={project.title.en}>
                <div className="supporting-project-media">
                  <Image
                    src={project.image}
                    alt={project.imageAlt[locale]}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    style={{ objectPosition: project.imagePosition ?? "center" }}
                  />
                </div>
                <div className="supporting-project-body">
                  <span className="project-category">{project.category[locale]}</span>
                  <h4>{project.title[locale]}</h4>
                  <p>{project.summary[locale]}</p>
                  <div className="supporting-project-evidence">
                    <span>{locale === "id" ? "Hasil utama" : "Key outcome"}</span>
                    <strong>{project.impacts[locale][0]}</strong>
                  </div>
                  <div className="project-tech-list" aria-label={locale === "id" ? "Teknologi" : "Technologies"}>
                    {project.tech.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <button className="project-text-link" type="button" onClick={() => setSelected(index)}>
                    {locale === "id" ? "Lihat detail" : "View details"}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

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
                <div className="dialog-contribution">
                  <span>{locale === "id" ? "Kontribusi saya" : "My contribution"}</span>
                  <p>{projects[selected].contribution[locale]}</p>
                </div>
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
                {projects[selected].documentationUrl || projects[selected].demoUrl ? (
                  <div className="dialog-resources">
                    {projects[selected].documentationUrl ? (
                      <section className="dialog-resource">
                        <span className="dialog-resource-label">{locale === "id" ? "Dokumentasi" : "Documentation"}</span>
                        <p>{locale === "id" ? "Catatan teknis, alur kerja, dan detail implementasi project." : "Technical notes, workflow, and implementation details for this project."}</p>
                      <a href={projects[selected].documentationUrl} target="_blank" rel="noreferrer">
                        {locale === "id" ? "Buka dokumentasi" : "Open documentation"} <span aria-hidden="true">↗</span>
                      </a>
                      </section>
                    ) : null}
                    {projects[selected].demoUrl ? (
                      <section className="dialog-resource">
                        <span className="dialog-resource-label">{locale === "id" ? "Demo website" : "Website demo"}</span>
                        <p>{locale === "id" ? "Akses langsung ke versi project yang sudah di-hosting." : "Direct access to the hosted version of this project."}</p>
                      <a href={projects[selected].demoUrl} target="_blank" rel="noreferrer">
                        {locale === "id" ? "Lihat demo" : "View demo"} <span aria-hidden="true">↗</span>
                      </a>
                      </section>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </MotionConfig>
  );
}
