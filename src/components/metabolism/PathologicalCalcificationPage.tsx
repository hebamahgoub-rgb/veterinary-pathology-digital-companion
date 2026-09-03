import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import { MetabolismVideoCard } from './MetabolismVideoCard';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PathologicalCalcificationPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const CALCIFICATION_SECTIONS: LessonSectionItem[] = [
  {
    id: 'overview-videos',
    title: 'Overview & Video Learning',
    shortLabel: 'Overview & Videos',
  },
  {
    id: 'dystrophic-calcification',
    title: 'Dystrophic Calcification & Veterinary Examples',
    shortLabel: 'Dystrophic',
  },
  {
    id: 'metastatic-calcification',
    title: 'Metastatic Calcification & Hypercalcemia Causes',
    shortLabel: 'Metastatic',
  },
  {
    id: 'comparative-table',
    title: 'Dystrophic versus Metastatic Calcification Table',
    shortLabel: 'Comparison Table',
  },
  {
    id: 'morphology-stains',
    title: 'Morphological Features & Histochemical Confirmation',
    shortLabel: 'Morphology & Stains',
  },
  {
    id: 'histopathology-examples',
    title: 'Comparative Histopathology Examples',
    shortLabel: 'Histopathology',
  },
  {
    id: 'summary-quiz',
    title: 'Summary & Knowledge Check',
    shortLabel: 'Knowledge Check',
  },
];

export const PathologicalCalcificationPage: React.FC<PathologicalCalcificationPageProps> = ({
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
    if (currentSectionIndex < CALCIFICATION_SECTIONS.length - 1) {
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
        // Segment 1: Overview & Video Learning
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Overview Figure */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/1IaBe0Ecn1f7HrWews-S8lIbDzbfzsWrB"
              alt="Overview schematic of pathological calcification in soft tissues"
              caption="Pathological Calcification Overview. A schematic illustration showing the formation of calcium phosphate crystals within soft tissues. The image highlights how mineral deposition begins on structural components of the extracellular matrix, providing a visual anchor for understanding both dystrophic and metastatic calcification."
            />

            {/* Definition */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="border-l-4 border-teal-700 pl-3.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                  Definition
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Pathological calcification (mineralization) is the abnormal deposition of insoluble calcium salts (primarily calcium phosphate and calcium carbonate) in tissues other than osteoid or enamel. It is divided into two distinct pathophysiological types: <strong>dystrophic calcification</strong> and <strong>metastatic calcification</strong>.
                </p>
              </div>
            </section>

            {/* Video Learning Section */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                  Video Learning: Pathological Calcification
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Start with the five short microlearning videos for rapid review, then use the comprehensive lesson for a fuller explanation of pathological calcification.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                <MetabolismVideoCard
                  videoId="D3kJmXrbgio"
                  title="1. Dystrophic vs Metastatic Calcification"
                  description="A rapid comparison of the two major forms of pathological calcification."
                />
                <MetabolismVideoCard
                  videoId="U1EKTnONxm4"
                  title="2. Dystrophic Calcification: Where It Happens & Why"
                  description="Focuses on mineral deposition in dead, dying, or damaged tissue despite normal serum calcium."
                />
                <MetabolismVideoCard
                  videoId="dAwuHU_8G3w"
                  title="3. How Dystrophic Calcification Forms"
                  description="A concise mechanism-focused explanation of calcium accumulation within injured tissue."
                />
                <MetabolismVideoCard
                  videoId="J8xGaVIxDqc"
                  title="4. Examples of Dystrophic Calcification"
                  description="A one-minute review of classic pathological settings in which dystrophic calcification develops."
                />
                <MetabolismVideoCard
                  videoId="nkTX0Zy_vLw"
                  title="5. Metastatic Calcification: Where It Happens & Why"
                  description="Explains systemic mineral imbalance, hypercalcemia, and the characteristic target tissues."
                />
              </div>

              {/* Full Lesson Video */}
              <div className="pt-2">
                <MetabolismVideoCard
                  videoId="aUxQQDIx9GE"
                  title="Full Lesson: Pathological Calcification"
                  description="Use this comprehensive lesson for deeper study after completing the five microlearning videos above."
                />
              </div>
            </section>
          </div>
        );

      case 1:
        // Segment 2: Dystrophic Calcification & Veterinary Examples
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Dystrophic Calcification
              </h2>

              <div className="space-y-3">
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm sm:text-base font-bold text-teal-950 font-sans mb-1">
                    Features &amp; Pathogenesis
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    Occurs locally in <strong>dead, dying, or degenerate tissues</strong> despite normal systemic calcium metabolism and normal serum calcium levels.
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Ischemic or coagulative necrotic tissue (e.g., myocardial or renal infarcts).</li>
                    <li>Enzymatic fat necrosis (e.g., acute pancreatitis).</li>
                    <li>Caseous cores of chronic granulomatous lesions (e.g., tuberculosis).</li>
                    <li>Dead or encysted parasites and chronic vascular thrombi.</li>
                  </ul>
                </div>

                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/1vfTJB8ux2IxjqC1LkjlorYm_aiJ39aRu"
                  alt="Mechanism of dystrophic calcification in necrotic tissue"
                  caption="Mechanism of Dystrophic Calcification. A necrotic cell is depicted with membrane disruption permitting calcium influx. Swollen mitochondria accumulate calcium, initiating crystal formation within injured tissue. This figure illustrates the hallmark process of dystrophic calcification, which occurs despite normal systemic calcium levels."
                />
              </div>
            </section>

            {/* Examples of Dystrophic Calcification in Veterinary Pathology */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/1l-MCO1rHkHtRO2g9kreNid3awk0XLh6h"
              alt="Examples of dystrophic calcification in veterinary pathology"
              caption="Examples of Dystrophic Calcification in Veterinary Pathology. Three classic presentations of dystrophic calcification: caseous necrosis with a chalky mineralized core; dead parasites encased in a rim of calcium deposits; and fat necrosis in cattle showing firm white mineralized areas. These examples demonstrate how chronic tissue injury becomes marked by localized calcium deposition."
            />
          </div>
        );

      case 2:
        // Segment 3: Metastatic Calcification & Hypercalcemia Causes
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Metastatic Calcification
              </h2>

              <div className="space-y-3">
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm sm:text-base font-bold text-blue-950 font-sans mb-1">
                    Features &amp; Target Organs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    Occurs in <strong>previously normal living tissues</strong> secondary to systemic mineral imbalances characterized by <strong>hypercalcemia</strong> or an elevated calcium-phosphorus product.
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Affects widespread vascular and elastic tissues.</li>
                    <li>Target organs typically secrete or concentrate acids, creating a local alkaline environment favoring calcium precipitation.</li>
                    <li>Common target sites: Gastric mucosa, renal tubular basement membranes, pulmonary alveolar walls, systemic arteries, and endocardium.</li>
                  </ul>
                </div>

                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/1o_uyFOjx6XpNfbC_ANDFtabiIDzCBnBS"
                  alt="Mechanism and sites of metastatic calcification"
                  caption="Mechanism of Metastatic Calcification. Normal tissues are shown developing fine calcium deposits along basement membranes under conditions of elevated blood calcium. The illustration emphasizes systemic mineral imbalance as the driver of metastatic calcification, independent of local tissue injury."
                />
              </div>
            </section>

            {/* Veterinary Causes of Metastatic Calcification */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Veterinary Causes of Metastatic Calcification
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Vitamin D Toxicity
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ingestion of cholecalciferol rodenticides or calcinogenic plants (e.g., <em>Solanum malacoxylon</em>, <em>Cestrum diurnum</em>) driving excessive intestinal calcium absorption.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Chronic Renal Failure
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Renal phosphate retention leading to secondary hyperparathyroidism and widespread soft tissue calcification (rubber jaw, gastric mineralization).
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Primary Hyperparathyroidism
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Functional parathyroid adenomas overproducing PTH, driving osteoclast resorption and severe hypercalcemia.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Paraneoplastic Hypercalcemia
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Secretion of PTH-related protein (PTHrp) by tumors such as anal sac adenocarcinoma (AGASACA) or lymphoma.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl sm:col-span-2 md:col-span-1">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Osteolytic Bone Disease
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Multiple myeloma or widespread metastatic bone tumors releasing skeletal calcium stores into circulation.
                  </p>
                </div>
              </div>

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1_NNHupaoG-_CqUDJZc1Lj_PsJsH76U12"
                alt="Major causes of hypercalcemia leading to metastatic calcification"
                caption="Major Causes of Hypercalcemia. A four-icon summary of systemic conditions that elevate blood calcium and predispose to metastatic calcification: renal failure, hyperparathyroidism, vitamin D toxicity, and neoplastic bone destruction."
              />
            </section>
          </div>
        );

      case 3:
        // Segment 4: Comparison Table
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Dystrophic versus Metastatic Calcification
              </h2>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-[620px] border-collapse text-xs sm:text-sm text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300">
                      <th className="p-2.5 font-bold text-slate-800">Feature</th>
                      <th className="p-2.5 font-bold text-teal-900">Dystrophic Calcification</th>
                      <th className="p-2.5 font-bold text-blue-900">Metastatic Calcification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Condition of Tissue</td>
                      <td className="p-2.5 text-slate-700">Necrotic, dying, or degenerate tissue</td>
                      <td className="p-2.5 text-slate-700">Previously normal, viable tissue</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Serum Calcium Levels</td>
                      <td className="p-2.5 text-emerald-800 font-semibold">Normal</td>
                      <td className="p-2.5 text-rose-800 font-semibold">Elevated (Hypercalcemia)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Systemic Mineral Balance</td>
                      <td className="p-2.5 text-slate-700">Normal</td>
                      <td className="p-2.5 text-slate-700">Abnormal (Hypercalcemia / Hyperphosphatemia)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Distribution</td>
                      <td className="p-2.5 text-slate-700">Localized to foci of injury/necrosis</td>
                      <td className="p-2.5 text-slate-700">Widespread / Systemic</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Principal Mechanism</td>
                      <td className="p-2.5 text-slate-700">Membrane breakdown, phosphate accumulation, calcium binding</td>
                      <td className="p-2.5 text-slate-700">Precipitation of mineral due to systemic saturation</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Common Sites</td>
                      <td className="p-2.5 text-slate-700">Infarcts, fat necrosis, granulomas, dead parasites</td>
                      <td className="p-2.5 text-slate-700">Gastric mucosa, lungs, kidneys, arteries, endocardium</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Veterinary Examples</td>
                      <td className="p-2.5 text-slate-700">Pancreatic saponification, white muscle disease</td>
                      <td className="p-2.5 text-slate-700">Vitamin D toxicity, renal hyperparathyroidism, AGASACA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        );

      case 4:
        // Segment 5: Morphology & Histochemical Stains
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Morphological Features */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Morphological Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Gross Morphology</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Appearance:</strong> Irregular white, pale, or chalky deposits.</li>
                    <li><strong>Texture:</strong> Gritty, firm, or hard plaques and granules.</li>
                    <li><strong>Handling:</strong> Produces a distinctive gritting sensation when sectioned with a scalpel blade.</li>
                    <li><strong>Vessels / Organs:</strong> Affected arterial walls or endocardium become rigid, thickened, and lose elasticity.</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Microscopic Morphology (H&amp;E)</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Intracellular / Extracellular:</strong> Amorphous, granular, or solid deposits.</li>
                    <li><strong>Color on H&amp;E:</strong> Deeply basophilic (dark purple to blue-black).</li>
                    <li><strong>Tissue Reaction:</strong> May elicit a chronic foreign-body giant-cell reaction or peripheral fibrous encapsulation over time.</li>
                    <li><strong>Location:</strong> Concentrated within necrotic debris (dystrophic) or along basement membranes/elastic fibers (metastatic).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Histochemical Confirmation */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Histochemical Confirmation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                While prominent basophilic mineral deposits are readily visible on standard H&amp;E stains, specific histochemical stains confirm the presence of mineral salts:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-50 border-l-4 border-teal-700 border border-slate-200 rounded-r-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Von Kossa Stain
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stains carbonate and phosphate anions associated with calcium deposits intense dark brown to black. (Standard surrogate stain for mineral).
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border-l-4 border-teal-700 border border-slate-200 rounded-r-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Alizarin Red S
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reacts directly with calcium cations to form a vivid red-orange chelate complex.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );

      case 5:
        // Segment 6: Comparative Histopathology Examples
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Comparative Histopathology Examples
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Case 1: Dystrophic */}
                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                  <h3 className="text-sm font-bold text-teal-950 font-sans">
                    Dystrophic Calcification
                  </h3>
                  <div className="overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src="https://lh3.googleusercontent.com/d/1ePpeR3RuRKIhw97Ej45JtT7g7YnI4paO"
                      alt="H&E micrograph showing dystrophic calcium-phosphate microcalcification within necrotic tissue in ductal carcinoma in situ"
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Dystrophic calcium-phosphate microcalcification in ductal carcinoma in situ, H&amp;E. Image: Mikael Häggström, MD, Wikimedia Commons. CC0 1.0.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    This comparative pathology specimen demonstrates dystrophic mineralization developing within injured or necrotic tissue. The deposited calcium appears as dense basophilic material on H&amp;E. The process is localized and does not require hypercalcemia. In veterinary pathology, the same mechanism occurs in infarcts, fat necrosis, granulomas, dead parasites, and necrotic skeletal muscle.
                  </p>
                </div>

                {/* Case 2: Metastatic */}
                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                  <h3 className="text-sm font-bold text-blue-950 font-sans">
                    Metastatic Calcification
                  </h3>
                  <div className="overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src="https://lh3.googleusercontent.com/d/1l0kP-lg-1Cg2yQ33dxIN_qlrUty_nDTk"
                      alt="Histological micrograph showing metastatic calcification of pulmonary alveolar walls and blood vessels"
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Metastatic calcification involving pulmonary alveolar walls and blood vessels. Image: Yale Rosen, Wikimedia Commons. CC BY-SA 2.0.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    This comparative pathology specimen shows mineral deposition along pulmonary alveolar walls and blood vessels. Metastatic calcification develops in previously viable tissues because of systemic disturbance of calcium-phosphorus metabolism. Veterinary causes include vitamin D toxicosis, chronic renal disease with phosphate retention, primary hyperparathyroidism, paraneoplastic hypercalcemia, and extensive osteolytic disease.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );

      case 6:
        // Segment 7: Summary & Knowledge Check
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="space-y-4">
              <div className="bg-teal-50/80 border-l-4 border-teal-700 border border-teal-200 rounded-2xl p-4 sm:p-5 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-2">
                  Key Takeaways
                </h3>
                <ul className="text-xs sm:text-sm text-teal-900 space-y-1.5 list-disc pl-5">
                  <li>Pathological calcification appears grossly as chalky gritty white foci and microscopically as deep basophilic (purple) deposits on H&amp;E.</li>
                  <li>Dystrophic calcification occurs locally in dead/necrotic tissue with normal serum calcium.</li>
                  <li>Metastatic calcification occurs widespread in normal viable tissues secondary to hypercalcemia or altered calcium-phosphorus products.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                  Knowledge Check
                </h3>

                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('calc_kc_1')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>1. What key clinical laboratory finding differentiates metastatic calcification from dystrophic calcification?</span>
                      {openDetails['calc_kc_1'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['calc_kc_1'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Systemic hypercalcemia (or altered calcium-phosphorus product). Serum calcium is elevated in metastatic calcification, whereas it remains normal in dystrophic calcification.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('calc_kc_2')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>2. Why are the gastric mucosa, lungs, and kidneys frequent target organs for metastatic calcification?</span>
                      {openDetails['calc_kc_2'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['calc_kc_2'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        These tissues lose acid (H⁺) or concentrate solutes, creating a local alkaline internal environment that lowers mineral solubility and favors calcium salt precipitation.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('calc_kc_3')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>3. What color does calcium mineral deposit appear on standard H&amp;E stained tissue sections?</span>
                      {openDetails['calc_kc_3'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['calc_kc_3'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Deeply basophilic (dark purple to blue-black), amorphous or granular deposits.
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
      lessonTitle="Pathological Calcification"
      header={
        <MetabolismHeader
          title="Pathological Calcification"
          subtitle="Abnormal deposition of insoluble calcium salts within soft tissues."
          category="General Pathology"
          lessonId="pathological-calcification"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={CALCIFICATION_SECTIONS}
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
          previous={{ id: 'pathological-pigments', title: 'Pathological Pigments' }}
          next={{ id: 'crystals-and-urates', title: 'Crystals and Urates' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
