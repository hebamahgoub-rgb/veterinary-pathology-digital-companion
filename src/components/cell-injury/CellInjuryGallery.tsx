import React, { useState } from 'react';
import { ExternalLink, Maximize2, X, Microscope, Info } from 'lucide-react';

interface GalleryCase {
  id: string;
  image: string;
  alt: string;
  title: string;
  badge?: string;
  meta: { label: string; value: string }[];
  description: string;
  teachingPoint: string;
  creditText: string;
  sourceUrl: string;
  sourceTitle: string;
  licenseText?: string;
  licenseUrl?: string;
}

const GALLERY_CASES: GalleryCase[] = [
  {
    id: 'case-1',
    image: 'https://lh3.googleusercontent.com/d/1bv2WF9ngvO4M1oeUrs3zaezE6cQNc68u',
    alt: 'Gross kidney showing multiple pale cortical infarcts',
    title: 'Renal Infarction (Coagulative Necrosis)',
    badge: 'Comparative Pathology — Human Example',
    meta: [
      { label: 'Organ', value: 'Kidney' },
      { label: 'Pattern', value: 'Coagulative Necrosis' },
      { label: 'Stage', value: 'Acute/Subacute Infarction' },
    ],
    description:
      'Gross kidney showing pale, wedge-shaped cortical infarcts typical of coagulative necrosis resulting from sudden loss of arterial blood supply.',
    teachingPoint:
      'In solid organs (except the brain), ischemia typically produces coagulative necrosis with preserved architectural outlines.',
    creditText: 'Denis Desaulniers and Bernard Têtu, Université Laval, via Wikimedia Commons, CC BY-SA 4.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rein_Infarctus_55-o.apatho-1486a-rein.jpg',
    sourceTitle: 'Wikimedia Commons',
    licenseText: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    id: 'case-2',
    image: 'https://lh3.googleusercontent.com/d/1-cJ0RkaG8UBkwJ7PR100Utz4djwYJwaR',
    alt: 'Gross coronal brain section showing an old cerebral infarct with cavitation',
    title: 'Chronic Cerebral Infarction (Liquefactive Necrosis)',
    badge: 'Comparative Pathology — Human Example',
    meta: [
      { label: 'Organ', value: 'Brain' },
      { label: 'Pattern', value: 'Liquefactive Necrosis' },
      { label: 'Stage', value: 'Chronic cerebral infarction' },
    ],
    description:
      'An old infarct in the posterior parietal region has undergone tissue loss and cavitation, illustrating the liquefactive outcome of ischemic injury in the central nervous system.',
    teachingPoint:
      'Unlike infarcts in most solid organs, cerebral infarcts undergo enzymatic liquefaction and may ultimately leave a cystic cavity.',
    creditText: 'Mikael Häggström, M.D., via Wikimedia Commons, CC0 1.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gross_pathology_of_an_old_cerebral_stroke.jpg',
    sourceTitle: 'Wikimedia Commons',
    licenseText: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    id: 'case-3',
    image: 'https://lh3.googleusercontent.com/d/1C2EFwj7f4WlMUYX79ZDYV-Ng2yD76cRl',
    alt: 'Opened caseous lymphadenitis lesion in a ewe containing thick caseous material',
    title: 'Caseous Lymphadenitis',
    meta: [
      { label: 'Organ', value: 'Lymph Node (Small Ruminant)' },
      { label: 'Pattern', value: 'Caseous Necrosis' },
      { label: 'Etiology', value: 'Corynebacterium pseudotuberculosis' },
    ],
    description:
      'A chronic abscess in a ewe contains thick, dry-to-pasty caseous material. Older lesions may develop laminated or onion-ring organisation.',
    teachingPoint:
      'Caseous necrosis combines elements of coagulative and liquefactive necrosis, producing friable, cheese-like debris.',
    creditText: 'Lucyin, via Wikimedia Commons, CC BY-SA 4.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Froeds_cl%C3%A5s_berbis_matire_froumadjrece.jpg',
    sourceTitle: 'Wikimedia Commons',
    licenseText: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    id: 'case-4',
    image: 'https://lh3.googleusercontent.com/d/1wLxGOdHs28GX9-xQItVvKvlPBzZTKqCm',
    alt: 'H&E section showing tryptic fat necrosis associated with severe pancreatitis',
    title: 'Pancreatic Fat Necrosis',
    meta: [
      { label: 'Organ', value: 'Peripancreatic Adipose Tissue' },
      { label: 'Pattern', value: 'Enzymatic Fat Necrosis' },
      { label: 'Stain', value: 'H&E' },
    ],
    description:
      'Necrotic adipose tissue is transformed into eosinophilic, poorly defined material accompanied by acute inflammatory cells. Calcium soaps may form within affected fat.',
    teachingPoint:
      'Activated pancreatic lipases hydrolyze triglycerides into free fatty acids that bind calcium (saponification).',
    creditText: 'Patho, via Wikimedia Commons, CC BY-SA 3.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tryptic_fat_tissue_necrosis_in_severe_pancreatitis%2C_HE_1.JPG',
    sourceTitle: 'Wikimedia Commons',
    licenseText: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    id: 'case-5',
    image: 'https://lh3.googleusercontent.com/d/1LcuQTdzwO7b631_KlHlxajuw1CIqkKn_',
    alt: 'Historical medical illustration showing dry gangrene of both feet after frostbite',
    title: 'Dry Gangrene Following Frostbite',
    badge: 'Comparative Pathology — Human Example',
    meta: [
      { label: 'Site', value: 'Distal Extremities' },
      { label: 'Pattern', value: 'Ischemic Gangrenous Necrosis' },
      { label: 'Etiology', value: 'Severe cold injury' },
    ],
    description:
      'Both distal extremities show dark, dry, sharply demarcated devitalised tissue following severe cold-induced vascular injury.',
    teachingPoint:
      'Dry gangrene represents predominantly coagulative ischemic necrosis of an extremity before secondary bacterial infection and liquefaction develop.',
    creditText: 'Thomas Godart; Barts Health Archives, via Wikimedia Commons, CC BY 4.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dry_gangrene_of_both_feet_from_frostbite_Wellcome_L0062218.jpg',
    sourceTitle: 'Wikimedia Commons',
    licenseText: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  },
  {
    id: 'case-6',
    image: 'https://lh3.googleusercontent.com/d/1wp4o_MjfCLZ7PAafVOoSTLGEN1OOADy_',
    alt: 'H&E section of frog epidermis showing apoptotic keratinocytes and nuclear debris',
    title: 'Apoptotic Keratinocytes in Amphibian Skin',
    meta: [
      { label: 'Tissue', value: 'Skin' },
      { label: 'Species', value: 'Foothill yellow-legged frog' },
      { label: 'Pattern', value: 'Apoptotic keratinocytes and epidermal necrosis' },
      { label: 'Stain', value: 'Histological section' },
    ],
    description:
      'Small epidermal foci contain apoptotic keratinocytes and nuclear debris, demonstrating the condensed and fragmented nuclear material associated with programmed cell death.',
    teachingPoint:
      'Apoptotic cells appear individually as shrunken cells or condensed nuclear fragments. In mixed lesions, apoptosis may occur beside areas of tissue necrosis.',
    creditText: 'Saskia Keller, USGS National Wildlife Health Center; public domain, via Wikimedia Commons (Cropped from original Panel A).',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Photomicrographs_from_a_foothill_yellow-legged_frog_%28Rana_boylii%29.jpg',
    sourceTitle: 'Wikimedia Commons',
  },
];

export const CellInjuryGallery: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<GalleryCase | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-950 leading-relaxed">
        <Info className="w-4 h-4 text-amber-800 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-900 font-bold">Comparative pathology: </strong>
          Selected human specimens are included where they clearly demonstrate fundamental pathological processes shared across species. Each human-derived example is explicitly labelled.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {GALLERY_CASES.map((item) => (
          <div
            key={item.id}
            id={`case-card-${item.id}`}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between group"
          >
            <div>
              {/* Image Holder with Lightbox Trigger */}
              <div className="relative bg-slate-900 aspect-[16/10] overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain cursor-pointer group-hover:scale-[1.02] transition-transform duration-200"
                  onClick={() => setActiveModalImage(item)}
                />
                <button
                  onClick={() => setActiveModalImage(item)}
                  className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white/90 text-xs backdrop-blur-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer"
                  aria-label={`Enlarge ${item.title}`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-medium pr-0.5">Enlarge</span>
                </button>
              </div>

              {/* Attribution beneath image */}
              <div className="p-2.5 bg-slate-50 border-b border-slate-100 text-[11px] text-slate-500 leading-snug">
                <span>Image: {item.creditText.split('via')[0]} via </span>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-900 hover:underline inline-flex items-center gap-0.5 font-medium"
                >
                  <span>{item.sourceTitle}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                {item.licenseText && (
                  <>
                    <span>, </span>
                    {item.licenseUrl ? (
                      <a
                        href={item.licenseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {item.licenseText}
                      </a>
                    ) : (
                      <span>{item.licenseText}</span>
                    )}
                  </>
                )}
                .
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 space-y-3">
                {item.badge && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono-code">
                    {item.badge}
                  </span>
                )}

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic leading-tight">
                  {item.title}
                </h3>

                {/* Metadata List */}
                <ul className="space-y-1 text-xs text-slate-600 bg-slate-50/80 border border-slate-200/80 rounded-xl p-2.5 font-sans">
                  {item.meta.map((m, idx) => (
                    <li key={idx} className="flex items-baseline gap-1.5">
                      <strong className="text-slate-900 font-semibold">{m.label}:</strong>
                      <span>{m.value}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="bg-amber-50/80 border-l-3 border-amber-700 p-2.5 rounded-r-xl text-xs text-amber-950 font-sans leading-relaxed">
                  <strong className="text-amber-900 font-semibold">Teaching Point: </strong>
                  {item.teachingPoint}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GALLERY CREDITS SUBSECTION */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
        <h3 className="text-sm font-bold text-slate-900 font-sans uppercase tracking-wider">
          Gallery Image Credits
        </h3>
        <ul className="space-y-2 text-xs text-slate-600 divide-y divide-slate-200/60 leading-relaxed font-sans">
          <li className="pt-1.5">
            <strong className="text-slate-800">Renal Infarction (Coagulative Necrosis): </strong>
            Denis Desaulniers and Bernard Têtu, Université Laval, via{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Rein_Infarctus_55-o.apatho-1486a-rein.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Wikimedia Commons <ExternalLink className="w-2.5 h-2.5" />
            </a>
            ,{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              CC BY-SA 4.0
            </a>
            .
          </li>
          <li className="pt-2">
            <strong className="text-slate-800">Chronic Cerebral Infarction (Liquefactive Necrosis): </strong>
            Mikael Häggström, M.D., via{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Gross_pathology_of_an_old_cerebral_stroke.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Wikimedia Commons <ExternalLink className="w-2.5 h-2.5" />
            </a>
            ,{' '}
            <a
              href="https://creativecommons.org/publicdomain/zero/1.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              CC0 1.0
            </a>
            .
          </li>
          <li className="pt-2">
            <strong className="text-slate-800">Caseous Lymphadenitis: </strong>
            Lucyin, via{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Froeds_cl%C3%A5s_berbis_matire_froumadjrece.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Wikimedia Commons <ExternalLink className="w-2.5 h-2.5" />
            </a>
            ,{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              CC BY-SA 4.0
            </a>
            .
          </li>
          <li className="pt-2">
            <strong className="text-slate-800">Pancreatic Fat Necrosis: </strong>
            Patho, via{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Tryptic_fat_tissue_necrosis_in_severe_pancreatitis%2C_HE_1.JPG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Wikimedia Commons <ExternalLink className="w-2.5 h-2.5" />
            </a>
            ,{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/3.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              CC BY-SA 3.0
            </a>
            .
          </li>
          <li className="pt-2">
            <strong className="text-slate-800">Dry Gangrene Following Frostbite: </strong>
            Thomas Godart; Barts Health Archives, via{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Dry_gangrene_of_both_feet_from_frostbite_Wellcome_L0062218.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Wikimedia Commons <ExternalLink className="w-2.5 h-2.5" />
            </a>
            ,{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              CC BY 4.0
            </a>
            .
          </li>
          <li className="pt-2">
            <strong className="text-slate-800">Apoptotic Keratinocytes in Amphibian Skin: </strong>
            Saskia Keller, USGS National Wildlife Health Center; public domain, via{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Photomicrographs_from_a_foothill_yellow-legged_frog_%28Rana_boylii%29.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Wikimedia Commons <ExternalLink className="w-2.5 h-2.5" />
            </a>{' '}
            (Cropped from original Panel A).
          </li>
        </ul>
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveModalImage(null)}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center max-h-[90vh]">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute -top-10 right-0 p-1.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeModalImage.image}
              alt={activeModalImage.alt}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className="mt-3 text-center text-xs text-slate-200 max-w-2xl px-2 space-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-bold text-sm text-white">{activeModalImage.title}</p>
              <p className="text-slate-300">{activeModalImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
