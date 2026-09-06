import type { Metadata } from "next";
import Link from "next/link";
import { BilingualText } from "@/components/BilingualText";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Business Systems & Automation Services | Lourensius Yudha",
  description: "Need an inventory system, approval workflow, reporting bot, or business website? Explore Lourensius Yudha's services and discuss your project.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Business Systems & Automation Services | Lourensius Yudha",
    description: "Practical systems, automation, websites, and IT support built around real operational workflows.",
    type: "website",
    url: "/services",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lourensius Yudha, systems developer for real operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Systems & Automation Services | Lourensius Yudha",
    description: "Practical systems, automation, websites, and IT support for operational teams.",
    images: ["/twitter-image.png"],
  },
};

const services = [
  {
    title: { en: "Operational systems and inventory workflows", id: "Sistem operasional dan workflow inventaris" },
    description: {
      en: "Replace fragmented forms, spreadsheets, and manual tracking with a dependable operational system.",
      id: "Menggantikan form, spreadsheet, dan pencatatan manual yang terpisah dengan sistem operasional yang dapat diandalkan.",
    },
    deliverables: {
      en: "Workflow mapping, interface development, database integration, authentication, reporting, and production deployment.",
      id: "Pemetaan workflow, pengembangan antarmuka, integrasi database, autentikasi, laporan, dan deployment production.",
    },
  },
  {
    title: { en: "Reporting and process automation", id: "Otomatisasi laporan dan proses" },
    description: {
      en: "Turn recurring database work into scheduled reports, alerts, exports, and team notifications.",
      id: "Mengubah pekerjaan database berulang menjadi laporan terjadwal, alert, export, dan notifikasi tim.",
    },
    deliverables: {
      en: "SQL reporting logic, scheduled jobs, WhatsApp delivery, monitoring, logs, and process supervision.",
      id: "Logika laporan SQL, pekerjaan terjadwal, pengiriman WhatsApp, monitoring, log, dan pengawasan proses.",
    },
  },
  {
    title: { en: "Public websites", id: "Website publik" },
    description: {
      en: "Present a business clearly with a responsive website and a direct path from discovery to inquiry.",
      id: "Menampilkan bisnis secara jelas melalui website responsif dan jalur langsung dari penemuan menuju inquiry.",
    },
    deliverables: {
      en: "Responsive development, content hierarchy, purposeful motion, SEO foundations, SSL, and deployment support.",
      id: "Pengembangan responsif, hierarki konten, motion yang terarah, fondasi SEO, SSL, dan dukungan deployment.",
    },
  },
  {
    title: { en: "Deployment and production support", id: "Deployment dan dukungan production" },
    description: {
      en: "Get your application ready for daily use with hosting setup, scheduled processes, and a clear handover to your team.",
      id: "Siapkan aplikasi untuk penggunaan harian melalui penyiapan hosting, proses terjadwal, dan serah terima yang jelas kepada tim Anda.",
    },
    deliverables: {
      en: "Deployment configuration, SSL setup, process monitoring, documentation, and launch support within an agreed scope.",
      id: "Konfigurasi deployment, penyiapan SSL, pemantauan proses, dokumentasi, dan dukungan peluncuran sesuai cakupan yang disepakati.",
    },
  },
];

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://lourensiusyudha.my.id/services/#services",
  name: "Systems Development and IT Services",
  url: "https://lourensiusyudha.my.id/services/",
  description: "Operational systems, reporting automation, public websites, IT support, and infrastructure services for business teams.",
  provider: {
    "@type": "Person",
    "@id": "https://lourensiusyudha.my.id/#person",
    name: "Lourensius Yudha Kristianto",
    url: "https://lourensiusyudha.my.id/",
  },
  areaServed: "Worldwide",
  serviceType: services.map((service) => service.title.en),
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={serviceStructuredData} />
      <SiteHeader audience="clients" />
      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <BilingualText className={styles.category} en="For businesses · Project services" id="Untuk bisnis · Layanan project" />
            <BilingualText
              as="h1"
              en="Turn manual workflows into working systems."
              id="Ubah proses manual menjadi sistem yang berjalan."
            />
            <BilingualText
              as="p"
              className={styles.summary}
              en="I build operational tools, inventory systems, and reporting automation so your team can track work in one place. I also develop public websites and help bring projects into production."
              id="Saya membangun aplikasi operasional, sistem inventaris, dan otomatisasi laporan agar tim Anda dapat memantau pekerjaan di satu tempat. Saya juga mengembangkan website publik dan membantu deployment project."
            />
            <div className={styles.heroActions}>
              <Link href="#contact">
                <span className="lang-copy lang-en">Discuss your project</span>
                <span className="lang-copy lang-id">Diskusikan project Anda</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#case-studies">
                <span className="lang-copy lang-en">View case studies</span>
                <span className="lang-copy lang-id">Lihat studi kasus</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.serviceSection} id="services">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <BilingualText as="h2" id="Layanan yang dapat saya bantu" en="Ways I can help" />
              <BilingualText
                as="p"
                en="Each engagement starts with the workflow, the people using it, and the result the operation needs."
                id="Setiap kerja sama dimulai dari workflow, orang yang menggunakannya, dan hasil yang dibutuhkan operasional."
              />
            </div>
            <div className={styles.serviceList}>
              {services.map((service) => (
                <article key={service.title.en}>
                  <BilingualText as="h3" {...service.title} />
                  <BilingualText as="p" className={styles.serviceDescription} {...service.description} />
                  <div className={styles.deliverables}>
                    <BilingualText as="h4" en="Typical delivery" id="Cakupan pekerjaan" />
                    <BilingualText as="p" {...service.deliverables} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.caseStudySection} id="case-studies">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <BilingualText as="h2" en="See the work behind the services" id="Lihat hasil pekerjaan saya" />
              <BilingualText as="p" en="Inventory tracking, request approvals, scheduled reports, and a public website. Explore the problem, implementation, and outcomes of each project." id="Pencatatan inventaris, persetujuan permintaan, laporan terjadwal, dan website publik. Pelajari masalah, implementasi, serta hasil setiap project." />
            </div>
            <ProjectShowcase audience="clients" />
          </div>
        </section>

        <section className={styles.approachSection} id="process">
          <div className={styles.shell}>
            <BilingualText as="h2" en="How we start and work together" id="Cara memulai dan bekerja sama" />
            <div className={styles.approachGrid}>
              <article>
                <BilingualText as="h3" en="1. Share your brief" id="1. Ceritakan kebutuhan Anda" />
                <BilingualText as="p" en="Describe the current process, who uses it, the main problem, and the result you want. Include your target timeline, budget range if available, and existing tools or hosting." id="Jelaskan proses saat ini, siapa penggunanya, masalah utama, dan hasil yang diinginkan. Sertakan target waktu, kisaran anggaran jika tersedia, serta tools atau hosting yang digunakan." />
              </article>
              <article>
                <BilingualText as="h3" en="2. Agree on the scope" id="2. Sepakati cakupan" />
                <BilingualText as="p" en="We define the features, deliverables, timeline, cost, and what counts as a completed result before development starts. New requests are reviewed together for their effect on scope and schedule." id="Kita menetapkan fitur, hasil pekerjaan, waktu, biaya, dan kriteria selesai sebelum pengembangan dimulai. Permintaan tambahan dibahas bersama untuk menilai pengaruhnya terhadap cakupan dan jadwal." />
              </article>
              <article>
                <BilingualText as="h3" en="3. Build, review, and hand over" id="3. Bangun, tinjau, dan serahkan" />
                <BilingualText as="p" en="Review progress at agreed checkpoints and test the main workflows together. The handover follows the agreed deliverables: application, source code, setup documentation, and deployment assistance where included." id="Tinjau progres pada tahapan yang disepakati dan uji alur utama bersama. Serah terima mengikuti hasil pekerjaan yang disepakati: aplikasi, kode sumber, dokumentasi penyiapan, serta bantuan deployment jika termasuk dalam cakupan." />
              </article>
              <article>
                <BilingualText as="h3" en="4. Plan support after launch" id="4. Rencanakan dukungan setelah rilis" />
                <BilingualText as="p" en="We agree on the support period, reporting channel, and coverage for fixes before handover. Ongoing maintenance and new features are scoped separately so responsibilities stay clear." id="Kita menyepakati periode dukungan, kanal pelaporan, dan cakupan perbaikan sebelum serah terima. Pemeliharaan berkelanjutan serta fitur baru memiliki cakupan tersendiri agar tanggung jawab tetap jelas." />
              </article>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} id="contact">
          <div className={styles.shell}>
            <BilingualText as="h2" en="Have a workflow that needs a better system?" id="Memiliki workflow yang membutuhkan sistem lebih baik?" />
            <BilingualText as="p" en="A short description is enough to start. Send your current process, main problem, intended users, and target timeline by email or WhatsApp. We can clarify the details together." id="Penjelasan singkat sudah cukup untuk memulai. Kirim proses saat ini, masalah utama, calon pengguna, dan target waktu melalui email atau WhatsApp. Detail lainnya dapat kita bahas bersama." />
            <div className={styles.contactActions}>
              <a href="mailto:lourensius.yudha@gmail.com?subject=Project%20inquiry">
                <BilingualText en="Email about your project →" id="Kirim email project →" />
              </a>
              <a href="https://wa.me/6285259855468?text=Hi%20Yudha%2C%20I%20saw%20your%20services%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">
                <BilingualText en="Discuss on WhatsApp ↗" id="Diskusi via WhatsApp ↗" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>© 2026 Lourensius Yudha Kristianto</span>
        <Link href="/"><BilingualText en="Hiring? View my career portfolio →" id="Sedang merekrut? Lihat profil karier →" /></Link>
      </footer>
    </>
  );
}
