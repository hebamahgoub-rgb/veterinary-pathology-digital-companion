import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface SpirochetalAtypicalPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'spir-overview',
    title: "1. Overview & Unique Cell Biology of Spirochetes and Atypical Bacteria",
    shortTitle: "1. Overview",
    category: "Bacterial Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Spirochetal &amp; Atypical Bacterial Diseases</h1>
      <div class="hero-subtitle">Motile spirals, wall-less organisms, and obligate intracellular agents</div>
      <p class="hero-body">
        This category includes morphologically and physiologically atypical bacterial pathogens that do not conform to standard Gram-staining diagnostic workflows. Pathological mechanisms range from spirochetal vasculitis and severe interstitial nephritis to cell-membrane destruction, systemic endothelial injury, and persistent intra-leukocytic replication.
      </p>
    </header>

    <!-- 2. QUICK JUMP INDEX -->
    <nav class="organism-nav" aria-label="Organism Index">
      <h2>Major Groups Covered</h2>
      <div class="organism-pills">
        <a href="#leptospira" class="pill">Leptospira</a>
        <a href="#brachyspira-borrelia" class="pill">Brachyspira &amp; Borrelia</a>
        <a href="#mycoplasma" class="pill">Mycoplasma &amp; Ureaplasma</a>
        <a href="#chlamydia" class="pill">Chlamydiaceae</a>
        <a href="#anaplasmataceae" class="pill">Anaplasmataceae &amp; Rickettsiales</a>
        <a href="#coxiella" class="pill">Coxiella burnetii</a>
      </div>
    </nav>

    <!-- 3. DISEASE UNITS -->
    <section class="section-block" aria-labelledby="pathogens-heading">
      <h2 id="pathogens-heading">Pathological Profiles</h2>

      <!-- UNIT 1: LEPTOSPIRA -->`,
  },
  {
    id: 'spir-leptospira',
    title: "2. Leptospirosis (Leptospira interrogans)",
    shortTitle: "2. Leptospirosis",
    category: "Bacterial Diseases",
    html: `<article id="leptospira" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Leptospirosis</h3>
          <div class="disease-subtitle"><em>Leptospira interrogans</em> sensu lato — Vasculitis, interstitial nephritis, and icterus</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Pathogenic <em>Leptospira</em> serovars (e.g., Canicola, Icterohaemorrhagiae, Pomona, Hardjo).</li>
              <li>Renal tubular epithelium, hepatocytes, vascular endothelium, and pregnant uterus.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Mucosal/cutaneous penetration leading to leptospiremia, vascular endothelial injury, and hemolysis.</li>
              <li>Persistence in renal proximal tubules causes chronic tubulointerstitial nephritis and urinary shedding.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Jaundice, petechial-to-ecchymotic hemorrhages, swollen "white spotted" kidneys, pulmonary hemorrhage.</li>
              <li><strong>Micro:</strong> Acute/chronic tubulointerstitial nephritis, hepatocellular dissociation, systemic vasculitis.</li>
            </ul>
          </div>
        </div>

        <!-- Illustrations for Leptospira -->
        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/1FmiAbVk3uQiuf6FelfLUGcdyofKd3tKe/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Morphology of Leptospira interrogans showing its characteristic tightly coiled body and hooked ends as visualized by darkfield microscopy.</p>
        </div>

        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/16mznGRqWs9cyGX9k7aSmBJGjTDQJ_nCi/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Pathogenesis of leptospirosis in dogs, illustrating bacterial entry, systemic spread, and colonization of renal tubules leading to interstitial nephritis.</p>
        </div>

        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/1Q_nzLe5wYyNFog82jK4GCCOPD7Lz7Uus/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Gross renal lesions in canine leptospirosis characterized by cortical pallor, petechiae, and corticomedullary distinction.</p>
        </div>
      </article>`,
  },
  {
    id: 'spir-brachyspira-borrelia',
    title: "3. Brachyspira & Borrelia Infections (Swine Dysentery & Lyme Disease)",
    shortTitle: "3. Brachyspira & Borrelia",
    category: "Bacterial Diseases",
    html: `<article id="brachyspira-borrelia" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Brachyspira &amp; Borrelia Infections</h3>
          <div class="disease-subtitle">Swine dysentery, avian spirochetosis, and Lyme borreliosis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Brachyspira hyodysenteriae</em> (swine colon), <em>B. anserina</em> (avian blood/liver), <em>Borrelia burgdorferi</em> (joints/kidneys).</li>
              <li>Large intestinal mucosa, systemic vasculature, synovial membranes, and glomeruli.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li><em>B. hyodysenteriae</em> invades colonic mucus, causing epithelial necrosis and fibrinopurulent exudation.</li>
              <li><em>Borrelia</em> triggers immune-complex deposition in joints and renal glomeruli via tick transmission.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Mucohemorrhagic typhlocolitis with pseudomembranes (Swine dysentery); suppurative arthritis/lyme nephropathy.</li>
              <li><strong>Micro:</strong> Superficial mucosal necrosis with mucus hypersecretion and spirochetes; membranoproliferative glomerulonephritis.</li>
            </ul>
          </div>
        </div>

        <!-- Illustrations for Brachyspira & Borrelia -->
        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/15B-BqDSOMAKZWm6g413_m1AoKAlSKUgK/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Loosely coiled Borrelia burgdorferi spirochetes visualized using silver staining techniques.</p>
        </div>

        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/1iE2kSLPIU4uJMsc5hwueOnXhtjFm7Fo_/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Transmission cycle of Lyme disease involving Ixodes ticks and mammalian reservoir hosts.</p>
        </div>

        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/1YmB6xzNenReO_Ej905uFgxhzx6QNitNa/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Synovial inflammation associated with canine Lyme disease, demonstrating synovial hyperplasia and inflammatory cell infiltration.</p>
        </div>

        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/13D2YBwqniOsEkYxFz4LgHSjTWjr495vp/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Brachyspira hyodysenteriae colonization of the porcine colon with associated mucosal necrosis and fibrinous exudation.</p>
        </div>

        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/1L_2s6yixD4wLmedqkM7p6LillJu8Gf9G/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Key features of avian spirochetosis including bloodborne Borrelia anserina and splenic enlargement.</p>
        </div>
      </article>`,
  },
  {
    id: 'spir-mycoplasma',
    title: "4. Mycoplasma & Ureaplasma Infections",
    shortTitle: "4. Mycoplasma & Ureaplasma",
    category: "Bacterial Diseases",
    html: `<article id="mycoplasma" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Mycoplasma &amp; Ureaplasma Infections</h3>
          <div class="disease-subtitle">Wall-less bacteria — Ciliary stasis, pleuropneumonia, mastitis, and polyarthritis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>M. mycoides</em> subsp. <em>mycoides</em> (CBPP), <em>M. hyopneumoniae</em> (SEP), <em>M. bovis</em> (pneumonia/mastitis), <em>M. agalactiae</em>.</li>
              <li>Respiratory ciliated epithelium, pleural cavity, mammary gland, and synovial membranes.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Adherence to respiratory cilia via cytoadhesins causes ciliostasis, epithelial loss, and altered clearance.</li>
              <li>Induction of pro-inflammatory cytokines drives cuffing pneumonia, pleuritis, or suppurative mastitis.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Marbled lung with sequestration (CBPP), cranioventral plum-colored consolidation (SEP), fibrinous arthritis.</li>
              <li><strong>Micro:</strong> Peribronchial &amp; perivascular lymphoid cuffing (BALT hyperplasia), interlobular septal thrombosis &amp; necrosis.</li>
            </ul>
          </div>
        </div>

        <!-- Illustrations for Mycoplasma -->
        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/1qI3qro1oa35pSqaSjTJFK1RDLBSJOk-M/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Characteristic ‘friedegg’ colony morphology of Mycoplasma species grown on specialized media.</p>
        </div>
      </article>`,
  },
  {
    id: 'spir-chlamydia',
    title: "5. Chlamydial Diseases (Chlamydia abortus & C. psittaci)",
    shortTitle: "5. Chlamydia",
    category: "Bacterial Diseases",
    html: `<article id="chlamydia" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Chlamydial Diseases</h3>
          <div class="disease-subtitle"><em>Chlamydia abortus</em> &amp; <em>C. psittaci</em> — Obligate intracellular biphasic development</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Chlamydia abortus</em> (enzootic abortion of ewes), <em>C. psittaci</em> (avian chlamydiosis/psittacosis), <em>C. pecorum</em>.</li>
              <li>Placental trophoblasts, mucosal surfaces, serosal membranes, and reticuloendothelial system.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Biphasic life cycle: Elementary bodies (infectious) enter cells; Reticulate bodies (metabolic) replicate in vacuoles.</li>
              <li>Trophoblast destruction causes vasculitis, placental insufficiency, and late-term abortion.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Necrotic clay-colored intercotyledonary placentitis, hepatomegaly, fibrinous polyserositis in birds.</li>
              <li><strong>Micro:</strong> Suppurative-to-necrotising placentitis, intracytoplasmic elementary bodies in chorionic epithelial cells.</li>
            </ul>
          </div>
        </div>

        <!-- Illustrations for Chlamydia -->
        <div class="figure-card">
          <div class="figure-wrapper">
            <iframe src="https://drive.google.com/file/d/1UaSMplBdPEgLvozclzbchoAUuticv9z2/preview" allow="autoplay"></iframe>
          </div>
          <p class="figure-caption">Intracellular developmental cycle of Chlamydia illustrating transformation between elementary and reticulate bodies.</p>
        </div>
      </article>`,
  },
  {
    id: 'spir-anaplasmataceae',
    title: "6. Anaplasmataceae & Rickettsiales (Ehrlichia & Anaplasma)",
    shortTitle: "6. Anaplasma & Ehrlichia",
    category: "Bacterial Diseases",
    html: `<article id="anaplasmataceae" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Anaplasmataceae &amp; Rickettsiales</h3>
          <div class="disease-subtitle"><em>Anaplasma</em>, <em>Ehrlichia</em> &amp; <em>Neorickettsia</em> — Vector-borne leukocytic &amp; erythrocytic tropism</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Anaplasma marginale</em> (bovine RBCs), <em>A. phagocytophilum</em> (granulocytes), <em>Ehrlichia canis</em> (monocytes).</li>
              <li>Erythrocytes, circulating leukocytes, vascular endothelium, and lymphoreticular tissue.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Replication inside hemolymphatic host cells (forming morulae) escaping lysosomal destruction.</li>
              <li>Immune-mediated extravascular hemolysis (Anaplasma) or pancytopenia &amp; vasculitis (Ehrlichia).</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Severe anemia, jaundice, splenomegaly, petechiation, lymphadenomegaly.</li>
              <li><strong>Micro:</strong> Erythrophagocytosis, splenic congestion, perivascular lymphoplasmacytic cuffing, intracytoplasmic morulae.</li>
            </ul>
          </div>
        </div>
      </article>`,
  },
  {
    id: 'spir-coxiella-diagnostic',
    title: "7. Coxiella burnetii (Q Fever) & Diagnostic Approach Key",
    shortTitle: "7. Q Fever & Key",
    category: "Bacterial Diseases",
    html: `<article id="coxiella" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Coxiella burnetii (Q Fever)</h3>
          <div class="disease-subtitle">Obligate intracellular spore-like bacterium — Placentitis &amp; zoonotic abortion</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Coxiella burnetii</em> (small ruminants, cattle, pets, zoonotic).</li>
              <li>Placental trophoblasts, macrophages, and uterine epithelium.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation of spore-like small cell variants from environmental dust or birth fluids.</li>
              <li>Profound replication in phagolysosomes of trophoblasts leading to necrotising placentitis and abortion.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Leathery, thickened intercotyledonary placenta with exudative yellowish-brown necrosis.</li>
              <li><strong>Micro:** Severe intercotyledonary placentitis with massive intraepithelial bacterial vacuoles (Stamp's positive).</li>
            </ul>
          </div>
        </div>
      </article>

<section class="section-block">
<aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Atypical Diagnostic Key:</strong> Standard Gram stains are uninformative for these organisms. Use <strong>Silver impregnation (Warthin-Starry / Steiner)</strong> for spirochetes (<em>Leptospira</em>, <em>Brachyspira</em>), <strong>Modified Ziehl-Neelsen (Stamp's stain)</strong> for <em>Chlamydia</em> and <em>Coxiella</em>, Giemsa for blood/buffy coat smears (<em>Anaplasma</em>, <em>Ehrlichia</em>), and PCR or serology for fastidious <em>Mycoplasma</em> species.
      </aside>
</section>`,
  },
];

export const SpirochetalAtypicalPage: React.FC<SpirochetalAtypicalPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Spirochetal & Atypical Bacterial Diseases"
      subtitle="Spirochetes, mycoplasmas, chlamydiae, and rickettsial agents"
      sectionCode="INF-04"
      category="Bacterial Diseases"
      topicId="bacterial-diseases"
      lessonId="spirochetal-atypical-bacterial-diseases"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "mycobacterial-diseases", "title": "Mycobacterial Diseases"}}
      nextLesson={{"id": "superficial-cutaneous-mycoses", "title": "Superficial & Cutaneous Mycoses"}}
    />
  );
};
