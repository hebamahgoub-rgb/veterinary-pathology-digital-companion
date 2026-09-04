import React, { useState } from 'react';
import { ExternalLink, ZoomIn, X, Info } from 'lucide-react';

interface GrowthCase {
  id: string;
  title: string;
  organ: string;
  category: string;
  etiology?: string;
  appearance: string;
  description: string;
  teachingPoint: string;
  imageUrl: string;
  sourceUrl: string;
  sourceLabel: string;
}

const GROWTH_CASES: GrowthCase[] = [
  {
    id: 'gro-case-1',
    title: 'Cerebellar Hypoplasia (Feline Panleukopenia)',
    organ: 'Brain (Cerebellum)',
    category: 'Developmental Defect (Hypoplasia)',
    etiology: 'In utero Feline Panleukopenia Virus (Parvovirus)',
    appearance: 'Gross autopsy specimen (Kitten)',
    description:
      'The cerebellum is markedly reduced in size, with narrow, stunted folia and wide sulcal spaces exposing the dorsal brainstem, while the cerebral hemispheres are normally proportioned.',
    teachingPoint:
      'Parvovirus has strict tropism for rapidly dividing cells; transplacental infection during late gestation or early neonatal life destroys external granular layer neuroblasts, halting cerebellar development and resulting in congenital cerebellar ataxia.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1udLH7MIbX_rgac6ep4HMQTn97BPXknCJ',
    sourceUrl: 'https://drive.google.com/file/d/1udLH7MIbX_rgac6ep4HMQTn97BPXknCJ/view?usp=sharing',
    sourceLabel: 'Cerebellar hypoplasia gross',
  },
  {
    id: 'gro-case-2',
    title: 'Concentric Left Ventricular Hypertrophy (Feline HCM)',
    organ: 'Heart (Left Ventricle)',
    category: 'Cellular Adaptation (Hypertrophy)',
    etiology: 'Hypertrophic Cardiomyopathy (Sarcomeric Mutation)',
    appearance: 'Gross heart specimen, transverse biventricular section',
    description:
      'Massive thickening of the left ventricular free wall and interventricular septum encroaches markedly upon the left ventricular lumen, reducing end-diastolic filling volume (diastolic dysfunction).',
    teachingPoint:
      'Permanent post-mitotic cardiac myocytes cannot divide; they adapt to pressure overload or genetic sarcomeric mutations by synthesizing myofilaments in parallel, producing concentric hypertrophy and reducing ventricular compliance.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1A1jVaYxCt-9ilb0R1BWMlgw1FN4rZwBQ',
    sourceUrl: 'https://drive.google.com/file/d/1A1jVaYxCt-9ilb0R1BWMlgw1FN4rZwBQ/view?usp=sharing',
    sourceLabel: 'Concentric cardiac hypertrophy',
  },
  {
    id: 'gro-case-3',
    title: 'Benign Prostatic Hyperplasia (BPH)',
    organ: 'Prostate Gland',
    category: 'Cellular Adaptation (Hyperplasia)',
    etiology: 'Androgen stimulation (Dihydrotestosterone / DHT in intact dogs)',
    appearance: 'Gross specimen, transverse cut surface (Canine)',
    description:
      'Symmetrically enlarged, firm to spongy, nodular prostate gland with multiple small fluid-filled cysts, compressing the pelvic urethra and causing tenesmus.',
    teachingPoint:
      'BPH is a hormonally mediated hyperplasia of both epithelial and stromal components driven by dihydrotestosterone (DHT). Because the stimulus is hormonal, the process regresses following orchiectomy (castration).',
    imageUrl: 'https://lh3.googleusercontent.com/d/1wOOwVW6iAcopsDdvS-oftQg3KYr_fEPh',
    sourceUrl: 'https://drive.google.com/file/d/1wOOwVW6iAcopsDdvS-oftQg3KYr_fEPh/view?usp=sharing',
    sourceLabel: 'Benign prostatic hyperplasia',
  },
  {
    id: 'gro-case-4',
    title: 'Squamous Metaplasia (Hypovitaminosis A)',
    organ: 'Esophagus & Submucosal Glands',
    category: 'Cellular Adaptation (Metaplasia)',
    etiology: 'Vitamin A Deficiency (Avian / Reptilian)',
    appearance: 'Gross specimen (Parrot)',
    description:
      'Multiple raised, whitish, flat-topped hyperkeratotic pustule-like nodules scattered throughout the esophageal mucosa representing ductal squamous metaplasia and keratin blockage of mucous glands.',
    teachingPoint:
      'Vitamin A is mandatory for the normal differentiation of mucociliary and glandular epithelia. Deficiency causes transdifferentiation into stratified squamous keratinizing epithelium, leading to ductal blockage, secondary bacterial infection, and white mucosal plaques.',
    imageUrl: 'https://lh3.googleusercontent.com/d/16Wu4djTa8z5dkm-y-t-OJxWhJgjqmoI8',
    sourceUrl: 'https://drive.google.com/file/d/16Wu4djTa8z5dkm-y-t-OJxWhJgjqmoI8/view?usp=sharing',
    sourceLabel: 'Squamous metaplasia esophagus',
  },
  {
    id: 'gro-case-5',
    title: 'Corneal Dermoid (Choristoma)',
    organ: 'Eye (Cornea)',
    category: 'Developmental Anomaly (Choristoma)',
    appearance: 'Clinical photograph (Bovine calf)',
    description:
      'A circumscribed plaque of haired skin, complete with normal stratified squamous epithelium, dermis, sebaceous glands, and hair shafts, growing heterotopically on the lateral corneal and conjunctival surface.',
    teachingPoint:
      'A choristoma is an island of histologically normal, mature tissue located in an abnormal anatomical site (heterotopic). A corneal dermoid arises from developmental misdirection of pluripotential surface ectoderm.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1JYoicAhhvRhSxsnQy_RhFcypy7mwxzIp',
    sourceUrl: 'https://drive.google.com/file/d/1JYoicAhhvRhSxsnQy_RhFcypy7mwxzIp/view?usp=sharing',
    sourceLabel: 'Corneal dermoid eye',
  },
];

export const GrowthGallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<GrowthCase | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
          Disorders of Growth Pathology Atlas
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Five classic diagnostic examples illustrating hypoplasia (cerebellar), hypertrophy (concentric cardiac), hyperplasia (prostatic), metaplasia (squamous in hypovitaminosis A), and choristoma (corneal dermoid).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {GROWTH_CASES.map((c) => (
          <article
            key={c.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
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

              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
                    {c.category}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {c.appearance}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic leading-snug">
                  {c.title}
                </h4>

                <p className="text-xs text-slate-500 font-medium font-sans">
                  <strong>Organ:</strong> {c.organ}
                  {c.etiology && <> &bull; <strong>Etiology:</strong> {c.etiology}</>}
                </p>

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
                  {selectedCase.organ} · {selectedCase.category}
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
