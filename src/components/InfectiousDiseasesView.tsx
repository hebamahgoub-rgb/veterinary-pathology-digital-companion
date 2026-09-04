import React, { useState } from 'react';
import { ChevronLeft, Sliders, Check, Share2 } from 'lucide-react';
import { ScreenView } from '../types';
import { TabbedDirectoryContent } from './infectious/TabbedDirectoryContent';

const DIRECTORY_TABS = [
  { id: 'explore', label: 'Explore', sectionIds: ['main-areas-heading'] },
  { id: 'approach', label: 'Diagnostic Approach', sectionIds: ['pathway-heading'] },
  { id: 'patterns', label: 'Lesion Patterns', sectionIds: ['lesion-heading'] },
  { id: 'framework', label: 'Study Framework', sectionIds: ['study-heading'] },
  { id: 'future', label: 'Future Modules', sectionIds: ['dev-areas-heading'] },
];

interface InfectiousDiseasesViewProps {
  onNavigate: (view: ScreenView) => void;
  onSelectTopic?: (topicId: string) => void;
  onSelectLesson?: (lessonId: string) => void;
}

const HTML_CONTENT = `<!-- 1. HERO SECTION -->
    <header class="hero">
      <div class="hero-label">Veterinary Pathology Digital Companion</div>
      <h1>Infectious Diseases</h1>
      <div class="hero-subtitle">From infectious agent to pathological lesion</div>
      <p class="hero-body">
        This section integrates causative agents, transmission, pathogenesis, host responses, gross lesions, microscopic changes, and diagnostic interpretation across important infectious diseases of animals.
      </p>
      <p class="hero-secondary-text">
        Begin with an agent-based disease section, or explore the integrated Poultry Diseases collection.
      </p>
    </header>

    <!-- 2. PATHOLOGY LEARNING PATHWAY -->
    <section class="section-block" aria-labelledby="pathway-heading">
      <h2 id="pathway-heading">A Pathology-Based Approach</h2>
      <p class="section-intro">Use the same diagnostic sequence when studying each infectious disease.</p>
      
      <div class="pathway-grid">
        <div class="pathway-card">
          <div class="pathway-number">1</div>
          <div class="pathway-text">Agent and susceptible host</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">2</div>
          <div class="pathway-text">Transmission and portal of entry</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">3</div>
          <div class="pathway-text">Pathogenesis and tissue spread</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">4</div>
          <div class="pathway-text">Dominant host response</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">5</div>
          <div class="pathway-text">Gross and microscopic lesions</div>
        </div>
        <div class="pathway-card">
          <div class="pathway-number">6</div>
          <div class="pathway-text">Diagnosis and differential diagnosis</div>
        </div>
      </div>
    </section>

    <!-- 3. MAIN LEARNING AREAS -->
    <section class="section-block" aria-labelledby="main-areas-heading">
      <h2 id="main-areas-heading">Explore Infectious Diseases</h2>
      
      <div class="cards-grid">
        
        <!-- CARD 1: BACTERIAL DISEASES -->
        <article class="card card-active">
          <div>
            <span class="category-tag">Agent-Based Section</span>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Bacterial Diseases</h3>
          <div class="card-subtitle">From bacterial properties to lesion pattern</div>
          <p class="card-description">
            Explore important bacterial diseases through their aetiology, transmission, pathogenesis, characteristic gross and microscopic lesions, and diagnostic features.
          </p>
          <div class="subpages-header">Subsections</div>
          <ul class="subpage-list">
            <li>Gram-Positive Bacterial Diseases</li>
            <li>Gram-Negative Bacterial Diseases</li>
            <li>Mycobacterial Diseases</li>
            <li>Spirochetal and Atypical Bacterial Diseases</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/bacterial-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Bacterial Diseases</a>
          </div>
        </article>

        <!-- CARD 2: MYCOTIC DISEASES -->
        <article class="card card-active">
          <div>
            <span class="category-tag">Agent-Based Section</span>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Mycotic Diseases</h3>
          <div class="card-subtitle">From fungal ecology to tissue reaction</div>
          <p class="card-description">
            Examine fungal infections according to their route of entry, tissue distribution, host response, characteristic morphology, and diagnostic demonstration.
          </p>
          <div class="subpages-header">Subsections</div>
          <ul class="subpage-list">
            <li>Superficial and Cutaneous Mycoses</li>
            <li>Subcutaneous Mycoses</li>
            <li>Systemic and Deep Mycoses</li>
            <li>Opportunistic Mycoses</li>
          </ul>
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/mycotic-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Mycotic Diseases</a>
          </div>
        </article>

        <!-- CARD 3: POULTRY DISEASES -->
        <article class="card card-active">
          <div>
            <span class="category-tag">Species-Based Integrated Section</span>
            <span class="badge badge-available">Available</span>
          </div>
          <h3 class="card-title">Poultry Diseases</h3>
          <div class="card-subtitle">An integrated species-based collection</div>
          <p class="card-description">
            Study major diseases of poultry through an integrated pathological approach, linking disease categories with affected systems, lesion patterns, and diagnostic interpretation.
          </p>
          <div class="subpages-header">Subsections</div>
          <ul class="subpage-list">
            <li>Bacterial Diseases of Poultry</li>
            <li>Viral Diseases of Poultry</li>
            <li>Mycotic Diseases of Poultry</li>
            <li>Parasitic Diseases of Poultry</li>
            <li>Nutritional, Metabolic and Toxic Diseases of Poultry</li>
          </ul>
          
          <div class="card-action">
            <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/poultry-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Explore Poultry Diseases</a>
          </div>
        </article>

      </div>
    </section>

    <!-- 4. SECTIONS UNDER DEVELOPMENT -->
    <section class="section-block" aria-labelledby="dev-areas-heading">
      <h2 id="dev-areas-heading">Additional Disease Collections</h2>
      <p class="section-intro">
        The following collections form part of the planned structure of the companion. Their pages are currently under development.
      </p>

      <div class="cards-grid">
        
        <!-- CARD 1: VIRAL DISEASES -->
        <article class="card card-dev">
          <div>
            <span class="badge badge-dev">Under Development</span>
          </div>
          <h3 class="card-title">Viral Diseases</h3>
          <p class="card-description">
            A planned pathology-centred collection covering major DNA and RNA viral diseases, disease organisation by pathological or biological relationships, and important emerging and zoonotic viral infections.
          </p>
          <div class="subpages-header">Planned Subsections</div>
          <ul class="subpage-list">
            <li>DNA Viral Diseases</li>
            <li>RNA Viral Diseases</li>
            <li>Viral Diseases by Major Grouping</li>
            <li>Emerging and Zoonotic Viral Diseases</li>
          </ul>
          <div class="card-action">
            <button type="button" class="btn btn-disabled" aria-disabled="true" disabled>Content in Development</button>
          </div>
        </article>

        <!-- CARD 2: HELMINTHIC AND ARTHROPOD DISEASES -->
        <article class="card card-dev">
          <div>
            <span class="badge badge-dev">Under Development</span>
          </div>
          <h3 class="card-title">Helminthic and Arthropod Diseases</h3>
          <p class="card-description">
            A planned collection examining parasite migration, tissue injury, host responses, characteristic lesions, and pathological consequences of helminthic and arthropod-associated diseases.
          </p>
          <div class="subpages-header">Planned Subsections</div>
          <ul class="subpage-list">
            <li>Trematode Diseases</li>
            <li>Cestode Diseases</li>
            <li>Nematode Diseases</li>
            <li>Arthropod-Associated Diseases</li>
          </ul>
          <div class="card-action">
            <button type="button" class="btn btn-disabled" aria-disabled="true" disabled>Content in Development</button>
          </div>
        </article>

        <!-- CARD 3: PROTOZOAL DISEASES -->
        <article class="card card-dev">
          <div>
            <span class="badge badge-dev">Under Development</span>
          </div>
          <h3 class="card-title">Protozoal Diseases</h3>
          <p class="card-description">
            A planned collection examining the pathogenesis, tissue distribution, host responses, and characteristic lesions of important veterinary protozoal diseases.
          </p>
          <div class="subpages-header">Planned Subsections</div>
          <ul class="subpage-list">
            <li>Enteric Protozoal Diseases</li>
            <li>Haemoprotozoal Diseases</li>
            <li>Tissue Protozoal Diseases</li>
            <li>Reproductive and Other Protozoal Diseases</li>
          </ul>
          <div class="card-action">
            <button type="button" class="btn btn-disabled" aria-disabled="true" disabled>Content in Development</button>
          </div>
        </article>

      </div>
    </section>

    <!-- 5. BEGIN WITH THE LESION -->
    <section class="section-block" aria-labelledby="lesion-heading">
      <h2 id="lesion-heading">Begin with the Dominant Lesion Pattern</h2>
      
      <div class="pattern-grid">
        <div class="pattern-card">
          <h3>Suppurative inflammation</h3>
          <p>Commonly associated with pyogenic bacterial infections.</p>
        </div>
        <div class="pattern-card">
          <h3>Granulomatous inflammation</h3>
          <p>May accompany persistent bacterial, mycotic, protozoal, or helminthic agents.</p>
        </div>
        <div class="pattern-card">
          <h3>Necrotising inflammation</h3>
          <p>May result from toxins, ischaemia, direct cellular injury, or rapidly destructive infection.</p>
        </div>
        <div class="pattern-card">
          <h3>Fibrinous inflammation</h3>
          <p>Reflects severe vascular leakage and commonly affects serosal or mucosal surfaces.</p>
        </div>
        <div class="pattern-card">
          <h3>Haemorrhagic inflammation</h3>
          <p>Suggests marked vascular injury, septicaemia, toxinaemia, or highly virulent infection.</p>
        </div>
        <div class="pattern-card">
          <h3>Proliferative and hyperplastic lesions</h3>
          <p>May develop in response to chronic epithelial, mucosal, parasitic, or viral injury.</p>
        </div>
      </div>

      <div class="interpretation-note">
        <strong>Interpretation Note:</strong> Lesion patterns help construct a differential diagnosis but are not independently diagnostic of a specific infectious agent.
      </div>
    </section>

    <!-- 6. HOW TO STUDY EACH DISEASE -->
    <section class="section-block" aria-labelledby="study-heading">
      <h2 id="study-heading">A Consistent Study Framework</h2>
      
      <ol class="framework-list">
        <li class="framework-item">Identify the causative agent and susceptible species.</li>
        <li class="framework-item">Determine the source, route of transmission, and portal of entry.</li>
        <li class="framework-item">Follow the sequence of pathogen spread and tissue injury.</li>
        <li class="framework-item">Identify the dominant inflammatory or cellular response.</li>
        <li class="framework-item">Correlate gross lesions with microscopic changes.</li>
        <li class="framework-item">Integrate lesions with agent detection and differential diagnoses.</li>
      </ol>
    </section>

    <!-- 7. EDUCATIONAL AND DIAGNOSTIC NOTE -->
    <section class="section-block">
      <aside class="diagnostic-panel" aria-label="Diagnostic Note">
        <strong>Educational and Diagnostic Note:</strong> This companion emphasises pathological mechanisms and lesion interpretation. Definitive diagnosis may require integration of clinical history, epidemiology, culture, cytology, histochemistry, immunohistochemistry, serology, molecular testing, parasitology, or other laboratory methods.
      </aside>
    </section>

    <!-- 8. QUICK NAVIGATION -->
    <section class="section-block" aria-labelledby="quick-nav-heading">
      <h2 id="quick-nav-heading">Quick Navigation</h2>
      
      <div class="quick-nav-grid">
        <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/bacterial-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Bacterial Diseases</a>
        <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/mycotic-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Mycotic Diseases</a>
        <a href="https://sites.google.com/view/veterinary-pathology-companion/infectious-diseases/poultry-diseases" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Poultry Diseases</a>
      </div>
      <p class="quick-nav-note">
        Viral, helminthic, arthropod, and protozoal disease collections are under development.
      </p>
    </section>

    <!-- 9. FOOTER -->
    <footer class="site-footer">
      <h2 class="footer-title">Veterinary Pathology Digital Companion</h2>
      <p class="footer-subtext">Designed for structured visual learning in veterinary pathology.</p>
      <div class="footer-action">
        <a href="https://sites.google.com/view/veterinary-pathology-companion/home" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Back to Main Companion</a>
      </div>
    </footer>`;

export const InfectiousDiseasesView: React.FC<InfectiousDiseasesViewProps> = ({
  onNavigate,
  onSelectTopic,
  onSelectLesson,
}) => {
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [copiedFeedback, setCopiedFeedback] = useState(false);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a, button');
    if (!target) return;
    const href = target.getAttribute('href');
    const text = target.textContent?.trim() || '';

    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Check click targets for category hubs
    if (
      (href && href.includes('infectious-diseases/bacterial-diseases')) ||
      text.includes('Explore Bacterial Diseases')
    ) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'bacterial-diseases' });
      return;
    }

    if (
      (href && href.includes('infectious-diseases/mycotic-diseases')) ||
      text.includes('Explore Mycotic Diseases')
    ) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'mycotic-diseases' });
      return;
    }

    if (
      (href && href.includes('infectious-diseases/poultry-diseases')) ||
      text.includes('Explore Poultry Diseases')
    ) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'poultry-pathology' });
      return;
    }

    // Check direct lesson links
    if (href) {
      if (href.includes('gram-positive-bacterial-diseases') || text === 'Gram-Positive Bacterial Diseases') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('gram-positive-bacterial-diseases') : onNavigate({ type: 'lesson', lessonId: 'gram-positive-bacterial-diseases' });
        return;
      }
      if (href.includes('gram-negative-bacterial-diseases') || text === 'Gram-Negative Bacterial Diseases') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('gram-negative-bacterial-diseases') : onNavigate({ type: 'lesson', lessonId: 'gram-negative-bacterial-diseases' });
        return;
      }
      if (href.includes('mycobacterial-diseases') || text === 'Mycobacterial Diseases') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('mycobacterial-diseases') : onNavigate({ type: 'lesson', lessonId: 'mycobacterial-diseases' });
        return;
      }
      if (href.includes('spirochetal') || text.includes('Spirochetal')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('spirochetal-atypical-bacterial-diseases') : onNavigate({ type: 'lesson', lessonId: 'spirochetal-atypical-bacterial-diseases' });
        return;
      }
      if (href.includes('superficial') || text.includes('Superficial')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('superficial-cutaneous-mycoses') : onNavigate({ type: 'lesson', lessonId: 'superficial-cutaneous-mycoses' });
        return;
      }
      if (href.includes('subcutaneous') || text.includes('Subcutaneous')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('subcutaneous-mycoses') : onNavigate({ type: 'lesson', lessonId: 'subcutaneous-mycoses' });
        return;
      }
      if (href.includes('systemic') || text.includes('Systemic')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('systemic-deep-mycoses') : onNavigate({ type: 'lesson', lessonId: 'systemic-deep-mycoses' });
        return;
      }
      if (href.includes('opportunistic') || text.includes('Opportunistic')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('opportunistic-mycoses') : onNavigate({ type: 'lesson', lessonId: 'opportunistic-mycoses' });
        return;
      }
      if (href.includes('poultry-diseases/bacterial') || text === 'Bacterial Diseases of Poultry') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('bacterial-diseases-poultry') : onNavigate({ type: 'lesson', lessonId: 'bacterial-diseases-poultry' });
        return;
      }
      if (href.includes('poultry-diseases/viral') || text === 'Viral Diseases of Poultry') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('viral-diseases-poultry') : onNavigate({ type: 'lesson', lessonId: 'viral-diseases-poultry' });
        return;
      }
      if (href.includes('poultry-diseases/mycotic') || text.includes('Mycotic Diseases of Poultry')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('mycotic-diseases-poultry') : onNavigate({ type: 'lesson', lessonId: 'mycotic-diseases-poultry' });
        return;
      }
      if (href.includes('poultry-diseases/parasitic') || text.includes('Parasitic Diseases of Poultry')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('parasitic-diseases-poultry') : onNavigate({ type: 'lesson', lessonId: 'parasitic-diseases-poultry' });
        return;
      }
      if (href.includes('nutritional') || text.includes('Nutritional, Metabolic')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('nutritional-metabolic-poultry') : onNavigate({ type: 'lesson', lessonId: 'nutritional-metabolic-poultry' });
        return;
      }
      if (href.includes('/home') || href.endsWith('veterinary-pathology-companion/home')) {
        e.preventDefault();
        onNavigate({ type: 'home' });
        return;
      }
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
    <div id="infectious-diseases-container" className="pb-20 pt-2 px-3 sm:px-4 max-w-5xl mx-auto space-y-4">
      {/* Breadcrumb Navigation & Controls */}
      <div className="flex items-center justify-between gap-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-teal-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-800 whitespace-nowrap">
            Infectious Diseases
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
            title="Share module"
          >
            {copiedFeedback ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors px-2 py-1.5 rounded-lg bg-teal-50 border border-teal-200 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </button>
        </div>
      </div>

      {/* Main Authoritative Content */}
      <div data-font-size={fontSize} onClick={handleContainerClick}>
        <TabbedDirectoryContent
          htmlContent={HTML_CONTENT}
          tabs={DIRECTORY_TABS}
          ariaLabel="infectious-directory"
        />
      </div>

      {/* Return to Home Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex items-center justify-between gap-3 text-xs font-semibold">
        <button
          onClick={() => onNavigate({ type: 'home' })}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <span className="text-slate-500 font-medium">
          3 active category groups · 13 lessons available · 3 future modules
        </span>
      </div>
    </div>
  );
};
