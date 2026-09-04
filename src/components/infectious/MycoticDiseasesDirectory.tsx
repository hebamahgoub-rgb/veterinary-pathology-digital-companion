import React, { useState } from 'react';
import { ChevronLeft, BookOpen, Sliders, Check, Share2 } from 'lucide-react';
import { ScreenView } from '../../types';
import { TabbedDirectoryContent } from './TabbedDirectoryContent';

const DIRECTORY_TABS = [
  { id: 'explore', label: 'Explore Categories', sectionIds: ['categories-heading'] },
  { id: 'sequence', label: 'Diagnostic Sequence', sectionIds: ['pathway-heading'] },
  { id: 'patterns', label: 'Lesion Patterns', sectionIds: ['patterns-heading'] },
];

interface MycoticDiseasesDirectoryProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
}

const HTML_CONTENT = `<!-- 1. HERO SECTION -->
    <header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Mycotic Diseases</h1>
      <div class="hero-subtitle">From fungal ecology to tissue reaction</div>
      <p class="hero-body">
        Examine fungal infections according to their route of entry, tissue distribution, host response, characteristic morphology, and diagnostic demonstration across veterinary species.
      </p>
      <p class="hero-secondary-text">
        Select a mycotic disease category below to explore specific fungal pathogens, tissue reactions, and diagnostic features.
      </p>
    </header>

    <!-- 2. DIAGNOSTIC PATHWAY FOR MYCOTIC PATHOLOGY -->
    <section class="section-block" aria-labelledby="pathway-heading">
      <h2 id="pathway-heading">Mycotic Diagnostic Sequence</h2>
      <p class="section-intro">Follow this consistent diagnostic framework when evaluating suspected fungal lesions.</p>
      
      <div class="pathway-grid">
        <div class="pathway-card">
          <div class="pathway-number">1</div>
          <div class="pathway-text">Fungal morphology &amp; growth form</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">2</div>
          <div class="pathway-text">Environmental source &amp; portal of entry</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">3</div>
          <div class="pathway-text">Angioinvasion &amp; tissue tropism</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">4</div>
          <div class="pathway-text">Dominant host tissue reaction</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">5</div>
          <div class="pathway-text">Gross &amp; histopathological changes</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">6</div>
          <div class="pathway-text">Histochemical &amp; confirmatory identification</div>
        </div>
      </div>
    </section>

    <!-- 3. MYCOTIC DISEASE CATEGORIES -->
    <section class="section-block" aria-labelledby="categories-heading">
      <h2 id="categories-heading">Explore Mycotic Categories</h2>
      
      <div class="cards-grid">
        
        <!-- CATEGORY 1: SUPERFICIAL & CUTANEOUS -->
        <article class="card">
          <div>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Superficial &amp; Cutaneous Mycoses</h3>
          <div class="card-subtitle">Dermatophytosis and keratinized tissue invasion</div>
          <p class="card-description">
            Study superficial fungal infections limited to skin, hair follicles, and claws, characterized by epidermal hyperplasia, folliculitis, and hyperkeratosis.
          </p>
          <div class="examples-header">Key Representative Agents</div>
          <ul class="example-list">
            <li><em>Microsporum</em> spp. (<em>M. canis</em>)</li>
            <li><em>Trichophyton</em> spp. (<em>T. verrucosum</em>, <em>T. mentagrophytes</em>)</li>
            <li><em>Malassezia pachydermatitis</em></li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/mycotic-diseases/superficial-and-cutaneous-mycoses" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Superficial Mycoses</a>
          </div>
        </article>

        <!-- CATEGORY 2: SUBCUTANEOUS -->
        <article class="card">
          <div>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Subcutaneous Mycoses</h3>
          <div class="card-subtitle">Traumatic implantation and nodular granulomatous lesions</div>
          <p class="card-description">
            Examine deep dermal and subcutaneous fungal infections resulting from wound inoculation, leading to chronic nodular granulomas and draining tracts.
          </p>
          <div class="examples-header">Key Representative Agents</div>
          <ul class="example-list">
            <li><em>Sporothrix schenckii</em> species complex</li>
            <li>Pythiosis (<em>Pythium insidiosum</em>) &amp; Lagenidiosis</li>
            <li>Eumycotic Mycetoma &amp; Phaeohyphomycosis</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/mycotic-diseases/subcutaneous-mycoses" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Subcutaneous Mycoses</a>
          </div>
        </article>

        <!-- CATEGORY 3: SYSTEMIC & DEEP -->
        <article class="card">
          <div>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Systemic &amp; Deep Mycoses</h3>
          <div class="card-subtitle">Thermal dimorphic fungi and disseminated pathology</div>
          <p class="card-description">
            Explore primary systemic infections caused by dimorphic pathogens that infect respiratory surfaces and disseminate to bone, skin, viscera, and CNS.
          </p>
          <div class="examples-header">Key Representative Agents</div>
          <ul class="example-list">
            <li><em>Blastomyces dermatitidis</em></li>
            <li><em>Coccidioides immitis</em> / <em>C. posadasii</em></li>
            <li><em>Histoplasma capsulatum</em></li>
            <li><em>Cryptococcus neoformans</em> / <em>C. gattii</em></li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/mycotic-diseases/systemic-and-deep-mycoses" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Systemic Mycoses</a>
          </div>
        </article>

        <!-- CATEGORY 4: OPPORTUNISTIC -->
        <article class="card">
          <div>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Opportunistic Mycoses</h3>
          <div class="card-subtitle">Angioinvasive hyphae and secondary tissue destruction</div>
          <p class="card-description">
            Examine saprophytic fungi that exploit immunocompromised, debilitated, or mucosa-damaged hosts, causing severe necrotising and vascular lesions.
          </p>
          <div class="examples-header">Key Representative Agents</div>
          <ul class="example-list">
            <li><em>Aspergillus</em> spp. (<em>A. fumigatus</em>)</li>
            <li><em>Candida albicans</em></li>
            <li>Mucorales (<em>Mucor</em>, <em>Rhizopus</em>, <em>Lichtheimia</em>)</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/mycotic-diseases/opportunistic-mycoses" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Opportunistic Mycoses</a>
          </div>
        </article>

      </div>
    </section>

    <!-- 4. KEY MYCOTIC LESION PATTERNS -->
    <section class="section-block" aria-labelledby="patterns-heading">
      <h2 id="patterns-heading">Predominant Mycotic Lesion Patterns</h2>
      <p class="section-intro">Fungi provoke distinct tissue responses depending on fungal morphology, angioinvasive capacity, and host immunocompetence.</p>
      
      <div class="pattern-grid">
        <div class="pattern-card">
          <h3>Pyogranulomatous Inflammation</h3>
          <p>Neutrophils surrounding central fungal elements bounded by epithelioid macrophages and giant cells (e.g., <em>Blastomyces</em>).</p>
        </div>
        <div class="pattern-card">
          <h3>Angioinvasion &amp; Thrombosis</h3>
          <p>Hyphal penetration of vessel walls leading to arterial thrombosis, tissue infarction, and necrosis (e.g., <em>Aspergillus</em>, Mucorales).</p>
        </div>
        <div class="pattern-card">
          <h3>Splendore-Hoeppli Phenomenon</h3>
          <p>Radiating star-like antigen-antibody proteinaceous deposit surrounding fungal elements in tissue (e.g., <em>Sporothrix</em>, Mycetomas).</p>
        </div>
        <div class="pattern-card">
          <h3>Hyperkeratotic &amp; Epidermotropic</h3>
          <p>Arthrospores and hyphae colonizing stratum corneum and hair follicles causing acanthosis and folliculitis (e.g., Dermatophytes).</p>
        </div>
      </div>
    </section>

    <!-- 5. DIAGNOSTIC APPROACH PANEL -->
    <section class="section-block">
      <aside class="diagnostic-panel" aria-label="Diagnostic Note">
        <strong>Diagnostic Integration:</strong> Fungal organisms are often poorly visible on routine H&amp;E stains. Histochemical stains such as <strong>Periodic acid-Schiff (PAS)</strong> and <strong>Grocott's methenamine silver (GMS)</strong> are essential for visualizing cell wall structures, branching angles, septation, and yeast morphology.
      </aside>
    </section>

    <!-- 6. FOOTER -->
    <footer class="site-footer">
      <h2 class="footer-title">Veterinary Pathology Digital Companion</h2>
      <p class="footer-subtext">Mycotic Diseases Section</p>
      <div class="footer-actions">
        <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Infectious Diseases Hub</a>
        <a href="https://sites.google.com/view/veterinary-pathology-companion/home" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Back to Main Companion</a>
      </div>
    </footer>`;

export const MycoticDiseasesDirectory: React.FC<MycoticDiseasesDirectoryProps> = ({
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
            Mycotic Diseases
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
          ariaLabel="mycotic-directory"
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
