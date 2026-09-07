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
    name: { en: "Business websites and web systems", id: "Website bisnis dan sistem web" },
    description: {
      en: "Responsive websites, inventory tools, and operational systems built around real business needs.",
      id: "Website responsif, aplikasi inventaris, dan sistem operasional yang dibangun berdasarkan kebutuhan bisnis nyata.",
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
      jobTitle: "Website and Business Systems Developer",
      email: "mailto:lourensius.yudha@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surabaya",
        addressCountry: "ID",
      },
      knowsLanguage: ["English", "Indonesian"],
      knowsAbout: [
        "Website development",
        "Business systems development",
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
      name: "Lourensius Yudha Website Development Services",
      url: "https://lourensiusyudha.my.id/services/",
      image: "https://lourensiusyudha.my.id/images/hero-yudha-coding-v2.webp",
      description: "Website development for company profiles, landing pages, inventory applications, and operational systems.",
      founder: { "@id": "https://lourensiusyudha.my.id/#person" },
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surabaya",
        addressCountry: "ID",
      },
      serviceType: [
        "Website development",
        "Business systems development",
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
              <span className="hero-title-desktop">
                <span className="hero-title-main">Website &amp; Business</span>
                <span className="hero-title-accent">Systems Developer</span>
              </span>
              <span className="hero-title-mobile">
                <span className="hero-title-main">Website &amp; Systems</span>
                <span className="hero-title-accent">Developer</span>
              </span>
            </h1>
            <BilingualText
              as="p"
              className="hero-summary"
              en="I build business websites, landing pages, inventory applications, and operational web systems from planning to production deployment."
              id="Saya membangun landing page, company profile, aplikasi inventaris, dan sistem operasional berbasis web dari perancangan hingga deployment."
            />
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                <span className="lang-copy lang-en">View projects</span>
                <span className="lang-copy lang-id">Lihat project</span>
              </a>
              <Link className="button button-secondary" href="/services/">
                <span className="lang-copy lang-en">View services</span>
                <span className="lang-copy lang-id">Lihat layanan</span>
              </Link>
            </div>
            <a className="hero-services-link" href="/files/CV-Yudha.pdf" download>
              <span className="lang-copy lang-en">Hiring? Download my CV ↓</span>
              <span className="lang-copy lang-id">Sedang merekrut? Unduh CV saya ↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <span className="hero-status">
              <span aria-hidden="true" />
              <span className="lang-copy lang-en">Available for website projects and remote development roles</span>
              <span className="lang-copy lang-id">Tersedia untuk project website dan posisi developer remote</span>
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

        <section className="work section-pad" id="work">
          <div className="section-shell">
            <div className="section-heading reveal">
              <BilingualText as="h2" en="Selected work" id="Karya terpilih" />
              <BilingualText
                as="p"
                en="Real websites and operational systems, with clear responsibilities and outcomes."
                id="Website dan sistem operasional nyata, dengan tanggung jawab serta hasil yang jelas."
              />
            </div>
            <ProjectShowcase />
          </div>
        </section>

        <section className="proof-section section-pad" aria-labelledby="proof-title">
          <div className="section-shell proof-layout reveal">
            <div className="proof-statement">
              <BilingualText as="h2" className="visually-hidden" en="Proof in practice" id="Bukti dalam praktik" />
              <p id="proof-title">
                <span className="lang-copy lang-en">Built around real work, not sample briefs.</span>
                <span className="lang-copy lang-id">Dibangun dari kebutuhan nyata, bukan contoh project.</span>
              </p>
            </div>
            <div className="proof-metrics">
              <div><strong>10+</strong><BilingualText en="Surveyor system users" id="Pengguna sistem Surveyor" /></div>
              <div><strong>9</strong><BilingualText en="Divisions reached by reports" id="Divisi menerima laporan" /></div>
              <div><strong>50</strong><BilingualText en="POS devices prepared" id="Perangkat POS disiapkan" /></div>
              <div><strong>~300</strong><BilingualText en="Staff supported" id="Staf didukung" /></div>
            </div>
          </div>
        </section>

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

        <section className="capabilities section-pad" id="skills">
          <div className="section-shell">
            <div className="capabilities-intro reveal">
              <BilingualText as="h2" en="Ways I contribute" id="Kontribusi yang saya bawa" />
              <BilingualText
                as="p"
                  en="Website development is my core service—from public-facing pages to database-backed inventory and operational systems."
                  id="Pengembangan website adalah layanan utama saya—mulai dari halaman publik hingga sistem inventaris dan operasional berbasis database."
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

        <section className="certifications" id="certifications">
          <div className="section-shell certification-layout">
            <div className="certification-heading reveal">
              <BilingualText as="h2" en="Verified credentials" id="Kredensial terverifikasi" />
              <BilingualText
                as="p"
                en="Supporting credentials. The project case studies above remain the primary evidence of my work."
                id="Kredensial pendukung. Studi kasus project di atas tetap menjadi bukti utama pekerjaan saya."
              />
            </div>

            <div className="certificate-list">
              <article className="certificate-card reveal">
                <a className="certificate-preview" href="https://www.hackerrank.com/certificates/iframe/2023e2c94d6c" target="_blank" rel="noreferrer" aria-label="Verify HackerRank SQL Advanced certificate">
                  <Image src="/images/certificates/sql-advanced-hackerrank.png" alt="HackerRank SQL Advanced certificate awarded to Lourensius Yudha Kristianto" fill sizes="144px" />
                </a>
                <div className="certificate-content">
                  <BilingualText className="certificate-issuer" en="HackerRank" id="HackerRank" />
                  <h3>SQL (Advanced)</h3>
                  <p className="certificate-date">13 Aug 2026</p>
                  <a className="certificate-link" href="https://www.hackerrank.com/certificates/iframe/2023e2c94d6c" target="_blank" rel="noreferrer">
                    <BilingualText en="Verify credential ↗" id="Verifikasi kredensial ↗" />
                  </a>
                </div>
              </article>

              <article className="certificate-card reveal">
                <a className="certificate-preview" href="https://www.hackerrank.com/certificates/iframe/b4ea36918028" target="_blank" rel="noreferrer" aria-label="Verify HackerRank CSS Basic certificate">
                  <Image src="/images/certificates/css-basic-hackerrank.png" alt="HackerRank CSS Basic certificate awarded to Lourensius Yudha Kristianto" fill sizes="144px" />
                </a>
                <div className="certificate-content">
                  <BilingualText className="certificate-issuer" en="HackerRank" id="HackerRank" />
                  <h3>CSS (Basic)</h3>
                  <p className="certificate-date">06 Sep 2026</p>
                  <a className="certificate-link" href="https://www.hackerrank.com/certificates/iframe/b4ea36918028" target="_blank" rel="noreferrer">
                    <BilingualText en="Verify credential ↗" id="Verifikasi kredensial ↗" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-shell contact-layout reveal">
            <div className="contact-intro">
              <BilingualText as="h2" en="Choose the right next step." id="Pilih langkah yang sesuai." />
              <BilingualText
                as="p"
                en="Start a website project or discuss a development role. Both paths lead directly to the information you need."
                id="Mulai project website atau diskusikan posisi developer. Kedua jalur mengarah langsung ke informasi yang Anda perlukan."
              />
            </div>
            <div className="contact-paths">
              <section className="contact-path contact-path-primary">
                <BilingualText as="p" className="contact-path-label" en="For businesses" id="Untuk bisnis" />
                <BilingualText as="h3" en="Need a website or business system?" id="Membutuhkan website atau sistem bisnis?" />
                <BilingualText
                  as="p"
                  en="Explore the services or tell me about the website, inventory application, or operational workflow you need."
                  id="Lihat layanan atau ceritakan kebutuhan website, aplikasi inventaris, maupun workflow operasional Anda."
                />
                <div className="contact-links">
                  <a href="https://wa.me/6285259855468?text=Halo%20Yudha%2C%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20mendiskusikan%20pembuatan%20website." target="_blank" rel="noreferrer"><BilingualText en="Discuss on WhatsApp ↗" id="Diskusi via WhatsApp ↗" /></a>
                  <Link href="/services/"><BilingualText en="View services →" id="Lihat layanan →" /></Link>
                </div>
              </section>
              <section className="contact-path">
                <BilingualText as="p" className="contact-path-label" en="For hiring teams" id="Untuk tim rekrutmen" />
                <BilingualText as="h3" en="Hiring for a development role?" id="Mencari developer untuk bergabung dengan tim?" />
                <BilingualText
                  as="p"
                  en="Review my experience, download my CV, or contact me about the role and working arrangement."
                  id="Tinjau pengalaman saya, unduh CV, atau hubungi saya untuk membahas posisi dan pengaturan kerja."
                />
                <div className="contact-links">
                  <a href="/files/CV-Yudha.pdf" download><BilingualText en="Download CV ↓" id="Unduh CV ↓" /></a>
                  <a href="mailto:lourensius.yudha@gmail.com?subject=Job%20opportunity"><BilingualText en="Discuss a role ↗" id="Bahas peluang kerja ↗" /></a>
                  <a href="https://www.linkedin.com/in/lourensius-yudha/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
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
