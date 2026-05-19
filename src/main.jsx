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
    <a className="brand" href="./#top" aria-label="Jakub Sobiecki home">JS</a>
    <nav aria-label="Główna nawigacja">
      <a href="./#projects">Projekty</a>
      <a href="./#about">O mnie</a>
      <a href="./#contact">Kontakt</a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="top">
    <div className="shape shape-a" />
    <div className="shape shape-b" />
    <div className="hero-copy">
      <p className="kicker">Junior UX/UI Designer</p>
      <h1>Projektuję produkty cyfrowe, które są proste, dostępne i przyjemne w użyciu.</h1>
      <p className="lead">Cześć, z tej strony Jakub. Pomagam przekładać realne potrzeby użytkowników na czytelne flow, przemyślane interfejsy i doświadczenia bez zbędnego chaosu.</p>
      <div className="hero-actions">
        <a className="btn primary" href="#projects">Zobacz projekty</a>
        <a className="btn ghost" href="mailto:mail@jakubsobiecki.pl">Napisz do mnie</a>
      </div>
    </div>
    <div className="hero-card" aria-label="Skrót profilu">
      <div className="orb one" />
      <div className="orb two" />
      <div className="profile-mark">UX<br/>UI</div>
      <div className="mini-grid">
        <span>Research</span><span>Flows</span><span>UI</span><span>Accessibility</span>
      </div>
    </div>
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

    {/* Meta row */}
    <div className="lf-meta">
      {[['Where','Toruń, Poland'],['What','Redesign of an existing website'],['Why','Portfolio Project'],['Role','Designer, Researcher'],['Category','Health & Fitness'],['When','January – September 2024']].map(([k,v]) =>
        <div key={k}><span>{k}</span><strong>{v}</strong></div>)}
    </div>

    {/* Redesign strategy */}
    <div className="lf-section">
      <p className="lf-eyebrow">Redesign strategy</p>
      <p className="lf-quote">The existing Logafit website struggled with<br/>poor navigation and responsiveness.</p>
      <p className="lf-quote">Our goal was to address these challenges<br/>by introducing a modern, user-centered approach.</p>
      <p className="lf-sublabel">Objectives</p>
      <div className="lf-objectives">
        {[
          ['Simplify navigation','Reduce and consolidate menu items so users find what they need faster.'],
          ['Improve responsiveness','Redesign layouts to work fluidly on mobile and tablet devices.'],
          ['Refresh visual identity','Modernise the UI to reflect Logafit\'s active, aquatic brand.'],
          ['Boost accessibility','Achieve WCAG 2.0 AA contrast compliance across all UI elements.'],
        ].map(([t,d]) => <div key={t} className="lf-objective"><strong>{t}</strong><p>{d}</p></div>)}
      </div>
    </div>

    {/* User research */}
    <div className="lf-section">
      <p className="lf-eyebrow">User research</p>
      <p className="lf-body">To better understand user pain points, I conducted a review of the website's structure and user feedback. The key findings highlighted difficulties with navigation and outdated content.</p>
      <p className="lf-sublabel">Summary highlights</p>
      <p className="lf-body">The research highlighted three main problem areas affecting user experience, as shown below.</p>
      <div className="lf-donuts">
        <Donut pct={59} label="struggled with navigation" />
        <Donut pct={28} label="found outdated content problematic" />
        <Donut pct={13} label="mentioned issues with responsiveness" />
      </div>
      <p className="lf-sublabel">Notable comments</p>
      <div className="lf-bubbles">
        <div className="lf-bubble lf-bubble--l">"I can't find the schedule or any information about classes on this website."</div>
        <div className="lf-bubble lf-bubble--r">"The website seems outdated, but the links are just broken."</div>
      </div>
      <p className="lf-sublabel">Key findings</p>
      <div className="lf-findings">
        <div className="lf-finding">
          <div className="lf-finding-icon">🧭</div>
          <strong>Navigation confusion</strong>
          <p>Users frequently had difficulty finding the location of activities/classes, buttons and schedules.</p>
        </div>
        <div className="lf-finding">
          <div className="lf-finding-icon">📱</div>
          <strong>Mobile usability issues</strong>
          <p>Poor mobile UX was highlighted as a significant barrier to accessing information on the go.</p>
        </div>
        <div className="lf-finding">
          <div className="lf-finding-icon">📋</div>
          <strong>Outdated content</strong>
          <p>The website had a lot of outdated content — links and images were broken.</p>
        </div>
      </div>
    </div>

    {/* Architecture improvements */}
    <div className="lf-section">
      <p className="lf-eyebrow">Architecture improvements</p>
      <p className="lf-body">I consolidated similar sections, reduced the number of main categories, and made navigation more intuitive.</p>
      <p className="lf-sublabel">Changes made</p>
      <div className="lf-arch">
        <div className="lf-arch-col">
          <div className="lf-arch-label lf-arch-label--before">Before</div>
          {['Strona główna','O nas','Zajęcia','Grafik','Basen','Kontakt','Aktualności','Galeria'].map(i =>
            <div key={i} className="lf-arch-item lf-arch-item--before">{i}</div>)}
        </div>
        <div className="lf-arch-arrow">→</div>
        <div className="lf-arch-col">
          <div className="lf-arch-label lf-arch-label--after">After</div>
          {['Strona główna','Zajęcia & Grafik','O nas','Kontakt'].map(i =>
            <div key={i} className="lf-arch-item lf-arch-item--after">{i}</div>)}
          <ul className="lf-arch-notes">
            <li>Grouping similar items to reduce cognitive load</li>
            <li>Highlighted frequently accessible links</li>
          </ul>
        </div>
      </div>
    </div>

    {/* High-fidelity UI */}
    <div className="lf-section lf-section--mint">
      <p className="lf-eyebrow">High-fidelity UI</p>
      <p className="lf-body">The high-fidelity design for Logafit focuses on creating a visually engaging and user-friendly interface that reflects the brand's identity and encourages user interaction.</p>
      <div className="lf-hifi">
        <div className="lf-hifi-point">
          <strong>A prominent call-to-action</strong>
          <p>A large, clear message "Sign up for our activities", positioned at the centre to direct users to a key section.</p>
        </div>
        <div className="lf-hifi-point">
          <strong>Brand elements</strong>
          <p>Subtle, sharp graphics integrated throughout the section to visually connect with Logafit's aquatic theme and make the design more recognisable.</p>
        </div>
        <div className="lf-hifi-point">
          <strong>Macro elements</strong>
          <p>Subtle, sharp graphics integrated throughout the hero section to visually identify with Logafit's theme and make the design more personalized.</p>
        </div>
      </div>
      <p className="lf-sublabel" style={{marginTop:28}}>Responsive design</p>
      <p className="lf-body" style={{fontWeight:700,fontSize:18}}>A mobile-first approach was implemented to ensure usability on smaller screens.</p>
      <p className="lf-body">Three breakpoints allowed the design to adapt seamlessly to different devices, ensuring a consistent user experience.</p>
      <div className="lf-devices">
        <div className="lf-device">
          <div className="lf-device-frame lf-device-frame--mobile"></div>
          <strong>390px</strong><span>Mobile devices</span>
        </div>
        <div className="lf-device">
          <div className="lf-device-frame lf-device-frame--tablet"></div>
          <strong>744px</strong><span>Tablets</span>
        </div>
        <div className="lf-device">
          <div className="lf-device-frame lf-device-frame--desktop"></div>
          <strong>1280px</strong><span>Larger screens</span>
        </div>
      </div>
    </div>

    {/* Accessibility */}
    <div className="lf-section">
      <p className="lf-eyebrow">Accessibility evaluation</p>
      <p className="lf-body">Evaluated to meet WCAG 2.0 Accessibility standards. Each UI element was carefully checked using the Contrast Checker by DIAMANT to ensure a consistent visual experience.</p>
      <div className="lf-a11y">
        {[
          ['Gradient buttons', `linear-gradient(135deg,${T},#1a7a52)`],
          ['Gradient cards',   `linear-gradient(135deg,#2a9d7a,${T})`],
          ['Text on colors',   `linear-gradient(135deg,#1a5f3c,#2e8f6a)`],
        ].map(([name,bg]) =>
          <div key={name} className="lf-a11y-row">
            <div className="lf-a11y-swatch" style={{background:bg}}></div>
            <span className="lf-a11y-name">{name}</span>
            <span className="lf-aa">AA</span>
          </div>)}
      </div>
    </div>

    {/* Outcome & metrics */}
    <div className="lf-section">
      <p className="lf-eyebrow">Outcome &amp; metrics</p>
      <p className="lf-body">The original Logafit website lacked a clear structure and struggled with user navigation.</p>
      <p className="lf-body">As a result, users faced difficulties in finding key information, such as swimming classes or contact details.</p>
      <p className="lf-outcome-headline">The redesigned Logafit website introduces a modern, user-centered approach.</p>
      <p className="lf-body">The new design provides a more engaging and streamlined experience, improving user satisfaction and retention.</p>
      <p className="lf-sublabel" style={{marginTop:20}}>Highlights of the redesign</p>
      <div className="lf-highlights">
        <div className="lf-highlight">
          <div className="lf-highlight-icon">🧭</div>
          <strong>Enhanced Navigation</strong>
          <p>The simplification of navigation has improved the overall user experience.</p>
        </div>
        <div className="lf-highlight">
          <div className="lf-highlight-icon">⚡</div>
          <strong>Increased user satisfaction</strong>
          <p>The content redesign has led to a 30% reduction in time to find information.</p>
        </div>
        <div className="lf-highlight">
          <div className="lf-highlight-icon">💬</div>
          <strong>Positive Feedback</strong>
          <p>85% of tested users provided positive feedback on the new navigation structure.</p>
        </div>
      </div>
    </div>

    {/* Lessons learned */}
    <div className="lf-section lf-section--dark">
      <p className="lf-eyebrow lf-eyebrow--light">Lessons learned</p>
      <p className="lf-quote lf-quote--light">This project was an invaluable experience that reinforced my understanding of user-centered design principles.</p>
      <p className="lf-sublabel lf-sublabel--light">Here's what I learned:</p>
      <div className="lf-lessons">
        <div className="lf-lesson">
          <strong>Working with the developer</strong>
          <p>Maintaining clear communication and managing design details was key to a smooth handoff.</p>
        </div>
        <div className="lf-lesson">
          <strong>The Importance of User Feedback</strong>
          <p>Using real feedback to design a product that truly resonated with users.</p>
        </div>
        <div className="lf-lesson">
          <strong>The Value of Simplification</strong>
          <p>Simplifying navigation and content structure helped create a more intuitive product.</p>
        </div>
        <div className="lf-lesson">
          <strong>Feedback is a Powerful Tool</strong>
          <p>An ongoing feedback loop during design identifies problems early before they become costly.</p>
        </div>
      </div>
    </div>

  </div>;
}

function ProjectDetail({ project }) {
  const hasWebCaseStudy = project.id === 'logafit';
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
        {hasWebCaseStudy
          ? <LogafitCaseStudy />
          : <div className="pdf-viewer">{project.pages.map((src, i) => <img key={i} src={src} alt={`Strona case study ${i + 1}`} className="pdf-page" loading="lazy" />)}</div>
        }
      </div>
    </section>
  </main>;
}

function Projects() {
  return <section className="projects" id="projects">
    <div className="section-head">
      <p className="kicker">Moje portfolio</p>
      <h2>Wybrane projekty</h2>
      <p>Trzy case studies w formie krótkich kafli. Pełny proces i PDF są dostępne po wejściu w konkretny projekt.</p>
    </div>
    <div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div>
  </section>;
}

function About() {
  return <section className="about" id="about">
    <div>
      <p className="kicker">O mnie</p>
      <h2>Ciekawość, prostota i dostępność.</h2>
    </div>
    <div className="about-copy">
      <p>Jestem Junior UX/UI Designerem z zamiłowaniem do projektowania produktów cyfrowych oraz ciągłego uczenia się.</p>
      <p>Lubię pomagać ludziom poprzez ulepszanie ich doświadczeń. Dążę do prostoty, dostępności i ograniczania wykluczenia cyfrowego — szczególnie tam, gdzie interfejs może realnie ułatwić codzienne zadania.</p>
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
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedProject?.id]);
  return <>
    <Nav />
    {selectedProject ? <ProjectDetail project={selectedProject} /> : <HomePage />}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
