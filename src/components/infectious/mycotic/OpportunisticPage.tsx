import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface OpportunisticPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'oppm-overview',
    title: "1. Overview & Opportunistic Mycoses in Immunocompromised Hosts",
    shortTitle: "1. Overview",
    category: "Mycotic Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Opportunistic Mycoses</h1>
      <div class="hero-subtitle">Angioinvasive hyphae, mucosal breach, and secondary tissue destruction</div>
      <p class="hero-body">
        Opportunistic mycoses are caused by ubiquitously distributed saprophytic environmental molds or commensal yeasts that exploit compromised host defenses. Predisposing factors include prolonged antimicrobial therapy, corticosteroid immunosuppression, metabolic disease, mucosal ulceration, or tissue ischemia. Hallmark pathological changes include angioinvasion, vascular thrombosis, ischemic necrosis, and extensive tissue destruction.
      </p>
    </header>

    <!-- 2. QUICK JUMP INDEX -->
    <nav class="organism-nav" aria-label="Organism Index">
      <h2>Major Conditions Covered</h2>
      <div class="organism-pills">
        <a href="#aspergillus" class="pill">Aspergillosis</a>
        <a href="#mucorales" class="pill">Mucormycosis / Zygomycosis</a>
        <a href="#candida-visceral" class="pill">Systemic &amp; Visceral Candidiasis</a>
        <a href="#pneumocystis" class="pill">Pneumocystosis</a>
      </div>
    </nav>

    <!-- 3. DISEASE UNITS -->
    <section class="section-block" aria-labelledby="pathogens-heading">
      <h2 id="pathogens-heading">Pathological Profiles</h2>

      <!-- UNIT 1: ASPERGILLUS -->`,
  },
  {
    id: 'oppm-aspergillus',
    title: "2. Aspergillosis (Aspergillus fumigatus)",
    shortTitle: "2. Aspergillosis",
    category: "Mycotic Diseases",
    html: `<article id="aspergillus" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Aspergillosis</h3>
          <div class="disease-subtitle"><em>Aspergillus fumigatus</em> &amp; <em>A. flavus</em> — Dichotomous branching, angioinvasion, and necrotising inflammation</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Aspergillus fumigatus</em>, <em>A. flavus</em>, <em>A. niger</em> (ubiquitous airborne spores).</li>
              <li>Avian respiratory tract, equine guttural pouch/cornea, canine nasal cavity/discoid spondylitis, bovine placenta.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation of conidia; elastases and proteases break down tissue barriers.</li>
              <li>Hyphal tropism for blood vessels drives vascular invasion, thrombosis, ischemic infarction, and necrosis.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Yellow-green fuzzy air sac plaques (birds), epistaxis &amp; carotid erosion (equine guttural pouch), nasal turbinate destruction.</li>
              <li><strong>Micro:</strong> Targetoid necrotic granulomas; uniform 3–6 µm septate hyphae displaying <strong>dichotomous 45-degree branching</strong> within thrombi.</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1dvOBiknZnfgifp_TtyiBFriI3qX6GcbL" alt="Canine aspergillosis with destructive fungal rhinitis" loading="lazy" decoding="async">
          <figcaption>Canine aspergillosis with destructive fungal rhinitis and yellow-green fungal plaques. Inset: Septate hyphae of Aspergillus spp. showing acute-angle (45°) branching.</figcaption>
        </figure>

      <!-- UNIT 2: MUCORALES -->`,
  },
  {
    id: 'oppm-mucorales',
    title: "3. Mucormycosis / Zygomycosis (Rhizopus, Mucor, Absidia)",
    shortTitle: "3. Mucormycosis",
    category: "Mycotic Diseases",
    html: `<article id="mucorales" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Mucormycosis (Zygomycosis)</h3>
          <div class="disease-subtitle"><em>Rhizopus</em>, <em>Mucor</em>, <em>Lichtheimia</em>, <em>Mortierella</em> — Broad pauciseptate ribbon-like hyphae</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Mucorales order (<em>Rhizopus microsporus</em>, <em>Mucor circulationis</em>, <em>Lichtheimia corymbifera</em>, <em>Mortierella wolfii</em>).</li>
              <li>Bovine foretomachs (rumen/abomasum), mesenteric lymph nodes, respiratory tract, and placenta.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Ingestion or inhalation following mucosal erosion (e.g., ruminal acidosis).</li>
              <li>Extremely aggressive angioinvasion leading to widespread arterial thrombosis, infarction, and necrotising hemorrhagic lesions.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Circular, dark red-to-black targetoid infarcts on ruminal mucosa; mycotic placentitis with leather-like cotyledons.</li>
              <li><strong>Micro:</strong> Hemorrhagic necrosis and angioinvasive <strong>broad (6–25 µm), thin-walled, pauciseptate ribbon-like hyphae</strong> branching at wide (90-degree) angles.</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1TfNo63UkUgrH_2aISytkTkXopTfpnIdm" alt="Bovine mucormycosis with broad non-septate hyphae" loading="lazy" decoding="async">
          <figcaption>Bovine mucormycosis presenting as rapidly progressive necrotic facial lesions. Inset: Broad, non-septate hyphae of Mucorales with irregular 90° branching.</figcaption>
        </figure>

      <!-- UNIT 3: VISCERAL CANDIDIASIS -->`,
  },
  {
    id: 'oppm-candida-visceral',
    title: "4. Systemic & Visceral Candidiasis (Candida albicans)",
    shortTitle: "4. Visceral Candidiasis",
    category: "Mycotic Diseases",
    html: `<article id="candida-visceral" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Systemic &amp; Visceral Candidiasis</h3>
          <div class="disease-subtitle"><em>Candida albicans</em> — Upper GI ulceration, hematogenous seeding, and microabscesses</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Candida albicans</em> (commensal of GI tract and mucosal surfaces).</li>
              <li>Non-glandular stomach (swine/equine), crop (poultry), kidneys, myocardium, and central nervous system.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Disruption of mucosal microbiota (long-term antibiotics) or epithelial barrier damage.</li>
              <li>Yeast-to-hypha phenotypic switching promotes epithelial penetration and vascular invasion into systemic organs.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Thickened, white diphtheritic pseudomembranes on crop/stomach; miliary renal cortical microabscesses.</li>
              <li><strong>Micro:</strong> Epithelial necrosis, ulceration, and purulent inflammation containing <strong>oval blastoconidia (yeasts) and pseudohyphae</strong>.</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/13asXqfPGI4EYqs-d_WBm5h4mPfR0Apsw" alt="Oral candidiasis in a calf" loading="lazy" decoding="async">
          <figcaption>Oral candidiasis (“thrush”) in a calf with white pseudomembranous plaques on the mucosa. Inset: Budding yeast and pseudohyphae of Candida albicans invading superficial epithelium.</figcaption>
        </figure>

      <!-- UNIT 4: PNEUMOCYSTOSIS -->`,
  },
  {
    id: 'oppm-pneumocystis-diagnostic',
    title: "5. Pneumocystosis & Diagnostic Approach Key",
    shortTitle: "5. Pneumocystis & Key",
    category: "Mycotic Diseases",
    html: `<article id="pneumocystis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Pneumocystosis</h3>
          <div class="disease-subtitle"><em>Pneumocystis carinii</em> &amp; species-specific strains — Foamy intra-alveolar exudate</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Pneumocystis carinii</em> (rats), <em>P. canis</em> (dogs/foals with severe combined immunodeficiency - SCID).</li>
              <li>Exclusively restricted to the alveolar respiratory lumen and Type I pneumocytes.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Trophic forms attach tightly to Type I pneumocytes via surface cell wall fibronectin.</li>
              <li>Impaired cell-mediated immunity (CD4+ T-cell deficiency) permits unchecked intra-alveolar replication and gas exchange impairment.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Rubbery, heavy, non-collapsible hyperemic lungs with firm diffuse consolidation.</li>
              <li><strong>Micro:</strong> Alveoli filled with a characteristic <strong>pink, acellular, "foamy" or "honeycombed" exudate</strong>; GMS stain highlights thin cup-shaped or crushed-spherical cysts (4–6 µm).</li>
            </ul>
          </div>
        </div>
      </article>

        <figure class="teaching-figure">
          <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1n2FbbRnsCGBd-ut_L3yEBVPe_hQNkxmO" alt="Equine pneumocystosis with foamy alveolar exudate" loading="lazy" decoding="async">
          <figcaption>Equine pneumocystosis with diffuse interstitial pneumonia. Inset: Foamy alveolar exudate containing cystic forms of Pneumocystis spp. within affected lung tissue.</figcaption>
        </figure>

    </section>

    <!-- 4. DIAGNOSTIC APPROACH PANEL -->
    <section class="section-block">

<section class="section-block">
<aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Opportunistic Diagnostic Key:</strong> Distinguishing morphological features on histological section is crucial for guiding clinical interpretation. Differentiate <em>Aspergillus</em> (regular septate hyphae, 45° branching) from Mucorales (irregular broad pauciseptate hyphae, 90° branching), <em>Candida</em> (mixed pseudohyphae and blastoconidia), and <em>Pneumocystis</em> (intra-alveolar cup-shaped cysts on GMS stain).
      </aside>
</section>`,
  },
];

export const OpportunisticPage: React.FC<OpportunisticPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Opportunistic Mycoses"
      subtitle="Aspergillosis, candidiasis, and zygomycosis/mucormycosis in compromised hosts"
      sectionCode="MYC-04"
      category="Mycotic Diseases"
      topicId="mycotic-diseases"
      lessonId="opportunistic-mycoses"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "systemic-deep-mycoses", "title": "Systemic & Deep Mycoses"}}
      nextLesson={{"id": "bacterial-diseases-poultry", "title": "Bacterial Diseases of Poultry"}}
    />
  );
};
