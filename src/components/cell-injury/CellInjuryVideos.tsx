import React from 'react';
import { ExternalLink, Video as VideoIcon } from 'lucide-react';

export const CellInjuryVideos: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
        Begin with the concise overview below. Choose the fully English lesson or the bilingual teaching version, in which pathological terminology and descriptions remain in English while Arabic is used to connect and explain difficult concepts in greater depth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Video Card 1 - English */}
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
          <div>
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/FQCodmYhwqk"
                title="Cell Injury and Cell Death Explained - English veterinary pathology lesson"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="p-4 sm:p-5 space-y-2.5">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
                English lesson
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic leading-tight">
                Cell Injury &amp; Cell Death Explained
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                A concise English overview of the causes and mechanisms of cell injury, reversible and irreversible damage, necrosis, and apoptosis.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 pt-0">
            <a
              href="https://youtu.be/FQCodmYhwqk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-teal-900 hover:bg-teal-50 hover:border-teal-300 text-xs font-semibold transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>

        {/* Video Card 2 - Bilingual */}
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
          <div>
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/xKGJW-pVxGk"
                title="Cell Injury and Cell Death - bilingual veterinary pathology lesson"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="p-4 sm:p-5 space-y-2.5">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-300 px-2.5 py-0.5 rounded-full font-mono-code">
                Bilingual | شرح ثنائي اللغة
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic leading-tight">
                Cell Injury &amp; Cell Death | Bilingual Explanation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Pathological terms and lesion descriptions remain in English, with Arabic used as a connecting and deeper explanatory language.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 pt-0">
            <a
              href="https://youtu.be/xKGJW-pVxGk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-amber-900 hover:bg-amber-50 hover:border-amber-300 text-xs font-semibold transition-colors"
            >
              <span>Watch bilingual version</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};
