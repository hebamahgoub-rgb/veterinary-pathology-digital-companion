import React from 'react';
import { ExternalLink, Video as VideoIcon, Sparkles } from 'lucide-react';

interface VideoLesson {
  id: string;
  videoId: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  url: string;
}

const INFLAMMATION_VIDEOS: VideoLesson[] = [
  {
    id: 'vid-immunity-bg',
    videoId: '5nFy6FUY0xU',
    title: 'Immunity Background & Innate Defense',
    subtitle: 'Cellular and physical barriers preceding inflammatory activation',
    badge: 'Foundational Immunology',
    description:
      'Explore how non-specific physical, chemical, and cellular defense mechanisms recognize microbial invaders and injury before cellular and vascular inflammatory cascades ignite.',
    url: 'https://youtu.be/5nFy6FUY0xU',
  },
  {
    id: 'vid-acute-overview',
    videoId: 'HAq00u1hNkg',
    title: 'Acute Inflammation Overview',
    subtitle: 'Vascular dynamics, cellular recruitment, and cardinal signs',
    badge: 'Core Lecture',
    description:
      'Visual pathology lecture covering hemodynamic changes, endothelial gap formation, leukocyte margination, transmigration, and the classic five cardinal signs of inflammation.',
    url: 'https://youtu.be/HAq00u1hNkg',
  },
  {
    id: 'vid-cytokines-chemokines',
    videoId: 'yzYnI1al64Q',
    title: 'Cytokines and Chemokines Network',
    subtitle: 'Chemical signaling, interleukins, interferons, and TNF-alpha',
    badge: 'Molecular Mediators',
    description:
      'Detailed overview of the chemical mediator cascades orchestrating local endothelial adhesion molecule upregulation and systemic acute-phase reactions during tissue injury.',
    url: 'https://youtu.be/yzYnI1al64Q',
  },
  {
    id: 'vid-tissue-repair',
    videoId: 'OiF_Dh7YWDc',
    title: 'Tissue Repair 101: Regeneration, Granulation Tissue & Scarring',
    subtitle: 'Angiogenesis, fibroblast proliferation, and ECM remodeling',
    badge: 'Repair & Healing',
    description:
      'Comprehensive walkthrough of tissue healing mechanisms: parenchymal regeneration vs. connective tissue repair, granulation tissue formation, collagen type switching, and wound contraction.',
    url: 'https://youtu.be/OiF_Dh7YWDc',
  },
];

export const InflammationVideos: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-teal-800">
          <VideoIcon className="w-5 h-5" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
            Inflammation Microlearning Video Collection
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Four curated multimedia pathology lectures covering the complete inflammatory sequence—from innate immune recognition to vascular events, cytokine mediator networks, and tissue repair pathways.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {INFLAMMATION_VIDEOS.map((vid) => (
          <article
            key={vid.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video bg-slate-950 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${vid.videoId}`}
                  title={vid.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="p-4 sm:p-5 space-y-2">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
                  {vid.badge}
                </span>
                <h4 className="text-base font-bold text-slate-900 font-serif-academic leading-tight">
                  {vid.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium font-sans">
                  {vid.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                  {vid.description}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 pt-0">
              <a
                href={vid.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-teal-900 hover:bg-teal-50 hover:border-teal-300 text-xs font-semibold transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Suggested Reference Textbooks */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
          Authoritative Veterinary Reference Textbooks
        </h4>
        <ul className="text-xs text-slate-600 space-y-1.5 font-sans">
          <li>
            • <strong className="text-slate-800">Zachary JF.</strong> <em>Pathologic Basis of Veterinary Disease</em>. 7th ed. Elsevier, 2022 (Chapter 3: Inflammation and Healing).
          </li>
          <li>
            • <strong className="text-slate-800">Kumar V, Abbas AK, Aster JC.</strong> <em>Robbins &amp; Cotran Pathologic Basis of Disease</em>. 10th ed. Elsevier, 2021 (Chapter 2: Inflammation and Repair).
          </li>
          <li>
            • <strong className="text-slate-800">Maxie MG.</strong> <em>Jubb, Kennedy, and Palmer&apos;s Pathology of Domestic Animals</em>. 6th ed. Saunders Elsevier, 2016.
          </li>
        </ul>
      </div>
    </div>
  );
};
