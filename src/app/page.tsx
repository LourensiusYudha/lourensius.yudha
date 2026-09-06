import Image from "next/image";
import Link from "next/link";
import { BilingualText } from "@/components/BilingualText";
import { MotionEffects } from "@/components/MotionEffects";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/StructuredData";
import { experiences } from "@/lib/experience-data";

const capabilities = [
  {
    name: { en: "IT systems development", id: "Pengembangan sistem IT" },
    description: {
      en: "Operational and inventory systems built around the way teams actually work.",
      id: "Sistem operasional dan inventaris yang dibangun mengikuti cara kerja tim sehari-hari.",
    },
    tools: "PHP, Laravel, JavaScript, TypeScript, React, Next.js",
  },
  {
    name: { en: "IT support and infrastructure", id: "IT support dan infrastruktur" },
    description: {
      en: "Practical support for hardware, networks, troubleshooting, rollouts, and daily operations.",
      id: "Dukungan praktis untuk hardware, jaringan, troubleshooting, rollout, dan operasional harian.",
    },
    tools: "Windows Server, LAN/WAN, TCP/IP, Router, Switch, POS",
  },
  {
    name: { en: "Database and reporting automation", id: "Database dan otomatisasi laporan" },
    description: {
      en: "Reliable data, efficient queries, and scheduled reports that reduce repetitive work.",
      id: "Data andal, query efisien, dan laporan terjadwal yang mengurangi pekerjaan berulang.",
    },
    tools: "SQL, Oracle, PostgreSQL, MySQL, Supabase, WhatsApp API",
  },
  {
    name: { en: "Public websites", id: "Website publik" },
    description: {
      en: "Responsive websites that present a business clearly and remain dependable after launch.",
      id: "Website responsif yang menampilkan bisnis dengan jelas dan tetap andal setelah diluncurkan.",
    },
    tools: "HTML, CSS, JavaScript, React, Next.js, Bootstrap",
  },
];

const stack = ["IT Support", "Windows", "Network Operations", "MySQL", "PHP", "Laravel", "Oracle", "Next.js"];

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://lourensiusyudha.my.id/#person",
      name: "Lourensius Yudha Kristianto",
      url: "https://lourensiusyudha.my.id/",
      image: "https://lourensiusyudha.my.id/images/yudha.jpeg",
      jobTitle: "Operational Systems Developer",
      email: "mailto:lourensius.yudha@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surabaya",
        addressCountry: "ID",
      },
      knowsLanguage: ["English", "Indonesian"],
      knowsAbout: [
        "Operational systems development",
        "Inventory systems",
        "Reporting automation",
        "Database operations",
        "IT support",
        "IT infrastructure",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "SQL (Advanced)",
          credentialCategory: "Skill certification",
          dateCreated: "2026-08-13",
          url: "https://www.hackerrank.com/certificates/iframe/2023e2c94d6c",
          recognizedBy: {
            "@type": "Organization",
            name: "HackerRank",
            url: "https://www.hackerrank.com/",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "CSS (Basic)",
          credentialCategory: "Skill certification",
          dateCreated: "2026-09-06",
          url: "https://www.hackerrank.com/certificates/iframe/b4ea36918028",
          recognizedBy: {
            "@type": "Organization",
            name: "HackerRank",
            url: "https://www.hackerrank.com/",
          },
        },
      ],
      sameAs: ["https://www.linkedin.com/in/lourensius-yudha/"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://lourensiusyudha.my.id/#service",
      name: "Lourensius Yudha IT Development Services",
      url: "https://lourensiusyudha.my.id/services/",
      image: "https://lourensiusyudha.my.id/images/hero-yudha-coding-v2.webp",
      description: "Operational systems, reporting automation, public websites, IT support, and infrastructure services for business teams.",
      founder: { "@id": "https://lourensiusyudha.my.id/#person" },
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surabaya",
        addressCountry: "ID",
      },
      serviceType: [
        "Operational systems development",
        "Inventory workflow development",
        "Reporting automation",
        "Public website development",
        "IT support and infrastructure",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <SmoothScroll>
      <StructuredData data={homeStructuredData} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="home">
          <Image
            className="hero-background"
            src="/images/hero-yudha-coding-v2.webp"
            alt="Lourensius Yudha coding with a laptop on a rooftop"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />

          <div className="hero-copy">
            <BilingualText
              as="p"
              className="hero-intro"
              en="Lourensius Yudha"
              id="Lourensius Yudha"
            />
            <h1 className="hero-title">
              <span className="hero-title-main">systems</span>
              <span className="hero-title-accent">developer</span>
            </h1>
            <BilingualText
              as="p"
              className="hero-summary"
              en="I develop operational systems and reporting automation, backed by hands-on experience in IT support, databases, and retail infrastructure."
              id="Saya mengembangkan sistem operasional dan otomatisasi laporan, didukung pengalaman langsung dalam IT support, database, dan infrastruktur ritel."
            />
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                <span className="lang-copy lang-en">View experience</span>
                <span className="lang-copy lang-id">Lihat pengalaman</span>
              </a>
              <a className="button button-secondary" href="/files/CV-Yudha.pdf" download>
                <span className="lang-copy lang-en">Download CV</span>
                <span className="lang-copy lang-id">Unduh CV</span>
              </a>
            </div>
            <Link className="hero-services-link" href="/services/">
              <span className="lang-copy lang-en">Need project support? View services →</span>
              <span className="lang-copy lang-id">Butuh bantuan project? Lihat layanan →</span>
            </Link>
          </div>

          <div className="hero-meta">
            <span className="hero-status">
              <span aria-hidden="true" />
              <span className="lang-copy lang-en">Open to remote systems development and IT roles</span>
              <span className="lang-copy lang-id">Terbuka untuk posisi pengembangan sistem dan IT remote</span>
            </span>
            <BilingualText className="hero-location" en="Surabaya, Indonesia" id="Surabaya, Indonesia" />
          </div>
        </section>

        <div className="stack-marquee" aria-label={`Core technology stack: ${stack.join(", ")}`}>
          <div className="stack-track">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`} aria-hidden={index >= stack.length}>{item}</span>
            ))}
          </div>
        </div>

        <section className="about section-pad" id="about">
          <div className="section-shell">
            <div className="about-entrance">
              <BilingualText
                as="p"
                className="about-label"
                en="How I work"
                id="Cara saya bekerja"
              />
              <span className="about-rule" aria-hidden="true" />
              <h2 className="about-statement">
                <span className="lang-copy lang-en">
                  <span className="about-line">I turn</span>
                  <span className="about-line"><em>operational problems</em> into systems</span>
                  <span className="about-line">people can depend on.</span>
                </span>
                <span className="lang-copy lang-id">
                  <span className="about-line">Saya mengubah</span>
                  <span className="about-line"><em>masalah operasional</em> menjadi sistem</span>
                  <span className="about-line">yang dapat diandalkan.</span>
                </span>
              </h2>
            </div>

            <div className="about-layout">
              <div className="about-photo reveal">
                <Image
                  src="/images/yudha.jpeg"
                  alt="Lourensius Yudha Kristianto at work"
                  fill
                  sizes="(max-width: 767px) 100vw, 38vw"
                />
                <span>
                  <span className="lang-copy lang-en">Engineering with operational context</span>
                  <span className="lang-copy lang-id">Engineering dengan konteks operasional</span>
                </span>
              </div>

              <div className="about-story reveal">
                <BilingualText
                  as="p"
                  en="I develop systems for daily operations: inventory tracking, request approvals, and automated reporting. My experience supporting retail teams helps me connect software decisions with real user needs."
                  id="Saya mengembangkan sistem untuk operasional harian: pencatatan inventaris, persetujuan permintaan, dan laporan otomatis. Pengalaman mendukung tim ritel membantu saya menghubungkan keputusan pengembangan dengan kebutuhan nyata pengguna."
                />
                <BilingualText
                  as="p"
                  en="I focus on practical solutions: accurate information, dependable workflows, stable infrastructure, and tools people can use without a manual."
                  id="Saya berfokus pada solusi praktis: informasi akurat, workflow andal, infrastruktur stabil, dan tools yang mudah digunakan tanpa membaca manual."
                />
                <div className="about-facts">
                  <div><strong>2023</strong><BilingualText en="Career started" id="Awal karier" /></div>
                  <div><strong>07</strong><BilingualText en="Selected builds" id="Karya terpilih" /></div>
                  <div><strong>03</strong><BilingualText en="Core IT disciplines" id="Bidang utama IT" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-shell experience-layout">
            <div className="experience-intro reveal">
              <BilingualText as="h2" en="Experience" id="Pengalaman" />
              <BilingualText
                as="p"
                en="A path from web products to the operational systems behind them."
                id="Perjalanan dari produk web menuju sistem operasional di belakangnya."
              />
            </div>
            <div className="experience-list">
              {experiences.map((experience) => (
                <Link
                  className="experience-item reveal"
                  href={`/experience/${experience.slug}/`}
                  key={experience.slug}
                  aria-label={`Read experience details: ${experience.title.en}`}
                >
                  <BilingualText className="experience-date" {...experience.period} />
                  <div className="experience-body">
                    <BilingualText as="h3" {...experience.title} />
                    <BilingualText as="p" className="experience-company" {...experience.company} />
                    <BilingualText as="p" className="experience-location" {...experience.location} />
                    <BilingualText as="p" {...experience.summary} />
                    <span className="experience-action">
                      <span className="lang-copy lang-en">View job description</span>
                      <span className="lang-copy lang-id">Lihat jobdesk</span>
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="certifications section-pad" id="certifications">
          <div className="section-shell">
            <div className="section-heading reveal">
              <BilingualText as="h2" en="Certification" id="Sertifikasi" />
              <BilingualText
                as="p"
                en="Verified credentials supporting my work across data, SQL, and front-end development."
                id="Kredensial terverifikasi yang mendukung pekerjaan saya dalam bidang data, SQL, dan pengembangan front-end."
              />
            </div>

            <article className="certificate-card reveal">
              <a
                className="certificate-preview"
                href="https://www.hackerrank.com/certificates/iframe/2023e2c94d6c"
                target="_blank"
                rel="noreferrer"
                aria-label="Verify HackerRank SQL Advanced certificate"
              >
                <Image
                  src="/images/certificates/sql-advanced-hackerrank.png"
                  alt="HackerRank SQL Advanced certificate awarded to Lourensius Yudha Kristianto"
                  fill
                  sizes="(max-width: 760px) calc(100vw - 32px), 58vw"
                />
              </a>

              <div className="certificate-content">
                <BilingualText className="certificate-issuer" en="HackerRank · Verified credential" id="HackerRank · Kredensial terverifikasi" />
                <h3>SQL (Advanced)</h3>
                <BilingualText
                  as="p"
                  className="certificate-description"
                  en="Passed the HackerRank skill certification test for advanced SQL."
                  id="Lulus uji sertifikasi keahlian HackerRank untuk SQL tingkat lanjut."
                />
                <dl className="certificate-meta">
                  <div>
                    <dt>
                      <span className="lang-copy lang-en">Issued</span>
                      <span className="lang-copy lang-id">Diterbitkan</span>
                    </dt>
                    <dd>13 Aug 2026</dd>
                  </div>
                  <div>
                    <dt>
                      <span className="lang-copy lang-en">Credential ID</span>
                      <span className="lang-copy lang-id">ID kredensial</span>
                    </dt>
                    <dd>2023E2C94D6C</dd>
                  </div>
                </dl>
                <div className="certificate-actions">
                  <a href="https://www.hackerrank.com/certificates/iframe/2023e2c94d6c" target="_blank" rel="noreferrer">
                    <span className="lang-copy lang-en">Verify credential ↗</span>
                    <span className="lang-copy lang-id">Verifikasi kredensial ↗</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="certificate-card reveal">
              <a
                className="certificate-preview"
                href="https://www.hackerrank.com/certificates/iframe/b4ea36918028"
                target="_blank"
                rel="noreferrer"
                aria-label="Verify HackerRank CSS Basic certificate"
              >
                <Image
                  src="/images/certificates/css-basic-hackerrank.png"
                  alt="HackerRank CSS Basic certificate awarded to Lourensius Yudha Kristianto"
                  fill
                  sizes="(max-width: 760px) calc(100vw - 32px), 58vw"
                />
              </a>

              <div className="certificate-content">
                <BilingualText className="certificate-issuer" en="HackerRank · Verified credential" id="HackerRank · Kredensial terverifikasi" />
                <h3>CSS (Basic)</h3>
                <BilingualText
                  as="p"
                  className="certificate-description"
                  en="Passed the HackerRank skill certification test for foundational CSS."
                  id="Lulus uji sertifikasi keahlian HackerRank untuk fundamental CSS."
                />
                <dl className="certificate-meta">
                  <div>
                    <dt>
                      <span className="lang-copy lang-en">Issued</span>
                      <span className="lang-copy lang-id">Diterbitkan</span>
                    </dt>
                    <dd>06 Sep 2026</dd>
                  </div>
                  <div>
                    <dt>
                      <span className="lang-copy lang-en">Credential ID</span>
                      <span className="lang-copy lang-id">ID kredensial</span>
                    </dt>
                    <dd>B4EA36918028</dd>
                  </div>
                </dl>
                <div className="certificate-actions">
                  <a href="https://www.hackerrank.com/certificates/iframe/b4ea36918028" target="_blank" rel="noreferrer">
                    <span className="lang-copy lang-en">Verify credential ↗</span>
                    <span className="lang-copy lang-id">Verifikasi kredensial ↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-shell">
            <div className="section-heading reveal">
              <BilingualText as="h2" en="Selected work" id="Karya terpilih" />
              <BilingualText
                as="p"
                en="Real operational problems, clear ownership, and outcomes that can be explained."
                id="Permasalahan operasional nyata, tanggung jawab yang jelas, dan hasil yang dapat dijelaskan."
              />
            </div>
            <ProjectShowcase />
          </div>
        </section>

        <section className="proof-section section-pad" aria-labelledby="proof-title">
          <div className="section-shell proof-layout reveal">
            <div className="proof-statement">
              <BilingualText
                as="h2"
                className="visually-hidden"
                en="Proof in practice"
                id="Bukti dalam praktik"
              />
              <p id="proof-title">
                <span className="lang-copy lang-en">Prepared for the day operations could not stop.</span>
                <span className="lang-copy lang-id">Disiapkan untuk hari ketika operasional tidak boleh berhenti.</span>
              </p>
            </div>
            <div className="proof-metrics">
              <div><strong>50</strong><BilingualText en="POS devices prepared" id="Perangkat POS disiapkan" /></div>
              <div><strong>~300</strong><BilingualText en="Staff supported" id="Staf didukung" /></div>
              <div><strong>3</strong><BilingualText en="Months of readiness" id="Bulan persiapan" /></div>
              <div><strong>0</strong><BilingualText en="Opening-day downtime" id="Downtime saat pembukaan" /></div>
            </div>
          </div>
        </section>

        <section className="capabilities section-pad" id="skills">
          <div className="section-shell">
            <div className="capabilities-intro reveal">
              <BilingualText as="h2" en="Ways I contribute" id="Kontribusi yang saya bawa" />
              <BilingualText
                as="p"
                en="Operational systems development is my core focus, supported by SQL reporting, production troubleshooting, and infrastructure experience."
                id="Pengembangan sistem operasional menjadi fokus utama saya, didukung laporan SQL, penanganan kendala production, dan pengalaman infrastruktur."
              />
            </div>
            <div className="capability-list">
              {capabilities.map((capability) => (
                <article className="capability reveal" key={capability.name.en}>
                  <BilingualText as="h3" {...capability.name} />
                  <BilingualText as="p" {...capability.description} />
                  <span>{capability.tools}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-shell contact-layout reveal">
            <div className="contact-intro">
              <BilingualText
                as="h2"
                en="Let's talk about your team."
                id="Mari bicarakan kebutuhan tim Anda."
              />
              <BilingualText
                as="p"
                en="Looking for someone who can develop operational systems and understand the work behind them? Explore my experience or get in touch about a role."
                id="Mencari anggota tim yang mampu mengembangkan sistem operasional dan memahami pekerjaan di baliknya? Lihat pengalaman saya atau hubungi untuk membahas posisi yang tersedia."
              />
            </div>
            <div className="contact-paths">
              <section className="contact-path contact-path-primary">
                <BilingualText as="p" className="contact-path-label" en="For hiring teams" id="Untuk tim rekrutmen" />
                <BilingualText as="h3" en="Hiring for a remote IT role?" id="Mencari talenta untuk posisi IT remote?" />
                <BilingualText
                  as="p"
                  en="I am open to systems development and IT operations roles. Share the responsibilities, team context, and working arrangement."
                  id="Saya terbuka untuk posisi pengembangan sistem dan operasional IT. Ceritakan tanggung jawab, konteks tim, dan pengaturan kerjanya."
                />
                <div className="contact-links">
                  <a href="/files/CV-Yudha.pdf" download><BilingualText en="Download CV ↓" id="Unduh CV ↓" /></a>
                  <a href="mailto:lourensius.yudha@gmail.com?subject=Job%20opportunity"><BilingualText en="Discuss a role ↗" id="Bahas peluang kerja ↗" /></a>
                  <a href="https://www.linkedin.com/in/lourensius-yudha/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                </div>
              </section>
              <section className="contact-path">
                <BilingualText as="p" className="contact-path-label" en="For businesses" id="Untuk bisnis" />
                <BilingualText as="h3" en="Need a practical system or website?" id="Membutuhkan sistem atau website yang praktis?" />
                <BilingualText
                  as="p"
                  en="Explore my services and relevant case studies for inventory systems, approval workflows, reporting automation, and websites."
                  id="Lihat layanan dan studi kasus yang relevan untuk sistem inventaris, alur persetujuan, otomatisasi laporan, dan website."
                />
                <div className="contact-links">
                  <Link href="/services/"><BilingualText en="View services →" id="Lihat layanan →" /></Link>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Lourensius Yudha Kristianto</span>
        <a href="https://www.linkedin.com/in/lourensius-yudha/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="#home">
          <span className="lang-copy lang-en">Back to top ↑</span>
          <span className="lang-copy lang-id">Kembali ke atas ↑</span>
        </a>
      </footer>
      <MotionEffects />
    </SmoothScroll>
  );
}
