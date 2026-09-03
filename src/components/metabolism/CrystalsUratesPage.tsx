import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

interface CrystalsUratesPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const CRYSTALS_SECTIONS: LessonSectionItem[] = [
  {
    id: 'core-outcomes-metabolism',
    title: 'Core Concept & Normal Urate Metabolism',
    shortLabel: 'Metabolism',
  },
  {
    id: 'pathogenesis-predisposing',
    title: 'Pathogenesis & Predisposing Factors',
    shortLabel: 'Pathogenesis',
  },
  {
    id: 'visceral-articular-gout',
    title: 'Visceral versus Articular Gout',
    shortLabel: 'Visceral vs Articular',
  },
  {
    id: 'preservation-differentials',
    title: 'Preservation Warning & Differential Diagnosis',
    shortLabel: 'Differentials',
  },
  {
    id: 'case-study-significance',
    title: 'Avian Case Study & Clinical Significance',
    shortLabel: 'Case Study',
  },
  {
    id: 'summary-quiz',
    title: 'Summary & Knowledge Check',
    shortLabel: 'Knowledge Check',
  },
];

export const CrystalsUratesPage: React.FC<CrystalsUratesPageProps> = ({
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
    if (currentSectionIndex < CRYSTALS_SECTIONS.length - 1) {
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
        // Segment 1: Core Concept & Normal Urate Metabolism
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Intro statement */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="border-l-4 border-teal-700 pl-3.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                  Core Concept
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Crystal deposition diseases represent metabolic disturbances where sparingly soluble end-products or abnormal precipitates accumulate within tissues. Gout (urate deposition) is the pre-eminent crystal disorder in veterinary medicine, having profound significance in avian and reptilian species due to their unique uricotelic physiology.
                </p>
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Learning Outcomes
              </h2>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                <li>Define urate deposition and gout.</li>
                <li>Explain why birds and reptiles are particularly susceptible.</li>
                <li>Identify factors that cause hyperuricaemia or impaired urate elimination.</li>
                <li>Differentiate visceral from articular gout.</li>
                <li>Describe gross and microscopic lesions.</li>
                <li>Explain why urates may disappear during routine processing.</li>
                <li>Differentiate urate from fibrin, purulent exudate, and mineral.</li>
                <li>Apply the findings to an avian necropsy case.</li>
              </ul>
            </section>

            {/* Normal Urate Metabolism */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Normal Urate Metabolism
              </h2>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs sm:text-sm text-slate-700">
                <ul className="space-y-2 list-disc pl-4">
                  <li><strong>Nitrogenous Waste Production:</strong> Normal protein and purine catabolism generates nitrogenous waste products.</li>
                  <li><strong>Uricotelic Physiology:</strong> Birds and reptiles are uricotelic, synthesizing uric acid and urates as their primary end products of protein metabolism.</li>
                  <li><strong>Renal Elimination:</strong> Uric acid and urates are excreted predominantly by renal tubular secretion into the urine.</li>
                  <li><strong>Precipitation Susceptibility:</strong> Low aqueous solubility of urates allows water conservation, but renders uricotelic species highly prone to tissue precipitation when excretion is compromised.</li>
                  <li><strong>Mammalian Difference:</strong> Most domestic mammals possess the enzyme uricase, converting uric acid into highly soluble allantoin; consequently, mammals rarely develop classical gout (with Dalmatian dogs and primates being notable metabolic exceptions).</li>
                </ul>
              </div>

              {/* Metabolic Flowchart */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 text-center">
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-teal-950">
                  <span className="bg-white border border-teal-600/30 px-3 py-1.5 rounded-lg shadow-2xs">Purine metabolism</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-3 py-1.5 rounded-lg shadow-2xs">Uric acid and urates</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-3 py-1.5 rounded-lg shadow-2xs">Renal excretion</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-3 py-1.5 rounded-lg shadow-2xs">Ureters and cloaca</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-3 py-1.5 rounded-lg shadow-2xs">Elimination</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700">
                <strong>Key Excretory Failure Points:</strong>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-slate-600">
                  <li>Excessive urate production</li>
                  <li>Renal dysfunction</li>
                  <li>Dehydration</li>
                  <li>Urinary obstruction</li>
                </ul>
              </div>

              {/* Teaching Figure 1 */}
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1At48LZaavrHIvRy9hurnTGHuUo21Q1mW"
                alt="Uric acid crystals within avian renal tubules"
                caption="Uric Acid Crystals in Avian Kidney Tubules. Uric acid crystals within avian renal tubules. Needle-shaped, yellow-brown crystalline aggregates distend the tubular lumen, often causing secondary epithelial degeneration. Birds excrete nitrogenous waste primarily as uric acid, making them prone to crystal deposition under dehydration, renal dysfunction, or high-protein diets."
              />
            </section>
          </div>
        );

      case 1:
        // Segment 2: Pathogenesis & Predisposing Factors
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Pathogenesis */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Pathogenesis
              </h2>

              {/* Pathogenesis Flowchart */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 text-center">
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-teal-950">
                  <span className="bg-white border border-teal-600/30 px-2.5 py-1.5 rounded-lg shadow-2xs">Impaired elimination / Excess production</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-2.5 py-1.5 rounded-lg shadow-2xs">Hyperuricaemia</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-2.5 py-1.5 rounded-lg shadow-2xs">Fluid supersaturation</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-2.5 py-1.5 rounded-lg shadow-2xs">Urate precipitation</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-2.5 py-1.5 rounded-lg shadow-2xs">Tissue deposition</span>
                  <span className="text-teal-700 font-bold">&rarr;</span>
                  <span className="bg-white border border-teal-600/30 px-2.5 py-1.5 rounded-lg shadow-2xs">Inflammation &amp; injury</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs sm:text-sm text-slate-700">
                <ul className="space-y-1.5 list-disc pl-4">
                  <li><strong>Acute Stage:</strong> Acute visceral urate deposition may initially cause minimal or limited inflammatory cell recruitment.</li>
                  <li><strong>Cellular Recruitment:</strong> Persistent crystalline deposits induce intense chemotaxis, attracting heterophils (in birds/reptiles), macrophages, and multinucleated giant cells.</li>
                  <li><strong>Chronic Stage:</strong> Chronic deposits elicit granulomatous inflammation, extensive perilesional fibrosis, and marked tissue deformation.</li>
                </ul>
              </div>

              {/* Teaching Figure 2 */}
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/18u-fh0zMEcJGsBm-Q8hBa6PnWEVdtpgG"
                alt="Renal tubular necrosis associated with urate crystal obstruction"
                caption="Renal Tubular Necrosis Secondary to Crystal Obstruction. Renal tubular necrosis associated with urate crystal obstruction. Crystals block tubular lumina, leading to epithelial flattening, degeneration, and necrosis. This mechanism contributes to acute renal failure in species that excrete uric acid, particularly birds and reptiles."
              />
            </section>

            {/* Predisposing Factors */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Predisposing Factors
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white">
                  <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-2 font-sans">A. Renal Factors</h3>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                    <li>Renal tubular injury</li>
                    <li>Interstitial nephritis</li>
                    <li>Nephropathogenic infections (e.g., IBV in poultry)</li>
                    <li>Nephrotoxic substances (e.g., mycotoxins, NSAIDs)</li>
                    <li>Congenital or acquired renal dysfunction</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-3.5 bg-white">
                  <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-2 font-sans">B. Hydration &amp; Environment</h3>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                    <li>Severe dehydration</li>
                    <li>Restricted water availability</li>
                    <li>Water-system failure in housing</li>
                    <li>Excessive environmental heat</li>
                    <li>Severe systemic fluid loss</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-3.5 bg-white">
                  <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-2 font-sans">C. Diet &amp; Metabolism</h3>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                    <li>Excessive calcium in inappropriate diets</li>
                    <li>Vitamin A deficiency</li>
                    <li>Nutritional imbalance</li>
                    <li>Excessive protein or purine load</li>
                    <li>Metabolic excretion disturbances</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-3.5 bg-white">
                  <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-2 font-sans">D. Obstructive Factors</h3>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                    <li>Ureteral obstruction (uroliths/viscid urates)</li>
                    <li>Urinary outflow impairment</li>
                    <li>Compression or blockage of urinary tract</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border-l-4 border-amber-600 border border-amber-200 rounded-r-xl text-xs sm:text-sm text-amber-950 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Diagnostic Caution:</strong> Gout is a morphological diagnosis with multiple possible causes. Do not assign it to a particular diet, toxin or infection without supporting evidence.
                </div>
              </div>
            </section>
          </div>
        );

      case 2:
        // Segment 3: Visceral versus Articular Gout
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Visceral Gout */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Visceral Gout
              </h2>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                <strong>Definition:</strong> Visceral gout is urate deposition on visceral organs and serosal surfaces, usually associated with acute or severe impairment of renal elimination.
              </div>

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1vtMF66y5xsMnzXG-onyNrJDuD3LDpMrc"
                alt="Visceral gout with chalky white urate tophi on serosal surfaces"
                caption="Gout Tophi on Serosal Surfaces (Visceral Gout). Visceral gout in a bird, characterized by chalky white urate tophi on serosal surfaces including the pericardium and hepatic capsule. These deposits consist of crystalline urates formed when plasma uric acid levels exceed excretory capacity. Common causes include dehydration, nephrotoxic insults, and renal obstruction."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Common Anatomical Sites</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Pericardium and epicardial sac</li>
                    <li>Liver capsule</li>
                    <li>Peritoneum and mesentery</li>
                    <li>Air sacs</li>
                    <li>Kidneys (parenchyma and tubules)</li>
                    <li>Ureters</li>
                    <li>Other serosal surfaces</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Morphological Features</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                    <li><strong>Gross:</strong> White or cream deposits; chalky, pasty, semisolid, granular or gritty material coating visceral and serosal surfaces; distended ureters filled with white pasty material; renal swelling or pallor.</li>
                    <li><strong>Microscopic (H&amp;E):</strong> Crystalline material or empty spaces remaining after aqueous dissolution; radiating or needle-shaped clefts; heterophilic inflammation; macrophages and multinucleated giant cells in persistent lesions; concurrent renal pathology.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Articular Gout */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Articular Gout
              </h2>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                <strong>Definition:</strong> Articular gout is chronic urate deposition within joints, synovial membranes, periarticular tissues, tendon sheaths, toes or wing joints.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Gross Appearance</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Enlarged, swollen, or severely deformed joints</li>
                    <li>White chalky nodular deposits</li>
                    <li>Firm periarticular nodular masses (tophi)</li>
                    <li>Thickened periarticular soft tissue</li>
                    <li>Restricted joint movement and lameness</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Microscopic Appearance (H&amp;E)</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Feathery, crystalline or empty needle-shaped spaces</li>
                    <li>Infiltration of macrophages and multinucleated giant cells</li>
                    <li>Prominent nodular granulomatous inflammation (tophi)</li>
                    <li>Synovial hyperplasia and extensive periarticular fibrosis</li>
                    <li>Chronic tissue remodelling and erosion of adjacent articular cartilage/bone</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Visceral versus Articular Gout Table */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Visceral versus Articular Gout Comparison
              </h2>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-[580px] border-collapse text-xs sm:text-sm text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300">
                      <th className="p-2.5 font-bold text-slate-800">Feature</th>
                      <th className="p-2.5 font-bold text-teal-900">Visceral Gout</th>
                      <th className="p-2.5 font-bold text-blue-900">Articular Gout</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Typical Course</td>
                      <td className="p-2.5 text-slate-700">Usually acute or subacute</td>
                      <td className="p-2.5 text-slate-700">Usually chronic</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Main Distribution</td>
                      <td className="p-2.5 text-slate-700">Visceral organs and serosae</td>
                      <td className="p-2.5 text-slate-700">Joints and periarticular tissues</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Common Sites</td>
                      <td className="p-2.5 text-slate-700">Pericardium, liver capsule, peritoneum, kidneys, air sacs</td>
                      <td className="p-2.5 text-slate-700">Synovial membranes, tendon sheaths, toes, wing joints</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Gross Appearance</td>
                      <td className="p-2.5 text-slate-700">White pasty or chalky surface deposits</td>
                      <td className="p-2.5 text-slate-700">Tophi and joint deformation</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Inflammatory Response</td>
                      <td className="p-2.5 text-slate-700">Inflammation may initially be limited</td>
                      <td className="p-2.5 text-slate-700">Prominent macrophagic, giant-cell and granulomatous inflammation</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Principal Consequence</td>
                      <td className="p-2.5 text-slate-700">Acute organ dysfunction, serositis, renal failure</td>
                      <td className="p-2.5 text-slate-700">Pain, lameness, joint ankylosis, tissue destruction</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Common Underlying Mechanism</td>
                      <td className="p-2.5 text-slate-700">Severe acute renal failure, dehydration, or acute urinary obstruction</td>
                      <td className="p-2.5 text-slate-700">Persistent long-term hyperuricaemia</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        );

      case 3:
        // Segment 4: Preservation Warning & Differential Diagnosis
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Histological Preservation Warning */}
            <section className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="border-l-4 border-amber-600 pl-3.5 space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-amber-950 font-sans">
                  Histological Preservation Warning
                </h3>
                <p className="text-xs sm:text-sm text-amber-900 font-semibold leading-relaxed">
                  Urates are water-soluble and may dissolve during aqueous formalin fixation and routine paraffin processing. Their dissolution may leave radiating or needle-shaped empty clefts that reproduce the previous arrangement of the crystals.
                </p>
              </div>
              <ul className="text-xs sm:text-sm text-amber-900 space-y-1 list-disc pl-5">
                <li><strong>Alcohol Fixation:</strong> Absolute alcohol (100% ethanol) fixation preserves urate crystals for histological sectioning when gout is suspected clinically or gross-pathologically.</li>
                <li><strong>Cytological Smears:</strong> Fresh unmounted impression smears, squash preparations, or polarizable wet mounts assist rapid diagnostic confirmation.</li>
                <li><strong>Diagnostic Rule:</strong> A negative or poorly preserved routine paraffin H&amp;E section does not exclude gout.</li>
                <li><strong>Diagnostic Integration:</strong> Histological findings must always be integrated with species, gross distribution, renal lesions, and clinical history.</li>
              </ul>

              {/* Teaching Figure 4 */}
              <div className="pt-2">
                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/11-pmxj8YNmrpDUq-MSEUfp7Q8ZsCdbnL"
                  alt="Urate crystals viewed under polarized light microscopy"
                  caption="Polarized Light Microscopy of Urate Crystals. Urate crystals viewed under polarized light microscopy. Their characteristic birefringence enhances visibility, revealing needle-shaped or rhomboid forms. Polarization is a useful diagnostic tool for confirming crystalline material in tissue sections or aspirates."
                />
              </div>
            </section>

            {/* Differential Diagnosis */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Differential Diagnosis
              </h2>

              {/* Teaching Figure 5 */}
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1MBYMpzZE5vvQBos41ASpw5X5J305HAIV"
                alt="Comparison of urate oxalate and cholesterol crystals"
                caption="Comparison of Common Pathologic Crystals (Urate vs. Oxalate vs. Cholesterol). Comparison of common pathological crystals. (A) Urate crystals: needle-shaped, yellow-brown, often associated with gout and renal dysfunction in birds and reptiles. (B) Oxalate crystals: envelope-shaped, highly refractile, typically linked to ethylene glycol toxicity or metabolic disorders. (C) Cholesterol crystals: large, flat plates with notched corners, commonly seen in chronic inflammation or cystic lesions."
              />

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-[580px] border-collapse text-xs sm:text-sm text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300">
                      <th className="p-2.5 font-bold text-slate-800">Lesion / Deposit</th>
                      <th className="p-2.5 font-bold text-slate-800">Gross Appearance</th>
                      <th className="p-2.5 font-bold text-slate-800">Microscopic / Histochemical Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-teal-950">Urate Deposition (Gout)</td>
                      <td className="p-2.5 text-slate-700">White, chalky, pasty, semisolid or crystalline deposits on serosae, within ureters or around joints</td>
                      <td className="p-2.5 text-slate-700">Water-soluble; radiating or needle-shaped empty clefts remain after routine processing; birefringent on fresh alcohol-fixed prep</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-800">Fibrinous Exudate</td>
                      <td className="p-2.5 text-slate-700">Yellow-white, stringy, shaggy or sheet-like deposits on inflamed serosal membranes</td>
                      <td className="p-2.5 text-slate-700">Eosinophilic fibrillar network on H&amp;E; stains with MSB/PTAH; insoluble in water</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-800">Purulent Exudate</td>
                      <td className="p-2.5 text-slate-700">Creamy yellow or green, opaque, viscous or caseous exudate</td>
                      <td className="p-2.5 text-slate-700">Densely packed heterophils/neutrophils, cellular debris, and bacteria</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-800">Pathological Mineralization</td>
                      <td className="p-2.5 text-slate-700">Hard, brittle, and distinctly gritty white-grey deposits</td>
                      <td className="p-2.5 text-slate-700">Deeply basophilic (purple) granular material on H&amp;E; positive on Von Kossa / Alizarin Red S stains</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-800">Pseudogout</td>
                      <td className="p-2.5 text-slate-700">White periarticular deposits primarily affecting joints</td>
                      <td className="p-2.5 text-slate-700">Calcium-pyrophosphate dihydrate crystal deposition; chemically distinct from urate crystals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        );

      case 4:
        // Segment 5: Avian Case Study & Clinical Significance
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Practical Case Study */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Practical Case Study: Astrovirus-Associated Visceral Gout in Goslings
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At necropsy, goslings that died seven days after experimental infection with a goose-origin astrovirus showed extensive white urate deposits over the peritoneum, visceral organs and proventriculus. Urate deposits were also present within articular cavities. The kidneys were swollen and haemorrhagic, and the ureters contained conspicuous white urate material. These findings demonstrate severe systemic urate deposition associated with renal injury.
              </p>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <strong className="text-xs sm:text-sm text-slate-900 block">Diagnostic Investigation Questions:</strong>
                <ol className="text-xs sm:text-sm text-slate-700 list-decimal pl-5 space-y-1">
                  <li>What is the principal pathological diagnosis?</li>
                  <li>Which gross features identify the deposits as urates?</li>
                  <li>Which images demonstrate visceral gout, and which demonstrate articular involvement?</li>
                  <li>What renal and ureteral abnormalities support impaired urate elimination?</li>
                  <li>Which infectious agent was responsible for renal injury in this documented case?</li>
                  <li>Why may urate crystals be poorly preserved following routine aqueous tissue processing?</li>
                </ol>
              </div>

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1CJbRkTl7WcvEBMy2y1VPuL-AGYew8J_Y"
                alt="Multi-panel necropsy comparison of astrovirus-infected goslings and uninfected controls"
                caption="Gross lesions of astrovirus-associated gout in goslings. Infected goslings show urate deposition over the peritoneum (A, a), visceral organs (B, b), proventriculus (C, c) and articular cavities (D, d), together with swollen haemorrhagic kidneys and urate-containing ureters (E, e). Panels F–J show corresponding uninfected controls."
                citation="Yin et al. (2021), Figure 3, BMC Veterinary Research, 17, 40."
                sourceUrl="https://doi.org/10.1186/s12917-020-02739-z"
                sourceTitle="BMC Veterinary Research"
                licenseText="CC BY 4.0"
                licenseUrl="https://creativecommons.org/licenses/by/4.0/"
              />
            </section>

            {/* Clinical and Pathological Significance */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Clinical and Pathological Significance
              </h2>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                <li><strong>Visceral Gout Significance:</strong> Serves as a major post-mortem indicator of severe acute renal failure, dehydration, or fatal urinary outflow blockage.</li>
                <li><strong>Articular Gout Significance:</strong> Causes severe chronic pain, joint enlargement, ankylosis, and restricted mobility.</li>
                <li><strong>Inflammatory Impact:</strong> Persistent crystalline deposits act as foreign bodies, driving destructive granulomatous inflammation and progressive fibrosis.</li>
                <li><strong>Etiological Investigation:</strong> Identification of gout should prompt thorough investigation of flock/individual hydration status, renal health, dietary calcium/protein, toxic exposures, nephropathogenic pathogens, and urinary tract patency.</li>
                <li><strong>Etiological Limitation:</strong> Identification of gout confirms a metabolic/excretory failure, but does not by itself establish the specific initiating etiology.</li>
              </ul>
            </section>
          </div>
        );

      case 5:
        // Segment 6: Summary & Knowledge Check
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="space-y-4">
              <div className="bg-teal-50/80 border-l-4 border-teal-700 border border-teal-200 rounded-2xl p-4 sm:p-5 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-2">
                  Key Takeaways
                </h3>
                <ul className="text-xs sm:text-sm text-teal-900 space-y-1.5 list-disc pl-5">
                  <li>Birds and reptiles are particularly susceptible to gout because they are uricotelic.</li>
                  <li>Visceral gout affects visceral organs and serosal surfaces (acute renal failure / dehydration).</li>
                  <li>Articular gout primarily affects joints, synovial sheaths, and periarticular tissues (chronic hyperuricaemia).</li>
                  <li>Urates are water-soluble and frequently dissolve during routine formalin fixation and aqueous processing.</li>
                  <li>Absolute alcohol fixation preserves urate crystals for histology.</li>
                  <li>White serosal deposits must be differentiated from fibrin, pus, and pathological mineralization.</li>
                  <li>Definitive diagnosis requires integrating gross, microscopic, clinical, and species context.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                  Knowledge Check
                </h3>

                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('cryst_kc_1')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>1. Why are birds and reptiles particularly susceptible to gout compared to most domestic mammals?</span>
                      {openDetails['cryst_kc_1'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['cryst_kc_1'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Birds and reptiles are uricotelic (excreting uric acid and urate salts as primary nitrogenous waste). Urates have low water solubility, making them prone to precipitation when renal clearance or hydration is compromised. Domestic mammals possess uricase to convert uric acid to soluble allantoin.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('cryst_kc_2')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>2. Which form of gout primarily affects visceral serosae such as the pericardium and liver capsule?</span>
                      {openDetails['cryst_kc_2'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['cryst_kc_2'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Visceral gout.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('cryst_kc_3')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>3. What are tophi?</span>
                      {openDetails['cryst_kc_3'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['cryst_kc_3'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Nodular, chronic accumulations of urate crystals surrounded by macrophages, multinucleated giant cells, and fibrous tissue, typically found in articular and periarticular gout.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('cryst_kc_4')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>4. Why may urate deposits disappear during routine histological processing?</span>
                      {openDetails['cryst_kc_4'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['cryst_kc_4'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Urate salts are water-soluble and dissolve during aqueous formalin fixation and routine staining, leaving empty needle-shaped or radiating clefts.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('cryst_kc_5')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>5. Name three differential diagnoses for white serosal deposits in an avian coelomic cavity.</span>
                      {openDetails['cryst_kc_5'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['cryst_kc_5'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        1. Urate deposition (visceral gout)<br />
                        2. Fibrinous exudate (fibrinous serositis)<br />
                        3. Purulent exudate (suppurative serositis)<br />
                        <span className="italic text-slate-600">(Pathological mineralization / dystrophic calcification is a 4th valid differential).</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <SegmentedLessonLayout
      lessonTitle="Crystals and Urates"
      header={
        <MetabolismHeader
          title="Crystals and Urates"
          subtitle="Pathogenesis, comparative pathology, and diagnostic differentiation of gout and crystal-induced tissue injury."
          category="General Pathology"
          lessonId="crystals-and-urates"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={CRYSTALS_SECTIONS}
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
          previous={{ id: 'pathological-calcification', title: 'Pathological Calcification' }}
          next={{ id: 'practical-pathology-gallery', title: 'Practical Pathology Gallery' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
