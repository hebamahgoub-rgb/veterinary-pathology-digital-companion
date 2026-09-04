import React, { useState } from 'react';
import { ChevronLeft, BookOpen, Sliders, Check, Share2 } from 'lucide-react';
import { ScreenView } from '../../types';
import { TabbedDirectoryContent } from './TabbedDirectoryContent';

const DIRECTORY_TABS = [
  { id: 'explore', label: 'Explore Categories', sectionIds: ['subsections-heading'] },
  { id: 'sequence', label: 'Diagnostic Sequence', sectionIds: ['pathway-heading'] },
  { id: 'patterns', label: 'Pathology Patterns', sectionIds: ['patterns-heading'] },
];

interface PoultryDiseasesDirectoryProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
}

const HTML_CONTENT = `<!-- 1. HERO SECTION -->
    <header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Poultry Diseases</h1>
      <div class="hero-subtitle">An integrated species-based collection</div>
      <p class="hero-body">
        Study major diseases of poultry through an integrated pathological approach, linking disease categories with affected organ systems, characteristic lesion patterns, and diagnostic interpretation across avian species.
      </p>
      <p class="hero-secondary-text">
        Explore poultry disease categories organized by aetiological agent class, systemic organ involvement, and metabolic pathophysiology.
      </p>
      <div class="species-distinction-box">
        <strong>Species-Based Framework:</strong> Unlike the agent-based sections (Bacterial and Mycotic Diseases), Poultry Diseases integrates all aetiologies—bacterial, viral, fungal, parasitic, and non-infectious—specifically within avian anatomical, physiological, and commercial production contexts.
      </div>
    </header>

    <!-- 2. AVIAN DIAGNOSTIC PATHWAY -->
    <section class="section-block" aria-labelledby="pathway-heading">
      <h2 id="pathway-heading">Avian Diagnostic Sequence</h2>
      <p class="section-intro">Apply this consistent diagnostic workflow when conducting flock post-mortem evaluations.</p>
      
      <div class="pathway-grid">
        <div class="pathway-card">
          <div class="pathway-number">1</div>
          <div class="pathway-text">Flock history &amp; flock-level signs</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">2</div>
          <div class="pathway-text">External inspection &amp; integument</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">3</div>
          <div class="pathway-text">Systemic necropsy dissection</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">4</div>
          <div class="pathway-text">Dominant tissue response pattern</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">5</div>
          <div class="pathway-text">Histopathology &amp; lesion correlation</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">6</div>
          <div class="pathway-text">Confirmatory lab identification</div>
        </div>
      </div>
    </section>

    <!-- 3. POULTRY DISEASE SUBSECTIONS -->
    <section class="section-block" aria-labelledby="subsections-heading">
      <h2 id="subsections-heading">Explore Poultry Disease Categories</h2>
      
      <div class="cards-grid">
        
        <!-- SUBSECTION 1: BACTERIAL DISEASES OF POULTRY -->
        <article class="card">
          <div>
            <span class="category-tag">Avian Aetiology</span>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Bacterial Diseases of Poultry</h3>
          <div class="card-subtitle">Septicaemia, respiratory tract infection, and enteric disease</div>
          <p class="card-description">
            Examine major avian bacterial pathogens causing severe economic losses through airsacculitis, polyserositis, enteritis, and systemic organ failure.
          </p>
          <div class="examples-header">Key Conditions</div>
          <ul class="example-list">
            <li>Avian Colibacillosis (APEC) &amp; Polyserositis</li>
            <li>Fowl Cholera (<em>Pasteurella multocida</em>)</li>
            <li>Salmonellosis (Pullorum, Fowl Typhoid, Paratyphoid)</li>
            <li>Infectious Coryza &amp; Necrotic Enteritis</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/poultry-diseases/bacterial-diseases-of-poultry" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Avian Bacterial Diseases</a>
          </div>
        </article>

        <!-- SUBSECTION 2: VIRAL DISEASES OF POULTRY -->
        <article class="card">
          <div>
            <span class="category-tag">Avian Aetiology</span>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Viral Diseases of Poultry</h3>
          <div class="card-subtitle">Neoplastic, respiratory, immunosuppressive, and systemic viruses</div>
          <p class="card-description">
            Study high-consequence viral pathogens affecting poultry, including oncogenic herpesviruses, respiratory coronaviruses, and epizootic pan-systemic infections.
          </p>
          <div class="examples-header">Key Conditions</div>
          <ul class="example-list">
            <li>Marek's Disease &amp; Avian Leukosis Virus</li>
            <li>High Pathogenicity Avian Influenza (HPAI) &amp; Newcastle Disease</li>
            <li>Infectious Bronchitis (IBV) &amp; Laryngotracheitis (ILTV)</li>
            <li>Infectious Bursal Disease (IBD / Gumboro)</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/poultry-diseases/viral-diseases-of-poultry" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Avian Viral Diseases</a>
          </div>
        </article>

        <!-- SUBSECTION 3: MYCOTIC DISEASES & MYCOTOXICOSES -->
        <article class="card">
          <div>
            <span class="category-tag">Avian Aetiology</span>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Mycotic Diseases &amp; Mycotoxicoses</h3>
          <div class="card-subtitle">Brooder pneumonia, mycotoxicoses, and digestive candidiasis</div>
          <p class="card-description">
            Explore pulmonary fungal infections in hatchlings, crop thrush, and severe tissue lesions secondary to feed-borne mycotoxins.
          </p>
          <div class="examples-header">Key Conditions</div>
          <ul class="example-list">
            <li>Avian Aspergillosis (Brooder Pneumonia)</li>
            <li>Crop Candidiasis (Sour Crop / Thrush)</li>
            <li>Aflatoxicosis &amp; Ochratoxicosis</li>
            <li>T-2 Toxin Oral &amp; Gizzard Lesions</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/poultry-diseases/mycotic-diseases-and-mycotoxicoses" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Mycotic Diseases &amp; Mycotoxicoses</a>
          </div>
        </article>

        <!-- SUBSECTION 4: PARASITIC DISEASES OF POULTRY -->
        <article class="card">
          <div>
            <span class="category-tag">Avian Aetiology</span>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Parasitic Diseases of Poultry</h3>
          <div class="card-subtitle">Protozoal enteritis, histomoniasis, and helminthiasis</div>
          <p class="card-description">
            Examine protozoal destruction of intestinal mucosal barriers, typhlohepatitis, tracheal nematodes, and ectoparasite infestations.
          </p>
          <div class="examples-header">Key Conditions</div>
          <ul class="example-list">
            <li>Avian Coccidiosis (<em>Eimeria</em> species)</li>
            <li>Histomoniasis (Blackhead Disease)</li>
            <li>Tracheal Gapeworm (<em>Syngamus trachea</em>)</li>
            <li>Intestinal Cestodiasis &amp; Nematodiasis</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/poultry-diseases/parasitic-diseases-of-poultry" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Avian Parasitic Diseases</a>
          </div>
        </article>

        <!-- SUBSECTION 5: NUTRITIONAL, METABOLIC & MANAGEMENT-RELATED DISORDERS -->
        <article class="card">
          <div>
            <span class="category-tag">Avian Pathophysiology</span>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Nutritional, Metabolic &amp; Management-Related Disorders</h3>
          <div class="card-subtitle">Production-related disorders and skeletal/visceral pathologies</div>
          <p class="card-description">
            Study rapid-growth metabolic syndromes, skeletal deformities, vitamin/mineral deficiencies, and management-related disorders affecting commercial flocks.
          </p>
          <div class="examples-header">Key Conditions</div>
          <ul class="example-list">
            <li>Ascites Syndrome (Pulmonary Hypertension)</li>
            <li>Fatty Liver Hemorrhagic Syndrome (FLHS)</li>
            <li>Rickets, Perosis &amp; Tibial Dyschondroplasia</li>
            <li>Gout (Visceral &amp; Articular Urate Deposition)</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/poultry-diseases/nutritional-metabolic-and-management-related-disorders" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Nutritional &amp; Metabolic Disorders</a>
          </div>
        </article>

      </div>
    </section>

    <!-- 4. KEY AVIAN LESION PATTERNS -->
    <section class="section-block" aria-labelledby="patterns-heading">
      <h2 id="patterns-heading">Predominant Avian Pathology Patterns</h2>
      <p class="section-intro">Avian tissue responses possess unique features, including heterophilic (rather than neutrophilic) inflammation and fibrinous polyserositis.</p>
      
      <div class="pattern-grid">
        <div class="pattern-card">
          <h3>Fibrinous Airsacculitis &amp; Polyserositis</h3>
          <p>Thick yellow fibrinous exudate covering air sacs, pericardium, and liver capsular surface (e.g., APEC, <em>Pasteurella</em>, <em>Mycoplasma</em>).</p>
        </div>
        <div class="pattern-card">
          <h3>Fibrinecrotic / Hemorrhagic Enteritis</h3>
          <p>Mucosal diphtheria, pseudomembranes, or severe cecal ulceration (e.g., <em>Clostridium perfringens</em>, <em>Eimeria tenella</em>, <em>Salmonella</em>).</p>
        </div>
        <div class="pattern-card">
          <h3>Lymphoproliferative Tumors</h3>
          <p>Infiltration of peripheral nerves, iris, skin, and visceral organs by neoplastic lymphocytes (e.g., Marek's Disease, Avian Leukosis).</p>
        </div>
      </div>
    </section>

    <!-- 5. DIAGNOSTIC APPROACH PANEL -->
    <section class="section-block">
      <aside class="diagnostic-panel" aria-label="Diagnostic Note">
        <strong>Avian Diagnostic Note:</strong> Avian leukocytes lack myeloperoxidase, causing purulent exudate to form solid, caseous fibrinocaseous debris rather than liquid pus. Systematic necropsy combined with impression cytology, histopathology, viral isolation/PCR, and bacterial culture is critical for definitive flock diagnosis.
      </aside>
    </section>

    <!-- 6. FOOTER -->
    <footer class="site-footer">
      <h2 class="footer-title">Veterinary Pathology Digital Companion</h2>
      <p class="footer-subtext">Poultry Diseases Section</p>
      <div class="footer-actions">
        <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Infectious Diseases Hub</a>
        <a href="https://sites.google.com/view/veterinary-pathology-companion/home" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Back to Main Companion</a>
      </div>
    </footer>`;

export const PoultryDiseasesDirectory: React.FC<PoultryDiseasesDirectoryProps> = ({
  onNavigate,
  onSelectLesson,
}) => {
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [copiedFeedback, setCopiedFeedback] = useState(false);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Intercept lesson links
    if (href.includes('bacterial-diseases/gram-positive') || href.includes('gram-positive-bacterial-diseases')) {
      e.preventDefault();
      onSelectLesson?.('gram-positive-bacterial-diseases');
    } else if (href.includes('bacterial-diseases/gram-negative') || href.includes('gram-negative-bacterial-diseases')) {
      e.preventDefault();
      onSelectLesson?.('gram-negative-bacterial-diseases');
    } else if (href.includes('bacterial-diseases/mycobacterial') || href.includes('mycobacterial-diseases')) {
      e.preventDefault();
      onSelectLesson?.('mycobacterial-diseases');
    } else if (href.includes('bacterial-diseases/spirochetal') || href.includes('spirochetal-and-atypical-bacterial-diseases') || href.includes('spirochetal-atypical-bacterial-diseases')) {
      e.preventDefault();
      onSelectLesson?.('spirochetal-atypical-bacterial-diseases');
    } else if (href.includes('mycotic-diseases/superficial') || href.includes('superficial-and-cutaneous-mycoses') || href.includes('superficial-cutaneous-mycoses')) {
      e.preventDefault();
      onSelectLesson?.('superficial-cutaneous-mycoses');
    } else if (href.includes('mycotic-diseases/subcutaneous') || href.includes('subcutaneous-mycoses')) {
      e.preventDefault();
      onSelectLesson?.('subcutaneous-mycoses');
    } else if (href.includes('mycotic-diseases/systemic') || href.includes('systemic-and-deep-mycoses') || href.includes('systemic-deep-mycoses')) {
      e.preventDefault();
      onSelectLesson?.('systemic-deep-mycoses');
    } else if (href.includes('mycotic-diseases/opportunistic') || href.includes('opportunistic-mycoses')) {
      e.preventDefault();
      onSelectLesson?.('opportunistic-mycoses');
    } else if (href.includes('poultry-diseases/bacterial') || href.includes('bacterial-diseases-of-poultry') || href.includes('bacterial-diseases-poultry')) {
      e.preventDefault();
      onSelectLesson?.('bacterial-diseases-poultry');
    } else if (href.includes('poultry-diseases/viral') || href.includes('viral-diseases-of-poultry') || href.includes('viral-diseases-poultry')) {
      e.preventDefault();
      onSelectLesson?.('viral-diseases-poultry');
    } else if (href.includes('poultry-diseases/mycotic') || href.includes('mycotic-diseases-and-mycotoxicoses') || href.includes('mycotic-diseases-poultry')) {
      e.preventDefault();
      onSelectLesson?.('mycotic-diseases-poultry');
    } else if (href.includes('poultry-diseases/parasitic') || href.includes('parasitic-diseases-of-poultry') || href.includes('parasitic-diseases-poultry')) {
      e.preventDefault();
      onSelectLesson?.('parasitic-diseases-poultry');
    } else if (href.includes('poultry-diseases/nutritional') || href.includes('nutritional-metabolic-and-management') || href.includes('nutritional-metabolic-poultry')) {
      e.preventDefault();
      onSelectLesson?.('nutritional-metabolic-poultry');
    } else if (href.includes('infectious-diseases/bacterial-diseases')) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'bacterial-diseases' });
    } else if (href.includes('infectious-diseases/mycotic-diseases')) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'mycotic-diseases' });
    } else if (href.includes('infectious-diseases/poultry-diseases')) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'poultry-pathology' });
    } else if (href.endsWith('infectious-diseases') || href.includes('/infectious-diseases#') || href.includes('/infectious-diseases?')) {
      e.preventDefault();
      onNavigate({ type: 'infectious_diseases' });
    } else if (href.includes('/home') || href.endsWith('veterinary-pathology-companion/home')) {
      e.preventDefault();
      onNavigate({ type: 'home' });
    }
  };

  const handleShare = () => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        setCopiedFeedback(true);
        setTimeout(() => setCopiedFeedback(false), 2000);
      }
    } catch {
      // Ignore
    }
  };

  return (
    <div className="pb-20 pt-2 px-3 sm:px-4 max-w-5xl mx-auto space-y-4">
      {/* Top Breadcrumb and Action Bar */}
      <div className="flex items-center justify-between gap-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-teal-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate({ type: 'infectious_diseases' })}
            className="hover:text-teal-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Infectious Diseases
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-800 whitespace-nowrap">
            Poultry Diseases
          </span>
        </nav>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowFontMenu(!showFontMenu)}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
              title="Adjust typography"
              aria-label="Adjust typography"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {showFontMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl p-1.5 z-[70] min-w-[160px] space-y-1">
                <button
                  type="button"
                  onClick={() => { setFontSize('standard'); setShowFontMenu(false); }}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                    fontSize === 'standard' ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>Standard</span>
                  {fontSize === 'standard' && <Check className="w-3.5 h-3.5 text-amber-700" />}
                </button>
                <button
                  type="button"
                  onClick={() => { setFontSize('large'); setShowFontMenu(false); }}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                    fontSize === 'large' ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-semibold">Large</span>
                  {fontSize === 'large' && <Check className="w-3.5 h-3.5 text-amber-700" />}
                </button>
                <button
                  type="button"
                  onClick={() => { setFontSize('scholar'); setShowFontMenu(false); }}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                    fontSize === 'scholar' ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-serif-academic italic">Scholar</span>
                  {fontSize === 'scholar' && <Check className="w-3.5 h-3.5 text-amber-700" />}
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
            title="Share category"
          >
            {copiedFeedback ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onNavigate({ type: 'infectious_diseases' })}
            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors px-2 py-1.5 rounded-lg bg-teal-50 border border-teal-200 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Infectious Diseases Hub</span>
            <span className="sm:hidden">Hub</span>
          </button>
        </div>
      </div>

      {/* Main Authoritative Content */}
      <div data-font-size={fontSize} onClick={handleContainerClick}>
        <TabbedDirectoryContent
          htmlContent={HTML_CONTENT}
          tabs={DIRECTORY_TABS}
          ariaLabel="poultry-directory"
        />
      </div>

      {/* Bottom Hub Return Button */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex items-center justify-between gap-3 text-xs font-semibold">
        <button
          onClick={() => onNavigate({ type: 'infectious_diseases' })}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Infectious Diseases Hub</span>
        </button>

        <button
          onClick={() => onNavigate({ type: 'home' })}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-teal-200 bg-teal-50 hover:bg-teal-100 text-teal-900 transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-teal-700" />
          <span>Digital Companion Home</span>
        </button>
      </div>
    </div>
  );
};
