export const portfolioHtml = `
<!-- NAV -->
<nav id="navbar">
  <a href="#hero" class="nav-brand">
    <span class="brand-bracket">[</span>LYK<span class="brand-bracket">]</span>
  </a>
  <ul class="nav-menu" id="navMenu">
    <li><a href="#projects" data-i18n="nav.projects">Projects</a></li>
    <li><a href="#skills" data-i18n="nav.skills">Skills</a></li>
    <li><a href="#experience" data-i18n="nav.experience">Experience</a></li>
    <li><a href="#contact" data-i18n="nav.contact">Contact</a></li>
  </ul>
  <div class="nav-toggles">
    <div class="toggle-switch" id="themeToggle" onclick="toggleTheme()" title="Toggle theme">
      <span class="toggle-icon ti-left">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </span>
      <div class="toggle-track"><div class="toggle-thumb"></div></div>
      <span class="toggle-icon ti-right">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      </span>
    </div>
    <div class="toggle-switch" id="langToggle" onclick="toggleLang()" title="Toggle language">
      <span class="toggle-icon ti-left" style="font-weight:700;font-size:11px;font-family:var(--mono)">EN</span>
      <div class="toggle-track"><div class="toggle-thumb"></div></div>
      <span class="toggle-icon ti-right" style="font-weight:700;font-size:11px;font-family:var(--mono)">ID</span>
    </div>
  </div>
  <a href="#contact" class="nav-cta" data-i18n="nav.hire">Hire Me</a>
  <button class="hamburger" id="hamburger" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- HERO -->
<section id="hero" class="hero-editorial">
  <div class="hero-atmosphere" aria-hidden="true"></div>
  <div class="container hero-editorial-inner">
    <div class="hero-file-bar anim-4">
      <span class="hero-file-id">LYK / 001</span>
      <span class="hero-file-role" data-i18n="hero.role">System Developer &amp; Database Specialist</span>
      <span class="hero-file-loc" data-i18n="hero.loc">Surabaya, Indonesia</span>
    </div>

    <h1 class="hero-display anim-3">
      <span class="hero-display-line">Lourensius</span>
      <span class="hero-display-line hero-display-accent">Yudha Kristianto</span>
    </h1>

    <div class="hero-stage anim-2">
      <div class="hero-frame">
        <div class="hero-frame-inner">
          <img src="/images/yudha.jpeg" alt="Lourensius Yudha Kristianto" width="320" height="400">
        </div>
        <span class="hero-frame-tag">SYS.DEV</span>
      </div>
      <div class="hero-statement">
        <h2 class="hero-tagline">
          <span class="tag-line scramble" data-i18n="hero.line1">Building Smart Systems That</span>
          <span class="tag-line tag-em scramble" data-i18n="hero.line2">Improve Daily Business Operations</span>
        </h2>
      </div>
    </div>

    <div class="hero-bottom anim-6">
      <p class="hero-desc" id="about" data-i18n="hero.desc">
        IT professional focused on SQL database systems, operational tooling, and retail technology. Building internal systems and automations that solve real business problems and improve daily operations.
      </p>
      <div class="hero-actions anim-7">
        <a href="/files/CV-Yudha.pdf" class="btn-primary" download>
          <span data-i18n="hero.dl">Download Resume</span>
        </a>
        <a href="#projects" class="btn-secondary">
          <span data-i18n="hero.vp">View Projects</span>
        </a>
      </div>
    </div>

    <div class="hero-scroll-hint anim-7" aria-hidden="true">
      <span data-i18n="hero.scroll">Scroll</span>
      <span class="hero-scroll-line"></span>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="section">
  <div class="container">
    <header class="sec-head reveal">
      <span class="sec-index">01</span>
      <div class="sec-head-body">
        <span class="sec-eyebrow" data-i18n="projects.eyebrow">Work</span>
        <h2 class="sec-title" data-i18n="projects.heading">Projects</h2>
        <p class="sec-sub" data-i18n="projects.sub">Systems shipped for retail ops, inventory, and internal tools.</p>
      </div>
      <div class="sec-rule" aria-hidden="true"></div>
    </header>

    <article class="case-spotlight reveal">
      <button type="button" class="case-spotlight-hit" data-project-index="0" aria-label="Open project details">
        <div class="case-spotlight-media">
          <img src="/images/indogrosir1.JPG" alt="Grand Opening Gorontalo, Indogrosir">
        </div>
        <div class="case-spotlight-overlay">
          <span class="case-spotlight-num">01</span>
          <span class="case-spotlight-tag" data-i18n="projects.badge1">Retail Ops</span>
          <h3 class="case-spotlight-title" data-i18n="projects.p1t">Grand Opening, Gorontalo Branch</h3>
          <p class="case-spotlight-desc" data-i18n="projects.p1d">Led end-to-end IT readiness for a new retail branch (POS, network, and inventory systems) and kept operations online from first door open to closing bell.</p>
          <span class="case-spotlight-cta" data-i18n="projects.p1l">See How It Launched →</span>
        </div>
      </button>
    </article>

    <div class="case-index">
      <button type="button" class="case-item reveal delay-1" data-project-index="1">
        <span class="case-item-num">02</span>
        <div class="case-item-main">
          <span class="case-item-tag" data-i18n="projects.badge2">Inventory</span>
          <span class="case-item-title" data-i18n="projects.p2t">Sistem Inventory Luvea</span>
          <span class="case-item-meta">Laravel · MySQL · PHP</span>
        </div>
        <img src="/images/inventory-luvea.png" alt="" class="case-item-preview" width="120" height="72">
        <span class="case-item-arrow" aria-hidden="true">→</span>
      </button>
      <button type="button" class="case-item reveal delay-2" data-project-index="2">
        <span class="case-item-num">03</span>
        <div class="case-item-main">
          <span class="case-item-tag" data-i18n="projects.badge3">Web Dev</span>
          <span class="case-item-title" data-i18n="projects.p3t">Website Luvea</span>
          <span class="case-item-meta">HTML · CSS · JavaScript</span>
        </div>
        <img src="/images/luvea.png" alt="" class="case-item-preview" width="120" height="72">
        <span class="case-item-arrow" aria-hidden="true">→</span>
      </button>
      <button type="button" class="case-item reveal delay-3" data-project-index="3">
        <span class="case-item-num">04</span>
        <div class="case-item-main">
          <span class="case-item-tag" data-i18n="projects.badge4">Automation</span>
          <span class="case-item-title" data-i18n="projects.p4t">WhatsApp Sales Monitoring Bot</span>
          <span class="case-item-meta">PHP · SQL · WhatsApp API</span>
        </div>
        <img src="/images/wa-bot.PNG" alt="" class="case-item-preview" width="120" height="72">
        <span class="case-item-arrow" aria-hidden="true">→</span>
      </button>
      <button type="button" class="case-item reveal delay-1" data-project-index="4">
        <span class="case-item-num">05</span>
        <div class="case-item-main">
          <span class="case-item-tag" data-i18n="projects.badge5">System Dev</span>
          <span class="case-item-title" data-i18n="projects.p5t">PGA Inventory Request System</span>
          <span class="case-item-meta">PHP · PostgreSQL · JavaScript</span>
        </div>
        <img src="/images/pga-inventory.jpg" alt="" class="case-item-preview" width="120" height="72">
        <span class="case-item-arrow" aria-hidden="true">→</span>
      </button>
      <button type="button" class="case-item reveal delay-2" data-project-index="5">
        <span class="case-item-num">06</span>
        <div class="case-item-main">
          <span class="case-item-tag" data-i18n="projects.badge6">Web Dev</span>
          <span class="case-item-title" data-i18n="projects.p6t">Internal Operational Website</span>
          <span class="case-item-meta">PHP · JavaScript · SQL</span>
        </div>
        <span class="case-item-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section id="skills" class="section section-alt">
  <div class="container">
    <header class="sec-head reveal">
      <span class="sec-index">02</span>
      <div class="sec-head-body">
        <span class="sec-eyebrow" data-i18n="skills.eyebrow">Skills</span>
        <h2 class="sec-title" data-i18n="skills.heading">Skills</h2>
        <p class="sec-sub" data-i18n="skills.sub">Tools and stacks I use to keep retail systems reliable day to day.</p>
      </div>
      <div class="sec-rule" aria-hidden="true"></div>
    </header>

    <div class="skill-meter-list reveal">
      <div class="skill-meter" style="--fill: 95">
        <div class="skill-meter-top">
          <span class="skill-meter-name" data-i18n="skills.c1t">Database</span>
          <span class="skill-meter-level" data-i18n="skills.expert">Expert</span>
        </div>
        <div class="skill-meter-bar"><span></span></div>
        <p class="skill-meter-tools">SQL, Oracle, PostgreSQL, MySQL, Supabase</p>
      </div>
      <div class="skill-meter" style="--fill: 82">
        <div class="skill-meter-top">
          <span class="skill-meter-name" data-i18n="skills.c2t">Frontend</span>
          <span class="skill-meter-level" data-i18n="skills.mid">Advanced</span>
        </div>
        <div class="skill-meter-bar"><span></span></div>
        <p class="skill-meter-tools">HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue</p>
      </div>
      <div class="skill-meter" style="--fill: 82">
        <div class="skill-meter-top">
          <span class="skill-meter-name" data-i18n="skills.c3t">Backend</span>
          <span class="skill-meter-level" data-i18n="skills.mid">Advanced</span>
        </div>
        <div class="skill-meter-bar"><span></span></div>
        <p class="skill-meter-tools">PHP, Laravel, Node.js, JavaScript, TypeScript</p>
      </div>
      <div class="skill-meter" style="--fill: 58">
        <div class="skill-meter-top">
          <span class="skill-meter-name" data-i18n="skills.c4t">Mobile Development</span>
          <span class="skill-meter-level" data-i18n="skills.inter">Intermediate</span>
        </div>
        <div class="skill-meter-bar"><span></span></div>
        <p class="skill-meter-tools">Flutter, Android SDK, Swift</p>
      </div>
      <div class="skill-meter" style="--fill: 55">
        <div class="skill-meter-top">
          <span class="skill-meter-name" data-i18n="skills.c5t">DevOps &amp; Cloud</span>
          <span class="skill-meter-level" data-i18n="skills.inter">Intermediate</span>
        </div>
        <div class="skill-meter-bar"><span></span></div>
        <p class="skill-meter-tools">Git, Windows Server</p>
      </div>
      <div class="skill-meter" style="--fill: 78">
        <div class="skill-meter-top">
          <span class="skill-meter-name" data-i18n="skills.c6t">Networking</span>
          <span class="skill-meter-level" data-i18n="skills.mid">Advanced</span>
        </div>
        <div class="skill-meter-bar"><span></span></div>
        <p class="skill-meter-tools">LAN/WAN, TCP/IP, Router, Switch</p>
      </div>
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience" class="section">
  <div class="container">
    <header class="sec-head reveal">
      <span class="sec-index">03</span>
      <div class="sec-head-body">
        <span class="sec-eyebrow" data-i18n="experience.eyebrow">History</span>
        <h2 class="sec-title" data-i18n="experience.heading">Experience</h2>
        <p class="sec-sub" data-i18n="experience.sub">Roles across systems, data, and retail operations.</p>
      </div>
      <div class="sec-rule" aria-hidden="true"></div>
    </header>

    <div class="exp-rail">
      <article class="exp-entry reveal delay-1">
        <div class="exp-entry-side">
          <span class="exp-entry-year">2022</span>
          <span class="exp-entry-end" data-i18n="experience.present">Present</span>
        </div>
        <div class="exp-entry-content">
          <div class="exp-entry-head">
            <h3 class="exp-entry-role" data-i18n="experience.role1">IT System &amp; Data Specialist</h3>
            <span class="exp-entry-type" data-i18n="experience.type">Full-time</span>
          </div>
          <p class="exp-entry-company" data-i18n="experience.company1">Retail Operations Division</p>
          <ul class="exp-entry-list">
            <li data-i18n="experience.desc1a">Advanced SQL data analysis and business intelligence reporting</li>
            <li data-i18n="experience.desc1b">Internal system development and maintenance</li>
            <li data-i18n="experience.desc1c">Operational reporting automation and workflow optimization</li>
            <li data-i18n="experience.desc1d">Automation tool development for monitoring and alerts</li>
            <li data-i18n="experience.desc1e">IT support for retail branch expansion projects</li>
            <li data-i18n="experience.desc1f">System preparation for new store grand openings</li>
          </ul>
          <div class="exp-entry-tags"><span>SQL</span><span>PHP</span><span>Oracle DB</span><span>PostgreSQL</span><span>JavaScript</span></div>
        </div>
      </article>
      <article class="exp-entry reveal delay-2">
        <div class="exp-entry-side">
          <span class="exp-entry-year">2020</span>
          <span class="exp-entry-end">2022</span>
        </div>
        <div class="exp-entry-content">
          <div class="exp-entry-head">
            <h3 class="exp-entry-role" data-i18n="experience.role2">Junior Web Developer</h3>
            <span class="exp-entry-type" data-i18n="experience.type">Full-time</span>
          </div>
          <p class="exp-entry-company" data-i18n="experience.company2">IT Department</p>
          <ul class="exp-entry-list">
            <li data-i18n="experience.desc2a">Developed and maintained internal web applications</li>
            <li data-i18n="experience.desc2b">Assisted in database schema design and query optimization</li>
            <li data-i18n="experience.desc2c">Participated in testing cycles and technical documentation</li>
          </ul>
          <div class="exp-entry-tags"><span>HTML/CSS</span><span>JavaScript</span><span>PHP</span><span>SQL</span></div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section section-alt">
  <div class="container">
    <header class="sec-head reveal">
      <span class="sec-index">04</span>
      <div class="sec-head-body">
        <span class="sec-eyebrow" data-i18n="contact.eyebrow">Contact</span>
        <h2 class="sec-title" data-i18n="contact.heading">Contact</h2>
        <p class="sec-sub" data-i18n="contact.sub">Open to full-time roles, freelance projects, or a quick chat.</p>
      </div>
      <div class="sec-rule" aria-hidden="true"></div>
    </header>

    <div class="contact-panel reveal">
      <a href="mailto:lourensius.yudha@gmail.com" class="contact-big-email">lourensius.yudha@gmail.com</a>
      <div class="contact-panel-grid">
        <div class="contact-panel-cell">
          <span class="contact-panel-label" data-i18n="contact.wa">WhatsApp</span>
          <a href="https://wa.me/6285259855468" target="_blank" rel="noopener noreferrer" class="contact-panel-val">+62 852-5985-5468</a>
        </div>
        <div class="contact-panel-cell">
          <span class="contact-panel-label" data-i18n="contact.loc">Location</span>
          <span class="contact-panel-val">Surabaya, Indonesia</span>
        </div>
      </div>
      <div class="contact-panel-actions">
        <a href="https://wa.me/6285259855468" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <span data-i18n="contact.waBtn">Chat on WhatsApp</span>
        </a>
        <a href="mailto:lourensius.yudha@gmail.com" class="btn-secondary">
          <span data-i18n="contact.emailBtn">Send Email</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="fb-name" data-i18n="footer.name">Lourensius Yudha Kristianto</div>
        <div class="fb-role" data-i18n="footer.role">System Developer · Database Specialist · Retail Data Analyst</div>
        <div class="footer-socials">
          <a href="#" class="fsoc" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" class="fsoc" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="mailto:lourensius.yudha@gmail.com" class="fsoc" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-nav">
        <div class="fn-title" data-i18n="footer.navTitle">Navigation</div>
        <a href="#projects" data-i18n="footer.projects">Projects</a>
        <a href="#skills" data-i18n="footer.skills">Skills</a>
        <a href="#experience" data-i18n="footer.experience">Experience</a>
        <a href="#contact" data-i18n="footer.contact">Contact</a>
      </div>
      <div class="footer-nav">
        <div class="fn-title" data-i18n="footer.connTitle">Connect</div>
        <a href="#" data-i18n="footer.linkedin">LinkedIn Profile</a>
        <a href="#" data-i18n="footer.github">GitHub Portfolio</a>
        <a href="mailto:lourensius.yudha@gmail.com" data-i18n="footer.email">Send Email</a>
        <a href="https://wa.me/6285259855468" data-i18n="footer.whatsapp">WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div data-i18n="footer.copyright">© 2026 Lourensius Yudha Kristianto. All Rights Reserved.</div>
      <div class="fb-built" data-i18n="footer.built">Surabaya, Indonesia</div>
    </div>
  </div>
</footer>

<div class="modal-overlay" id="projectModal">
  <div class="modal" onclick="event.stopPropagation()">
    <button type="button" class="modal-close" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="modal-header">
      <span class="modal-badge" id="modalBadge"></span>
      <h3 class="modal-title" id="modalTitle"></h3>
    </div>
    <div class="modal-gallery" id="modalGallery"></div>
    <div class="modal-body" id="modalBody"></div>
    <div class="modal-tech" id="modalTech"></div>
    <div class="modal-impacts" id="modalImpacts"></div>
    <div class="modal-footer" id="modalFooter"></div>
  </div>
</div>

<div class="lightbox-overlay" id="lightbox" onclick="closeLightbox(event)">
  <button class="lightbox-close" onclick="closeLightbox()">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <button class="lightbox-nav prev" id="lbPrev" onclick="navigateLightbox(-1)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28"><polyline points="15 18 9 12 15 6"/></svg>
  </button>
  <button class="lightbox-nav next" id="lbNext" onclick="navigateLightbox(1)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28"><polyline points="9 18 15 12 9 6"/></svg>
  </button>
  <img class="lightbox-img" id="lightboxImg" alt="">
  <div class="lightbox-counter" id="lightboxCounter"></div>
</div>


`;
