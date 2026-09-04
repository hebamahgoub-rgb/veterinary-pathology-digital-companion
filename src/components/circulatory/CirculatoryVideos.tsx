import React from 'react';
import { ExternalLink, Video as VideoIcon } from 'lucide-react';

export const CirculatoryVideos: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-indigo-800">
          <VideoIcon className="w-5 h-5" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
            Hemodynamic &amp; Thrombosis Video Resources
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-sans">
          Curated clinical video recordings and multimedia resources covering Starling forces, Virchow&apos;s triad, intracardiac thrombus dynamics, and the coagulopathy cascade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Case Video: Echocardiogram */}
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
          <div>
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1OvhU6jpqMjusKOMcmXpnhfypyH2JO4Se/preview"
                title="Echocardiographic video of a left atrial thrombus in a cat"
                allow="autoplay"
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-4 sm:p-5 space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full font-mono-code">
                Clinical Echocardiography
              </span>
              <h4 className="text-base font-bold text-slate-900 font-serif-academic leading-tight">
                Feline Left Atrial Thrombus (HCM)
              </h4>
              <p className="text-xs text-slate-500 font-medium font-sans">
                Real-time intracardiac thrombus visualization in a cat
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                Echocardiographic demonstration of an intracardiac thrombus adhering to the left atrial wall in a cat with severe hypertrophic cardiomyopathy, the source of saddle thromboemboli.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 pt-0">
            <a
              href="https://drive.google.com/file/d/1OvhU6jpqMjusKOMcmXpnhfypyH2JO4Se/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-indigo-900 hover:bg-indigo-50 hover:border-indigo-300 text-xs font-semibold transition-colors"
            >
              <span>Open in Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>

        {/* Video 2: Virchow's Triad & Thrombosis */}
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
          <div>
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/p1o1MUG4tT4"
                title="Virchow's Triad and Thrombosis"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-4 sm:p-5 space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full font-mono-code">
                Hemodynamics Lecture
              </span>
              <h4 className="text-base font-bold text-slate-900 font-serif-academic leading-tight">
                Virchow&apos;s Triad and Thrombogenesis
              </h4>
              <p className="text-xs text-slate-500 font-medium font-sans">
                Endothelial disruption, laminar flow alteration, and hypercoagulability
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                Visual explanation of the pathophysiological triumvirate governing intravascular thrombus formation, propagation, embolization, and recanalization.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 pt-0">
            <a
              href="https://youtu.be/p1o1MUG4tT4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-indigo-900 hover:bg-indigo-50 hover:border-indigo-300 text-xs font-semibold transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
          Recommended Reading &amp; Authoritative References
        </h4>
        <ul className="text-xs text-slate-600 space-y-1.5 font-sans">
          <li>
            • <strong className="text-slate-800">Zachary JF.</strong> <em>Pathologic Basis of Veterinary Disease</em>. 7th ed. Elsevier, 2022 (Chapter 2: Disturbances of Hemodynamics, Shock, and Vascular Pathology).
          </li>
          <li>
            • <strong className="text-slate-800">Kumar V, Abbas AK, Aster JC.</strong> <em>Robbins &amp; Cotran Pathologic Basis of Disease</em>. 10th ed. Elsevier, 2021 (Chapter 4: Hemodynamic Disorders, Thromboembolic Disease, and Shock).
          </li>
          <li>
            • <strong className="text-slate-800">Maxie MG.</strong> <em>Jubb, Kennedy, and Palmer&apos;s Pathology of Domestic Animals</em>. 6th ed. Saunders Elsevier, 2016.
          </li>
        </ul>
      </div>
    </div>
  );
};
