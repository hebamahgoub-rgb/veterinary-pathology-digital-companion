import React from 'react';
import { ExternalLink, Video as VideoIcon } from 'lucide-react';

export const GrowthVideos: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-teal-800">
          <VideoIcon className="w-5 h-5" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
            Cellular Adaptations &amp; Growth Disorders Lectures
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-sans">
          Curated multimedia lectures and veterinary pathology resources covering the distinctions between hypertrophy, hyperplasia, atrophy, metaplasia, dysplasia, and neoplasia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
          <div>
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/zM709Y8j1zY"
                title="Cellular Adaptations - Hypertrophy, Hyperplasia, Atrophy, Metaplasia"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-4 sm:p-5 space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
                Core Pathology
              </span>
              <h4 className="text-base font-bold text-slate-900 font-serif-academic leading-tight">
                Cellular Adaptations of Growth
              </h4>
              <p className="text-xs text-slate-500 font-medium font-sans">
                Molecular drivers of cell size, cell number, and phenotype switching
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                Visual walkthrough examining physiological vs pathological stimuli triggering atrophy, hypertrophy, hyperplasia, and squamous/osseous metaplasia.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 pt-0">
            <a
              href="https://youtu.be/zM709Y8j1zY"
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
                src="https://www.youtube.com/embed/n4p8jVzY7iY"
                title="Hypertrophic Cardiomyopathy in Cats"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-4 sm:p-5 space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
                Comparative Pathology
              </span>
              <h4 className="text-base font-bold text-slate-900 font-serif-academic leading-tight">
                Cardiac Remodeling &amp; Feline HCM
              </h4>
              <p className="text-xs text-slate-500 font-medium font-sans">
                Concentric myocardial hypertrophy and microvascular dynamics
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                Clinical review of left ventricular concentric hypertrophy, myofiber disarray, and subsequent left atrial enlargement leading to cardiogenic pulmonary edema and thromboembolism.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 pt-0">
            <a
              href="https://youtu.be/n4p8jVzY7iY"
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
          Key Veterinary Pathology References
        </h4>
        <ul className="text-xs text-slate-600 space-y-1.5 font-sans">
          <li>
            • <strong className="text-slate-800">Zachary JF.</strong> <em>Pathologic Basis of Veterinary Disease</em>. 7th ed. Elsevier, 2022 (Chapter 1: Cellular Adaptations, Injury, and Death).
          </li>
          <li>
            • <strong className="text-slate-800">Kumar V, Abbas AK, Aster JC.</strong> <em>Robbins &amp; Cotran Pathologic Basis of Disease</em>. 10th ed. Elsevier, 2021 (Chapter 1: Cellular Responses to Stress and Toxic Insults).
          </li>
          <li>
            • <strong className="text-slate-800">Maxie MG.</strong> <em>Jubb, Kennedy, and Palmer&apos;s Pathology of Domestic Animals</em>. 6th ed. Saunders Elsevier, 2016.
          </li>
        </ul>
      </div>
    </div>
  );
};
