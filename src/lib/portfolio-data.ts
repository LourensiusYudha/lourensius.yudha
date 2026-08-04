export type Locale = "en" | "id";

export type LocalizedCopy = {
  en: string;
  id: string;
};

export type PortfolioProject = {
  title: LocalizedCopy;
  category: LocalizedCopy;
  summary: LocalizedCopy;
  detail: Record<Locale, string[]>;
  impacts: Record<Locale, string[]>;
  tech: string[];
  image: string;
  imageAlt: LocalizedCopy;
  imagePosition?: string;
  conceptVisual?: boolean;
  documentationUrl?: string;
  demoUrl?: string;
};

export const projects: PortfolioProject[] = [
  {
    title: {
      en: "Grand Opening, Gorontalo Branch",
      id: "Grand Opening Cabang Gorontalo",
    },
    category: { en: "Retail operations", id: "Operasional ritel" },
    summary: {
      en: "End-to-end IT readiness for a new branch, from network and POS setup to database validation.",
      id: "Kesiapan IT cabang baru dari jaringan dan POS hingga validasi database.",
    },
    detail: {
      en: [
        "A retail opening leaves no room for systems that almost work. I coordinated network and POS hardware, inventory and pricing databases, integration tests, and vendor readiness before the first customer arrived.",
        "On opening day I led three IT staff on site, monitored the systems in real time, and resolved issues as they appeared.",
      ],
      id: [
        "Pembukaan cabang ritel tidak memberi ruang untuk sistem yang sekadar hampir siap. Saya mengoordinasikan hardware jaringan dan POS, database inventaris dan harga, pengujian integrasi, serta kesiapan vendor sebelum pelanggan pertama datang.",
        "Pada hari pembukaan saya memimpin tiga staf IT di lokasi, memantau sistem secara real time, dan menyelesaikan kendala saat muncul.",
      ],
    },
    impacts: {
      en: ["Branch systems ready before day one", "Zero downtime on opening day"],
      id: ["Sistem siap sebelum hari pertama", "Zero downtime saat pembukaan"],
    },
    tech: ["Oracle DB", "SQL", "POS", "Network"],
    image: "/images/indogrosir1-optimized.jpg",
    imageAlt: {
      en: "Indogrosir Gorontalo branch prepared for its grand opening",
      id: "Cabang Indogrosir Gorontalo yang siap untuk grand opening",
    },
  },
  {
    title: { en: "Luvea Inventory System", id: "Sistem Inventory Luvea" },
    category: { en: "Inventory platform", id: "Platform inventaris" },
    summary: {
      en: "A single, dependable view for stock movement, availability, and day-to-day operations.",
      id: "Satu sumber data andal untuk pergerakan stok, ketersediaan, dan operasional harian.",
    },
    detail: {
      en: [
        "Stock tracking was split across spreadsheets and manual updates. I built a focused inventory system for recording stock in and out, checking current levels, and keeping warehouse and operations teams aligned.",
        "The product prioritizes speed and accuracy over feature bloat, giving the team a clearer daily workflow and fewer stock discrepancies.",
      ],
      id: [
        "Pelacakan stok tersebar di spreadsheet dan pembaruan manual. Saya membangun sistem inventaris untuk mencatat stok masuk dan keluar, memeriksa ketersediaan, serta menyelaraskan tim gudang dan operasional.",
        "Produk ini mengutamakan kecepatan dan akurasi, sehingga alur kerja harian lebih jelas dan selisih stok berkurang.",
      ],
    },
    impacts: {
      en: ["One source of stock truth", "Faster stock recording"],
      id: ["Satu sumber data stok", "Pencatatan stok lebih cepat"],
    },
    tech: ["Laravel", "MySQL", "PHP"],
    image: "/images/inventory-luvea.png",
    imageAlt: {
      en: "Dashboard of the Luvea inventory system",
      id: "Dashboard sistem inventory Luvea",
    },
  },
  {
    title: { en: "Luvea Website", id: "Website Luvea" },
    category: { en: "Brand website", id: "Website brand" },
    summary: {
      en: "A responsive storefront that brings the product story and inquiry path into one clear experience.",
      id: "Storefront responsif yang menyatukan cerita produk dan jalur inquiry dalam satu pengalaman.",
    },
    detail: {
      en: [
        "Luvea needed an online presence that matched the brand and made product discovery simple. I designed and built a responsive website with a clear hierarchy for products, story, and contact.",
        "The result is a polished public touchpoint with a shorter path from first visit to inquiry on desktop and mobile.",
      ],
      id: [
        "Luvea membutuhkan kehadiran online yang sesuai dengan brand dan memudahkan penemuan produk. Saya merancang serta membangun website responsif dengan hierarki jelas untuk produk, cerita, dan kontak.",
        "Hasilnya adalah touchpoint publik yang lebih rapi dengan jalur lebih singkat dari kunjungan pertama menuju inquiry di desktop maupun mobile.",
      ],
    },
    impacts: {
      en: ["Clearer brand presence", "Responsive across devices"],
      id: ["Kehadiran brand lebih jelas", "Responsif di berbagai perangkat"],
    },
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/luvea-optimized.jpg",
    imageAlt: {
      en: "Luvea website landing page",
      id: "Landing page website Luvea",
    },
  },
  {
    title: {
      en: "WhatsApp Sales Monitoring Bot",
      id: "Bot Monitoring Sales WhatsApp",
    },
    category: { en: "Reporting automation", id: "Otomatisasi laporan" },
    summary: {
      en: "Scheduled sales summaries and inventory alerts delivered where stakeholders already communicate.",
      id: "Ringkasan penjualan dan alert inventaris terjadwal di kanal komunikasi stakeholder.",
    },
    detail: {
      en: [
        "Daily sales reporting took hours of manual work. I built a bot that queries the company database, formats useful summaries, and sends them to stakeholder WhatsApp groups on schedule.",
        "The same system monitors thresholds and sends proactive alerts, helping the team respond to unusual stock movement or sales performance sooner.",
      ],
      id: [
        "Pelaporan penjualan harian membutuhkan proses manual selama berjam-jam. Saya membangun bot yang menjalankan query database, memformat ringkasan, dan mengirimkannya ke grup WhatsApp stakeholder secara terjadwal.",
        "Sistem yang sama memantau ambang batas dan mengirim alert proaktif agar tim dapat merespons pergerakan stok atau kinerja penjualan lebih cepat.",
      ],
    },
    impacts: {
      en: ["Monitoring available 24/7", "Manual reports automated"],
      id: ["Monitoring tersedia 24/7", "Laporan manual terotomatisasi"],
    },
    tech: ["PHP", "SQL", "WhatsApp API"],
    image: "/images/wa-bot.PNG",
    imageAlt: {
      en: "Sales report delivered by the WhatsApp monitoring bot",
      id: "Laporan penjualan dari bot monitoring WhatsApp",
    },
    imagePosition: "center top",
  },
  {
    title: {
      en: "PGA Inventory Request System",
      id: "Sistem Permintaan Inventaris PGA",
    },
    category: { en: "Workflow system", id: "Sistem workflow" },
    summary: {
      en: "A traceable digital request flow replacing physical forms and fragmented email approvals.",
      id: "Alur permintaan digital yang menggantikan formulir fisik dan approval email yang terpisah.",
    },
    detail: {
      en: [
        "Inventory requests previously moved through paper forms and email threads. I developed a digital workflow for submissions, manager approvals, fulfillment tracking, and request history.",
        "The interface keeps familiar form patterns while adding the visibility and accountability that the manual process lacked.",
      ],
      id: [
        "Permintaan inventaris sebelumnya berjalan melalui formulir fisik dan rangkaian email. Saya mengembangkan workflow digital untuk pengajuan, approval manajer, pelacakan pemenuhan, dan riwayat permintaan.",
        "Antarmukanya mempertahankan pola formulir yang familiar sambil menambahkan visibilitas dan akuntabilitas yang tidak dimiliki proses manual.",
      ],
    },
    impacts: {
      en: ["Faster approval flow", "Request status visible to teams"],
      id: ["Alur approval lebih cepat", "Status terlihat lintas tim"],
    },
    tech: ["PHP", "PostgreSQL", "JavaScript"],
    image: "/images/pga-inventory.jpg",
    imageAlt: {
      en: "Dashboard of the PGA inventory request system",
      id: "Dashboard sistem permintaan inventaris PGA",
    },
  },
  {
    title: {
      en: "Internal Operations Platform",
      id: "Platform Operasional Internal",
    },
    category: { en: "System development", id: "Pengembangan sistem" },
    summary: {
      en: "A centralized platform for operational data, approvals, and reports across departments.",
      id: "Platform terpusat untuk data operasional, approval, dan laporan lintas departemen.",
    },
    detail: {
      en: [
        "The operations team relied on scattered spreadsheets and repeated data entry. I designed a full-stack internal platform that centralizes role-based workflows, inventory tracking, and report generation.",
        "Scheduled synchronization and fallback routines help keep data consistent when the platform connects with existing systems.",
      ],
      id: [
        "Tim operasional mengandalkan spreadsheet yang tersebar dan input data berulang. Saya merancang platform internal full-stack yang memusatkan workflow berbasis peran, pelacakan inventaris, dan pembuatan laporan.",
        "Sinkronisasi terjadwal dan mekanisme fallback membantu menjaga konsistensi data saat platform terhubung dengan sistem yang sudah ada.",
      ],
    },
    impacts: {
      en: ["Operations in one platform", "Less repeated data processing"],
      id: ["Operasional dalam satu platform", "Mengurangi proses data berulang"],
    },
    tech: ["PHP", "JavaScript", "SQL"],
    image: "/images/internal-ops-concept.jpg",
    imageAlt: {
      en: "Concept artwork representing connected operational systems",
      id: "Artwork konsep yang menggambarkan sistem operasional terhubung",
    },
    conceptVisual: true,
  },
];
