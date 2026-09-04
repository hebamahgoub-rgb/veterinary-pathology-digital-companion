import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface SuperficialCutaneousPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'derm-overview',
    title: "1. Overview & Keratinophilic Fungal Pathogenesis",
    shortTitle: "1. Overview",
    category: "Mycotic Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Superficial &amp; Cutaneous Mycoses</h1>
      <div class="hero-subtitle">Keratinophilic dermatophytes, yeasts, and epidermal surface colonizers</div>
      <p class="hero-body">
        Superficial and cutaneous mycoses are confined to the non-viable keratinized layers of the skin, hair shafts, and claws. These fungal agents utilize keratinases to colonize stratum corneum and follicular epithelium, evoking variable host responses ranging from mild hyperkeratosis to severe suppurative folliculitis and kerion formation.
      </p>
    </header>

    <!-- 2. QUICK JUMP INDEX -->
    <nav class="organism-nav" aria-label="Organism Index">
      <h2>Major Organisms Covered</h2>
      <div class="organism-pills">
        <a href="#microsporum" class="pill">Microsporum spp. (Ringworm)</a>
        <a href="#trichophyton" class="pill">Trichophyton spp.</a>
        <a href="#malassezia" class="pill">Malassezia pachydermatis</a>
        <a href="#candida-cutaneous" class="pill">Cutaneous Candidiasis</a>
      </div>
    </nav>

    <!-- 3. DISEASE UNITS -->
    <section class="section-block" aria-labelledby="pathogens-heading">
      <h2 id="pathogens-heading">Pathological Profiles</h2>

      <!-- UNIT 1: MICROSPORUM -->`,
  },
  {
    id: 'derm-microsporum',
    title: "2. Microsporum Dermatophytosis (Ringworm)",
    shortTitle: "2. Microsporum",
    category: "Mycotic Diseases",
    html: `<article id="microsporum" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Microsporum Dermatophytosis</h3>
          <div class="disease-subtitle"><em>Microsporum canis</em> &amp; <em>M. gypseum</em> — Ectothrix hair infection and ringworm</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Microsporum canis</em> (zoophilic; cats/dogs), <em>M. gypseum</em> (geophilic).</li>
              <li>Stratum corneum, hair follicle epithelium, and hair shaft surface (ectothrix).</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Arthrospore adhesion to corneocytes followed by hyphal invasion using extracellular keratinases.</li>
              <li>Radial expansion in stratum corneum triggers delayed-type hypersensitivity (DTH) and epidermal turnover.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Circular alopecic plaques, scaling, crusting, broken hair stumps, occasionally nodular kerion.</li>
              <li><strong>Micro:</strong> Orthokeratotic/parakeratotic hyperkeratosis, mural folliculitis, arthrospore sheaths around hair shafts.</li>
            </ul>
          </div>
        </div>

        <div class="teaching-gallery">

          <figure class="teaching-figure">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1wCUflU2jsogrnp9edQKUqd4OoKg3yzCA" alt="Clinical feline dermatophytosis with Wood's lamp fluorescence" loading="lazy" decoding="async">
            <figcaption>Feline dermatophytosis presenting as circular alopecic lesions with scaling and broken hairs. Fluorescent hairs under Wood’s lamp examination indicate Microsporum canis infection.</figcaption>
          </figure>

          <figure class="teaching-figure">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1lwrRYZHxKhqil1mvEw8LkbP5NkX4qgZ1" alt="Histopathology of dermatophytosis involving a hair shaft" loading="lazy" decoding="async">
            <figcaption>Histologic section of dermatophytosis demonstrating fungal hyphae within the hair shaft and associated perifollicular inflammation.</figcaption>
          </figure>
        </div>
      </article>`,
  },
  {
    id: 'derm-trichophyton',
    title: "3. Trichophyton Dermatophytosis (Ringworm)",
    shortTitle: "3. Trichophyton",
    category: "Mycotic Diseases",
    html: `<article id="trichophyton" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Trichophyton Dermatophytosis</h3>
          <div class="disease-subtitle"><em>Trichophyton verrucosum</em> &amp; <em>T. mentagrophytes</em> — Severe inflammatory dermatophytosis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Trichophyton verrucosum</em> (cattle), <em>T. mentagrophytes</em> (rodents, dogs, horses), <em>T. equinum</em>.</li>
              <li>Keratinized epidermis, deep hair follicles, and hair shaft matrix (endothrix/ectothrix).</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Deep follicular invasion induces rupture of the follicular epithelium (furunculosis).</li>
              <li>Extravasation of hair fragments and fungal elements drives intense neutrophilic and granulomatous dermal inflammation.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Thick, raised, greyish-white asbestos-like crusts (cattle), painful exudative suppurative lesions.</li>
              <li><strong>Micro:</strong> Severe suppurative-to-granulomatous luminal folliculitis, furunculosis, intra-follicular hyphae and spores.</li>
            </ul>
          </div>
        </div>
      </article>`,
  },
  {
    id: 'derm-malassezia',
    title: "4. Malassezia Dermatitis & Otitis",
    shortTitle: "4. Malassezia",
    category: "Mycotic Diseases",
    html: `<article id="malassezia" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Malassezia Dermatitis &amp; Otitis</h3>
          <div class="disease-subtitle"><em>Malassezia pachydermatis</em> — Lipophilic yeast-induced hyperplastic dermatitis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Malassezia pachydermatis</em> (non-mycelial, peanut-shaped lipophilic yeast).</li>
              <li>Ears, interdigital skin, mucocutaneous junctions, and ventral body folds.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Opportunistic proliferation following microenvironmental changes (humidity, allergy, seborrhea).</li>
              <li>Production of lipases and zymosan activates complement, causing erythema, pruritus, and epidermal hyperplasia.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Erythema, greasy malodorous dark exudate, lichenification, and hyperpigmentation.</li>
              <li><strong>Micro:</strong> Prominent regular epidermal hyperplasia, parakeratosis, superficial perivascular dermatitis, bottle-shaped yeasts in stratum corneum.</li>
            </ul>
          </div>
        </div>

        <div class="teaching-gallery">

          <figure class="teaching-figure">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1nPB1HkgfMX4pF7HP1dU9dmZCKGxrSIJI" alt="Clinical Malassezia dermatitis in a dog with cytology inset" loading="lazy" decoding="async">
            <figcaption>Malassezia dermatitis in a dog showing erythema, greasy seborrhea, and lichenification. Inset: Tape impression cytology demonstrating clusters of Malassezia pachydermatis yeast with characteristic peanut-shaped morphology.</figcaption>
          </figure>

          <figure class="teaching-figure">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/195d0nNYsRhtS3_V8vUCxUxDHkHLKMcYE" alt="Histopathology of Malassezia dermatitis" loading="lazy" decoding="async">
            <figcaption>Histopathology of Malassezia dermatitis showing yeast colonization of the stratum corneum, epidermal hyperplasia, and superficial perivascular dermatitis.</figcaption>
          </figure>
        </div>
      </article>`,
  },
  {
    id: 'derm-candida-diagnostic',
    title: "5. Cutaneous Candidiasis & Diagnostic Key",
    shortTitle: "5. Candida & Key",
    category: "Mycotic Diseases",
    html: `<article id="candida-cutaneous" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Cutaneous &amp; Mucocutaneous Candidiasis</h3>
          <div class="disease-subtitle"><em>Candida albicans</em> — Dimorphic opportunistic yeast/pseudohyphal infection</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Candida albicans</em> &amp; related non-<em>albicans</em> species.</li>
              <li>Mucocutaneous junctions, oral cavity, esophagus, gastrointestinal tract, and macerated skin.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Transition from oval budding yeast to tissue-invasive pseudohyphae and true hyphae.</li>
              <li>Secretion of aspartic proteinases (SAPs) breaks down mucosal/cutaneous barriers in immunocompromised hosts.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> White-to-yellow pseudomembranous plaques ("thrush"), erosions, ulcerations, and moist scaling.</li>
              <li><strong>Micro:</strong> Neutrophilic intraepidermal pustules, parakeratotic crusts containing blastoconidia and invasive pseudohyphae.</li>
            </ul>
          </div>
        </div>
      </article>

<section class="section-block">
<aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Superficial Diagnostic Key:</strong> Superficial fungal structures in stratum corneum and hair follicles are frequently missed on routine H&amp;E. Use <strong>Periodic acid-Schiff (PAS)</strong> or <strong>Grocott's methenamine silver (GMS)</strong> to highlight dermatophyte hyphae/arthrospores and <em>Candida</em> pseudohyphae. Cytological tape strip preparations or skin scrapings with 10–20% KOH allow rapid identification of <em>Malassezia</em> bottle-shaped yeasts and fungal elements.
      </aside>
</section>`,
  },
];

export const SuperficialCutaneousPage: React.FC<SuperficialCutaneousPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Superficial & Cutaneous Mycoses"
      subtitle="Dermatophytosis, Malassezia dermatitis, and keratinized tissue invasion"
      sectionCode="MYC-01"
      category="Mycotic Diseases"
      topicId="mycotic-diseases"
      lessonId="superficial-cutaneous-mycoses"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={undefined}
      nextLesson={{"id": "subcutaneous-mycoses", "title": "Subcutaneous Mycoses"}}
    />
  );
};
