import Image from "next/image";
import { BilingualText } from "@/components/BilingualText";
import { MotionEffects } from "@/components/MotionEffects";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScroll } from "@/components/SmoothScroll";

const capabilities = [
  {
    name: { en: "IT systems development", id: "Pengembangan sistem IT" },
    description: {
      en: "Internal and inventory systems built around the way teams actually work.",
      id: "Sistem internal dan inventaris yang dibangun mengikuti cara kerja tim sehari-hari.",
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

export default function HomePage() {
  return (
    <SmoothScroll>
      <SiteHeader />
      <main>
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
              en="IT Development, Support and Infrastructure"
              id="IT Development, Support dan Infrastruktur"
            />
            <h1 className="hero-title">
              <span className="hero-title-main">systems</span>
              <span className="hero-title-accent">developer</span>
            </h1>
            <BilingualText
              as="p"
              className="hero-summary"
              en="I build reliable systems, support IT operations, and solve the problems that keep teams from moving."
              id="Saya membangun sistem andal, mendukung operasional IT, dan menyelesaikan masalah yang menghambat kerja tim."
            />
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                <span className="lang-copy lang-en">View case studies</span>
                <span className="lang-copy lang-id">Lihat studi kasus</span>
              </a>
              <a className="button button-secondary" href="/files/CV-Yudha.pdf" download>
                <span className="lang-copy lang-en">Download CV</span>
                <span className="lang-copy lang-id">Unduh CV</span>
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <span className="hero-status">
              <span aria-hidden="true" />
              <span className="lang-copy lang-en">Open to remote IT roles and selected freelance work</span>
              <span className="lang-copy lang-id">Terbuka untuk posisi IT remote dan freelance terpilih</span>
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
                  en="My work sits between development, IT support, infrastructure, data, and frontline operations. That range helps me understand both the system and the people who depend on it."
                  id="Pekerjaan saya berada di antara development, IT support, infrastruktur, data, dan operasional lapangan. Pengalaman ini membantu saya memahami sistem sekaligus orang yang mengandalkannya."
                />
                <BilingualText
                  as="p"
                  en="I focus on practical solutions: accurate information, dependable workflows, stable infrastructure, and tools people can use without a manual."
                  id="Saya berfokus pada solusi praktis: informasi akurat, workflow andal, infrastruktur stabil, dan tools yang mudah digunakan tanpa membaca manual."
                />
                <div className="about-facts">
                  <div><strong>2023</strong><BilingualText en="Career started" id="Awal karier" /></div>
                  <div><strong>06</strong><BilingualText en="Selected builds" id="Karya terpilih" /></div>
                  <div><strong>03</strong><BilingualText en="Core IT disciplines" id="Bidang utama IT" /></div>
                </div>
              </div>
            </div>
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
                en="Full-time capability across development, support, and infrastructure, plus selected systems and website projects."
                id="Kemampuan full-time dalam development, support, dan infrastruktur, serta project sistem dan website terpilih."
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
              <article className="experience-item reveal">
                <div className="experience-date">2024 - <span className="lang-copy lang-en">Present</span><span className="lang-copy lang-id">Sekarang</span></div>
                <div className="experience-body">
                  <BilingualText as="h3" en="IT System and Data Specialist" id="Spesialis Sistem IT dan Data" />
                  <BilingualText as="p" className="experience-company" en="Indogrosir · Retail Operations" id="Indogrosir · Operasional Ritel" />
                  <BilingualText
                    as="p"
                    en="SQL analysis, internal systems, reporting automation, operational support, infrastructure readiness, and IT preparation for new branches."
                    id="Analisis SQL, sistem internal, otomatisasi laporan, dukungan operasional, kesiapan infrastruktur, dan persiapan IT cabang baru."
                  />
                </div>
              </article>
              <article className="experience-item reveal">
                <div className="experience-date">2023 - 2024</div>
                <div className="experience-body">
                  <BilingualText as="h3" en="Database Administrator Internship" id="Magang Database Administrator" />
                  <BilingualText as="p" className="experience-company" en="IT Department" id="Departemen IT" />
                  <BilingualText
                    as="p"
                    en="Built and maintained internal web applications, database schemas, tests, and technical documentation."
                    id="Membangun dan memelihara aplikasi web internal, skema database, pengujian, dan dokumentasi teknis."
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-shell contact-layout reveal">
            <div className="contact-intro">
              <BilingualText
                as="h2"
                en="Build it. Support it. Keep it running."
                id="Bangun. Dukung. Jaga tetap berjalan."
              />
              <BilingualText
                as="p"
                en="I am prioritizing remote IT opportunities while remaining available for selected business projects."
                id="Saya memprioritaskan peluang kerja IT remote dan tetap tersedia untuk project bisnis terpilih."
              />
            </div>
            <div className="contact-paths">
              <section className="contact-path contact-path-primary">
                <BilingualText as="p" className="contact-path-label" en="For hiring teams" id="Untuk tim rekrutmen" />
                <BilingualText as="h3" en="Hiring for a remote IT role?" id="Mencari talenta untuk posisi IT remote?" />
                <BilingualText
                  as="p"
                  en="I am open to IT Developer, IT Support, and IT Infrastructure opportunities."
                  id="Saya terbuka untuk posisi IT Developer, IT Support, dan IT Infrastructure."
                />
                <div className="contact-links">
                  <a href="/files/CV-Yudha.pdf" download>Download CV ↓</a>
                  <a href="https://www.linkedin.com/in/lourensius-yudha/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                </div>
              </section>
              <section className="contact-path">
                <BilingualText as="p" className="contact-path-label" en="For businesses" id="Untuk bisnis" />
                <BilingualText as="h3" en="Need a practical system or website?" id="Membutuhkan sistem atau website yang praktis?" />
                <BilingualText
                  as="p"
                  en="I am available to help growing businesses and international clients with selected operational projects."
                  id="Saya tersedia untuk membantu bisnis berkembang dan client internasional melalui project operasional terpilih."
                />
                <div className="contact-links">
                  <a href="mailto:lourensius.yudha@gmail.com">Email me ↗</a>
                  <a href="https://wa.me/6285259855468?text=Hi%20Yudha%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">WhatsApp ↗</a>
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
