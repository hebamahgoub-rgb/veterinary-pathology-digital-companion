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

directories = [
    {
        'file': '4.1- BACTERIAL DISEASES.txt',
        'out': 'src/components/infectious/BacterialDiseasesDirectory.tsx',
        'component': 'BacterialDiseasesDirectory',
        'title': 'Bacterial Diseases',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
    },
    {
        'file': '4.2- MYCOTIC DISEASES.txt',
        'out': 'src/components/infectious/MycoticDiseasesDirectory.tsx',
        'component': 'MycoticDiseasesDirectory',
        'title': 'Mycotic Diseases',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
    },
    {
        'file': '4.3- POULTRY DISEASES.txt',
        'out': 'src/components/infectious/PoultryDiseasesDirectory.tsx',
        'component': 'PoultryDiseasesDirectory',
        'title': 'Poultry Diseases',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
    },
]

template = '''import React, { useState } from 'react';
import { ChevronLeft, BookOpen, Sliders, Check, Share2 } from 'lucide-react';
import { ScreenView } from '../../types';

interface __COMPONENT__Props {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
}

const HTML_CONTENT = `__HTML__`;

export const __COMPONENT__: React.FC<__COMPONENT__Props> = ({
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
            __TITLE__
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
      <div
        className="infectious-page rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden"
        data-font-size={fontSize}
        onClick={handleContainerClick}
        dangerouslySetInnerHTML={{ __html: HTML_CONTENT }}
      />

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
'''

for d in directories:
    html = extract_container(d['file'])
    clean_html = clean_html_string(html)
    
    code = template.replace('__COMPONENT__', d['component']).replace('__TITLE__', d['title']).replace('__HTML__', clean_html)
    with open(d['out'], 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Generated {d['out']}")

print("All 3 directories generated successfully.")
