import type { LocalizedCopy } from "@/lib/portfolio-data";

export type CaseStudyItem = {
  title: LocalizedCopy;
  description: LocalizedCopy;
};

export type CaseStudyContent = {
  overview: {
    role: LocalizedCopy;
    users: LocalizedCopy;
    status: LocalizedCopy;
  };
  problem: LocalizedCopy[];
  responsibilities: LocalizedCopy[];
  constraints: LocalizedCopy[];
  workflow: CaseStudyItem[];
  decisions: CaseStudyItem[];
  resultIntro: LocalizedCopy;
  learnings: LocalizedCopy[];
  coverCaption: LocalizedCopy;
};

export const caseStudies: Record<string, CaseStudyContent> = {
  "surveyor-member-relation-visit-monitoring": {
    overview: {
      role: { en: "Product workflow and full-stack development", id: "Workflow produk dan pengembangan full-stack" },
      users: { en: "Field advisors and operations administrators", id: "Advisor lapangan dan admin operasional" },
      status: { en: "In production and used in field operations", id: "Production dan digunakan di operasional lapangan" },
    },
    problem: [
      {
        en: "Member relation visits involve field activity and administrative control at the same time. Advisors need a practical way to receive assignments, locate members, document GET or RKM visits, capture evidence, and follow their own history from a phone.",
        id: "Kunjungan member relation melibatkan aktivitas lapangan dan kontrol administratif secara bersamaan. Advisor membutuhkan cara praktis untuk menerima assignment, menemukan lokasi member, mendokumentasikan kunjungan GET atau RKM, mengambil bukti, dan melihat riwayat sendiri melalui ponsel.",
      },
      {
        en: "Administrators need a connected view for member data, review queues, assignments, advisor performance, maps, audit activity, and reporting. Without one shared flow, monitoring depends more heavily on fragmented updates and manual spreadsheet work.",
        id: "Administrator membutuhkan tampilan terhubung untuk data member, antrean review, assignment, performa advisor, peta, aktivitas audit, dan laporan. Tanpa satu alur bersama, monitoring lebih bergantung pada update yang terpisah dan pekerjaan spreadsheet manual.",
      },
    ],
    responsibilities: [
      {
        en: "I shaped the product around the advisor and administrator workflows, then handled the full-stack web implementation across interface, authentication, authorization, database, photo storage, analytics, exports, mobile API integration, and production deployment.",
        id: "Saya membentuk produk berdasarkan workflow advisor dan administrator, kemudian menangani implementasi web full-stack yang mencakup antarmuka, autentikasi, otorisasi, database, storage foto, analytics, export, integrasi API mobile, dan deployment production.",
      },
      {
        en: "I also supported operational adoption through user onboarding, review-flow design, assignment management, and reporting outputs that administrators can use without rebuilding the data in spreadsheets.",
        id: "Saya juga mendukung penerapan operasional melalui onboarding pengguna, perancangan alur review, pengelolaan assignment, dan output laporan yang dapat digunakan administrator tanpa menyusun ulang data di spreadsheet.",
      },
    ],
    constraints: [
      {
        en: "The system had to serve field users on mobile devices as well as administrators working through a wider web dashboard.",
        id: "Sistem harus melayani pengguna lapangan melalui perangkat mobile sekaligus administrator yang bekerja melalui dashboard web yang lebih luas.",
      },
      {
        en: "Visit photos and GPS information required controlled access, dependable upload handling, and server-side authorization.",
        id: "Foto kunjungan dan informasi GPS membutuhkan akses terkontrol, proses upload yang andal, dan otorisasi di sisi server.",
      },
      {
        en: "Maps, charts, image galleries, and export libraries needed to remain useful without slowing the main operational pages.",
        id: "Peta, chart, galeri foto, dan library export harus tetap berguna tanpa memperlambat halaman operasional utama.",
      },
    ],
    workflow: [
      {
        title: { en: "Assign the visit", id: "Berikan assignment" },
        description: { en: "An administrator manages member data and assigns an RKM visit, while GET visits can be started by an advisor in the field.", id: "Administrator mengelola data member dan memberikan assignment kunjungan RKM, sedangkan kunjungan GET dapat dimulai advisor di lapangan." },
      },
      {
        title: { en: "Record field evidence", id: "Catat bukti lapangan" },
        description: { en: "The advisor completes the visit form, captures GPS, adds conclusions and follow-up, and uploads compressed photos.", id: "Advisor mengisi form kunjungan, mengambil GPS, menambahkan kesimpulan serta tindak lanjut, lalu mengunggah foto terkompresi." },
      },
      {
        title: { en: "Validate and store", id: "Validasi dan simpan" },
        description: { en: "Server-side rules validate the submission, compare location distance, store relational data, and secure photos behind signed URLs.", id: "Aturan di sisi server memvalidasi pengajuan, membandingkan jarak lokasi, menyimpan data relasional, dan melindungi foto melalui signed URL." },
      },
      {
        title: { en: "Review and report", id: "Review dan laporkan" },
        description: { en: "Administrators approve or reject visits, monitor trends and advisor performance, inspect maps, and export the required report.", id: "Administrator menyetujui atau menolak kunjungan, memantau tren dan performa advisor, meninjau peta, lalu mengekspor laporan yang dibutuhkan." },
      },
    ],
    decisions: [
      {
        title: { en: "Authorization enforced on the server", id: "Otorisasi diterapkan di server" },
        description: { en: "Role checks protect advisor and administrator routes at the server layer instead of relying on hidden interface controls.", id: "Pemeriksaan role melindungi route advisor dan administrator pada lapisan server, bukan hanya mengandalkan kontrol antarmuka yang disembunyikan." },
      },
      {
        title: { en: "One data flow for web and mobile", id: "Satu alur data untuk web dan mobile" },
        description: { en: "The Flutter client authenticates through a route handler and uses the same Supabase-backed operational data as the web application.", id: "Klien Flutter melakukan autentikasi melalui route handler dan menggunakan data operasional berbasis Supabase yang sama dengan aplikasi web." },
      },
      {
        title: { en: "Field evidence optimized before transfer", id: "Bukti lapangan dioptimalkan sebelum dikirim" },
        description: { en: "Photos are compressed on the client before upload, then retrieved in batches through signed URLs for controlled gallery access.", id: "Foto dikompresi pada client sebelum upload, kemudian diambil secara batch melalui signed URL untuk akses galeri yang terkontrol." },
      },
      {
        title: { en: "Location-aware visit validation", id: "Validasi kunjungan berbasis lokasi" },
        description: { en: "GPS capture and distance flags help reviewers compare a visit with the registered member location.", id: "Capture GPS dan flag jarak membantu reviewer membandingkan kunjungan dengan lokasi member yang terdaftar." },
      },
      {
        title: { en: "Heavy features loaded when needed", id: "Fitur berat dimuat saat dibutuhkan" },
        description: { en: "Charts and export tools use dynamic imports, while database queries return only the fields required by each view.", id: "Chart dan tools export menggunakan dynamic import, sedangkan query database hanya mengambil field yang dibutuhkan setiap tampilan." },
      },
    ],
    resultIntro: {
      en: "Now in production, the system connects field visit execution with administrative monitoring. Advisors submit visits from mobile devices, while administrators assign work, review evidence, manage members, analyze activity, and export reports without rebuilding the workflow in spreadsheets.",
      id: "Kini telah production, sistem menghubungkan pelaksanaan kunjungan lapangan dengan monitoring administratif. Advisor mengirim data kunjungan melalui perangkat mobile, sedangkan administrator memberikan assignment, meninjau bukti, mengelola member, menganalisis aktivitas, dan mengekspor laporan tanpa menyusun ulang workflow di spreadsheet.",
    },
    learnings: [
      {
        en: "A field system works best when mobile data entry and administrative review are designed as one continuous workflow.",
        id: "Sistem lapangan bekerja paling baik ketika input data mobile dan review administratif dirancang sebagai satu workflow berkelanjutan.",
      },
      {
        en: "Authorization needs to be enforced close to both server logic and data access because interface visibility alone is not a security boundary.",
        id: "Otorisasi perlu diterapkan dekat dengan logika server dan akses data karena visibilitas antarmuka saja bukan batas keamanan.",
      },
      {
        en: "Photo, map, chart, and export features require deliberate loading strategies to keep routine operational screens responsive.",
        id: "Fitur foto, peta, chart, dan export membutuhkan strategi loading yang terencana agar layar operasional rutin tetap responsif.",
      },
    ],
    coverCaption: {
      en: "Surveyor combines a web administration dashboard with mobile field tools for member visit monitoring.",
      id: "Surveyor menggabungkan dashboard administrasi web dengan tools mobile lapangan untuk monitoring kunjungan member.",
    },
  },
  "grand-opening-gorontalo": {
    overview: {
      role: { en: "IT readiness and launch support", id: "Persiapan IT dan dukungan pembukaan" },
      users: { en: "Around 300 branch staff; 50 POS devices", id: "Sekitar 300 staf cabang; 50 perangkat POS" },
      status: { en: "Branch opening completed", id: "Pembukaan cabang selesai" },
    },
    problem: [
      {
        en: "A new Indogrosir branch needed its operational technology ready before the first customer arrived. Around 300 staff and 50 POS devices would depend on the same network, transaction, inventory, and pricing environment from day one.",
        id: "Cabang baru Indogrosir membutuhkan seluruh teknologi operasional siap sebelum pelanggan pertama datang. Sekitar 300 staf dan 50 perangkat POS akan bergantung pada jaringan, transaksi, inventaris, dan data harga yang sama sejak hari pertama.",
      },
      {
        en: "A failure in one part of that chain could slow checkout, disrupt staff coordination, or delay the opening. The work therefore had to connect infrastructure readiness with real operational conditions.",
        id: "Gangguan pada satu bagian dari rangkaian tersebut dapat memperlambat checkout, menghambat koordinasi staf, atau mengganggu pembukaan. Karena itu, kesiapan infrastruktur harus diuji berdasarkan kondisi operasional sebenarnya.",
      },
    ],
    responsibilities: [
      {
        en: "I coordinated network and POS readiness, validated inventory and pricing databases, aligned checks with vendors and business teams, and provided direct IT support during opening day.",
        id: "Saya mengoordinasikan kesiapan jaringan dan POS, memvalidasi database inventaris dan harga, menyelaraskan pemeriksaan bersama vendor dan tim bisnis, serta memberikan dukungan IT langsung pada hari pembukaan.",
      },
    ],
    constraints: [
      {
        en: "The branch had a fixed opening date, so infrastructure, data, devices, and staff preparation had to progress in parallel.",
        id: "Cabang memiliki tanggal pembukaan yang tetap, sehingga infrastruktur, data, perangkat, dan kesiapan staf harus berjalan secara paralel.",
      },
      {
        en: "Inventory and pricing data had to be accurate before live transactions began.",
        id: "Data inventaris dan harga harus akurat sebelum transaksi langsung dimulai.",
      },
      {
        en: "Issues on opening day needed an immediate response without interrupting customer-facing operations.",
        id: "Kendala pada hari pembukaan harus ditangani segera tanpa mengganggu operasional yang berhadapan langsung dengan pelanggan.",
      },
    ],
    workflow: [
      {
        title: { en: "Map readiness", id: "Petakan kesiapan" },
        description: {
          en: "List the dependencies across networking, POS devices, databases, vendors, and operational teams.",
          id: "Mencatat dependensi jaringan, perangkat POS, database, vendor, dan tim operasional.",
        },
      },
      {
        title: { en: "Prepare and validate", id: "Siapkan dan validasi" },
        description: {
          en: "Configure devices and verify that inventory and pricing data are ready for transaction use.",
          id: "Mengonfigurasi perangkat dan memastikan data inventaris serta harga siap digunakan untuk transaksi.",
        },
      },
      {
        title: { en: "Test in context", id: "Uji dalam kondisi nyata" },
        description: {
          en: "Run checks close to the real opening-day environment and resolve gaps before launch.",
          id: "Melakukan pemeriksaan mendekati kondisi hari pembukaan dan menyelesaikan kekurangan sebelum peluncuran.",
        },
      },
      {
        title: { en: "Monitor the launch", id: "Pantau pembukaan" },
        description: {
          en: "Support the live operation, monitor system readiness, and handle issues as they appear.",
          id: "Mendukung operasional langsung, memantau kesiapan sistem, dan menangani kendala saat muncul.",
        },
      },
    ],
    decisions: [
      {
        title: { en: "Staged validation", id: "Validasi bertahap" },
        description: {
          en: "Readiness checks were divided by dependency so device, data, and network issues could be isolated before the final test.",
          id: "Pemeriksaan kesiapan dibagi berdasarkan dependensi agar kendala perangkat, data, dan jaringan dapat diisolasi sebelum pengujian akhir.",
        },
      },
      {
        title: { en: "Operational data first", id: "Prioritas pada data operasional" },
        description: {
          en: "Oracle DB and SQL validation focused on the inventory and pricing information required by live transactions.",
          id: "Validasi Oracle DB dan SQL difokuskan pada informasi inventaris dan harga yang dibutuhkan transaksi langsung.",
        },
      },
      {
        title: { en: "Direct launch support", id: "Dukungan langsung saat pembukaan" },
        description: {
          en: "On-site monitoring shortened the path between identifying an issue and applying the right operational response.",
          id: "Pemantauan di lokasi memperpendek waktu antara menemukan kendala dan menerapkan respons operasional yang tepat.",
        },
      },
    ],
    resultIntro: {
      en: "The branch completed opening day with zero downtime while supporting around 300 staff and 50 prepared POS devices.",
      id: "Cabang menyelesaikan hari pembukaan tanpa downtime dengan dukungan untuk sekitar 300 staf dan 50 perangkat POS yang telah disiapkan.",
    },
    learnings: [
      {
        en: "Operational readiness depends as much on clear ownership and coordination as it does on technical configuration.",
        id: "Kesiapan operasional bergantung pada kejelasan tanggung jawab dan koordinasi, bukan hanya konfigurasi teknis.",
      },
      {
        en: "Testing should reproduce real operating conditions as closely as possible before launch day.",
        id: "Pengujian perlu mendekati kondisi operasional sebenarnya sebelum hari peluncuran.",
      },
      {
        en: "A launch support plan makes it easier to identify, prioritize, and resolve issues without disrupting the wider operation.",
        id: "Rencana dukungan peluncuran memudahkan identifikasi, penentuan prioritas, dan penyelesaian kendala tanpa mengganggu operasional yang lebih luas.",
      },
    ],
    coverCaption: {
      en: "On-site IT preparation and opening-day support at the Indogrosir Gorontalo branch.",
      id: "Persiapan IT di lokasi dan dukungan hari pembukaan cabang Indogrosir Gorontalo.",
    },
  },
  "luvea-inventory-system": {
    overview: {
      role: { en: "Inventory system development", id: "Pengembangan sistem inventaris" },
      users: { en: "Luvea's stock management team", id: "Tim pengelola stok Luvea" },
      status: { en: "Inventory management system", id: "Sistem pengelolaan inventaris" },
    },
    problem: [
      {
        en: "Stock movement was recorded manually, making current quantities harder to verify and recording mistakes easier to miss. The team needed one dependable view for more than 10 inventory items.",
        id: "Pergerakan stok dicatat secara manual sehingga jumlah terkini lebih sulit diverifikasi dan kesalahan pencatatan lebih mudah terlewat. Tim membutuhkan satu tampilan yang andal untuk lebih dari 10 item inventaris.",
      },
    ],
    responsibilities: [
      {
        en: "I translated the stock workflow into system rules, designed the core interface, developed the Laravel application, connected MySQL, and prepared it for production deployment.",
        id: "Saya menerjemahkan workflow stok menjadi aturan sistem, merancang antarmuka utama, mengembangkan aplikasi Laravel, menghubungkan MySQL, dan menyiapkannya untuk deployment production.",
      },
    ],
    constraints: [
      {
        en: "The interface had to remain simple for routine stock updates without hiding important information.",
        id: "Antarmuka harus tetap sederhana untuk pembaruan stok rutin tanpa menyembunyikan informasi penting.",
      },
      {
        en: "Stock-in and stock-out records needed consistent validation so the displayed balance remained dependable.",
        id: "Catatan stok masuk dan keluar membutuhkan validasi yang konsisten agar saldo yang ditampilkan tetap dapat dipercaya.",
      },
      {
        en: "The application had to run reliably within a shared-hosting production environment.",
        id: "Aplikasi harus berjalan secara andal pada lingkungan production shared hosting.",
      },
    ],
    workflow: [
      {
        title: { en: "Record the movement", id: "Catat pergerakan" },
        description: {
          en: "Users enter stock-in or stock-out activity through a focused operational form.",
          id: "Pengguna memasukkan aktivitas stok masuk atau keluar melalui form operasional yang terarah.",
        },
      },
      {
        title: { en: "Validate the entry", id: "Validasi catatan" },
        description: {
          en: "The application checks required values before committing the movement to the database.",
          id: "Aplikasi memeriksa nilai wajib sebelum menyimpan pergerakan ke database.",
        },
      },
      {
        title: { en: "Update availability", id: "Perbarui ketersediaan" },
        description: {
          en: "MySQL stores the transaction and updates the current inventory view.",
          id: "MySQL menyimpan transaksi dan memperbarui tampilan inventaris terkini.",
        },
      },
      {
        title: { en: "Review and correct", id: "Tinjau dan koreksi" },
        description: {
          en: "The team monitors records in one place and can identify inconsistencies earlier.",
          id: "Tim memantau catatan dalam satu tempat dan dapat menemukan ketidaksesuaian lebih awal.",
        },
      },
    ],
    decisions: [
      {
        title: { en: "Laravel MVC structure", id: "Struktur MVC Laravel" },
        description: {
          en: "Laravel separates inventory rules, request handling, and interface rendering so the application is easier to maintain.",
          id: "Laravel memisahkan aturan inventaris, penanganan request, dan rendering antarmuka agar aplikasi lebih mudah dipelihara.",
        },
      },
      {
        title: { en: "Relational stock records", id: "Catatan stok relasional" },
        description: {
          en: "MySQL keeps items and stock movements connected so balances can be traced back to their records.",
          id: "MySQL menghubungkan item dan pergerakan stok sehingga saldo dapat ditelusuri kembali ke catatannya.",
        },
      },
      {
        title: { en: "Practical interface delivery", id: "Penyajian antarmuka yang praktis" },
        description: {
          en: "Tailwind CSS and Bootstrap support a clear, responsive interface while Git and SSL support controlled production delivery.",
          id: "Tailwind CSS dan Bootstrap mendukung antarmuka yang jelas serta responsif, sedangkan Git dan SSL mendukung deployment production yang terkontrol.",
        },
      },
    ],
    resultIntro: {
      en: "The system replaced manual tracking with a clearer inventory record and made stock levels and recording errors easier to monitor.",
      id: "Sistem menggantikan pencatatan manual dengan data inventaris yang lebih jelas serta membuat ketersediaan stok dan kesalahan pencatatan lebih mudah dipantau.",
    },
    learnings: [
      {
        en: "Inventory rules should be defined before designing screens because every interface decision depends on how stock is allowed to move.",
        id: "Aturan inventaris perlu ditentukan sebelum merancang layar karena setiap keputusan antarmuka bergantung pada cara stok dapat bergerak.",
      },
      {
        en: "A useful dashboard prioritizes exceptions and current availability over decorative metrics.",
        id: "Dashboard yang berguna memprioritaskan pengecualian dan ketersediaan terkini dibanding metrik dekoratif.",
      },
      {
        en: "Traceable movement records are essential when the team needs to investigate a stock difference.",
        id: "Catatan pergerakan yang dapat ditelusuri sangat penting ketika tim perlu menyelidiki selisih stok.",
      },
    ],
    coverCaption: {
      en: "The Luvea dashboard brings inventory status, stock movement, and reporting into one operational view.",
      id: "Dashboard Luvea menyatukan status inventaris, pergerakan stok, dan laporan dalam satu tampilan operasional.",
    },
  },
  "luvea-website": {
    overview: {
      role: { en: "Front-end development and deployment", id: "Pengembangan front-end dan deployment" },
      users: { en: "Visitors exploring Luvea's products", id: "Pengunjung yang mencari produk Luvea" },
      status: { en: "Published public website", id: "Website publik telah diluncurkan" },
    },
    problem: [
      {
        en: "Luvea needed a public website that reflected the brand, made the product range easier to understand, and gave visitors a direct path from discovery to inquiry.",
        id: "Luvea membutuhkan website publik yang mencerminkan brand, memudahkan pengunjung memahami produk, dan menyediakan jalur langsung dari penemuan menuju inquiry.",
      },
    ],
    responsibilities: [
      {
        en: "I planned the responsive page hierarchy, developed the front end, added purposeful motion and smooth scrolling, and prepared the website for secure production deployment.",
        id: "Saya merencanakan hierarki halaman responsif, mengembangkan front end, menambahkan motion dan smooth scrolling yang terarah, serta menyiapkan website untuk deployment production yang aman.",
      },
    ],
    constraints: [
      {
        en: "Product imagery and brand messaging needed to remain clear across desktop and mobile layouts.",
        id: "Gambar produk dan pesan brand harus tetap jelas pada layout desktop maupun mobile.",
      },
      {
        en: "Motion could support hierarchy, but it could not slow down navigation or hide important content.",
        id: "Motion dapat mendukung hierarki, tetapi tidak boleh memperlambat navigasi atau menyembunyikan konten penting.",
      },
      {
        en: "The production setup needed version control, SSL, and a repeatable deployment path.",
        id: "Konfigurasi production membutuhkan version control, SSL, dan jalur deployment yang dapat diulang.",
      },
    ],
    workflow: [
      {
        title: { en: "Introduce the collection", id: "Perkenalkan koleksi" },
        description: {
          en: "The landing page establishes the brand and leads with the main product message.",
          id: "Landing page memperkenalkan brand dan menampilkan pesan produk utama.",
        },
      },
      {
        title: { en: "Support product discovery", id: "Dukung penemuan produk" },
        description: {
          en: "Visitors move through product information with a clear responsive hierarchy.",
          id: "Pengunjung menjelajahi informasi produk melalui hierarki responsif yang jelas.",
        },
      },
      {
        title: { en: "Build confidence", id: "Bangun kepercayaan" },
        description: {
          en: "Brand details, reviews, and supporting information answer common purchase questions.",
          id: "Detail brand, ulasan, dan informasi pendukung menjawab pertanyaan umum sebelum membeli.",
        },
      },
      {
        title: { en: "Continue to inquiry", id: "Lanjutkan ke inquiry" },
        description: {
          en: "Visible contact options give visitors a direct next step from the website.",
          id: "Opsi kontak yang terlihat memberi pengunjung langkah berikutnya secara langsung dari website.",
        },
      },
    ],
    decisions: [
      {
        title: { en: "Next.js page foundation", id: "Fondasi halaman Next.js" },
        description: {
          en: "Next.js provides a maintainable page structure and production-ready rendering for the public website.",
          id: "Next.js menyediakan struktur halaman yang mudah dipelihara dan rendering yang siap untuk website production.",
        },
      },
      {
        title: { en: "Motion with a clear purpose", id: "Motion dengan tujuan yang jelas" },
        description: {
          en: "Framer Motion guides attention through key content, while Lenis keeps long-page navigation controlled and smooth.",
          id: "Framer Motion mengarahkan perhatian pada konten utama, sedangkan Lenis menjaga navigasi halaman panjang tetap terkontrol dan halus.",
        },
      },
      {
        title: { en: "Repeatable production delivery", id: "Deployment production yang dapat diulang" },
        description: {
          en: "Git version control, Vercel, web-server configuration, shared-hosting support, and SSL provide controlled deployment options.",
          id: "Git version control, Vercel, konfigurasi web server, dukungan shared hosting, dan SSL menyediakan opsi deployment yang terkontrol.",
        },
      },
    ],
    resultIntro: {
      en: "Luvea gained a live public website with a clearer brand presence, responsive product discovery, and a dependable path to inquiry.",
      id: "Luvea memiliki website publik aktif dengan kehadiran brand yang lebih jelas, penemuan produk yang responsif, dan jalur inquiry yang dapat diandalkan.",
    },
    learnings: [
      {
        en: "The fastest contact path should remain visible without competing with the product story.",
        id: "Jalur kontak tercepat harus tetap terlihat tanpa bersaing dengan cerita produk.",
      },
      {
        en: "Motion works best when it reveals hierarchy and feedback instead of decorating every element.",
        id: "Motion bekerja paling baik ketika memperjelas hierarki dan feedback, bukan menghias setiap elemen.",
      },
      {
        en: "Responsive composition needs to be planned around the product imagery, not treated as a final adjustment.",
        id: "Komposisi responsif perlu direncanakan mengikuti gambar produk, bukan diperlakukan sebagai penyesuaian terakhir.",
      },
    ],
    coverCaption: {
      en: "The responsive Luvea landing page presents the collection and keeps product inquiry within reach.",
      id: "Landing page responsif Luvea memperkenalkan koleksi dan menjaga jalur inquiry tetap mudah dijangkau.",
    },
  },
  "whatsapp-sales-monitoring-bot": {
    overview: {
      role: { en: "Reporting automation development", id: "Pengembangan otomatisasi laporan" },
      users: { en: "Indogrosir staff receiving operational reports", id: "Staf Indogrosir penerima laporan operasional" },
      status: { en: "Automation running on a local server", id: "Otomatisasi berjalan pada server lokal" },
    },
    problem: [
      {
        en: "Each sales and margin update required a repetitive manual process that took around 10 minutes. The information also needed to reach the operational team on a predictable schedule.",
        id: "Setiap pembaruan sales dan margin membutuhkan proses manual berulang sekitar 10 menit. Informasi tersebut juga harus diterima tim operasional berdasarkan jadwal yang konsisten.",
      },
      {
        en: "Manual delivery created unnecessary effort and made proactive threshold alerts harder to maintain.",
        id: "Pengiriman manual menambah pekerjaan yang tidak perlu dan membuat alert ambang batas secara proaktif lebih sulit dipertahankan.",
      },
    ],
    responsibilities: [
      {
        en: "I designed the reporting flow, wrote the database queries and formatting logic, connected WhatsApp delivery, configured the schedule, and prepared the bot to run continuously on a local server.",
        id: "Saya merancang alur laporan, menulis query database dan logika format, menghubungkan pengiriman WhatsApp, mengonfigurasi jadwal, dan menyiapkan bot agar berjalan terus pada server lokal.",
      },
    ],
    constraints: [
      {
        en: "The bot handled restricted operational information, so the deployment remained within the local environment.",
        id: "Bot menangani informasi operasional dengan akses terbatas sehingga deployment tetap berada di lingkungan lokal.",
      },
      {
        en: "WhatsApp sessions and scheduled jobs needed to recover predictably after a process or server restart.",
        id: "Sesi WhatsApp dan pekerjaan terjadwal harus dapat pulih secara terprediksi setelah proses atau server dimulai ulang.",
      },
      {
        en: "Report formatting had to remain readable on a phone and concise enough for a group conversation.",
        id: "Format laporan harus tetap mudah dibaca melalui ponsel dan cukup ringkas untuk percakapan grup.",
      },
    ],
    workflow: [
      {
        title: { en: "Trigger the schedule", id: "Jalankan jadwal" },
        description: {
          en: "Cron Job starts the reporting process at the required time.",
          id: "Cron Job memulai proses laporan pada waktu yang ditentukan.",
        },
      },
      {
        title: { en: "Query operational data", id: "Ambil data operasional" },
        description: {
          en: "Node.js queries PostgreSQL for the required sales, margin, and threshold information.",
          id: "Node.js menjalankan query PostgreSQL untuk mengambil informasi sales, margin, dan ambang batas.",
        },
      },
      {
        title: { en: "Format the message", id: "Format pesan" },
        description: {
          en: "TypeScript logic turns the query result into a concise mobile-friendly report.",
          id: "Logika TypeScript mengubah hasil query menjadi laporan ringkas yang mudah dibaca melalui ponsel.",
        },
      },
      {
        title: { en: "Deliver and keep running", id: "Kirim dan jaga tetap berjalan" },
        description: {
          en: "Baileys sends the report to WhatsApp while PM2 keeps the local process available.",
          id: "Baileys mengirim laporan ke WhatsApp, sedangkan PM2 menjaga proses lokal tetap tersedia.",
        },
      },
    ],
    decisions: [
      {
        title: { en: "Typed reporting logic", id: "Logika laporan bertipe" },
        description: {
          en: "TypeScript makes report structures and database results easier to validate as the automation grows.",
          id: "TypeScript membuat struktur laporan dan hasil database lebih mudah divalidasi ketika otomatisasi berkembang.",
        },
      },
      {
        title: { en: "Baileys for WhatsApp delivery", id: "Baileys untuk pengiriman WhatsApp" },
        description: {
          en: "Baileys connects the automated process with the channel already used by the operational team.",
          id: "Baileys menghubungkan proses otomatis dengan kanal yang telah digunakan oleh tim operasional.",
        },
      },
      {
        title: { en: "Local process supervision", id: "Pengawasan proses lokal" },
        description: {
          en: "PM2 supervises the Node.js process, while qrcode-terminal supports session setup without adding a separate interface.",
          id: "PM2 mengawasi proses Node.js, sedangkan qrcode-terminal mendukung konfigurasi sesi tanpa menambah antarmuka terpisah.",
        },
      },
    ],
    resultIntro: {
      en: "The recurring 10-minute reporting step became a scheduled delivery that includes sales, margin, and threshold information in WhatsApp.",
      id: "Proses laporan berulang selama 10 menit berubah menjadi pengiriman terjadwal yang mencakup informasi sales, margin, dan ambang batas melalui WhatsApp.",
    },
    learnings: [
      {
        en: "Automation is only dependable when restart behavior, session recovery, and logging are treated as part of the feature.",
        id: "Otomatisasi hanya dapat diandalkan ketika perilaku restart, pemulihan sesi, dan logging diperlakukan sebagai bagian dari fitur.",
      },
      {
        en: "Operational messages need a stable format so teams can scan the same values quickly every day.",
        id: "Pesan operasional membutuhkan format yang konsisten agar tim dapat memindai nilai yang sama dengan cepat setiap hari.",
      },
      {
        en: "Threshold alerts are most useful when they identify the condition clearly and give the recipient enough context to respond.",
        id: "Alert ambang batas paling berguna ketika kondisi dijelaskan dengan jelas dan penerima memperoleh konteks yang cukup untuk merespons.",
      },
    ],
    coverCaption: {
      en: "A scheduled sales and margin summary delivered directly to the operational WhatsApp group.",
      id: "Ringkasan sales dan margin terjadwal yang dikirim langsung ke grup WhatsApp operasional.",
    },
  },
  "pga-inventory-request-system": {
    overview: {
      role: { en: "Full-stack Laravel development and workflow design", id: "Pengembangan Laravel full-stack dan perancangan workflow" },
      users: { en: "Admin GA and division users", id: "Admin GA dan pengguna divisi" },
      status: { en: "Administration workflow documented", id: "Workflow administrasi terdokumentasi" },
    },
    problem: [
      {
        en: "Cross-department requests require more than a submission form. Admin GA needs to control request periods, review individual items, compare demand, manage warehouse stock, record actual fulfillment, and produce accountable handover documents.",
        id: "Permintaan lintas divisi membutuhkan lebih dari sekadar form pengajuan. Admin GA perlu mengatur periode, meninjau setiap barang, membandingkan kebutuhan, mengelola stok gudang, mencatat realisasi, dan menghasilkan dokumen serah terima yang dapat dipertanggungjawabkan.",
      },
    ],
    responsibilities: [
      {
        en: "I designed the end-to-end workflow and relational data model, developed the Laravel application, separated business rules into services, implemented role-based access, and added stock control, Excel reporting, PDF receipts, and digital signatures.",
        id: "Saya merancang workflow end-to-end dan model data relasional, mengembangkan aplikasi Laravel, memisahkan business rule ke dalam service, menerapkan akses berbasis peran, serta menambahkan kontrol stok, laporan Excel, tanda terima PDF, dan tanda tangan digital.",
      },
    ],
    constraints: [
      {
        en: "Admin GA and division users require different data visibility and permitted actions within the same workflow.",
        id: "Admin GA dan pengguna divisi membutuhkan visibilitas data serta tindakan yang berbeda dalam workflow yang sama.",
      },
      {
        en: "Inventory movements and realized quantities must remain consistent with review decisions and receipt documents.",
        id: "Pergerakan stok dan jumlah realisasi harus konsisten dengan keputusan review serta dokumen tanda terima.",
      },
      {
        en: "Matrix reports, comparisons, Excel exports, and PDFs must use the same validated operational data.",
        id: "Laporan matrix, perbandingan, export Excel, dan PDF harus menggunakan data operasional tervalidasi yang sama.",
      },
    ],
    workflow: [
      {
        title: { en: "Open a request period", id: "Buka periode permintaan" },
        description: {
          en: "Admin GA creates an active submission window, then division users prepare and submit their inventory needs.",
          id: "Admin GA membuat periode pengajuan aktif, kemudian pengguna divisi menyiapkan dan mengirim kebutuhan inventaris mereka.",
        },
      },
      {
        title: { en: "Review each item", id: "Review setiap barang" },
        description: {
          en: "Admin GA approves, partially approves, or rejects each item and records supporting notes.",
          id: "Admin GA menyetujui, menyetujui sebagian, atau menolak setiap barang serta mencatat keterangannya.",
        },
      },
      {
        title: { en: "Realize and update stock", id: "Realisasikan dan perbarui stok" },
        description: {
          en: "Actual handover quantities are recorded against approved items and connected to warehouse inventory.",
          id: "Jumlah barang yang benar-benar diserahkan dicatat berdasarkan hasil persetujuan dan dihubungkan dengan inventaris gudang.",
        },
      },
      {
        title: { en: "Report and document handover", id: "Laporkan dan dokumentasikan serah terima" },
        description: {
          en: "Recaps, period comparisons, Excel exports, and signed PDF receipts provide a consistent operational record.",
          id: "Rekap, perbandingan periode, export Excel, dan tanda terima PDF bertanda tangan menyediakan catatan operasional yang konsisten.",
        },
      },
    ],
    decisions: [
      {
        title: { en: "Laravel monolith with session authentication", id: "Monolit Laravel dengan autentikasi session" },
        description: {
          en: "Laravel 13, Blade, Breeze, and Alpine.js keep authentication, interface, and server workflow in one maintainable application.",
          id: "Laravel 13, Blade, Breeze, dan Alpine.js menyatukan autentikasi, antarmuka, serta workflow server dalam satu aplikasi yang mudah dipelihara.",
        },
      },
      {
        title: { en: "Service-layer business rules", id: "Business rule pada service layer" },
        description: {
          en: "Inventory, realization, receipt, and import logic live in dedicated services instead of interface controllers.",
          id: "Logic inventaris, realisasi, tanda terima, dan import ditempatkan dalam service khusus, bukan pada controller antarmuka.",
        },
      },
      {
        title: { en: "Role-based authorization", id: "Otorisasi berbasis peran" },
        description: {
          en: "Admin GA controls periods, reviews, fulfillment, and inventory, while division users work within their request scope.",
          id: "Admin GA mengatur periode, review, realisasi, dan inventaris, sedangkan pengguna divisi bekerja dalam ruang lingkup permintaannya.",
        },
      },
      {
        title: { en: "Documents generated from operational data", id: "Dokumen dihasilkan dari data operasional" },
        description: {
          en: "PhpSpreadsheet, DomPDF, and signature capture turn validated request data into reports and handover evidence.",
          id: "PhpSpreadsheet, DomPDF, dan perekaman tanda tangan mengubah data permintaan tervalidasi menjadi laporan serta bukti serah terima.",
        },
      },
    ],
    resultIntro: {
      en: "The system connects cross-department requests, item-level review, stock-aware fulfillment, reporting, and signed handover evidence in one workflow.",
      id: "Sistem menghubungkan permintaan lintas divisi, review per barang, realisasi berbasis stok, pelaporan, dan bukti serah terima bertanda tangan dalam satu workflow.",
    },
    learnings: [
      {
        en: "Item-level decisions need an explicit relationship between requested, approved, and realized quantities.",
        id: "Keputusan per barang membutuhkan relasi yang jelas antara jumlah diminta, disetujui, dan direalisasikan.",
      },
      {
        en: "Stock management becomes more reliable when fulfillment uses the same inventory rules and data source.",
        id: "Pengelolaan stok menjadi lebih andal ketika realisasi menggunakan aturan inventaris dan sumber data yang sama.",
      },
      {
        en: "Operational documents are strongest when generated from validated records rather than retyped manually.",
        id: "Dokumen operasional lebih kuat ketika dihasilkan dari data tervalidasi, bukan diketik ulang secara manual.",
      },
    ],
    coverCaption: {
      en: "The administration dashboard makes periods, review queues, request values, inventory alerts, and participation visible in one interface.",
      id: "Dashboard administrasi menampilkan periode, antrean review, nilai permintaan, peringatan inventaris, dan partisipasi dalam satu antarmuka.",
    },
  },
  "operations-platform": {
    overview: {
      role: { en: "Back-office system development and maintenance", id: "Pengembangan dan pemeliharaan sistem back-office" },
      users: { en: "Retail back-office and operational teams", id: "Tim back-office dan operasional ritel" },
      status: { en: "Operational back-office platform", id: "Platform back-office operasional" },
    },
    problem: [
      {
        en: "Daily retail work depended on sales reporting, inventory workflows, supplier documents, pricing, promotions, and store monitoring. Reaching that information through separate menus and tools made navigation slower and reduced operational visibility.",
        id: "Pekerjaan ritel harian bergantung pada laporan sales, workflow inventaris, dokumen supplier, harga, promosi, dan monitoring toko. Mengakses informasi tersebut melalui menu dan tools yang terpisah memperlambat navigasi serta mengurangi visibilitas operasional.",
      },
    ],
    responsibilities: [
      {
        en: "I developed the interface and server-side workflows, organized the reporting modules, integrated relational data, added real-time interface elements, and maintained the platform for daily operations.",
        id: "Saya mengembangkan antarmuka dan workflow server, mengatur modul pelaporan, mengintegrasikan data relasional, menambahkan elemen antarmuka real-time, serta memelihara platform untuk operasional harian.",
      },
    ],
    constraints: [
      {
        en: "The system contained a large number of operational modules but still needed predictable navigation for routine use.",
        id: "Sistem memiliki banyak modul operasional, tetapi tetap membutuhkan navigasi yang mudah diprediksi untuk penggunaan rutin.",
      },
      {
        en: "Information density had to remain readable across dashboards, cards, menus, and reporting screens.",
        id: "Kepadatan informasi harus tetap mudah dibaca pada dashboard, cards, menu, dan layar pelaporan.",
      },
      {
        en: "The platform used restricted business data and workflows, so screenshots and public documentation needed to avoid exposing sensitive details.",
        id: "Platform menggunakan data bisnis dan workflow dengan akses terbatas sehingga screenshot dan dokumentasi publik perlu menghindari informasi sensitif.",
      },
    ],
    workflow: [
      {
        title: { en: "Enter securely", id: "Masuk dengan aman" },
        description: {
          en: "The login interface provides a controlled entry point to the operations platform.",
          id: "Antarmuka login menyediakan pintu masuk terkontrol menuju platform operasional.",
        },
      },
      {
        title: { en: "Choose an operational area", id: "Pilih area operasional" },
        description: {
          en: "Mega-menus group sales, inventory, receiving, promotions, member services, and monitoring tools.",
          id: "Mega-menu mengelompokkan tools sales, inventaris, receiving, promosi, member services, dan monitoring.",
        },
      },
      {
        title: { en: "Review current status", id: "Tinjau status terkini" },
        description: {
          en: "The dashboard combines store metrics, issuing progress, sales values, and time-sensitive information.",
          id: "Dashboard menggabungkan metrik toko, progres issuing, nilai sales, dan informasi yang berkaitan dengan waktu.",
        },
      },
      {
        title: { en: "Act and report", id: "Proses dan laporkan" },
        description: {
          en: "Users open the relevant workflow, process operational data, and continue into its reporting view.",
          id: "Pengguna membuka workflow terkait, memproses data operasional, dan melanjutkan ke tampilan laporannya.",
        },
      },
    ],
    decisions: [
      {
        title: { en: "Grouped mega-menu navigation", id: "Navigasi mega-menu terkelompok" },
        description: {
          en: "Bootstrap supports responsive navigation and familiar interface components for a broad set of reporting modules.",
          id: "Bootstrap mendukung navigasi responsif dan komponen antarmuka yang familiar untuk berbagai modul pelaporan.",
        },
      },
      {
        title: { en: "Server-side MVC workflows", id: "Workflow MVC di sisi server" },
        description: {
          en: "PHP with Laravel or CodeIgniter organizes routes, business logic, and reporting modules for ongoing maintenance.",
          id: "PHP dengan Laravel atau CodeIgniter mengatur route, logika bisnis, dan modul pelaporan untuk pemeliharaan berkelanjutan.",
        },
      },
      {
        title: { en: "Relational operational data", id: "Data operasional relasional" },
        description: {
          en: "MySQL or PostgreSQL supports sales aggregation, planograms, stock movement, and other connected retail records.",
          id: "MySQL atau PostgreSQL mendukung agregasi sales, planogram, pergerakan stok, dan catatan ritel terkait lainnya.",
        },
      },
      {
        title: { en: "Layered visual interface", id: "Antarmuka visual berlapis" },
        description: {
          en: "Custom CSS adds a glassmorphism login panel, while JavaScript and canvas keep the analog clock synchronized in real time over static visual assets.",
          id: "CSS custom menambahkan panel login glassmorphism, sedangkan JavaScript dan canvas menyinkronkan jam analog secara real-time di atas aset visual statis.",
        },
      },
    ],
    resultIntro: {
      en: "The platform brings operational menus, store status, sales information, inventory data, and reporting workflows into one interface.",
      id: "Platform menyatukan menu operasional, status toko, informasi sales, data inventaris, dan workflow pelaporan dalam satu antarmuka.",
    },
    learnings: [
      {
        en: "Large navigation systems become easier to use when modules follow the language and grouping already understood by the operational team.",
        id: "Sistem navigasi besar menjadi lebih mudah digunakan ketika modul mengikuti istilah dan pengelompokan yang telah dipahami tim operasional.",
      },
      {
        en: "Real-time elements should focus attention on information that can change an immediate operational decision.",
        id: "Elemen real-time perlu mengarahkan perhatian pada informasi yang dapat memengaruhi keputusan operasional langsung.",
      },
      {
        en: "Visual styling must support readability because the platform is used repeatedly throughout the working day.",
        id: "Tampilan visual harus mendukung keterbacaan karena platform digunakan berulang kali sepanjang hari kerja.",
      },
    ],
    coverCaption: {
      en: "The inventory mega-menu groups receiving, supplier, monitoring, and stock workflows in one operational entry point.",
      id: "Mega-menu inventory mengelompokkan workflow receiving, supplier, monitoring, dan stok dalam satu pintu masuk operasional.",
    },
  },
};
