import type { LocalizedCopy } from "@/lib/portfolio-data";

export type ExperienceResponsibility = {
  title: LocalizedCopy;
  description: LocalizedCopy;
};

export type ExperienceEntry = {
  slug: string;
  title: LocalizedCopy;
  company: LocalizedCopy;
  period: LocalizedCopy;
  location: LocalizedCopy;
  summary: LocalizedCopy;
  jobDescription: LocalizedCopy[];
  responsibilities: ExperienceResponsibility[];
  technologies: string[];
  relatedProjectSlugs: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    slug: "it-system-and-data-specialist",
    title: { en: "IT System and Data Specialist", id: "IT System and Data Specialist" },
    company: { en: "Indomaret Group", id: "Indomaret Group" },
    period: { en: "April 2024 - Present (2 years 6 months)", id: "April 2024 - Sekarang (2 tahun 6 bulan)" },
    location: { en: "Surabaya", id: "Surabaya" },
    summary: {
      en: "Developing operational systems, building SQL-based reporting, automating monitoring, and supporting business-critical retail IT operations.",
      id: "Mengembangkan sistem operasional, membangun laporan berbasis SQL, mengotomatisasi monitoring, dan mendukung operasional IT ritel yang kritis bagi bisnis.",
    },
    jobDescription: [
      {
        en: "I work across operational system development, SQL-based reporting, database operations, technical troubleshooting, and IT readiness for retail operations.",
        id: "Saya menangani pengembangan sistem operasional, laporan berbasis SQL, operasional database, troubleshooting teknis, dan kesiapan IT untuk operasional ritel.",
      },
      {
        en: "The role translates operational requirements into structured data, reliable applications, and practical automation through workflow analysis, database design, application development, testing, and implementation.",
        id: "Peran ini menerjemahkan kebutuhan operasional menjadi data terstruktur, aplikasi yang andal, dan otomatisasi praktis melalui analisis workflow, desain database, pengembangan aplikasi, pengujian, serta implementasi.",
      },
    ],
    responsibilities: [
      {
        title: { en: "Operational systems", id: "Sistem operasional" },
        description: {
          en: "Develop and maintain web-based operational systems used by business teams to streamline workflows, centralize information, and reduce manual processes.",
          id: "Mengembangkan dan memelihara sistem operasional berbasis web yang digunakan tim bisnis untuk menyederhanakan workflow, memusatkan informasi, dan mengurangi proses manual.",
        },
      },
      {
        title: { en: "SQL reporting and data", id: "Laporan SQL dan data" },
        description: {
          en: "Build SQL-based reporting and data solutions using Oracle Database and PostgreSQL to support operational monitoring and business requirements.",
          id: "Membangun laporan dan solusi data berbasis SQL menggunakan Oracle Database dan PostgreSQL untuk mendukung monitoring operasional serta kebutuhan bisnis.",
        },
      },
      {
        title: { en: "Automated monitoring", id: "Monitoring otomatis" },
        description: {
          en: "Built an automated sales and inventory monitoring solution integrated with WhatsApp, enabling operational reports and alerts to be delivered 24/7 without manual monitoring.",
          id: "Membangun solusi monitoring sales dan inventaris otomatis yang terintegrasi dengan WhatsApp, sehingga laporan serta alert operasional dapat dikirim 24/7 tanpa monitoring manual.",
        },
      },
      {
        title: { en: "New branch IT readiness", id: "Kesiapan IT cabang baru" },
        description: {
          en: "Supported end-to-end IT readiness for a new retail branch, including network, POS, hardware, and database validation, contributing to zero operational downtime during opening day.",
          id: "Mendukung kesiapan IT end-to-end untuk cabang ritel baru, termasuk validasi jaringan, POS, hardware, dan database, serta berkontribusi pada zero operational downtime saat hari pembukaan.",
        },
      },
      {
        title: { en: "Operational troubleshooting", id: "Troubleshooting operasional" },
        description: {
          en: "Have diagnosed and handled 50+ operational IT issues across applications, databases, networks, hardware, and supporting infrastructure.",
          id: "Telah mendiagnosis dan menangani lebih dari 50 kendala IT operasional pada aplikasi, database, jaringan, hardware, serta infrastruktur pendukung.",
        },
      },
      {
        title: { en: "Requirements to implementation", id: "Kebutuhan hingga implementasi" },
        description: {
          en: "Translate operational requirements into practical technical solutions through workflow analysis, database design, application development, testing, and implementation.",
          id: "Menerjemahkan kebutuhan operasional menjadi solusi teknis praktis melalui analisis workflow, desain database, pengembangan aplikasi, pengujian, dan implementasi.",
        },
      },
    ],
    technologies: ["SQL", "Oracle Database", "PostgreSQL", "MySQL", "Laravel", "JavaScript / TypeScript", "Windows Server", "Networking", "VMware", "POS"],
    relatedProjectSlugs: ["surveyor-member-relation-visit-monitoring", "operations-platform", "pga-inventory-request-system", "whatsapp-sales-monitoring-bot", "grand-opening-gorontalo"],
  },
  {
    slug: "database-administrator-internship",
    title: { en: "Database Administrator Intern", id: "Database Administrator Intern" },
    company: { en: "PT. CENTRAL TEXINDO", id: "PT. CENTRAL TEXINDO" },
    period: { en: "July 2022 - April 2023 (10 months)", id: "Juli 2022 - April 2023 (10 bulan)" },
    location: { en: "West Bandung Regency", id: "Kabupaten Bandung Barat" },
    summary: {
      en: "Designed and deployed a VMware-based virtualized server environment and documented its configuration for reliable daily operations.",
      id: "Merancang dan menerapkan lingkungan server virtual berbasis VMware serta mendokumentasikan konfigurasinya untuk operasional harian yang andal.",
    },
    jobDescription: [
      {
        en: "The internship focused on server virtualization and infrastructure management. I consolidated workloads in a VMware-based environment and prepared the server setup for dependable day-to-day use.",
        id: "Program magang berfokus pada virtualisasi server dan pengelolaan infrastruktur. Saya mengonsolidasikan workload dalam lingkungan berbasis VMware dan menyiapkan konfigurasi server untuk penggunaan harian yang andal.",
      },
    ],
    responsibilities: [
      {
        title: { en: "Virtualized server environment", id: "Lingkungan server virtual" },
        description: {
          en: "Designed and deployed a VMware-based virtualized server environment to consolidate workloads, improve infrastructure utilization, and simplify system management.",
          id: "Merancang dan menerapkan lingkungan server virtual berbasis VMware untuk mengonsolidasikan workload, meningkatkan pemanfaatan infrastruktur, dan menyederhanakan pengelolaan sistem.",
        },
      },
      {
        title: { en: "Server configuration and documentation", id: "Konfigurasi dan dokumentasi server" },
        description: {
          en: "Configured, tested, and documented server environments to support reliable daily operations and maintainable IT infrastructure.",
          id: "Mengonfigurasi, menguji, dan mendokumentasikan lingkungan server untuk mendukung operasional harian yang andal serta infrastruktur IT yang mudah dipelihara.",
        },
      },
    ],
    technologies: ["VMware", "Server Virtualization", "Server Configuration", "Infrastructure Documentation"],
    relatedProjectSlugs: [],
  },
];
