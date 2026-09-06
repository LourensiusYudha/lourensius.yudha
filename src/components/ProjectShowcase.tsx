"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { projects, type Locale } from "@/lib/portfolio-data";

const subscribeLanguage = (callback: () => void) => {
  window.addEventListener("portfolio-language", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("portfolio-language", callback);
    window.removeEventListener("storage", callback);
  };
};

const getLanguage = (): Locale => window.localStorage.getItem("portfolio-language") === "id" ? "id" : "en";
const getServerLanguage = (): Locale => "en";

const compactTech = (tech: string[]) => tech.slice(0, 4);

export function ProjectShowcase({ audience = "recruiters" }: { audience?: "recruiters" | "clients" }) {
  const locale = useSyncExternalStore(subscribeLanguage, getLanguage, getServerLanguage);
  const featuredProjectIndexes = audience === "clients" ? [0, 5, 2] : [0, 5, 6];
  const supportingProjectIndexes = audience === "clients" ? [4, 3] : [4, 1, 2, 3];

  return (
    <div className="project-showcase">
      <div className="featured-projects">
        {featuredProjectIndexes.map((index) => {
          const project = projects[index];
          const href = `/work/${project.slug}`;
          const remainingTech = project.tech.length - compactTech(project.tech).length;

          return (
            <article className={`featured-project featured-project-${index + 1}`} key={project.slug}>
              <figure className="featured-project-visual">
                <Link
                  className="featured-project-media project-media-action"
                  href={href}
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
                {project.conceptVisual ? (
                  <figcaption>
                    {locale === "id"
                      ? "Visual konsep untuk merepresentasikan sistem operasional dengan akses terbatas."
                      : "Concept visual representing an operational system with restricted access."}
                  </figcaption>
                ) : null}
              </figure>

              <div className="featured-project-body">
                <span className="project-category">{project.category[locale]}</span>
                <h3>{project.title[locale]}</h3>
                <p className="featured-project-summary">{project.summary[locale]}</p>

                <dl className="featured-project-metrics">
                  {project.impacts[locale].map((impact, impactIndex) => (
                    <div key={impact}>
                      <dt>
                        {project.impactLabels?.[locale][impactIndex]
                          ?? (locale === "id" ? "Hasil" : "Outcome")}
                      </dt>
                      <dd>{impact}</dd>
                    </div>
                  ))}
                </dl>

                <div className="featured-project-contribution">
                  <span>{locale === "id" ? "Kontribusi saya" : "My contribution"}</span>
                  <p>{project.contribution[locale]}</p>
                </div>

                <div className="project-tech-list" aria-label={locale === "id" ? "Teknologi utama" : "Core technologies"}>
                  {compactTech(project.tech).map((item) => <span key={item}>{item}</span>)}
                  {remainingTech > 0 ? (
                    <span>{locale === "id" ? `+${remainingTech} lainnya` : `+${remainingTech} more`}</span>
                  ) : null}
                </div>

                <Link className="project-detail-button" href={href}>
                  {locale === "id" ? "Baca studi kasus lengkap" : "Read full case study"}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="supporting-projects-header">
        <h3>{locale === "id" ? "Sistem dan otomatisasi lainnya" : "More systems and automation"}</h3>
        <p>
          {locale === "id"
            ? (audience === "clients" ? "Contoh otomatisasi laporan dan website yang dapat menjadi acuan kebutuhan project Anda." : "Project tambahan yang menunjukkan jangkauan pekerjaan development dan operasional saya.")
            : (audience === "clients" ? "Reporting automation and website examples to inform your next project." : "Additional projects showing the range of my development and operational work.")}
        </p>
      </div>

      <div className="supporting-projects">
        {supportingProjectIndexes.map((index) => {
          const project = projects[index];
          const href = `/work/${project.slug}`;
          const remainingTech = project.tech.length - compactTech(project.tech).length;

          return (
            <article className={`supporting-project supporting-project-${index + 1}`} key={project.slug}>
              <Link
                className="supporting-project-media project-media-action"
                href={href}
                aria-label={`${locale === "id" ? "Baca studi kasus lengkap" : "Read full case study"}: ${project.title[locale]}`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt[locale]}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  style={{ objectPosition: project.imagePosition ?? "center" }}
                />
              </Link>

              <div className="supporting-project-body">
                <span className="project-category">{project.category[locale]}</span>
                <h4>{project.title[locale]}</h4>
                <p>{project.summary[locale]}</p>
                <div className="supporting-project-evidence">
                  <span>{locale === "id" ? "Hasil utama" : "Key outcome"}</span>
                  <strong>{project.impacts[locale][0]}</strong>
                </div>
                <div className="project-tech-list" aria-label={locale === "id" ? "Teknologi utama" : "Core technologies"}>
                  {compactTech(project.tech).map((item) => <span key={item}>{item}</span>)}
                  {remainingTech > 0 ? (
                    <span>{locale === "id" ? `+${remainingTech} lainnya` : `+${remainingTech} more`}</span>
                  ) : null}
                </div>
                <Link className="project-text-link" href={href}>
                  {locale === "id" ? "Baca studi kasus" : "Read case study"}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
