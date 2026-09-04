import os
import re

def clean_html_string(html):
    html = html.replace('\\', '\\\\')
    html = html.replace('`', '\\`')
    html = html.replace('${', '\\${')
    return html

def extract_container(filepath):
    content = open(filepath, encoding='utf-8').read()
    m = re.search(r'<div class=[\"\']container[\"\']>(.*?)<\/div>\s*<\/body>', content, re.DOTALL)
    if m:
        html = m.group(1).strip()
    else:
        m2 = re.search(r'<body>(.*?)<\/body>', content, re.DOTALL)
        html = m2.group(1).strip() if m2 else content.strip()
    return html

html = extract_container('4- INFECTIOUS DISEASES.txt')
# In card 3 of Poultry Diseases, update 'Partially Available' badge to 'Available'
html = html.replace('badge-partial">Partially Available', 'badge-available">Available')
html = html.replace('<div class="card-note">\n            Some poultry subsections are currently under development.\n          </div>', '')

clean_html = clean_html_string(html)

template = '''import React, { useState } from 'react';
import { ChevronLeft, Sliders, Check, Share2 } from 'lucide-react';
import { ScreenView } from '../types';

interface InfectiousDiseasesViewProps {
  onNavigate: (view: ScreenView) => void;
  onSelectTopic?: (topicId: string) => void;
  onSelectLesson?: (lessonId: string) => void;
}

const HTML_CONTENT = `__HTML__`;

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
      }}
      if (href.includes('gram-negative-bacterial-diseases') || text === 'Gram-Negative Bacterial Diseases') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('gram-negative-bacterial-diseases') : onNavigate({ type: 'lesson', lessonId: 'gram-negative-bacterial-diseases' });
        return;
      }}
      if (href.includes('mycobacterial-diseases') || text === 'Mycobacterial Diseases') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('mycobacterial-diseases') : onNavigate({ type: 'lesson', lessonId: 'mycobacterial-diseases' });
        return;
      }}
      if (href.includes('spirochetal') || text.includes('Spirochetal')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('spirochetal-atypical-bacterial-diseases') : onNavigate({ type: 'lesson', lessonId: 'spirochetal-atypical-bacterial-diseases' });
        return;
      }}
      if (href.includes('superficial') || text.includes('Superficial')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('superficial-cutaneous-mycoses') : onNavigate({ type: 'lesson', lessonId: 'superficial-cutaneous-mycoses' });
        return;
      }}
      if (href.includes('subcutaneous') || text.includes('Subcutaneous')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('subcutaneous-mycoses') : onNavigate({ type: 'lesson', lessonId: 'subcutaneous-mycoses' });
        return;
      }}
      if (href.includes('systemic') || text.includes('Systemic')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('systemic-deep-mycoses') : onNavigate({ type: 'lesson', lessonId: 'systemic-deep-mycoses' });
        return;
      }}
      if (href.includes('opportunistic') || text.includes('Opportunistic')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('opportunistic-mycoses') : onNavigate({ type: 'lesson', lessonId: 'opportunistic-mycoses' });
        return;
      }}
      if (href.includes('poultry-diseases/bacterial') || text === 'Bacterial Diseases of Poultry') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('bacterial-diseases-poultry') : onNavigate({ type: 'lesson', lessonId: 'bacterial-diseases-poultry' });
        return;
      }}
      if (href.includes('poultry-diseases/viral') || text === 'Viral Diseases of Poultry') {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('viral-diseases-poultry') : onNavigate({ type: 'lesson', lessonId: 'viral-diseases-poultry' });
        return;
      }}
      if (href.includes('poultry-diseases/mycotic') || text.includes('Mycotic Diseases of Poultry')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('mycotic-diseases-poultry') : onNavigate({ type: 'lesson', lessonId: 'mycotic-diseases-poultry' });
        return;
      }}
      if (href.includes('poultry-diseases/parasitic') || text.includes('Parasitic Diseases of Poultry')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('parasitic-diseases-poultry') : onNavigate({ type: 'lesson', lessonId: 'parasitic-diseases-poultry' });
        return;
      }}
      if (href.includes('nutritional') || text.includes('Nutritional, Metabolic')) {
        e.preventDefault();
        onSelectLesson ? onSelectLesson('nutritional-metabolic-poultry') : onNavigate({ type: 'lesson', lessonId: 'nutritional-metabolic-poultry' });
        return;
      }}
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
      <div
        className="infectious-page rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden"
        data-font-size={fontSize}
        onClick={handleContainerClick}
        dangerouslySetInnerHTML={{ __html: HTML_CONTENT }}
      />

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
'''

code = template.replace('__HTML__', clean_html)
with open('src/components/InfectiousDiseasesView.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated InfectiousDiseasesView.tsx successfully.")
