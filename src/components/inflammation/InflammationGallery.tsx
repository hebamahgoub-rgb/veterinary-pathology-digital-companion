import React, { useState } from 'react';
import { ExternalLink, ZoomIn, X, Info } from 'lucide-react';

interface GalleryCase {
  id: string;
  title: string;
  organ: string;
  pattern: string;
  etiology?: string;
  appearance: string;
  description: string;
  teachingPoint: string;
  imageUrl: string;
  sourceUrl: string;
  sourceLabel: string;
}

const GALLERY_CASES: GalleryCase[] = [
  {
    id: 'case-1',
    title: 'Fibrinous Pericarditis',
    organ: 'Heart / Pericardium',
    pattern: 'Fibrinous Inflammation',
    appearance: 'Gross specimen',
    description:
      'Fibrinous material coats the serosal surface of the heart and pericardial sac, producing a dull, roughened "bread-and-butter" appearance characteristic of acute fibrinous inflammation.',
    teachingPoint:
      'Distinguish fibrin, an acute non-vascularized exudate, from mature fibrous adhesions, which are organized connective tissue containing proliferating fibroblasts and capillaries.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1pKy_fmEjJ05orY0xRnX55MyK-BVUe3Ia',
    sourceUrl: 'https://drive.google.com/file/d/1pKy_fmEjJ05orY0xRnX55MyK-BVUe3Ia/view?usp=sharing',
    sourceLabel: 'Sero-fibrous pericarditis',
  },
  {
    id: 'case-2',
    title: 'Suppurative Pulmonary Abscess',
    organ: 'Lung',
    pattern: 'Suppurative (Purulent) Inflammation',
    appearance: 'Gross specimen',
    description:
      'A localized pulmonary lesion with central purulent material illustrates tissue liquefaction and accumulation of neutrophil-rich exudate (pus) surrounded by an acute or developing fibrous rim.',
    teachingPoint:
      'Abscess formation is a localized form of suppurative inflammation, commonly associated with pyogenic bacterial infections (e.g., Trueperella pyogenes, Streptococcus spp., Staphylococcus spp.).',
    imageUrl: 'https://lh3.googleusercontent.com/d/16kEr4sJuH4TWKTmZeLscZ9mmfotyrSie',
    sourceUrl: 'https://drive.google.com/file/d/16kEr4sJuH4TWKTmZeLscZ9mmfotyrSie/view?usp=sharing',
    sourceLabel: 'Lung abscess',
  },
  {
    id: 'case-3',
    title: "Granulomatous Enteritis (Johne's Disease)",
    organ: 'Intestine (Ileum / Colon)',
    pattern: 'Granulomatous Inflammation',
    etiology: 'Mycobacterium avium subsp. paratuberculosis',
    appearance: 'Gross specimen',
    description:
      'Severe thickening and transverse corrugation of the intestinal mucosa resembling cerebral convolutions, characteristic of chronic granulomatous enteritis in paratuberculosis.',
    teachingPoint:
      'Persistent intracellular mycobacterial infection produces a macrophage-dominant chronic inflammatory response with sheets of epithelioid macrophages infiltrating the lamina propria and submucosa.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1ODx4QFcL96Kup3pFFumtRGh6oYi0ljfN',
    sourceUrl: 'https://drive.google.com/file/d/1ODx4QFcL96Kup3pFFumtRGh6oYi0ljfN/view?usp=sharing',
    sourceLabel: 'Paratuberculosis intestine',
  },
  {
    id: 'case-4',
    title: 'Granulation Tissue',
    organ: 'Skin / Subcutis',
    pattern: 'Repair / Organization',
    appearance: 'Histologic section, low power (H&E)',
    description:
      'Delicate, perpendicularly oriented new capillary formation (angiogenesis) accompanied by active fibroblastic proliferation and loose extracellular matrix deposition during wound healing.',
    teachingPoint:
      'Granulation tissue is an early reparative tissue that bridges defects before maturation into a dense, relatively avascular, collagen-rich scar.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1zXl2rw0O5ilBpsJ9xSW8as2E9wgf10mx',
    sourceUrl: 'https://drive.google.com/file/d/1zXl2rw0O5ilBpsJ9xSW8as2E9wgf10mx/view?usp=sharing',
    sourceLabel: 'Granulation tissue, low power',
  },
];

export const InflammationGallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<GalleryCase | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
          Inflammation Pathology Atlas
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Gross and histological pathology cases illustrating selected classical patterns of acute exudates, chronic granulomatous responses, and reparative tissue. Click any card to inspect the specimen in high resolution.
        </p>
      </div>

      {/* Grid of 4 cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {GALLERY_CASES.map((c) => (
          <article
            key={c.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image with zoom trigger */}
              <div
                onClick={() => setSelectedCase(c)}
                className="relative aspect-video sm:h-52 bg-slate-100 overflow-hidden cursor-pointer group"
              >
                <img
                  src={c.imageUrl}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                  <ZoomIn className="w-4 h-4" />
                  <span>Enlarge Specimen</span>
                </div>
              </div>

              {/* Case Details */}
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
                    {c.pattern}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {c.appearance}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic leading-snug">
                  {c.title}
                </h4>

                <ul className="text-xs text-slate-600 space-y-1 font-sans">
                  <li>
                    <strong className="text-slate-800">Organ:</strong> {c.organ}
                  </li>
                  {c.etiology && (
                    <li>
                      <strong className="text-slate-800">Etiology:</strong>{' '}
                      <em>{c.etiology}</em>
                    </li>
                  )}
                </ul>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {c.description}
                </p>

                <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-950 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-teal-900">
                    <Info className="w-3.5 h-3.5" /> Teaching Point
                  </span>
                  <p className="leading-relaxed font-sans">{c.teachingPoint}</p>
                </div>
              </div>
            </div>

            {/* Footer with credit link */}
            <div className="p-4 sm:p-5 pt-0">
              <a
                href={c.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-teal-900 transition-colors"
              >
                <span>Full resolution reference: {c.sourceLabel}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Zoom View */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-serif-academic">
                  {selectedCase.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {selectedCase.organ} · {selectedCase.pattern}
                </p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-950 flex items-center justify-center">
              <img
                src={selectedCase.imageUrl}
                alt={selectedCase.title}
                className="max-h-[60vh] object-contain rounded-lg"
              />
            </div>

            <div className="p-5 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {selectedCase.description}
              </p>
              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-teal-950">
                <strong>Teaching Point: </strong>
                {selectedCase.teachingPoint}
              </div>
              <div className="pt-2">
                <a
                  href={selectedCase.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-teal-900 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>Open Drive Source ({selectedCase.sourceLabel})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
