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
        <img src={project.image} alt={`Podgląd pierwszej strony case study ${project.title}`} />
      </div>
    </section>
    <section className="detail-body">
      <div className="stats">{project.stats.map(([num, label]) => <div className="stat" key={num + label}><strong>{num}</strong><span>{label}</span></div>)}</div>
      <div className="case-text expanded">
        {project.story.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <div className="tags wide">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="btn primary" href={project.pdf}>Otwórz pełny PDF</a>
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
