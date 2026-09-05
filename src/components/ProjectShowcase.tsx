"use client";

import Image from "next/image";
import Link from "next/link";
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
                  {index === 0 ? (
                    <Link
                      className="featured-project-media project-media-action"
                      href="/work/grand-opening-gorontalo"
                      aria-label={`${locale === "id" ? "Baca studi kasus lengkap" : "Read full case study"}: ${project.title[locale]}`}
                    >
                      <Image
                        src={project.image}
                        alt={project.imageAlt[locale]}
                        fill
                        sizes="(max-width: 767px) 100vw, 58vw"
                        style={{ objectPosition: project.imagePosition ?? "center" }}
                      />
                    </Link>
                  ) : (
                    <button
                      className="featured-project-media project-media-action"
                      type="button"
                      onClick={() => setSelected(index)}
                      aria-label={`${locale === "id" ? "Buka detail" : "Open details"}: ${project.title[locale]}`}
                    >
                      <Image
                        src={project.image}
                        alt={project.imageAlt[locale]}
                        fill
                        sizes="(max-width: 767px) 100vw, 58vw"
                        style={{ objectPosition: project.imagePosition ?? "center" }}
                      />
                    </button>
                  )}
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

                  {index === 0 ? (
                    <Link className="project-detail-button" href="/work/grand-opening-gorontalo">
                      {locale === "id" ? "Baca studi kasus lengkap" : "Read full case study"}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
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
                  )}
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
                <button
                  className="supporting-project-media project-media-action"
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-label={`${locale === "id" ? "Buka detail" : "Open details"}: ${project.title[locale]}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt[locale]}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    style={{ objectPosition: project.imagePosition ?? "center" }}
                  />
                </button>
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
                {projects[selected].gallery?.length ? (
                  <section className="dialog-gallery" aria-labelledby="dialog-gallery-title">
                    <div className="dialog-section-heading">
                      <h4 id="dialog-gallery-title">{locale === "id" ? "Tampilan utama sistem" : "Key system screens"}</h4>
                      <p>{locale === "id" ? "Buka gambar untuk melihat detail dalam ukuran penuh." : "Open an image to inspect the interface at full size."}</p>
                    </div>
                    <div className="dialog-gallery-list">
                      {projects[selected].gallery.map((item) => (
                        <figure key={item.src} className="dialog-gallery-item">
                          <a
                            className="dialog-gallery-media"
                            href={item.src}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${locale === "id" ? "Buka gambar ukuran penuh" : "Open full-size image"}: ${item.caption[locale]}`}
                          >
                            <Image
                              src={item.src}
                              alt={item.alt[locale]}
                              fill
                              sizes="(max-width: 767px) calc(100vw - 48px), 820px"
                            />
                          </a>
                          <figcaption>{item.caption[locale]}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </section>
                ) : null}
                <div className="dialog-outcomes">
                  {projects[selected].impacts[locale].map((impact) => (
                    <div key={impact}>{impact}</div>
                  ))}
                </div>
                {projects[selected].techGroups?.length ? (
                  <section className="dialog-tech-stack" aria-labelledby="dialog-tech-stack-title">
                    <div className="dialog-section-heading">
                      <h4 id="dialog-tech-stack-title">{locale === "id" ? "Tech stack yang digunakan" : "Technology stack"}</h4>
                    </div>
                    <div className="dialog-tech-groups">
                      {projects[selected].techGroups.map((group) => (
                        <section className="dialog-tech-group" key={group.name.en}>
                          <h5>{group.name[locale]}</h5>
                          <ul>
                            {group.items.map((item) => (
                              <li key={item.name}>
                                <strong>{item.name}</strong>
                                <span>{item.description[locale]}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </section>
                ) : (
                  <div className="dialog-tech">
                    {projects[selected].tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                )}
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
