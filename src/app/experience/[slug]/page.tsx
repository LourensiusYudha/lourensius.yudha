import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BilingualText } from "@/components/BilingualText";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { experiences } from "@/lib/experience-data";
import { projects } from "@/lib/portfolio-data";
import styles from "./experience-detail.module.css";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) notFound();

  const canonical = `/experience/${experience.slug}`;

  return {
    title: `${experience.title.en} | Experience`,
    description: experience.summary.en,
    alternates: { canonical },
    openGraph: {
      title: `${experience.title.en} | Lourensius Yudha`,
      description: experience.summary.en,
      type: "profile",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: `${experience.title.en} | Lourensius Yudha`,
      description: experience.summary.en,
    },
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) notFound();

  const relatedProjects = experience.relatedProjectSlugs
    .map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const experienceUrl = `https://lourensiusyudha.my.id/experience/${experience.slug}/`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Occupation",
    name: experience.title.en,
    description: experience.summary.en,
    url: experienceUrl,
    occupationLocation: {
      "@type": "AdministrativeArea",
      name: experience.location.en,
    },
    skills: experience.technologies.join(", "),
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader />
      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <Link className={styles.backLink} href="/#experience">
              <span aria-hidden="true">←</span>
              <span className="lang-copy lang-en">Back to experience</span>
              <span className="lang-copy lang-id">Kembali ke pengalaman</span>
            </Link>
            <div className={styles.heroGrid}>
              <BilingualText className={styles.period} {...experience.period} />
              <div>
                <BilingualText as="h1" {...experience.title} />
                <BilingualText as="p" className={styles.company} {...experience.company} />
                <BilingualText as="p" className={styles.location} {...experience.location} />
                <BilingualText as="p" className={styles.summary} {...experience.summary} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.descriptionSection}>
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <BilingualText as="h2" en="Job description" id="Jobdesk" />
            <div className={styles.longCopy}>
              {experience.jobDescription.map((paragraph) => (
                <BilingualText as="p" key={paragraph.en} {...paragraph} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.responsibilitySection}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <BilingualText as="h2" en="Responsibilities" id="Tugas dan tanggung jawab" />
              <BilingualText
                as="p"
                en="The main areas I owned or supported in this role."
                id="Area utama yang menjadi tanggung jawab atau saya dukung dalam peran ini."
              />
            </div>
            <div className={styles.responsibilityGrid}>
              {experience.responsibilities.map((responsibility) => (
                <article key={responsibility.title.en}>
                  <BilingualText as="h3" {...responsibility.title} />
                  <BilingualText as="p" {...responsibility.description} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <BilingualText as="h2" en="Tools and technical areas" id="Tools dan area teknis" />
            <div className={styles.techList} aria-label="Tools and technical areas">
              {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </div>
        </section>

        {relatedProjects.length > 0 ? (
          <section className={styles.evidenceSection}>
            <div className={styles.shell}>
              <div className={styles.sectionHeading}>
                <BilingualText as="h2" en="Related case studies" id="Studi kasus terkait" />
                <BilingualText
                  as="p"
                  en="Selected work that shows these responsibilities in practice."
                  id="Pekerjaan terpilih yang menunjukkan tanggung jawab tersebut dalam praktik."
                />
              </div>
              <div className={styles.projectList}>
                {relatedProjects.map((project) => (
                  <Link key={project.slug} href={`/work/${project.slug}/`}>
                    <BilingualText className={styles.projectCategory} {...project.category} />
                    <BilingualText as="h3" {...project.title} />
                    <BilingualText as="p" {...project.summary} />
                    <span className={styles.projectAction}>
                      <span className="lang-copy lang-en">Read case study</span>
                      <span className="lang-copy lang-id">Baca studi kasus</span>
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className={styles.ctaSection}>
          <div className={styles.shell}>
            <BilingualText as="h2" en="Interested in working together?" id="Tertarik untuk bekerja bersama?" />
            <BilingualText
              as="p"
              en="Download my CV or contact me to discuss the role, responsibilities, and working arrangement."
              id="Unduh CV saya atau hubungi saya untuk membahas posisi, tanggung jawab, dan pengaturan kerja."
            />
            <div className={styles.actions}>
              <a href="/files/CV-Yudha.pdf" download><BilingualText en="Download CV ↓" id="Unduh CV ↓" /></a>
              <a href="mailto:lourensius.yudha@gmail.com?subject=Job%20opportunity"><BilingualText en="Discuss a role →" id="Bahas peluang kerja →" /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
