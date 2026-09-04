import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  HelpCircle,
  Video as VideoIcon,
  Layers,
  CheckCircle2,
  ChevronRight,
  Flame,
  Activity,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { ScreenView } from '../../types';
import { LessonHeader } from '../common/LessonHeader';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from '../common/SegmentedLessonLayout';
import { InflammationGallery } from './InflammationGallery';
import { InflammationQuiz } from './InflammationQuiz';
import { InflammationVideos } from './InflammationVideos';

interface InflammationPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

const INFLAMMATION_SECTIONS: LessonSectionItem[] = [
  {
    id: 'inf-start-here',
    number: '01',
    title: '1. Start Here: Why and How Tissues Respond to Injury',
    shortTitle: '1. Start Here',
    description: 'Biological purpose, benefits, and perils of the inflammatory response in vascularized tissue.',
  },
  {
    id: 'inf-immunity-bg',
    number: '02',
    title: '2. Immunity Background: Before You Study Inflammation',
    shortTitle: '2. Immunity Background',
    description: 'Innate vs adaptive immune mechanisms, pattern recognition receptors (PAMPs/DAMPs).',
  },
  {
    id: 'inf-definition-causes-signs',
    number: '03',
    title: '3. Definition, Causes & Cardinal Signs',
    shortTitle: '3. Definition & Signs',
    description: 'Etiologies of tissue injury and Celsus–Virchow 5 cardinal signs of inflammation.',
  },
  {
    id: 'inf-acute-overview',
    number: '04',
    title: '4. Acute Inflammation Overview',
    shortTitle: '4. Acute Overview',
    description: 'Rapid onset, transient exudative response, and cellular dynamics.',
  },
  {
    id: 'inf-vascular-events',
    number: '05',
    title: '5. Vascular Events',
    shortTitle: '5. Vascular Events',
    description: 'Hemodynamic changes, increased vascular permeability, and exudate vs transudate comparison.',
  },
  {
    id: 'inf-leukocyte-recruitment',
    number: '06',
    title: '6. Leukocyte Recruitment',
    shortTitle: '6. Leukocyte Recruitment',
    description: 'Margination, selectin rolling, integrin firm adhesion, PECAM-1 diapedesis, and chemotaxis.',
  },
  {
    id: 'inf-mediators',
    number: '07',
    title: '7. Inflammatory Mediators',
    shortTitle: '7. Chemical Mediators',
    description: 'Vasoactive amines, arachidonic acid metabolites, cytokines, complement, and kinin systems.',
  },
  {
    id: 'inf-morphological-patterns',
    number: '08',
    title: '8. Morphological Patterns of Inflammation',
    shortTitle: '8. Morphological Patterns',
    description: 'Serous, catarrhal, fibrinous, suppurative, hemorrhagic, and necrotizing exudates.',
  },
  {
    id: 'inf-outcomes',
    number: '09',
    title: '9. Outcomes of Acute Inflammation',
    shortTitle: '9. Outcomes',
    description: 'Complete resolution, healing by fibrosis/scarring, and progression to chronicity.',
  },
  {
    id: 'inf-chronic-inflammation',
    number: '10',
    title: '10. Chronic Inflammation',
    shortTitle: '10. Chronic Inflammation',
    description: 'Mononuclear cell predominance, concurrent tissue destruction, and ongoing repair attempts.',
  },
  {
    id: 'inf-granulomatous',
    number: '11',
    title: '11. Granulomatous Inflammation',
    shortTitle: '11. Granulomatous',
    description: 'Epithelioid macrophages, Langhans and foreign-body multinucleated giant cells, and etiology.',
  },
  {
    id: 'inf-systemic-effects',
    number: '12',
    title: '12. Systemic Effects of Inflammation',
    shortTitle: '12. Systemic Effects',
    description: 'Acute-phase reaction, pyrogenic cytokines (IL-1, TNF, IL-6), leukocytosis, and liver proteins.',
  },
  {
    id: 'inf-healing-repair',
    number: '13',
    title: '13. Healing and Repair',
    shortTitle: '13. Healing & Repair',
    description: 'Regeneration vs scar formation, granulation tissue, angiogenesis, and collagen remodeling.',
  },
  {
    id: 'inf-practical-gallery',
    number: '14',
    title: '14. Practical Pathology Gallery',
    shortTitle: '14. Gallery',
    description: 'Gross and microscopic cases: fibrinous pericarditis, lung abscess, paratuberculosis, granulation tissue.',
  },
  {
    id: 'inf-test-yourself',
    number: '15',
    title: '15. Test Yourself',
    shortTitle: '15. Self-Test',
    description: '10 interactive self-assessment questions with feedback on diagnostic and clinical concepts.',
  },
  {
    id: 'inf-further-learning',
    number: '16',
    title: '16. Further Learning',
    shortTitle: '16. Further Learning',
    description: 'Microlearning video lecture series and authoritative reference textbooks.',
  },
];

export const InflammationPage: React.FC<InflammationPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  initialSectionId,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [completedIndices, setCompletedIndices] = useState<number[]>([0]);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');

  useEffect(() => {
    if (initialSectionId) {
      const targetIdx = INFLAMMATION_SECTIONS.findIndex(
        (s) => s.id === initialSectionId
      );
      if (targetIdx !== -1) {
        setCurrentIndex(targetIdx);
        setCompletedIndices((prev) =>
          prev.includes(targetIdx) ? prev : [...prev, targetIdx]
        );
      }
    }
  }, [initialSectionId]);

  const handleSelectSection = (index: number) => {
    setCurrentIndex(index);
    setCompletedIndices((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );
    const targetElement = document.getElementById('lesson-content-top');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNextSection = () => {
    if (currentIndex < INFLAMMATION_SECTIONS.length - 1) {
      handleSelectSection(currentIndex + 1);
    }
  };

  const handlePreviousSection = () => {
    if (currentIndex > 0) {
      handleSelectSection(currentIndex - 1);
    }
  };

  const handleCompleteLesson = () => {
    setCompletedIndices(INFLAMMATION_SECTIONS.map((_, i) => i));
    onNavigate({ type: 'general_pathology' });
  };

  const currentSection = INFLAMMATION_SECTIONS[currentIndex];

  const header = (
    <LessonHeader
      title="Inflammation"
      subtitle="General Pathology Module 3 — Vascular, cellular, and humoral tissue responses to injury."
      sectionCode="Section: 03"
      category="General Pathology"
      lessonId="inflammation"
      onNavigate={onNavigate}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      fontSize={fontSize}
      onChangeFontSize={setFontSize}
    />
  );

  return (
    <SegmentedLessonLayout
      header={header}
      lessonTitle="Inflammation"
      sections={INFLAMMATION_SECTIONS}
      currentIndex={currentIndex}
      completedIndices={completedIndices}
      onSelectSection={handleSelectSection}
      onNextSection={handleNextSection}
      onPreviousSection={handlePreviousSection}
      onCompleteLesson={handleCompleteLesson}
      onBackToCurriculum={() => onNavigate({ type: 'general_pathology' })}
      fontSize={fontSize}
      containerId="segmented-inflammation-container"
    >
      {/* SECTION 1: START HERE */}
      {currentSection.id === 'inf-start-here' && (
        <div className="space-y-5">
          <div className="bg-teal-50 border-l-4 border-teal-800 p-5 rounded-r-2xl space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-100/80 px-2.5 py-0.5 rounded-full font-mono-code">
              Fundamental Concept
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              1. Start Here: Why and How Tissues Respond to Injury
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
              Inflammation is a fundamental protective response of vascularized living tissue to injury. Its objective is to dilute, destroy, or isolate the offending agent, clear necrotic debris, and initiate tissue repair. Without inflammation, infections would spread uncontrollably and wounds would never heal. However, when excessive, persistent, or misdirected, inflammation becomes a primary cause of tissue destruction and clinical disease.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-serif-academic">
              Dual Nature of Inflammation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block">
                  Beneficial Effects
                </span>
                <ul className="text-xs text-emerald-950 space-y-1.5 list-disc pl-4 font-sans leading-relaxed">
                  <li>Dilutes bacterial toxins via exudate fluid influx.</li>
                  <li>Delivers circulating antibodies, complement, and opsonins.</li>
                  <li>Recruits phagocytes to neutralize pathogens and ingest debris.</li>
                  <li>Initiates induction of adaptive immune responses.</li>
                  <li>Provides fibrin scaffold for leukocyte migration and repair.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-2">
                <span className="text-xs font-bold text-rose-950 uppercase tracking-wider block">
                  Harmful / Detrimental Effects
                </span>
                <ul className="text-xs text-rose-950 space-y-1.5 list-disc pl-4 font-sans leading-relaxed">
                  <li>Destruction of normal bystander parenchymal tissue by lysosomal enzymes and ROS.</li>
                  <li>Life-threatening edema (e.g., laryngeal edema, cerebral herniation).</li>
                  <li>Hypotension and multi-organ failure in systemic septic shock.</li>
                  <li>Excessive scarring, fibrosis, or contracture causing stenosis and loss of mobility.</li>
                  <li>Autoimmune and hypersensitivity tissue injury.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: IMMUNITY BACKGROUND */}
      {currentSection.id === 'inf-immunity-bg' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              2. Immunity Background: Before You Study Inflammation
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Inflammation is closely linked to the immune system. A clear understanding of innate and adaptive immunity helps explain how tissues recognize injury, recruit inflammatory cells, produce chemical mediators, eliminate harmful agents, and eventually resolve or repair damage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Innate Immunity (Non-Specific)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  The initial rapid defense line. Mediated by physical barriers (skin, mucosa), chemical factors (lysozyme, gastric acid), circulating phagocytes (neutrophils, macrophages), natural killer (NK) cells, and plasma protein cascades (complement). Recognizes conserved pathogen-associated molecular patterns (PAMPs) and danger-associated molecular patterns (DAMPs) via pattern recognition receptors (e.g., Toll-like receptors / TLRs).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Adaptive Immunity (Specific &amp; Memory)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Delayed, antigen-specific defense mounted by T lymphocytes (cell-mediated immunity) and B lymphocytes / plasma cells (humoral antibody production). Generates immunologic memory, enabling faster and more vigorous responses upon re-exposure.
                </p>
              </div>
            </div>

            {/* Video Embed: Immunity Background */}
            <div className="mt-4 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="relative aspect-video bg-slate-950">
                <iframe
                  src="https://www.youtube.com/embed/5nFy6FUY0xU"
                  title="Immune System, Part 1: Crash Course A&P #45"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-serif-academic">
                  Video: Immunity Background &amp; Innate Defense
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                  Watch this visual review of the innate immune system, epithelial physical and chemical barriers, and inflammatory trigger mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: DEFINITION, CAUSES & SIGNS */}
      {currentSection.id === 'inf-definition-causes-signs' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              3. Definition, Causes &amp; Cardinal Signs
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Inflammation is formally defined as the local vascular and cellular response of living tissues to sublethal injury.
            </p>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900 font-serif-academic">
                Primary Causes of Inflammation
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-5 font-sans leading-relaxed">
                <li><strong>Infectious agents:</strong> Bacteria, viruses, fungi, protozoa, and metazoan parasites.</li>
                <li><strong>Physical trauma:</strong> Mechanical trauma, thermal extremes (burns, frostbite), radiation, electric shock.</li>
                <li><strong>Chemical agents:</strong> Caustic acids, alkalis, toxins, venoms, endogenous toxic metabolites (urea, bile salts).</li>
                <li><strong>Tissue necrosis:</strong> Ischemic necrosis (infarcts), enzymatic fat necrosis, mechanical cell rupture.</li>
                <li><strong>Immune reactions:</strong> Hypersensitivity reactions (allergy, anaphylaxis) and autoimmune diseases.</li>
                <li><strong>Foreign bodies:</strong> Splinters, surgical sutures, plant awns, inhaled silica or asbestos.</li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 font-serif-academic">
                The 5 Cardinal Signs of Inflammation
              </h3>
              <p className="text-xs text-slate-600 font-sans">
                Originally formulated by the Roman encyclopedist <strong>Celsus</strong> (1st century AD), with the fifth sign added by <strong>Rudolf Virchow</strong> (19th century):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/50">
                  <div className="font-bold text-xs text-rose-900">1. Rubor (Redness)</div>
                  <p className="text-[11px] text-slate-600 mt-1 font-sans">
                    Caused by arteriolar vasodilation and increased blood flow (active hyperemia).
                  </p>
                </div>
                <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50">
                  <div className="font-bold text-xs text-amber-900">2. Calor (Heat)</div>
                  <p className="text-[11px] text-slate-600 mt-1 font-sans">
                    Caused by increased blood flow carrying warmer core blood to peripheral inflamed tissues.
                  </p>
                </div>
                <div className="p-3 rounded-xl border border-teal-200 bg-teal-50/50">
                  <div className="font-bold text-xs text-teal-900">3. Tumor (Swelling)</div>
                  <p className="text-[11px] text-slate-600 mt-1 font-sans">
                    Caused by exudation of protein-rich fluid and inflammatory cells into interstitial spaces.
                  </p>
                </div>
                <div className="p-3 rounded-xl border border-indigo-200 bg-indigo-50/50">
                  <div className="font-bold text-xs text-indigo-900">4. Dolor (Pain)</div>
                  <p className="text-[11px] text-slate-600 mt-1 font-sans">
                    Caused by stretching of tissue by exudate and direct chemical stimulation of nociceptors by bradykinin and PGE2.
                  </p>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-100 sm:col-span-2 md:col-span-2">
                  <div className="font-bold text-xs text-slate-900">5. Functio Laesa (Loss of Function)</div>
                  <p className="text-[11px] text-slate-600 mt-1 font-sans">
                    Added by Rudolf Virchow; mechanical impairment by swelling and pain, together with cellular dysfunction in injured parenchyma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: ACUTE INFLAMMATION OVERVIEW */}
      {currentSection.id === 'inf-acute-overview' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              4. Acute Inflammation Overview
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Acute inflammation is the immediate and early response to an injurious agent. It is relatively short in duration (lasting minutes to a few days) and is characterized morphologically by exudation of fluid and plasma proteins (edema) and the emigration of leukocytes, predominantly <strong>neutrophils (heterophils in birds, reptiles, and rabbits)</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-900 font-mono-code">
                Major Components of Acute Inflammation
              </h3>
              <ol className="text-xs text-slate-700 space-y-1.5 list-decimal pl-5 font-sans leading-relaxed">
                <li><strong>Alterations in vascular caliber:</strong> Leading to an increase in blood flow (active hyperemia).</li>
                <li><strong>Structural changes in the microvasculature:</strong> Enabling plasma proteins and leukocytes to leave the circulation (increased vascular permeability).</li>
                <li><strong>Emigration of leukocytes:</strong> From the microcirculation, accumulation at the site of injury, and activation to eliminate the offending agent.</li>
              </ol>
            </div>

            {/* Video: Acute Inflammation Overview */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="relative aspect-video bg-slate-950">
                <iframe
                  src="https://www.youtube.com/embed/HAq00u1hNkg"
                  title="Inflammation (acute and chronic) - pathology"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-serif-academic">
                  Video: Acute Inflammation Overview
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                  Osmosis / Pathology lecture detailing hemodynamic changes, cellular recruitment, and morphologic stages of acute inflammation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: VASCULAR EVENTS */}
      {currentSection.id === 'inf-vascular-events' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              5. Vascular Events
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              The vascular alterations in acute inflammation maximize the movement of plasma proteins and leukocytes from the bloodstream into the site of injury:
            </p>

            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
              <li><strong>Transient arteriolar constriction:</strong> Lasts only seconds to a few minutes; mediated neurogenically.</li>
              <li><strong>Arteriolar vasodilation:</strong> Involves opening of microvascular capillary beds, resulting in active hyperemia, redness (rubor), and warmth (calor). Mediated primarily by <em>histamine</em> and <em>nitric oxide (NO)</em>.</li>
              <li><strong>Slowing of the circulation (stasis):</strong> As fluid leaks into the extravascular space, concentration of red cells in small vessels increases blood viscosity, leading to stasis. This allows leukocytes to fall out of the central axial stream toward the vascular endothelium (margination).</li>
              <li><strong>Increased vascular permeability:</strong> The hallmark of acute inflammation, leading to escape of protein-rich fluid (exudate) into extravascular tissue spaces.</li>
            </ul>

            <h3 className="text-sm font-bold text-slate-900 font-serif-academic pt-2">
              Comparison: Exudate vs. Transudate
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-teal-950 font-bold font-mono-code">
                    <th className="p-2.5 border border-slate-200">Feature</th>
                    <th className="p-2.5 border border-slate-200">Exudate (Inflammatory)</th>
                    <th className="p-2.5 border border-slate-200">Transudate (Non-inflammatory)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-sans">
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Origin</td>
                    <td className="p-2.5">Inflammatory tissue injury</td>
                    <td className="p-2.5">Hemodynamic disturbance (hydrostatic / oncotic)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Specific Gravity</td>
                    <td className="p-2.5">&gt; 1.020 (dense)</td>
                    <td className="p-2.5">&lt; 1.012 (watery)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Protein Content</td>
                    <td className="p-2.5">&gt; 3.0 g/dL (rich in albumin &amp; fibrinogen)</td>
                    <td className="p-2.5">&lt; 1.5 g/dL (predominantly albumin only)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Cellularity</td>
                    <td className="p-2.5">High (&gt; 5,000 / &mu;L; rich in neutrophils)</td>
                    <td className="p-2.5">Low (&lt; 1,000 / &mu;L; occasional mesothelial cells)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Endothelial Permeability</td>
                    <td className="p-2.5">Increased (intercellular endothelial gap formation)</td>
                    <td className="p-2.5">Normal (intact endothelial junctions)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: LEUKOCYTE RECRUITMENT */}
      {currentSection.id === 'inf-leukocyte-recruitment' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              6. Leukocyte Recruitment
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              The movement of leukocytes from the vessel lumen to the tissue site of injury proceeds via a highly coordinated multi-step cascade:
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-mono-code">
                  1. Margination and Rolling
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Slowing blood flow causes leukocytes to marginate along the vessel periphery. Transient, low-affinity tethering and rolling are mediated by <strong>Selectins</strong> (E-selectin, P-selectin on activated endothelium, and L-selectin on leukocytes) binding to sialylated oligosaccharides (Sialyl Lewis X).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-mono-code">
                  2. Firm Adhesion
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Chemokines activate leukocyte <strong>Integrins</strong> (LFA-1, Mac-1 / CD11b/CD18, VLA-4) to switch from low- to high-affinity conformations. Activated integrins bind firmly to endothelial ligands (ICAM-1, VCAM-1), arresting the rolling cell.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-mono-code">
                  3. Transmigration (Diapedesis)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Leukocytes squeeze through intercellular endothelial junctions, mediated by homotypic interactions of <strong>PECAM-1 (CD31)</strong>. Leukocytes then pierce the vascular basement membrane by secreting collagenases.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-mono-code">
                  4. Chemotaxis
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Directed amoeboid migration along a chemical gradient toward the injury locus. Chemoattractants include <em>C5a</em>, <em>leukotriene B4 (LTB4)</em>, <em>IL-8</em>, and bacterial N-formyl peptides.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-mono-code">
                  5. Phagocytosis and Microbial Killing
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Opsonization by IgG and C3b triggers receptor-mediated engulfment into a phagosome. Fusion with lysosomes creates a phagolysosome, where killing occurs via respiratory burst (ROS, myeloperoxidase halide system: H2O2 + Cl- &rarr; HOCl / hypochlorite) and lysosomal enzymes (lysozyme, defensins).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 7: INFLAMMATORY MEDIATORS */}
      {currentSection.id === 'inf-mediators' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              7. Inflammatory Mediators
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Chemical substances originating from plasma proteins or cellular sources that initiate, coordinate, and regulate inflammatory responses.
            </p>

            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
              <li>
                <strong>Vasoactive Amines (Histamine, Serotonin):</strong> Preformed and stored in mast cells, basophils, and platelets; cause immediate arteriolar dilation and venular endothelial contraction (gaps).
              </li>
              <li>
                <strong>Arachidonic Acid Metabolites (Eicosanoids):</strong>
                <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                  <li><em>Prostaglandins (PGE2, PGI2 / Prostacyclin):</em> Cyclooxygenase (COX) pathway; induce vasodilation, inhibit platelet aggregation, and mediate pain and hypothalamic fever.</li>
                  <li><em>Leukotrienes (LTB4, LTC4, LTD4, LTE4):</em> 5-Lipoxygenase pathway; LTB4 is a potent chemotactic agent; LTC4/D4/E4 cause intense bronchoconstriction and increased vascular permeability.</li>
                </ul>
              </li>
              <li>
                <strong>Cytokines (TNF-&alpha;, IL-1, IL-6):</strong> Principally produced by activated macrophages; induce endothelial adhesion molecule expression (ICAM-1, E-selectin) and systemic acute-phase reactions.
              </li>
              <li>
                <strong>Complement System (C3a, C5a, C5b-9):</strong> Plasma cascade. C3a and C5a act as anaphylatoxins (triggering histamine release); C5a is a potent neutrophil chemoattractant; C5b-9 forms the membrane attack complex (MAC).
              </li>
              <li>
                <strong>Kinin System (Bradykinin):</strong> Activated by factor XII (Hageman factor); causes arteriolar vasodilation, increased capillary permeability, and stimulates pain receptors.
              </li>
            </ul>

            {/* Video embed: Cytokines & Chemokines */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <div className="relative aspect-video bg-slate-950">
                <iframe
                  src="https://www.youtube.com/embed/yzYnI1al64Q"
                  title="Cytokines and Chemokines Network"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-serif-academic">
                  Video: Cytokines &amp; Chemokines Network
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                  Visual guide illustrating cytokine signaling networks, leukocyte chemoattraction, and feedback regulation during inflammation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 8: MORPHOLOGICAL PATTERNS */}
      {currentSection.id === 'inf-morphological-patterns' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              8. Morphological Patterns of Inflammation
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              The predominant physical nature of the exudate and the tissue response determine the specific morphological diagnosis:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Serous Inflammation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Outpouring of thin, watery, protein-poor fluid derived from blood serum or mesothelial secretions. <em>Examples: Cutaneous blisters from burns, serous pericarditis, mild acute synovitis.</em>
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Catarrhal Inflammation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Occurs on mucous membranes containing mucus-secreting goblet cells (gastrointestinal, respiratory, reproductive tracts). Characterized by excessive production of thick, cloudy mucus containing sloughed epithelial cells and inflammatory cells. <em>Examples: Acute catarrhal rhinitis, catarrhal enteritis.</em>
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Fibrinous Inflammation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Severe vascular leakage allows large fibrinogen molecules to escape into body cavities and tissue surfaces, polymerizing into insoluble fibrin. Grossly creates a dull, friable, shaggy mat easily peeled off serosa. <em>Examples: "Bread-and-butter" fibrinous pericarditis, fibrinous pleuropneumonia (Mannheimia haemolytica).</em>
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Suppurative (Purulent) Inflammation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Characterized by production of <strong>pus</strong> (liquefied necrotic tissue, proteinaceous fluid, and viable/necrotic neutrophils). Often caused by pyogenic bacteria (<em>Staphylococcus</em>, <em>Streptococcus</em>, <em>Trueperella</em>). Forms localized abscesses, diffuse phlegmon, or empyema in pre-existing cavities.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Hemorrhagic Inflammation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Severe microvascular destruction allows massive extravasation of erythrocytes alongside inflammatory exudate. <em>Examples: Anthrax (Bacillus anthracis), Blackleg (Clostridium chauvoei), Canine parvovirus enteritis.</em>
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Necrotizing Inflammation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Extensive parenchymal tissue necrosis accompanied by acute exudation, often due to high-virulence necrotizing toxins or ischemic thrombosis. <em>Examples: Necrotizing enteritis (Clostridium perfringens type C), necrobacillosis (Fusobacterium necrophorum).</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 9: OUTCOMES OF ACUTE INFLAMMATION */}
      {currentSection.id === 'inf-outcomes' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              9. Outcomes of Acute Inflammation
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Depending on the inciting agent, tissue type, and severity of injury, acute inflammation follows three major pathways:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
                <h4 className="text-sm font-bold text-emerald-950 font-serif-academic">
                  1. Complete Resolution
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  The ideal outcome: total restoration of normal histological architecture and physiological function. Occurs when tissue injury is limited, the inciting agent is neutralized, necrotic debris is cleared by macrophages, vascular permeability normalizes, and the tissue possesses intact stromal framework and regenerative cellular capacity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1.5">
                <h4 className="text-sm font-bold text-amber-950 font-serif-academic">
                  2. Healing by Fibrosis / Scarring (Organization)
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  Occurs after substantial tissue destruction, in tissues that cannot regenerate (e.g., myocardium, neurons), or when massive fibrinous exudate cannot be resorbed. Granulation tissue grows into the exudate (organization), followed by collagen deposition and scar formation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-1.5">
                <h4 className="text-sm font-bold text-rose-950 font-serif-academic">
                  3. Progression to Chronic Inflammation
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  Occurs when the offending stimulus cannot be cleared (persistent microbes, foreign material, unresolved necrotic debris) or when healing is impeded, shifting the cellular infiltrate from neutrophils to macrophages, lymphocytes, and plasma cells.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 10: CHRONIC INFLAMMATION */}
      {currentSection.id === 'inf-chronic-inflammation' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              10. Chronic Inflammation
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Inflammation of prolonged duration (weeks, months, or years) in which active tissue destruction, inflammatory cell infiltration, and attempts at healing (fibrosis) proceed simultaneously.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-900 font-mono-code">
                Key Hallmarks of Chronic Inflammation
              </h3>
              <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
                <li>
                  <strong>Mononuclear Cell Infiltration:</strong> Dominance of <strong>macrophages</strong>, <strong>lymphocytes</strong>, and <strong>plasma cells</strong> rather than neutrophils.
                </li>
                <li>
                  <strong>Tissue Destruction:</strong> Extensive, ongoing necrosis induced largely by products of inflammatory cells themselves (lysosomal enzymes, proteases, nitric oxide, free radicals).
                </li>
                <li>
                  <strong>Attempts at Healing:</strong> Proliferation of new small blood vessels (angiogenesis) and deposition of dense fibrous connective tissue (fibroplasia and scarring).
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-bold text-slate-900 font-serif-academic">
                Primary Causes of Chronicity
              </h3>
              <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5 font-sans">
                <li>Persistent infections by intracellular organisms (<em>Mycobacterium</em>, fungi, parasites).</li>
                <li>Immune-mediated diseases (autoimmune diseases, allergic reactions).</li>
                <li>Prolonged exposure to toxic non-degradable substances (silica, plant material, foreign bodies).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 11: GRANULOMATOUS INFLAMMATION */}
      {currentSection.id === 'inf-granulomatous' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              11. Granulomatous Inflammation
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              A specialized pattern of chronic inflammation designed to isolate and compartmentalize indigestible, poorly soluble, or persistent infectious and non-infectious agents.
            </p>

            <div className="space-y-3 pt-1">
              <h3 className="text-sm font-bold text-slate-900 font-serif-academic">
                Microscopic Components of a Granuloma
              </h3>
              <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
                <li>
                  <strong>Epithelioid Macrophages:</strong> Activated macrophages transformed under the influence of IFN-&gamma;. They have abundant, pale eosinophilic cytoplasm and oval open nuclei resembling epithelial cells, specialized for secretion rather than phagocytosis.
                </li>
                <li>
                  <strong>Multinucleated Giant Cells:</strong> Formed by fusion of epithelioid macrophages:
                  <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                    <li><em>Langhans Giant Cells:</em> Nuclei arranged peripherally in a characteristic horseshoe or ring pattern; typical of tuberculosis and mycobacteriosis.</li>
                    <li><em>Foreign-Body Giant Cells:</em> Nuclei scattered irregularly and haphazardly throughout the cytoplasm; typical of suture reactions and plant awns.</li>
                  </ul>
                </li>
                <li>
                  <strong>Lymphocytic and Plasma Cell Rim:</strong> Encircles the central core of macrophages, actively secreting antibodies and cytokines (IFN-&gamma;).
                </li>
                <li>
                  <strong>Fibrous Capsule:</strong> An outer wall of dense fibrocollagenous tissue that sequesters the granulomatous core from surrounding normal organ parenchyma.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 12: SYSTEMIC EFFECTS */}
      {currentSection.id === 'inf-systemic-effects' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              12. Systemic Effects of Inflammation
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Inflammation, even when locally initiated, is accompanied by a coordinated cytokine-mediated systemic response termed the <strong>Acute-Phase Reaction</strong>, orchestrated primarily by TNF-&alpha;, IL-1, and IL-6:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-rose-950 font-serif-academic">
                  Fever (Pyrexia)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Pyrogenic cytokines (IL-1, TNF) act on the vascular endothelium of the hypothalamus to stimulate PGE2 production, resetting the hypothalamic thermostat upward.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-teal-950 font-serif-academic">
                  Leukocytosis
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Colony-stimulating factors accelerate bone marrow release and production of leukocytes (neutrophilia with left shift in bacterial infection; lymphocytosis in viral; eosinophilia in parasitic/allergic).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-amber-950 font-serif-academic">
                  Acute-Phase Protein Synthesis
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  IL-6 stimulates hepatocytes to dramatically upregulate C-reactive protein (CRP), serum amyloid A (SAA), and fibrinogen.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-indigo-950 font-serif-academic">
                  Constitutional Clinical Signs
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Lethargy, anorexia, somnolence, shivering, cachexia (in chronic TNF elevation / cachectin), and hypotension in severe sepsis.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 13: HEALING AND REPAIR */}
      {currentSection.id === 'inf-healing-repair' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              13. Healing and Repair
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Restoration of tissue architecture and function following an inflammatory insult proceeds by two main processes: <strong>regeneration</strong> and <strong>connective tissue replacement (fibrosis / scarring)</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-900 font-mono-code">
                Sequential Steps in Scar Formation
              </h3>
              <ol className="text-xs text-slate-700 space-y-2 list-decimal pl-5 font-sans leading-relaxed">
                <li>
                  <strong>Hemostatic plug and acute inflammatory response:</strong> Platelet aggregation stops hemorrhage; neutrophils and macrophages debride tissue and secrete growth factors (VEGF, FGF, TGF-&beta;).
                </li>
                <li>
                  <strong>Granulation tissue formation:</strong> Within 3 to 5 days, highly vascularized, soft, pink granular tissue fills the defect. Characterized by proliferating new thin-walled capillaries (angiogenesis) and activated fibroblasts in a loose ECM.
                </li>
                <li>
                  <strong>Tissue remodeling and scar maturation:</strong> Type III collagen is gradually replaced by strong Type I collagen. Blood vessels regress, and <em>myofibroblasts</em> contract the wound, leaving an avascular, dense pale scar.
                </li>
              </ol>
            </div>

            {/* Video: Tissue Repair 101 */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-2">
              <div className="relative aspect-video bg-slate-950">
                <iframe
                  src="https://www.youtube.com/embed/OiF_Dh7YWDc"
                  title="Tissue Repair 101: Regeneration, Granulation Tissue, and Scarring"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-serif-academic">
                  Video: Tissue Repair 101
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                  Detailed educational walkthrough covering regeneration, granulation tissue formation, collagen remodeling, and wound healing.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 14: PRACTICAL PATHOLOGY GALLERY */}
      {currentSection.id === 'inf-practical-gallery' && <InflammationGallery />}

      {/* SECTION 15: TEST YOURSELF */}
      {currentSection.id === 'inf-test-yourself' && <InflammationQuiz />}

      {/* SECTION 16: FURTHER LEARNING */}
      {currentSection.id === 'inf-further-learning' && <InflammationVideos />}
    </SegmentedLessonLayout>
  );
};
