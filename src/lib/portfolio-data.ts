export type Locale = "en" | "id";

export type LocalizedCopy = {
  en: string;
  id: string;
};

export type PortfolioGalleryImage = {
  src: string;
  alt: LocalizedCopy;
  caption: LocalizedCopy;
};

export type PortfolioTechGroup = {
  name: LocalizedCopy;
  items: Array<{
    name: string;
    description: LocalizedCopy;
  }>;
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
  gallery?: PortfolioGalleryImage[];
  techGroups?: PortfolioTechGroup[];
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
    tech: [
      "Laravel 13",
      "PHP 8.5",
      "MySQL",
      "Tailwind CSS",
      "Bootstrap",
      "Production Web Server",
      "Shared Hosting",
      "Git Version Control",
      "SSL Certificate",
    ],
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
    tech: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis Scroll",
      "Vercel",
      "Production Web Server",
      "Shared Hosting",
      "Git Version Control",
      "SSL Certificate",
    ],
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
    tech: [
      "Node.js",
      "TypeScript",
      "Baileys",
      "PostgreSQL",
      "qrcode-terminal",
      "PM2",
      "Local Server",
      "Cron Job",
    ],
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
    tech: [
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
      "NextAuth.js",
      "Chart.js / Recharts",
      "SheetJS / ExcelJS",
      "@react-pdf/renderer / jsPDF",
      "Node.js",
      "PM2 / Nginx",
      "Intranet / On-Premise",
    ],
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
      en: "A retail back-office platform that centralizes sales reporting, inventory workflows, store monitoring, and operational menus.",
      id: "Platform back-office ritel yang memusatkan laporan penjualan, workflow inventaris, monitoring toko, dan menu operasional.",
    },
    contribution: {
      en: "Interface development, server-side workflows, reporting modules, database integration, and operational maintenance.",
      id: "Pengembangan antarmuka, workflow server, modul pelaporan, integrasi database, dan pemeliharaan operasional.",
    },
    detail: {
      en: [
        "I developed this internal back-office platform to bring daily retail information into one operational interface. The home screen combines store status, issuing progress, sales values, and a real-time analog clock so the team can see key information without moving between separate tools.",
        "The navigation organizes reporting and operational modules for member services, sales, pricing, promotions, receiving, stock issues, supplier documents, and monitoring. A dedicated login interface provides the entry point, while the reporting mega-menus make a large set of workflows easier to reach and manage.",
      ],
      id: [
        "Saya mengembangkan platform back-office internal ini untuk menyatukan informasi operasional ritel harian dalam satu antarmuka. Halaman utama menggabungkan status toko, progres issuing, nilai penjualan, dan jam analog real-time agar tim dapat melihat informasi penting tanpa berpindah-pindah tools.",
        "Navigasinya mengatur modul pelaporan dan operasional untuk member services, sales, harga, promosi, receiving, kendala stok, dokumen supplier, dan monitoring. Halaman login menjadi pintu masuk sistem, sedangkan mega-menu pelaporan memudahkan tim menjangkau dan mengelola banyak workflow dari satu tempat.",
      ],
    },
    impacts: {
      en: ["Operational menus centralized", "Store status visible in real time", "Sales and inventory data in one interface", "Reporting workflows easier to access"],
      id: ["Menu operasional terpusat", "Status toko terlihat real-time", "Data sales dan inventaris dalam satu antarmuka", "Workflow laporan lebih mudah diakses"],
    },
    impactLabels: {
      en: ["Navigation", "Monitoring", "Data coverage", "Reporting"],
      id: ["Navigasi", "Monitoring", "Cakupan data", "Pelaporan"],
    },
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Laravel / CodeIgniter", "MySQL / PostgreSQL"],
    image: "/images/internal-ops/cover.jpeg",
    imageAlt: {
      en: "Inventory and receiving mega-menu on the internal retail operations platform",
      id: "Mega-menu inventory dan receiving pada platform operasional internal ritel",
    },
    gallery: [
      {
        src: "/images/internal-ops/login.jpeg",
        alt: {
          en: "Glassmorphism login screen for the internal operations platform",
          id: "Halaman login glassmorphism untuk platform operasional internal",
        },
        caption: {
          en: "Login interface with a custom glassmorphism panel layered over the retail illustration.",
          id: "Antarmuka login dengan panel glassmorphism custom di atas ilustrasi ritel.",
        },
      },
      {
        src: "/images/internal-ops/dashboard.jpeg",
        alt: {
          en: "Home dashboard showing store status, issuing progress, and a real-time analog clock",
          id: "Dashboard utama yang menampilkan status toko, progres issuing, dan jam analog real-time",
        },
        caption: {
          en: "Operational home screen combining store metrics, issuing status, quick actions, and a synchronized analog clock.",
          id: "Halaman utama operasional yang menggabungkan metrik toko, status issuing, aksi cepat, dan jam analog tersinkronisasi.",
        },
      },
      {
        src: "/images/internal-ops/reporting-menu.jpeg",
        alt: {
          en: "Reporting mega-menu containing sales, member, pricing, promotion, and information modules",
          id: "Mega-menu pelaporan berisi modul sales, member, harga, promosi, dan informasi",
        },
        caption: {
          en: "Reporting mega-menu that groups a large collection of sales, member, pricing, promotion, and monitoring tools.",
          id: "Mega-menu pelaporan yang mengelompokkan berbagai tools sales, member, harga, promosi, dan monitoring.",
        },
      },
    ],
    techGroups: [
      {
        name: { en: "Frontend", id: "Frontend" },
        items: [
          {
            name: "HTML, CSS, and JavaScript",
            description: {
              en: "Build the page structure, visual styling, and core interactions.",
              id: "Membangun struktur halaman, tampilan visual, dan interaksi dasar.",
            },
          },
          {
            name: "Bootstrap",
            description: {
              en: "Provides the mega-menu navbar, data cards, buttons, and responsive interface components.",
              id: "Digunakan untuk mega-menu navbar, cards data, tombol, dan komponen antarmuka responsif.",
            },
          },
          {
            name: "Custom CSS (Glassmorphism)",
            description: {
              en: "Creates the transparent login panel and blur effect with the backdrop-filter property.",
              id: "Menerapkan panel login transparan dan efek blur menggunakan properti backdrop-filter.",
            },
          },
          {
            name: "JavaScript (Widget)",
            description: {
              en: "Uses DOM and canvas manipulation to keep the analog clock synchronized in real time.",
              id: "Menggunakan manipulasi DOM dan canvas untuk menyinkronkan jam analog secara real-time.",
            },
          },
        ],
      },
      {
        name: { en: "Backend", id: "Backend" },
        items: [
          {
            name: "PHP",
            description: {
              en: "Handles the dominant server-side logic for the retail back-office information system.",
              id: "Menangani logika server utama untuk sistem informasi back-office ritel.",
            },
          },
          {
            name: "Framework (Laravel / CodeIgniter)",
            description: {
              en: "Applies an MVC architecture for application routing and complex reporting menus.",
              id: "Menerapkan arsitektur MVC untuk routing aplikasi dan menu pelaporan yang kompleks.",
            },
          },
        ],
      },
      {
        name: { en: "Database", id: "Database" },
        items: [
          {
            name: "RDBMS (MySQL / PostgreSQL)",
            description: {
              en: "Stores and processes relational data for sales aggregation, planograms, and large-scale stock movement.",
              id: "Menyimpan dan mengolah data relasional untuk agregasi penjualan, planogram, dan pergerakan stok berskala besar.",
            },
          },
        ],
      },
      {
        name: { en: "Visual assets", id: "Aset visual" },
        items: [
          {
            name: "Static 2D and isometric illustrations",
            description: {
              en: "Uses PNG, WebP, and SVG assets as layered backgrounds for dynamic HTML and CSS data elements.",
              id: "Menggunakan aset PNG, WebP, dan SVG sebagai latar berlapis untuk elemen data HTML dan CSS yang dinamis.",
            },
          },
        ],
      },
    ],
  },
];
