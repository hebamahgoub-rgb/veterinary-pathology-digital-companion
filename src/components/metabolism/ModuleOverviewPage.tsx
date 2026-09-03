import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import { MetabolismVideoCard } from './MetabolismVideoCard';
import { SegmentedLessonLayout, LessonSectionItem } from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ModuleOverviewPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const MODULE_OVERVIEW_SECTIONS: LessonSectionItem[] = [
  { id: 'video-learning', title: 'Video: Why Injured Cells Swell', shortTitle: 'Video' },
  { id: 'definition-terminology', title: 'A. Definition & Terminology', shortTitle: 'Definition' },
  { id: 'etiology-causes', title: 'B. Etiology & Causes', shortTitle: 'Etiology' },
  { id: 'pathogenesis-sequence', title: 'C. Pathogenesis Sequence', shortTitle: 'Pathogenesis' },
  { id: 'morphological-features', title: 'D & E. Morphological Features', shortTitle: 'Morphology' },
  { id: 'veterinary-examples', title: 'F. Veterinary Examples', shortTitle: 'Examples' },
  { id: 'differential-diagnosis', title: 'G. Differential Diagnosis', shortTitle: 'Differential' },
  { id: 'pathology-gallery', title: 'H. Pathology Image Gallery', shortTitle: 'Gallery' },
  { id: 'case-study', title: 'I. Practical Case Study', shortTitle: 'Case Study' },
  { id: 'summary-knowledge-check', title: 'Summary & Knowledge Check', shortTitle: 'Review' },
];

export const ModuleOverviewPage: React.FC<ModuleOverviewPageProps> = ({
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
    if (currentSectionIndex < MODULE_OVERVIEW_SECTIONS.length - 1) {
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
        // Segment 1: Featured Video Section
        return (
          <section
            id="segment-video-learning"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
              Watch: Why Do Injured Cells Swell?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4 leading-relaxed">
              This four-minute visual explanation follows cellular swelling from ATP depletion and membrane-pump failure to its morphological appearance and reversibility.
            </p>

            <MetabolismVideoCard
              videoId="8F-PuSjacXo"
              title="Why Do Injured Cells Swell? - General Pathology in Minutes"
              description="Follows acute cellular injury from ATP depletion and Na+/K+-ATPase membrane pump failure to cell swelling and ultrastructural organellar alterations."
              badge="Featured Microlearning"
              keyPoints={[
                'ATP depletion leads to failure of the Na+/K+-ATPase pump.',
                'Intracellular sodium rises, pulling water inward by iso-osmotic force.',
                'Endoplasmic reticulum dilates and mitochondria swell, creating cytoplasmic granularity.',
              ]}
            />
            <div className="mt-2 text-right">
              <a
                href="https://www.youtube.com/playlist?list=PLFBGjqC7Hw5s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-teal-800 hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>→ View the General Pathology in Minutes playlist</span>
              </a>
            </div>
          </section>
        );

      case 1:
        // Segment 2: Section A: Definition and Terminology
        return (
          <section
            id="segment-definition-terminology"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                A. Definition and Terminology
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Cellular swelling is a non-specific, early manifestation of acute cell injury characterized by fluid accumulation within the cytoplasm due to loss of cell membrane volume regulation. Terminology varies depending on severity and tissue distribution:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <strong className="text-teal-900 text-xs sm:text-sm block font-bold mb-1">
                  Cellular Swelling
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Initial subtle fluid uptake causing cellular enlargement and cytoplasmic cloudiness.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <strong className="text-teal-900 text-xs sm:text-sm block font-bold mb-1">
                  Hydropic Change
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advanced swelling with distinct microvacuoles of water within the cytoplasm.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <strong className="text-teal-900 text-xs sm:text-sm block font-bold mb-1">
                  Vacuolar Degeneration
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Presence of clear, fluid-filled membrane-bound vacuoles displacing cytoplasm.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <strong className="text-teal-900 text-xs sm:text-sm block font-bold mb-1">
                  Ballooning Degeneration
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Severe cellular enlargement and rounding seen in viral epithelial damage.
                </p>
              </div>
            </div>
          </section>
        );

      case 2:
        // Segment 3: Section B: Etiology and Causes
        return (
          <section
            id="segment-etiology-causes"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              B. Etiology and Causes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="border border-slate-200 rounded-xl p-3 bg-white">
                <h3 className="text-xs sm:text-sm font-bold text-teal-900 mb-1">
                  Hypoxia and Ischemia
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reduced arterial perfusion or oxygen delivery impairs mitochondrial respiration and ATP production.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-3 bg-white">
                <h3 className="text-xs sm:text-sm font-bold text-teal-900 mb-1">
                  Toxic Injury
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Exogenous toxins, heavy metals, or nephrotoxic/hepatotoxic drugs directly disrupting membrane ion channels.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-3 bg-white">
                <h3 className="text-xs sm:text-sm font-bold text-teal-900 mb-1">
                  Infectious Agents
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Viral, bacterial, or protozoal pathogens damaging plasma membranes or cellular metabolic pathways.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-3 bg-white">
                <h3 className="text-xs sm:text-sm font-bold text-teal-900 mb-1">
                  Fever &amp; Systemic Disease
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High body temperatures or systemic metabolic acidosis altering membrane enzymatic function.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-3 bg-white">
                <h3 className="text-xs sm:text-sm font-bold text-teal-900 mb-1">
                  Electrolyte Disturbance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Systemic osmotic imbalances or channelopathies causing extracellular-to-intracellular fluid shifts.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-3 bg-white">
                <h3 className="text-xs sm:text-sm font-bold text-teal-900 mb-1">
                  Physical Injury
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trauma, radiation, or extreme thermal variations disrupting plasma membrane structural integrity.
                </p>
              </div>
            </div>
          </section>
        );

      case 3:
        // Segment 4: Section C: Pathogenesis Sequence
        return (
          <section
            id="segment-pathogenesis-sequence"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              C. Pathogenesis Sequence
            </h2>
            <div className="space-y-2.5">
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 1: Cell Injury</strong> — Inciting insult (hypoxia, toxin, viral infection) damages cell.
              </div>
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 2: Mitochondrial Impairment</strong> — Reduced oxidative phosphorylation leads to acute intracellular ATP depletion.
              </div>
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 3: Pump Failure</strong> — Inactivation of energy-dependent Na<sup>+</sup>/K<sup>+</sup>-ATPase membrane pumps.
              </div>
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 4: Sodium Influx</strong> — Intracellular retention and accumulation of sodium ions (Na<sup>+</sup>) accompanied by loss of K<sup>+</sup>.
              </div>
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 5: Iso-osmotic Water Influx</strong> — Passive movement of water into the cytoplasm to balance osmotic gradient.
              </div>
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold">Step 6: Cellular Swelling &amp; Vacuolation</strong> — Dilation of organelles and formation of clear cytoplasmic fluid vacuoles.
              </div>
            </div>

            {/* Ultrastructural changes */}
            <div className="mt-4 p-4 border border-dashed border-teal-300 bg-teal-50/40 rounded-xl space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-teal-950">
                Associated Organellar &amp; Ultrastructural Changes
              </h3>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                <li><strong>Endoplasmic Reticulum:</strong> Dilation and detachment of ribosomes (impaired protein synthesis).</li>
                <li><strong>Mitochondria:</strong> Early mild-to-moderate swelling and matrix density loss.</li>
                <li><strong>Plasma Membrane:</strong> Loss of microvilli, membrane blebbing, and intercellular junction loosening.</li>
                <li><strong>Cytoplasm:</strong> Microvacuolation leading to cytoplasmic pallor and granularity.</li>
              </ul>
            </div>
          </section>
        );

      case 4:
        // Segment 5: Section D & E: Morphological Features
        return (
          <section
            id="segment-morphological-features"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              D &amp; E. Morphological Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="text-sm font-bold text-teal-900 mb-2">Gross Morphology</h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li><strong>Organ Size &amp; Weight:</strong> Mild-to-moderate overall organ enlargement and increased weight.</li>
                  <li><strong>Color:</strong> Pale or organ surface exhibits a dull, cooked-meat appearance.</li>
                  <li><strong>Consistency:</strong> Turgid or soft consistency.</li>
                  <li><strong>Cut Surface:</strong> Parenchyma bulges slightly when sectioned; capsule becomes taut.</li>
                  <li className="italic text-slate-500">Note: Gross changes may be subtle or undetectable in early/mild cases.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="text-sm font-bold text-teal-900 mb-2">Microscopic Morphology (H&amp;E)</h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li><strong>Cell Size:</strong> Affected parenchymal cells are enlarged, rounded, and swollen.</li>
                  <li><strong>Cytoplasm:</strong> Pale, finely granular, or contains ill-defined clear vacuoles (water).</li>
                  <li><strong>Cell Borders:</strong> Indistinct or compressed against neighboring cells.</li>
                  <li><strong>Lumina:</strong> Tubular or acinar lumina (e.g., renal proximal tubules) become narrowed or obliterated.</li>
                  <li><strong>Nucleus:</strong> Remains centrally located without pyknosis or karyorrhexis (distinguishing from necrosis).</li>
                </ul>
              </div>
            </div>
          </section>
        );

      case 5:
        // Segment 6: Section F: Veterinary Examples
        return (
          <section
            id="segment-veterinary-examples"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              F. Common Veterinary Examples
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Renal Tubular Swelling
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ischemic or nephrotoxic injury (e.g., ethylene glycol) causing swollen, pale proximal tubular epithelium.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Hepatocellular Hydropic Change
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acute toxic, hypoxic, or febrile injury leading to microvacuolated pale hepatocytes.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Epithelial Ballooning Degeneration
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Poxvirus or parapoxvirus epithelial infections inducing marked ballooning of keratinocytes.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Myocardial Swelling
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acute hypoxic or ischemic cardiac injury resulting in swollen, pale-staining cardiomyocytes.
                </p>
              </div>
            </div>
          </section>
        );

      case 6:
        // Segment 7: Section G: Differential Diagnosis Table
        return (
          <section
            id="segment-differential-diagnosis"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              G. Differential Diagnosis Table
            </h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[580px] border-collapse text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300">
                    <th className="p-2.5 font-bold text-slate-800">Feature</th>
                    <th className="p-2.5 font-bold text-teal-900">Hydropic Change</th>
                    <th className="p-2.5 font-bold text-amber-900">Fatty Change</th>
                    <th className="p-2.5 font-bold text-purple-900">Glycogen Accumulation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Accumulated Material</td>
                    <td className="p-2.5 text-slate-700">Water and electrolytes</td>
                    <td className="p-2.5 text-slate-700">Triglycerides (lipids)</td>
                    <td className="p-2.5 text-slate-700">Glycogen (carbohydrate)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Vacuole Appearance (H&amp;E)</td>
                    <td className="p-2.5 text-slate-700">Ill-defined, pale, granular or microvacuolated cytoplasm</td>
                    <td className="p-2.5 text-slate-700">Sharply demarcated, clear, round vacuoles</td>
                    <td className="p-2.5 text-slate-700">Feathery, indistinct, pale clear spaces</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Nuclear Position</td>
                    <td className="p-2.5 text-slate-700">Centrally located</td>
                    <td className="p-2.5 text-slate-700">Displaced to periphery (macrovesicular)</td>
                    <td className="p-2.5 text-slate-700">Centrally located</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Common Organs</td>
                    <td className="p-2.5 text-slate-700">Kidney, Liver, Epithelium, Heart</td>
                    <td className="p-2.5 text-slate-700">Liver, Heart, Kidney</td>
                    <td className="p-2.5 text-slate-700">Liver, Muscle, Kidney</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-semibold text-slate-800">Helpful Special Stain / Prep</td>
                    <td className="p-2.5 text-slate-700">H&amp;E (dissolves/washes out water)</td>
                    <td className="p-2.5 text-slate-700">Oil Red O / Sudan III (frozen)</td>
                    <td className="p-2.5 text-slate-700">PAS (diastase-sensitive)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        );

      case 7:
        // Segment 8: Section H: Pathology Image Gallery
        return (
          <section
            id="segment-pathology-gallery"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              H. Pathology Image Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/18dTvNrx9SCzx06hRQhGgNMUyMOKNk5Js"
                alt="Rat kidney showing cloudy swelling of renal tubular epithelial cells."
                caption={
                  <span>
                    <strong>Renal tubular cloudy swelling.</strong> Tubular epithelial cells are enlarged and have pale cytoplasm, illustrating an early form of cellular injury. The stars are part of the original published figure.
                  </span>
                }
                citation="Abdelhalim & Jarrar (2011), Lipids in Health and Disease 10:163."
                sourceUrl="https://link.springer.com/article/10.1186/1476-511X-10-163/figures/2"
                sourceTitle="Springer Link Figure 2"
                licenseText="CC BY 2.0"
                licenseUrl="https://creativecommons.org/licenses/by/2.0/"
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1Fh6PqBgpTSNOYB_uUGIlB5tE-RWPSDA2"
                alt="Rat kidney showing vacuolar degeneration of renal tubular epithelial cells."
                caption={
                  <span>
                    <strong>Renal tubular vacuolar degeneration.</strong> Clear cytoplasmic vacuoles are visible within affected tubular epithelial cells. The stars are part of the original published figure.
                  </span>
                }
                citation="Abdelhalim & Jarrar (2011), Lipids in Health and Disease 10:163."
                sourceUrl="https://link.springer.com/article/10.1186/1476-511X-10-163/figures/3"
                sourceTitle="Springer Link Figure 3"
                licenseText="CC BY 2.0"
                licenseUrl="https://creativecommons.org/licenses/by/2.0/"
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/17yosrGohjBGVN8EnLza20XlHCE5yIbFz"
                alt="Rat kidney showing prominent renal tubular vacuolar degeneration."
                caption={
                  <span>
                    <strong>More prominent renal tubular vacuolar degeneration</strong> following experimental toxic injury. Compare the cytoplasmic vacuolation with the milder cloudy swelling in the first image. The stars are part of the original published figure.
                  </span>
                }
                citation="Abdelhalim & Jarrar (2011), Lipids in Health and Disease 10:163."
                sourceUrl="https://link.springer.com/article/10.1186/1476-511X-10-163/figures/4"
                sourceTitle="Springer Link Figure 4"
                licenseText="CC BY 2.0"
                licenseUrl="https://creativecommons.org/licenses/by/2.0/"
              />
            </div>
          </section>
        );

      case 8:
        // Segment 9: Section I: Practical Case Study
        return (
          <section
            id="segment-case-study"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              I. Practical Case Study
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              <div className="md:col-span-1">
                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/17yosrGohjBGVN8EnLza20XlHCE5yIbFz"
                  alt="Rat kidney showing prominent renal tubular vacuolar degeneration."
                  caption="Renal cortex showing acute toxic tubular alteration."
                  citation="Abdelhalim & Jarrar (2011), Lipids in Health and Disease."
                  sourceUrl="https://link.springer.com/article/10.1186/1476-511X-10-163/figures/4"
                  sourceTitle="Source"
                  licenseText="CC BY 2.0"
                  licenseUrl="https://creativecommons.org/licenses/by/2.0/"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-teal-950">
                  Case Presentation: Experimental Toxic Tubular Injury
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A laboratory rat exposed to a nephrotoxic test material develops renal cortical tubular alterations. Histological examination reveals enlarged tubular epithelial cells with pale cytoplasm and variably sized clear cytoplasmic vacuoles. The changes are most prominent in proximal convoluted tubules.
                </p>

                <div className="border border-dashed border-teal-300 rounded-xl p-3 bg-teal-50/40 space-y-2.5">
                  <h4 className="text-xs font-bold text-teal-950 uppercase tracking-wider">
                    Case Questions
                  </h4>

                  <div className="space-y-2">
                    <div>
                      <button
                        onClick={() => toggleDetail('case_q1')}
                        className="w-full text-left flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-teal-900"
                      >
                        <span>1. What cellular alteration is demonstrated?</span>
                        {openDetails['case_q1'] ? (
                          <ChevronUp className="w-3.5 h-3.5 text-teal-700" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      {openDetails['case_q1'] && (
                        <p className="mt-1 text-xs text-teal-900 bg-white border border-teal-200 rounded-lg p-2 leading-relaxed">
                          Renal tubular cellular swelling with vacuolar degeneration.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleDetail('case_q2')}
                        className="w-full text-left flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-teal-900"
                      >
                        <span>2. Which intracellular transport failure commonly initiates cellular swelling?</span>
                        {openDetails['case_q2'] ? (
                          <ChevronUp className="w-3.5 h-3.5 text-teal-700" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      {openDetails['case_q2'] && (
                        <p className="mt-1 text-xs text-teal-900 bg-white border border-teal-200 rounded-lg p-2 leading-relaxed">
                          ATP depletion and failure of the Na<sup>+</sup>/K<sup>+</sup>-ATPase pump, followed by intracellular sodium and water accumulation.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleDetail('case_q3')}
                        className="w-full text-left flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-teal-900"
                      >
                        <span>3. Which nuclear findings would suggest progression from reversible injury to necrosis?</span>
                        {openDetails['case_q3'] ? (
                          <ChevronUp className="w-3.5 h-3.5 text-teal-700" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      {openDetails['case_q3'] && (
                        <p className="mt-1 text-xs text-teal-900 bg-white border border-teal-200 rounded-lg p-2 leading-relaxed">
                          Pyknosis, karyorrhexis, or karyolysis would support irreversible injury or necrosis.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-bold text-teal-950 pt-1">
                  Diagnostic Summary: Renal tubular cellular swelling and vacuolar degeneration associated with acute toxic cell injury.
                </p>
              </div>
            </div>
          </section>
        );

      case 9:
        // Segment 10: Summary & Knowledge Check
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
                <li>Cellular swelling is the earliest, most universal manifestation of acute reversible cell injury.</li>
                <li>Impairs Na<sup>+</sup>/K<sup>+</sup>-ATPase pumps due to ATP depletion, driving intracellular sodium accumulation and iso-osmotic water influx.</li>
                <li>Microscopically characterized by enlarged cells, pale microvacuolated cytoplasm, narrowed lumina, and intact central nuclei.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                Knowledge Check
              </h3>

              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('kc_1')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>1. What is the primary biochemical failure mechanism causing cellular swelling?</span>
                    {openDetails['kc_1'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['kc_1'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Failure of energy-dependent Na<sup>+</sup>/K<sup>+</sup>-ATPase membrane pumps due to intracellular ATP depletion.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('kc_2')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>2. How does nuclear position help differentiate hydropic change from macrovesicular fatty change?</span>
                    {openDetails['kc_2'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['kc_2'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      In hydropic change, the nucleus remains centrally located. In macrovesicular fatty change, large lipid droplets displace the nucleus to the cell periphery.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('kc_3')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>3. Why do tubular lumina appear narrowed in kidneys exhibiting hydropic change?</span>
                    {openDetails['kc_3'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['kc_3'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      The swelling and expansion of adjacent tubular epithelial cells bulge inward, compressing and narrowing the lumen.
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
      lessonTitle="Cellular Swelling and Hydropic Change"
      header={
        <MetabolismHeader
          title="Cellular Swelling and Hydropic Change"
          subtitle="The earliest and most common morphological manifestation of acute, reversible cell injury."
          category="General Pathology"
          lessonId="module-overview"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={MODULE_OVERVIEW_SECTIONS}
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
          next={{ id: 'intracellular-accumulations', title: 'Intracellular Accumulations' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
