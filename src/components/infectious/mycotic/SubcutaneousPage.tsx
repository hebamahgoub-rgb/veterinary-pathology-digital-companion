import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface SubcutaneousPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'subc-overview',
    title: "1. Overview & Traumatic Implantation Pathogenesis",
    shortTitle: "1. Overview",
    category: "Mycotic Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Subcutaneous Mycoses</h1>
      <div class="hero-subtitle">Traumatic implantation, deep dermal granulations, and oomycete lesions</div>
      <p class="hero-body">
        Subcutaneous mycoses result from traumatic inoculation of saprophytic fungal or oomycete organisms into the dermis and subcutaneous tissue. These conditions typically remain localized to skin, panniculus, and adjacent soft tissues, producing chronic pyogranulomatous nodular ulcerations, fistulous draining tracts, and prominent fibrous tissue reactions.
      </p>
    </header>

    <!-- 2. QUICK JUMP INDEX -->
    <nav class="organism-nav" aria-label="Organism Index">
      <h2>Major Conditions Covered</h2>
      <div class="organism-pills">
        <a href="#sporotrichosis" class="pill">Sporotrichosis</a>
        <a href="#pythiosis" class="pill">Pythiosis &amp; Lagenidiosis</a>
        <a href="#mycetoma" class="pill">Eumycotic Mycetoma</a>
        <a href="#phaeohyphomycosis" class="pill">Phaeohyphomycosis &amp; Chromoblastomycosis</a>
      </div>
    </nav>

    <!-- 3. DISEASE UNITS -->
    <section class="section-block" aria-labelledby="pathogens-heading">
      <h2 id="pathogens-heading">Pathological Profiles</h2>

      <!-- UNIT 1: SPOROTRICHOSIS -->`,
  },
  {
    id: 'subc-sporotrichosis',
    title: "2. Sporotrichosis (Sporothrix schenckii complex)",
    shortTitle: "2. Sporotrichosis",
    category: "Mycotic Diseases",
    html: `<article id="sporotrichosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Sporotrichosis</h3>
          <div class="disease-subtitle"><em>Sporothrix schenckii</em> species complex — Nodular lymphocutaneous granulomas</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Sporothrix schenckii</em>, <em>S. brasiliensis</em> (dimorphic fungus; high zoonotic risk in cats).</li>
              <li>Dermis, subcutaneous tissue, and regional lymphatic channels.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Traumatic inoculation via thorns, wooden splinters, or cat scratches/bites.</li>
              <li>Thermal transition to yeast form in host tissues, evoking nodular lymphocutaneous ulceration.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Ulcerated subcutaneous nodules along lymphatics ("corded" lymphatics), draining crusts.</li>
              <li><strong>Micro:</strong> Pyogranulomatous dermatitis with Splendore-Hoeppli phenomenon; pleomorphic round to "cigar-shaped" yeasts (abundant in felines).</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/19jAinUftCqSumqmC08pXYxATmfHzxaYv" alt="Cutaneous-lymphatic sporotrichosis in a cat" loading="lazy" decoding="async">
          <figcaption>Cutaneous-lymphatic sporotrichosis in a cat, characterized by nodular ulcerative lesions aligned along lymphatic vessels. Inset: Cigar-shaped yeast forms of Sporothrix schenckii within macrophages.</figcaption>
        </figure>

      <div class="supplementary-note">
        <h3>Epizootic Lymphangitis</h3>
        <p><em>Histoplasma farciminosum</em> causes chronic nodular and ulcerative lymphangitis in equids, with cord-like lymphatic thickening and draining lesions.</p>
      </div>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/184oT4C-kS7rNraYgWUsH9UIC6Th6QUFH" alt="Epizootic lymphangitis in a horse" loading="lazy" decoding="async">
          <figcaption>Epizootic lymphangitis in a horse demonstrating cord-like lymphatic thickening and nodular cutaneous lesions with draining tracts. Inset: Intracellular yeast forms of Histoplasma farciminosum.</figcaption>
        </figure>


      <!-- UNIT 2: PYTHIOSIS & LAGENIDIOSIS -->`,
  },
  {
    id: 'subc-pythiosis',
    title: "3. Pythiosis & Lagenidiosis (Oomycetes)",
    shortTitle: "3. Pythiosis",
    category: "Mycotic Diseases",
    html: `<article id="pythiosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Pythiosis &amp; Lagenidiosis</h3>
          <div class="disease-subtitle"><em>Pythium insidiosum</em> &amp; <em>Lagenidium</em> spp. — Aquatic oomycete necrotising granulomas</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Pythium insidiosum</em>, <em>Lagenidium giganteum</em> (fungus-like aquatic Oomycetes).</li>
              <li>Subcutaneous tissues of legs, abdomen, equine limbs, and canine gastrointestinal tract/skin.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Motile flagellated zoospores encyst in traumatized tissue exposed to warm standing water.</li>
              <li>Hypha-like broad structures secrete proteases causing severe eosinophilic necrosis and tissue destruction.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Ulcerated masses with sinus tracts discharging firm yellow-grey necrotic foci ("kunkers" or "leeches" in horses).</li>
              <li><strong>Micro:</strong> Eosinophilic to granulomatous inflammation with wide areas of necrosis surrounding thick, poorly septate hyphal-like impressions.</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1zzC0WaXvU0he-5VnfJNwBWgi4-J4HJmw" alt="Canine pythiosis" loading="lazy" decoding="async">
          <figcaption>Canine pythiosis presenting as ulcerative granulomatous lesions with necrotic “kunkers.” Inset: Broad, sparsely septate hyphae of Pythium insidiosum within eosinophilic granulomatous inflammation.</figcaption>
        </figure>

      <!-- UNIT 3: EUMYCOTIC MYCETOMA -->`,
  },
  {
    id: 'subc-mycetoma',
    title: "4. Eumycotic Mycetoma",
    shortTitle: "4. Mycetoma",
    category: "Mycotic Diseases",
    html: `<article id="mycetoma" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Eumycotic Mycetoma</h3>
          <div class="disease-subtitle">True fungal mycetomas — Granule-forming nodular sinus tracts</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Dematiaceous or hyaline fungi (e.g., <em>Curvularia</em>, <em>Madurella</em>, <em>Acremonium</em>, <em>Fusarium</em>).</li>
              <li>Distal extremities, cutaneous dermis, subcutaneous tissue, and underlying periosteum/bone.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Deep puncture wounds introduce soil/plant-associated fungi.</li>
              <li>Organisms aggregate into compact microcolonies ("granules" or "grains") surrounded by dense cement-like host protein deposits.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Swollen, tumefactive subcutaneous nodule with draining sinuses discharging pigmented "grains" (black, white, or yellow).</li>
              <li><strong>Micro:</strong> Central fungal granules encased in Splendore-Hoeppli material, surrounded by neutrophils, macrophages, and thick fibrous capsules.</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1WAmHLzP0MjdMbg88pFdDidFP8JH7svz7" alt="Bovine mycetoma" loading="lazy" decoding="async">
          <figcaption>Bovine mycetoma characterized by chronic subcutaneous swelling and draining sinus tracts containing diagnostic grains. Inset: Pigmented fungal grains (eumycotic) versus pale bacterial grains (actinomycotic).</figcaption>
        </figure>

      <!-- UNIT 4: PHAEOHYPHOMYCOSIS -->`,
  },
  {
    id: 'subc-phaeo-diagnostic',
    title: "5. Phaeohyphomycosis, Chromoblastomycosis & Diagnostic Key",
    shortTitle: "5. Phaeohyphomycosis & Key",
    category: "Mycotic Diseases",
    html: `<article id="phaeohyphomycosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Phaeohyphomycosis &amp; Chromoblastomycosis</h3>
          <div class="disease-subtitle">Melanized (pigmented) fungi — Cystic and granulomatous panniculitis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Dematiaceous pigmented fungi (e.g., <em>Bipolaris</em>, <em>Alternaria</em>, <em>Exophiala</em>, <em>Cladophialophora</em>).</li>
              <li>Dermis, subcutaneous adipose tissue (panniculus), digits, and nasal mucosa.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Implantation of dematiaceous saprophytes; cell wall melanin protects organisms against phagocytic killing.</li>
              <li>Development of pigmented hyphae/yeast-like cells in tissue without forming discrete macroscopic granules.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Solitary or multifocal subcutaneous cysts, verrucous hyperkeratotic plaques, or ulcerated nodules.</li>
              <li><strong>Micro:</strong> Suppurative to pyogranulomatous panniculitis containing brown-pigmented septate hyphae, pseudohyphae, or "muriform" medlar bodies (chromoblastomycosis).</li>
            </ul>
          </div>
        </div>
      </article>

    </section>

    <!-- 4. DIAGNOSTIC APPROACH PANEL -->
    <section class="section-block">

<section class="section-block">
<aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Subcutaneous Diagnostic Key:</strong> Routine H&amp;E stains often fail to visualize broad <em>Pythium</em> hyphae and non-pigmented fungal elements. Always perform <strong>Grocott's methenamine silver (GMS)</strong> staining to evaluate hyphal width, septation, and branching. Note that Oomycetes (<em>Pythium</em>) contain cell wall beta-glucans and cellulose rather than chitin, resulting in variable PAS staining intensity compared to true fungi.
      </aside>
</section>`,
  },
];

export const SubcutaneousPage: React.FC<SubcutaneousPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Subcutaneous Mycoses"
      subtitle="Sporotrichosis, mycetomas, and chromoblastomycosis following traumatic inoculation"
      sectionCode="MYC-02"
      category="Mycotic Diseases"
      topicId="mycotic-diseases"
      lessonId="subcutaneous-mycoses"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "superficial-cutaneous-mycoses", "title": "Superficial & Cutaneous Mycoses"}}
      nextLesson={{"id": "systemic-deep-mycoses", "title": "Systemic & Deep Mycoses"}}
    />
  );
};
