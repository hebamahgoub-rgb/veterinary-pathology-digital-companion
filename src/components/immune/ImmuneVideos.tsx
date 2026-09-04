import React from 'react';
import { ExternalLink, Video as VideoIcon } from 'lucide-react';

export const ImmuneVideos: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-teal-800">
          <VideoIcon className="w-5 h-5" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
            Immunopathology Multimedia &amp; Lectures
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-sans">
          Recommended video lectures and digital resources covering hypersensitivity classifications, Coombs testing protocols, and immunodeficiency mechanisms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
          <div>
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/23bK-PzJ544"
                title="Hypersensitivity Reactions (Types I, II, III, IV)"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-4 sm:p-5 space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
                Immunology Core
              </span>
              <h4 className="text-base font-bold text-slate-900 font-serif-academic leading-tight">
                Hypersensitivity Reactions Types I–IV
              </h4>
              <p className="text-xs text-slate-500 font-medium font-sans">
                Gell &amp; Coombs classification of immunological tissue injury
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                Visual walkthrough comparing immediate IgE-mediated anaphylaxis, cytotoxic autoantibody binding, immune complex precipitation, and cell-mediated delayed hypersensitivity.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 pt-0">
            <a
              href="https://youtu.be/23bK-PzJ544"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-teal-900 hover:bg-teal-50 hover:border-teal-300 text-xs font-semibold transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>

        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
          <div>
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/n4K_PjZ66U0"
                title="Direct vs Indirect Coombs Test"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-4 sm:p-5 space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
                Diagnostic Laboratory
              </span>
              <h4 className="text-base font-bold text-slate-900 font-serif-academic leading-tight">
                Direct and Indirect Coombs Test Mechanics
              </h4>
              <p className="text-xs text-slate-500 font-medium font-sans">
                Detecting RBC surface sensitization vs serum autoantibodies
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                Step-by-step diagnostic guide to preparing washed erythrocytes, adding species-specific antiglobulin reagent, and grading agglutination titers for IMHA confirmation.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 pt-0">
            <a
              href="https://youtu.be/n4K_PjZ66U0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-teal-900 hover:bg-teal-50 hover:border-teal-300 text-xs font-semibold transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
          Key Veterinary Immunopathology Textbooks
        </h4>
        <ul className="text-xs text-slate-600 space-y-1.5 font-sans">
          <li>
            • <strong className="text-slate-800">Day MJ, Schultz RD.</strong> <em>Veterinary Immunology: Principles and Practice</em>. 2nd ed. CRC Press, 2014.
          </li>
          <li>
            • <strong className="text-slate-800">Zachary JF.</strong> <em>Pathologic Basis of Veterinary Disease</em>. 7th ed. Elsevier, 2022 (Chapter 5: Diseases of Immunity).
          </li>
          <li>
            • <strong className="text-slate-800">Kumar V, Abbas AK, Aster JC.</strong> <em>Robbins &amp; Cotran Pathologic Basis of Disease</em>. 10th ed. Elsevier, 2021 (Chapter 6: Diseases of the Immune System).
          </li>
        </ul>
      </div>
    </div>
  );
};
