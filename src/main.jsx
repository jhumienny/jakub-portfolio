import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    id: 'logafit',
    eyebrow: 'Website redesign · Health & Fitness',
    title: 'Logafit',
    subtitle: 'Revitalizing wellness — modernizacja strony fitness z naciskiem na prostszą nawigację, responsywność i dostępność.',
    year: '2024',
    role: 'Designer, Researcher',
    location: 'Toruń, Poland',
    tags: ['Redesign strategy', 'User research', 'Information architecture', 'Responsive UI', 'Accessibility'],
    accent: '#23B8D4',
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
    title: 'CalmFlow',
    subtitle: 'Finding Balance and Inner Peace — aplikacja wspierająca zarządzanie zdrowiem psychicznym przez medytację, jogę, ćwiczenia i dziennik.',
    year: '2023',
    role: 'Designer, Researcher',
    location: 'Toruń, Poland',
    tags: ['Market research', 'Competitive analysis', 'User survey', 'Proto-personas', 'Flow diagrams', 'High-fidelity UI', 'Accessibility'],
    accent: '#8B7CF6',
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
    title: 'Cuffka',
    subtitle: 'Your Ultimate Café Companion — aplikacja pomagająca odkrywać kawiarnie, promocje, menu i program lojalnościowy w jednym miejscu.',
    year: '2022–2023',
    role: 'Designer, Researcher',
    location: 'Elbląg, Poland',
    tags: ['Market research', 'Competitive analysis', 'Wireframes', 'High-fidelity UI', 'Prototype', 'Accessibility'],
    accent: '#C9825D',
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

function Nav() {
  return <header className="nav">
    <a className="brand" href="#top" aria-label="Jakub Sobiecki home">JS</a>
    <nav aria-label="Główna nawigacja">
      <a href="#projects">Projekty</a>
      <a href="#about">O mnie</a>
      <a href="#contact">Kontakt</a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="top">
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
  return <article className="project-card" id={project.id} style={{'--accent': project.accent}}>
    <div className="project-index">0{index + 1}</div>
    <div className="project-content">
      <p className="kicker">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <div className="meta-row">
        <span>{project.year}</span><span>{project.role}</span><span>{project.location}</span>
      </div>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="card-actions">
        <a className="text-link" href={`#case-${project.id}`}>Czytaj case study</a>
        {project.pdf && <a className="text-link muted" href={project.pdf}>PDF</a>}
      </div>
    </div>
    <ProjectVisual project={project} compact />
  </article>;
}

function ProjectVisual({ project, compact = false }) {
  if (project.image) {
    return <div className={`project-visual ${compact ? 'compact' : ''}`}>
      <img src={project.image} alt={`Podgląd case study ${project.title}`} loading="lazy" />
    </div>;
  }
  return <div className={`project-visual generated ${compact ? 'compact' : ''}`} aria-label="Wizualizacja CalmFlow">
    <div className="phone">
      <div className="phone-top" />
      <div className="breath-circle"><span>4 · 7 · 8</span></div>
      <h4>Evening reset</h4>
      <p>3 min breathing session</p>
      <div className="calm-bars"><i /><i /><i /></div>
    </div>
  </div>;
}

function CaseStudy({ project }) {
  return <section className="case" id={`case-${project.id}`} style={{'--accent': project.accent}}>
    <div className="case-head">
      <p className="kicker">Case study</p>
      <h2>{project.title}</h2>
      <p>{project.subtitle}</p>
    </div>
    <div className="stats">{project.stats.map(([num, label]) => <div className="stat" key={num + label}><strong>{num}</strong><span>{label}</span></div>)}</div>
    <div className="case-grid">
      <div className="case-text">
        {project.story.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {project.pdf && <a className="btn ghost small" href={project.pdf}>Otwórz pełny PDF</a>}
      </div>
      <ProjectVisual project={project} />
    </div>
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

function App() {
  return <>
    <Nav />
    <main>
      <Hero />
      <section className="projects" id="projects">
        <div className="section-head">
          <p className="kicker">Moje portfolio</p>
          <h2>Wybrane projekty</h2>
        </div>
        <div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div>
      </section>
      {projects.map(project => <CaseStudy project={project} key={project.id} />)}
      <About />
    </main>
    <Contact />
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
