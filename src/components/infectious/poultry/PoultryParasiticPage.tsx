import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface PoultryParasiticPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'ppara-overview',
    title: "1. Overview & Pathophysiology of Avian Parasitoses",
    shortTitle: "1. Overview",
    category: "Poultry Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Parasitic Diseases of Poultry</h1>
      <div class="hero-subtitle">Intestinal and renal coccidiosis, histomoniasis, helminthiasis, and ectoparasitosis</div>
      <p class="hero-body">
        Poultry parasites produce disease through epithelial destruction, hemorrhage, necrosis, nutrient loss, mechanical irritation, or blood feeding. The distribution of lesions is often diagnostically useful: coccidial species show strong site specificity, histomoniasis primarily targets the ceca and liver, helminths occupy characteristic portions of the respiratory or gastrointestinal tract, and ectoparasites produce recognizable skin, feather, and anemia-associated changes.
      </p>
    </header>

    <nav class="organism-nav" aria-label="Condition Index">
      <h2>Major Conditions Covered</h2>
      <div class="organism-pills">
        <a href="#chicken-coccidiosis" class="pill">Chicken Coccidiosis</a>
        <a href="#goose-coccidiosis" class="pill">Renal Coccidiosis of Geese</a>
        <a href="#histomoniasis" class="pill">Histomoniasis (Blackhead)</a>
        <a href="#syngamiasis" class="pill">Syngamiasis (Gapeworm)</a>
        <a href="#intestinal-nematodes" class="pill">Ascaridia &amp; Heterakis</a>
        <a href="#ectoparasites" class="pill">Mites &amp; Lice</a>
      </div>
    </nav>`,
  },
  {
    id: 'ppara-coccidiosis',
    title: "2. Avian Coccidioses (Chickens & Geese)",
    shortTitle: "2. Coccidiosis",
    category: "Poultry Diseases",
    html: `<article id="chicken-coccidiosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Coccidiosis in Chickens</h3>
          <div class="disease-subtitle"><em>Eimeria</em> spp. — Site-specific intestinal epithelial injury</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Site Specificity</h4>
            <ul>
              <li>Important species include <em>E. tenella</em> (ceca), <em>E. necatrix</em> (mid-small intestine), <em>E. acervulina</em> (upper small intestine), <em>E. maxima</em> (mid-small intestine), and <em>E. brunetti</em> (distal small intestine/rectum).</li>
              <li>Other recognized chicken species include <em>E. mitis</em> and <em>E. praecox</em>; pathogenicity and lesion severity vary by species and dose.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Birds ingest sporulated oocysts; intracellular asexual and sexual developmental stages multiply in intestinal tissues.</li>
              <li>Cell rupture and deeper mucosal invasion cause epithelial loss, inflammation, malabsorption, and—especially with <em>E. tenella</em> and <em>E. necatrix</em>—marked hemorrhage.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Blood-filled ceca and cecal cores with <em>E. tenella</em>; “salt-and-pepper” mid-intestinal lesions with <em>E. necatrix</em>; whitish plaques in the proximal intestine with <em>E. acervulina</em>.</li>
              <li><strong>Micro:</strong> Epithelial destruction with schizonts, gametocytes, and oocysts in affected mucosa, accompanied by hemorrhage and inflammatory infiltration.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1WOJprebO_d1lV_mQVfKmm4HDaJO7gzC6"
                 alt="Coccidiosis (Eimeria spp.)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Coccidiosis (Eimeria spp.)</span>
              Coccidiosis causing enteric hemorrhage and epithelial destruction, transmitted through ingestion of sporulated oocysts.
            </figcaption>
          </figure>
        </div>

      </article>

<article id="goose-coccidiosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Renal Coccidiosis of Geese</h3>
          <div class="disease-subtitle"><em>Eimeria truncata</em> — Renal tubular coccidiosis and urate retention</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Eimeria truncata</em> is the best-known cause of renal coccidiosis in geese.</li>
              <li>Developmental stages occur in renal tubular epithelium; young geese are most susceptible to severe disease.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Intracellular coccidial development damages renal tubular epithelium and distends tubules with oocysts and cellular debris.</li>
              <li>Severe tubular injury impairs renal function and may be accompanied by urate accumulation, dehydration, and systemic illness.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Enlarged pale-to-gray kidneys with multifocal yellow-white streaks or foci; urates may accumulate within affected tubules.</li>
              <li><strong>Micro:</strong> Dilated renal tubules containing numerous coccidial stages and oocysts, with tubular epithelial degeneration/necrosis and inflammatory reaction.</li>
            </ul>
          </div>
        </div>
      </article>`,
  },
  {
    id: 'ppara-histomoniasis',
    title: "3. Histomoniasis (Blackhead Disease / Enterohepatitis)",
    shortTitle: "3. Histomoniasis",
    category: "Poultry Diseases",
    html: `<article id="histomoniasis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Histomoniasis (Blackhead Disease)</h3>
          <div class="disease-subtitle"><em>Histomonas meleagridis</em> — Necrotizing typhlitis and hepatitis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Transmission</h4>
            <ul>
              <li><em>Histomonas meleagridis</em> is an anaerobic protozoal parasite; turkeys are particularly susceptible to severe disease.</li>
              <li>Transmission commonly occurs within eggs of the cecal nematode <em>Heterakis gallinarum</em>; earthworms may serve as paratenic hosts. Direct cloacal transmission can also occur in turkeys.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Histomonads invade the cecal wall, causing severe necrotizing inflammation, then spread to the liver mainly through the portal circulation.</li>
              <li>Hepatic invasion produces multifocal to coalescing necrosis with inflammatory reaction.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Thickened inflamed ceca containing caseous cores; characteristic circular depressed hepatic necrotic foci with raised margins.</li>
              <li><strong>Micro:</strong> Necrotizing typhlitis and hepatitis with round-to-ovoid histomonad trophozoites within affected tissues.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1NI0GUjzLMFO05lzJmJZRqHWx4HN-4FZM"
                 alt="Histomoniasis (Blackhead Disease)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Histomoniasis (Blackhead Disease)</span>
              Histomoniasis producing cecal and hepatic necrosis, transmitted through Heterakis eggs in contaminated soil.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'ppara-helminthiasis',
    title: "4. Avian Helminthiases (Syngamiasis & Intestinal Nematodiasis)",
    shortTitle: "4. Helminthiases",
    category: "Poultry Diseases",
    html: `<article id="syngamiasis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Syngamiasis (Gapeworm)</h3>
          <div class="disease-subtitle"><em>Syngamus trachea</em> — Tracheal nematodiasis and respiratory obstruction</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Syngamus trachea</em> inhabits the trachea of chickens, turkeys, game birds, and several other avian hosts.</li>
              <li>Adult male and female worms remain permanently joined, giving the characteristic Y-shaped appearance.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Infection follows ingestion of infective larvae or paratenic hosts such as earthworms; larvae migrate through the lungs before reaching the trachea.</li>
              <li>Attached adults cause mucosal irritation and hemorrhage; heavy burdens mechanically obstruct airflow and produce gaping or respiratory distress.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Red Y-shaped worms attached to tracheal mucosa with mucus, hyperemia, and focal hemorrhage.</li>
              <li><strong>Micro:</strong> Erosive to inflammatory tracheitis around attachment sites; lesions vary with parasite burden and chronicity.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1zhe0DBOXgnERxAuOn0cS3hgbRblDn4i6"
                 alt="Syngamiasis (Gapeworm)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Syngamiasis (Gapeworm)</span>
              Syngamiasis producing tracheal obstruction and respiratory distress, transmitted through larvae in earthworms or contaminated soil.
            </figcaption>
          </figure>
        </div>

      </article>

<article id="intestinal-nematodes" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Intestinal Nematodiasis</h3>
          <div class="disease-subtitle"><em>Ascaridia galli</em> &amp; <em>Heterakis gallinarum</em> — Intestinal parasitism and vector significance</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Aetiology &amp; Tropism</h4>
            <ul>
              <li><em>Ascaridia galli</em> is a common large roundworm of the small intestine; <em>Heterakis gallinarum</em> inhabits the ceca.</li>
              <li>Clinical disease is most likely with heavy burdens, young birds, or free-range/backyard exposure.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Larval and adult stages irritate intestinal mucosa and may impair growth or feed efficiency; heavy <em>Ascaridia</em> burdens can cause obstruction.</li>
              <li><em>Heterakis gallinarum</em> is especially important as the biological carrier of <em>Histomonas meleagridis</em>.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Adult worms visible in the affected intestinal segment; heavy infections may produce catarrhal enteritis, mucosal thickening, or luminal obstruction.</li>
              <li><strong>Micro:</strong> Variable mucosal inflammation and epithelial injury; lesions are generally nonspecific and must be interpreted with demonstration of worms or eggs.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Q-642nxj5GuZWLoXqF1npLUnzC5WQJU3"
                 alt="Ascaridiasis (Ascaridia galli)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Ascaridiasis (Ascaridia galli)</span>
              Ascaridiasis causing intestinal obstruction and malabsorption, transmitted through ingestion of infective eggs.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'ppara-ectoparasites',
    title: "5. Avian Ectoparasitosis (Mites & Lice)",
    shortTitle: "5. Ectoparasitosis",
    category: "Poultry Diseases",
    html: `<article id="ectoparasites" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Avian Ectoparasitosis</h3>
          <div class="disease-subtitle">Poultry mites and lice — Irritation, feather damage, anemia, and hyperkeratosis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Important Parasites</h4>
            <ul>
              <li>Mites include <em>Dermanyssus gallinae</em> (poultry red mite), <em>Ornithonyssus sylviarum</em> (northern fowl mite), and <em>Knemidocoptes mutans</em> (scaly-leg mite).</li>
              <li>The chicken body louse <em>Menacanthus stramineus</em> is among the most important poultry lice; lice generally feed on feathers/skin debris, although some also feed on blood.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Heavy blood-feeding mite infestations cause irritation, stress, decreased production, and potentially clinically important anemia.</li>
              <li><em>K. mutans</em> burrows beneath leg scales and induces marked hyperkeratosis; heavy lice burdens damage feathers and irritate skin.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Mites or lice and their eggs may be visible on birds; heavy mite burdens can cause pallor, while scaly-leg infestation produces thickened crusted shanks.</li>
              <li><strong>Micro:</strong> Scaly-leg lesions show pronounced hyperkeratosis with mite profiles/tunnels in superficial epidermal keratin and variable dermatitis.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1vrSpU0oo2byvIL28g0_LkTSXRfGL75PL"
                 alt="Lice and Mite Infestations (Ectoparasites)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Lice and Mite Infestations (Ectoparasites)</span>
              Ectoparasite infestations causing dermatitis, anemia, and reduced productivity, spread through contact and contaminated housing.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'ppara-gallery-diagnostic',
    title: "6. Additional Illustrated Entities & Diagnostic Key",
    shortTitle: "6. Gallery & Key",
    category: "Poultry Diseases",
    html: `<section class="section-block" aria-labelledby="additional-illustrations-heading">
      <div class="illustration-atlas">
        <h2 id="additional-illustrations-heading">Additional Illustrated Parasitic Entities</h2>
        <p style="margin-bottom: 1.25rem;">
          These supplied illustrations are included for visual study while the existing pathological profiles above remain unchanged.
        </p>

        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/15-sRHZQ6TdLCw8aEtHgKUcUbvLP1E9Sx"
                 alt="Trichomoniasis (Canker)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Trichomoniasis (Canker)</span>
              Trichomoniasis causing oral and crop lesions, spread through contaminated water and direct contact.
            </figcaption>
          </figure>

          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/18WlS_pmp0c4IkAC1wRiVwCGfBpGtII4-"
                 alt="Capillariasis (Capillaria spp.)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Capillariasis (Capillaria spp.)</span>
              Capillariasis producing intestinal mucosal damage and chronic wasting, transmitted through infective eggs or earthworms.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section-block">
      <aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Parasitic Diagnostic Key:</strong> For chicken coccidiosis, combine lesion location and appearance with demonstration of appropriate developmental stages; oocyst numbers alone do not reliably indicate disease severity. For renal coccidiosis in geese, examine kidneys for tubular coccidial stages and oocysts. Histomoniasis is supported by characteristic cecal and hepatic lesions plus demonstration of trophozoites. Helminths are diagnosed by direct worm identification and/or fecal examination, whereas ectoparasites require careful inspection of birds, feathers, skin, and—when relevant—the housing environment.
      </aside>`,
  },
];

export const PoultryParasiticPage: React.FC<PoultryParasiticPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Parasitic Diseases of Poultry"
      subtitle="Coccidiosis, histomoniasis, nematodes, and ectoparasites"
      sectionCode="PLT-04"
      category="Poultry Diseases"
      topicId="poultry-pathology"
      lessonId="parasitic-diseases-poultry"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "mycotic-diseases-poultry", "title": "Mycotic Diseases & Mycotoxicoses of Poultry"}}
      nextLesson={{"id": "nutritional-metabolic-poultry", "title": "Nutritional, Metabolic and Management-Related Disorders"}}
    />
  );
};
