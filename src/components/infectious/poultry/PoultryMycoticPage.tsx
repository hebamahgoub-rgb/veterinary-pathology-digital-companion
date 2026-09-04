import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface PoultryMycoticPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'pmyco-overview',
    title: "1. Overview & Principles of Avian Mycology and Mycotoxicology",
    shortTitle: "1. Overview",
    category: "Poultry Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Mycotic Diseases &amp; Mycotoxicoses of Poultry</h1>
      <div class="hero-subtitle">Respiratory aspergillosis, digestive candidiasis, and feed-borne fungal toxins</div>
      <p class="hero-body">
        Poultry fungal disorders include true mycotic infections and non-infectious mycotoxicoses. Aspergillosis primarily targets the respiratory system, whereas candidiasis chiefly affects the upper digestive tract. Mycotoxicoses result from ingestion of fungal toxins in contaminated feed and commonly affect the liver, kidneys, gastrointestinal tract, immune system, and production performance.
      </p>
    </header>

    <nav class="organism-nav" aria-label="Condition Index">
      <h2>Major Conditions Covered</h2>
      <div class="organism-pills">
        <a href="#aspergillosis" class="pill">Aspergillosis</a>
        <a href="#candidiasis" class="pill">Candidiasis (Thrush)</a>
        <a href="#aflatoxicosis" class="pill">Aflatoxicosis</a>
        <a href="#ochratoxicosis" class="pill">Ochratoxicosis</a>
        <a href="#trichothecenes" class="pill">Trichothecenes</a>
        <a href="#fumonisins" class="pill">Fumonisins</a>
        <a href="#zearalenone" class="pill">Zearalenone</a>
      </div>
    </nav>`,
  },
  {
    id: 'pmyco-aspergillosis',
    title: "2. Avian Aspergillosis (Brooder Pneumonia)",
    shortTitle: "2. Aspergillosis",
    category: "Poultry Diseases",
    html: `<article id="aspergillosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Avian Aspergillosis</h3>
          <div class="disease-subtitle"><em>Aspergillus</em> spp. — Brooder pneumonia and granulomatous airsacculitis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Most commonly <em>Aspergillus fumigatus</em>; <em>A. flavus</em> and other species may occur.</li>
              <li>Primarily lungs and air sacs; brain, eyes, and other organs may be involved in disseminated disease.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation of large numbers of airborne conidia from contaminated litter, feed, hatchery material, or dust.</li>
              <li>Conidia germinate in respiratory tissues and induce necrotising heterophilic inflammation that progresses to granuloma formation.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Multifocal white-to-yellow nodules in lungs and air sacs; advanced lesions may coalesce and fungal growth may appear on air-sac surfaces.</li>
              <li><strong>Micro:</strong> Necrotising granulomas containing septate, branching fungal hyphae, surrounded by heterophils, macrophages, multinucleated giant cells, and fibrosis.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1N9dpsbZcUWLZbGL0J1yc1efqvEyDCA2p"
                 alt="Aspergillosis"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Aspergillosis</span>
              Aspergillosis causing granulomatous pneumonia and airsacculitis, with respiratory distress and airborne transmission of fungal spores.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'pmyco-candidiasis',
    title: "3. Avian Candidiasis (Crop Thrush / Sour Crop)",
    shortTitle: "3. Candidiasis (Thrush)",
    category: "Poultry Diseases",
    html: `<article id="candidiasis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Avian Candidiasis (Thrush)</h3>
          <div class="disease-subtitle"><em>Candida</em> spp., mainly <em>C. albicans</em> — Crop mycosis and upper digestive candidiasis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Candida</em> spp. are normal gastrointestinal commensals; <em>C. albicans</em> is the most frequent cause of disease.</li>
              <li>Crop most commonly affected; oral cavity and esophagus may also develop lesions.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Opportunistic overgrowth follows disruption of normal flora, prolonged antimicrobial use, poor sanitation, malnutrition, or other predisposing factors.</li>
              <li>Yeasts and pseudohyphae invade superficial epithelium, producing epithelial degeneration, hyperplasia, necrosis, and pseudomembrane formation.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Thickened, roughened crop mucosa with whitish raised plaques or pseudomembranes; shallow ulcers and epithelial sloughing may occur.</li>
              <li><strong>Micro:</strong> Epithelial hyperplasia and ballooning degeneration with pseudohyphae and blastospores within affected mucosa; PAS or GMS highlights organisms.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1mgQEEWJm1ypJWAkq1obLvrEwalphGaC6"
                 alt="Candidiasis"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Candidiasis</span>
              Candidiasis producing crop mycosis with mucosal plaques, associated with digestive stasis and environmental or opportunistic transmission.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'pmyco-aflatoxicosis',
    title: "4. Hepatotoxic Mycotoxicoses (Aflatoxicosis)",
    shortTitle: "4. Aflatoxicosis",
    category: "Poultry Diseases",
    html: `<article id="aflatoxicosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Aflatoxicosis</h3>
          <div class="disease-subtitle">Aflatoxins — Predominantly hepatotoxic and immunosuppressive mycotoxicosis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Target Organs</h4>
            <ul>
              <li>Aflatoxins, especially aflatoxin B1, are produced by toxigenic <em>Aspergillus</em> spp. in contaminated feed ingredients.</li>
              <li>Liver is the principal target; hematopoietic, immune, digestive, and reproductive performance may also be impaired.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Reactive hepatic metabolites damage macromolecules and impair protein synthesis and normal hepatocellular metabolism.</li>
              <li>Severity depends on dose, exposure duration, bird species, age, nutritional status, and concurrent disease.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Enlarged yellow or congested liver, hemorrhages, and poor body condition; chronic cases may develop ascites or hydropericardium.</li>
              <li><strong>Micro:</strong> Hepatic lipidosis, hepatocellular degeneration/necrosis, biliary ductular reaction; chronic exposure may produce fibrosis and regenerative change.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Tk1Oszh4X0w05cO3dLNli1siCSpITo7y"
                 alt="Aflatoxicosis"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Aflatoxicosis</span>
              Aflatoxicosis producing hepatic damage and immunosuppression due to ingestion of aflatoxin-contaminated grains.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'pmyco-ochratoxicosis',
    title: "5. Nephrotoxic Mycotoxicoses (Ochratoxicosis)",
    shortTitle: "5. Ochratoxicosis",
    category: "Poultry Diseases",
    html: `<article id="ochratoxicosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Ochratoxicosis</h3>
          <div class="disease-subtitle">Ochratoxin A — Predominantly nephrotoxic mycotoxicosis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Target Organs</h4>
            <ul>
              <li>Ochratoxin A is produced by several toxigenic <em>Aspergillus</em> and <em>Penicillium</em> species in grains and feeds.</li>
              <li>Kidneys are the major target; liver, immune system, and bone marrow may also be affected.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Interferes with cellular protein synthesis and energy metabolism, producing marked renal tubular injury.</li>
              <li>Renal dysfunction may reduce urate excretion and, in severe cases, contribute to secondary urate deposition.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Enlarged pale kidneys; dehydration and poor condition may be present. Visceral urate deposits may occur in severe renal failure.</li>
              <li><strong>Micro:</strong> Degeneration and necrosis of renal tubular epithelium with tubular dilation and interstitial change.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1vt9J3IXjQua8_vgY8pZwrHWm1i2QeJba"
                 alt="Ochratoxicosis"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Ochratoxicosis</span>
              Ochratoxicosis causing nephrotoxicity and growth depression following consumption of contaminated feed.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'pmyco-fusariotoxins',
    title: "6. Fusariotoxins (Trichothecenes, Fumonisins & Zearalenone)",
    shortTitle: "6. Fusariotoxins",
    category: "Poultry Diseases",
    html: `<article id="trichothecenes" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Trichothecene Mycotoxicoses</h3>
          <div class="disease-subtitle">T-2 toxin, HT-2 toxin, DON and related <em>Fusarium</em> toxins — Mucosal injury and feed refusal</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Target Organs</h4>
            <ul>
              <li>Trichothecenes are produced mainly by toxigenic <em>Fusarium</em> species in cereal grains.</li>
              <li>Oral and gastrointestinal mucosa, lymphoid tissues, and other rapidly dividing cell populations are particularly susceptible.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Potent inhibition of protein synthesis causes epithelial injury, reduced feed intake, impaired growth, and immunologic effects.</li>
              <li>T-2 toxin and related compounds may produce direct contact injury of the oral cavity and upper digestive tract.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Oral erosions, ulcers or crusts on palate/tongue; gastrointestinal irritation and reduced feed consumption.</li>
              <li><strong>Micro:</strong> Epithelial degeneration and necrosis with variable lymphoid depletion and intestinal mucosal injury.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/19CAOE5HoI94MoNY_8sK9PhC8-FF5RNFn"
                 alt="Trichothecene (T-2) Toxicosis"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Trichothecene (T-2) Toxicosis</span>
              T-2 toxicosis producing severe mucosal necrosis and immunosuppression due to ingestion of trichothecene-contaminated feed.
            </figcaption>
          </figure>
        </div>

      </article>

<article id="fumonisins" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Fumonisin Mycotoxicosis</h3>
          <div class="disease-subtitle"><em>Fusarium</em>-derived fumonisins — Production loss with hepatic and intestinal effects</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Target Organs</h4>
            <ul>
              <li>Fumonisins, especially fumonisin B1, commonly contaminate maize and maize-based feeds.</li>
              <li>Liver and intestinal tract are important targets; immune and production responses may also be altered.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Disruption of sphingolipid metabolism alters cell membrane function and signaling.</li>
              <li>Effects are often subclinical but may reduce growth and feed efficiency, especially with combined mycotoxin exposure.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathological Expression</h4>
            <ul>
              <li><strong>Gross:</strong> Lesions may be subtle; hepatomegaly and poor growth can occur at higher exposures.</li>
              <li><strong>Micro:</strong> Hepatocellular degeneration and other nonspecific toxic changes may occur; diagnosis relies on feed toxin analysis rather than lesions alone.</li>
            </ul>
          </div>
        </div>
      </article>

<article id="zearalenone" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Zearalenone Exposure</h3>
          <div class="disease-subtitle"><em>Fusarium</em>-derived estrogenic mycotoxin — Generally lower sensitivity in poultry</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Target Systems</h4>
            <ul>
              <li>Zearalenone is an estrogenic mycotoxin produced by several <em>Fusarium</em> species in cereal grains.</li>
              <li>Reproductive and endocrine systems are the principal biological targets.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Binds estrogen receptors and alters estrogen-responsive tissues.</li>
              <li>Poultry are relatively less sensitive than several mammalian species, so natural disease may be subtle or absent at modest contamination levels.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathological Expression</h4>
            <ul>
              <li><strong>Gross/Micro:</strong> No single characteristic poultry lesion pattern reliably establishes exposure.</li>
              <li>Interpret reproductive or production changes together with feed analysis and possible co-contamination by other mycotoxins.</li>
            </ul>
          </div>
        </div>
      </article>`,
  },
  {
    id: 'pmyco-gallery-diagnostic',
    title: "7. Additional Illustrated Entities & Diagnostic Key",
    shortTitle: "7. Gallery & Key",
    category: "Poultry Diseases",
    html: `<section class="section-block" aria-labelledby="additional-illustrations-heading">
      <div class="illustration-atlas">
        <h2 id="additional-illustrations-heading">Additional Illustrated Mycotic / Mycotoxin Entities</h2>
        <p style="margin-bottom: 1.25rem;">
          These supplied illustrations are included for visual study while the existing pathological profiles above remain unchanged.
        </p>

        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1t84SUX5VFt7BYSwFamPvm6iQhtPhAKH3"
                 alt="Favus (Avian Ringworm)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Favus (Avian Ringworm)</span>
              Favus causing dermatophytosis of the skin and comb, spread through contact and contaminated surfaces.
            </figcaption>
          </figure>

          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1B-C1TUyp7BegMXEuUi7kJ8xYdvR030-8"
                 alt="Ergotism"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Ergotism</span>
              Ergotism causing peripheral vasoconstriction and gangrene following ingestion of ergot-contaminated feed.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section-block">
      <aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Diagnostic Key:</strong> Demonstrate fungal invasion in infectious mycoses by histology and special stains such as <strong>PAS</strong> or <strong>GMS</strong>, supported by culture when appropriate. For candidiasis, culture alone is insufficient because <em>Candida</em> may be part of normal gastrointestinal flora. Mycotoxicoses are confirmed by linking compatible flock history and target-organ lesions with detection and quantification of the relevant toxin in feed; visible mold alone does not prove mycotoxicosis.
      </aside>`,
  },
];

export const PoultryMycoticPage: React.FC<PoultryMycoticPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Mycotic Diseases & Mycotoxicoses of Poultry"
      subtitle="Aspergillosis, candidiasis, aflatoxicosis, and ochratoxicosis"
      sectionCode="PLT-03"
      category="Poultry Diseases"
      topicId="poultry-pathology"
      lessonId="mycotic-diseases-poultry"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "viral-diseases-poultry", "title": "Viral Diseases of Poultry"}}
      nextLesson={{"id": "parasitic-diseases-poultry", "title": "Parasitic Diseases of Poultry"}}
    />
  );
};
