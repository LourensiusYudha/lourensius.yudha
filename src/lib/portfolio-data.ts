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

export type PortfolioGalleryGroup = {
  name: LocalizedCopy;
  description: LocalizedCopy;
  layout: "desktop" | "mobile";
  images: PortfolioGalleryImage[];
};

export type PortfolioTechGroup = {
  name: LocalizedCopy;
  items: Array<{
    name: string;
    description: LocalizedCopy;
  }>;
};

export type PortfolioProject = {
  slug: string;
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
  galleryGroups?: PortfolioGalleryGroup[];
  techGroups?: PortfolioTechGroup[];
  documentationUrl?: string;
  demoUrl?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "surveyor-member-relation-visit-monitoring",
    title: {
      en: "Surveyor Visit Monitoring System",
      id: "Sistem Monitoring Kunjungan Surveyor",
    },
    category: { en: "Web and mobile operations", id: "Operasional web dan mobile" },
    summary: {
      en: "A production platform used by 10+ field surveyors and supervisors to assign, record, review, map, and report member visits across mobile and web.",
      id: "Platform production yang digunakan 10+ surveyor lapangan dan supervisor untuk penugasan, pencatatan, review, pemetaan, serta pelaporan kunjungan member melalui mobile dan web.",
    },
    contribution: {
      en: "Product workflow design, full-stack web development, authentication, database, storage, mobile API integration, and production deployment.",
      id: "Perancangan workflow produk, pengembangan web full-stack, autentikasi, database, storage, integrasi API mobile, dan deployment production.",
    },
    detail: {
      en: [
        "I designed the workflow around two connected perspectives for 10+ users: field surveyors completing GET and RKM visits from their own phones, and supervisors administering assignments, evidence review, performance monitoring, and reports from office computers.",
        "Now deployed and used in field operations, the web application and Flutter client share the same Supabase-backed data flow. GPS validation, compressed photo uploads, role-based authorization, maps, analytics, and export tools turn field activity into information the operations team can review and act on.",
      ],
      id: [
        "Saya merancang workflow berdasarkan dua kebutuhan yang saling terhubung untuk 10+ pengguna: surveyor menyelesaikan kunjungan GET dan RKM melalui HP masing-masing, sedangkan supervisor mengelola assignment, review bukti, monitoring performa, dan laporan melalui komputer kantor.",
        "Kini telah digunakan dalam operasional lapangan, aplikasi web dan klien Flutter memakai alur data berbasis Supabase yang sama. Validasi GPS, upload foto terkompresi, otorisasi berbasis peran, peta, analytics, dan fitur export mengubah aktivitas lapangan menjadi informasi yang dapat ditinjau dan ditindaklanjuti tim operasional.",
      ],
    },
    impacts: {
      en: ["10+ field and supervisory users", "Surveyors work from their own phones", "Supervisors administer from office computers", "Assignment, review, maps, and exports centralized"],
      id: ["10+ pengguna lapangan dan supervisor", "Surveyor bekerja melalui HP masing-masing", "Supervisor mengelola melalui komputer kantor", "Assignment, review, peta, dan export terpusat"],
    },
    impactLabels: {
      en: ["Users", "Field access", "Admin access", "Workflow"],
      id: ["Pengguna", "Akses lapangan", "Akses admin", "Workflow"],
    },
    tech: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "PostgreSQL",
      "Flutter",
      "Leaflet",
      "Recharts",
      "Vercel",
    ],
    image: "/images/surveyor-banner.webp",
    imageAlt: {
      en: "Surveyor member relation system banner showing supervisor dashboards and advisor mobile workflows",
      id: "Banner sistem member relation Surveyor yang menampilkan dashboard supervisor dan workflow mobile advisor",
    },
    galleryGroups: [
      {
        name: { en: "Web Admin", id: "Web Admin" },
        description: {
          en: "Production screens for monitoring, review, assignments, master data, analytics, maps, users, and audit activity.",
          id: "Tampilan production untuk monitoring, review, assignment, master data, analytics, peta, pengguna, dan aktivitas audit.",
        },
        layout: "desktop",
        images: [
          { src: "/images/surveyor/admin/1.webp", alt: { en: "Surveyor web admin dashboard", id: "Dashboard web admin Surveyor" }, caption: { en: "Dashboard summarizes visit volume, review status, and GET and RKM activity.", id: "Dashboard merangkum jumlah kunjungan, status review, serta aktivitas GET dan RKM." } },
          { src: "/images/surveyor/admin/2.webp", alt: { en: "Surveyor web admin navigation", id: "Navigasi web admin Surveyor" }, caption: { en: "Role-specific navigation provides access to review, assignments, members, data, analytics, performance, maps, logs, and users.", id: "Navigasi berbasis role menyediakan akses ke review, assignment, member, data, analytics, performa, peta, log, dan pengguna." } },
          { src: "/images/surveyor/admin/4.webp", alt: { en: "RKM visit assignment form", id: "Form assignment kunjungan RKM" }, caption: { en: "Administrators assign RKM visits to advisors with member search and an optional deadline.", id: "Administrator memberikan assignment RKM kepada advisor dengan pencarian member dan deadline opsional." } },
          { src: "/images/surveyor/admin/7.webp", alt: { en: "Visit analytics and report exports", id: "Analytics kunjungan dan export laporan" }, caption: { en: "Filtered KPI summaries can be exported to Excel or PDF for operational reporting.", id: "Ringkasan KPI terfilter dapat diekspor ke Excel atau PDF untuk laporan operasional." } },
          { src: "/images/surveyor/admin/8.webp", alt: { en: "Advisor performance dashboard", id: "Dashboard performa advisor" }, caption: { en: "Advisor performance combines active assignments, recent visits, review status, and briefing exports.", id: "Performa advisor menggabungkan assignment aktif, kunjungan terbaru, status review, dan export briefing." } },
          { src: "/images/surveyor/admin/9.webp", alt: { en: "Advisor assignment map", id: "Peta assignment advisor" }, caption: { en: "The map visualizes active GET and RKM locations and supports advisor filtering.", id: "Peta memvisualisasikan lokasi GET dan RKM aktif serta mendukung filter advisor." } },
          { src: "/images/surveyor/admin/10.webp", alt: { en: "Administrative audit log", id: "Log audit administratif" }, caption: { en: "The audit log records assignments, reviews, member changes, and user administration.", id: "Log audit mencatat assignment, review, perubahan member, dan administrasi pengguna." } },
          { src: "/images/surveyor/admin/11.webp", alt: { en: "Fourteen-day visit trend chart", id: "Grafik tren kunjungan 14 hari" }, caption: { en: "Trend and performance views help administrators inspect visit activity over time.", id: "Tampilan tren dan performa membantu administrator meninjau aktivitas kunjungan dari waktu ke waktu." } },
        ],
      },
      {
        name: { en: "Mobile Advisor", id: "Mobile Advisor" },
        description: {
          en: "Field screens for secure login, GET and RKM workflows, assignments, maps, visit history, and GPS evidence.",
          id: "Tampilan lapangan untuk login aman, workflow GET dan RKM, assignment, peta, riwayat kunjungan, dan bukti GPS.",
        },
        layout: "mobile",
        images: [
          { src: "/images/surveyor/mobile/1.webp", alt: { en: "Advisor mobile login", id: "Login mobile advisor" }, caption: { en: "Advisors sign in with an assigned code and password.", id: "Advisor masuk menggunakan kode dan password yang diberikan." } },
          { src: "/images/surveyor/mobile/2.webp", alt: { en: "Advisor mobile home screen", id: "Beranda mobile advisor" }, caption: { en: "The field home screen surfaces GET visits, RKM assignments, deadlines, and review outcomes.", id: "Beranda lapangan menampilkan kunjungan GET, assignment RKM, deadline, dan hasil review." } },
          { src: "/images/surveyor/mobile/3.webp", alt: { en: "Mobile GET visit form", id: "Form kunjungan GET mobile" }, caption: { en: "The GET workflow supports independent new-member surveys with operational fields and camera access.", id: "Workflow GET mendukung survey member baru secara mandiri dengan field operasional dan akses kamera." } },
          { src: "/images/surveyor/mobile/5.webp", alt: { en: "Mobile advisor assignment map", id: "Peta assignment advisor mobile" }, caption: { en: "The mobile map gives advisors a location-aware view of GET and RKM activity.", id: "Peta mobile memberi advisor tampilan aktivitas GET dan RKM berbasis lokasi." } },
          { src: "/images/surveyor/mobile/6.webp", alt: { en: "Mobile visit history", id: "Riwayat kunjungan mobile" }, caption: { en: "Visit history can be filtered by review status and reopened for detail.", id: "Riwayat kunjungan dapat difilter berdasarkan status review dan dibuka kembali untuk melihat detail." } },
        ],
      },
    ],
    techGroups: [
      {
        name: { en: "Frontend", id: "Frontend" },
        items: [
          { name: "React 19", description: { en: "Builds the component-based user interface.", id: "Membangun antarmuka pengguna berbasis komponen." } },
          { name: "Next.js 16 (App Router)", description: { en: "Provides routing, Server Components, and Server Actions.", id: "Menangani routing, Server Components, dan Server Actions." } },
          { name: "TypeScript", description: { en: "Maintains type safety across the application.", id: "Menjaga type safety di seluruh aplikasi." } },
          { name: "Tailwind CSS 4", description: { en: "Supports a custom utility-first interface design.", id: "Mendukung desain antarmuka custom berbasis utility-first." } },
          { name: "Framer Motion", description: { en: "Handles purposeful interface transitions and animation.", id: "Menangani transisi dan animasi antarmuka yang terarah." } },
          { name: "Lucide React and Sonner", description: { en: "Provide interface icons and toast feedback.", id: "Menyediakan ikon antarmuka dan feedback melalui toast." } },
          { name: "next-themes", description: { en: "Manages light and dark appearance modes.", id: "Mengelola mode tampilan terang dan gelap." } },
          { name: "Recharts", description: { en: "Visualizes visit analytics and advisor performance.", id: "Memvisualisasikan analytics kunjungan dan performa advisor." } },
          { name: "Leaflet and React Leaflet", description: { en: "Display member, assignment, and visit locations.", id: "Menampilkan lokasi member, assignment, dan kunjungan." } },
        ],
      },
      {
        name: { en: "Backend and data", id: "Backend dan data" },
        items: [
          { name: "Server Actions and Route Handlers", description: { en: "Run server logic within the Next.js application.", id: "Menjalankan logika server di dalam aplikasi Next.js." } },
          { name: "Supabase Auth", description: { en: "Authenticates advisors and administrators.", id: "Mengautentikasi advisor dan administrator." } },
          { name: "PostgreSQL and Row Level Security", description: { en: "Store operational data and enforce access rules close to the data layer.", id: "Menyimpan data operasional dan menerapkan aturan akses dekat dengan lapisan data." } },
          { name: "Supabase Storage", description: { en: "Stores visit photos and serves them through signed URLs.", id: "Menyimpan foto kunjungan dan menyajikannya melalui signed URL." } },
          { name: "Zod", description: { en: "Validates operational input before processing.", id: "Memvalidasi input operasional sebelum diproses." } },
          { name: "Next.js Middleware and @supabase/ssr", description: { en: "Maintain session cookies and protect routes.", id: "Menjaga session cookie dan melindungi route." } },
        ],
      },
      {
        name: { en: "Data and files", id: "Data dan file" },
        items: [
          { name: "browser-image-compression", description: { en: "Compresses field photos before upload.", id: "Mengompresi foto lapangan sebelum upload." } },
          { name: "ExcelJS and SheetJS", description: { en: "Support member imports and Excel report exports.", id: "Mendukung impor member dan export laporan Excel." } },
          { name: "jsPDF and AutoTable", description: { en: "Generate structured PDF reports.", id: "Menghasilkan laporan PDF yang terstruktur." } },
          { name: "date-fns", description: { en: "Formats operational dates, including the WITA time zone.", id: "Memformat tanggal operasional, termasuk zona waktu WITA." } },
        ],
      },
      {
        name: { en: "Infrastructure and mobile", id: "Infrastruktur dan mobile" },
        items: [
          { name: "Vercel", description: { en: "Hosts the web application with deployment from GitHub.", id: "Meng-host aplikasi web dengan deployment dari GitHub." } },
          { name: "Git and GitHub", description: { en: "Provide version control and deployment workflow.", id: "Menyediakan version control dan workflow deployment." } },
          { name: "ESLint and TypeScript", description: { en: "Support code quality and static checks.", id: "Mendukung kualitas kode dan pemeriksaan statis." } },
          { name: "Flutter for Android", description: { en: "Provides the field client for advisors.", id: "Menyediakan klien lapangan untuk advisor." } },
          { name: "Mobile login API", description: { en: "Exchanges advisor credentials for a Supabase session token through the shared API.", id: "Menukar kredensial advisor dengan token sesi Supabase melalui API yang sama." } },
        ],
      },
    ],
  },
  {
    slug: "grand-opening-gorontalo",
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
    slug: "luvea-inventory-system",
    title: { en: "Luvea Digital Platform", id: "Platform Digital Luvea" },
    category: { en: "Website and inventory system", id: "Website dan sistem inventaris" },
    summary: {
      en: "Two complementary digital products for Luvea: a public landing page for brand discovery and an operational system for inventory, sales, margins, and reporting.",
      id: "Dua produk digital yang saling melengkapi untuk Luvea: landing page publik untuk memperkenalkan brand dan sistem operasional untuk inventaris, penjualan, margin, serta laporan.",
    },
    contribution: {
      en: "Product and responsive design, front-end development, inventory workflow design, Laravel and MySQL implementation, and production deployment.",
      id: "Desain produk dan responsif, pengembangan front-end, perancangan workflow inventaris, implementasi Laravel dan MySQL, serta deployment production.",
    },
    detail: {
      en: [
        "Luvea needed two different digital experiences within the same business ecosystem. The public landing page introduces the brand, product story, and contact path, while the administration system supports product records, sales, stock receipts, restock planning, stock opname, margin calculations, reporting, and printable invoices.",
        "I treated them as separate modules with different audiences and technology choices, not as a single integrated application. Together they cover the customer-facing presence and the operational workflow behind the business.",
      ],
      id: [
        "Luvea membutuhkan dua pengalaman digital yang berbeda dalam satu ekosistem bisnis. Landing page publik memperkenalkan brand, cerita produk, dan jalur kontak, sedangkan sistem administrasi mendukung data produk, penjualan, penerimaan stok, perencanaan restock, stock opname, perhitungan margin, laporan, serta invoice siap cetak.",
        "Saya memperlakukannya sebagai modul terpisah dengan pengguna dan pilihan teknologi yang berbeda, bukan sebagai satu aplikasi yang terintegrasi. Keduanya bersama-sama mencakup kehadiran untuk pelanggan dan workflow operasional di balik bisnis.",
      ],
    },
    impacts: {
      en: ["Public website launched", "10+ inventory items managed", "Manual stock tracking replaced", "Two business needs covered"],
      id: ["Website publik diluncurkan", "10+ item inventaris dikelola", "Pencatatan stok manual digantikan", "Dua kebutuhan bisnis tercakup"],
    },
    impactLabels: {
      en: ["Brand", "Inventory", "Operations", "Scope"],
      id: ["Brand", "Inventaris", "Operasional", "Cakupan"],
    },
    tech: [
      "Next.js",
      "JavaScript",
      "Framer Motion",
      "Laravel 13",
      "PHP 8.5",
      "MySQL",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/images/luvea-banner.webp",
    imageAlt: {
      en: "Luvea digital platform banner showing the public website and inventory, sales, margin, and invoice workflows",
      id: "Banner Platform Digital Luvea yang menampilkan website publik serta workflow inventaris, penjualan, margin, dan invoice",
    },
    galleryGroups: [
      {
        name: { en: "Public Landing Page", id: "Landing Page Publik" },
        description: {
          en: "The customer-facing module introduces Luvea's brand, products, and inquiry path across screen sizes.",
          id: "Modul untuk pelanggan yang memperkenalkan brand, produk, dan jalur inquiry Luvea di berbagai ukuran layar.",
        },
        layout: "desktop",
        images: [
          { src: "/images/luvea-optimized.jpg", alt: { en: "Luvea responsive public landing page", id: "Landing page publik Luvea yang responsif" }, caption: { en: "The public website presents the brand and gives visitors a direct path from product discovery to inquiry.", id: "Website publik memperkenalkan brand dan memberi pengunjung jalur langsung dari penemuan produk menuju inquiry." } },
        ],
      },
      {
        name: { en: "Inventory System", id: "Sistem Inventaris" },
        description: {
          en: "The administration module connects product, sales, inventory, margin, and reporting workflows in one operational interface.",
          id: "Modul administrasi menghubungkan workflow produk, penjualan, inventaris, margin, dan laporan dalam satu antarmuka operasional.",
        },
        layout: "desktop",
        images: [
          { src: "/images/luvea/inventory/login.webp", alt: { en: "Luvea administration system login", id: "Login sistem administrasi Luvea" }, caption: { en: "A dedicated login protects access to Luvea's inventory and sales operations.", id: "Login khusus melindungi akses menuju operasional inventaris dan penjualan Luvea." } },
          { src: "/images/luvea/inventory/products.webp", alt: { en: "Luvea product and inventory catalogue", id: "Katalog produk dan inventaris Luvea" }, caption: { en: "The product catalogue brings PLU, barcode, purchase price, selling price, stock, and maintenance actions into one view.", id: "Katalog produk menyatukan PLU, barcode, harga beli, harga jual, stok, dan tindakan pengelolaan dalam satu tampilan." } },
          { src: "/images/luvea/inventory/sales-entry.webp", alt: { en: "Luvea sales entry form", id: "Form input penjualan Luvea" }, caption: { en: "Sales entries capture the channel, product, quantity, received value, and subtotal while referencing current stock.", id: "Input penjualan mencatat channel, produk, jumlah, nilai diterima, dan subtotal dengan mengacu pada stok terkini." } },
          { src: "/images/luvea/inventory/stock-receipt.webp", alt: { en: "Luvea stock receipt form", id: "Form penerimaan stok Luvea" }, caption: { en: "Stock receipts record the supplier, receipt date, product quantities, and purchase prices.", id: "Penerimaan stok mencatat pemasok, tanggal penerimaan, jumlah produk, dan harga beli." } },
          { src: "/images/luvea/inventory/restock.webp", alt: { en: "Luvea restock planning screen", id: "Tampilan perencanaan restock Luvea" }, caption: { en: "Restock recommendations use recent sales, stock thresholds, and a target coverage period to flag products that need attention.", id: "Rekomendasi restock menggunakan penjualan terbaru, ambang stok, dan target periode persediaan untuk menandai produk yang perlu diperhatikan." } },
          { src: "/images/luvea/inventory/stock-opname.webp", alt: { en: "Luvea stock opname history", id: "Riwayat stock opname Luvea" }, caption: { en: "Stock opname compares physical and system quantities and retains a history of adjustments.", id: "Stock opname membandingkan jumlah fisik dengan sistem serta menyimpan riwayat penyesuaian." } },
          { src: "/images/luvea/inventory/stock-history.webp", alt: { en: "Luvea stock movement history", id: "Riwayat pergerakan stok Luvea" }, caption: { en: "A chronological log traces stock-in, stock-out, previous quantities, updated quantities, and their source transactions.", id: "Log kronologis menelusuri stok masuk, stok keluar, jumlah sebelumnya, jumlah terbaru, dan transaksi sumbernya." } },
          { src: "/images/luvea/inventory/targets.webp", alt: { en: "Luvea sales targets and period comparison", id: "Target penjualan dan perbandingan periode Luvea" }, caption: { en: "Monthly targets and period comparisons connect sales performance with product-level changes.", id: "Target bulanan dan perbandingan periode menghubungkan performa penjualan dengan perubahan pada tingkat produk." } },
          { src: "/images/luvea/inventory/reports.webp", alt: { en: "Luvea report configuration", id: "Konfigurasi laporan Luvea" }, caption: { en: "Reports can be prepared by type and date range before previewing the output.", id: "Laporan dapat disiapkan berdasarkan jenis dan rentang tanggal sebelum hasilnya ditinjau." } },
          { src: "/images/luvea/inventory/margin-calculator.webp", alt: { en: "Luvea marketplace margin calculator", id: "Kalkulator margin marketplace Luvea" }, caption: { en: "The margin calculator models marketplace fees, optional programs, net receipts, and estimated profit.", id: "Kalkulator margin memodelkan biaya marketplace, program opsional, penerimaan bersih, dan estimasi laba." } },
          { src: "/images/luvea/inventory/invoice.webp", alt: { en: "Printable Luvea sales invoice", id: "Invoice penjualan Luvea siap cetak" }, caption: { en: "Sales data is converted into a customer-ready invoice with item details, totals, and a print action.", id: "Data penjualan diubah menjadi invoice untuk pelanggan yang berisi detail barang, total, dan aksi cetak." } },
        ],
      },
    ],
    techGroups: [
      {
        name: { en: "Public landing page", id: "Landing page publik" },
        items: [
          { name: "Next.js and JavaScript", description: { en: "Provide the public website structure and front-end behavior.", id: "Menyediakan struktur website publik dan perilaku front-end." } },
          { name: "Tailwind CSS", description: { en: "Builds the responsive visual system.", id: "Membangun sistem visual yang responsif." } },
          { name: "Framer Motion and Lenis Scroll", description: { en: "Add purposeful motion and controlled smooth scrolling.", id: "Menambahkan motion yang terarah dan smooth scrolling yang terkontrol." } },
          { name: "Vercel", description: { en: "Hosts the public website.", id: "Meng-host website publik." } },
        ],
      },
      {
        name: { en: "Inventory system", id: "Sistem inventaris" },
        items: [
          { name: "Laravel 13 and PHP 8.5", description: { en: "Run the inventory application and its business rules.", id: "Menjalankan aplikasi inventaris dan business rule-nya." } },
          { name: "MySQL", description: { en: "Stores items and stock movement records.", id: "Menyimpan item dan catatan pergerakan stok." } },
          { name: "Tailwind CSS and Bootstrap", description: { en: "Support the operational interface.", id: "Mendukung antarmuka operasional." } },
          { name: "Shared hosting and production web server", description: { en: "Provide the production runtime for the inventory module.", id: "Menyediakan runtime production untuk modul inventaris." } },
        ],
      },
      {
        name: { en: "Delivery", id: "Delivery" },
        items: [
          { name: "Git version control", description: { en: "Tracks changes across both modules.", id: "Melacak perubahan pada kedua modul." } },
          { name: "SSL certificate", description: { en: "Secures production access.", id: "Mengamankan akses production." } },
        ],
      },
    ],
    demoUrl: "https://admin.luvea.my.id",
  },
  {
    slug: "whatsapp-sales-monitoring-bot",
    title: {
      en: "WhatsApp Sales Monitoring Bot",
      id: "Bot Monitoring Sales WhatsApp",
    },
    category: { en: "Reporting automation", id: "Otomatisasi laporan" },
    summary: {
      en: "Scheduled sales and margin reports for 9 divisions that replaced a repetitive 10-minute manual step and reached staff on WhatsApp.",
      id: "Laporan sales dan margin terjadwal untuk 9 divisi yang menggantikan proses manual berulang selama 10 menit dan dikirim melalui WhatsApp.",
    },
    contribution: {
      en: "SQL reporting logic, WhatsApp delivery, and scheduled automation.",
      id: "Logika laporan SQL, pengiriman WhatsApp, dan otomatisasi terjadwal.",
    },
    detail: {
      en: [
        "Each sales report required a repetitive 10-minute manual step and often depended on the reporting team being available during its shift. I built a bot that queries the company database, formats sales and margin summaries, and sends scheduled updates to WhatsApp groups used across 9 divisions.",
        "The same system monitors thresholds and sends proactive alerts, helping the team respond to unusual stock movement or sales performance sooner.",
      ],
      id: [
        "Setiap laporan penjualan membutuhkan proses manual berulang selama 10 menit dan sering bergantung pada ketersediaan tim report di shift terkait. Saya membangun bot yang menjalankan query database, memformat ringkasan sales dan margin, lalu mengirimkan update terjadwal ke grup WhatsApp yang digunakan oleh 9 divisi.",
        "Sistem yang sama memantau ambang batas dan mengirim alert proaktif agar tim dapat merespons pergerakan stok atau kinerja penjualan lebih cepat.",
      ],
    },
    impacts: {
      en: ["9 divisions receive the reports", "10-minute reporting step automated", "Less dependency on reporting-team shifts", "Sales and margin updates sent on schedule"],
      id: ["Laporan menjangkau 9 divisi", "Proses laporan 10 menit diotomatisasi", "Mengurangi ketergantungan pada shift tim report", "Update sales dan margin dikirim terjadwal"],
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
    slug: "pga-inventory-request-system",
    title: {
      en: "PGA Inventory Request System",
      id: "Sistem Permintaan Inventaris PGA",
    },
    category: { en: "Workflow system", id: "Sistem workflow" },
    summary: {
      en: "A Laravel-based system that centralizes cross-department inventory requests, item-level review, fulfillment, warehouse stock, and receipt documents.",
      id: "Sistem berbasis Laravel yang memusatkan permintaan inventaris lintas divisi, review per barang, realisasi, stok gudang, dan dokumen tanda terima.",
    },
    contribution: {
      en: "Workflow and data modeling, full-stack Laravel development, role-based access, inventory control, reporting, and document generation.",
      id: "Perancangan workflow dan data, pengembangan Laravel full-stack, akses berbasis peran, kontrol inventaris, pelaporan, dan pembuatan dokumen.",
    },
    detail: {
      en: [
        "I built one connected workflow for Admin GA and division accounts. Each division uses one account held by its supervisor, with requests submitted by the supervisor or a person they designate. Request periods control when submissions are accepted, while Admin GA manages review queues, item-level decisions, fulfillment, and warehouse stock in one traceable system.",
        "The application also turns operational data into recap matrices, period comparisons, Excel exports, PDF receipts, and digitally signed proof of handover. Service-layer logic keeps inventory and realization rules separate from the interface.",
      ],
      id: [
        "Saya membangun satu workflow terhubung untuk Admin GA dan akun divisi. Setiap divisi menggunakan satu akun yang dipegang SPV, dengan permintaan diajukan oleh SPV atau petugas yang ditunjuk. Periode mengatur kapan permintaan dapat diajukan, sedangkan Admin GA mengelola antrean review, keputusan per barang, realisasi, dan stok gudang dalam satu sistem yang dapat ditelusuri.",
        "Data operasional kemudian diolah menjadi rekap matrix, perbandingan periode, export Excel, tanda terima PDF, dan bukti serah terima dengan tanda tangan digital. Logic pada service layer menjaga aturan inventaris dan realisasi tetap terpisah dari antarmuka.",
      ],
    },
    impacts: {
      en: ["One controlled account per division", "Supervisors or designated staff submit requests", "Admin GA controls review and fulfillment", "Stock and handover records remain traceable"],
      id: ["Satu akun terkontrol per divisi", "SPV atau petugas yang ditunjuk mengajukan permintaan", "Admin GA mengelola review dan realisasi", "Stok dan dokumen serah terima dapat ditelusuri"],
    },
    impactLabels: {
      en: ["Access", "Submission", "Administration", "Traceability"],
      id: ["Akses", "Pengajuan", "Administrasi", "Ketertelusuran"],
    },
    tech: [
      "PHP 8.3+",
      "Laravel 13",
      "MySQL",
      "Blade",
      "Alpine.js",
      "Tailwind CSS",
      "Chart.js",
      "PhpSpreadsheet",
      "DomPDF",
      "PHPUnit",
    ],
    image: "/images/pga-inventory-banner.webp",
    imageAlt: {
      en: "GA Request System banner showing administration dashboards, warehouse stock, reporting, and receipt documents",
      id: "Banner GA Request System yang menampilkan dashboard administrasi, stok gudang, pelaporan, dan dokumen tanda terima",
    },
    galleryGroups: [
      {
        name: { en: "Admin GA", id: "Admin GA" },
        description: {
          en: "Administration screens covering request periods, review, fulfillment, reporting, inventory, and handover documents.",
          id: "Tampilan administrasi yang mencakup periode permintaan, review, realisasi, pelaporan, inventaris, dan dokumen serah terima.",
        },
        layout: "desktop",
        images: [
          { src: "/images/pga-inventory/admin/dashboard.webp", alt: { en: "Admin GA inventory request dashboard", id: "Dashboard permintaan inventaris Admin GA" }, caption: { en: "The dashboard highlights active periods, pending reviews, request values, stock alerts, and participation.", id: "Dashboard menampilkan periode aktif, antrean review, nilai permintaan, peringatan stok, dan partisipasi." } },
          { src: "/images/pga-inventory/admin/periods.webp", alt: { en: "Inventory request period management", id: "Pengelolaan periode permintaan inventaris" }, caption: { en: "Admin GA controls the submission window for each request period.", id: "Admin GA mengatur rentang waktu pengajuan untuk setiap periode permintaan." } },
          { src: "/images/pga-inventory/admin/review-queue.webp", alt: { en: "Inventory request review queue", id: "Antrean review permintaan inventaris" }, caption: { en: "The review queue supports filtering and bulk decisions across division submissions.", id: "Antrean review mendukung filter dan keputusan massal untuk pengajuan divisi." } },
          { src: "/images/pga-inventory/admin/item-review.webp", alt: { en: "Item-level inventory request review", id: "Review permintaan inventaris per barang" }, caption: { en: "Each requested item can be approved, partially approved, or rejected with an administrative note.", id: "Setiap barang dapat disetujui, disetujui sebagian, atau ditolak beserta catatan administratif." } },
          { src: "/images/pga-inventory/admin/realization.webp", alt: { en: "Inventory request realization workflow", id: "Workflow realisasi permintaan inventaris" }, caption: { en: "The realization view connects review results, actual handover quantities, and receipt documents.", id: "Tampilan realisasi menghubungkan hasil review, jumlah barang yang diserahkan, dan dokumen tanda terima." } },
          { src: "/images/pga-inventory/admin/recap-matrix.webp", alt: { en: "Cross-division inventory recap matrix", id: "Matrix rekap inventaris lintas divisi" }, caption: { en: "A matrix summarizes quantities and values by item and division with multiple export options.", id: "Matrix merangkum jumlah dan nilai berdasarkan barang serta divisi dengan beberapa pilihan export." } },
          { src: "/images/pga-inventory/admin/period-comparison.webp", alt: { en: "Inventory request period comparison", id: "Perbandingan periode permintaan inventaris" }, caption: { en: "Period comparison makes changes in requested and approved values visible by division.", id: "Perbandingan periode memperlihatkan perubahan nilai permintaan dan persetujuan per divisi." } },
          { src: "/images/pga-inventory/admin/stock-management.webp", alt: { en: "GA warehouse stock management", id: "Pengelolaan stok gudang GA" }, caption: { en: "Warehouse stock, incoming stock, adjustments, and low-stock states are managed from one screen.", id: "Stok gudang, barang masuk, penyesuaian, dan status stok rendah dikelola dari satu layar." } },
          { src: "/images/pga-inventory/admin/receipt.webp", alt: { en: "Digital proof of inventory realization", id: "Bukti digital realisasi inventaris" }, caption: { en: "The system generates a printable PDF handover receipt with realization details and three digital signature fields.", id: "Sistem menghasilkan tanda terima PDF siap cetak berisi detail realisasi dan tiga area tanda tangan digital." } },
        ],
      },
      {
        name: { en: "Division User", id: "Pengguna Divisi" },
        description: {
          en: "Division-user screens covering active periods, request preparation, submission confirmation, receipt documents, and request history.",
          id: "Tampilan pengguna divisi yang mencakup periode aktif, penyusunan permintaan, konfirmasi pengajuan, dokumen tanda terima, dan riwayat permintaan.",
        },
        layout: "desktop",
        images: [
          { src: "/images/pga-inventory/user/dashboard.webp", alt: { en: "Division user inventory request dashboard", id: "Dashboard permintaan inventaris pengguna divisi" }, caption: { en: "The dashboard summarizes the active period, remaining time, submission status, request value, realization, and recent history.", id: "Dashboard merangkum periode aktif, sisa waktu, status pengajuan, nilai permintaan, realisasi, dan riwayat terbaru." } },
          { src: "/images/pga-inventory/user/request-form.webp", alt: { en: "Division inventory request form", id: "Form permintaan inventaris divisi" }, caption: { en: "Users select quantities from the GA item master, search the catalog, and can copy a previous period as a starting point.", id: "Pengguna memilih jumlah dari master barang GA, mencari katalog, dan dapat menyalin periode sebelumnya sebagai titik awal." } },
          { src: "/images/pga-inventory/user/request-confirmation.webp", alt: { en: "Inventory request submission confirmation", id: "Konfirmasi pengajuan permintaan inventaris" }, caption: { en: "A confirmation step presents the selected items and estimated total before the request is submitted.", id: "Tahap konfirmasi menampilkan barang terpilih dan estimasi total sebelum permintaan dikirim." } },
          { src: "/images/pga-inventory/user/submission-receipt.webp", alt: { en: "Inventory request submission receipt", id: "Tanda terima pengajuan inventaris" }, caption: { en: "The system generates proof of submission with item details, status, value, and signature fields for the handover process.", id: "Sistem menghasilkan bukti pengajuan berisi detail barang, status, nilai, dan area tanda tangan untuk proses serah terima." } },
          { src: "/images/pga-inventory/user/request-history.webp", alt: { en: "Division inventory request history", id: "Riwayat permintaan inventaris divisi" }, caption: { en: "Request history keeps pending, approved, and completed periods visible with submission and review dates.", id: "Riwayat menjaga periode menunggu, disetujui, dan selesai tetap terlihat beserta tanggal pengajuan dan review." } },
        ],
      },
    ],
    techGroups: [
      {
        name: { en: "Backend", id: "Backend" },
        items: [
          { name: "PHP 8.3+ and Laravel 13", description: { en: "Provide the application foundation and server-side workflow.", id: "Menjadi fondasi aplikasi dan workflow sisi server." } },
          { name: "Eloquent ORM and migrations", description: { en: "Model relational data and controlled schema changes.", id: "Memodelkan data relasional dan perubahan skema yang terkontrol." } },
          { name: "Laravel Breeze", description: { en: "Handles session-based Blade authentication.", id: "Menangani autentikasi Blade berbasis session." } },
          { name: "Service layer", description: { en: "Separates inventory, realization, receipt, and import rules from controllers.", id: "Memisahkan aturan inventaris, realisasi, tanda terima, dan import dari controller." } },
          { name: "Role-based access", description: { en: "Separates Admin GA capabilities from division-user actions.", id: "Memisahkan kemampuan Admin GA dari tindakan pengguna divisi." } },
        ],
      },
      {
        name: { en: "Frontend", id: "Frontend" },
        items: [
          { name: "Blade and Alpine.js", description: { en: "Build the server-rendered interface and lightweight interactions.", id: "Membangun antarmuka server-rendered dan interaksi ringan." } },
          { name: "Tailwind CSS and @tailwindcss/forms", description: { en: "Provide the interface styling and consistent form controls.", id: "Menyediakan styling antarmuka dan kontrol form yang konsisten." } },
          { name: "Chart.js", description: { en: "Visualizes dashboard and participation data.", id: "Memvisualisasikan data dashboard dan partisipasi." } },
          { name: "Vite and Laravel Vite plugin", description: { en: "Build and serve frontend assets.", id: "Membangun dan menyajikan aset frontend." } },
        ],
      },
      {
        name: { en: "Database and storage", id: "Database dan storage" },
        items: [
          { name: "MySQL", description: { en: "Stores production application data.", id: "Menyimpan data aplikasi production." } },
          { name: "Database sessions and queues", description: { en: "Keep sessions and queued work within the database driver.", id: "Menangani session dan antrean kerja melalui database driver." } },
          { name: "Local file storage", description: { en: "Stores receipt and import files.", id: "Menyimpan file tanda terima dan import." } },
        ],
      },
      {
        name: { en: "Integrations and documents", id: "Integrasi dan dokumen" },
        items: [
          { name: "PhpSpreadsheet", description: { en: "Supports Excel import and export workflows.", id: "Mendukung workflow import dan export Excel." } },
          { name: "DomPDF", description: { en: "Generates PDF handover receipts.", id: "Menghasilkan tanda terima serah terima dalam format PDF." } },
          { name: "Digital signature pad", description: { en: "Captures handover signatures for receipt documents.", id: "Merekam tanda tangan serah terima untuk dokumen tanda terima." } },
        ],
      },
      {
        name: { en: "Quality and tooling", id: "Quality dan tooling" },
        items: [
          { name: "PHPUnit", description: { en: "Covers feature and unit testing.", id: "Mencakup pengujian feature dan unit." } },
          { name: "Laravel Pint", description: { en: "Maintains consistent PHP code style.", id: "Menjaga konsistensi gaya kode PHP." } },
          { name: "Composer, npm, and Git", description: { en: "Manage dependencies, assets, and version control.", id: "Mengelola dependency, aset, dan version control." } },
        ],
      },
    ],
  },
  {
    slug: "operations-platform",
    title: {
      en: "Operations Platform",
      id: "Platform Operasional",
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
        "I developed this back-office platform to bring daily retail information into one operational interface. The home screen combines store status, issuing progress, sales values, and a real-time analog clock so the team can see key information without moving between separate tools.",
        "The navigation organizes reporting and operational modules for member services, sales, pricing, promotions, receiving, stock issues, supplier documents, and monitoring. A dedicated login interface provides the entry point, while the reporting mega-menus make a large set of workflows easier to reach and manage.",
      ],
      id: [
        "Saya mengembangkan platform back-office ini untuk menyatukan informasi operasional ritel harian dalam satu antarmuka. Halaman utama menggabungkan status toko, progres issuing, nilai penjualan, dan jam analog real-time agar tim dapat melihat informasi penting tanpa berpindah-pindah tools.",
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
    image: "/images/operations-platform/cover.jpeg",
    imageAlt: {
      en: "Inventory and receiving mega-menu on the retail operations platform",
      id: "Mega-menu inventory dan receiving pada platform operasional ritel",
    },
    gallery: [
      {
        src: "/images/operations-platform/login.jpeg",
        alt: {
          en: "Glassmorphism login screen for the operations platform",
          id: "Halaman login glassmorphism untuk platform operasional",
        },
        caption: {
          en: "Login interface with a custom glassmorphism panel layered over the retail illustration.",
          id: "Antarmuka login dengan panel glassmorphism custom di atas ilustrasi ritel.",
        },
      },
      {
        src: "/images/operations-platform/dashboard.jpeg",
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
        src: "/images/operations-platform/reporting-menu.jpeg",
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
