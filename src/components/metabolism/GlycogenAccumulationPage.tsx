import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import { SegmentedLessonLayout, LessonSectionItem } from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GlycogenAccumulationPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const GLYCOGEN_ACCUMULATION_SECTIONS: LessonSectionItem[] = [
  { id: 'definition', title: 'A. Definition', shortTitle: 'Definition' },
  { id: 'normal-metabolism-mechanisms', title: 'B. Metabolism & Mechanisms', shortTitle: 'Mechanisms' },
  { id: 'etiology-causes', title: 'C. Etiology & Causes', shortTitle: 'Etiology' },
  { id: 'common-sites', title: 'D. Common Anatomical Sites', shortTitle: 'Sites' },
  { id: 'morphological-features', title: 'E & F. Morphological Features', shortTitle: 'Morphology' },
  { id: 'histochemical-confirmation', title: 'G. Histochemical Stains', shortTitle: 'Stains' },
  { id: 'differential-diagnosis', title: 'H. Differential Diagnosis', shortTitle: 'Differential' },
  { id: 'morphology-focus-cases', title: 'I. Morphology Focus & Cases', shortTitle: 'Case Focus' },
  { id: 'summary-knowledge-check', title: 'Summary & Knowledge Check', shortTitle: 'Review' },
];

export const GlycogenAccumulationPage: React.FC<GlycogenAccumulationPageProps> = ({
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
    if (currentSectionIndex < GLYCOGEN_ACCUMULATION_SECTIONS.length - 1) {
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
        // Segment 1: A. Definition
        return (
          <section
            id="segment-definition"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                A. Definition
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Glycogen accumulation is the excessive intracellular storage of glycogen (a highly branched glucose polymer) within parenchymal cells. It arises when glucose homeostasis is altered, leading to accelerated glycogen synthesis or impaired enzymatic degradation.
              </p>
            </div>
          </section>
        );

      case 1:
        // Segment 2: B. Normal Metabolism & Pathogenetic Mechanisms
        return (
          <section
            id="segment-normal-metabolism-mechanisms"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Normal Metabolism &amp; Pathogenetic Mechanisms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Glycogen is normally synthesized (glycogenesis) and stored in hepatocytes and muscle cells under the influence of insulin, and broken down (glycogenolysis) by glucagon and epinephrine. Pathological storage occurs via three main pathways:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  1. Hormonal Induction
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Glucocorticoids induce hepatic glycogen synthetase upregulation, driving massive glycogen storage in hepatocytes (e.g., steroid hepatopathy).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  2. Persistent Hyperglycemia
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sustained high blood glucose levels force passive glucose uptake and glycogen storage in renal tubular epithelium (e.g., severe diabetes mellitus).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  3. Enzymatic Storage Defects
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inherited deficiencies of lysosomal or cytoplasmic enzymes (e.g., alpha-glucosidase deficiency) prevent normal glycogen breakdown.
                </p>
              </div>
            </div>

            {/* Figure 1: Mechanisms */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/19THqualvBH5U8ecS2iBLB89CWBk3VVRo"
              alt="Mechanisms leading to intracellular glycogen accumulation"
              caption="Mechanisms leading to intracellular glycogen accumulation. Increased glucose availability, steroid-induced enzyme activation, or metabolic defects enhance glycogen synthesis and storage."
            />
          </section>
        );

      case 2:
        // Segment 3: C. Etiology and Causes
        return (
          <section
            id="segment-etiology-causes"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Etiology and Causes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Exogenous Corticosteroid Therapy
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Iatrogenic administration of glucocorticoids in dogs, inducing rapid and marked hepatic glycogen accumulation.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Endogenous Hyperadrenocorticism
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hypercortisolemia driven by pituitary or adrenal tumors (Cushing's disease) in dogs.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Diabetes Mellitus
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Uncontrolled hyperglycemia causing glucose spillover into urine and tubular epithelial glycogen storage (Armanni-Ebstein lesion).
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Glycogen Storage Diseases (GSDs)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rare inherited metabolic disorders involving enzyme deficiencies in glycogenolysis or lysosomal breakdown.
                </p>
              </div>
            </div>
          </section>
        );

      case 3:
        // Segment 4: D. Common Anatomical Sites
        return (
          <section
            id="segment-common-sites"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Common Anatomical Sites
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Hepatocytes
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Primary site for steroid-associated glycogen storage (steroid hepatopathy).
                </p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Renal Tubular Epithelium
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proximal tubular epithelium in diabetic animals with glucosuria.
                </p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Myocardium &amp; Skeletal Muscle
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Target tissues in inherited glycogen storage enzyme deficiencies.
                </p>
              </div>
            </div>

            {/* Figure 2: Renal Tubular Epithelial Glycogen */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/10wBVSSQfGtmMZF8k844WN8zB9EdQ9qZI"
              alt="Glycogen accumulation in renal tubular epithelial cells"
              caption="Renal tubular epithelial cells in pigs may show cytoplasmic clearing due to glycogen accumulation, especially in conditions of high glucose availability."
            />
          </section>
        );

      case 4:
        // Segment 5: E & F. Morphological Features
        return (
          <section
            id="segment-morphological-features"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Morphological Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Gross Morphology</h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li><strong>Organ Size:</strong> Diffusely enlarged, pale liver (hepatomegaly) in severe cases.</li>
                  <li><strong>Consistency:</strong> Firm to slightly friable, but lacking the greasy texture of fatty change.</li>
                  <li><strong>Color:</strong> Pale brown to light tan.</li>
                  <li className="italic text-slate-500"><strong>Note:</strong> Mild-to-moderate cases may exhibit no obvious gross abnormalities.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Microscopic Morphology (H&amp;E)</h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li><strong>Cytoplasmic Appearance:</strong> Swollen, pale cytoplasm filled with ill-defined, clear, pale, or finely reticulated spaces.</li>
                  <li><strong>Nuclear Position:</strong> Nuclei remain <strong>centrally located</strong> within affected cells.</li>
                  <li><strong>Cell Borders:</strong> Distinct cellular outlines with overall cell expansion.</li>
                  <li><strong>Tissue Dissolution:</strong> Aqueous fixatives partially dissolve glycogen during processing, leaving delicate cytoplasmic strands.</li>
                </ul>
              </div>
            </div>

            {/* Figures 3 & 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1d8urMkG3U3oxmUwzt5uo4UDW9-TEA9Vg"
                alt="Normal hepatocyte compared with a glycogen-loaded hepatocyte"
                caption="Comparison between a normal hepatocyte (left) and a hepatocyte with marked glycogen accumulation (right). Excessive glycogen causes cytoplasmic pallor, swelling, and mild nuclear displacement."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1pR9s4BtMYSJlBmZQJPeMZX8hIquGLw43"
                alt="Canine steroid hepatopathy with hepatocellular glycogen accumulation"
                caption="Steroid hepatopathy in dogs. Corticosteroids induce glycogen accumulation, producing swollen hepatocytes with pale, ground-glass cytoplasm."
              />
            </div>
          </section>
        );

      case 5:
        // Segment 6: G. Histochemical Confirmation
        return (
          <section
            id="segment-histochemical-confirmation"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Histochemical Confirmation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Because aqueous histological fixatives wash out some glycogen, definitive histochemical confirmation requires specific staining paired with enzymatic digestion:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 border-l-4 border-purple-700 rounded-r-xl border border-slate-200">
                <strong className="text-purple-950 block text-xs sm:text-sm font-bold mb-1">
                  Periodic Acid-Schiff (PAS)
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stains glycogen intensely magenta/pink. (Note: PAS also stains mucins and basement membranes).
                </p>
              </div>
              <div className="p-3 bg-slate-50 border-l-4 border-purple-700 rounded-r-xl border border-slate-200">
                <strong className="text-purple-950 block text-xs sm:text-sm font-bold mb-1">
                  PAS with Diastase Digestion (PAS-D)
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Diastase enzyme digests and removes glycogen. A loss of PAS magenta staining on the diastase-treated section confirms glycogen.
                </p>
              </div>
            </div>

            {/* Figure 5: PAS & PAS-D */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/1_jUuhOQZwFcYwrI8OvtED8PbD5xXaYFx"
              alt="PAS and PAS-diastase staining for glycogen"
              caption="PAS stain highlights glycogen as magenta granules. After diastase digestion, glycogen is removed, confirming its identity. PAS-diastase helps differentiate glycogen from other PAS-positive substances."
            />
          </section>
        );

      case 6:
        // Segment 7: H. Differential Diagnosis Table
        return (
          <section
            id="segment-differential-diagnosis"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Differential Diagnosis Table
            </h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[580px] border-collapse text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300">
                    <th className="p-2.5 font-bold text-slate-800">Feature</th>
                    <th className="p-2.5 font-bold text-purple-900">Glycogen Accumulation</th>
                    <th className="p-2.5 font-bold text-teal-900">Hydropic Change</th>
                    <th className="p-2.5 font-bold text-amber-900">Fatty Change (Macrovesicular)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Accumulated Material</td>
                    <td className="p-2.5 text-slate-700">Glycogen (Carbohydrate)</td>
                    <td className="p-2.5 text-slate-700">Water and electrolytes</td>
                    <td className="p-2.5 text-slate-700">Triglycerides (Lipids)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Cytoplasmic Appearance</td>
                    <td className="p-2.5 text-slate-700">Clear, pale, or finely reticulated spaces</td>
                    <td className="p-2.5 text-slate-700">Pale, finely granular or microvacuolated</td>
                    <td className="p-2.5 text-slate-700">Sharply demarcated, clear, round vacuoles</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Nuclear Position</td>
                    <td className="p-2.5 text-slate-700">Centrally located</td>
                    <td className="p-2.5 text-slate-700">Centrally located</td>
                    <td className="p-2.5 text-slate-700">Displaced to cell periphery</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Special Stain</td>
                    <td className="p-2.5 font-mono-code text-[11px] text-purple-800">PAS positive (diastase-sensitive)</td>
                    <td className="p-2.5 text-slate-700">None (water dissolves)</td>
                    <td className="p-2.5 font-mono-code text-[11px] text-amber-800">Oil Red O positive (frozen)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Key Cause</td>
                    <td className="p-2.5 text-slate-700">Corticosteroid excess / Diabetes</td>
                    <td className="p-2.5 text-slate-700">Hypoxia / Cell injury</td>
                    <td className="p-2.5 text-slate-700">Negative energy balance / Anorexia</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        );

      case 7:
        // Segment 8: I. Morphology Focus & Veterinary Cases
        return (
          <section
            id="segment-morphology-focus-cases"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Morphology Focus &amp; Veterinary Relevance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              <div className="md:col-span-1">
                <MetabolismFigure
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Liver%20biopsy%20of%20glycogen%20storage%20disorder%20PAS%20positive.jpg"
                  alt="PAS-stained liver showing uniformly enlarged hepatocytes with magenta cytoplasmic staining caused by glycogen accumulation."
                  caption="Hepatic glycogen accumulation. Hepatocytes are uniformly distended by PAS-positive cytoplasmic material. PAS, 20×. Glycogen identity should be confirmed by loss of staining following diastase digestion."
                  citation="Department of Pathology, Calicut Medical College."
                  sourceUrl="https://commons.wikimedia.org/wiki/File:Liver_biopsy_of_glycogen_storage_disorder_PAS_positive.jpg"
                  sourceTitle="Wikimedia Commons"
                  licenseText="CC BY-SA 4.0"
                  licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-purple-950 font-sans">
                  Hepatic Glycogen Accumulation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The liver section shows uniformly distended hepatocytes containing PAS-positive cytoplasmic material. The magenta reaction demonstrates abundant intracellular carbohydrate. Confirmation that the material is glycogen requires comparison with a PAS-diastase section, in which glycogen is digested and the cytoplasmic PAS staining is lost.
                </p>
                <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl">
                  <strong className="text-purple-950 text-xs sm:text-sm block font-bold mb-1">
                    Veterinary Relevance:
                  </strong>
                  <p className="text-xs text-purple-900 leading-relaxed">
                    In dogs, excessive endogenous corticosteroid production or prolonged corticosteroid treatment can produce marked hepatocellular glycogen accumulation. Affected hepatocytes become enlarged and have pale, clear, or finely reticulated cytoplasm, usually with the nucleus remaining centrally located. This reversible lesion is commonly termed steroid hepatopathy or glycogen-type vacuolar hepatopathy.
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-bold text-purple-950 pt-1">
                  Morphological diagnosis: Diffuse hepatocellular glycogen accumulation, PAS positive.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5 mt-2">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-sans">
                Enrichment: Inherited Glycogen Storage Diseases
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Inherited deficiencies of glycogen-metabolizing enzymes produce glycogen storage diseases affecting different organs according to the deficient enzyme. Examples relevant to veterinary medicine include glycogen storage disease type II (Pompe disease) in cattle, dogs, and Japanese quail. Depending on the disorder, glycogen may accumulate in hepatocytes, cardiac myocytes, skeletal myofibres, or neurons.
              </p>
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
                <li>Glycogen accumulation produces pale, clear, or finely reticulated cytoplasmic spaces with centrally placed nuclei.</li>
                <li>Most commonly encountered in dogs with steroid excess (exogenous or Cushing's disease) or diabetes mellitus.</li>
                <li>Confirmed histochemically via PAS positivity that is eliminated by diastase digestion (PAS-D).</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                Knowledge Check
              </h3>

              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ga_kc_1')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>1. How does nuclear position distinguish glycogen accumulation from macrovesicular fatty change?</span>
                    {openDetails['ga_kc_1'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ga_kc_1'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      In glycogen accumulation, the nucleus remains centrally placed within the cell. In macrovesicular fatty change, a large lipid vacuole pushes the nucleus to the cell periphery.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ga_kc_2')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>2. What is the diagnostic rationale behind comparing a PAS section with a PAS-diastase (PAS-D) section?</span>
                    {openDetails['ga_kc_2'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ga_kc_2'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Diastase selectively digests glycogen. If magenta PAS staining disappears on the diastase-treated section, the presence of glycogen is confirmed.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('ga_kc_3')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>3. What is the most common clinical cause of hepatic glycogen accumulation in dogs?</span>
                    {openDetails['ga_kc_3'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['ga_kc_3'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Excessive glucocorticoids, either from exogenous corticosteroid administration or endogenous hyperadrenocorticism (Cushing's disease).
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
      lessonTitle="Glycogen Accumulation"
      header={
        <MetabolismHeader
          title="Glycogen Accumulation"
          subtitle="Abnormal intracellular storage of complex glucose polymers secondary to hormonal or metabolic alterations."
          category="General Pathology"
          lessonId="glycogen-accumulation"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={GLYCOGEN_ACCUMULATION_SECTIONS}
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
          previous={{ id: 'fatty-change', title: 'Fatty Change (Lipidosis)' }}
          next={{ id: 'protein-accumulation-hyaline', title: 'Protein Accumulations & Hyaline Change' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
