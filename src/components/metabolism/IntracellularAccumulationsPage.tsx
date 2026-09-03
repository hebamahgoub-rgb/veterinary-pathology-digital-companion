import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { SegmentedLessonLayout, LessonSectionItem } from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface IntracellularAccumulationsPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const INTRACELLULAR_ACCUMULATIONS_SECTIONS: LessonSectionItem[] = [
  { id: 'pathological-principles', title: 'Pathological Principles', shortTitle: 'Principles' },
  { id: 'classification-diagram', title: 'Classification at a Glance', shortTitle: 'Classification' },
  { id: 'pathogenetic-mechanisms', title: 'Pathogenetic Mechanisms', shortTitle: 'Mechanisms' },
  { id: 'categories-accumulated', title: 'Categories of Material', shortTitle: 'Categories' },
  { id: 'explore-lessons', title: 'Explore Specific Lessons', shortTitle: 'Curriculum' },
  { id: 'lesion-comparison', title: 'Lesion Comparison Preview', shortTitle: 'Comparison' },
  { id: 'diagnostic-approach', title: 'Diagnostic Approach Sequence', shortTitle: 'Diagnostics' },
  { id: 'summary-knowledge-check', title: 'Summary & Knowledge Check', shortTitle: 'Review' },
];

export const IntracellularAccumulationsPage: React.FC<IntracellularAccumulationsPageProps> = ({
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
    if (currentSectionIndex < INTRACELLULAR_ACCUMULATIONS_SECTIONS.length - 1) {
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
        // Segment 1: Pathological Principles
        return (
          <section
            id="segment-pathological-principles"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Pathological Principles
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Intracellular accumulation develops when cells are unable to adequately metabolize, package, transport, secrete, or degrade organic or inorganic material. The stored substances may reside within the cytoplasm, organelles (such as lysosomes), or the nucleus, resulting in structural alterations and functional compromise.
              </p>
            </div>
          </section>
        );

      case 1:
        // Segment 2: Classification at a Glance Diagram (Connecting Lipids, Glycogen, Proteins)
        return (
          <section
            id="segment-classification-diagram"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Classification at a Glance
            </h2>

            <div className="bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-xl p-4 sm:p-6">
              <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-teal-900 text-white text-center font-bold text-xs sm:text-sm shadow-xs font-sans">
                Intracellular Accumulations
              </div>
              <div className="text-center text-teal-700 text-xl font-bold py-1.5 leading-none">
                ↓
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="p-4 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs text-center">
                  <h3 className="text-sm font-bold text-teal-950 font-sans">Lipids</h3>
                  <div className="text-xs font-bold text-slate-800 my-1">Neutral triglycerides</div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Sharply defined clear cytoplasmic vacuoles; the nucleus may be displaced in macrovesicular steatosis.
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-bold font-mono-code">
                    Oil Red O / Sudan III
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 border-t-4 border-t-purple-700 bg-white shadow-xs text-center">
                  <h3 className="text-sm font-bold text-purple-950 font-sans">Glycogen</h3>
                  <div className="text-xs font-bold text-slate-800 my-1">Intracellular carbohydrate</div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Pale, feathery or indistinct cytoplasmic clearing, usually with a centrally retained nucleus.
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-[11px] font-bold font-mono-code">
                    PAS positive; diastase-sensitive
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 border-t-4 border-t-rose-700 bg-white shadow-xs text-center">
                  <h3 className="text-sm font-bold text-rose-950 font-sans">Proteins</h3>
                  <div className="text-xs font-bold text-slate-800 my-1">Proteinaceous material</div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Homogeneous eosinophilic droplets, inclusions or aggregates, including renal reabsorption droplets and Russell bodies.
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-900 text-[11px] font-bold font-mono-code">
                    Primarily recognized on H&amp;E
                  </span>
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed italic">
                Major intracellular accumulations are distinguished by the stored material, microscopic appearance and confirmatory histochemical approach.
              </p>
            </div>
          </section>
        );

      case 2:
        // Segment 3: General Pathogenetic Mechanisms
        return (
          <section
            id="segment-pathogenetic-mechanisms"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              General Pathogenetic Mechanisms
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  1. Abnormal Metabolism
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A normal endogenous substance is produced at a normal or increased rate, but metabolic pathways or transport systems are inadequate to clear it (e.g., hepatic lipidosis).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  2. Defective Protein Folding / Transport
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An abnormal endogenous protein accumulates due to gene mutations causing protein misfolding, impaired endoplasmic reticulum transport, or lack of secretion (e.g., alpha-1-antitrypsin deficiency).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  3. Enzyme Deficiency
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A normal or abnormal endogenous substance accumulates because an inherited or acquired enzymatic defect prevents its normal degradation (e.g., lysosomal storage diseases).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  4. Indigestible Material Ingestion
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An exogenous substance accumulates because the cell lacks the enzymatic machinery to degrade it or the ability to transport it out of the cell (e.g., carbon particles / silica).
                </p>
              </div>
            </div>
          </section>
        );

      case 3:
        // Segment 4: Categories of Accumulated Material
        return (
          <section
            id="segment-categories-accumulated"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Categories of Accumulated Material
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Normal Endogenous Produced in Excess
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Water, lipids, proteins, and carbohydrates generated faster than their clearance rate.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Normal Endogenous Unmetabolized
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Substances accumulating due to specific metabolic blockades or enzyme failure.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Abnormal Endogenous Substances
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Misfolded proteins, mutant enzymes, or abnormal metabolic byproducts.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Exogenous Materials
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inhaled carbon, mineral dusts, heavy metals, or indigestible bacterial pigments.
                </p>
              </div>
            </div>
          </section>
        );

      case 4:
        // Segment 5: Three Linked Lesson Cards
        return (
          <section
            id="segment-explore-lessons"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Explore Specific Lessons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs hover:border-teal-400 transition-all group">
                <div>
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full font-mono-code mb-2 inline-block">
                    Unit 2.1.2.1
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    Fatty Change (Lipidosis)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Abnormal accumulation of neutral triglycerides within parenchymal cells. Predominantly affects the liver, myocardium, and renal proximal tubules during negative energy balance or toxic injury.
                  </p>
                </div>
                <button
                  onClick={() => onSelectLesson('fatty-change')}
                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Study Fatty Change</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs hover:border-purple-400 transition-all group">
                <div>
                  <span className="text-[10px] font-bold text-purple-800 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full font-mono-code mb-2 inline-block">
                    Unit 2.1.2.2
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                    Glycogen Accumulation
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Excessive intracellular carbohydrate storage resulting from metabolic disorders, endocrine imbalances (such as canine hyperadrenocorticism or diabetes mellitus), or inherited storage diseases.
                  </p>
                </div>
                <button
                  onClick={() => onSelectLesson('glycogen-accumulation')}
                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-purple-800 hover:bg-purple-900 active:bg-purple-950 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Study Glycogen Accumulation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs hover:border-rose-400 transition-all group">
                <div>
                  <span className="text-[10px] font-bold text-rose-800 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full font-mono-code mb-2 inline-block">
                    Unit 2.1.2.3
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-rose-900 transition-colors">
                    Hyaline Change
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Descriptive term for homogeneous, glassy, eosinophilic proteinaceous material accumulating within cells (e.g., renal protein reabsorption droplets, Russell bodies) or extracellularly.
                  </p>
                </div>
                <button
                  onClick={() => onSelectLesson('protein-accumulation-hyaline')}
                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-rose-800 hover:bg-rose-900 active:bg-rose-950 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Study Hyaline Change</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>
        );

      case 5:
        // Segment 6: Lesion Comparison Preview Table
        return (
          <section
            id="segment-lesion-comparison"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Lesion Comparison Preview
            </h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[620px] border-collapse text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300">
                    <th className="p-2.5 font-bold text-slate-800">Lesion Type</th>
                    <th className="p-2.5 font-bold text-slate-800">Accumulated Material</th>
                    <th className="p-2.5 font-bold text-slate-800">Intracellular Appearance (H&amp;E)</th>
                    <th className="p-2.5 font-bold text-slate-800">Common Organs</th>
                    <th className="p-2.5 font-bold text-slate-800">Special Stain</th>
                    <th className="p-2.5 font-bold text-slate-800">Representative Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-teal-900">Fatty Change</td>
                    <td className="p-2.5 text-slate-700">Triglycerides</td>
                    <td className="p-2.5 text-slate-700">Sharply defined, clear, round vacuoles; nucleus displaced in macrovesicular form</td>
                    <td className="p-2.5 text-slate-700">Liver, Heart, Kidney</td>
                    <td className="p-2.5 font-mono-code text-[11px] text-teal-800">Oil Red O / Sudan III (frozen)</td>
                    <td className="p-2.5 text-slate-700">Feline hepatic lipidosis</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-purple-900">Glycogen Accumulation</td>
                    <td className="p-2.5 text-slate-700">Glycogen (carbohydrate)</td>
                    <td className="p-2.5 text-slate-700">Feathery, indistinct, pale clear cytoplasmic spaces; central nucleus</td>
                    <td className="p-2.5 text-slate-700">Liver, Kidney, Muscle</td>
                    <td className="p-2.5 font-mono-code text-[11px] text-purple-800">PAS (diastase-sensitive)</td>
                    <td className="p-2.5 text-slate-700">Canine steroid hepatopathy</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-rose-900">Hyaline Change</td>
                    <td className="p-2.5 text-slate-700">Proteins / Immunoglobulins</td>
                    <td className="p-2.5 text-slate-700">Homogeneous, glassy, dense eosinophilic droplets or masses</td>
                    <td className="p-2.5 text-slate-700">Kidney, Plasma cells, Muscles</td>
                    <td className="p-2.5 font-mono-code text-[11px] text-rose-800">H&amp;E / Masson's Trichrome</td>
                    <td className="p-2.5 text-slate-700">Renal protein reabsorption droplets</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        );

      case 6:
        // Segment 7: Diagnostic Approach Sequence
        return (
          <section
            id="segment-diagnostic-approach"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Diagnostic Approach Sequence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Follow this systematic sequence when evaluating microscopic tissue sections displaying cytoplasmic vacuolation or accumulation:
            </p>

            <div className="space-y-2 pt-1">
              <div className="p-2.5 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 1: Localization</strong> — Determine whether the material is strictly intracellular, extracellular, or both.
              </div>
              <div className="p-2.5 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 2: Color and Texture</strong> — Assess if the material is clear, eosinophilic, basophilic, or naturally pigmented.
              </div>
              <div className="p-2.5 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 3: Vacuole Borders</strong> — Evaluate vacuolar margins (sharply demarcated vs. feathery/indistinct).
              </div>
              <div className="p-2.5 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 4: Nuclear Position</strong> — Check whether the nucleus remains centrally located or is peripherally displaced.
              </div>
              <div className="p-2.5 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 5: Special Stains</strong> — Select the appropriate histochemical stain (e.g., Oil Red O, PAS with diastase, Congo Red).
              </div>
              <div className="p-2.5 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 6: Clinical Correlation</strong> — Interpret the morphological findings in light of species, clinical history, and laboratory data.
              </div>
            </div>
          </section>
        );

      case 7:
        // Segment 8: Summary & Knowledge Check
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
                <li>Intracellular accumulations result from abnormal metabolism, misfolding, enzyme lack, or indigestible material ingestion.</li>
                <li>Microscopic differentiation relies on vacuolar border sharpness, nuclear position, and specific histochemical stains.</li>
                <li>This overview introduces three core sub-lessons: Fatty Change, Glycogen Accumulation, and Hyaline Change.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                Knowledge Check
              </h3>

              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ia_kc_1')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>1. What key morphological feature on H&amp;E helps distinguish macrovesicular fatty change from glycogen accumulation?</span>
                    {openDetails['ia_kc_1'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ia_kc_1'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Macrovesicular fatty change forms sharply demarcated, clear, round vacuoles that displace the nucleus to the cell periphery, whereas glycogen accumulation produces feathery, indistinct clear spaces with a centrally retained nucleus.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ia_kc_2')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>2. Why are special lipid stains (such as Oil Red O) performed on frozen tissue sections rather than routine paraffin sections?</span>
                    {openDetails['ia_kc_2'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ia_kc_2'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Routine paraffin processing uses organic solvents (alcohol and xylene) that dissolve and wash away neutral lipids, leaving empty vacuoles. Frozen sectioning avoids these solvents.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ia_kc_3')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>3. Which mechanism explains carbon particle (anthracosis) accumulation in pulmonary alveolar macrophages?</span>
                    {openDetails['ia_kc_3'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ia_kc_3'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Ingestion of an indigestible exogenous material that the cell lacks enzymatic pathways to degrade or transport out.
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
      lessonTitle="Intracellular Accumulations"
      header={
        <MetabolismHeader
          title="Intracellular Accumulations"
          subtitle="Overview of cellular mechanisms leading to the storage of endogenous and exogenous substances within parenchymal cells."
          category="General Pathology"
          lessonId="intracellular-accumulations"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={INTRACELLULAR_ACCUMULATIONS_SECTIONS}
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
          previous={{ id: 'module-overview', title: 'Cellular Swelling & Hydropic Change' }}
          next={{ id: 'fatty-change', title: 'Fatty Change (Lipidosis)' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
