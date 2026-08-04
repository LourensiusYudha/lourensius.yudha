import Image from "next/image";
import { BilingualText } from "@/components/BilingualText";
import { MotionEffects } from "@/components/MotionEffects";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./portfolio.css";

const capabilities = [
  {
    name: { en: "Database engineering", id: "Database engineering" },
    description: {
      en: "Reliable schemas, efficient queries, and reporting data that teams can trust.",
      id: "Skema andal, query efisien, dan data laporan yang dapat dipercaya tim.",
    },
    tools: "SQL, Oracle, PostgreSQL, MySQL, Supabase",
  },
  {
    name: { en: "System development", id: "Pengembangan sistem" },
    description: {
      en: "Internal products shaped around the way real operations move and make decisions.",
      id: "Produk internal yang mengikuti cara operasional nyata bergerak dan mengambil keputusan.",
    },
    tools: "PHP, Laravel, JavaScript, TypeScript, React, Next.js",
  },
  {
    name: { en: "IT operations", id: "Operasional IT" },
    description: {
      en: "Hands-on support across networks, hardware, rollouts, and team coordination.",
      id: "Dukungan langsung untuk jaringan, hardware, rollout, dan koordinasi tim.",
    },
    tools: "Windows Server, LAN/WAN, TCP/IP, Router, Switch",
  },
];

const stack = ["Windows", "MySQL", "PHP 8.2", "Laravel 12", "Bootstrap 5.3", "Oracle", "Next.js"];

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
              en="Hi, I am Lourensius Yudha"
              id="Hai, saya Lourensius Yudha"
            />
            <h1 className="hero-title">
              <span className="hero-title-main">systems</span>
              <span className="hero-title-accent">developer</span>
            </h1>
            <BilingualText
              as="p"
              className="hero-summary"
              en="I build dependable tools for data, reporting, and retail operations."
              id="Saya membangun tools andal untuk data, pelaporan, dan operasional ritel."
            />
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                <span className="lang-copy lang-en">Explore my work</span>
                <span className="lang-copy lang-id">Jelajahi karya</span>
              </a>
              <a className="button button-secondary" href="/files/CV-Yudha.pdf" download>
                <span className="lang-copy lang-en">Download resume</span>
                <span className="lang-copy lang-id">Unduh CV</span>
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <span className="hero-status">
              <span aria-hidden="true" />
              <span className="lang-copy lang-en">Open for meaningful work</span>
              <span className="lang-copy lang-id">Terbuka untuk peluang bermakna</span>
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
                  <span className="about-line">I make</span>
                  <span className="about-line"><em>complex operations</em> feel simple</span>
                  <span className="about-line">enough to use every day.</span>
                </span>
                <span className="lang-copy lang-id">
                  <span className="about-line">Saya membuat</span>
                  <span className="about-line"><em>operasional kompleks</em> terasa sederhana</span>
                  <span className="about-line">untuk digunakan setiap hari.</span>
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
                  en="My work sits between engineering, data, and frontline operations. I started in web development, then moved closer to the systems that keep retail teams running."
                  id="Pekerjaan saya berada di antara engineering, data, dan operasional lapangan. Saya memulai dari web development, lalu bergerak lebih dekat ke sistem yang menjaga tim ritel tetap berjalan."
                />
                <BilingualText
                  as="p"
                  en="I care about practical details: accurate information, dependable workflows, and tools people can understand without a manual."
                  id="Saya peduli pada detail praktis: informasi akurat, workflow andal, dan tools yang mudah dipahami tanpa membaca manual."
                />
                <div className="about-facts">
                  <div><strong>2024</strong><BilingualText en="Career started" id="Awal karier" /></div>
                  <div><strong>06</strong><BilingualText en="Selected builds" id="Karya terpilih" /></div>
                  <div><strong>50+</strong><BilingualText en="Issues handled" id="Issue ditangani" /></div>
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
                en="Built for real constraints, measured by what changed after launch."
                id="Dibangun untuk kebutuhan nyata, dinilai dari perubahan setelah peluncuran."
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
                <span className="lang-copy lang-en">Systems ready before the moment they matter.</span>
                <span className="lang-copy lang-id">Sistem siap sebelum momen yang menentukan.</span>
              </p>
            </div>
            <div className="proof-metrics">
              <div><strong>0</strong><BilingualText en="Downtime on opening day" id="Downtime saat pembukaan" /></div>
              <div><strong>24/7</strong><BilingualText en="Automated monitoring" id="Monitoring otomatis" /></div>
            </div>
          </div>
        </section>

        <section className="capabilities section-pad" id="skills">
          <div className="section-shell">
            <div className="capabilities-intro reveal">
              <BilingualText as="h2" en="What I bring" id="Yang saya bawa" />
              <BilingualText
                as="p"
                en="One practical toolkit across product, data, and operations."
                id="Satu toolkit praktis untuk produk, data, dan operasional."
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
                  <BilingualText as="p" className="experience-company" en="Retail Operations Division" id="Divisi Operasional Ritel" />
                  <BilingualText
                    as="p"
                    en="SQL analysis, internal systems, reporting automation, operational support, and IT readiness for new branches."
                    id="Analisis SQL, sistem internal, otomatisasi laporan, dukungan operasional, dan kesiapan IT cabang baru."
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
            <div>
              <BilingualText
                as="h2"
                en="Better systems. Clearer operations."
                id="Sistem lebih baik. Operasional lebih jelas."
              />
              <BilingualText
                as="p"
                en="Let us talk about the work that needs to move."
                id="Mari berdiskusi tentang pekerjaan yang perlu bergerak."
              />
            </div>
            <div className="contact-details">
              <a className="contact-email" href="mailto:lourensius.yudha@gmail.com">lourensius.yudha@gmail.com</a>
              <div className="contact-links">
                <a href="https://wa.me/6285259855468" target="_blank" rel="noreferrer">WhatsApp ↗</a>
                <a href="/files/CV-Yudha.pdf" download>Resume ↓</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Lourensius Yudha Kristianto</span>
        <a href="#home">
          <span className="lang-copy lang-en">Back to top ↑</span>
          <span className="lang-copy lang-id">Kembali ke atas ↑</span>
        </a>
      </footer>
      <MotionEffects />
    </SmoothScroll>
  );
}
