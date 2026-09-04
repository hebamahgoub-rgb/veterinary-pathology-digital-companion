import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface SystemicDeepPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'sysm-overview',
    title: "1. Overview & Thermal Dimorphism of Systemic Mycoses",
    shortTitle: "1. Overview",
    category: "Mycotic Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Systemic &amp; Deep Mycoses</h1>
      <div class="hero-subtitle">Thermal dimorphic pathogens, respiratory portals, and disseminated granulomas</div>
      <p class="hero-body">
        Systemic and deep mycoses are primarily caused by thermally dimorphic fungi that grow as saprophytic molds in the environment and transform into pathogenic yeast or spherule forms at mammalian body temperature. Infection typically follows inhalation of airborne conidia into the respiratory tract, leading to primary pulmonary lesions followed by lymphohaematogenous dissemination to bone, eyes, skin, central nervous system, and abdominal viscera.
      </p>
    </header>

    <!-- 2. QUICK JUMP INDEX -->
    <nav class="organism-nav" aria-label="Organism Index">
      <h2>Major Pathogens Covered</h2>
      <div class="organism-pills">
        <a href="#blastomyces" class="pill">Blastomyces dermatitidis</a>
        <a href="#coccidioides" class="pill">Coccidioides immitis / posadasii</a>
        <a href="#histoplasma" class="pill">Histoplasma capsulatum</a>
        <a href="#cryptococcus" class="pill">Cryptococcus neoformans / gattii</a>
      </div>
    </nav>

    <!-- 3. DISEASE UNITS -->
    <section class="section-block" aria-labelledby="pathogens-heading">
      <h2 id="pathogens-heading">Pathological Profiles</h2>

      <!-- UNIT 1: BLASTOMYCES -->`,
  },
  {
    id: 'sysm-blastomyces',
    title: "2. Blastomycosis (Blastomyces dermatitidis)",
    shortTitle: "2. Blastomycosis",
    category: "Mycotic Diseases",
    html: `<article id="blastomyces" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Blastomycosis</h3>
          <div class="disease-subtitle"><em>Blastomyces dermatitidis</em> — Pyogranulomatous pneumonitis and systemic dissemination</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Blastomyces dermatitidis</em> (dimorphic fungus associated with acidic soils near waterways; dogs highly susceptible).</li>
              <li>Lungs, regional lymph nodes, eyes, skin, skeletal system, and CNS.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation of conidia into alveoli; phase transition to broad-based budding yeast form at 37°C.</li>
              <li>Yeast cell wall BAD-1 surface protein inhibits TNF-alpha, facilitating pulmonary colonization and systemic spread.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Firm grey-to-white nodular pulmonary consolidation ("snowstorm" pattern), endophthalmitis, osteomyelitis.</li>
              <li><strong>Micro:</strong> Pyogranulomatous inflammation containing thick-walled, spherical yeasts (8–15 µm) showing single <strong>broad-based budding</strong>.</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1mLIikgqlni6-FVdOd9JWT6JuXVjqPORf" alt="Canine blastomycosis with broad-based budding yeast" loading="lazy" decoding="async">
          <figcaption>Canine blastomycosis characterized by ulcerative cutaneous nodules. Inset: Large yeast forms of Blastomyces dermatitidis exhibiting broad-based budding within pyogranulomatous inflammation.</figcaption>
        </figure>

      <!-- UNIT 2: COCCIDIOIDES -->`,
  },
  {
    id: 'sysm-coccidioides',
    title: "3. Coccidioidomycosis (Valley Fever)",
    shortTitle: "3. Coccidioidomycosis",
    category: "Mycotic Diseases",
    html: `<article id="coccidioides" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Coccidioidomycosis (Valley Fever)</h3>
          <div class="disease-subtitle"><em>Coccidioides immitis</em> &amp; <em>C. posadasii</em> — Spherules, endospores, and necrotising granulomas</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Coccidioides immitis</em> &amp; <em>C. posadasii</em> (soil saprophytes in arid alkaline desert regions).</li>
              <li>Lungs, mediastinal lymph nodes, appendicular skeleton, pericardium, and systemic organs.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation of windborne arthroconidia into terminal bronchioles.</li>
              <li>Arthroconidia enlarge into thick-walled spherules that undergo endosporulation; rupture releases hundreds of endospores driving intense inflammation.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Multifocal firm granulomatous pulmonary nodules, hilar lymphadenomegaly, osteolytic bone lesions.</li>
              <li><strong>Micro:</strong> Granulomatous-to-pyogranulomatous nodules containing large double-contoured <strong>spherules (20–80 µm) filled with small endospores (2–5 µm)</strong>.</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1gXNoQpQzNuhjAgL6n15ZKE-gzL-SGT76" alt="Canine coccidioidomycosis with endosporulating spherules" loading="lazy" decoding="async">
          <figcaption>Canine coccidioidomycosis presenting as a chronic draining cutaneous lesion. Inset: Large spherules of Coccidioides immitis filled with endospores within granulomatous tissue.</figcaption>
        </figure>

      <!-- UNIT 3: HISTOPLASMA -->`,
  },
  {
    id: 'sysm-histoplasma',
    title: "4. Histoplasmosis (Histoplasma capsulatum)",
    shortTitle: "4. Histoplasmosis",
    category: "Mycotic Diseases",
    html: `<article id="histoplasma" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Histoplasmosis</h3>
          <div class="disease-subtitle"><em>Histoplasma capsulatum</em> — Intracellular macrophage parasitism and gastrointestinal pathology</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Histoplasma capsulatum</em> var. <em>capsulatum</em> (organically enriched soils, bird/bat guano; dogs and cats).</li>
              <li>Pulmonary tree, reticuloendothelial organs (liver, spleen, bone marrow), and gastrointestinal tract.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation or ingestion of microconidia; phagocytosis by alveolar or intestinal macrophages.</li>
              <li>Intracellular replication inside phagolysosomes leads to lymphohaematogenous seeding throughout the monocyte-macrophage system.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Hepatosplenomegaly, diffuse mesenteric lymphadenomegaly, thickened, corrugated intestinal mucosa (severe diarrhea in dogs).</li>
              <li><strong>Micro:</strong> Sheets of macrophages packed with small, oval, intracellular <strong>yeast bodies (2–4 µm) with thin cell walls and a clear halo</strong>.</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1cvnb0VOkN-7Rq3HJrtQReq7UfQQ-PtPH" alt="Systemic canine histoplasmosis with intracellular yeast" loading="lazy" decoding="async">
          <figcaption>Systemic histoplasmosis in a dog with lymphadenopathy and hepatosplenomegaly. Inset: Small intracellular yeast of Histoplasma capsulatum densely packed within macrophages.</figcaption>
        </figure>

      <!-- UNIT 4: CRYPTOCOCCUS -->`,
  },
  {
    id: 'sysm-cryptococcus-diagnostic',
    title: "5. Cryptococcosis & Diagnostic Approach Key",
    shortTitle: "5. Cryptococcus & Key",
    category: "Mycotic Diseases",
    html: `<article id="cryptococcus" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Cryptococcosis</h3>
          <div class="disease-subtitle"><em>Cryptococcus neoformans</em> &amp; <em>C. gattii</em> — Mucinous capsule, nasal granulomas, and "soap bubble" encephalitis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Cryptococcus neoformans</em> (pigeon droppings) &amp; <em>C. gattii</em> (eucalyptus/trees; highly prevalent in felines).</li>
              <li>Nasal cavity, paranasal sinuses, cribriform plate, central nervous system, eyes, and skin.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation of unencapsulated basidiospores into nasal passages or lower airways.</li>
              <li>Production of a thick glucuronoxylomannan (GXM) polysaccharide capsule suppresses phagocytosis, allowing tissue invasion and neural spread.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Gelatinous mass in nasal cavity ("Roman nose" in cats), non-healing ulcerated skin nodules, cystic brain lesions.</li>
              <li><strong>Micro:</strong> Masses of budding yeast (4–10 µm) surrounded by a <strong>clear halo-like mucopolysaccharide capsule</strong>; minimal-to-granulomatous host reaction ("soap bubble" appearance).</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1VEcj8O8W4GEu7PyvqkgzN9Vugk0SXun-" alt="Feline cryptococcosis with encapsulated yeast" loading="lazy" decoding="async">
          <figcaption>Feline cryptococcosis presenting as a gelatinous proliferative nasal lesion. Inset: Thickly encapsulated yeast of Cryptococcus neoformans producing the characteristic “soap-bubble” appearance in granulomatous tissue.</figcaption>
        </figure>

    </section>

    <!-- 4. DIAGNOSTIC APPROACH PANEL -->
    <section class="section-block">

<section class="section-block">
<aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Systemic Diagnostic Key:</strong> Morphological differentiation is critical. Differentiate <em>Blastomyces</em> (broad-based budding yeast) from <em>Histoplasma</em> (small intracellular yeast in macrophages), <em>Coccidioides</em> (large endosporulating spherules), and <em>Cryptococcus</em> (narrow-based budding yeast with a prominent mucicarmine-positive capsule). Use <strong>PAS</strong>, <strong>GMS</strong>, or <strong>Mucicarmine</strong> stains for definitive histopathological identification.
      </aside>
</section>`,
  },
];

export const SystemicDeepPage: React.FC<SystemicDeepPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Systemic & Deep Mycoses"
      subtitle="Blastomycosis, histoplasmosis, coccidioidomycosis, and cryptococcosis"
      sectionCode="MYC-03"
      category="Mycotic Diseases"
      topicId="mycotic-diseases"
      lessonId="systemic-deep-mycoses"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "subcutaneous-mycoses", "title": "Subcutaneous Mycoses"}}
      nextLesson={{"id": "opportunistic-mycoses", "title": "Opportunistic Mycoses"}}
    />
  );
};
