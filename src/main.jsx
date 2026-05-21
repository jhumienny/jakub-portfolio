import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    id: 'logafit',
    eyebrow: 'Website redesign · Health & Fitness',
    category: 'Website redesign',
    title: 'Logafit',
    subtitle: 'Revitalizing wellness — a fitness website redesign focused on simpler navigation, responsiveness, and accessibility.',
    year: '2024',
    role: 'Designer, Researcher',
    location: 'Toruń, Poland',
    what: 'Redesign of an existing website',
    why: 'Real-world implementation',
    tags: ['Redesign strategy', 'User research', 'Information architecture', 'Responsive UI', 'Accessibility'],
    process: ['Redesign strategy', 'User research', 'Architecture improvements', 'High-fidelity UI', 'Responsive design', 'Accessibility evaluation', 'Outcome & metrics', 'Lessons learned'],
    accent: '#2E86D4',
    cardBg: '#EAF4FF',
    cardBorder: '#B3D4F5',
    image: 'assets/logafit-case.png',
    pdf: 'assets/logafit-case-study.pdf',
    pages: ['assets/logafit-page-1.jpg'],
    stats: [
      ['59%', 'of users struggled with navigation'],
      ['30%', 'faster completion of navigation tasks'],
      ['85%', 'of participants reported higher satisfaction']
    ],
    story: [
      'The existing Logafit website was difficult to use: too many tabs, outdated content, and poor mobile usability made it harder to find schedules, forms, and class information.',
      'The project focused on reorganizing the information architecture, making the sign-up path more visible, and refreshing the visual layer to better match the brand’s water-fitness character.',
      'The result is a clearer, more responsive, and more accessible website with a stronger hero section, simpler structure, and more obvious user paths.'
    ]
  },
  {
    id: 'calmflow',
    eyebrow: 'Native iOS app · Mental wellbeing',
    category: 'Native iOS app',
    title: 'CalmFlow',
    subtitle: 'Finding Balance and Inner Peace — an app supporting mental wellbeing through meditation, yoga, exercise, and journaling.',
    year: '2023',
    role: 'Designer, Researcher',
    location: 'Toruń, Poland',
    what: 'Native Mobile App (iOS)',
    why: 'Portfolio Project',
    tags: ['Market research', 'Competitive analysis', 'User survey', 'Proto-personas', 'Flow diagrams', 'High-fidelity UI', 'Accessibility'],
    process: ['Market research', 'Competitive analysis', 'User survey', 'Proto-personas', 'Flow diagrams', 'Wireframes', 'High-fidelity UI', 'Accessibility evaluation'],
    accent: '#1F9072',
    cardBg: '#E5F4EF',
    cardBorder: '#9ECFBC',
    image: 'assets/calmflow-case.png',
    pdf: 'assets/calmflow-case-study.pdf',
    pages: ['assets/calmflow-page-1.jpg'],
    stats: [
      ['18', 'user survey participants'],
      ['$538M', 'forecasted mental health market value by 2030'],
      ['AA', 'manually checked UI contrast']
    ],
    story: [
      'CalmFlow responds to the growing need for simple, accessible, and friendly tools that support mental wellbeing. The project started with mental health market research and an analysis of VOS, BetterMe, and How We Feel.',
      'The process included a user survey, two proto-personas, and flows for key features: meditation, yoga, exercise, and a personal journal. The insights showed a need for a tool without an initial paywall and without content overload.',
      'The UI layer is based on calm Lora/Satoshi typography, an 8-point grid, Auto Layout, and components designed for comfortable tap targets. The design was checked for contrast and accessibility standards.'
    ]
  },
  {
    id: 'cuffka',
    eyebrow: 'Native iOS app · Food & Drink',
    category: 'Native iOS app',
    title: 'Cuffka',
    subtitle: 'Your Ultimate Café Companion — an app for discovering cafés, promotions, menus, and loyalty benefits in one place.',
    year: '2022–2023',
    role: 'Designer, Researcher',
    location: 'Elbląg, Poland',
    what: 'Native Mobile App (iOS)',
    why: 'Portfolio Project',
    tags: ['Market research', 'Competitive analysis', 'Wireframes', 'High-fidelity UI', 'Prototype', 'Accessibility'],
    process: ['Market research', 'Competitive analysis', 'User interview', 'Flow diagrams', 'Wireframes', 'High-fidelity UI', 'Prototype', 'Accessibility evaluation'],
    accent: '#B85C28',
    cardBg: '#FFF2E8',
    cardBorder: '#F0C09A',
    image: 'assets/cuffka-case.png',
    pdf: 'assets/cuffka-case-study.pdf',
    pages: ['assets/cuffka-page-1.jpg'],
    stats: [
      ['43', 'high-fidelity screens'],
      ['2', 'themes: light and dark mode'],
      ['AA', 'manually checked contrast']
    ],
    story: [
      'Cuffka was created for people who enjoy cafés but want to find good drinks, promotions, and loyalty benefits faster without searching through social media.',
      'The process included market research, competitive analysis, a user interview, flow diagrams, wireframes, a high-fidelity design, and a Figma prototype.',
      'The project shows the full product process: from defining the problem to refining the UI and evaluating accessibility.'
    ]
  }
];

const ui = {
  en: {
    nav: { projects: 'Projects', about: 'About', contact: 'Contact' },
    hero: {
      title: 'I design simple, accessible digital products.',
      lead: 'For over **4 years**, I’ve been developing my skills in **UX/UI Design**, focusing on simplicity, clear user flows, and experiences without unnecessary chaos. My **customer-facing experience** helps me understand user frustrations and translate them into more intuitive interfaces.',
      projects: 'View projects',
      contact: 'Contact me',
      profileLabel: 'Profile summary',
    },
    cardCta: 'View case study →',
    projectAria: title => `Open ${title} case study`,
    projectAlt: title => `${title} case study thumbnail`,
    detail: {
      back: '← Back to projects',
      caseStudy: 'Case study',
      previewAlt: title => `${title} case study preview`,
      download: 'Download PDF ↓',
      pageAlt: i => `Case study page ${i + 1}`,
      facts: { where: 'Where', what: 'What', why: 'Why', role: 'Role', category: 'Category', when: 'When' },
      process: 'Project scope',
    },
    projects: { kicker: 'My portfolio', title: 'Selected projects' },
    about: {
      kicker: 'About me',
      title: 'Curiosity, simplicity, and accessibility.',
      body: [
        'I’m an aspiring UX/UI Designer with over **4 years** of interest in designing digital products. I’m especially interested in **simplifying user experiences**, accessibility, and designing interfaces that help people complete everyday tasks faster and without unnecessary frustration.',
        'On a daily basis, I develop my skills in **UX Research**, information architecture, creating user flows, and designing interfaces in **Figma**.',
        'My previous **customer service experience** taught me to listen carefully, notice recurring frustrations, and look at products from the perspective of real user problems and needs.',
      ],
    },
    contact: { kicker: 'Contact', title: 'Let’s talk.' },
  },
  pl: {
    nav: { projects: 'Projekty', about: 'O mnie', contact: 'Kontakt' },
    hero: {
      title: 'Projektuję proste i dostępne produkty cyfrowe.',
      lead: 'Od ponad **4 lat** rozwijam się w **UX/UI Designie**, skupiając się na prostocie, projektowaniu czytelnych flow i doświadczeniach bez zbędnego chaosu. **Doświadczenie w pracy z klientami** pomaga mi lepiej rozumieć frustracje użytkowników i przekładać je na bardziej intuicyjne interfejsy.',
      projects: 'Zobacz projekty',
      contact: 'Napisz do mnie',
      profileLabel: 'Skrót profilu',
    },
    cardCta: 'Zobacz case study →',
    projectAria: title => `Otwórz case study ${title}`,
    projectAlt: title => `Miniatura case study ${title}`,
    detail: {
      back: '← Wróć do projektów',
      caseStudy: 'Case study (w języku angielskim)',
      previewAlt: title => `Podgląd case study ${title}`,
      download: 'Pobierz PDF ↓',
      pageAlt: i => `Strona case study ${i + 1}`,
      facts: { where: 'Gdzie', what: 'Co', why: 'Dlaczego', role: 'Rola', category: 'Kategoria', when: 'Kiedy' },
      process: 'Zakres projektu',
    },
    projects: { kicker: 'Moje portfolio', title: 'Wybrane projekty' },
    about: {
      kicker: 'O mnie',
      title: 'Ciekawość, prostota i dostępność.',
      body: [
        'Jestem początkującym UX/UI Designerem z ponad **4-letnim** zainteresowaniem projektowaniem produktów cyfrowych. Szczególnie interesuje mnie **upraszczanie doświadczeń użytkownika**, dostępność oraz projektowanie interfejsów, które pomagają wykonywać codzienne zadania szybciej i bez zbędnej frustracji.',
        'Na co dzień rozwijam umiejętności w zakresie **UX Researchu**, architektury informacji, tworzenia flow użytkownika oraz projektowania interfejsów w **Figmie**.',
        'Wcześniejsze **doświadczenie w obsłudze klienta** nauczyło mnie uważnie słuchać, zauważać powtarzające się frustracje i patrzeć na produkty z perspektywy realnych problemów oraz potrzeb użytkowników.',
      ],
    },
    contact: { kicker: 'Kontakt', title: 'Porozmawiajmy o współpracy.' },
  },
};

function preventPolishOrphans(value) {
  if (typeof value === 'string') {
    return value.replace(/(^|[\s([{„"'–—-])([AaIiOoUuWwZz]|do|Do|na|Na|od|Od|po|Po|we|We|ze|Ze)\s+/g, '$1$2\u00A0');
  }
  if (Array.isArray(value)) return value.map(preventPolishOrphans);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, typeof item === 'function' ? item : preventPolishOrphans(item)]));
  }
  return value;
}

function RichText({ children }) {
  if (typeof children !== 'string') return children;
  const parts = children.split(/(\*\*.*?\*\*)/g);
  return <>{parts.map((part, index) => part.startsWith('**') && part.endsWith('**')
    ? <mark className="text-highlight" key={index}>{part.slice(2, -2)}</mark>
    : <React.Fragment key={index}>{part}</React.Fragment>
  )}</>;
}

const projectCopy = {
  en: {
    logafit: {
      subtitle: 'Revitalizing wellness — a fitness website redesign focused on simpler navigation, responsiveness, and accessibility.',
      stats: [['59%', 'of users struggled with navigation'], ['30%', 'faster completion of navigation tasks'], ['85%', 'of participants reported higher satisfaction']],
    },
    calmflow: {
      subtitle: 'Finding Balance and Inner Peace — an app supporting mental wellbeing through meditation, yoga, exercise, and journaling.',
      stats: [['18', 'user survey participants'], ['$538M', 'forecasted mental health market value by 2030'], ['AA', 'manually checked UI contrast']],
    },
    cuffka: {
      subtitle: 'Your Ultimate Café Companion — an app for discovering cafés, promotions, menus, and loyalty benefits in one place.',
      stats: [['43', 'high-fidelity screens'], ['2', 'themes: light and dark mode'], ['AA', 'manually checked contrast']],
    },
  },
  pl: {
    logafit: {
      subtitle: 'Revitalizing wellness — modernizacja strony fitness z naciskiem na prostszą nawigację, responsywność i dostępność.',
      stats: [['59%', 'użytkowników miało problem z nawigacją'], ['30%', 'szybsze wykonanie zadań nawigacyjnych'], ['85%', 'badanych zgłosiło większą satysfakcję']],
      what: 'Redesign istniejącej strony internetowej',
      why: 'Realne wdrożenie',
      role: 'Projektant, badacz',
      category: 'Zdrowie i fitness',
      process: ['Strategia redesignu', 'Badania użytkowników', 'Usprawnienia architektury informacji', 'Interfejs high-fidelity', 'Projekt responsywny', 'Ocena dostępności', 'Wyniki i metryki', 'Wnioski z projektu'],
    },
    calmflow: {
      subtitle: 'Finding Balance and Inner Peace — aplikacja wspierająca dobrostan psychiczny przez medytację, jogę, ćwiczenia i dziennik.',
      stats: [['18', 'uczestników ankiety użytkowników'], ['$538M', 'prognozowana wartość rynku mental health do 2030'], ['AA', 'ręcznie sprawdzony kontrast UI']],
      what: 'Natywna aplikacja mobilna na iOS',
      why: 'Projekt portfolio',
      role: 'Projektant, badacz',
      category: 'Dobrostan psychiczny',
      process: ['Research rynku', 'Analiza konkurencji', 'Ankieta użytkowników', 'Proto-persony', 'Diagramy przepływów', 'Wireframe’y', 'Interfejs high-fidelity', 'Ocena dostępności'],
    },
    cuffka: {
      subtitle: 'Your Ultimate Café Companion — aplikacja pomagająca odkrywać kawiarnie, promocje, menu i program lojalnościowy w jednym miejscu.',
      stats: [['43', 'ekrany high-fidelity'], ['2', 'motywy: light i dark mode'], ['AA', 'ręcznie sprawdzony kontrast']],
      what: 'Natywna aplikacja mobilna na iOS',
      why: 'Projekt portfolio',
      role: 'Projektant, badacz',
      category: 'Jedzenie i napoje',
      process: ['Research rynku', 'Analiza konkurencji', 'Wywiad z użytkownikiem', 'Diagramy przepływów', 'Wireframe’y', 'Interfejs high-fidelity', 'Prototyp', 'Ocena dostępności'],
    },
  },
};

const pageThemes = {
  home: {
    glowA: '#DDF76C66',
    glowB: '#9BE7C088',
    top: '#F7FCEB',
    mid: '#EEF8E4',
    bottom: '#F9F4E8',
    grid: '#1835240a',
  },
  logafit: {
    glowA: '#2E86D455',
    glowB: '#B3D4F588',
    top: '#F4FAFF',
    mid: '#EAF4FF',
    bottom: '#F8FCFF',
    grid: '#153D6A0a',
  },
  calmflow: {
    glowA: '#1F907255',
    glowB: '#9ECFBC88',
    top: '#F2FBF7',
    mid: '#E5F4EF',
    bottom: '#F8FCF9',
    grid: '#143C300a',
  },
  cuffka: {
    glowA: '#B85C2855',
    glowB: '#F0C09A88',
    top: '#FFF8F2',
    mid: '#FFF2E8',
    bottom: '#FFFBF7',
    grid: '#6A32150a',
  },
};

function getBgStyle(project) {
  const theme = pageThemes[project?.id || 'home'];
  return {
    '--bg-glow-a': theme.glowA,
    '--bg-glow-b': theme.glowB,
    '--bg-top': theme.top,
    '--bg-mid': theme.mid,
    '--bg-bottom': theme.bottom,
    '--bg-grid': theme.grid,
  };
}

const caseThemes = {
  logafit: {
    accent: '#2E86D4',
    ink: '#12345A',
    line: '#CFE4FA',
    soft: '#EAF4FF',
    border: '#B3D4F5',
    glow: '#8BC7F7',
    muted: '#4F6F8D',
    text: '#243D55',
    strong: '#1E6FAF',
  },
  calmflow: {
    accent: '#1F9072',
    ink: '#143C30',
    line: '#D7EEE5',
    soft: '#E5F4EF',
    border: '#9ECFBC',
    glow: '#9BE7C0',
    muted: '#4A7060',
    text: '#1A3326',
    strong: '#1A6E50',
  },
  cuffka: {
    accent: '#B85C28',
    ink: '#5A2C16',
    line: '#F4D4BA',
    soft: '#FFF2E8',
    border: '#F0C09A',
    glow: '#FFD0A8',
    muted: '#7A5A42',
    text: '#3E2819',
    strong: '#9B4D21',
  },
};

function getCaseStyle(project) {
  const theme = caseThemes[project.id] || caseThemes.calmflow;
  return {
    '--accent': project.accent,
    '--case-accent': theme.accent,
    '--case-ink': theme.ink,
    '--case-line': theme.line,
    '--case-soft': theme.soft,
    '--case-border': theme.border,
    '--case-glow': theme.glow,
    '--case-muted': theme.muted,
    '--case-text': theme.text,
    '--case-strong': theme.strong,
  };
}

function getLocalizedProjects(lang) {
  const localized = projects.map(project => ({ ...project, ...projectCopy[lang][project.id] }));
  return lang === 'pl' ? preventPolishOrphans(localized) : localized;
}

function getInitialLanguage() {
  const saved = window.localStorage.getItem('portfolio-lang');
  if (saved === 'pl' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('pl') ? 'pl' : 'en';
}

function getInitialHash() {
  const hash = window.location.hash;
  const pageSections = ['#projects', '#about', '#contact'];
  if (pageSections.includes(hash)) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
    return '';
  }
  return hash;
}

function useHashProject(projectList) {
  const [hash, setHash] = useState(getInitialHash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const id = hash.startsWith('#project-') ? hash.replace('#project-', '') : null;
  return { hash, selectedProject: projectList.find(project => project.id === id) || null };
}

function NavLink({ section, activeSection, onActivate, children }) {
  const isActive = activeSection === section;
  return <a className={isActive ? 'active' : ''} href={`./#${section}`} aria-current={isActive ? 'page' : undefined} onClick={() => onActivate(section)}>{children}</a>;
}

const flags = {
  pl: <span className="flag flag--pl" aria-hidden="true" />,
  en: <span className="flag flag--en" aria-hidden="true" />,
};

function LanguageSwitch({ lang, setLang }) {
  const nextLang = lang === 'pl' ? 'en' : 'pl';
  const label = nextLang.toUpperCase();

  return <button className="language-switch" type="button" onClick={() => setLang(nextLang)} aria-label={`Switch language to ${label}`}>
    {flags[nextLang]}
    <span>{label}</span>
  </button>;
}

function Nav({ lang, setLang, t }) {
  const [activeSection, setActiveSection] = useState('top');
  const [brandPulse, setBrandPulse] = useState(false);
  const activeLockUntil = useRef(0);

  useEffect(() => {
    const sectionIds = ['top', 'projects', 'about', 'contact'];
    const updateActiveSection = () => {
      if (Date.now() < activeLockUntil.current) return;
      const doc = document.documentElement;
      const y = window.scrollY;
      const viewport = window.innerHeight;
      const projects = document.getElementById('projects');
      const about = document.getElementById('about');
      const contact = document.getElementById('contact');
      const isNearBottom = viewport + y >= doc.scrollHeight - 24;

      if (isNearBottom) {
        setActiveSection('contact');
        return;
      }

      if (contact && y + viewport * 0.72 >= contact.offsetTop) {
        setActiveSection('contact');
        return;
      }

      if (about && y + viewport * 0.46 >= about.offsetTop) {
        setActiveSection('about');
        return;
      }

      if (projects && y + viewport * 0.46 >= projects.offsetTop) {
        setActiveSection('projects');
        return;
      }

      setActiveSection('top');
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  const handleActivate = section => {
    activeLockUntil.current = Date.now() + 1200;
    setActiveSection(section);
  };

  const handleBrandClick = event => {
    activeLockUntil.current = Date.now() + 700;
    if (!window.location.hash.startsWith('#project-')) {
      event.preventDefault();
      window.history.replaceState(null, '', './');
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      window.scrollTo({ top: Math.max(0, document.getElementById('top')?.offsetTop - navHeight - 20), behavior: 'smooth' });
      setActiveSection('top');
      setBrandPulse(true);
      window.setTimeout(() => setBrandPulse(false), 520);
    }
  };

  return <header className="nav">
    <a className={`brand${brandPulse ? ' brand--pulse' : ''}`} href="./#top" aria-label="Jakub Sobiecki home" onClick={handleBrandClick}>
      {Array.from('Jakub Sobiecki').map((char, index) => <span
        className="brand-letter"
        style={{ '--i': index }}
        aria-hidden="true"
        key={`${char}-${index}`}
      >{char === ' ' ? '\u00A0' : char}</span>)}
    </a>
    <nav aria-label="Main navigation">
      <NavLink section="projects" activeSection={activeSection} onActivate={handleActivate}>{t.nav.projects}</NavLink>
      <NavLink section="about" activeSection={activeSection} onActivate={handleActivate}>{t.nav.about}</NavLink>
      <NavLink section="contact" activeSection={activeSection} onActivate={handleActivate}>{t.nav.contact}</NavLink>
      <LanguageSwitch lang={lang} setLang={setLang} />
    </nav>
  </header>;
}

function Hero({ t, lang }) {
  return <section className="hero" id="top">
    <div className="shape shape-a" />
    <div className="shape shape-b" />
    <div className="hero-copy">
      <p className="kicker">Junior UX/UI Designer</p>
      <h1>{t.hero.title}</h1>
      <p className="lead hero-lead">
        <span className="intro-sticker">{lang === 'pl' ? 'Cześć, jestem Jakub' : 'Hi, I’m Jakub'}</span>
        <br className="intro-break" />
        <RichText>{t.hero.lead}</RichText>
      </p>
      <div className="hero-actions">
        <a className="btn primary" href="#projects">{t.hero.projects}</a>
        <a className="btn ghost" href="mailto:mail@jakubsobiecki.pl">{t.hero.contact}</a>
      </div>
    </div>
    <div className="hero-card" aria-label={t.hero.profileLabel}>
      <div className="orb one" />
      <div className="orb two" />
      <img className="hero-photo" src="assets/hero-photo.jpg" alt="Jakub Sobiecki" />
      <div className="hero-signature">
        <span>Jakub Sobiecki</span>
        <strong>Junior UX/UI Designer</strong>
      </div>
      <div className="mini-grid">
        <span>Research</span><span>Flows</span><span>UI</span><span>Accessibility</span>
      </div>
    </div>
  </section>;
}

function ProjectCard({ project, index, t }) {
  return <a className="project-card" href={`#project-${project.id}`} style={{'--accent': project.accent, '--card-bg': project.cardBg, '--card-border': project.cardBorder}} aria-label={t.projectAria(project.title)}>
    <div className="project-thumb">
      <img src={project.image} alt={t.projectAlt(project.title)} loading="lazy" />
    </div>
    <div className="project-content">
      <div className="project-topline">
        <span className="project-num">0{index + 1}</span>
        <span className="project-cat">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-teaser">{project.subtitle}</p>
      <div className="tags">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
      <span className="card-cta">{t.cardCta}</span>
    </div>
  </a>;
}

function Donut({ pct, label }) {
  const r = 38, c = 2 * Math.PI * r, dash = (pct / 100) * c;
  return (
    <div className="lf-donut">
      <svg viewBox="0 0 100 100" width="130" height="130">
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--case-line,#D5F0E8)" strokeWidth="11"/>
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--case-accent,#3FBFA0)" strokeWidth="11"
          strokeDasharray={`${dash} ${c - dash}`} strokeDashoffset={c * 0.25} strokeLinecap="round"/>
        <text x="50" y="47" textAnchor="middle" fontSize="18" fontWeight="900" fill="var(--case-ink,#0E2A1E)">{pct}%</text>
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
          {['Home','About','Classes','Schedule','Pool','Contact','News','Gallery'].map(i =>
            <div key={i} className="lf-arch-item lf-arch-item--before">{i}</div>)}
        </div>
        <div className="lf-arch-arrow">→</div>
        <div className="lf-arch-col">
          <div className="lf-arch-label lf-arch-label--after">After</div>
          {['Home','Classes & Schedule','About','Contact'].map(i =>
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
          ['Gradient buttons', 'linear-gradient(135deg,var(--case-accent),var(--case-strong))'],
          ['Gradient cards',   'linear-gradient(135deg,var(--case-soft),var(--case-accent))'],
          ['Text on colors',   'linear-gradient(135deg,var(--case-ink),var(--case-accent))'],
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

function ProjectDetail({ project, t }) {
  const hasWebCaseStudy = false;
  const facts = [
    [t.detail.facts.where, project.location],
    [t.detail.facts.what, project.what],
    [t.detail.facts.why, project.why],
    [t.detail.facts.role, project.role],
    [t.detail.facts.category, project.category],
    [t.detail.facts.when, project.year],
  ];
  return <main className="detail-page" style={getCaseStyle(project)}>
    <a className="back-link" href="./#projects">{t.detail.back}</a>
    <section className="detail-hero">
      <div>
        <p className="kicker">{t.detail.caseStudy}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.subtitle}</p>
        <div className="detail-facts detail-meta">
          {facts.map(([label, value]) => <div className="detail-fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </div>
      </div>
      <div className="detail-preview">
        <img src={project.image} alt={t.detail.previewAlt(project.title)} />
      </div>
    </section>
    <section className="detail-body">
      <div className="detail-process" aria-label={t.detail.process}>
        <span className="pdf-label">{t.detail.process}</span>
        <div>{project.process.map(item => <span key={item}>{item}</span>)}</div>
      </div>
      <div className="stats">{project.stats.map(([num, label]) => <div className="stat" key={num + label}><strong>{num}</strong><span>{label}</span></div>)}</div>
      <div className="pdf-section">
        <div className="pdf-header">
          <span className="pdf-label">{t.detail.caseStudy}</span>
          <a className="text-link" href={project.pdf} target="_blank" rel="noopener noreferrer">{t.detail.download}</a>
        </div>
        {hasWebCaseStudy
          ? <LogafitCaseStudy />
          : <div className="pdf-viewer">{project.pages.map((src, i) => <img key={i} src={src} alt={t.detail.pageAlt(i)} className="pdf-page" loading="lazy" />)}</div>
        }
      </div>
    </section>
  </main>;
}

function Projects({ projects, t }) {
  return <section className="projects" id="projects">
    <div className="section-head">
      <p className="kicker">{t.projects.kicker}</p>
      <h2>{t.projects.title}</h2>

    </div>
    <div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} t={t} />)}</div>
  </section>;
}

function About({ t }) {
  return <section className="about" id="about">
    <div>
      <p className="kicker">{t.about.kicker}</p>
      <h2>{t.about.title}</h2>
    </div>
    <div className="about-copy">
      {t.about.body.map(paragraph => <p key={paragraph}><RichText>{paragraph}</RichText></p>)}
    </div>
  </section>;
}

function Availability({ lang }) {
  const isPl = lang === 'pl';
  return <section className="availability" id="contact" aria-label={isPl ? 'Dostępność zawodowa' : 'Job availability'}>
    <p className="availability-label">{isPl ? 'Aktualnie' : 'Currently'}</p>
    <h2>{isPl ? 'Szukam roli Junior UX/UI Designer.' : 'Looking for a Junior UX/UI Designer role.'}</h2>
    <p>{isPl ? 'Interesuje mnie full-time, najlepiej hybrydowo lub zdalnie — w zespole, w którym mogę rozwijać research, flow i dostępne interfejsy.' : 'I’m interested in full-time work, ideally hybrid or remote — in a team where I can grow in research, user flows, and accessible interfaces.'}</p>
    <div className="availability-tags" aria-hidden="true">
      <span>Full-time</span>
      <span>Junior UX/UI</span>
      <span>Hybrid / Remote</span>
    </div>
  </section>;
}

function Contact({ t }) {
  return <div className="contact-anchor">
    <footer className="contact">
      <p className="kicker">{t.contact.kicker}</p>
      <h2>{t.contact.title}</h2>
      <div className="contact-links">
        <a className="contact-link contact-link--direct" href="mailto:mail@jakubsobiecki.pl" aria-label="Email">
          <span className="contact-icon contact-icon--brand" aria-hidden="true">@</span>
          <span className="contact-text">mail@jakubsobiecki.pl</span>
        </a>
        <a className="contact-link contact-link--direct" href="tel:+48577810769" aria-label="Phone">
          <span className="contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M7.2 4.8l2.1 4.8-2 1.2c1.1 2.3 2.8 4 5.1 5.1l1.2-2 4.8 2.1-1.1 3.1c-.3.8-1.1 1.3-2 1.1C9 19.2 4.8 15 3.8 8.7c-.1-.9.3-1.7 1.1-2l2.3-1.9z" />
            </svg>
          </span>
          <span className="contact-text">+48 577 810 769</span>
        </a>
        <a className="contact-link contact-link--social" href="https://www.linkedin.com/in/jakubsobiecki/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <span className="contact-icon contact-icon--brand" aria-hidden="true">in</span>
          <span className="contact-text">LinkedIn</span>
        </a>
        <a className="contact-link contact-link--social" href="https://www.behance.net/jakubsobiecki" target="_blank" rel="noopener noreferrer" aria-label="Behance">
          <span className="contact-icon contact-icon--brand" aria-hidden="true">Be</span>
          <span className="contact-text">Behance</span>
        </a>
      </div>
    </footer>
  </div>;
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 260;
      const contactVisible = document.querySelector('.contact')?.getBoundingClientRect().top < window.innerHeight - 80;
      setVisible(window.scrollY > 520 && !nearBottom && !contactVisible);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <button
    className={`scroll-top${visible ? ' visible' : ''}`}
    type="button"
    aria-label="Scroll to top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  ><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 19V6" />
    <path d="M6 12l6-6 6 6" />
  </svg></button>;
}

function HomePage({ projects, t, lang }) {
  return <>
    <div className="page-surface">
      <main>
        <Hero t={t} lang={lang} />
        <Projects projects={projects} t={t} />
        <About t={t} />
        <Availability lang={lang} />
      </main>
    </div>
    <Contact t={t} />
  </>;
}

function App() {
  const [lang, setLang] = useState(getInitialLanguage);
  const t = lang === 'pl' ? preventPolishOrphans(ui.pl) : ui.en;
  const localizedProjects = getLocalizedProjects(lang);
  const { hash, selectedProject } = useHashProject(localizedProjects);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (selectedProject) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const section = hash.replace('#', '') || 'top';
    if (section === 'top') {
      window.requestAnimationFrame(() => {
        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        window.scrollTo({ top: Math.max(0, document.getElementById('top')?.offsetTop - navHeight - 20), behavior: 'auto' });
      });
      return;
    }

    const element = document.getElementById(section);
    if (!element) return;

    window.requestAnimationFrame(() => {
      const offset = section === 'contact' ? 26 : 96;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  }, [hash, selectedProject?.id]);

  return <>
    <div className="site-bg" style={getBgStyle(selectedProject)} aria-hidden="true" />
    <Nav lang={lang} setLang={setLang} t={t} />
    {selectedProject ? <ProjectDetail project={selectedProject} t={t} /> : <HomePage projects={localizedProjects} t={t} lang={lang} />}
    <ScrollTopButton />
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
