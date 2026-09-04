import React, { useState } from 'react';
import { ChevronLeft, BookOpen, Sliders, Check, Share2 } from 'lucide-react';
import { ScreenView } from '../../types';
import { TabbedDirectoryContent } from './TabbedDirectoryContent';

const DIRECTORY_TABS = [
  { id: 'explore', label: 'Explore Categories', sectionIds: ['categories-heading'] },
  { id: 'sequence', label: 'Diagnostic Sequence', sectionIds: ['pathway-heading'] },
  { id: 'patterns', label: 'Lesion Patterns', sectionIds: ['patterns-heading'] },
];

interface BacterialDiseasesDirectoryProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
}

const HTML_CONTENT = `<!-- 1. HERO SECTION -->
    <header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Bacterial Diseases</h1>
      <div class="hero-subtitle">From bacterial properties to lesion pattern</div>
      <p class="hero-body">
        This section covers major bacterial pathogens of veterinary importance, organized by cell wall characteristics, physiological traits, and morphological groupings to guide systemic lesion recognition and diagnostic investigation.
      </p>
      <p class="hero-secondary-text">
        Select a bacterial group below to examine specific aetiological agents, pathogenesis, gross and microscopic lesions, and diagnostic features.
      </p>
    </header>

    <!-- 2. DIAGNOSTIC PATHWAY FOR BACTERIAL PATHOLOGY -->
    <section class="section-block" aria-labelledby="pathway-heading">
      <h2 id="pathway-heading">Bacterial Diagnostic Sequence</h2>
      <p class="section-intro">Follow this structured approach when evaluating suspected bacterial lesions in veterinary species.</p>
      
      <div class="pathway-grid">
        <div class="pathway-card">
          <div class="pathway-number">1</div>
          <div class="pathway-text">Bacterial characteristics &amp; staining</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">2</div>
          <div class="pathway-text">Virulence mechanisms &amp; toxins</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">3</div>
          <div class="pathway-text">Tissue tropism &amp; portal of entry</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">4</div>
          <div class="pathway-text">Dominant inflammatory pattern</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">5</div>
          <div class="pathway-text">Gross &amp; histopathological changes</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">6</div>
          <div class="pathway-text">Confirmatory lab identification</div>
        </div>
      </div>
    </section>

    <!-- 3. BACTERIAL DISEASE CATEGORIES -->
    <section class="section-block" aria-labelledby="categories-heading">
      <h2 id="categories-heading">Explore Bacterial Categories</h2>
      
      <div class="cards-grid">
        
        <!-- CATEGORY 1: GRAM-POSITIVE -->
        <article class="card">
          <div>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Gram-Positive Bacterial Diseases</h3>
          <div class="card-subtitle">Cocci, pyogenic organisms, and spore-forming bacilli</div>
          <p class="card-description">
            Study suppurative, necrotising, and toxigenic infections caused by key Gram-positive genera across domestic animal species.
          </p>
          <div class="examples-header">Key Representative Genera</div>
          <ul class="example-list">
            <li><em>Staphylococcus</em> &amp; <em>Streptococcus</em></li>
            <li><em>Corynebacterium</em> &amp; <em>Trueperella</em></li>
            <li><em>Clostridium</em> &amp; <em>Bacillus</em></li>
            <li><em>Listeria</em> &amp; <em>Erysipelothrix</em></li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/bacterial-diseases/gram-positive-bacterial-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Gram-Positive Diseases</a>
          </div>
        </article>

        <!-- CATEGORY 2: GRAM-NEGATIVE -->
        <article class="card">
          <div>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Gram-Negative Bacterial Diseases</h3>
          <div class="card-subtitle">Enteric, respiratory, and septicaemic pathogens</div>
          <p class="card-description">
            Examine endotoxin-driven tissue injury, fibrinous inflammation, septicaemia, and vascular pathology associated with Gram-negative organisms.
          </p>
          <div class="examples-header">Key Representative Genera</div>
          <ul class="example-list">
            <li><em>Escherichia</em>, <em>Salmonella</em> &amp; <em>Yersinia</em></li>
            <li><em>Pasteurella</em>, <em>Mannheimia</em> &amp; <em>Histophilus</em></li>
            <li><em>Pseudomonas</em> &amp; <em>Burkholderia</em></li>
            <li><em>Brucella</em> &amp; <em>Francisella</em></li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/bacterial-diseases/gram-negative-bacterial-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Gram-Negative Diseases</a>
          </div>
        </article>

        <!-- CATEGORY 3: MYCOBACTERIAL -->
        <article class="card">
          <div>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Mycobacterial Diseases</h3>
          <div class="card-subtitle">Acid-fast organisms and granulomatous pathology</div>
          <p class="card-description">
            Explore chronic granulomatous inflammation, intracellular persistence, giant cell formation, and caseous necrosis in mycobacterial infections.
          </p>
          <div class="examples-header">Key Disease Conditions</div>
          <ul class="example-list">
            <li>Bovine Tuberculosis (<em>M. bovis</em>)</li>
            <li>Paratuberculosis / Johne's Disease (<em>M. avium</em> subsp. <em>paratuberculosis</em>)</li>
            <li>Avian Mycobacteriosis</li>
            <li>Atypical Mycobacterial Granulomas</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/bacterial-diseases/mycobacterial-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Mycobacterial Diseases</a>
          </div>
        </article>

        <!-- CATEGORY 4: SPIROCHETAL & ATYPICAL -->
        <article class="card">
          <div>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Spirochetal &amp; Atypical Bacteria</h3>
          <div class="card-subtitle">Motile spirals, wall-less, and obligate intracellular agents</div>
          <p class="card-description">
            Examine systemic, reproductive, pulmonary, and vascular conditions caused by spirochetes, mycoplasmas, chlamydiae, and rickettsial agents.
          </p>
          <div class="examples-header">Key Groups &amp; Conditions</div>
          <ul class="example-list">
            <li><em>Leptospira</em>, <em>Brachyspira</em> &amp; <em>Borrelia</em></li>
            <li><em>Mycoplasma</em> (Contagious Pleuropneumonia, Mastitis)</li>
            <li><em>Chlamydia</em> (Abortion, Conjunctivitis, Encephalomyelitis)</li>
            <li>Anaplasmataceae (<em>Anaplasma</em>, <em>Ehrlichia</em>)</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/bacterial-diseases/spirochetal-and-atypical-bacterial-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Spirochetal &amp; Atypical</a>
          </div>
        </article>

      </div>
    </section>

    <!-- 4. KEY BACTERIAL LESION PATTERNS -->
    <section class="section-block" aria-labelledby="patterns-heading">
      <h2 id="patterns-heading">Predominant Bacterial Lesion Patterns</h2>
      <p class="section-intro">Bacterial infections frequently induce distinct tissue responses based on virulence factors and host defense interactions.</p>
      
      <div class="pattern-grid">
        <div class="pattern-card">
          <h3>Suppurative / Abscessation</h3>
          <p>Neutrophil accumulation driven by pyogenic bacteria (e.g., <em>Streptococcus</em>, <em>Staphylococcus</em>, <em>Corynebacterium</em>).</p>
        </div>
        <div class="pattern-card">
          <h3>Fibrinous Inflammation</h3>
          <p>Vascular leakage on serosal or mucosal surfaces common in acute Gram-negative septicaemias and respiratory pathogens.</p>
        </div>
        <div class="pattern-card">
          <h3>Granulomatous Reaction</h3>
          <p>Macrophage-dominated tissue response typical of intracellular bacteria (e.g., <em>Mycobacterium</em>, <em>Brucella</em>).</p>
        </div>
        <div class="pattern-card">
          <h3>Necrotising / Emphysematous</h3>
          <p>Rapid destruction and gas formation associated with exotoxins and anaerobic environments (e.g., pathogenic <em>Clostridium</em> spp.).</p>
        </div>
      </div>
    </section>

    <!-- 5. DIAGNOSTIC APPROACH PANEL -->
    <section class="section-block">
      <aside class="diagnostic-panel" aria-label="Diagnostic Note">
        <strong>Diagnostic Integration:</strong> Histopathological pattern recognition provides vital preliminary direction. Definitive confirmation of bacterial diseases typically requires Gram staining, acid-fast staining, aerobic/anaerobic bacterial culture, immunohistochemistry, or molecular detection (PCR).
      </aside>
    </section>

    <!-- 6. FOOTER -->
    <footer class="site-footer">
      <h2 class="footer-title">Veterinary Pathology Digital Companion</h2>
      <p class="footer-subtext">Bacterial Diseases Section</p>
      <div class="footer-actions">
        <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Infectious Diseases Hub</a>
        <a href="https://sites.google.com/view/veterinary-pathology-companion/home" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Back to Main Companion</a>
      </div>
    </footer>`;

export const BacterialDiseasesDirectory: React.FC<BacterialDiseasesDirectoryProps> = ({
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
            Bacterial Diseases
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
          ariaLabel="bacterial-directory"
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
