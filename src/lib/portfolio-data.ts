export type Locale = "en" | "id";

export type LocalizedCopy = {
  en: string;
  id: string;
};

export type PortfolioProject = {
  title: LocalizedCopy;
  category: LocalizedCopy;
  summary: LocalizedCopy;
  contribution: LocalizedCopy;
  detail: Record<Locale, string[]>;
  impacts: Record<Locale, string[]>;
  impactLabels?: Record<Locale, string[]>;
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
      en: "Three months of IT readiness for 50 POS devices, supporting a branch launch for roughly 300 staff with zero downtime.",
      id: "Tiga bulan persiapan IT untuk 50 perangkat POS, mendukung pembukaan cabang bagi sekitar 300 staf tanpa downtime.",
    },
    contribution: {
      en: "Infrastructure readiness, POS preparation, database validation, and opening-day support.",
      id: "Kesiapan infrastruktur, persiapan POS, validasi database, dan dukungan pada hari pembukaan.",
    },
    detail: {
      en: [
        "A new Indogrosir branch needed its operational technology ready before the first customer arrived. Over three months, I coordinated network and POS readiness, validated inventory and pricing databases, and aligned vendors for 50 POS devices.",
        "On opening day, I supported operations serving roughly 300 staff, monitored systems in real time, and resolved issues as they appeared. The branch completed its opening day with zero downtime.",
      ],
      id: [
        "Cabang baru Indogrosir membutuhkan seluruh teknologi operasional siap sebelum pelanggan pertama datang. Selama tiga bulan, saya mengoordinasikan kesiapan jaringan dan POS, memvalidasi database inventaris dan harga, serta menyelaraskan vendor untuk 50 perangkat POS.",
        "Pada hari pembukaan, saya mendukung operasional untuk sekitar 300 staf, memantau sistem secara real time, dan menyelesaikan kendala saat muncul. Cabang menyelesaikan hari pembukaan tanpa downtime.",
      ],
    },
    impacts: {
      en: ["Three-month readiness", "50 POS devices", "Roughly 300 staff supported", "Zero opening-day downtime"],
      id: ["Persiapan tiga bulan", "50 perangkat POS", "Sekitar 300 staf didukung", "Tanpa downtime saat pembukaan"],
    },
    impactLabels: {
      en: ["Preparation", "Devices", "Operational scale", "Reliability"],
      id: ["Persiapan", "Perangkat", "Skala operasional", "Keandalan"],
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
      en: "An inventory system that replaced manual tracking for a 10+ item workflow with clearer, easier-to-monitor records.",
      id: "Sistem inventaris yang menggantikan pencatatan manual untuk alur 10+ item dengan data yang lebih jelas dan mudah dipantau.",
    },
    contribution: {
      en: "Inventory workflow design, Laravel development, and MySQL implementation.",
      id: "Perancangan workflow inventaris, pengembangan Laravel, dan implementasi MySQL.",
    },
    detail: {
      en: [
        "Stock tracking depended on manual updates. I built a focused inventory system for recording stock in and out, checking current levels, and managing more than 10 inventory items in one dependable operational view.",
        "The system made stock easier to monitor, reduced repetitive work, and helped the team identify recording errors before they became larger discrepancies.",
      ],
      id: [
        "Pelacakan stok bergantung pada pembaruan manual. Saya membangun sistem inventaris untuk mencatat stok masuk dan keluar, memeriksa ketersediaan, dan mengelola lebih dari 10 item inventaris dalam satu tampilan operasional yang andal.",
        "Sistem membuat stok lebih mudah dipantau, mengurangi pekerjaan berulang, dan membantu tim menemukan kesalahan pencatatan sebelum menjadi selisih yang lebih besar.",
      ],
    },
    impacts: {
      en: ["10+ inventory items", "Manual tracking replaced", "Stock easier to monitor", "Recording errors easier to catch"],
      id: ["10+ item inventaris", "Pencatatan manual digantikan", "Stok lebih mudah dipantau", "Kesalahan lebih mudah ditemukan"],
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
      en: "A responsive public website that presents the brand clearly and gives visitors a dependable path from discovery to inquiry.",
      id: "Website publik responsif yang menampilkan brand dengan jelas dan memberi pengunjung jalur andal dari penemuan menuju inquiry.",
    },
    contribution: {
      en: "Responsive design, front-end development, and production deployment.",
      id: "Desain responsif, pengembangan front-end, dan deployment ke production.",
    },
    detail: {
      en: [
        "Luvea needed an online presence that matched the brand and made product discovery simple. I designed and built a responsive website with a clear hierarchy for products, story, and contact.",
        "The result is a live public touchpoint with a stable experience and a shorter path from first visit to inquiry on desktop and mobile.",
      ],
      id: [
        "Luvea membutuhkan kehadiran online yang sesuai dengan brand dan memudahkan penemuan produk. Saya merancang serta membangun website responsif dengan hierarki jelas untuk produk, cerita, dan kontak.",
        "Hasilnya adalah touchpoint publik yang aktif dengan pengalaman stabil dan jalur lebih singkat dari kunjungan pertama menuju inquiry di desktop maupun mobile.",
      ],
    },
    impacts: {
      en: ["Live public website", "Clearer brand presence", "Responsive across devices", "Stable day-to-day experience"],
      id: ["Website publik aktif", "Kehadiran brand lebih jelas", "Responsif di berbagai perangkat", "Pengalaman harian yang stabil"],
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
      en: "Scheduled sales and margin reports that replaced a repetitive 10-minute manual step and reached staff on WhatsApp.",
      id: "Laporan sales dan margin terjadwal yang menggantikan proses manual 10 menit dan menjangkau staf melalui WhatsApp.",
    },
    contribution: {
      en: "SQL reporting logic, WhatsApp delivery, and scheduled automation.",
      id: "Logika laporan SQL, pengiriman WhatsApp, dan otomatisasi terjadwal.",
    },
    detail: {
      en: [
        "Each sales report required a repetitive 10-minute manual step. I built a bot that queries the company database, formats sales and margin summaries, and sends them to Indogrosir WhatsApp groups on schedule.",
        "The same system monitors thresholds and sends proactive alerts, helping the team respond to unusual stock movement or sales performance sooner.",
      ],
      id: [
        "Setiap laporan penjualan membutuhkan proses manual berulang selama 10 menit. Saya membangun bot yang menjalankan query database, memformat ringkasan sales dan margin, lalu mengirimkannya ke grup WhatsApp Indogrosir secara terjadwal.",
        "Sistem yang sama memantau ambang batas dan mengirim alert proaktif agar tim dapat merespons pergerakan stok atau kinerja penjualan lebih cepat.",
      ],
    },
    impacts: {
      en: ["10-minute reporting step automated", "Scheduled sales updates", "Margin reporting included", "Distributed through WhatsApp"],
      id: ["Proses laporan 10 menit diotomatisasi", "Update sales terjadwal", "Laporan margin tersedia", "Didistribusikan melalui WhatsApp"],
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
    contribution: {
      en: "Request workflow design, approval tracking, and full-stack development.",
      id: "Perancangan workflow permintaan, pelacakan approval, dan pengembangan full-stack.",
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
      en: ["Used across departments", "Approvals easier to track", "Request history organized", "Status visible to teams"],
      id: ["Digunakan lintas departemen", "Approval lebih mudah dipantau", "Riwayat pengajuan tersusun", "Status terlihat oleh tim"],
    },
    tech: ["PHP", "PostgreSQL", "JavaScript"],
    image: "/images/pga-inventory.png",
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
    contribution: {
      en: "System architecture, database workflows, reporting, and operational reliability.",
      id: "Arsitektur sistem, workflow database, reporting, dan keandalan operasional.",
    },
    detail: {
      en: [
        "Teams across departments relied on scattered spreadsheets and repeated data entry. I designed a full-stack internal platform that centralizes role-based workflows, inventory tracking, and report generation.",
        "The platform is accessed throughout the working day. Scheduled synchronization and fallback routines help keep data consistent when it connects with existing systems.",
      ],
      id: [
        "Tim lintas departemen mengandalkan spreadsheet yang tersebar dan input data berulang. Saya merancang platform internal full-stack yang memusatkan workflow berbasis peran, pelacakan inventaris, dan pembuatan laporan.",
        "Platform diakses sepanjang hari kerja. Sinkronisasi terjadwal dan mekanisme fallback membantu menjaga konsistensi data saat terhubung dengan sistem yang sudah ada.",
      ],
    },
    impacts: {
      en: ["Used across departments", "Accessed throughout the workday", "Operations in one platform", "Less repeated data processing"],
      id: ["Digunakan lintas departemen", "Diakses sepanjang hari kerja", "Operasional dalam satu platform", "Mengurangi proses data berulang"],
    },
    impactLabels: {
      en: ["Reach", "Usage", "Coverage", "Efficiency"],
      id: ["Jangkauan", "Penggunaan", "Cakupan", "Efisiensi"],
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
