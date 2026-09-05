import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BilingualText } from "@/components/BilingualText";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./case-study.module.css";

export const metadata: Metadata = {
  title: "Grand Opening Gorontalo | IT Infrastructure Case Study",
  description:
    "How Lourensius Yudha prepared 50 POS devices over three months and supported roughly 300 staff with zero opening-day downtime.",
  alternates: { canonical: "/work/grand-opening-gorontalo" },
  openGraph: {
    title: "Grand Opening Gorontalo | IT Infrastructure Case Study",
    description:
      "Three months of infrastructure preparation, 50 POS devices, roughly 300 staff, and zero opening-day downtime.",
    type: "article",
    url: "/work/grand-opening-gorontalo",
    images: [
      {
        url: "/images/indogrosir1-optimized.jpg",
        width: 1920,
        height: 1440,
        alt: "Grand opening preparation at Indogrosir Gorontalo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Opening Gorontalo | IT Infrastructure Case Study",
    description: "50 POS devices and roughly 300 staff supported with zero opening-day downtime.",
    images: ["/images/indogrosir1-optimized.jpg"],
  },
};

const facts = [
  { value: "3 months", en: "Preparation", id: "Persiapan" },
  { value: "50", en: "POS devices", id: "Perangkat POS" },
  { value: "~300", en: "Staff supported", id: "Staf didukung" },
  { value: "0", en: "Opening-day downtime", id: "Downtime saat opening" },
];

const preparation = [
  {
    number: "01",
    title: { en: "Infrastructure and POS readiness", id: "Kesiapan infrastruktur dan POS" },
    body: {
      en: "Prepared the operational environment and coordinated readiness for 50 POS devices before the branch opened.",
      id: "Menyiapkan lingkungan operasional dan mengoordinasikan kesiapan 50 perangkat POS sebelum cabang dibuka.",
    },
  },
  {
    number: "02",
    title: { en: "Operational data validation", id: "Validasi data operasional" },
    body: {
      en: "Validated inventory and pricing databases so the data used by the operation was ready and consistent.",
      id: "Memvalidasi database inventaris dan harga agar data yang digunakan operasional siap dan konsisten.",
    },
  },
  {
    number: "03",
    title: { en: "Vendor and team coordination", id: "Koordinasi vendor dan tim" },
    body: {
      en: "Coordinated vendors and internal teams so device preparation, checks, and issue handling stayed aligned.",
      id: "Mengoordinasikan vendor dan tim internal agar persiapan perangkat, pengecekan, dan penanganan masalah tetap selaras.",
    },
  },
];

const capabilities = [
  { en: "Operational readiness", id: "Kesiapan operasional" },
  { en: "IT support under pressure", id: "IT support dalam situasi kritis" },
  { en: "Cross-team coordination", id: "Koordinasi lintas tim" },
  { en: "POS and database operations", id: "Operasional POS dan database" },
];

export default function GrandOpeningGorontaloCaseStudy() {
  return (
    <>
      <SiteHeader />
      <main className={styles.casePage}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <Link className={styles.backLink} href="/#work">
              <span aria-hidden="true">←</span>
              <span className="lang-copy lang-en">Back to selected work</span>
              <span className="lang-copy lang-id">Kembali ke karya terpilih</span>
            </Link>

            <div className={styles.heroGrid}>
              <BilingualText
                as="p"
                className={styles.eyebrow}
                en="IT Support / Infrastructure case study"
                id="Studi kasus IT Support / Infrastructure"
              />
              <div className={styles.heroCopy}>
                <h1>
                  <span className="lang-copy lang-en">Preparing 50 POS devices for a zero-downtime branch opening.</span>
                  <span className="lang-copy lang-id">Menyiapkan 50 perangkat POS untuk pembukaan cabang tanpa downtime.</span>
                </h1>
                <BilingualText
                  as="p"
                  className={styles.heroSummary}
                  en="Three months of infrastructure readiness supporting roughly 300 staff at Indogrosir Gorontalo."
                  id="Tiga bulan kesiapan infrastruktur untuk mendukung sekitar 300 staf Indogrosir Gorontalo."
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.proofVisual} aria-label="Project documentation">
          <div className={styles.shell}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/indogrosir1-optimized.jpg"
                alt="Lourensius Yudha during the Grand Opening Gorontalo project"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 760px) calc(100vw - 36px), calc(100vw - 80px)"
              />
              <div className={styles.imageCaption}>
                <span>Indogrosir Gorontalo</span>
                <BilingualText en="Branch opening support" id="Dukungan pembukaan cabang" />
              </div>
            </div>

            <dl className={styles.factGrid}>
              {facts.map((fact) => (
                <div key={fact.en}>
                  <dd>{fact.value}</dd>
                  <dt>
                    <span className="lang-copy lang-en">{fact.en}</span>
                    <span className="lang-copy lang-id">{fact.id}</span>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.narrativeSection}>
          <div className={`${styles.shell} ${styles.narrativeGrid}`}>
            <div className={styles.sectionIndex}>01 / Context</div>
            <div className={styles.narrativeCopy}>
              <BilingualText as="h2" en="The operational challenge" id="Tantangan operasional" />
              <BilingualText
                as="p"
                en="Indogrosir Gorontalo was preparing to open a new branch. Its technology setup had to support roughly 300 staff and 50 POS devices from day one. With three months to prepare, infrastructure, transaction devices, and operational data had to work as one dependable system."
                id="Indogrosir Gorontalo sedang mempersiapkan pembukaan cabang baru. Sistem teknologinya harus mendukung sekitar 300 staf dan 50 perangkat POS sejak hari pertama. Dengan waktu persiapan tiga bulan, infrastruktur, perangkat transaksi, dan data operasional harus bekerja sebagai satu sistem yang andal."
              />
              <aside className={styles.pullQuote}>
                <BilingualText
                  as="p"
                  en="The goal was simple to state and demanding to deliver: operations had to start without technology becoming a bottleneck."
                  id="Tujuannya mudah diucapkan tetapi menantang untuk diwujudkan: operasional harus berjalan tanpa teknologi menjadi penghambat."
                />
              </aside>
            </div>
          </div>
        </section>

        <section className={`${styles.narrativeSection} ${styles.roleSection}`}>
          <div className={`${styles.shell} ${styles.narrativeGrid}`}>
            <div className={styles.sectionIndex}>02 / Role</div>
            <div className={styles.narrativeCopy}>
              <BilingualText as="h2" en="My responsibility" id="Tanggung jawab saya" />
              <BilingualText
                as="p"
                en="I was responsible for infrastructure readiness, POS preparation, database validation, vendor coordination, and live IT support during opening day. My role connected the technical checks with what the operational team needed to work reliably."
                id="Saya bertanggung jawab atas kesiapan infrastruktur, persiapan POS, validasi database, koordinasi vendor, dan IT support secara langsung saat opening day. Peran saya menghubungkan pengecekan teknis dengan kebutuhan tim operasional agar dapat bekerja dengan andal."
              />
              <div className={styles.roleTags} aria-label="Technology used">
                {['Network', 'POS', 'Oracle DB', 'SQL'].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.preparationSection}>
          <div className={styles.shell}>
            <div className={styles.preparationHeading}>
              <div className={styles.sectionIndex}>03 / Preparation</div>
              <div>
                <BilingualText as="h2" en="Readiness before opening day" id="Kesiapan sebelum opening day" />
                <BilingualText
                  as="p"
                  en="The work was organized around the systems, data, and coordination required for a dependable launch."
                  id="Pekerjaan difokuskan pada sistem, data, dan koordinasi yang dibutuhkan untuk pembukaan yang andal."
                />
              </div>
            </div>

            <div className={styles.preparationList}>
              {preparation.map((item) => (
                <article key={item.number}>
                  <span className={styles.stepNumber}>{item.number}</span>
                  <h3>
                    <span className="lang-copy lang-en">{item.title.en}</span>
                    <span className="lang-copy lang-id">{item.title.id}</span>
                  </h3>
                  <p>
                    <span className="lang-copy lang-en">{item.body.en}</span>
                    <span className="lang-copy lang-id">{item.body.id}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.outcomeSection}>
          <div className={`${styles.shell} ${styles.outcomeGrid}`}>
            <div className={styles.outcomeLabel}>04 / Outcome</div>
            <div className={styles.outcomeCopy}>
              <BilingualText
                as="p"
                className={styles.outcomeLead}
                en="Opening day completed with zero downtime."
                id="Opening day selesai tanpa downtime."
              />
              <BilingualText
                as="p"
                className={styles.outcomeDetail}
                en="I supported live operations, monitored system readiness, and handled issues as they appeared. The result was a stable opening for approximately 300 staff using 50 POS devices."
                id="Saya mendukung operasional secara langsung, memantau kesiapan sistem, dan menangani masalah yang muncul. Hasilnya adalah pembukaan yang stabil untuk sekitar 300 staf yang menggunakan 50 perangkat POS."
              />
            </div>
            <div className={styles.zeroMetric}>
              <strong>0</strong>
              <BilingualText en="downtime" id="downtime" />
            </div>
          </div>
        </section>

        <section className={styles.capabilitySection}>
          <div className={`${styles.shell} ${styles.narrativeGrid}`}>
            <div className={styles.sectionIndex}>05 / Evidence</div>
            <div>
              <BilingualText as="h2" en="What this project demonstrates" id="Kompetensi yang dibuktikan" />
              <div className={styles.capabilityGrid}>
                {capabilities.map((capability, index) => (
                  <div key={capability.en}>
                    <span>0{index + 1}</span>
                    <strong>
                      <span className="lang-copy lang-en">{capability.en}</span>
                      <span className="lang-copy lang-id">{capability.id}</span>
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.shell}>
            <BilingualText as="p" className={styles.ctaEyebrow} en="Available for remote opportunities" id="Terbuka untuk peluang remote" />
            <BilingualText
              as="h2"
              en="Hiring for IT Support or Infrastructure?"
              id="Sedang mencari IT Support atau Infrastructure?"
            />
            <BilingualText
              as="p"
              className={styles.ctaSummary}
              en="I help teams keep technology reliable, practical, and ready for daily operations."
              id="Saya membantu tim menjaga teknologi tetap andal, praktis, dan siap mendukung operasional harian."
            />
            <div className={styles.ctaActions}>
              <a className={styles.primaryAction} href="/files/CV-Yudha.pdf" download>
                <span className="lang-copy lang-en">Download CV</span>
                <span className="lang-copy lang-id">Unduh CV</span>
                <span aria-hidden="true">↓</span>
              </a>
              <a href="https://www.linkedin.com/in/lourensius-yudha/" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="mailto:lourensius.yudha@gmail.com">
                Email <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
