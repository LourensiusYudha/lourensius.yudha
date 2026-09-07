import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BilingualText } from "@/components/BilingualText";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { caseStudies } from "@/lib/case-study-data";
import { projects, type PortfolioGalleryImage } from "@/lib/portfolio-data";
import styles from "./case-study.module.css";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const canonical = `/work/${project.slug}`;

  return {
    title: `${project.title.en} | Case Study`,
    description: project.summary.en,
    alternates: { canonical },
    openGraph: {
      title: `${project.title.en} | Case Study`,
      description: project.summary.en,
      type: "article",
      url: canonical,
      images: [{ url: project.image, alt: project.imageAlt.en }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title.en} | Case Study`,
      description: project.summary.en,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const study = caseStudies[slug];

  if (!project || !study) notFound();

  const overview = [
    { label: { en: "My role", id: "Peran saya" }, value: study.overview.role },
    { label: { en: "Users", id: "Pengguna" }, value: study.overview.users },
    { label: { en: "Project status", id: "Status project" }, value: study.overview.status },
  ];

  const screenshots: PortfolioGalleryImage[] = [
    {
      src: project.image,
      alt: project.imageAlt,
      caption: study.coverCaption,
    },
    ...(project.gallery ?? []),
  ];
  const isPhotoProject = project.slug === "grand-opening-gorontalo";
  const projectUrl = `https://lourensiusyudha.my.id/work/${project.slug}/`;
  const creativeWorkStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#case-study`,
    name: project.title.en,
    alternateName: project.title.id,
    url: projectUrl,
    description: project.summary.en,
    image: `https://lourensiusyudha.my.id${project.image}`,
    inLanguage: ["en", "id"],
    about: project.category.en,
    keywords: project.tech.join(", "),
    creator: {
      "@type": "Person",
      "@id": "https://lourensiusyudha.my.id/#person",
      name: "Lourensius Yudha Kristianto",
      url: "https://lourensiusyudha.my.id/",
    },
  };

  return (
    <>
      <StructuredData data={creativeWorkStructuredData} />
      <SiteHeader />
      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <Link className={styles.backLink} href="/#work">
              <span aria-hidden="true">←</span>
              <span className="lang-copy lang-en">Back to selected work</span>
              <span className="lang-copy lang-id">Kembali ke karya terpilih</span>
            </Link>

            <div className={styles.heroGrid}>
              <BilingualText className={styles.category} {...project.category} />
              <div className={styles.heroCopy}>
                <BilingualText as="h1" {...project.title} />
                <BilingualText as="p" className={styles.heroSummary} {...project.summary} />
              </div>
            </div>
            <section className={styles.overview} aria-labelledby="project-at-a-glance">
              <h2 id="project-at-a-glance"><BilingualText en="Project at a glance" id="Ringkasan project" /></h2>
              <dl className={styles.overviewGrid}>
                {overview.map((item) => (
                  <div key={item.label.en}>
                    <dt><BilingualText {...item.label} /></dt>
                    <dd><BilingualText {...item.value} /></dd>
                  </div>
                ))}
                <div className={styles.overviewContribution}>
                  <dt><BilingualText en="My contribution" id="Kontribusi pribadi" /></dt>
                  <dd><BilingualText {...project.contribution} /></dd>
                </div>
                {project.demoUrl ? (
                  <div className={styles.overviewLink}>
                    <dt><BilingualText en="Application" id="Aplikasi" /></dt>
                    <dd>
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        <span className="lang-copy lang-en">Open live application</span>
                        <span className="lang-copy lang-id">Buka aplikasi</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </section>
          </div>
        </section>

        <section className={styles.coverSection} aria-label="Project overview">
          <div className={styles.shell}>
            <figure className={styles.coverFigure}>
              <div className={`${styles.coverFrame} ${isPhotoProject ? styles.photoFrame : styles.interfaceFrame}`}>
                <Image
                  src={project.image}
                  alt={project.imageAlt.en}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 760px) calc(100vw - 32px), calc(100vw - 80px)"
                  style={{ objectPosition: project.imagePosition ?? "center" }}
                />
              </div>
              <BilingualText as="p" className={styles.coverCaption} {...study.coverCaption} />
              <a className={styles.screenshotShortcut} href="#screenshots">
                <span className="lang-copy lang-en">Jump to screenshots</span>
                <span className="lang-copy lang-id">Langsung ke screenshot bukti</span>
                <span aria-hidden="true">↓</span>
              </a>
            </figure>

            <dl className={styles.metricGrid}>
              {project.impacts.en.map((impact, index) => (
                <div key={impact}>
                  <dt>
                    <span className="lang-copy lang-en">
                      {project.impactLabels?.en[index] ?? "Outcome"}
                    </span>
                    <span className="lang-copy lang-id">
                      {project.impactLabels?.id[index] ?? "Hasil"}
                    </span>
                  </dt>
                  <dd>
                    <span className="lang-copy lang-en">{impact}</span>
                    <span className="lang-copy lang-id">{project.impacts.id[index]}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={`${styles.shell} ${styles.storyGrid}`}>
            <BilingualText as="h2" en="The initial problem" id="Masalah awal" />
            <div className={styles.longCopy}>
              {study.problem.map((paragraph) => (
                <BilingualText as="p" key={paragraph.en} {...paragraph} />
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.storySection} ${styles.softSection}`}>
          <div className={`${styles.shell} ${styles.dualSection}`}>
            <article>
              <BilingualText as="h2" en="Role and responsibilities" id="Peran dan tanggung jawab" />
              <div className={styles.longCopy}>
                {study.responsibilities.map((paragraph) => (
                  <BilingualText as="p" key={paragraph.en} {...paragraph} />
                ))}
              </div>
            </article>
            <article>
              <BilingualText as="h2" en="Project constraints" id="Batasan project" />
              <ul className={styles.constraintList}>
                {study.constraints.map((constraint) => (
                  <li key={constraint.en}>
                    <BilingualText {...constraint} />
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.workflowSection}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <BilingualText as="h2" en="How the system works" id="Cara kerja sistem" />
              <BilingualText
                as="p"
                en="A direct path from the first input to the operational result."
                id="Alur langsung dari input pertama hingga hasil operasional."
              />
            </div>
            <div className={styles.workflowGrid}>
              {study.workflow.map((item) => (
                <article key={item.title.en}>
                  <BilingualText as="h3" {...item.title} />
                  <BilingualText as="p" {...item.description} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.decisionSection}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <BilingualText as="h2" en="Technical decisions" id="Keputusan teknis" />
              <BilingualText
                as="p"
                en="The stack was selected around the workflow, deployment environment, and maintenance needs."
                id="Tech stack dipilih berdasarkan workflow, lingkungan deployment, dan kebutuhan pemeliharaan."
              />
            </div>
            <div className={styles.decisionList}>
              {study.decisions.map((decision) => (
                <article key={decision.title.en}>
                  <BilingualText as="h3" {...decision.title} />
                  <BilingualText as="p" {...decision.description} />
                </article>
              ))}
            </div>

            {project.techGroups?.length ? (
              <div className={styles.techGroups}>
                {project.techGroups.map((group) => (
                  <section key={group.name.en}>
                    <BilingualText as="h3" {...group.name} />
                    <div>
                      {group.items.map((item) => (
                        <article key={item.name}>
                          <strong>{item.name}</strong>
                          <BilingualText as="p" {...item.description} />
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className={styles.techList} aria-label="Technology used">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
            )}
          </div>
        </section>

        <section className={styles.screenshotSection} id="screenshots">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <BilingualText as="h2" en="Screens and evidence" id="Screenshot dan bukti" />
              <BilingualText
                as="p"
                en="Each image documents a real part of the interface or delivery."
                id="Setiap gambar mendokumentasikan bagian nyata dari antarmuka atau proses delivery."
              />
            </div>
            {project.galleryGroups?.length ? (
              <div className={styles.screenshotGroups}>
                {project.galleryGroups.map((group) => (
                  <section className={styles.screenshotGroup} key={group.name.en}>
                    <div className={styles.screenshotGroupHeading}>
                      <BilingualText as="h3" {...group.name} />
                      <BilingualText as="p" {...group.description} />
                    </div>
                    <div className={`${styles.screenshotGrid} ${group.layout === "mobile" ? styles.mobileScreenshotGrid : ""}`}>
                      {group.images.map((screenshot) => (
                        <figure key={screenshot.src}>
                          <a
                            className={`${styles.screenshotFrame} ${styles.interfaceFrame}`}
                            href={screenshot.src}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open full-size image: ${screenshot.alt.en}`}
                          >
                            <Image
                              src={screenshot.src}
                              alt={screenshot.alt.en}
                              fill
                              sizes={group.layout === "mobile" ? "(max-width: 760px) 50vw, 33vw" : "(max-width: 760px) calc(100vw - 32px), 50vw"}
                            />
                          </a>
                          <BilingualText as="p" {...screenshot.caption} />
                        </figure>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className={`${styles.screenshotGrid} ${screenshots.length === 1 ? styles.singleScreenshot : ""}`}>
                {screenshots.map((screenshot, index) => (
                  <figure key={`${screenshot.src}-${index}`}>
                    <a
                      className={`${styles.screenshotFrame} ${isPhotoProject ? styles.photoFrame : styles.interfaceFrame}`}
                      href={screenshot.src}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open full-size image: ${screenshot.alt.en}`}
                    >
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt.en}
                        fill
                        sizes={screenshots.length === 1 ? "(max-width: 760px) calc(100vw - 32px), 1100px" : "(max-width: 760px) calc(100vw - 32px), 50vw"}
                        style={{ objectPosition: index === 0 ? project.imagePosition ?? "center" : "center" }}
                      />
                    </a>
                    <BilingualText as="p" {...screenshot.caption} />
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className={styles.resultSection}>
          <div className={`${styles.shell} ${styles.resultLayout}`}>
            <div>
              <BilingualText as="h2" en="Results and outcomes" id="Hasil dan dampak" />
              <BilingualText as="p" className={styles.resultIntro} {...study.resultIntro} />
            </div>
            <div className={styles.resultGrid}>
              {project.impacts.en.map((impact, index) => (
                <article key={impact}>
                  <span>
                    <span className="lang-copy lang-en">
                      {project.impactLabels?.en[index] ?? "Outcome"}
                    </span>
                    <span className="lang-copy lang-id">
                      {project.impactLabels?.id[index] ?? "Hasil"}
                    </span>
                  </span>
                  <p>
                    <span className="lang-copy lang-en">{impact}</span>
                    <span className="lang-copy lang-id">{project.impacts.id[index]}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.learningSection}>
          <div className={`${styles.shell} ${styles.storyGrid}`}>
            <BilingualText as="h2" en="What I learned" id="Hal yang dipelajari" />
            <div className={styles.learningList}>
              {study.learnings.map((learning) => (
                <article key={learning.en}>
                  <BilingualText as="p" {...learning} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.shell}>
            <BilingualText
              as="h2"
              en="Need a website or web system for your business?"
              id="Membutuhkan website atau sistem web untuk bisnis Anda?"
            />
            <BilingualText
              as="p"
              en="Tell me whether you need a landing page, company profile, inventory application, or a custom operational workflow."
              id="Ceritakan apakah Anda membutuhkan landing page, company profile, aplikasi inventaris, atau workflow operasional custom."
            />
            <Link href="/services/#contact">
              <span className="lang-copy lang-en">Discuss your website project</span>
              <span className="lang-copy lang-id">Diskusikan project website Anda</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
