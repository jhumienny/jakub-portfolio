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
      'Proces objął research rynku, analizę konkurencji, rozmowę z użytkownikiem, flow diagramy, wireframe’y, projekt wysokiej wierności i prototyp w Figmie.',
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

function DonutChart({ pct, label, color }) {
  const r = 36, c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <div className="cs-donut">
      <svg viewBox="0 0 100 100" width="110" height="110">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e8f0ec" strokeWidth="13" />
        <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="13"
          strokeDasharray={`${dash} ${c - dash}`} strokeDashoffset={c * 0.25} strokeLinecap="round" />
        <text x="50" y="46" textAnchor="middle" fontSize="17" fontWeight="900" fill="#102019">{pct}%</text>
      </svg>
      <span>{label}</span>
    </div>
  );
}

function LogafitCaseStudy() {
  const accent = '#2E86D4';
  const accentLight = '#EAF4FF';
  return <div className="cs">

    <div className="cs-meta-bar">
      {[['Gdzie','Toruń, Poland'],['Co','Redesign istniejącej strony'],['Dlaczego','Projekt portfolio'],['Rola','Designer, Researcher'],['Kategoria','Health & Fitness'],['Kiedy','Styczeń – Wrzesień 2024']].map(([k,v]) =>
        <div key={k}><span>{k}</span><strong>{v}</strong></div>)}
    </div>

    {/* Redesign strategy */}
    <div className="cs-block cs-block--tinted">
      <p className="cs-label">Redesign strategy</p>
      <p className="cs-big-quote">The existing Logafit website struggled with poor navigation and responsiveness.</p>
      <p className="cs-body">Our goal was to address these challenges by introducing a modern, user-centered approach.</p>
    </div>

    {/* User research */}
    <div className="cs-block">
      <p className="cs-label">User research</p>
      <p className="cs-body">To better understand user pain points, I conducted a review of the website's structure and user feedback. The key findings highlighted difficulties with navigation and outdated content.</p>
      <p className="cs-sublabel">Summary highlights</p>
      <div className="cs-donuts">
        <DonutChart pct={59} label="struggled with navigation" color={accent} />
        <DonutChart pct={28} label="found outdated content problematic" color="#1F9072" />
        <DonutChart pct={13} label="mentioned issues with responsiveness" color="#B85C28" />
      </div>
      <p className="cs-sublabel" style={{marginTop:28}}>Notable comments</p>
      <div className="cs-bubbles">
        <div className="cs-bubble">"I can't find the schedule or any information about classes on this website."</div>
        <div className="cs-bubble cs-bubble--right">"The website seems outdated, but the links are just broken."</div>
      </div>
      <p className="cs-sublabel" style={{marginTop:28}}>Key findings</p>
      <div className="cs-findings">
        <div className="cs-finding">
          <div className="cs-finding-icon">🧭</div>
          <strong>Navigation confusion</strong>
          <p>Users frequently had difficulty finding activities, schedules and class information due to an unclear menu structure.</p>
        </div>
        <div className="cs-finding">
          <div className="cs-finding-icon">📱</div>
          <strong>Mobile usability issues</strong>
          <p>Poor mobile UX was highlighted as a significant barrier to accessing information on the go.</p>
        </div>
        <div className="cs-finding">
          <div className="cs-finding-icon">📋</div>
          <strong>Outdated content</strong>
          <p>The website had a lot of outdated content — links and images were broken, driving users away.</p>
        </div>
      </div>
    </div>

    {/* Architecture improvements */}
    <div className="cs-block">
      <p className="cs-label">Architecture improvements</p>
      <p className="cs-body">I consolidated similar sections, reduced the number of main categories, and made navigation more intuitive.</p>
      <p className="cs-sublabel">Changes made</p>
      <div className="cs-arch">
        <div className="cs-arch-col">
          <div className="cs-arch-head cs-arch-head--before">Before</div>
          <div className="cs-arch-tree">
            {['Strona główna','O nas','Zajęcia','Grafik','Basen','Kontakt','Aktualności','Galeria'].map(item =>
              <div key={item} className="cs-arch-item cs-arch-item--before">{item}</div>)}
          </div>
        </div>
        <div className="cs-arch-arrow">→</div>
        <div className="cs-arch-col">
          <div className="cs-arch-head cs-arch-head--after">After</div>
          <div className="cs-arch-tree">
            {['Strona główna','Zajęcia & Grafik','O nas','Kontakt'].map(item =>
              <div key={item} className="cs-arch-item cs-arch-item--after">{item}</div>)}
          </div>
          <ul className="cs-arch-notes">
            <li>Grupowanie podobnych elementów redukuje cognitive load</li>
            <li>Wyróżnienie najczęściej używanych linków</li>
          </ul>
        </div>
      </div>
    </div>

    {/* High-fidelity UI */}
    <div className="cs-block cs-block--tinted">
      <p className="cs-label">High-fidelity UI</p>
      <p className="cs-body">The high-fidelity design for Logafit focuses on creating a visually engaging and user-friendly interface that reflects the brand's identity and encourages user interaction.</p>
      <div className="cs-hifi-points">
        <div className="cs-hifi-point">
          <strong>A prominent call-to-action</strong>
          <p>A large, clear message "Sign up for our activities", positioned at the center to direct users to a key section.</p>
        </div>
        <div className="cs-hifi-point">
          <strong>Brand elements</strong>
          <p>Subtle, sharp graphics integrated throughout the section to visually connect with Logafit's aquatic theme and make the design more recognizable.</p>
        </div>
        <div className="cs-hifi-point">
          <strong>Macro elements</strong>
          <p>Subtle, sharp graphics integrated throughout the hero section to visually identify with Logafit's theme and make the design more personalized.</p>
        </div>
      </div>
      <p className="cs-sublabel" style={{marginTop:28}}>Responsive design</p>
      <p className="cs-body">A mobile-first approach was implemented to ensure usability on smaller screens.</p>
      <div className="cs-breakpoints">
        <div className="cs-breakpoint">
          <div className="cs-bp-device cs-bp-device--mobile"></div>
          <strong>390px</strong>
          <span>Mobile devices</span>
        </div>
        <div className="cs-breakpoint">
          <div className="cs-bp-device cs-bp-device--tablet"></div>
          <strong>744px</strong>
          <span>Tablets</span>
        </div>
        <div className="cs-breakpoint">
          <div className="cs-bp-device cs-bp-device--desktop"></div>
          <strong>1280px</strong>
          <span>Larger screens</span>
        </div>
      </div>
    </div>

    {/* Accessibility */}
    <div className="cs-block">
      <p className="cs-label">Accessibility evaluation</p>
      <p className="cs-body">Evaluated to meet WCAG 2.0 Accessibility standards. Each UI element was carefully checked using the Contrast Checker by DIAMANT to ensure a consistent visual experience.</p>
      <div className="cs-a11y">
        {[['Gradient buttons','AA'],['Gradient cards','AA'],['Text on colors','AA']].map(([name, rating]) =>
          <div key={name} className="cs-a11y-item">
            <div className="cs-a11y-swatch" style={{background: `linear-gradient(135deg, ${accent}, #1a5fa0)`}}></div>
            <div>
              <strong>{name}</strong>
              <span className="cs-a11y-badge">{rating}</span>
            </div>
          </div>)}
      </div>
    </div>

    {/* Outcome */}
    <div className="cs-block">
      <p className="cs-label">Outcome &amp; metrics</p>
      <div className="cs-before-after">
        <div className="cs-before">
          <p className="cs-ba-label">Before</p>
          <p>The original Logafit website lacked a clear structure and struggled with user navigation. As a result, users faced difficulties in finding key information, such as swimming classes or contact details.</p>
        </div>
        <div className="cs-after">
          <p className="cs-ba-label">After</p>
          <p>The redesigned Logafit website introduces a modern, user-centered approach. The new design provides a more engaging and streamlined experience, improving user satisfaction and retention.</p>
        </div>
      </div>
      <p className="cs-sublabel" style={{marginTop:28}}>Highlights of the redesign</p>
      <div className="cs-highlights">
        <div className="cs-highlight">
          <div className="cs-highlight-icon">🧭</div>
          <strong>Enhanced Navigation</strong>
          <p>The simplification of navigation has improved the overall user experience significantly.</p>
        </div>
        <div className="cs-highlight">
          <div className="cs-highlight-icon">⚡</div>
          <strong>Increased user satisfaction</strong>
          <p>A 30% reduction in time to find information thanks to clear headings and organized sections.</p>
        </div>
        <div className="cs-highlight">
          <div className="cs-highlight-icon">💬</div>
          <strong>Positive Feedback</strong>
          <p>85% of tested users provided positive feedback on the new navigation structure.</p>
        </div>
      </div>
    </div>

    {/* Lessons learned */}
    <div className="cs-block cs-block--dark">
      <p className="cs-label cs-label--light">Lessons learned</p>
      <p className="cs-big-quote cs-big-quote--light">This project was an invaluable experience that reinforced my understanding of user-centered design principles.</p>
      <div className="cs-lessons">
        <div className="cs-lesson">
          <strong>Working with the developer</strong>
          <p>Maintaining clear communication and managing design details was key to a smooth handoff.</p>
        </div>
        <div className="cs-lesson">
          <strong>The importance of user feedback</strong>
          <p>Using real feedback to design a product that truly resonated with users made the difference.</p>
        </div>
        <div className="cs-lesson">
          <strong>The value of simplification</strong>
          <p>Simplifying the navigation and content structure helped create a more intuitive product.</p>
        </div>
        <div className="cs-lesson">
          <strong>Feedback is a powerful tool</strong>
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
