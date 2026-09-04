import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface PoultryNutritionalMetabolicPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'pnutr-overview',
    title: "1. Overview & Avian Metabolic Dynamics",
    shortTitle: "1. Overview",
    category: "Poultry Diseases",
    html: `<header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Nutritional, Metabolic and Management-Related Disorders</h1>
      <div class="hero-subtitle">Vitamin deficiencies, production-related syndromes, metabolic imbalance, and skeletal disease</div>
      <p class="hero-body">
        Non-infectious poultry disorders arise from nutrient deficiency or imbalance, rapid growth, high egg production, environmental stress, renal dysfunction, and other management-related pressures. Their diagnosis depends on integrating flock history and diet with characteristic gross and microscopic lesions rather than relying on a single pathological finding.
      </p>
    </header>

    <nav class="organism-nav" aria-label="Disorder Index">
      <h2>Major Disorders Covered</h2>
      <div class="organism-pills">
        <a href="#vitamin-a" class="pill">Vitamin A Deficiency</a>
        <a href="#vitamin-d" class="pill">Vitamin D₃ Deficiency / Rickets</a>
        <a href="#vitamin-k" class="pill">Vitamin K Deficiency</a>
        <a href="#thiamine" class="pill">Thiamine (B₁) Deficiency</a>
        <a href="#riboflavin" class="pill">Riboflavin (B₂) Deficiency</a>
        <a href="#ascites" class="pill">Ascites Syndrome</a>
        <a href="#flhs" class="pill">Fatty Liver Hemorrhagic Syndrome</a>
        <a href="#td" class="pill">Tibial Dyschondroplasia</a>
        <a href="#gout" class="pill">Gout</a>
        <a href="#layer-osteoporosis" class="pill">Layer Osteoporosis / Cage Layer Fatigue</a>
        <a href="#sds" class="pill">Sudden Death Syndrome</a>
      </div>
    </nav>`,
  },
  {
    id: 'pnutr-vitamins',
    title: "2. Hypovitaminoses (Vitamins A, D\u2083, K, B\u2081, and B\u2082)",
    shortTitle: "2. Hypovitaminoses",
    category: "Poultry Diseases",
    html: `<article id="vitamin-a" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Vitamin A Deficiency</h3>
          <div class="disease-subtitle">Loss of epithelial integrity, squamous metaplasia, and xerophthalmia</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Role &amp; Predisposition</h4>
            <ul>
              <li>Vitamin A supports growth, vision, epithelial differentiation, and mucosal integrity.</li>
              <li>Deficiency is now uncommon in correctly formulated commercial diets but may follow premix omission, deterioration, or prolonged inadequate intake.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Loss of normal mucous epithelial differentiation causes atrophy, deciliation, keratinizing squamous metaplasia, and impaired glandular drainage.</li>
              <li>Secondary infection and retained secretions contribute to raised white caseous lesions in upper digestive and respiratory mucosa.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Xerophthalmia; white caseous/pustule-like lesions in mouth, esophagus, larynx, nasal passages, and associated glands.</li>
              <li><strong>Micro:</strong> Atrophy and loss of cilia followed by squamous metaplasia and keratinization of respiratory and glandular epithelia.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/16yMSY0AXZwZ7Fg-KkJFZQqVjZ0HvB_oa"
                 alt="Vitamin A Deficiency"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Vitamin A Deficiency</span>
              Vitamin A deficiency producing epithelial keratinization and increased susceptibility to infection.
            </figcaption>
          </figure>
        </div>

      </article>

<article id="vitamin-d" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Vitamin D₃ Deficiency and Rickets</h3>
          <div class="disease-subtitle">Failure of calcium-phosphorus homeostasis and skeletal mineralization</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Role &amp; Predisposition</h4>
            <ul>
              <li>Vitamin D₃ is essential for normal calcium and phosphorus absorption and mineral metabolism.</li>
              <li>Deficiency causes rickets in growing birds and contributes to osteoporosis and poor eggshell quality in layers.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Inadequate mineral absorption impairs calcification of osteoid and growth-plate cartilage.</li>
              <li>Compensatory parathyroid stimulation and skeletal mineral mobilization worsen bone weakness in prolonged deficiency.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Soft beak, claws and keel; pliable sternum and ribs; enlarged costochondral junctions (“rachitic rosary”); thin or soft eggshells.</li>
              <li><strong>Micro:</strong> Widened, disorganized growth plates with excess unmineralized osteoid and defective endochondral ossification.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1cBU3ITMJ1aSrN86AAeQ-yMg3k0mQrpzR"
                 alt="Rickets (Vitamin D, Calcium, Phosphorus Imbalance)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Rickets (Vitamin D, Calcium, Phosphorus Imbalance)</span>
              Rickets characterized by defective mineralization of growing bones due to vitamin D and Ca/P imbalance.
            </figcaption>
          </figure>
        </div>

      </article>

<article id="vitamin-k" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Vitamin K Deficiency</h3>
          <div class="disease-subtitle">Coagulopathy due to impaired synthesis of vitamin K-dependent clotting factors</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Role &amp; Predisposition</h4>
            <ul>
              <li>Vitamin K is required for normal formation of prothrombin and other vitamin K-dependent coagulation factors.</li>
              <li>Young chicks are particularly susceptible; intestinal disease or certain feed additives may increase risk.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Reduced coagulation-factor activity prolongs clotting and allows spontaneous or trauma-associated hemorrhage.</li>
              <li>Severe blood loss may result in anemia and death.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Subcutaneous and internal hemorrhages, commonly involving breast, wings, legs, abdominal cavity, and intestinal surfaces.</li>
              <li><strong>Diagnostic clue:</strong> Prolonged prothrombin time supports a coagulation defect when interpreted with diet and flock history.</li>
            </ul>
          </div>
        </div>
      </article>

<article id="thiamine" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Thiamine (Vitamin B₁) Deficiency</h3>
          <div class="disease-subtitle">Polyneuritis, anorexia, weakness, and characteristic “stargazing” posture</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Role &amp; Predisposition</h4>
            <ul>
              <li>Thiamine is essential for carbohydrate metabolism and normal neural energy metabolism.</li>
              <li>Deficiency may follow inadequate dietary supply or destruction of thiamine by thiaminase-containing ingredients.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Impaired oxidative carbohydrate metabolism produces progressive neuromuscular dysfunction.</li>
              <li>Weakness advances to polyneuritis, inability to stand, and retraction of the head from paralysis of anterior neck muscles.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Expression</h4>
            <ul>
              <li><strong>Clinical-pathological:</strong> Marked anorexia, weight loss, leg weakness, unsteady gait, tremors, convulsions, and flexed-leg posture.</li>
              <li><strong>Classic clue:</strong> Head retracted over the back—the characteristic “stargazing” posture.</li>
            </ul>
          </div>
        </div>
      </article>

<article id="riboflavin" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Riboflavin (Vitamin B₂) Deficiency</h3>
          <div class="disease-subtitle">Peripheral neuropathy and curled-toe paralysis</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Role &amp; Predisposition</h4>
            <ul>
              <li>Riboflavin-derived flavoproteins are central to energy and fatty-acid metabolism.</li>
              <li>Young growing birds and developing embryos are particularly sensitive to inadequate supply.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Peripheral nerve dysfunction develops with degenerative change in myelin sheaths and impaired nerve function.</li>
              <li>Longstanding nerve injury may become irreversible even after dietary correction.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Clinical/gross:</strong> Weakness, walking on hocks, inward curling of toes, dropped wings, and leg muscle atrophy.</li>
              <li><strong>Micro:</strong> Degeneration of myelin in major peripheral nerve trunks, especially nerves supplying the legs.</li>
            </ul>
          </div>
        </div>
      </article>`,
  },
  {
    id: 'pnutr-cardiopulmonary',
    title: "3. Cardiopulmonary Disorders (Ascites Syndrome & Sudden Death Syndrome)",
    shortTitle: "3. Ascites & SDS",
    category: "Poultry Diseases",
    html: `<article id="ascites" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Ascites Syndrome (Pulmonary Hypertension Syndrome)</h3>
          <div class="disease-subtitle">Pulmonary hypertension, right ventricular failure, and coelomic fluid accumulation</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Predisposing Factors</h4>
            <ul>
              <li>Rapid growth and high oxygen demand in broilers; risk is increased by cold stress, high altitude, poor ventilation, or conditions that increase pulmonary vascular resistance.</li>
              <li>Males and rapidly growing birds are commonly overrepresented.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Hypoxemia and increased pulmonary vascular resistance cause pulmonary hypertension and right ventricular hypertrophy/dilation.</li>
              <li>Right-sided heart failure increases systemic venous pressure, resulting in hepatic congestion and ascites.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Clear to straw-colored ascitic fluid, right ventricular enlargement/dilation, congested enlarged liver, and hydropericardium in some birds.</li>
              <li><strong>Micro:</strong> Hepatic congestion and atrophy with cardiopulmonary changes related to pulmonary hypertension and right-heart overload.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1usz3WK1t1DXAzwsbXiDsegHoTWKodwGT"
                 alt="Ascites Syndrome (Pulmonary Hypertension)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Ascites Syndrome (Pulmonary Hypertension)</span>
              Ascites syndrome causing fluid accumulation and right-heart failure linked to rapid growth and hypoxic stress.
            </figcaption>
          </figure>
        </div>

      </article>

<article id="sds" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Sudden Death Syndrome (Flip-Over Syndrome)</h3>
          <div class="disease-subtitle">Acute unexplained death in rapidly growing broilers with few specific lesions</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Epidemiology &amp; Associations</h4>
            <ul>
              <li>Occurs mainly in fast-growing broilers, often males, usually in good body condition and during periods of rapid growth.</li>
              <li>Dietary energy intake, growth rate, management, and cardiac electrical instability have been implicated.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Current Interpretation</h4>
            <ul>
              <li>The precise pathogenesis remains incompletely resolved; fatal cardiac arrhythmia and acute metabolic disturbance are leading hypotheses.</li>
              <li>Birds may suddenly convulse and die, frequently ending in dorsal recumbency—the origin of “flip-over” syndrome.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Generally good body condition with a full gastrointestinal tract; pulmonary congestion/edema and nonspecific cardiac findings may be present.</li>
              <li><strong>Micro:</strong> No consistent pathognomonic lesion; diagnosis requires exclusion of infectious, toxic, cardiovascular, and other causes of sudden death.</li>
            </ul>
          </div>
        </div>
      </article>`,
  },
  {
    id: 'pnutr-hepatic-renal',
    title: "4. Hepatic & Renal Disorders (Fatty Liver Hemorrhagic Syndrome & Gout)",
    shortTitle: "4. FLHS & Gout",
    category: "Poultry Diseases",
    html: `<article id="flhs" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Fatty Liver Hemorrhagic Syndrome (FLHS)</h3>
          <div class="disease-subtitle">Multifactorial hepatic lipidosis and hemorrhage in high-producing laying hens</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Predisposing Factors</h4>
            <ul>
              <li>Positive energy balance, high-energy intake, restricted exercise, heat stress, female sex, and high egg production are important associations.</li>
              <li>Estrogen promotes hepatic lipid synthesis during lay and contributes to susceptibility.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Pathogenesis is multifactorial and incompletely defined; excessive hepatic lipid accumulation increases liver fragility.</li>
              <li>Hepatic rupture and hemorrhage can produce acute hypovolemic death, often without preceding clinical signs.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Enlarged pale/yellow friable fatty liver with multifocal or massive hemorrhage and clotted blood in the coelom.</li>
              <li><strong>Micro:</strong> Marked hepatocellular lipidosis with hemorrhage and variable hepatocellular degeneration or rupture.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1jwJ6TWfwMb3hVetK6L0vBD_Vqk9jbGSU"
                 alt="Fatty Liver Hemorrhagic Syndrome (FLHS)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Fatty Liver Hemorrhagic Syndrome (FLHS)</span>
              FLHS producing hepatic lipidosis and hemorrhage associated with high-energy diets and metabolic stress.
            </figcaption>
          </figure>
        </div>

      </article>

<article id="gout" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Visceral &amp; Articular Gout</h3>
          <div class="disease-subtitle">Hyperuricemia with precipitation of monosodium urate</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Predisposing Factors</h4>
            <ul>
              <li>Renal impairment, dehydration, nephrotoxic agents, nutritional mineral imbalance, or nephropathogenic disease may reduce urate excretion.</li>
              <li>Articular gout is more chronic and less common than visceral gout in commercial poultry.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Hyperuricemia leads to precipitation of monosodium urate on visceral serosa or within joints and periarticular tissues.</li>
              <li>Persistent deposits stimulate heterophilic and granulomatous inflammation with tophus formation.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Chalky white deposits on pericardium, liver, kidneys and other serosal surfaces; joints may contain white pasty material.</li>
              <li><strong>Micro:</strong> Radiating clefts left by dissolved urates surrounded by macrophages, giant cells, heterophils, and fibrosis.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Z-P2QkYaMOPFt1WUQfSS8FzIuvhQQMb3"
                 alt="Gout (Visceral and Articular)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Gout (Visceral and Articular)</span>
              Gout characterized by urate deposition due to impaired renal excretion or metabolic imbalance.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'pnutr-skeletal',
    title: "5. Skeletal & Locomotor Disorders (Tibial Dyschondroplasia & Layer Osteoporosis)",
    shortTitle: "5. Skeletal Disorders",
    category: "Poultry Diseases",
    html: `<article id="td" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Tibial Dyschondroplasia</h3>
          <div class="disease-subtitle">Retained avascular growth-plate cartilage in rapidly growing poultry</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Predisposition</h4>
            <ul>
              <li>Most important in rapidly growing broilers and turkeys; nutritional, genetic, growth-rate, and management factors may contribute.</li>
              <li>The proximal tibiotarsal growth plate is classically affected.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Failure of normal maturation, vascular invasion, and removal of hypertrophic growth-plate cartilage produces a retained cartilage mass.</li>
              <li>Large lesions weaken the metaphysis and contribute to lameness and angular limb deformity.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Opaque white, poorly vascularized wedge or plug of retained cartilage beneath the proximal tibial growth plate.</li>
              <li><strong>Micro:</strong> Accumulation of hypertrophic chondrocytes with deficient vascular penetration and abnormal endochondral ossification.</li>
            </ul>
          </div>
        </div>
      </article>

<article id="layer-osteoporosis" class="disease-card">
        <header class="disease-header">
          <h3 class="disease-title">Layer Osteoporosis / Cage Layer Fatigue</h3>
          <div class="disease-subtitle">Loss of structural bone during sustained eggshell calcium demand</div>
        </header>
        <div class="pathology-grid">
          <div class="pathology-box">
            <h4>Predisposing Factors</h4>
            <ul>
              <li>High egg output, inadequate calcium or vitamin D supply, nutritional imbalance, and limited exercise increase skeletal depletion.</li>
              <li>Modern usage often places classic “cage layer fatigue” within the broader problem of osteoporosis in laying hens.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Pathogenesis</h4>
            <ul>
              <li>Calcium demand for eggshell production promotes mobilization of medullary and structural bone when dietary supply is inadequate or bone turnover is excessive.</li>
              <li>Progressive cortical and trabecular loss predisposes to fractures, weakness, recumbency, and occasionally spinal compression.</li>
            </ul>
          </div>
          <div class="pathology-box">
            <h4>Key Lesions</h4>
            <ul>
              <li><strong>Gross:</strong> Thin fragile bones, fractures, reduced skeletal strength, and recumbency in severely affected hens.</li>
              <li><strong>Micro:</strong> Reduced cortical and trabecular bone with increased resorption; osteomalacic change may coexist when mineralization is also defective.</li>
            </ul>
          </div>
        </div>
        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1_hSOACNDqkdfbKYbsC7L3X6bWDP8sbb4"
                 alt="Cage Layer Fatigue (Osteoporosis in Layers)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Cage Layer Fatigue (Osteoporosis in Layers)</span>
              Cage layer fatigue producing osteoporosis and fractures due to chronic calcium depletion in laying hens.
            </figcaption>
          </figure>
        </div>

      </article>`,
  },
  {
    id: 'pnutr-gallery-diagnostic',
    title: "6. Additional Illustrated Entities & Diagnostic Key",
    shortTitle: "6. Gallery & Key",
    category: "Poultry Diseases",
    html: `<section class="section-block" aria-labelledby="additional-illustrations-heading">
      <div class="illustration-atlas">
        <h2 id="additional-illustrations-heading">Additional Illustrated Nutritional, Metabolic &amp; Management Disorders</h2>
        <p style="margin-bottom: 1.25rem;">
          These supplied illustrations are included for visual study while the existing pathological profiles above remain unchanged.
        </p>

        <div class="illustration-grid">
          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1pI-UfQELZGnJazSIObLJ4mvnc481b31D"
                 alt="Osteomalacia (Adult Bone Softening)"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Osteomalacia (Adult Bone Softening)</span>
              Osteomalacia causing soft bones and fractures in adult birds due to chronic mineral or vitamin D deficiency.
            </figcaption>
          </figure>

          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1g5VnM0xwouwSfBLlb5KxfNYX30ArEYkd"
                 alt="Vitamin E / Selenium Deficiency"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Vitamin E / Selenium Deficiency</span>
              Vitamin E/selenium deficiency causing encephalomalacia, exudative diathesis, and muscular dystrophy due to oxidative injury.
            </figcaption>
          </figure>

          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1iESRO4YiJTXUvH4A3KLBr3hSISV_74va"
                 alt="Malabsorption Syndrome"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Malabsorption Syndrome</span>
              Malabsorption syndrome causing stunting and poor growth due to impaired intestinal nutrient uptake.
            </figcaption>
          </figure>

          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/13cBdgf-dcaPO2rd_SUpQ4oHPdCoH4987"
                 alt="Heat Stress"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Heat Stress</span>
              Heat stress producing dehydration, organ congestion, and reduced productivity under high environmental temperatures.
            </figcaption>
          </figure>

          <figure class="illustration-card">
            <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Cpej0ZrB8yaSM2GkqACdkSXrj_gWFe6J"
                 alt="Starve-Out / Failure to Thrive in Chicks"
                 loading="lazy">
            <figcaption>
              <span class="illustration-title">Starve-Out / Failure to Thrive in Chicks</span>
              Starve-out syndrome causing early chick mortality due to inadequate feeding and brooding management.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section-block">
      <aside class="diagnostic-panel" aria-label="Diagnostic Key">
        <strong>Nutritional &amp; Metabolic Diagnostic Key:</strong> Combine flock age, production stage, feed formulation and premix history, growth rate, water availability, ventilation, ambient temperature, and necropsy findings. Classic deficiency lesions can overlap with infectious or toxic disease, so confirm suspected nutritional problems with ration review and appropriate feed/tissue testing. For gout, routine aqueous formalin dissolves urate crystals; alcohol fixation is preferred when preservation of urates is required.
      </aside>`,
  },
];

export const PoultryNutritionalMetabolicPage: React.FC<PoultryNutritionalMetabolicPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Nutritional, Metabolic and Management-Related Disorders"
      subtitle="Ascites syndrome, sudden death, rickets, and tibial dyschondroplasia"
      sectionCode="PLT-05"
      category="Poultry Diseases"
      topicId="poultry-pathology"
      lessonId="nutritional-metabolic-poultry"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={{"id": "parasitic-diseases-poultry", "title": "Parasitic Diseases of Poultry"}}
      nextLesson={undefined}
    />
  );
};
