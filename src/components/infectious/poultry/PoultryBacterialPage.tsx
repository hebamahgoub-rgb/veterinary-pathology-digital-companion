import React from 'react';
import { ScreenView } from '../../../types';
import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';

interface PoultryBacterialPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

export const SECTIONS: InfectiousLessonSection[] = [
  {
    id: 'pbact-overview',
    title: "1. Overview & Avian Flock Bacteriology",
    shortTitle: "1. Overview",
    category: "Poultry Diseases",
    html: `<header class="hero">
    <div class="hero-label">Veterinary Pathology Digital Companion</div>
    <h1>Bacterial Diseases of Poultry</h1>
    <div class="hero-subtitle">A concise pathology atlas of major bacterial diseases and syndromes</div>
    <p class="hero-body">
      Bacterial diseases of poultry range from acute septicaemias and fibrinous polyserositis to respiratory, enteric, skeletal, reproductive, and granulomatous syndromes. The profiles below emphasize the most useful combinations of aetiology, pathogenesis, gross lesions, and microscopic patterns for rapid pathological recognition.
    </p>
  </header>

  <nav class="organism-nav" aria-label="Disease Index">
    <h2>Quick Jump — Diseases Covered</h2>
    <div class="organism-pills">
      <a href="#salmonellosis" class="pill">Salmonelloses</a>
      <a href="#colibacillosis" class="pill">Colibacillosis</a>
      <a href="#fowl-cholera" class="pill">Fowl Cholera</a>
      <a href="#riemerella" class="pill">Riemerellosis</a>
      <a href="#avian-tuberculosis" class="pill">Avian Tuberculosis</a>
      <a href="#coryza" class="pill">Infectious Coryza</a>
      <a href="#bordetellosis" class="pill">Bordetellosis</a>
      <a href="#mycoplasmosis" class="pill">Mycoplasmosis</a>
      <a href="#staphylococcosis" class="pill">Staphylococcosis</a>
      <a href="#botulism" class="pill">Botulism</a>
      <a href="#ulcerative-enteritis" class="pill">Ulcerative Enteritis</a>
      <a href="#necrotic-enteritis" class="pill">Necrotic Enteritis</a>
      <a href="#gangrenous-dermatitis" class="pill">Gangrenous Dermatitis</a>
      <a href="#spirochetosis" class="pill">Spirochetosis</a>
      <a href="#chlamydiosis" class="pill">Chlamydiosis</a>
    </div>
  </nav>

  <section class="section-block" aria-labelledby="pathogens-heading">
    <h2 id="pathogens-heading">Pathological Profiles</h2>
    <p class="section-intro">
      Several entities are grouped where this improves comparison without losing the distinct lesions that students need to recognize.
    </p>`,
  },
  {
    id: 'pbact-salmonellosis',
    title: "2. Avian Salmonelloses (Pullorum Disease, Fowl Typhoid, Paratyphoid)",
    shortTitle: "2. Avian Salmonelloses",
    category: "Poultry Diseases",
    html: `<article id="salmonellosis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Avian Salmonelloses</h3>
        <div class="disease-subtitle">Pullorum disease · Fowl typhoid · Paratyphoid infections, including arizonosis</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Pattern</h4>
          <ul>
            <li><strong>Pullorum:</strong> <em>Salmonella enterica</em> serovar Gallinarum biovar Pullorum; mainly severe in chicks and poults.</li>
            <li><strong>Fowl typhoid:</strong> biovar Gallinarum; important in growing and adult birds.</li>
            <li><strong>Paratyphoid:</strong> motile, non-host-adapted serovars; <em>S. Enteritidis</em> and <em>S. Typhimurium</em> are important examples.</li>
            <li><strong>Arizonosis:</strong> <em>S. enterica</em> serovar Arizonae; primarily young turkeys and now considered within paratyphoid salmonellosis.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis &amp; Transmission</h4>
          <ul>
            <li>Vertical transmission is especially important in Pullorum disease, fowl typhoid, and <em>S. Enteritidis</em>/<em>S. Arizonae</em> infection.</li>
            <li>Oral exposure and hatchery/environmental contamination permit intestinal invasion, bacteraemia, and reticuloendothelial involvement.</li>
            <li>Survivors of host-adapted infections may become carriers.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li><strong>Young birds:</strong> unabsorbed abnormal yolk sac, enteritis, cecal cores, and white-gray nodules in liver, spleen, lung, heart, gizzard, or intestine.</li>
            <li><strong>Fowl typhoid:</strong> enlarged friable bronze/bile-stained liver, splenomegaly, renal enlargement, enteritis, and focal hepatic necrosis.</li>
            <li><strong>Microscopy:</strong> multifocal necrosis followed by heterophilic and histiocytic/granulomatous inflammation; serositis may occur.</li>
          </ul>
        </div>
      </div>
      <div class="illustration-grid three-up" aria-label="Illustrations">
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1nc6zstVbsDSEouvGbD8qlFYtwubGKRgk" alt="Salmonellosis – Pullorum Disease" loading="lazy">
  <figcaption><span class="illustration-title">Salmonellosis – Pullorum Disease</span>Pullorum disease causing neonatal septicemia, hepatic necrosis, and vertical plus environmental transmission.</figcaption>
</figure>
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1nc6zstVbsDSEouvGbD8qlFYtwubGKRgk" alt="Salmonellosis – Fowl Typhoid" loading="lazy">
  <figcaption><span class="illustration-title">Salmonellosis – Fowl Typhoid</span>Fowl typhoid presenting with hepatosplenomegaly, cecal cores, and horizontal transmission.</figcaption>
</figure>
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1nc6zstVbsDSEouvGbD8qlFYtwubGKRgk" alt="Paratyphoid" loading="lazy">
  <figcaption><span class="illustration-title">Paratyphoid</span>Paratyphoid producing enteritis and septicemia in young chicks, spread through contaminated litter.</figcaption>
</figure>
      </div>

    </article>`,
  },
  {
    id: 'pbact-colibacillosis-cholera',
    title: "3. Avian Colibacillosis & Fowl Cholera (Pasteurella multocida)",
    shortTitle: "3. Colibacillosis & Cholera",
    category: "Poultry Diseases",
    html: `<article id="colibacillosis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Avian Colibacillosis</h3>
        <div class="disease-subtitle">APEC-associated local or systemic disease — colisepticaemia, airsacculitis, salpingitis/peritonitis, omphalitis, and coligranuloma</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Syndromes</h4>
          <ul>
            <li>Avian pathogenic <em>Escherichia coli</em> (APEC); pathogenic strains are diverse and are not limited to O1, O2, and O78.</li>
            <li>Major forms include acute septicaemia, airsacculitis/polyserositis, egg-yolk peritonitis and salpingitis, yolk-sac infection/omphalitis, and coligranuloma (Hjärre disease).</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Respiratory disease often follows mucosal damage from mycoplasmosis, viral respiratory disease, poor air quality, or environmental stress.</li>
            <li>Bacterial invasion may progress to bacteraemia and fibrinous inflammation of air sacs and serosal surfaces.</li>
            <li>Ascending reproductive infection can produce salpingitis and peritonitis; contaminated navels/yolk sacs produce early chick disease.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li><strong>Classic systemic pattern:</strong> fibrinous airsacculitis, pericarditis, and perihepatitis, often with peritonitis.</li>
            <li><strong>Layers:</strong> salpingitis, oviduct impaction, ovarian distortion, and yolk material in the coelom.</li>
            <li><strong>Omphalitis:</strong> distended abdomen and abnormal, discoloured, malodorous yolk sac.</li>
            <li><strong>Coligranuloma:</strong> firm yellow granulomas in intestinal wall/mesentery and sometimes liver.</li>
          </ul>
        </div>
      </div>
      <div class="illustration-grid" aria-label="Illustrations">
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1F6nWICxz8vK4Ys3YgNMtZg5KZkE8xfBf" alt="Colibacillosis (APEC)" loading="lazy">
  <figcaption><span class="illustration-title">Colibacillosis (APEC)</span>Colibacillosis characterized by fibrinous serositis, respiratory distress, and fecal-oral/respiratory transmission.</figcaption>
</figure>
      </div>

    </article>

<article id="fowl-cholera" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Fowl Cholera</h3>
        <div class="disease-subtitle"><em>Pasteurella multocida</em> — peracute/acute septicaemia or chronic localized infection</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Pattern</h4>
          <ul>
            <li><em>Pasteurella multocida</em>, a Gram-negative coccobacillus; mature and semimature birds are commonly affected.</li>
            <li>Acute disease is septicaemic; chronic disease is dominated by localized suppurative or caseous lesions.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Entry occurs mainly through respiratory/oral exposure, followed by bacteraemia in susceptible birds.</li>
            <li>Acute infection produces vascular congestion, haemorrhage, and multifocal necrosis; chronic infection localizes in joints, wattles, sinuses, middle ear, or respiratory tissues.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li><strong>Acute:</strong> generalized congestion, petechial/ecchymotic haemorrhages, enteritis, and multiple small pale hepatic necrotic foci.</li>
            <li><strong>Microscopy:</strong> focal hepatic necrosis with heterophils; bacteria may be abundant in vessels and tissues.</li>
            <li><strong>Chronic:</strong> caseous arthritis, swollen wattles, sinusitis/otitis, conjunctival exudate, and fibrinopurulent pneumonia.</li>
          </ul>
        </div>
      </div>
    </article>`,
  },
  {
    id: 'pbact-riemerella-tb',
    title: "4. Riemerella anatipestifer Infection & Avian Tuberculosis",
    shortTitle: "4. Riemerella & Avian TB",
    category: "Poultry Diseases",
    html: `<article id="riemerella" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title"><em>Riemerella anatipestifer</em> Infection</h3>
        <div class="disease-subtitle">Formerly <em>Pasteurella anatipestifer</em> — infectious serositis of ducklings and other birds</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Hosts</h4>
          <ul>
            <li><em>Riemerella anatipestifer</em>, a Gram-negative nonmotile bacterium.</li>
            <li>Especially important in young ducklings and goslings; turkeys and other fowl may also be affected.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Clinical-Pathological Pattern</h4>
          <ul>
            <li>Oculonasal discharge, green watery feces, depression, incoordination, and head/neck tremors may occur.</li>
            <li>Systemic spread produces a characteristic fibrinous polyserositis and may involve the CNS.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Fibrinous pericarditis/epicarditis and fibrinous capsular hepatitis (perihepatitis) are highly characteristic.</li>
            <li>Fibrinous airsacculitis; swollen mottled liver and spleen.</li>
            <li>Fibrinous meningitis may accompany neurological signs; pneumonia and salpingitis can occur.</li>
          </ul>
        </div>
      </div>
    </article>

<article id="avian-tuberculosis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Avian Tuberculosis</h3>
        <div class="disease-subtitle"><em>Mycobacterium avium</em> complex — chronic wasting disease with granulomatous lesions</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Distribution</h4>
          <ul>
            <li>Classically associated with <em>Mycobacterium avium</em> subsp. <em>avium</em>.</li>
            <li>Chickens, pheasants, and partridges are highly susceptible; disease is usually chronic and most evident in mature birds.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Typically acquired by ingestion from a contaminated environment.</li>
            <li>Organisms persist within macrophages, producing chronic granulomatous inflammation and progressive wasting.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Multiple gray-white to yellow granulomas, especially in liver, spleen, intestinal wall, and sometimes bone marrow.</li>
            <li><strong>Microscopy:</strong> granulomas rich in epithelioid macrophages and multinucleated giant cells, often with central necrosis.</li>
            <li>Acid-fast bacilli can be demonstrated within lesions.</li>
          </ul>
        </div>
      </div>
    </article>`,
  },
  {
    id: 'pbact-coryzas',
    title: "5. Respiratory Coryzas (Infectious Coryza & Avian Bordetellosis)",
    shortTitle: "5. Infectious Coryza",
    category: "Poultry Diseases",
    html: `<article id="coryza" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Infectious Coryza</h3>
        <div class="disease-subtitle"><em>Avibacterium paragallinarum</em> — acute upper respiratory disease of chickens</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Tropism</h4>
          <ul>
            <li><em>Avibacterium paragallinarum</em> (formerly <em>Haemophilus paragallinarum</em>).</li>
            <li>Primarily nasal passages, infraorbital sinuses, conjunctiva, and adjacent facial tissues.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Clinical-Pathological Pattern</h4>
          <ul>
            <li>Sneezing, oculonasal discharge, conjunctivitis, and marked infraorbital/facial swelling.</li>
            <li>Disease is mainly upper respiratory; pneumonia and airsacculitis are usually associated with more severe or complicated infections.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Catarrhal to mucopurulent rhinitis and sinusitis; sinuses distended by exudate and facial subcutaneous edema.</li>
            <li><strong>Microscopy:</strong> epithelial degeneration/hyperplasia, mucosal edema, glandular changes, and heterophilic inflammation.</li>
          </ul>
        </div>
      </div>
      <div class="illustration-grid" aria-label="Illustrations">
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/15RAEQcQJy0dTWE5KG1X7HSjiRU2ei4u0" alt="Infectious Coryza" loading="lazy">
  <figcaption><span class="illustration-title">Infectious Coryza</span>Infectious coryza causing acute sinusitis and facial edema, transmitted through respiratory droplets.</figcaption>
</figure>
      </div>

    </article>

<article id="bordetellosis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Avian Bordetellosis (Turkey Coryza)</h3>
        <div class="disease-subtitle"><em>Bordetella avium</em> — highly contagious upper respiratory disease, especially in young turkeys</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Tropism</h4>
          <ul>
            <li>Usually <em>Bordetella avium</em>; <em>B. hinzii</em> can also be associated with disease.</li>
            <li>Colonizes ciliated epithelium of the nasal cavity and trachea.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Adherence to respiratory cilia produces ciliostasis and epithelial injury.</li>
            <li>Damage impairs mucociliary clearance and predisposes to secondary respiratory infection.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Hyperemic nasal and tracheal mucosa with mucoid/fibrinomucoid exudate.</li>
            <li>Tracheal wall thickening, luminal narrowing, and softening/deformation of tracheal rings may occur.</li>
            <li><strong>Microscopy:</strong> bacterial adherence to cilia with epithelial degeneration, deciliation, and reparative/metaplastic change.</li>
          </ul>
        </div>
      </div>
    </article>`,
  },
  {
    id: 'pbact-mycoplasmosis',
    title: "6. Avian Mycoplasmosis (MG & MS)",
    shortTitle: "6. Mycoplasmosis",
    category: "Poultry Diseases",
    html: `<article id="mycoplasmosis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Avian Mycoplasmosis</h3>
        <div class="disease-subtitle"><em>M. gallisepticum</em> · <em>M. synoviae</em> · <em>M. meleagridis</em> · <em>M. iowae</em></div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Major Entities</h4>
          <ul>
            <li><strong><em>M. gallisepticum</em>:</strong> chronic respiratory disease in chickens; infectious sinusitis is prominent in turkeys.</li>
            <li><strong><em>M. synoviae</em>:</strong> often subclinical respiratory infection; can cause infectious synovitis/tenosynovitis.</li>
            <li><strong><em>M. meleagridis</em>:</strong> vertically transmitted turkey infection with airsacculitis and poor poult performance.</li>
            <li><strong><em>M. iowae</em>:</strong> mainly turkeys; associated with late embryo death, reduced hatchability, and occasional leg abnormalities.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Respiratory Pathology</h4>
          <ul>
            <li>Catarrhal rhinitis, tracheitis, sinusitis, and airsacculitis.</li>
            <li>Air sacs may become thickened and contain caseous exudate, especially with secondary bacterial infection.</li>
            <li><strong>Microscopy:</strong> mucosal thickening with lymphoplasmacytic infiltration and prominent lymphoid hyperplasia.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Synovial / Turkey Lesions</h4>
          <ul>
            <li><em>M. synoviae</em>: swollen hock/foot joints and tendon sheaths with viscous to caseous exudate; synovial villous hyperplasia and inflammatory infiltration.</li>
            <li><em>M. meleagridis</em>: airsacculitis in poults and, less consistently, skeletal/feather abnormalities.</li>
            <li><em>M. iowae</em>: embryonic mortality is the major manifestation rather than a distinctive gross lesion in older birds.</li>
          </ul>
        </div>
      </div>
      <div class="illustration-grid" aria-label="Illustrations">
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Xn-jaz3lFcziaiTwp6abbjnGus2cHtVI" alt="Chronic Respiratory Disease (MG + E. coli)" loading="lazy">
  <figcaption><span class="illustration-title">Chronic Respiratory Disease (MG + E. coli)</span>CRD producing chronic air sacculitis and respiratory signs, spread through respiratory secretions and eggs.</figcaption>
</figure>
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Xn-jaz3lFcziaiTwp6abbjnGus2cHtVI" alt="Mycoplasma Synoviae Infection" loading="lazy">
  <figcaption><span class="illustration-title">Mycoplasma Synoviae Infection</span>MS infection causing synovitis and lameness, transmitted through eggs and direct contact.</figcaption>
</figure>
      </div>

    </article>`,
  },
  {
    id: 'pbact-staph-botulism',
    title: "7. Staphylococcosis & Botulism (Limberneck)",
    shortTitle: "7. Staph & Botulism",
    category: "Poultry Diseases",
    html: `<article id="staphylococcosis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Staphylococcosis</h3>
        <div class="disease-subtitle"><em>Staphylococcus aureus</em> and other staphylococci — localized skeletal/soft-tissue disease or septicaemia</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Entry</h4>
          <ul>
            <li><em>S. aureus</em> is the most important species, although other <em>Staphylococcus</em> spp. can cause disease.</li>
            <li>Skin, mucosal, navel, or procedure-related injury permits tissue invasion; bacteraemia can seed bones and joints.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Major Forms</h4>
          <ul>
            <li>Arthritis, synovitis, tenosynovitis, osteomyelitis, omphalitis, bumblefoot (pododermatitis), and septicemia.</li>
            <li>Gangrenous dermatitis may be polymicrobial and can include <em>Staphylococcus</em>, <em>Clostridium</em>, and <em>E. coli</em>.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Swollen joints or footpads with caseous/necrotic material; focal osteomyelitis and bone fragility.</li>
            <li><strong>Microscopy:</strong> acute necrosis with heterophils and Gram-positive coccal colonies; chronic lesions become granulomatous/fibrosing.</li>
            <li>Septicemic disease may produce hepatic necrosis, splenomegaly, and petechial haemorrhages.</li>
          </ul>
        </div>
      </div>
      <div class="illustration-grid" aria-label="Illustrations">
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1CPh2MYstlsqmcdAztMmBbfblogJa8x4b" alt="Staphylococcosis" loading="lazy">
  <figcaption><span class="illustration-title">Staphylococcosis</span>Staphylococcosis causing pododermatitis and arthritis, entering through wounds.</figcaption>
</figure>
      </div>

    </article>

<article id="botulism" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Botulism (Limberneck)</h3>
        <div class="disease-subtitle"><em>Clostridium botulinum</em> neurotoxin — flaccid paralysis with minimal gross pathology</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology</h4>
          <ul>
            <li>Intoxication after ingestion of preformed botulinum neurotoxin; type C is classically important in birds, with other toxin types possible.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Neurotoxin blocks acetylcholine release at peripheral cholinergic neuromuscular junctions.</li>
            <li>Progressive flaccid paralysis affects legs, wings, neck, and eyelids.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Characteristic gross and microscopic lesions are usually absent.</li>
            <li>Diagnosis therefore depends strongly on the clinical pattern, exposure history, and toxin/organism testing where appropriate.</li>
          </ul>
        </div>
      </div>
      <div class="illustration-grid" aria-label="Illustrations">
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1z4RPjf8arWRJuMO98R-9dPDVRmyGqOcG" alt="Botulism" loading="lazy">
  <figcaption><span class="illustration-title">Botulism</span>Botulism causing flaccid paralysis due to ingested neurotoxin.</figcaption>
</figure>
      </div>

    </article>`,
  },
  {
    id: 'pbact-clostridial',
    title: "8. Clostridial Enteritides & Gangrenous Dermatitis",
    shortTitle: "8. Clostridial Diseases",
    category: "Poultry Diseases",
    html: `<article id="ulcerative-enteritis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Ulcerative Enteritis (Quail Disease)</h3>
        <div class="disease-subtitle"><em>Clostridium colinum</em> — intestinal ulceration with hepatic necrosis</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Hosts</h4>
          <ul>
            <li><em>Clostridium colinum</em>, an anaerobic Gram-positive spore-forming rod.</li>
            <li>Particularly important in young quail; chickens, turkeys, and other birds may be affected.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Oral infection produces intestinal mucosal injury and ulcers.</li>
            <li>Portal spread to the liver produces multifocal necrosis that may coalesce.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Small yellow-white intestinal foci with haemorrhagic margins progress to ulcers in small intestine, ceca, and upper large intestine.</li>
            <li>Deep ulcers may perforate and cause peritonitis.</li>
            <li>Yellow-gray multifocal hepatic necrosis; histology shows mucosal necrosis with Gram-positive rods and relatively limited inflammation in hepatic foci.</li>
          </ul>
        </div>
      </div>
    </article>

<article id="necrotic-enteritis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Necrotic Enteritis</h3>
        <div class="disease-subtitle"><em>Clostridium perfringens</em> — acute fibrinonecrotic enteritis of the small intestine</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Predisposition</h4>
          <ul>
            <li>Caused by intestinal overgrowth of <em>C. perfringens</em>; NetB-producing strains are strongly associated with classical chicken necrotic enteritis.</li>
            <li>Coccidial mucosal injury, altered intestinal microbiota, and some dietary substrates are major predisposing factors.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Bacterial proliferation and toxin production cause rapid villous epithelial necrosis, mucosal collapse, and fibrin accumulation.</li>
            <li>Disease is often peracute, with sudden increased mortality in the flock.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Friable, gas-distended jejunum/ileum containing foul brown fluid.</li>
            <li>Tan-yellow pseudomembrane gives the mucosa a diphtheritic or “Turkish towel” appearance.</li>
            <li><strong>Microscopy:</strong> coagulative mucosal necrosis covered by fibrin, necrotic debris, and masses of large Gram-positive rods.</li>
          </ul>
        </div>
      </div>
      <div class="illustration-grid" aria-label="Illustrations">
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1Xn-jaz3lFcziaiTwp6abbjnGus2cHtVI" alt="Necrotic Enteritis" loading="lazy">
  <figcaption><span class="illustration-title">Necrotic Enteritis</span>Necrotic enteritis marked by mucosal necrosis and acute enteric disease, spread through contaminated feed.</figcaption>
</figure>
      </div>

    </article>

<article id="gangrenous-dermatitis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Gangrenous Dermatitis</h3>
        <div class="disease-subtitle">Clostridial/polymicrobial necrotizing dermatitis — “blue wing” / gas edema disease</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology</h4>
          <ul>
            <li>Commonly associated with <em>Clostridium septicum</em> and <em>C. perfringens</em>; <em>Staphylococcus aureus</em> and <em>E. coli</em> may participate.</li>
            <li>Often follows skin damage and is promoted by immunosuppression or flock stressors.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Bacterial proliferation in subcutaneous tissues produces toxins, edema, haemorrhage, necrosis, and sometimes gas formation.</li>
            <li>The course can be rapidly fatal.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Dark red to blue-black, moist, friable skin with subcutaneous edema and haemorrhage, often on wings, thighs, breast, or abdomen.</li>
            <li>Crepitation/gas may be present; lesions can extend into underlying muscle.</li>
            <li><strong>Microscopy:</strong> extensive necrosis, edema, haemorrhage, and numerous bacterial rods/cocci with variable inflammation.</li>
          </ul>
        </div>
      </div>
      <div class="illustration-grid" aria-label="Illustrations">
        <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1E00c2cwll3TT2ooyABAUbTweyVfQFV31" alt="Gangrenous Dermatitis" loading="lazy">
  <figcaption><span class="illustration-title">Gangrenous Dermatitis</span>Gangrenous dermatitis producing acute necrotizing skin infection linked to trauma and poor hygiene.</figcaption>
</figure>
      </div>

    </article>`,
  },
  {
    id: 'pbact-spirochetosis-chlamydiosis',
    title: "9. Avian Spirochetosis (Borreliosis) & Avian Chlamydiosis",
    shortTitle: "9. Borrelia & Chlamydia",
    category: "Poultry Diseases",
    html: `<article id="spirochetosis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Avian Spirochetosis (Borreliosis)</h3>
        <div class="disease-subtitle"><em>Borrelia anserina</em> — tick-borne acute febrile septicaemia</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Transmission</h4>
          <ul>
            <li><em>Borrelia anserina</em>, transmitted mainly by soft ticks of the genus <em>Argas</em>, especially <em>A. persicus</em>.</li>
            <li>Produces a spirochetaemic, febrile systemic disease in susceptible birds.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Spirochetaemia is accompanied by anemia and marked reticuloendothelial activation.</li>
            <li>Splenic erythrophagocytosis and pigment accumulation may be prominent.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Splenomegaly, mottling and haemorrhage; hepatomegaly with occasional necrotic foci; enlarged pale kidneys; green catarrhal enteritis.</li>
            <li><strong>Microscopy:</strong> reticuloendothelial hyperplasia, erythrophagocytosis, hemosiderosis, and congestion/haemorrhage.</li>
            <li>Spirochetes can be demonstrated in blood or tissues by appropriate staining/PCR methods.</li>
          </ul>
        </div>
      </div>
    </article>

<article id="chlamydiosis" class="disease-card">
      <header class="disease-header">
        <h3 class="disease-title">Avian Chlamydiosis</h3>
        <div class="disease-subtitle"><em>Chlamydia psittaci</em> — systemic respiratory–reticuloendothelial disease with zoonotic importance</div>
      </header>
      <div class="pathology-grid">
        <div class="pathology-box">
          <h4>Aetiology &amp; Significance</h4>
          <ul>
            <li><em>Chlamydia psittaci</em>, an obligate intracellular bacterium affecting many wild and domestic bird species.</li>
            <li>“Psittacosis” is commonly used for psittacine-associated disease and “ornithosis” for nonpsittacine disease; infection is zoonotic.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Pathogenesis</h4>
          <ul>
            <li>Infection may be subclinical or progress through respiratory entry to systemic dissemination.</li>
            <li>Reticuloendothelial and serosal involvement produces hepatitis, splenitis, airsacculitis, and polyserositis.</li>
          </ul>
        </div>
        <div class="pathology-box">
          <h4>Key Lesions</h4>
          <ul>
            <li>Hepatomegaly and splenomegaly; congested lungs; thickened cloudy air sacs.</li>
            <li>Fibrinous pericarditis/perihepatitis may occur, with catarrhal enteritis and greenish droppings.</li>
            <li><strong>Microscopy:</strong> necrotizing hepatitis/splenitis and mononuclear inflammation; diagnosis is best confirmed by molecular testing.</li>
          </ul>
        </div>
      </div>
    </article>`,
  },
  {
    id: 'pbact-gallery-diagnostic',
    title: "10. Additional Illustrated Entities & Diagnostic Key",
    shortTitle: "10. Gallery & Key",
    category: "Poultry Diseases",
    html: `<section class="section-block" aria-labelledby="additional-illustrations-heading">
    <h2 id="additional-illustrations-heading">Additional Illustrated Bacterial Entities</h2>
    <p class="section-intro">
      These supplied illustrations extend the visual atlas beyond the disease profiles currently presented above.
    </p>
    <div class="illustration-grid">
      <figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/15qRPhzMxEV_wGpaNYi3K0v9nPeB7VxgQ" alt="Erysipelas" loading="lazy">
  <figcaption><span class="illustration-title">Erysipelas</span>Erysipelas causing septicemia and cutaneous erythema, transmitted through skin abrasions.</figcaption>
</figure><figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1NcvGdJvIT0WtrFUGjtGCAshUqcUWVYiZ" alt="Campylobacteriosis" loading="lazy">
  <figcaption><span class="illustration-title">Campylobacteriosis</span>Campylobacteriosis producing mild enteritis and diarrhea, spread through contaminated feed and water.</figcaption>
</figure><figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/1CMdBUbr5DYIpYWfM26GyCyFBC6ymZWsM" alt="Streptococcosis" loading="lazy">
  <figcaption><span class="illustration-title">Streptococcosis</span>Streptococcosis producing septicemia and arthritis, spread through direct contact and fomites.</figcaption>
</figure><figure class="illustration-card">
  <img referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/d/18G0aVAkB6KYGt2xRUXsTXTfJ9eNwNZYT" alt="Ornithobacterium rhinotracheale (ORT)" loading="lazy">
  <figcaption><span class="illustration-title">Ornithobacterium rhinotracheale (ORT)</span>ORT infection causing pneumonia and airsacculitis, transmitted through respiratory exposure.</figcaption>
</figure>
    </div>
  </section>

  <section class="section-block">
    <aside class="diagnostic-panel" aria-label="Diagnostic Key">
      <strong>Avian Bacterial Diagnostic Key:</strong>
      Fibrinous airsacculitis + pericarditis + perihepatitis strongly suggests colibacillosis but overlaps with <em>Riemerella</em> and other septicaemias.
      Cecal cores and multifocal white nodules support salmonellosis; small hepatic necrotic foci with acute septicaemia support fowl cholera;
      ulcerative intestinal lesions with hepatic necrosis suggest ulcerative enteritis; a tan fibrinonecrotic pseudomembrane in small intestine supports necrotic enteritis;
      granulomas in liver/spleen/intestine raise avian tuberculosis; and joint/bone caseous lesions suggest staphylococcosis or <em>M. synoviae</em>.
      Gross and microscopic patterns guide the differential diagnosis, but definitive bacterial diagnosis should rely on appropriate culture, PCR, or other organism-specific testing.
    </aside>`,
  },
];

export const PoultryBacterialPage: React.FC<PoultryBacterialPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  return (
    <InfectiousLessonPage
      title="Bacterial Diseases of Poultry"
      subtitle="Colibacillosis, fowl cholera, salmonellosis, and infectious coryza"
      sectionCode="PLT-01"
      category="Poultry Diseases"
      topicId="poultry-pathology"
      lessonId="bacterial-diseases-poultry"
      sections={SECTIONS}
      initialSectionId={initialSectionId}
      onNavigate={onNavigate}
      onSelectLesson={onSelectLesson}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      previousLesson={undefined}
      nextLesson={{"id": "viral-diseases-poultry", "title": "Viral Diseases of Poultry"}}
    />
  );
};
