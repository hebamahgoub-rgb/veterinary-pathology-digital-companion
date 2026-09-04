import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface PoultryViralPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'pviral-overview',
    title: "1. Overview & Avian Viral Flock Pathology",
    shortTitle: "1. Overview",
    category: "Poultry Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Viral Diseases of Poultry</h1>
      <div class="hero-subtitle">Oncogenic, respiratory, immunosuppressive, and systemic epizootic viruses</div>
      <p class="hero-body">
        Avian viral pathogens represent some of the most economically devastating and high-consequence agents in veterinary medicine. Pathological mechanisms encompass neoplastic lymphocyte transformation, severe endothelial disruption, mucosal deciliation, syncytia formation, intra-nuclear/intra-cytoplasmic inclusion body development, and targeted destruction of primary lymphoid organs (bursa of Fabricius and thymus).
      </p>
    </header>

    <!-- 2. QUICK JUMP INDEX -->
    <nav class="organism-nav" aria-label="Organism Index">
      <h2>Major Conditions Covered</h2>
      <div class="organism-pills">
        <button type="button" class="pill" onclick="document.getElementById('mareks').scrollIntoView({behavior:'smooth', block:'start'})">Marek's Disease (MDV)</button>
        <button type="button" class="pill" onclick="document.getElementById('hpai-ndv').scrollIntoView({behavior:'smooth', block:'start'})">Avian Influenza (HPAI) &amp; Newcastle Disease (NDV)</button>
        <button type="button" class="pill" onclick="document.getElementById('ibd').scrollIntoView({behavior:'smooth', block:'start'})">Infectious Bursal Disease (IBD / Gumboro)</button>
        <button type="button" class="pill" onclick="document.getElementById('respiratory-viruses').scrollIntoView({behavior:'smooth', block:'start'})">IBV &amp; ILTV Respiratory Infections</button>
        <button type="button" class="pill" onclick="document.getElementById('fowlpox').scrollIntoView({behavior:'smooth', block:'start'})">Fowlpox (Cutaneous &amp; Diphtheritic)</button>
        <button type="button" class="pill" onclick="document.getElementById('cav').scrollIntoView({behavior:'smooth', block:'start'})">Chicken Anemia Virus (CAV)</button>
        <button type="button" class="pill" onclick="document.getElementById('epidemic-tremor').scrollIntoView({behavior:'smooth', block:'start'})">Epidemic Tremor (Avian Encephalomyelitis)</button>
        <button type="button" class="pill" onclick="document.getElementById('viral-arthritis').scrollIntoView({behavior:'smooth', block:'start'})">Viral Arthritis (Reovirus)</button>
        <button type="button" class="pill" onclick="document.getElementById('duck-hepatitis').scrollIntoView({behavior:'smooth', block:'start'})">Duck Viral Hepatitis</button>
        <button type="button" class="pill" onclick="document.getElementById('duck-plague').scrollIntoView({behavior:'smooth', block:'start'})">Duck Virus Enteritis (Duck Plague)</button>
        <button type="button" class="pill" onclick="document.getElementById('lymphoid-leukosis').scrollIntoView({behavior:'smooth', block:'start'})">Lymphoid Leukosis</button>
      </div>
    </nav>

    <!-- 3. DISEASE UNITS -->
    <section class="section-block" aria-labelledby="pathogens-heading">
      <h2 id="pathogens-heading">Pathological Profiles</h2>

      <!-- UNIT 1: MAREK'S DISEASE -->`,
  },
  {
    id: 'pviral-neoplastic',
    title: "2. Neoplastic Viral Diseases (Marek's Disease & Lymphoid Leukosis)",
    shortTitle: "2. Marek's & Leukosis",
    category: "Poultry Diseases",
    html: `<article id="mareks" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Marek's Disease</h3>
          <div class="disease-subtitle">Marek's Disease Herpesvirus (MDV / Alphaherpesvirinae) — Lymphoid neoplasia and peripheral neuropathy</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Gallid alphaherpesvirus 2 (MDV-1).</li>
              <li>Feather follicle epithelium (shedding site), T-lymphocytes, peripheral nerves, and visceral organs.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation of dander conidia; cytolytic infection of B-cells followed by latent infection and neoplastic transformation of T-cells.</li>
              <li>Infiltration of transformed lymphoblasts into sciatic nerves, iris, skin, and visceral tissue.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Asymmetric enlargement and loss of striations in sciatic nerves, "grey eye" (iridocyclitis), visceral tumors.</li>
              <li><strong>Micro:</strong> Pleomorphic mononuclear cell infiltration (lymphocytes, lymphoblasts, plasma cells) into peripheral nerves and viscera.</li>
            </ul>
          </div>
        </div>
              <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1w-QF2-k46-slLhwaYH-X3TC5zjh4e9nS" alt="Enlargement and loss of normal architecture of the sciatic nerve due to lymphoid infiltration in Marek’s Disease" loading="lazy">
            <figcaption>Enlargement and loss of normal architecture of the sciatic nerve due to lymphoid infiltration in Marek’s Disease.</figcaption>
          </figure>
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1z25wuaOP6MOBUslLdzm6hAKTaMy7lhdP" alt="Visceral lymphoid tumors in Marek’s Disease affecting liver, spleen, and gonads, representing neoplastic transformation of T-lymphocytes" loading="lazy">
            <figcaption>Visceral lymphoid tumors in Marek’s Disease affecting liver, spleen, and gonads, representing neoplastic transformation of T-lymphocytes.</figcaption>
          </figure>
        </div>
      </article>

<article id="lymphoid-leukosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Lymphoid Leukosis</h3>
          <div class="disease-subtitle">Avian retrovirus — B-cell neoplasia arising from the bursa of Fabricius</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Age</h4>
            <ul>
              <li>Part of the leukosis/sarcoma group caused by RNA avian retroviruses.</li>
              <li>Typically affects chickens four months of age or older.</li>
              <li>The neoplasm begins in the bursa of Fabricius and may metastasize to internal organs.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross Lesions</h4>
            <ul>
              <li>Nodular or diffuse tumors in the liver, spleen, and bursa of Fabricius.</li>
              <li>Lungs, kidneys, gonads, and heart may also be involved.</li>
              <li>Tumors are soft, smooth, glistening, and grayish-white on cut surface.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Microscopic Lesions &amp; Differential</h4>
            <ul>
              <li>Tumors are focal or multicentric and tend to displace and compress adjacent organ cells.</li>
              <li>Composed predominantly of relatively uniform lymphoblasts of a similar developmental stage.</li>
              <li>In contrast with Marek's disease, neural involvement is absent and the neoplastic population is B-lymphocytic rather than pleomorphic T-lymphocytic.</li>
            </ul>
          </div>
        </div>
              <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1EnjPCpEHFSqjFNDYnD7Nx4ZS2Lghjxne" alt="Bursal tumors and follicular atrophy associated with Avian Leukosis, primarily affecting B-cell populations" loading="lazy">
            <figcaption>Bursal tumors and follicular atrophy associated with Avian Leukosis, primarily affecting B-cell populations.</figcaption>
          </figure>
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1O7Jod8g1MchvECpE9c8petIk5YdlySdO" alt="Comparison of Marek’s Disease and Lymphoid Leukosis" loading="lazy">
            <figcaption>Comparison of Marek’s Disease and Lymphoid Leukosis. Marek’s Disease features nerve enlargement and irregular visceral lymphoid tumors derived from T-cells. Lymphoid Leukosis presents with smooth bursal tumors and uniform visceral nodules arising from neoplastic B-cells, without peripheral nerve involvement.</figcaption>
          </figure>
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1pUciHpKDNAd2xA5SRb6XSel3YpVwolhm" alt="Diagnostic comparison of Marek’s Disease and Lymphoid Leukosis" loading="lazy">
            <figcaption>Diagnostic comparison of Marek’s Disease and Lymphoid Leukosis. Marek’s Disease is characterized by peripheral nerve enlargement, irregular visceral tumors, and occasional ocular changes. Lymphoid Leukosis presents with smooth bursal tumors and uniform visceral nodules without nerve involvement. Nerve enlargement and skin lesions strongly support Marek’s, while bursal neoplasia in older birds is typical of Lymphoid Leukosis.</figcaption>
          </figure>
        </div>
      </article>`,
  },
  {
    id: 'pviral-hpai-ndv',
    title: "3. Systemic Vaso-Destructive Viruses (HPAI & Newcastle Disease)",
    shortTitle: "3. HPAI & Newcastle",
    category: "Poultry Diseases",
    html: `<article id="hpai-ndv" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Avian Influenza (HPAI) &amp; Newcastle Disease (NDV)</h3>
          <div class="disease-subtitle">Orthomyxovirus &amp; Paramyxovirus — Systemic endothelial disruption and pantropic necrosis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>High Pathogenicity Avian Influenza (HPAI H5/H7); Velogenic Viscerotropic Newcastle Disease Virus (AOAV-1).</li>
              <li>Vascular endothelial cells, central nervous system, respiratory tract, and gastrointestinal mucosa.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Cleavage of viral hemagglutinin/fusion proteins by ubiquitous intracellular furin proteases.</li>
              <li>Multisystemic endothelial lysis drives microvascular thrombosis, diffuse edema, DIC, and rapid organ failure.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Cyanosis/edema of comb and wattles, petechiae on proventricular mucosa, cecal tonsil necrosis, facial edema.</li>
              <li><strong>Micro:</strong> Systemic endothelial necrosis, multifocal neuronal necrosis with gliosis, perivascular cuffing, widespread hemorrhage.</li>
            </ul>
          </div>
        </div>
              <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1n99NMqvew9Sys5IDhnmHjBrZS1lJ5_pU" alt="Pathogenesis of Newcastle Disease showing viral entry through the respiratory tract, replication in epithelial cells, systemic spread, and characteristic lesions including tracheal necrosis, proventricular hemorrhages, and neurological dysfunction" loading="lazy">
            <figcaption>Pathogenesis of Newcastle Disease showing viral entry through the respiratory tract, replication in epithelial cells, systemic spread, and characteristic lesions including tracheal necrosis, proventricular hemorrhages, and neurological dysfunction.</figcaption>
          </figure>
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1e-qnkoG_8IslBuGBO6zSnHmVdNOtcWZ7" alt="Multisystemic lesions of highly pathogenic avian influenza including cyanosis, cutaneous petechiae, pancreatic necrosis, pulmonary edema, and proventricular hemorrhages" loading="lazy">
            <figcaption>Multisystemic lesions of highly pathogenic avian influenza including cyanosis, cutaneous petechiae, pancreatic necrosis, pulmonary edema, and proventricular hemorrhages.</figcaption>
          </figure>
        </div>
      </article>`,
  },
  {
    id: 'pviral-immunosuppressive',
    title: "4. Immunosuppressive Viruses (Infectious Bursal Disease & CAV)",
    shortTitle: "4. IBD & CAV",
    category: "Poultry Diseases",
    html: `<article id="ibd" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Infectious Bursal Disease (Gumboro)</h3>
          <div class="disease-subtitle">Avibirnavirus (IBDV) — Targeted B-lymphocyte lysis and bursal atrophy</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Infectious Bursal Disease Virus (IBDV Serotype 1; Birnaviridae).</li>
              <li>Immature dividing IgM+ B-lymphocytes within the bursa of Fabricius.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Oral ingestion leading to viral replication in gut-associated lymphoid tissue (GALT) and primary viremia.</li>
              <li>Massive cytolytic destruction of bursal follicles triggers severe immunodeficiency and secondary infections.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Edematous, yellowish cream-colored bursa with mucosal striations and hemorrhages, progressing to severe atrophy.</li>
              <li><strong>Micro:</strong> Lymphoid follicular necrosis, lymphocytic depletion, cyst formation, and reticuloendothelial cell hyperplasia in the bursa.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="/images/poultry_viral_1.jpeg" alt="Diagnostic lesions of Infectious Bursal Disease include bursal enlargement with edema and hemorrhage, lymphoid follicle necrosis, muscular petechiae, and nephrosis with urate deposits" loading="lazy">
            <figcaption>Diagnostic lesions of Infectious Bursal Disease include bursal enlargement with edema and hemorrhage, lymphoid follicle necrosis, and muscular petechiae. Nephrosis with urate deposits may occur in severe cases. The hallmark lesion is lymphoid depletion of the bursa of Fabricius, which distinguishes IBD from other immunosuppressive diseases.</figcaption>
          </figure>
        </div>
      </article>

<article id="cav" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Chicken Anemia Virus (CAV)</h3>
          <div class="disease-subtitle">Gyrovirus (Anelloviridae) — Erythroblast/thymocyte apoptosis, aplastic anemia, and blue wing disease</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Chicken Anemia Virus (CAV; non-enveloped circular ssDNA virus).</li>
              <li>Hemocytoblasts in bone marrow and cortical thymocytes in the thymus.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Vertical or horizontal transmission in young chicks lacking maternal antibodies.</li>
              <li>Viral apoptin protein induces widespread apoptosis of precursor erythroid and myeloid cells, yielding severe pan-immunosuppression and pan-myelophthisis.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Pale fatty bone marrow, severe thymic involution, watery blood, subcutaneous/intramuscular hemorrhages ("blue wing").</li>
              <li><strong>Micro:</strong> Severe depletion and apoptosis of thymic cortical lymphocytes and bone marrow hematopoietic stem cells.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="/images/poultry_viral_2.jpeg" alt="Diagnostic lesions of Chicken Infectious Anemia include severe anemia, bone marrow aplasia, thymic and bursal atrophy, and subcutaneous hemorrhages" loading="lazy">
            <figcaption>Diagnostic lesions of Chicken Infectious Anemia include severe anemia, bone marrow aplasia, thymic and bursal atrophy, and subcutaneous hemorrhages. The combination of profound marrow depletion and immunosuppression is characteristic of CIA and helps differentiate it from IBD and other causes of immunosuppression in young chicks.</figcaption>
          </figure>
        </div>
      </article>`,
  },
  {
    id: 'pviral-respiratory',
    title: "5. Respiratory Viruses (Infectious Bronchitis & Laryngotracheitis)",
    shortTitle: "5. IBV & ILTV",
    category: "Poultry Diseases",
    html: `<article id="respiratory-viruses" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Infectious Bronchitis (IBV) &amp; Laryngotracheitis (ILTV)</h3>
          <div class="disease-subtitle">Coronavirus &amp; Alphaherpesvirus — Tracheal deciliation, syncytia, and intranuclear inclusions</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Infectious Bronchitis Virus (IBV; Gammacoronavirus); Infectious Laryngotracheitis Virus (ILTV; Gallid alphaherpesvirus 1).</li>
              <li>Tracheal ciliated epithelium, renal tubular epithelium (nephropathogenic IBV), and oviduct.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inhalation of droplets; cytolytic infection causes desquamation of ciliated respiratory cells.</li>
              <li>ILTV induces cell-to-cell fusion forming multinucleated syncytia with intranuclear inclusion bodies.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Tracheal mucosal hemorrhage with blood casts (ILTV); serous-to-caseous tracheal exudate and pale swollen kidneys (IBV).</li>
              <li><strong>Micro:</strong> Syncytia with <strong>Cowdry A intranuclear inclusion bodies</strong> (ILTV); deciliation, epithelial hyperplasia, and interstitial nephritis (IBV).</li>
            </ul>
          </div>
        </div>
              <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Y2ZNKAIpSpU3kD4YDnYLe_dyOXn0nWZz" alt="Respiratory lesions of Infectious Bronchitis characterized by sinusitis, tracheal mucosal thickening, loss of cilia, and serous to mucoid exudate" loading="lazy">
            <figcaption>Respiratory lesions of Infectious Bronchitis characterized by sinusitis, tracheal mucosal thickening, loss of cilia, and serous to mucoid exudate.</figcaption>
          </figure>
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1KgS0YkILvP5pjvEoXK3iiEPhy1wfd3jp" alt="Diphtheritic membranes and hemorrhagic tracheitis typical of Infectious Laryngotracheitis, often causing severe respiratory distress and airway obstruction" loading="lazy">
            <figcaption>Diphtheritic membranes and hemorrhagic tracheitis typical of Infectious Laryngotracheitis, often causing severe respiratory distress and airway obstruction.</figcaption>
          </figure>
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Lf0dY7QIUDADbPb8PJepaoHeFX0h1Yrk" alt="Comparison of IBV and ILT" loading="lazy">
            <figcaption>Comparison of IBV and ILT. IBV causes upper respiratory inflammation with serous exudate, loss of cilia, and may produce nephritis. ILT produces severe hemorrhagic tracheitis with diphtheritic membranes and airway obstruction due to herpesvirus-induced necrosis.</figcaption>
          </figure>
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1pUciHpKDNAd2xA5SRb6XSel3YpVwolhm" alt="Diagnostic comparison of IBV and ILT" loading="lazy">
            <figcaption>Diagnostic comparison of IBV and ILT. IBV typically causes mild to moderate respiratory lesions with serous exudate, loss of cilia, and may produce nephritis in affected flocks. ILT is distinguished by severe hemorrhagic tracheitis, diphtheritic membranes, and caseous plugs that obstruct the airway. The presence of tracheal blood clots and diphtheritic membranes strongly favors ILT over IBV.</figcaption>
          </figure>
        </div>
      </article>`,
  },
  {
    id: 'pviral-pox-reovirus',
    title: "6. Cutaneous & Musculoskeletal Viruses (Fowlpox & Viral Arthritis)",
    shortTitle: "6. Fowlpox & Reovirus",
    category: "Poultry Diseases",
    html: `<article id="fowlpox" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Fowlpox</h3>
          <div class="disease-subtitle">Avipoxvirus — Epithelial hyperplasia, Bollinger bodies, and dry/wet forms</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li>Fowlpox Virus (Poxviridae family).</li>
              <li>Non-feathered cutaneous epithelium (dry form) and upper respiratory/digestive mucous membranes (wet form).</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Mechanical transmission via biting insects (mosquitoes) or mucosal abrasion.</li>
              <li>Viral replication in stratum spinosum cells induces marked ballooning degeneration and epidermal proliferation.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Papules, vesicles, and dark scabs on comb/wattles (dry form); diphtheritic yellow membranes in mouth/trachea (wet form).</li>
              <li><strong>Micro:</strong> Severe epidermal hypertrophy/hyperplasia with large, eosinophilic <strong>intracytoplasmic inclusion bodies (Bollinger bodies)</strong>.</li>
            </ul>
          </div>
        </div>
              <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Xbx5meTcnuu5k4EJfvtQCqGNzYI-jElu" alt="Comparison of cutaneous fowlpox (nodular crusting lesions) and diphtheritic fowlpox (necrotic plaques in mucous membranes)" loading="lazy">
            <figcaption>Comparison of cutaneous fowlpox (nodular crusting lesions) and diphtheritic fowlpox (necrotic plaques in mucous membranes).</figcaption>
          </figure>
        </div>
      </article>

<article id="viral-arthritis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Viral Arthritis (Reoviral Tenosynovitis)</h3>
          <div class="disease-subtitle">Avian reovirus — Arthritis, tenosynovitis, lameness, and growth retardation</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Clinical Features</h4>
            <ul>
              <li>Caused by a double-stranded RNA reovirus.</li>
              <li>Characterized by stunted growth, lameness, and enlargement of the hock joint.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross Lesions</h4>
            <ul>
              <li>Swelling of the foot pad and hock joint with straw-colored or blood-tinged exudate.</li>
              <li>Swelling of gastrocnemius or digital flexor tendons.</li>
              <li>Small erosions of articular cartilage may coalesce and extend into underlying bone.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Microscopic Lesions</h4>
            <ul>
              <li>Acute tendon lesions show edema, coagulative necrosis, and heterophilic infiltration.</li>
              <li>Chronic lesions may show replacement of tendons by granulation and fibrous tissue.</li>
              <li>Synovial hyperplasia and hypertrophy with heterophils and macrophages; cartilage erosion may be associated with granulation pannus.</li>
            </ul>
          </div>
        </div>
              <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1I-mnoNLhF53sMLsKXA7hW6WfVSkjKoN8" alt="Fibrinous arthritis and tenosynovitis associated with Avian Reovirus infection, commonly affecting the hock joints of broilers" loading="lazy">
            <figcaption>Fibrinous arthritis and tenosynovitis associated with Avian Reovirus infection, commonly affecting the hock joints of broilers.</figcaption>
          </figure>
        </div>
      </article>`,
  },
  {
    id: 'pviral-neurotropic',
    title: "7. Neurotropic Viruses (Epidemic Tremor / Avian Encephalomyelitis)",
    shortTitle: "7. Epidemic Tremor",
    category: "Poultry Diseases",
    html: `<article id="epidemic-tremor" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Epidemic Tremor (Avian Encephalomyelitis)</h3>
          <div class="disease-subtitle">Picornavirus infection — Neurologic disease of young chickens and turkeys</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Susceptibility</h4>
            <ul>
              <li>Caused by an RNA enterovirus of the Picornaviridae family.</li>
              <li>Primarily affects young chickens and turkeys, especially chicks around two weeks of age.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Clinical Features</h4>
            <ul>
              <li>Dullness, ataxia, loss of control of speed and gait, and falling onto the side.</li>
              <li>Tremors of the head and neck, often becoming more evident when chicks are excited.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Whitish areas may be present in the proventricular muscle.</li>
              <li><strong>Micro:</strong> Non-suppurative encephalitis with perivascular cuffing and gliosis.</li>
              <li>Dense lymphocytic aggregates among proventricular muscle fibers are a characteristic lesion; pancreatic lymphocytic infiltration may also occur.</li>
            </ul>
          </div>
        </div>
              <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1A_F1R5mZGxbmth7VHUt_FJ8vGX-BWJKs" alt="Clinical signs of Avian Encephalomyelitis in chicks, including tremors and ataxia, with associated lymphocytic lesions in the brainstem" loading="lazy">
            <figcaption>Clinical signs of Avian Encephalomyelitis in chicks, including tremors and ataxia, with associated lymphocytic lesions in the brainstem.</figcaption>
          </figure>
        </div>
      </article>`,
  },
  {
    id: 'pviral-waterfowl-diagnostic',
    title: "8. Waterfowl Viruses (Duck Plague & Hepatitis) & Diagnostic Key",
    shortTitle: "8. Waterfowl & Key",
    category: "Poultry Diseases",
    html: `<article id="duck-plague" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Duck Virus Enteritis (Duck Plague)</h3>
          <div class="disease-subtitle">Herpesviral disease of ducks and geese — Hemorrhagic and necrotizing systemic lesions</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Clinical Features</h4>
            <ul>
              <li>An acute herpesviral disease of ducks and geese.</li>
              <li>Sudden persistent mortality, photophobia, pasted eyelids, inappetence, thirst, depression, and watery diarrhea may occur.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross Lesions</h4>
            <ul>
              <li>Petechial and ecchymotic hemorrhages on the myocardium, mesentery, epicardium, and endocardium.</li>
              <li>Hemorrhages may also occur on liver, spleen, kidneys, and lungs.</li>
              <li>Gizzard and intestinal lumina may contain blood, with hemorrhagic macular lesions in the digestive mucosa.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Microscopic Lesions</h4>
            <ul>
              <li>Disruption of endothelial lining with necrosis of small blood vessel walls.</li>
              <li>Widespread hemorrhage in multiple organs.</li>
              <li>Digestive mucosal hemorrhages may coalesce, with epithelial necrosis and elevation into the lumen; hepatic degeneration and necrosis may occur.</li>
            </ul>
          </div>
        </div>
              <div class="illustration-gallery" aria-label="Illustrations">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1xv1WSxzywoXT7NJcr-kxug71xENimW73" alt="Hemorrhagic enteritis and mucosal ulceration characteristic of Duck Viral Enteritis caused by anatid herpesvirus" loading="lazy">
            <figcaption>Hemorrhagic enteritis and mucosal ulceration characteristic of Duck Viral Enteritis caused by anatid herpesvirus.</figcaption>
          </figure>
        </div>
      </article>

<article id="duck-hepatitis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Duck Viral Hepatitis</h3>
          <div class="disease-subtitle">Picornavirus infection — Acute, highly fatal hepatitis of young ducklings</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Host</h4>
            <ul>
              <li>Caused by an RNA picornavirus.</li>
              <li>Young ducklings, approximately 2 days to 3 weeks of age, are the susceptible natural host.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Clinical Features</h4>
            <ul>
              <li>Peracute disease with sudden collapse, paddling movements of the legs, and rapid death.</li>
              <li>The head may be stretched upward and backward (opisthotonos).</li>
              <li>Mortality may exceed 90% in ducklings younger than one week.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Gross &amp; Microscopic Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Enlarged liver with petechial hemorrhages.</li>
              <li><strong>Micro:</strong> Focal hepatic necrosis, bile duct hyperplasia, inflammatory-cell infiltration, and hemorrhage.</li>
            </ul>
          </div>
        </div>
      </article>

<section class="section-block">
<aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Avian Viral Diagnostic Key:</strong> Inclusion bodies provide crucial histopathological clues: look for <strong>intranuclear inclusions</strong> in tracheal epithelium in early ILT, and <strong>large intracytoplasmic Bollinger bodies</strong> in Fowlpox. For neurologic disease, epidemic tremor is associated with non-suppurative encephalitis and characteristic lymphocytic aggregates in proventricular muscle. Differentiate <strong>Marek's disease</strong> from <strong>lymphoid leukosis</strong>: Marek's commonly involves peripheral nerves and pleomorphic T-lymphoid populations, whereas lymphoid leukosis typically produces bursal/visceral B-cell tumors without neural involvement.
      </aside>
</section>`,
  },
];

export const PoultryViralPage: React.FC<PoultryViralPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Viral Diseases of Poultry"
      subtitle="Marek's disease, avian influenza, Newcastle disease, IBV, and ILTV"
      sectionCode="PLT-02"
      category="Poultry Diseases"
      topicId="poultry-pathology"
      lessonId="viral-diseases-poultry"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "bacterial-diseases-poultry", "title": "Bacterial Diseases of Poultry"}}
      nextLesson={{"id": "mycotic-diseases-poultry", "title": "Mycotic Diseases & Mycotoxicoses of Poultry"}}
    />
  );
};
