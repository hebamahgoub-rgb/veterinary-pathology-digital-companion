import React, { useState } from 'react';
import { ExternalLink, ZoomIn, X, Info } from 'lucide-react';

interface ImmuneCase {
  id: string;
  title: string;
  organ: string;
  disease: string;
  mechanism: string;
  appearance: string;
  description: string;
  teachingPoint: string;
  imageUrl: string;
  sourceUrl: string;
  sourceLabel: string;
}

const IMMUNE_CASES: ImmuneCase[] = [
  {
    id: 'imm-case-1',
    title: 'Canine Immune-Mediated Hemolytic Anemia (IMHA)',
    organ: 'Peripheral Blood Smear',
    disease: 'Canine IMHA',
    mechanism: 'Type II Hypersensitivity (Cytotoxic Autoantibody)',
    appearance: 'Wright-Giemsa stain, high power (oil immersion)',
    description:
      'Blood smear showing marked spherocytosis (small, round, darkly staining erythrocytes lacking central pallor), spontaneous red blood cell autoagglutination into grape-like clusters, and polychromatophilic reticulocytes indicating regenerative erythropoiesis.',
    teachingPoint:
      'Spherocytes form when splenic macrophages phagocytose portions of the antibody-coated erythrocyte membrane, reducing membrane area while preserving volume.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1PpqFBFpXc7YXdQtZNGB2RaC7AEfCjDCe',
    sourceUrl: 'https://drive.google.com/file/d/1PpqFBFpXc7YXdQtZNGB2RaC7AEfCjDCe/view?usp=sharing',
    sourceLabel: 'IMHA blood smear',
  },
  {
    id: 'imm-case-2',
    title: 'Equine Purpura Hemorrhagica (Gross Pathology)',
    organ: 'Skeletal Muscle & Subcutis',
    disease: 'Purpura Hemorrhagica (Post-Strangles)',
    mechanism: 'Type III Hypersensitivity (Immune-Complex Vasculitis)',
    appearance: 'Gross autopsy specimen (Horse)',
    description:
      'Extensive, confluent ecchymotic and suffusive hemorrhages and gelatinous edema infiltrating skeletal muscle fascial planes and subcutaneous tissues following Streptococcus equi subsp. equi infection.',
    teachingPoint:
      'Circulating streptococcal M protein-IgA/IgG immune complexes deposit in post-capillary venule walls, activating complement and attracting neutrophils, causing necrotizing vasculitis and hemorrhage.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NxzkW6BasFwrPG-LH8RLhSRF28Ll5Vio',
    sourceUrl: 'https://drive.google.com/file/d/1NxzkW6BasFwrPG-LH8RLhSRF28Ll5Vio/view?usp=sharing',
    sourceLabel: 'Purpura hemorrhagica gross muscle',
  },
  {
    id: 'imm-case-3',
    title: 'Equine Purpura Hemorrhagica (Histopathology)',
    organ: 'Subcutis / Small Vessel',
    disease: 'Leukocytoclastic Vasculitis',
    mechanism: 'Type III Hypersensitivity',
    appearance: 'H&E stain, high power',
    description:
      'Small venule showing segmental fibrinoid necrosis of the vessel wall with dense mural and perivascular infiltration of degenerate neutrophils and prominent nuclear debris ("nuclear dust" / leukocytoclasia).',
    teachingPoint:
      'Leukocytoclastic vasculitis is the histologic hallmark of immune complex-mediated vascular injury, with neutrophil lysosomal enzyme release destroying the vascular basement membrane.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1deqxwp3ktMM8Y69cFOmozWixNrCGlqJ4',
    sourceUrl: 'https://drive.google.com/file/d/1deqxwp3ktMM8Y69cFOmozWixNrCGlqJ4/view?usp=sharing',
    sourceLabel: 'Purpura hemorrhagica histology',
  },
  {
    id: 'imm-case-4',
    title: 'Equine Strangles (Lymphadenitis)',
    organ: 'Retropharyngeal Lymph Node',
    disease: 'Strangles (Streptococcus equi equi)',
    mechanism: 'Suppurative Lymphadenitis / Pyogenic Infection',
    appearance: 'Gross specimen (Horse)',
    description:
      'Massive expansion of the retropharyngeal and submandibular lymph nodes with central liquefactive necrosis and abundant thick, creamy purulent exudate (pus) compressing adjacent upper respiratory passages.',
    teachingPoint:
      'Virulent Streptococcus equi subsp. equi produces antiphagocytic capsules and SeM protein, evading clearance in regional lymph nodes and stimulating intense neutrophil recruitment.',
    imageUrl: 'https://lh3.googleusercontent.com/d/13HriHF4FRCzIv3rH7fvb0xe9NRvdynLB',
    sourceUrl: 'https://drive.google.com/file/d/13HriHF4FRCzIv3rH7fvb0xe9NRvdynLB/view?usp=sharing',
    sourceLabel: 'Strangles lymph node abscess',
  },
  {
    id: 'imm-case-5',
    title: 'Canine Pemphigus Foliaceus',
    organ: 'Epidermis / Skin',
    disease: 'Pemphigus Foliaceus',
    mechanism: 'Type II Hypersensitivity (Anti-Desmocollin-1 Autoantibodies)',
    appearance: 'Histopathology, H&E (medium power)',
    description:
      'Subcorneal pustule containing numerous neutrophils and detached, rounded, individual eosinophilic epithelial cells (acantholytic cells) that have lost their intercellular desmosomal bridges.',
    teachingPoint:
      'Autoantibodies against desmosomal cadherins (desmocollin-1) disrupt desmosome cohesion, causing suprabasilar/subcorneal keratinocyte separation (acantholysis) and sterile pustule formation.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NQg7xu_J9u-5bF1wf1Jqk44qtMrytU55',
    sourceUrl: 'https://drive.google.com/file/d/1NQg7xu_J9u-5bF1wf1Jqk44qtMrytU55/view?usp=sharing',
    sourceLabel: 'Pemphigus foliaceus histology',
  },
  {
    id: 'imm-case-6',
    title: 'Feline Immunodeficiency Virus (FIV) Lymphoid Depletion',
    organ: 'Lymph Node',
    disease: 'FIV / Secondary Immunodeficiency',
    mechanism: 'Viral Cytotoxicity & CD4+ T-Cell Depletion',
    appearance: 'Histopathology comparison (normal vs FIV-depleted)',
    description:
      'Marked follicular atrophy, depletion of paracortical and germinal center lymphocytes, and stromal collapse in a lymph node from an FIV-infected cat compared to the prominent active lymphoid follicles of an uninfected control.',
    teachingPoint:
      'FIV infects CD4+ T cells, CD8+ T cells, and macrophages, leading to progressive CD4+ helper T cell decline, defective cytokine synthesis, and opportunistic bacterial or fungal infections.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1pfMQroZeWK5KMYY6WLyeW-4jYPMOV_61',
    sourceUrl: 'https://drive.google.com/file/d/1pfMQroZeWK5KMYY6WLyeW-4jYPMOV_61/view?usp=sharing',
    sourceLabel: 'FIV lymph node depletion',
  },
  {
    id: 'imm-case-7',
    title: 'Immune-Complex Glomerular Injury',
    organ: 'Kidney (Renal Glomerulus)',
    disease: 'Membranoproliferative Glomerulonephritis',
    mechanism: 'Type III Hypersensitivity',
    appearance: 'Ultrastructural / Diagrammatic representation',
    description:
      'Subendothelial and mesangial deposition of antigen-antibody immune complexes within the glomerular capillary wall, triggering complement activation, neutrophil recruitment, and glomerular capillary loop thickening.',
    teachingPoint:
      'Chronic viral (FIP, FeLV), parasitic (Dirofilaria immitis), or bacterial antigenemia drives persistent circulating immune complexes that entrap in glomerular filtration barriers, producing proteinuria and nephrotic syndrome.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1SzNxGlUeFTvJpswoXfOLePCdPAztxtqO',
    sourceUrl: 'https://drive.google.com/file/d/1SzNxGlUeFTvJpswoXfOLePCdPAztxtqO/view?usp=sharing',
    sourceLabel: 'Immune complex glomerulonephritis',
  },
  {
    id: 'imm-case-8',
    title: 'Tuberculin Skin Test Reaction',
    organ: 'Caudal Fold Skin (Bovine)',
    disease: 'Bovine Tuberculosis (Mycobacterium bovis)',
    mechanism: 'Type IV Hypersensitivity (Delayed-Type Cell-Mediated)',
    appearance: 'Clinical diagnostic illustration',
    description:
      'Focal, indurated swelling of the caudal fold 72 hours after intradermal injection of bovine purified protein derivative (PPD) tuberculin, mediated by memory CD4+ Th1 lymphocytes and recruited macrophages.',
    teachingPoint:
      'The tuberculin reaction requires 48 to 72 hours to peak because sensitized memory T lymphocytes must home to the antigen site, secrete IFN-gamma, and recruit circulating monocytes to produce localized tissue induration.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1fcnI5874nrl5nypX--yiym5io8z-Ml_n',
    sourceUrl: 'https://drive.google.com/file/d/1fcnI5874nrl5nypX--yiym5io8z-Ml_n/view?usp=sharing',
    sourceLabel: 'Tuberculin reaction caudal fold',
  },
];

export const ImmuneGallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<ImmuneCase | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
          Immunopathology Specimen Atlas
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Eight clinical and microscopic cases illustrating cytotoxic autoantibodies (IMHA), immune complex vasculitis (purpura hemorrhagica), acantholytic dermatopathies (pemphigus), retroviral lymphoid depletion (FIV), and delayed-type hypersensitivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {IMMUNE_CASES.map((c) => (
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
                    {c.mechanism}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {c.appearance}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic leading-snug">
                  {c.title}
                </h4>

                <p className="text-xs text-slate-500 font-medium font-sans">
                  <strong>Organ:</strong> {c.organ} &bull; <strong>Disease:</strong> {c.disease}
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
                  {selectedCase.organ} · {selectedCase.mechanism}
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
