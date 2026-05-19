import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    id: 'logafit',
    eyebrow: 'Website redesign · Health & Fitness',
    category: 'Website redesign',
    title: 'Logafit',
    subtitle: 'Revitalizing wellness — modernizacja strony fitness z naciskiem na prostszą nawigację, responsywność i dostępność.',
    year: '2024',
    role: 'Designer, Researcher',
    location: 'Toruń, Poland',
    tags: ['Redesign strategy', 'User research', 'Information architecture', 'Responsive UI', 'Accessibility'],
    accent: '#2E86D4',
    cardBg: '#EAF4FF',
    cardBorder: '#B3D4F5',
    image: 'assets/logafit-case.png',
    pdf: 'assets/logafit-case-study.pdf',
    pages: ['assets/logafit-page-1.jpg'],
    stats: [
      ['59%', 'użytkowników miało problem z nawigacją'],
      ['30%', 'szybsze wykonanie zadań nawigacyjnych'],
      ['85%', 'badanych zgłosiło większą satysfakcję']
    ],
    story: [
      'Istniejąca strona Logafit była trudna w obsłudze: zbyt wiele zakładek, przestarzałe treści i słaba wygoda na telefonach utrudniały znalezienie grafików, formularzy i informacji o zajęciach.',
      'Projekt skupił się na uporządkowaniu architektury informacji, wyeksponowaniu akcji zapisu oraz odświeżeniu warstwy wizualnej tak, aby lepiej pasowała do wodno-fitnessowego charakteru marki.',
      'Efektem jest bardziej przejrzysta, responsywna i dostępna strona z mocnym hero, prostszą strukturą oraz wyraźniejszymi ścieżkami użytkownika.'
    ]
  },
  {
    id: 'calmflow',
    eyebrow: 'Native iOS app · Mental wellbeing',
    category: 'Native iOS app',
    title: 'CalmFlow',
    subtitle: 'Finding Balance and Inner Peace — aplikacja wspierająca zarządzanie zdrowiem psychicznym przez medytację, jogę, ćwiczenia i dziennik.',
    year: '2023',
    role: 'Designer, Researcher',
    location: 'Toruń, Poland',
    tags: ['Market research', 'Competitive analysis', 'User survey', 'Proto-personas', 'Flow diagrams', 'High-fidelity UI', 'Accessibility'],
    accent: '#1F9072',
    cardBg: '#E5F4EF',
    cardBorder: '#9ECFBC',
    image: 'assets/calmflow-case.png',
    pdf: 'assets/calmflow-case-study.pdf',
    pages: ['assets/calmflow-page-1.jpg'],
    stats: [
      ['18', 'uczestników ankiety użytkowników'],
      ['$538M', 'prognozowana wartość rynku mental health do 2030'],
      ['AA', 'ręcznie sprawdzony kontrast UI']
    ],
    story: [
      'CalmFlow odpowiada na rosnącą potrzebę prostych, dostępnych i przyjaznych narzędzi wspierających dobrostan psychiczny. Projekt startuje od researchu rynku mental health i analizy aplikacji VOS, BetterMe oraz How We Feel.',
      'W procesie powstała ankieta użytkowników, dwie proto-persony oraz flow dla kluczowych funkcji: medytacji, jogi, ćwiczeń i osobistego dziennika. Insighty pokazały potrzebę narzędzia bez bariery płatności na starcie i bez przeładowania treścią.',
      'Warstwa UI opiera się na spokojnej typografii Lora/Satoshi, 8-punktowym gridzie, Auto Layout i komponentach projektowanych pod wygodny tap target. Projekt został sprawdzony pod kątem kontrastu i standardów dostępności.'
    ]
  },
  {
    id: 'cuffka',
    eyebrow: 'Native iOS app · Food & Drink',
    category: 'Native iOS app',
    title: 'Cuffka',
    subtitle: 'Your Ultimate Café Companion — aplikacja pomagająca odkrywać kawiarnie, promocje, menu i program lojalnościowy w jednym miejscu.',
    year: '2022–2023',
    role: 'Designer, Researcher',
    location: 'Elbląg, Poland',
    tags: ['Market research', 'Competitive analysis', 'Wireframes', 'High-fidelity UI', 'Prototype', 'Accessibility'],
    accent: '#B85C28',
    cardBg: '#FFF2E8',
    cardBorder: '#F0C09A',
    image: 'assets/cuffka-case.png',
    pdf: 'assets/cuffka-case-study.pdf',
    pages: ['assets/cuffka-page-1.jpg'],
    stats: [
      ['43', 'high-fidelity screens'],
      ['2', 'motywy: light i dark mode'],
      ['AA', 'ręcznie sprawdzony kontrast']
    ],
    story: [
      'Cuffka powstała jako aplikacja dla osób, które lubią kawiarnie, ale chcą szybciej znaleźć dobre napoje, promocje i korzyści lojalnościowe bez szukania informacji po social mediach.',
      'Proces objął research rynku, analizę konkurencji, rozmowę z użytkownikiem, flow diagramy, wireframe\'y, projekt wysokiej wierności i prototyp w Figmie.',
      'Projekt pokazał pełny proces produktowy: od zdefiniowania problemu po dopracowanie UI i ocenę dostępności.'
    ]
  }
];

function useHashProject() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const id = hash.startsWith('#project-') ? hash.replace('#project-', '') : null;
  return projects.find(project => project.id === id) || null;
}

function Nav() {
  return <header className="nav">
    <a className="brand" href="./#top" aria-label="Jakub Sobiecki home">Jakub Sobiecki</a>
    <nav aria-label="Główna nawigacja">
      <a href="./#projects">Projekty</a>
      <a href="./#about">O mnie</a>
      <a href="./#contact">Kontakt</a>
    </nav>
  </header>;
}

function HeroCard() {
  const [photoReady, setPhotoReady] = useState(true);

  return <div className="hero-card" aria-label="Skrót profilu">
    <div className="orb one" />
    <div className="orb two" />
    <div className="photo-frame">
      {photoReady ? <img src="assets/jakub-photo.jpg" alt="Jakub Sobiecki" onError={() => setPhotoReady(false)} /> : <div className="photo-placeholder">JS</div>}
    </div>
    <div className="profile-note">
      <span>UX/UI Designer</span>
      <strong>Research · Flow · Interface</strong>
    </div>
    <div className="mini-grid">
      <span>Research</span><span>Flows</span><span>UI</span><span>Accessibility</span>
    </div>
  </div>;
}

function Hero() {
  return <section className="hero" id="top">
    <div className="shape shape-a" />
    <div className="shape shape-b" />
    <div className="hero-copy">
      <p className="kicker">Junior UX/UI Designer</p>
      <h1>Projektuję proste i dostępne interfejsy dla aplikacji oraz stron.</h1>
      <p className="lead">Cześć, jestem Jakub. Łączę research, uporządkowane flow i estetyczny UI, żeby produkty cyfrowe były łatwiejsze w obsłudze — bez chaosu i zbędnych kliknięć.</p>
      <div className="hero-actions">
        <a className="btn primary" href="#projects">Zobacz projekty</a>
        <a className="btn ghost" href="mailto:mail@jakubsobiecki.pl">Napisz do mnie</a>
      </div>
    </div>
    <HeroCard />
  </section>;
}

function ProjectCard({ project, index }) {
  return <a className="project-card" href={`#project-${project.id}`} style={{'--accent': project.accent, '--card-bg': project.cardBg, '--card-border': project.cardBorder}} aria-label={`Otwórz case study ${project.title}`}>
    <div className="project-thumb">
      <img src={project.image} alt={`Miniatura case study ${project.title}`} loading="lazy" />
    </div>
    <div className="project-content">
      <div className="project-topline">
        <span className="project-num">0{index + 1}</span>
        <span className="project-cat">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-teaser">{project.subtitle}</p>
      <div className="tags">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
      <span className="card-cta">Zobacz case study →</span>
    </div>
  </a>;
}

// Logafit teal from the PDF
const T = '#3FBFA0';
const T_DARK = '#0E2A1E';
const T_LIGHT = '#EAF9F4';

function Donut({ pct, label }) {
  const r = 38, c = 2 * Math.PI * r, dash = (pct / 100) * c;
  return (
    <div className="lf-donut">
      <svg viewBox="0 0 100 100" width="130" height="130">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#D5F0E8" strokeWidth="11"/>
        <circle cx="50" cy="50" r={r} fill="none" stroke={T} strokeWidth="11"
          strokeDasharray={`${dash} ${c - dash}`} strokeDashoffset={c * 0.25} strokeLinecap="round"/>
        <text x="50" y="47" textAnchor="middle" fontSize="18" fontWeight="900" fill={T_DARK}>{pct}%</text>
      </svg>
      <p>{label}</p>
    </div>
  );
}

function LogafitCaseStudy() {
  return <div className="lf">

    <div className="lf-meta">
      {[['📍 Where','Toruń, Poland'],['🌐 What','Redesign of an existing website'],['🤔 Why','Real-world implementation'],['🕵️ Role','Designer, Researcher'],['💪 Category','Health & Fitness'],['⏳ When','January – September 2024']].map(([k,v]) =>
        <div key={k}><span>{k}</span><strong>{v}</strong></div>)}
    </div>

    <div className="lf-section">
      <p className="lf-eyebrow">Redesign strategy</p>
      <p className="lf-quote">The existing Logafit website struggled with poor navigation and responsiveness.</p>
      <p className="lf-quote">Our goal was to address these challenges by introducing a modern, user-centered approach.</p>
      <p className="lf-sublabel">Objectives</p>
      <div className="lf-objectives">
        <div className="lf-objective"><strong>Enhance responsiveness</strong><p>Optimize the site to ensure seamless functionality on mobile devices and desktops.</p></div>
        <div className="lf-objective"><strong>Improve visual appeal</strong><p>Refresh the website's design to better reflect Logafit's brand identity and values.</p></div>
        <div className="lf-objective"><strong>Simplify navigation</strong><p>Consolidate redundant sections and group related content logically to reduce user confusion.</p></div>
      </div>
    </div>

    <div className="lf-section">
      <p className="lf-eyebrow">User research</p>
      <p className="lf-body">To better understand user pain points, I conducted a review of the website's structure and user feedback. The key findings highlighted difficulties with navigation and outdated content.</p>
      <p className="lf-sublabel">Summary insights</p>
      <p className="lf-body">The research highlighted three main problem areas affecting user experience, as shown below.</p>
      <div className="lf-donuts">
        <Donut pct={59} label="struggled with navigation." />
        <Donut pct={28} label="found outdated content problematic." />
        <Donut pct={13} label="mentioned issues with responsiveness." />
      </div>
      <p className="lf-sublabel">Notable comments</p>
      <div className="lf-bubbles">
        <div className="lf-bubble lf-bubble--l">"I had to click through three different tabs just to figure out where to register my child for swimming lessons. Not user-friendly at all."</div>
        <div className="lf-bubble lf-bubble--r">"I tried to find the swimming schedule, but it was buried under so many tabs. It's frustrating!"</div>
      </div>
      <p className="lf-sublabel">Key findings</p>
      <div className="lf-findings">
        <div className="lf-finding">
          <div className="lf-finding-icon">🧭</div>
          <strong>Navigation confusion</strong>
          <p>Users reported difficulty locating essential sections like booking forms and schedules due to a cluttered menu with redundant tabs.</p>
        </div>
        <div className="lf-finding">
          <div className="lf-finding-icon">📱</div>
          <strong>Mobile usability issues</strong>
          <p>The mobile site lacked proper responsiveness, with small buttons and unoptimized layouts leading to frustration.</p>
        </div>
        <div className="lf-finding">
          <div className="lf-finding-icon">🕰️</div>
          <strong>Outdated content</strong>
          <p>Some pages contained irrelevant or old information (e.g., events from 2019), reducing the perceived credibility of the website.</p>
        </div>
      </div>
    </div>

    <div className="lf-section">
      <p className="lf-eyebrow">Architecture improvements</p>
      <p className="lf-body">The original site had over 8 tabs, many containing redundant or outdated information. I consolidated similar sections, reduced the number of main categories, and made navigation more intuitive.</p>
      <p className="lf-sublabel">Changes made</p>
      <div className="lf-changes">
        <div className="lf-change"><span className="lf-change-icon">🗂️</span><p>Grouped similar content into broader categories to simplify navigation.</p></div>
        <div className="lf-change"><span className="lf-change-icon">🗑️</span><p>Removed unnecessary tabs like old event pages.</p></div>
        <div className="lf-change"><span className="lf-change-icon">📋</span><p>Highlighted the booking form on the homepage for easier access.</p></div>
      </div>
    </div>

    <div className="lf-section lf-section--mint">
      <p className="lf-eyebrow">High-fidelity UI</p>
      <p className="lf-body">The high-fidelity design for Logafit focuses on creating a visually engaging and user-friendly interface that reflects the brand's identity and encourages user interaction.</p>
      <p className="lf-sublabel">Hero section</p>
      <p className="lf-body">The hero section was designed to immediately capture user attention and guide them toward key actions.</p>
      <div className="lf-hifi">
        <div className="lf-hifi-point">
          <strong>A prominent call-to-action</strong>
          <p>A large, clear message, "Sign up for our activities!", placed at the center to direct users toward signing up.</p>
        </div>
        <div className="lf-hifi-point">
          <strong>Vivid imagery</strong>
          <p>Photos highlighting the key services offered by Logafit, such as swimming lessons and aqua fitness.</p>
        </div>
        <div className="lf-hifi-point">
          <strong>Wave elements</strong>
          <p>Subtle wave graphics integrated throughout the section to visually connect with Logafit's aquatic theme and make the design more dynamic.</p>
        </div>
      </div>
      <div className="lf-palette-row">
        <div className="lf-palette-col">
          <p className="lf-sublabel">Color palette</p>
          <p className="lf-body-sm">The color scheme primarily draws from Logafit's branding, with gradients inspired by the logo.</p>
          <div className="lf-swatches">
            <div className="lf-swatch" style={{background:'linear-gradient(135deg,#3FBFA0,#1a7a52)'}}></div>
            <div className="lf-swatch" style={{background:'linear-gradient(135deg,#56d4b5,#3FBFA0)'}}></div>
            <div className="lf-swatch" style={{background:'#0E2A1E'}}></div>
            <div className="lf-swatch" style={{background:'#ffffff',border:'1.5px solid #D5F0E8'}}></div>
          </div>
        </div>
        <div className="lf-palette-col">
          <p className="lf-sublabel">Typography</p>
          <p className="lf-body-sm">Buttons — interactive elements like buttons were designed to stand out with rounded corners. I've used 8px corner radius.</p>
          <div className="lf-type-samples">
            <div><span className="lf-type-label">Medium</span><span className="lf-type-sample" style={{fontWeight:500}}>AaBbCcDd</span></div>
            <div><span className="lf-type-label">Semi Bold</span><span className="lf-type-sample" style={{fontWeight:600}}>AaBbCcDd</span></div>
          </div>
          <p className="lf-type-name">Inter</p>
        </div>
      </div>
      <p className="lf-sublabel" style={{marginTop:24}}>Responsive design</p>
      <p className="lf-body" style={{fontWeight:700}}>A mobile-first approach was implemented to ensure usability on smaller screens.</p>
      <p className="lf-body">These breakpoints allowed the design to adapt seamlessly to different devices, ensuring a consistent user experience.</p>
      <div className="lf-devices">
        <div className="lf-device"><div className="lf-device-frame lf-device-frame--mobile"></div><strong>390px</strong><span>Mobile devices</span></div>
        <div className="lf-device"><div className="lf-device-frame lf-device-frame--tablet"></div><strong>768px</strong><span>Tablets</span></div>
        <div className="lf-device"><div className="lf-device-frame lf-device-frame--desktop"></div><strong>1024px</strong><span>Desktops</span></div>
        <div className="lf-device"><div className="lf-device-frame lf-device-frame--wide"></div><strong>1280–1536px</strong><span>Larger screens</span></div>
      </div>
    </div>

    <div className="lf-section">
      <p className="lf-eyebrow">Accessibility evaluation</p>
      <p className="lf-body">The redesigned Logafit website was evaluated to meet WCAG AA standards. Each key UI component was checked using tools like the Contrast Checker by WebAIM to ensure a user-friendly and inclusive experience.</p>
      <div className="lf-a11y">
        {[
          ['Gradient buttons','10.11:1 · 8:11.3:1','linear-gradient(135deg,#3FBFA0,#1a7a52)'],
          ['Gradient cards','9.74:1 · 7.74:1','linear-gradient(135deg,#56d4b5,#3FBFA0)'],
          ['Text on colors','5.13:1','linear-gradient(135deg,#1a5f3c,#2e8f6a)'],
        ].map(([name,ratio,bg]) =>
          <div key={name} className="lf-a11y-row">
            <div className="lf-a11y-swatch" style={{background:bg}}></div>
            <div className="lf-a11y-info">
              <span className="lf-a11y-name">{name}</span>
              <span className="lf-a11y-ratio">{ratio}</span>
            </div>
            <span className="lf-aa">WCAG AA: Pass</span>
          </div>)}
      </div>
    </div>

    <div className="lf-section">
      <p className="lf-eyebrow">Outcome &amp; metrics</p>
      <div className="lf-before-after">
        <div className="lf-before">
          <p className="lf-ba-label">Before</p>
          <p className="lf-body">The original Logafit website lacked a cohesive design and struggled with user navigation.</p>
          <ul className="lf-ba-list">
            <li>An outdated, static hero section with limited interactivity.</li>
            <li>Overwhelming navigation tabs with redundant or poorly structured content.</li>
            <li>Minimal focus on modern branding and engagement, leaving the site less appealing to users.</li>
          </ul>
          <p className="lf-body">As a result, users faced difficulties in finding key information, such as swimming classes or contact details.</p>
        </div>
        <div className="lf-after">
          <p className="lf-ba-label">After</p>
          <p className="lf-outcome-headline">The redesigned Logafit website introduces a modern, user-centered approach.</p>
          <ul className="lf-ba-list">
            <li>A dynamic hero section with a prominent call-to-action, visually engaging users with relevant imagery.</li>
            <li>Simplified navigation with consolidated tabs and logical content grouping, ensuring ease of use.</li>
            <li>A refreshed visual identity incorporating gradients and wave elements, aligning with Logafit's aquatic branding.</li>
          </ul>
          <p className="lf-body">The new design provides a more engaging and streamlined experience, improving user satisfaction and accessibility.</p>
        </div>
      </div>
      <p className="lf-sublabel" style={{marginTop:24}}>Highlights of the redesign</p>
      <div className="lf-highlights">
        <div className="lf-highlight">
          <div className="lf-highlight-icon">🧭</div>
          <strong>Enhanced navigation</strong>
          <p>The simplification of navigation tabs and consolidation of redundant sections reduced user confusion and improved the user journey.</p>
          <p className="lf-metric">Navigation tasks completed 30% faster during user testing.</p>
        </div>
        <div className="lf-highlight">
          <div className="lf-highlight-icon">🚀</div>
          <strong>Increased user engagement</strong>
          <p>The modernized design, including an eye-catching hero section and prominent call-to-action buttons, encouraged more user interaction.</p>
          <p className="lf-metric">Expected increase in sign-up rates by 15% based on initial feedback.</p>
        </div>
        <div className="lf-highlight">
          <div className="lf-highlight-icon">💬</div>
          <strong>Positive Feedback</strong>
          <p>Initial user feedback highlighted the improved aesthetics and ease of use, particularly in the homepage design and navigation structure.</p>
          <p className="lf-metric">85% of surveyed users reported greater satisfaction with the redesigned website.</p>
        </div>
      </div>
    </div>

    <div className="lf-section lf-section--dark">
      <p className="lf-eyebrow lf-eyebrow--light">Lessons learned</p>
      <p className="lf-quote lf-quote--light">This project was an invaluable experience that reinforced my understanding of user-centered design principles.</p>
      <p className="lf-sublabel lf-sublabel--light">Here's what I've learned</p>
      <div className="lf-lessons">
        <div className="lf-lesson">
          <strong>🤝 Collaboration is Key</strong>
          <p>Working closely with the development team taught me the importance of maintaining clear communication and providing detailed design documentation. Regular feedback loops ensured alignment and avoided major rework.</p>
        </div>
        <div className="lf-lesson">
          <strong>♿ Accessibility Matters</strong>
          <p>This project reinforced the significance of designing for accessibility. Testing contrast ratios and ensuring WCAG compliance helped me create a more inclusive experience for all users.</p>
        </div>
        <div className="lf-lesson">
          <strong>✂️ The Value of Simplification</strong>
          <p>Simplifying the navigation and grouping redundant sections into logical categories addressed real pain points, leading to a product that truly resonated with its audience.</p>
        </div>
        <div className="lf-lesson">
          <strong>💬 Feedback is a Powerful Tool</strong>
          <p>Incorporating user feedback early in the process highlighted how small changes can significantly impact usability and user satisfaction.</p>
        </div>
      </div>
    </div>

  </div>;
}

function ProjectDetail({ project }) {
  return <main className="detail-page" style={{'--accent': project.accent}}>
    <a className="back-link" href="./#projects">← Wróć do projektów</a>
    <section className="detail-hero">
      <div>
        <p className="kicker">Case study</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.subtitle}</p>
        <div className="meta-row detail-meta"><span>{project.year}</span><span>{project.role}</span><span>{project.location}</span></div>
      </div>
      <div className="detail-preview">
        <img src={project.image} alt={`Podgląd case study ${project.title}`} />
      </div>
    </section>
    <section className="detail-body">
      <div className="stats">{project.stats.map(([num, label]) => <div className="stat" key={num + label}><strong>{num}</strong><span>{label}</span></div>)}</div>
      <div className="pdf-section">
        <div className="pdf-header">
          <span className="pdf-label">Case study</span>
          <a className="text-link" href={project.pdf} target="_blank" rel="noopener noreferrer">Pobierz PDF ↓</a>
        </div>
        <div className="pdf-viewer">{project.pages.map((src, i) => <img key={i} src={src} alt={`Strona case study ${i + 1}`} className="pdf-page" loading="lazy" />)}</div>
      </div>
    </section>
  </main>;
}

function Projects() {
  return <section className="projects" id="projects">
    <div className="section-head">
      <p className="kicker">Portfolio</p>
      <h2>Wybrane projekty</h2>
      <p>Case studies pokazujące mój proces: od zrozumienia problemu i struktury informacji, po dopracowany interfejs oraz responsywność.</p>
    </div>
    <div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div>
  </section>;
}

function About() {
  return <section className="about" id="about">
    <div>
      <p className="kicker">O mnie</p>
      <h2>Projektuję z myślą o ludziach, nie tylko o ekranach.</h2>
    </div>
    <div className="about-copy">
      <p>Jestem Junior UX/UI Designerem. Najbardziej interesuje mnie moment, w którym dobrze ułożona struktura, prosta komunikacja i dopracowany UI zaczynają realnie ułatwiać korzystanie z produktu.</p>
      <p>W projektach stawiam na czytelność, dostępność i spokojny proces: najpierw rozumiem problem, potem porządkuję flow, a na końcu dopracowuję warstwę wizualną.</p>
    </div>
  </section>;
}

function Contact() {
  return <footer className="contact" id="contact">
    <p className="kicker">Kontakt</p>
    <h2>Masz projekt albo rekrutację? Porozmawiajmy.</h2>
    <div className="contact-links">
      <a href="mailto:mail@jakubsobiecki.pl">mail@jakubsobiecki.pl</a>
      <a href="tel:+48577810769">+48 577 810 769</a>
      <a href="#">LinkedIn</a>
      <a href="#">Behance</a>
    </div>
  </footer>;
}

function HomePage() {
  return <>
    <main>
      <Hero />
      <Projects />
      <About />
    </main>
    <Contact />
  </>;
}

function App() {
  const selectedProject = useHashProject();
  useEffect(() => {
    if (selectedProject) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedProject?.id]);
  return <>
    <Nav />
    {selectedProject ? <ProjectDetail project={selectedProject} /> : <HomePage />}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
