import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface MycobacterialPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'myco-overview',
    title: "1. Overview & Acid-Fast Cell Wall Structure",
    shortTitle: "1. Overview & Cell Wall",
    category: "Bacterial Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Mycobacterial Diseases</h1>
      <div class="hero-subtitle">Acid-fast bacilli, intracellular survival, and granulomatous inflammation</div>
      <p class="hero-body">
        Mycobacteria possess a unique lipid-rich cell wall containing mycolic acids that resist enzymatic degradation and standard Gram staining. In veterinary pathology, these chronic intracellular pathogens evoke distinct granulomatous host responses characterized by epithelioid macrophages, Langhans giant cells, caseous necrosis, and persistent tissue remodeling.
      </p>
    </header>

    <!-- 2. QUICK JUMP INDEX -->
    <nav class="organism-nav" aria-label="Organism Index">
      <h2>Major Conditions Covered</h2>
      <div class="organism-pills">
        <a href="#bovine-tb" class="pill">Bovine Tuberculosis (M. bovis)</a>
        <a href="#johnes" class="pill">Johne's Disease / Paratuberculosis</a>
        <a href="#avian-tb" class="pill">Avian Mycobacteriosis</a>
        <a href="#atypical" class="pill">Feline Leprosy &amp; Atypical Granulomas</a>
      </div>
    </nav>

    <!-- 3. DISEASE UNITS -->
    <section class="section-block" aria-labelledby="pathogens-heading">
      <h2 id="pathogens-heading">Pathological Profiles</h2>

      <!-- UNIT 1: BOVINE TUBERCULOSIS -->`,
  },
  {
    id: 'myco-bovine-tb',
    title: "2. Bovine Tuberculosis (Mycobacterium bovis)",
    shortTitle: "2. Bovine TB",
    category: "Bacterial Diseases",
    html: `<article id="bovine-tb" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Bovine Tuberculosis</h3>
          <div class="disease-subtitle"><em>Mycobacterium bovis</em> — Zoonotic caseous granulomatous inflammation</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Mycobacterium bovis</em> (broad host range: cattle, cervids, badgers, humans).</li>
              <li>Lungs, retropharyngeal &amp; mediastinal lymph nodes, pleura, and liver.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation/ingestion leading to phagocytosis by alveolar macrophages.</li>
              <li>Inhibition of phagolysosomal fusion; cell-mediated immune reaction drives tubercle formation.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Firm nodules with yellowish caseous to calcified centers ("pearl disease" on pleura).</li>
              <li><strong>Micro:</strong> Tubercles with central caseous necrosis, mineral deposits, epithelioid cells, and Langhans giant cells.</li>
            </ul>
          </div>
        </div>
        <div class="lesion-gallery">
          <h4 class="lesion-gallery-title">Lesion Gallery</h4>
          <div class="lesion-grid">

            <figure class="lesion-figure">
              <img referrerpolicy="no-referrer"
                src="https://lh3.googleusercontent.com/d/1EWrknnFValpDplCTw6YVQ87Bvkw7SDvi"
                alt="Bovine lung containing multifocal pale tuberculous lesions"
                loading="lazy">
              <figcaption>
                <span class="image-label">Gross pathology · Lung</span><br>
                Bovine tuberculosis. Multifocal pale, firm tuberculous lesions
                involving the pulmonary parenchyma.
                <span class="image-credit">
                  Image: laboratorio diagnostica ancona IZSUM,
                  <a href="https://commons.wikimedia.org/wiki/File:Bovine%3B_lung_tuberculosis_(27662385872).jpg"
                     target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>,
                  CC BY 2.0.
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </article>`,
  },
  {
    id: 'myco-johnes',
    title: "3. Johne's Disease / Paratuberculosis (MAP)",
    shortTitle: "3. Johne's Disease",
    category: "Bacterial Diseases",
    html: `<article id="johnes" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Johne's Disease (Paratuberculosis)</h3>
          <div class="disease-subtitle"><em>Mycobacterium avium</em> subsp. <em>paratuberculosis</em> (MAP) — Diffuse granulomatous enteritis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>M. avium</em> subsp. <em>paratuberculosis</em> (ruminants: cattle, sheep, goats).</li>
              <li>Distal ileum, ileocecal valve, mesenteric lymph nodes, and lymphatic vessels.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Uptake via intestinal M cells followed by intracellular replication in subepithelial macrophages.</li>
              <li>Massive macrophage accumulation causes mucosal thickening, protein-losing enteropathy, and severe emaciation.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Thickened, corrugated "cerebriform" intestinal mucosa, cording of lymphatics, enlarged lymph nodes.</li>
              <li><strong>Micro:</strong> Diffuse mucosal infiltration by macrophages filled with acid-fast bacilli; multinucleated giant cells.</li>
            </ul>
          </div>
        </div>
        <div class="lesion-gallery">
          <h4 class="lesion-gallery-title">Lesion Gallery</h4>
          <div class="lesion-grid">

            <figure class="lesion-figure">
              <img referrerpolicy="no-referrer"
                src="https://lh3.googleusercontent.com/d/1p0Ip2oozBYF4ac_scgIOKCtTvieQgsSW"
                alt="Bovine ileum with thickened corrugated mucosa in Johne's disease"
                loading="lazy">
              <figcaption>
                <span class="image-label">Gross pathology · Ileum</span><br>
                Johne’s disease. Thickened and corrugated bovine ileal mucosa
                resulting from chronic granulomatous enteritis.
                <span class="image-credit">
                  Image: Genkinekowiki,
                  <a href="https://commons.wikimedia.org/wiki/File:Paratb_intestine.png"
                     target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>,
                  CC BY-SA 4.0.
                </span>
              </figcaption>
            </figure>

          </div>
        </div>
      </article>`,
  },
  {
    id: 'myco-avian-tb',
    title: "4. Avian Mycobacteriosis (M. avium complex)",
    shortTitle: "4. Avian TB",
    category: "Bacterial Diseases",
    html: `<article id="avian-tb" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Avian Mycobacteriosis</h3>
          <div class="disease-subtitle"><em>Mycobacterium avium</em> complex (MAC) — Systemic visceral granulomas</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Mycobacterium avium</em> subsp. <em>avium</em> (domestic poultry, wild birds, swine).</li>
              <li>Intestines, liver, spleen, and bone marrow (rarely lungs in birds).</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Oral ingestion of environmental bacilli causing primary intestinal mucosal infection.</li>
              <li>Hematogenous dissemination via portal circulation to liver, spleen, and skeleton.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Multifocal greyish-white firm visceral nodules, splenomegaly, hepatomegaly.</li>
              <li><strong>Micro:</strong> Classical avian tubercles with prominent central eosinophilic necrosis and massive clusters of intracellular acid-fast rods.</li>
            </ul>
          </div>
        </div>
        <div class="lesion-gallery">
          <h4 class="lesion-gallery-title">Lesion Gallery</h4>
          <div class="lesion-grid">

            <figure class="lesion-figure">
              <img referrerpolicy="no-referrer"
                src="https://lh3.googleusercontent.com/d/18MHKMYQPyeo2dzB3gdh3gTMkvhqDlcyA"
                alt="Japanese quail with avian tuberculosis affecting liver spleen and intestines"
                loading="lazy">
              <figcaption>
                <span class="image-label">Gross pathology · Multiple organs</span><br>
                Avian mycobacteriosis in a Japanese quail. Tuberculous lesions involve
                the liver, spleen and intestinal tract, illustrating systemic spread.
                <span class="image-credit">
                  Image: Roman Halouzka,
                  <a href="https://commons.wikimedia.org/wiki/File:Avian_tuberculosis_3.jpg"
                     target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>,
                  CC BY-SA 3.0.
                </span>
              </figcaption>
            </figure>

            <figure class="lesion-figure">
              <img referrerpolicy="no-referrer"
                src="https://lh3.googleusercontent.com/d/1nQ8zYHU3020-yqMQW5XblpXw7Vymlj5W"
                alt="Vulture liver containing multiple pale avian tuberculosis nodules"
                loading="lazy">
              <figcaption>
                <span class="image-label">Gross pathology · Liver</span><br>
                Avian mycobacteriosis. Multiple pale granulomatous nodules are
                distributed throughout the hepatic parenchyma.
                <span class="image-credit">
                  Image: Roman Halouzka,
                  <a href="https://commons.wikimedia.org/wiki/File:Avian_tuberculosis_1.jpg"
                     target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>,
                  CC BY-SA 3.0.
                </span>
              </figcaption>
            </figure>

          </div>
        </div>
      </article>`,
  },
  {
    id: 'myco-atypical-feline',
    title: "5. Feline Leprosy & Opportunistic Mycobacterioses",
    shortTitle: "5. Feline Leprosy",
    category: "Bacterial Diseases",
    html: `<article id="atypical" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Feline Leprosy &amp; Opportunistic Mycobacteriosis</h3>
          <div class="disease-subtitle">Nontuberculous Mycobacteria (NTM) — Cutaneous &amp; subcutaneous pyogranulomas</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Mycobacterium lepraemurium</em>, <em>M. fortuitum</em>, <em>M. chelonae</em>, <em>M. ulcerans</em>.</li>
              <li>Skin, subcutaneous adipose tissue, panniculus, and peripheral lymph nodes.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inoculation via bite wounds, soil contamination, or trauma.</li>
              <li>Environmental saprophytes induce chronic non-healing panniculitis and nodular skin disease.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Ulcerated subcutaneous nodules, draining tracts, thick fibrous panniculitis.</li>
              <li><strong>Micro:</strong> Pyogranulomatous inflammation with neutrophils, lipid vacuoles, and variable numbers of acid-fast bacilli.</li>
            </ul>
          </div>
        </div>
        <div class="lesion-gallery">
          <h4 class="lesion-gallery-title">Lesion Gallery</h4>
          <div class="lesion-grid">

            <figure class="lesion-figure">
              <img referrerpolicy="no-referrer"
                src="https://lh3.googleusercontent.com/d/1DTfulP9vpR29PioRmytJ22izh1Lur-mL"
                alt="Feline leprosy showing nodular lesions on skin and periocular tissue"
                loading="lazy">
              <figcaption>
                <span class="image-label">Clinical lesion · Skin and periocular tissues</span><br>
                Feline leprosy caused by Mycobacterium lepraemurium. Raised ulcerative and non-ulcerative nodules involve the periocular skin and adjacent tissues.
                <span class="image-credit">
                  Image: Ghielmetti et al., 2021, Pathogens 10:687,
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8226594/"
                     target="_blank" rel="noopener noreferrer">Pathogens</a>,
                  CC BY 4.0.
                </span>
              </figcaption>
            </figure>

            <figure class="lesion-figure">
              <img referrerpolicy="no-referrer"
                src="https://lh3.googleusercontent.com/d/1e6oD_rF8hQL3wjs7G4DMtqR3sfbNDVLy"
                alt="Feline leprosy cytology showing macrophages containing numerous intracellular acid-fast bacilli"
                loading="lazy">
              <figcaption>
                <span class="image-label">Cytology · Fine-needle aspirate</span><br>
                Fine-needle aspirate from a feline periocular lesion showing macrophages containing numerous intracytoplasmic bacilli (A); Ziehl–Neelsen staining confirms numerous acid-fast organisms (B).
                <span class="image-credit">
                  Image: Ghielmetti et al., 2021, Pathogens 10:687,
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8226594/"
                     target="_blank" rel="noopener noreferrer">Pathogens</a>,
                  CC BY 4.0.
                </span>
              </figcaption>
            </figure>

          </div>
        </div>
      </article>`,
  },
  {
    id: 'myco-gallery-diagnostic',
    title: "6. Educational Illustrations & Diagnostic Approach",
    shortTitle: "6. Gallery & Diagnostic Key",
    category: "Bacterial Diseases",
    html: `<!-- EDUCATIONAL ILLUSTRATIONS -->
    <section class="section-block" aria-labelledby="educational-illustrations-heading">
      <h2 id="educational-illustrations-heading">Educational Illustrations</h2>
      <p class="section-intro">
        Key visual patterns in mycobacterial disease, including granuloma morphology,
        acid-fast staining, comparative lesion patterns, and pathogenesis.
      </p>
      <div class="lesion-gallery">
        <div class="lesion-grid">
          <figure class="lesion-figure">
            <img referrerpolicy="no-referrer"
              src="https://lh3.googleusercontent.com/d/15qwZBFpTqZrkI7Hd36RP5LuSCZeLQ5p9"
              alt="Classic mycobacterial granuloma in a lymph node"
              loading="lazy">
            <figcaption>
              <span class="image-label">Illustration · Classic mycobacterial granuloma</span><br>
              Typical granuloma (“tubercle”) formed in bovine lymph nodes during Mycobacterium bovis infection. The lesion shows central caseous necrosis surrounded by epithelioid macrophages and Langhans-type multinucleated giant cells, with an outer rim of lymphocytes and a fibrous capsule. This organized structure reflects the host’s chronic cell-mediated immune response to persistent intracellular mycobacteria.
            </figcaption>
          </figure>
          <figure class="lesion-figure">
            <img referrerpolicy="no-referrer"
              src="https://lh3.googleusercontent.com/d/1alr7PazV9LehK-sPlPFwPYOccNwoosZN"
              alt="Ziehl-Neelsen stain demonstrating acid-fast mycobacteria"
              loading="lazy">
            <figcaption>
              <span class="image-label">Illustration · Ziehl–Neelsen stain</span><br>
              Ziehl–Neelsen stain highlighting acid-fast bacilli (AFB) within macrophages. Mycobacteria retain carbol-fuchsin dye due to their lipid-rich cell wall, appearing as bright red rods against a blue counterstain. This stain is essential for confirming mycobacterial infections in veterinary diagnostic pathology.
            </figcaption>
          </figure>
          <figure class="lesion-figure">
            <img referrerpolicy="no-referrer"
              src="https://lh3.googleusercontent.com/d/1IHsomBhs2Rd1fKY14AW-b6yhwG0ETmyF"
              alt="Diffuse granulomatous enteritis associated with Mycobacterium avium complex in a bird"
              loading="lazy">
            <figcaption>
              <span class="image-label">Illustration · Mycobacterium avium complex</span><br>
              Diffuse granulomatous enteritis in a bird infected with Mycobacterium avium complex (MAC). The intestinal wall is markedly thickened due to infiltration by foamy macrophages containing numerous mycobacteria. Unlike the well-organized granulomas of M. bovis, MAC lesions are often diffuse and poorly circumscribed.
            </figcaption>
          </figure>
          <figure class="lesion-figure">
            <img referrerpolicy="no-referrer"
              src="https://lh3.googleusercontent.com/d/15nl6v7nCnaA6L935Ax9AUtbXqqrObaHT"
              alt="Comparison of lesions caused by Mycobacterium bovis and atypical mycobacteria"
              loading="lazy">
            <figcaption>
              <span class="image-label">Illustration · Comparative lesion morphology</span><br>
              Comparison of lesion morphology between classical Mycobacterium bovis infection and atypical mycobacterial disease. M. bovis produces well-organized granulomas with central caseous necrosis, whereas atypical mycobacteria often cause diffuse granulomatous inflammation with abundant macrophages and minimal necrosis. Recognizing these patterns assists in differential diagnosis.
            </figcaption>
          </figure>
          <figure class="lesion-figure">
            <img referrerpolicy="no-referrer"
              src="https://lh3.googleusercontent.com/d/1KIPPTE_rwzzaK3TsGKelHkKh-X7c2fRW"
              alt="Diagram showing mycobacterial infection pathogenesis and immune response"
              loading="lazy">
            <figcaption>
              <span class="image-label">Illustration · Pathogenesis and immune response</span><br>
              Overview of mycobacterial pathogenesis. Mycobacteria enter the host via inhalation or ingestion and are phagocytosed by macrophages. Their lipid-rich cell wall enables intracellular survival, triggering a Th1-mediated immune response. Persistent infection leads to granuloma formation, which attempts to contain the organism but also contributes to chronic disease.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- 4. DIAGNOSTIC APPROACH PANEL -->
    <section class="section-block">
      <aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Mycobacterial Diagnostic Key:</strong> Mycobacteria do not stain reliably on standard H&amp;E or Gram stains. Demonstrating acid-fastness using <strong>Ziehl-Neelsen (ZN)</strong> or Fite-Faraco staining is essential. Distinguish paucibacillary forms (tuberculoid) from multibacillary forms (lepromatous/paratuberculosis) based on organism burden and host cell-mediated response.
      </aside>

      <div class="lesion-gallery">
        <div class="lesion-grid">
          <figure class="lesion-figure">
            <img referrerpolicy="no-referrer"
              src="https://lh3.googleusercontent.com/d/1O169oWBrDOmmT74egeiFbprVfXUd4kxL"
              alt="Ziehl-Neelsen stain demonstrating acid-fast bacilli"
              loading="lazy">
            <figcaption>
              <span class="image-label">Micrograph · Diagnostic Stain</span><br>
              Ziehl–Neelsen stain demonstrating red acid-fast bacilli against a blue counterstained background. Acid-fast staining supports a mycobacterial aetiology but does not independently identify the species.
              <span class="image-credit">
                Image: CDC, public domain, via
                <a href="https://commons.wikimedia.org/wiki/File:Mycobacterium_tuberculosis_Ziehl-Neelsen_stain.jpg"
                   target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.
              </span>
            </figcaption>
          </figure>
        </div>
      </div>`,
  },
];

export const MycobacterialPage: React.FC<MycobacterialPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Mycobacterial Diseases"
      subtitle="Acid-fast bacilli, granulomatous inflammation, bovine tuberculosis, and paratuberculosis"
      sectionCode="INF-03"
      category="Bacterial Diseases"
      topicId="bacterial-diseases"
      lessonId="mycobacterial-diseases"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "gram-negative-bacterial-diseases", "title": "Gram-Negative Bacterial Diseases"}}
      nextLesson={{"id": "spirochetal-atypical-bacterial-diseases", "title": "Spirochetal & Atypical Bacterial Diseases"}}
    />
  );
};
