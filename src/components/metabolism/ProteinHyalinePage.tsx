import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import { SegmentedLessonLayout, LessonSectionItem } from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProteinHyalinePageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const PROTEIN_HYALINE_SECTIONS: LessonSectionItem[] = [
  { id: 'concept-hyaline', title: 'A. Concept of Hyaline', shortTitle: 'Concept' },
  { id: 'intracellular-protein', title: 'B. Intracellular Accumulations', shortTitle: 'Intracellular' },
  { id: 'cytoskeletal-keratin', title: 'Mallory-Denk & Cytoskeletal', shortTitle: 'Cytoskeletal' },
  { id: 'extracellular-hyaline', title: 'C. Extracellular Hyaline', shortTitle: 'Extracellular' },
  { id: 'differential-table', title: 'D. Differential Diagnosis Table', shortTitle: 'Differential' },
  { id: 'focus-renal-droplets', title: 'E. Focus: Renal Hyaline Droplets', shortTitle: 'Renal Droplets' },
  { id: 'focus-russell-bodies', title: 'F. Focus: Russell Bodies', shortTitle: 'Russell Bodies' },
  { id: 'focus-vascular-hyaline', title: 'G. Focus: Vascular Hyalinosis', shortTitle: 'Vascular Hyaline' },
  { id: 'summary-knowledge-check', title: 'Summary & Knowledge Check', shortTitle: 'Review' },
];

export const ProteinHyalinePage: React.FC<ProteinHyalinePageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [completedSections, setCompletedSections] = useState<number[]>([0]);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const toggleDetail = (key: string) => {
    setOpenDetails((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectSection = (index: number) => {
    setCurrentSectionIndex(index);
    setCompletedSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  const handleNextSection = () => {
    if (currentSectionIndex < PROTEIN_HYALINE_SECTIONS.length - 1) {
      const nextIdx = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIdx);
      setCompletedSections((prev) => (prev.includes(nextIdx) ? prev : [...prev, nextIdx]));
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const handleCompleteLesson = () => {
    onNavigate('disturbance-cell-metabolism');
  };

  const fontClass =
    fontSize === 'scholar'
      ? 'font-serif-academic text-base sm:text-lg'
      : fontSize === 'large'
      ? 'text-base sm:text-lg'
      : 'text-sm sm:text-base';

  const renderCurrentSegment = () => {
    switch (currentSectionIndex) {
      case 0:
        // Segment 1: A. Concept of Hyaline
        return (
          <section
            id="segment-concept-hyaline"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                A. Concept of "Hyaline" in Pathology
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                The term <strong>hyaline</strong> is purely a descriptive histological adjective (derived from Greek <em>hyalos</em>, meaning glass), rather than a single distinct chemical compound. It refers to any homogeneous, glassy, structureless, brightly eosinophilic (pink) material observed under light microscopy with standard hematoxylin and eosin (H&amp;E) staining.
              </p>
            </div>

            {/* Figure 1: Morphologic spectrum of hyaline change */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/1v6GV6IoaJigT6i3Olf-SmKsFdhk0ccvy"
              alt="Morphologic spectrum of hyaline change in tissues"
              caption="Morphologic spectrum of hyaline change in tissues. Hyaline appearance is descriptive and encompasses diverse intracellular and extracellular proteinaceous accumulations."
            />
          </section>
        );

      case 1:
        // Segment 2: B. Intracellular Protein Accumulations
        return (
          <section
            id="segment-intracellular-protein"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              B. Intracellular Protein Accumulations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 border border-slate-200 rounded-xl bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                  1. Renal Protein Reabsorption Droplets
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In proteinuric renal diseases, excess albumin leaking through damaged glomerular filters is reabsorbed by proximal tubular epithelial cells via pinocytosis, accumulating as dense pink cytoplasmic droplets.
                </p>
              </div>

              <div className="p-3.5 border border-slate-200 rounded-xl bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                  2. Russell Bodies in Plasma Cells
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Massive accumulation of synthesized immunoglobulins within dilated rough endoplasmic reticulum of chronically stimulated plasma cells (Mott cells).
                </p>
              </div>

              <div className="p-3.5 border border-slate-200 rounded-xl bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                  3. Mallory-Denk Bodies in Hepatocytes
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aggregated, ubiquitinated cytokeratin intermediate filaments forming rope-like eosinophilic cytoplasmic inclusions in injured or toxic hepatocytes.
                </p>
              </div>

              <div className="p-3.5 border border-slate-200 rounded-xl bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                  4. Neurofibrillary Tangles
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aggregations of hyperphosphorylated tau proteins and neurofilaments within degenerating neuronal cell bodies.
                </p>
              </div>
            </div>

            {/* Figures 2 & 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1aYpITex-d4a4-EFOrZ-DEpJckpNJOBf-"
                alt="Russell bodies in plasma cells (Mott cell)"
                caption="Russell bodies in plasma cells (Mott cells). Marked distension of rough endoplasmic reticulum with immunoglobulin produces bright pink round hyaline inclusions."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1VTN9SlFm3Q_6E3AtX_2JF8OdPRgvdhQo"
                alt="Viral inclusion bodies as proteinaceous accumulations"
                caption="Intracellular viral inclusion bodies represent aggregates of viral capsids and proteins, appearing as distinct eosinophilic hyaline structures in infected cells."
              />
            </div>
          </section>
        );

      case 2:
        // Segment 3: Mallory-Denk Bodies, Cytoskeletal Changes & Zenker's Degeneration
        return (
          <section
            id="segment-cytoskeletal-keratin"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Mallory-Denk Bodies, Cytoskeletal Changes &amp; Zenker's Degeneration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/19iwPvP5GApnfFHEtbECZNkfKWVLTsQSb"
                alt="Mallory-Denk bodies in hepatocytes on H&E"
                caption="Mallory-Denk bodies: rope-like eosinophilic cytokeratin aggregates in hepatocytes injured by toxins or chronic inflammation."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1g63zQQEm1yBaJk6qShrKu_nLRzEp1nlc"
                alt="High-magnification view of Mallory-Denk bodies"
                caption="High-magnification view of Mallory-Denk bodies showing irregular hyaline cytokeratin aggregates within hepatocyte cytoplasm."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1DihEh_e-mkg7Sl4SkKkedqZ1YVuLZe8G"
                alt="Immunohistochemistry for cytokeratin in Mallory-Denk bodies"
                caption="Immunohistochemical confirmation: cytokeratin staining confirms intermediate filament aggregation in Mallory-Denk bodies."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1S4kxkobc_dZ5id15Wzs2seD2Y67uuEe7"
                alt="Zenker's degeneration in skeletal muscle"
                caption="Zenker's degeneration: severe acute necrosis of skeletal muscle produces homogeneous, glassy, swollen hyaline muscle fibres."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1XAmRA2RLWiOlm6mEs8kFjc4-QAdF6ljd"
                alt="Keratin accumulation and keratin pearls"
                caption="Keratin accumulation: dense whorls of eosinophilic hyaline keratin (“keratin pearls”) in squamous cell carcinomas or hyperkeratotic lesions."
              />
            </div>
          </section>
        );

      case 3:
        // Segment 4: C. Extracellular Hyaline
        return (
          <section
            id="segment-extracellular-hyaline"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              C. Extracellular Hyaline
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                  Hyaline Arteriolosclerosis
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transudation of plasma proteins into arteriolar walls accompanied by increased basement membrane collagen, causing homogeneous pink vessel wall thickening and luminal narrowing.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                  Old Scar Tissue &amp; Dense Collagen
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chronic fibrotic scar tissue where dense collagen fibers coalesce into acellular, glistening, homogeneous pink sheets.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                  Fibrinoid Change
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Severe immune-mediated vascular injury with transudation of fibrin and plasma proteins into vessel walls.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                  Hyaline Casts
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Solidification of Tamm-Horsfall mucoprotein and filtered plasma proteins within renal tubular lumina.
                </p>
              </div>
            </div>

            {/* Figures 7, 8, 9 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1XVjWvJivd8wOkRU-c877gDOFmmzrYs2N"
                alt="Renal hyaline droplet degeneration in proximal tubules"
                caption="Renal hyaline droplets: bright eosinophilic droplets within proximal tubular epithelium resulting from pinocytosis of filtered albumin."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1rp34ceMZzqQn_affB7nvFM3wjvqBb990"
                alt="Fibrinoid change in arterial walls"
                caption="Fibrinoid change: intense eosinophilic proteinaceous thickening of arterial walls due to severe vascular injury or immune-complex deposition."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/15Prd6J7SWIAatTam0C7146Ga1WUOgLS6"
                alt="Hyaline casts within renal tubules"
                caption="Hyaline casts: smooth, homogeneous protein cylinders formed in renal tubular lumina in proteinuric states."
              />
            </div>
          </section>
        );

      case 4:
        // Segment 5: D. Differential Diagnosis Table
        return (
          <section
            id="segment-differential-table"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              D. Differential Diagnosis Table
            </h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[620px] border-collapse text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300">
                    <th className="p-2.5 font-bold text-slate-800">Entity</th>
                    <th className="p-2.5 font-bold text-slate-800">Location</th>
                    <th className="p-2.5 font-bold text-slate-800">Composition</th>
                    <th className="p-2.5 font-bold text-slate-800">H&amp;E Appearance</th>
                    <th className="p-2.5 font-bold text-slate-800">Congo Red Stain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-rose-900">Intracellular Hyaline</td>
                    <td className="p-2.5 text-slate-700">Intracellular</td>
                    <td className="p-2.5 text-slate-700">Albumin, Immunoglobulins, Cytokeratins</td>
                    <td className="p-2.5 text-slate-700">Homogeneous, bright pink droplets or inclusions</td>
                    <td className="p-2.5 text-slate-500">Negative</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-rose-900">Extracellular Hyaline</td>
                    <td className="p-2.5 text-slate-700">Extracellular</td>
                    <td className="p-2.5 text-slate-700">Collagen, Plasma proteins, Basement membrane</td>
                    <td className="p-2.5 text-slate-700">Glassy, pink acellular sheets or thickened vessel walls</td>
                    <td className="p-2.5 text-slate-500">Negative</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-amber-900">Amyloid</td>
                    <td className="p-2.5 text-slate-700">Extracellular</td>
                    <td className="p-2.5 text-slate-700">Cross-β-sheet fibrillar protein aggregates</td>
                    <td className="p-2.5 text-slate-700">Amorphous, pale eosinophilic extracellular deposits</td>
                    <td className="p-2.5 text-emerald-800 font-bold">Positive (Apple-green under polarized light)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Figure 10: Amyloid vs Hyaline */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/11tpsBpUkR3z8rMZf2RjX4OIppF4znb6u"
              alt="Differentiating amyloid from hyaline change"
              caption="Differentiating amyloid from hyaline change: both appear eosinophilic on H&E, but amyloid is extracellular and shows apple-green birefringence with Congo red."
            />
          </section>
        );

      case 5:
        // Segment 6: E. Morphology Focus: Renal Hyaline Droplets
        return (
          <section
            id="segment-focus-renal-droplets"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Morphology Focus: Renal Hyaline Droplets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              <div className="md:col-span-1">
                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/1BUwa74CB6hF9nIu_1DlMCgufpvFP4y1K"
                  alt="Hyaline droplets in rat renal proximal tubular epithelium."
                  caption="Rat renal proximal tubules with hyaline droplet accumulation. Image from the NTP Nonneoplastic Lesion Atlas."
                  citation="National Toxicology Program Nonneoplastic Lesion Atlas, National Institute of Environmental Health Sciences."
                  sourceUrl="https://ntp.niehs.nih.gov/atlas/nnl/urinary/kidney/rtdrop/index.htm"
                  sourceTitle="NTP Atlas: Kidney - Hyaline Droplet"
                  licenseText="Public Domain (US Gov)"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 font-sans">
                  Renal Tubular Hyaline Droplet Degeneration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The image shows renal cortex from a rat. Proximal convoluted tubular epithelial cells are enlarged and packed with prominent, round, brightly eosinophilic cytoplasmic droplets. These represent phagolysosomes filled with protein reabsorbed from the tubular lumen.
                </p>

                <div className="border border-dashed border-teal-300 rounded-xl p-3 bg-teal-50/40 space-y-2.5">
                  <h4 className="text-xs font-bold text-teal-950 uppercase tracking-wider">
                    Morphology Case Questions
                  </h4>

                  <div className="space-y-2">
                    <div>
                      <button
                        onClick={() => toggleDetail('morf_q1')}
                        className="w-full text-left flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-teal-900"
                      >
                        <span>1. What is the composition of the cytoplasmic droplets?</span>
                        {openDetails['morf_q1'] ? (
                          <ChevronUp className="w-3.5 h-3.5 text-teal-700" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      {openDetails['morf_q1'] && (
                        <p className="mt-1 text-xs text-teal-900 bg-white border border-teal-200 rounded-lg p-2 leading-relaxed">
                          Reabsorbed protein (such as albumin or, in male rats, α2u-globulin) accumulated within phagolysosomes.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleDetail('morf_q2')}
                        className="w-full text-left flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-teal-900"
                      >
                        <span>2. What clinical condition commonly causes this in dogs and cats?</span>
                        {openDetails['morf_q2'] ? (
                          <ChevronUp className="w-3.5 h-3.5 text-teal-700" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      {openDetails['morf_q2'] && (
                        <p className="mt-1 text-xs text-teal-900 bg-white border border-teal-200 rounded-lg p-2 leading-relaxed">
                          Proteinuria resulting from glomerular disease (glomerulonephritis, amyloidosis).
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleDetail('morf_q3')}
                        className="w-full text-left flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-teal-900"
                      >
                        <span>3. Is this lesion reversible?</span>
                        {openDetails['morf_q3'] ? (
                          <ChevronUp className="w-3.5 h-3.5 text-teal-700" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      {openDetails['morf_q3'] && (
                        <p className="mt-1 text-xs text-teal-900 bg-white border border-teal-200 rounded-lg p-2 leading-relaxed">
                          Yes, if the glomerular proteinuria resolves, the lysosomal protein is digested and the droplets disappear.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-bold text-teal-950 pt-1">
                  Morphological diagnosis: Renal proximal tubular hyaline droplet accumulation, multifocal, marked.
                </p>
              </div>
            </div>
          </section>
        );

      case 6:
        // Segment 7: F. Morphology Focus: Russell Bodies
        return (
          <section
            id="segment-focus-russell-bodies"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Morphology Focus: Russell Bodies in Chronic Inflammation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              <div className="md:col-span-1">
                <MetabolismFigure
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Russell%20bodies%202%20high%20mag%20mini.jpg"
                  alt="Very high magnification of plasma cells containing numerous round eosinophilic Russell bodies."
                  caption="Russell bodies within plasma cells (Mott cells). Round, homogeneous, brightly eosinophilic protein globules distend the cytoplasm, displacing the nucleus. H&E stain, high magnification."
                  citation="Nephron (Wikimedia Commons)."
                  sourceUrl="https://commons.wikimedia.org/wiki/File:Russell_bodies_2_high_mag_mini.jpg"
                  sourceTitle="Wikimedia Commons"
                  licenseText="CC BY-SA 3.0"
                  licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 font-sans">
                  Plasma Cell Inclusions in Chronic Antigenic Stimulation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This high-power view demonstrates plasma cells whose cytoplasm is filled with round, homogeneous, brightly eosinophilic globules known as Russell bodies. A plasma cell packed with Russell bodies is termed a <strong>Mott cell</strong>.
                </p>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <p><strong>Pathogenesis:</strong> Synthesis of immunoglobulin exceeds secretory capacity, or abnormal immunoglobulin chains fail to fold properly, causing marked distension of rough endoplasmic reticulum cisternae.</p>
                  <p><strong>Veterinary significance:</strong> Common in tissues with chronic antigenic stimulation (chronic rhinitis, gingivitis, pyometra, feline stomatitis) and in plasma cell neoplasia (plasmacytoma, multiple myeloma).</p>
                </div>
                <p className="text-xs sm:text-sm font-bold text-teal-950 pt-1">
                  Key takeaway: Russell bodies represent an intracellular protein accumulation within the endoplasmic reticulum of plasma cells.
                </p>
              </div>
            </div>
          </section>
        );

      case 7:
        // Segment 8: G. Morphology Focus: Vascular Hyalinosis
        return (
          <section
            id="segment-focus-vascular-hyaline"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Morphology Focus: Vascular Hyalinosis (Arteriolosclerosis)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              <div className="md:col-span-1">
                <MetabolismFigure
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Renal%20arterial%20hyalinosis%20-%20pas%20-%20very%20high%20mag.jpg"
                  alt="Very high magnification of an arteriole with hyalinosis stained with periodic acid-Schiff."
                  caption="Renal arteriolar hyalinosis. An arteriole exhibits marked wall thickening by homogeneous, glassy, PAS-positive material, narrowing the vascular lumen. PAS stain, very high magnification."
                  citation="Nephron (Wikimedia Commons)."
                  sourceUrl="https://commons.wikimedia.org/wiki/File:Renal_arterial_hyalinosis_-_pas_-_very_high_mag.jpg"
                  sourceTitle="Wikimedia Commons"
                  licenseText="CC BY-SA 3.0"
                  licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 font-sans">
                  Extracellular Protein Accumulation in Vessel Walls
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This arteriole demonstrates marked wall thickening by homogeneous, structureless, eosinophilic material that is PAS-positive. The hyaline material narrows the lumen and replaces normal smooth muscle architecture.
                </p>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <p><strong>Pathogenesis:</strong> Endothelial injury allows leakage of plasma proteins into the vessel wall, accompanied by increased extracellular matrix synthesis by smooth muscle cells.</p>
                  <p><strong>Consequences:</strong> Luminal narrowing leads to downstream ischemia and parenchymal atrophy. Common in chronic systemic hypertension and aging animals.</p>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 font-medium">
                  Important distinction: Unlike amyloid, vascular hyaline is negative with Congo red and does not show apple-green birefringence under polarized light.
                </p>
              </div>
            </div>
          </section>
        );

      case 8:
        // Segment 9: Summary & Knowledge Check
        return (
          <section
            id="segment-summary-knowledge-check"
            className="space-y-4 animate-in fade-in duration-200"
          >
            <div className="bg-teal-50/80 border-l-4 border-teal-700 border border-teal-200 rounded-2xl p-4 sm:p-5 shadow-xs">
              <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-2">
                Key Takeaways
              </h3>
              <ul className="text-xs sm:text-sm text-teal-900 space-y-1.5 list-disc pl-5">
                <li>"Hyaline" is a descriptive histological term for any homogeneous, glassy, pink proteinaceous material on H&amp;E.</li>
                <li>Intracellular forms include renal protein reabsorption droplets, Russell bodies (Mott cells), and Mallory-Denk bodies.</li>
                <li>Extracellular forms include arteriolosclerosis, fibrinoid change, and hyaline casts—all distinct from amyloid.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                Knowledge Check
              </h3>

              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ph_kc_1')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>1. What is a "Mott cell" and what causes its distinctive appearance?</span>
                    {openDetails['ph_kc_1'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ph_kc_1'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      A Mott cell is a plasma cell whose cytoplasm is packed with Russell bodies—bright pink globular inclusions of accumulated immunoglobulins within distended endoplasmic reticulum.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ph_kc_2')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>2. What is the pathogenesis of hyaline droplet formation in renal proximal tubular epithelium?</span>
                    {openDetails['ph_kc_2'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ph_kc_2'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Excessive urinary protein leakage (proteinuria) through damaged glomerular filters leads to pinocytotic uptake of albumin by proximal tubular cells, coalescing with lysosomes into pink hyaline droplets.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ph_kc_3')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>3. How is extracellular hyaline differentiated from amyloid in tissue sections?</span>
                    {openDetails['ph_kc_3'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ph_kc_3'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Amyloid stains positively with Congo Red and displays pathognomonic apple-green birefringence under cross-polarized light, whereas extracellular hyaline is Congo Red-negative and non-birefringent.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <SegmentedLessonLayout
      lessonTitle="Protein Accumulation and Hyaline Change"
      header={
        <MetabolismHeader
          title="Protein Accumulation & Hyaline Change"
          subtitle="Homogeneous, glassy, eosinophilic alterations occurring both intracellularly and extracellularly."
          category="General Pathology"
          lessonId="protein-accumulation-hyaline"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={PROTEIN_HYALINE_SECTIONS}
      currentIndex={currentSectionIndex}
      completedIndices={completedSections}
      onSelectSection={handleSelectSection}
      onNextSection={handleNextSection}
      onPreviousSection={handlePreviousSection}
      onCompleteLesson={handleCompleteLesson}
      fontClass={fontClass}
      fontSize={fontSize}
      footerNav={
        <MetabolismFooterNav
          previous={{ id: 'glycogen-accumulation', title: 'Glycogen Accumulation' }}
          next={{ id: 'amyloidosis', title: 'Amyloidosis' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
