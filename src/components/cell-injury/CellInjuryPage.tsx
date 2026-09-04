import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ArrowRight,
  AlertCircle,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ScreenView } from '../../types';
import { CellInjuryHeader } from './CellInjuryHeader';
import { CellInjuryLayout, LessonSectionItem } from './CellInjuryLayout';
import { MetabolismFigure } from '../metabolism/MetabolismFigure';
import { CellInjuryGallery } from './CellInjuryGallery';
import { CellInjuryQuiz } from './CellInjuryQuiz';
import { CellInjuryVideos } from './CellInjuryVideos';

interface CellInjuryPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

const CELL_INJURY_SECTIONS: LessonSectionItem[] = [
  { id: 'cid-start-here', title: '1. Start Here', shortTitle: '1. Start Here', badge: 'Core Overview' },
  { id: 'cid-causes', title: '2. Causes of Cell Injury', shortTitle: '2. Causes', badge: 'Etiology' },
  { id: 'cid-mechanisms', title: '3. Mechanisms of Cell Injury', shortTitle: '3. Mechanisms', badge: 'Biochemistry' },
  { id: 'cid-reversible-injury', title: '4. Reversible Cell Injury', shortTitle: '4. Reversible', badge: 'Morphology' },
  { id: 'cid-irreversible-injury', title: '5. Irreversible Cell Injury', shortTitle: '5. Irreversible', badge: 'Point of No Return' },
  { id: 'cid-necrosis', title: '6. Necrosis', shortTitle: '6. Necrosis', badge: 'Nuclear Breakdown' },
  { id: 'cid-patterns-of-necrosis', title: '7. Patterns of Necrosis', shortTitle: '7. Patterns', badge: '6 Morphologic Types' },
  { id: 'cid-apoptosis', title: '8. Apoptosis', shortTitle: '8. Apoptosis', badge: 'Programmed Death' },
  { id: 'cid-necrosis-vs-apoptosis', title: '9. Necrosis versus Apoptosis', shortTitle: '9. Comparison', badge: 'Comparative Criteria' },
  { id: 'cid-cellular-adaptations', title: '10. Cellular Adaptations to Stress', shortTitle: '10. Adaptations', badge: 'Stress Responses' },
  { id: 'cid-practical-gallery', title: '11. Practical Pathology Gallery', shortTitle: '11. Gallery', badge: '6 Diagnostic Cases' },
  { id: 'cid-test-yourself', title: '12. Test Yourself', shortTitle: '12. Quiz', badge: 'Self-Assessment' },
  { id: 'cid-videos-learning', title: '13. Videos & Further Learning', shortTitle: '13. Videos', badge: 'Multimedia Lectures' },
];

export const CellInjuryPage: React.FC<CellInjuryPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved = false,
  onToggleSave,
  initialSectionId,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (initialSectionId) {
      const foundIdx = CELL_INJURY_SECTIONS.findIndex(
        (s) => s.id === initialSectionId
      );
      if (foundIdx !== -1) return foundIdx;
    }
    return 0;
  });

  const [completedIndices, setCompletedIndices] = useState<number[]>([0]);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');

  useEffect(() => {
    if (initialSectionId) {
      const foundIdx = CELL_INJURY_SECTIONS.findIndex(
        (s) => s.id === initialSectionId
      );
      if (foundIdx !== -1) {
        setCurrentIndex(foundIdx);
        setCompletedIndices((prev) =>
          prev.includes(foundIdx) ? prev : [...prev, foundIdx]
        );
      }
    }
  }, [initialSectionId]);

  const handleSelectSection = (index: number) => {
    setCurrentIndex(index);
    setCompletedIndices((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );
    const topAnchor = document.getElementById('lesson-content-top');
    if (topAnchor) {
      topAnchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < CELL_INJURY_SECTIONS.length - 1) {
      handleSelectSection(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleSelectSection(currentIndex - 1);
    }
  };

  const handleCompleteLesson = () => {
    onNavigate({ type: 'general_pathology' });
  };

  const currentSection = CELL_INJURY_SECTIONS[currentIndex];

  const header = (
    <CellInjuryHeader
      title="Cell Injury and Cell Death"
      subtitle="Causes, biochemical mechanisms, reversible changes, necrosis patterns, apoptosis, and cellular adaptations to stress."
      lessonId="cell-injury-cell-death"
      onNavigate={onNavigate}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      fontSize={fontSize}
      onChangeFontSize={setFontSize}
    />
  );

  return (
    <CellInjuryLayout
      header={header}
      lessonTitle="Cell Injury and Cell Death"
      sections={CELL_INJURY_SECTIONS}
      currentIndex={currentIndex}
      completedIndices={completedIndices}
      onSelectSection={handleSelectSection}
      onNextSection={handleNext}
      onPreviousSection={handlePrev}
      onCompleteLesson={handleCompleteLesson}
      onBackToCurriculum={() => onNavigate({ type: 'general_pathology' })}
      fontSize={fontSize}
      footerNav={
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onNavigate({ type: 'general_pathology' })}
            className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1.5 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to General Pathology</span>
          </button>
          <button
            onClick={() => onNavigate({ type: 'general_pathology' })}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
          >
            <span>General Pathology Curriculum</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      }
    >
      {/* 1. START HERE */}
      {currentIndex === 0 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            1. Start Here
          </h2>

          <p className="text-slate-700 leading-relaxed font-sans">
            Cell injury results when environmental stresses exceed the ability of the cell to maintain normal homeostasis. Depending on the severity, duration, and type of stress, as well as the cell's metabolic state, injury may be reversible or irreversible, leading to cell death.
          </p>

          <MetabolismFigure
            src="https://lh3.googleusercontent.com/d/1ycI0r-7F8LVAAzjqfpSyvCr1wFEPWZb6"
            alt="Overview of reversible and irreversible cell injury"
            caption={
              <span>
                <strong>Reversible vs Irreversible Cell Injury.</strong> Overview of cellular responses to injury. Normal cells under mild stress develop reversible injury characterized by hydropic change, organelle swelling, and membrane blebbing. Persistent or severe injury leads to irreversible damage marked by loss of membrane integrity, mitochondrial amorphous densities, and nuclear breakdown (pyknosis → karyorrhexis → karyolysis), culminating in cell death.
              </span>
            }
          />

          <div className="bg-amber-50/80 border-l-3 border-amber-700 p-3.5 rounded-r-xl text-xs sm:text-sm text-amber-950 leading-relaxed font-sans">
            <strong className="font-bold text-amber-900">Key Concept: </strong>
            Reversible injury is characterized by functional impairment without cell death; removal of the injurious stimulus allows recovery. Irreversible injury crosses the "point of no return," committing the cell to necrosis or apoptosis.
          </div>
        </section>
      )}

      {/* 2. CAUSES OF CELL INJURY */}
      {currentIndex === 1 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            2. Causes of Cell Injury
          </h2>

          <p className="text-slate-700 leading-relaxed font-sans">
            Cells may be injured through a diverse range of etiologic agents, classified as follows:
          </p>

          <ul className="space-y-3 text-slate-700 leading-relaxed font-sans">
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Hypoxia and Ischemia:
              </strong>
              Oxygen deficiency resulting from reduced blood flow (ischemia) or inadequate oxygenation of blood (hypoxia). Ischemia is the most common cause of cell injury.
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Physical Agents:
              </strong>
              Mechanical trauma, temperature extremes (heat, deep cold), radiation, electric shock, and sudden changes in atmospheric pressure.
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Chemical Agents and Drugs:
              </strong>
              Simple chemicals (glucose or salt in hypertonic concentrations), poisons (arsenic, cyanide, insecticides), therapeutic drugs, and environmental pollutants.
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Infectious Agents:
              </strong>
              Viruses, bacteria, fungi, protozoa, and helminths.
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Immunological Reactions:
              </strong>
              Anaphylaxis, autoimmune diseases, and excessive inflammatory responses that damage host tissues.
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Genetic Derangements:
              </strong>
              Congenital malformations, chromosomal anomalies, and inborn errors of metabolism.
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Nutritional Imbalances:
              </strong>
              Protein-calorie malnutrition, specific vitamin deficiencies, as well as nutritional excesses (e.g., obesity, atherosclerosis).
            </li>
          </ul>
        </section>
      )}

      {/* 3. MECHANISMS OF CELL INJURY */}
      {currentIndex === 2 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            3. Mechanisms of Cell Injury
          </h2>

          <p className="text-slate-700 leading-relaxed font-sans">
            Several biochemical mechanisms are central to cell injury, regardless of the initiating cause:
          </p>

          <MetabolismFigure
            src="https://lh3.googleusercontent.com/d/1LNBjH8cYh3TFCd9bRyD3d-lQRZGfhzd0"
            alt="Major biochemical mechanisms of cell injury"
            caption={
              <span>
                <strong>Mechanisms of Cell Injury.</strong> Major biochemical mechanisms of cell injury. ATP depletion impairs ion pumps, causing cellular swelling. Reactive oxygen species (ROS) induce lipid peroxidation and protein/DNA damage. Loss of calcium homeostasis activates destructive enzymes. Mitochondrial injury triggers permeability transition and loss of oxidative phosphorylation, driving the cell toward irreversible injury and death.
              </span>
            }
          />

          <ul className="space-y-3 text-slate-700 leading-relaxed font-sans">
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-1">
                ATP Depletion:
              </strong>
              Critical consequence of hypoxia, ischemia, and toxic injury. Loss of ATP disrupts membrane Na+/K+ ATPase, leading to intracellular sodium and water accumulation (cellular swelling), detached ribosomes, and failure of protein synthesis.
            </li>
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-1">
                Mitochondrial Damage:
              </strong>
              Results from increased cytosolic Ca2+, ROS, and lipid peroxidation. Leads to opening of the mitochondrial permeability transition pore (loss of membrane potential) and leakage of pro-apoptotic proteins (cytochrome c).
            </li>
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-1">
                Influx of Calcium and Loss of Calcium Homeostasis:
              </strong>
              Cytosolic free Ca2+ is kept extremely low under normal conditions. Injury causes release from mitochondria and endoplasmic reticulum, activating destructive intracellular enzymes: phospholipases (membrane damage), proteases (cytoskeletal breakdown), endonucleases (DNA fragmentation), and ATPases (hastening ATP depletion).
            </li>
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-1">
                Accumulation of Reactive Oxygen Species (ROS):
              </strong>
              Free radicals (superoxide anion, hydrogen peroxide, hydroxyl radical) cause lipid peroxidation of membranes, oxidative modification of proteins, and DNA strand breakage.
            </li>
          </ul>
        </section>
      )}

      {/* 4. REVERSIBLE CELL INJURY */}
      {currentIndex === 3 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            4. Reversible Cell Injury
          </h2>

          <p className="text-slate-700 leading-relaxed font-sans">
            Morphologic hallmarks visible when injured cells can still recover upon cessation of the injurious stimulus:
          </p>

          <div className="space-y-4 text-slate-700 leading-relaxed font-sans">
            <div className="p-4 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-serif-academic">
                Cellular Swelling (Hydropic Change)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Earliest manifestation. Occurs when cells cannot maintain ionic and fluid homeostasis due to failure of energy-dependent ion pumps. Affected organs appear pale, with increased weight and turgor. Microscopically: pale, vacuolated cytoplasm containing distended ER cisternae.
              </p>
            </div>

            <div className="p-4 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-serif-academic">
                Fatty Change (Steatosis)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Accumulation of lipid vacuoles in the cytoplasm, commonly seen in cells dependent on fat metabolism (hepatocytes, myocardial cells).
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 5. IRREVERSIBLE CELL INJURY */}
      {currentIndex === 4 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            5. Irreversible Cell Injury
          </h2>

          <p className="text-slate-700 leading-relaxed font-sans">
            Persistent or severe injury passes a "point of no return," leading invariably to cell death. Two essential biochemical criteria define irreversible injury:
          </p>

          <ol className="space-y-3 text-slate-700 leading-relaxed font-sans list-decimal list-inside">
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl font-medium">
              <strong className="text-slate-900 font-semibold">
                Inability to reverse mitochondrial dysfunction:
              </strong>{' '}
              Lack of oxidative phosphorylation and ATP generation even after removal of the injury.
            </li>
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl font-medium">
              <strong className="text-slate-900 font-semibold">
                Profound disturbances in membrane function:
              </strong>{' '}
              Massive calcium influx, loss of intracellular enzymes and proteins into extracellular space.
            </li>
          </ol>
        </section>
      )}

      {/* 6. NECROSIS */}
      {currentIndex === 5 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            6. Necrosis
          </h2>

          <p className="text-slate-700 leading-relaxed font-sans">
            Morphological expression of cell death occurring after irreversible exogenous injury. Characterized by denaturation of intracellular proteins and enzymatic digestion of the cell.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans uppercase tracking-wider">
              Nuclear changes (the hallmark of necrosis):
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
                <strong className="text-slate-900 font-semibold">Pyknosis:</strong> Nuclear shrinkage and increased basophilia; chromatin condenses into a solid, dense mass.
              </li>
              <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
                <strong className="text-slate-900 font-semibold">Karyorrhexis:</strong> Fragmentation of the pyknotic nucleus into small basophilic fragments.
              </li>
              <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
                <strong className="text-slate-900 font-semibold">Karyolysis:</strong> Basophilia of the chromatin fades as DNA is digested by endonucleases; nucleus eventually disappears.
              </li>
            </ul>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
            <p>
              <strong className="text-slate-900 font-semibold">Cytoplasmic changes: </strong>
              Increased eosinophilia (loss of RNA which binds hematoxylin, and increased binding of eosin to denatured proteins), glassy homogeneous appearance, vacuolation from digested organelles.
            </p>
            <p>
              <strong className="text-slate-900 font-semibold">Fate of necrotic tissue: </strong>
              Removed by inflammatory cells (macrophages), followed by regeneration or scar formation (fibrosis), or dystrophic calcification.
            </p>
          </div>
        </section>
      )}

      {/* 7. PATTERNS OF NECROSIS */}
      {currentIndex === 6 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            7. Patterns of Necrosis
          </h2>

          <MetabolismFigure
            src="https://lh3.googleusercontent.com/d/15oy5ar7iDQuORHzTsLupC-F7_7k-bLHW"
            alt="Morphologic patterns of necrosis"
            caption={
              <span>
                <strong>Morphologic Patterns of Necrosis.</strong> Morphologic patterns of necrosis. Coagulative necrosis preserves tissue architecture despite protein denaturation. Liquefactive necrosis results in enzymatic digestion and fluidification, especially in the CNS. Caseous necrosis combines features of coagulative and liquefactive necrosis, producing friable, granular material. Fat necrosis involves lipase-mediated destruction of adipocytes and formation of chalky calcium soaps.
              </span>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 font-sans">
                Coagulative Necrosis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Denaturation of structural proteins predominates over enzymatic digestion. Tissue architecture is preserved for days ("ghost outlines"). Typical of ischemic injury (infarction) in solid organs except the brain.
              </p>
            </div>

            <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 font-sans">
                Liquefactive Necrosis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enzymatic digestion predominates over protein denaturation. Rapidly transforms tissue into a liquid viscous mass. Typical of CNS ischemic necrosis (malacia) and bacterial/fungal abscesses.
              </p>
            </div>

            <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 font-sans">
                Caseous Necrosis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Friable, "cheese-like" gross appearance. Complete loss of tissue architecture replaced by granular acellular debris. Classic for granulomatous inflammation (e.g., <em>Mycobacterium</em>, Corynebacterium pseudotuberculosis).
              </p>
            </div>

            <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 font-sans">
                Fat Necrosis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focal areas of fat destruction resulting from pancreatic lipase release (pancreatitis) or trauma. Fatty acids combine with calcium (saponification) to form chalky-white deposits.
              </p>
            </div>

            <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 font-sans">
                Fibrinoid Necrosis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Microscopic pattern seen in immunopathic vascular reactions. Antigen-antibody complexes deposit in arterial walls alongside fibrin, producing a bright pink, homogeneous microscopic appearance.
              </p>
            </div>

            <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 font-sans">
                Gangrenous Necrosis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clinical term applied to a limb or organ that has lost blood supply and undergone necrosis. Classified into <strong>Dry Gangrene</strong> (ischemic coagulative) and <strong>Wet Gangrene</strong> (bacterial liquefactive superinfection).
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 8. APOPTOSIS */}
      {currentIndex === 7 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            8. Apoptosis
          </h2>

          <p className="text-slate-700 leading-relaxed font-sans">
            Regulated individual cell death mechanism requiring energy (ATP) activation without eliciting an inflammatory response. Operates via two main pathways:
          </p>

          <ul className="space-y-3 text-slate-700 leading-relaxed font-sans">
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Intrinsic (Mitochondrial) Pathway:
              </strong>
              Initiated by cell stress, DNA damage, or growth factor withdrawal. Cytochrome c leaks into cytosol, forming the apoptosome and activating <em>Caspase-9</em>.
            </li>
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Extrinsic (Death Receptor) Pathway:
              </strong>
              Triggered by cell surface receptors (Fas, TNFR1) binding ligands (FasL, TNF-&alpha;), activating <em>Caspase-8</em>.
            </li>
            <li className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Execution Phase:
              </strong>
              Executioner caspases (Caspase-3, -6, -7) cleave cellular targets, leading to cell fragmentation into apoptotic bodies cleared by phagocytes.
            </li>
          </ul>
        </section>
      )}

      {/* 9. COMPARISON TABLE */}
      {currentIndex === 8 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            9. Necrosis versus Apoptosis
          </h2>

          <MetabolismFigure
            src="https://lh3.googleusercontent.com/d/1JvDCZHgFfIomR68lc2HVBd2dD3E7b1fc"
            alt="Side-by-side comparison of apoptosis and necrosis"
            caption={
              <span>
                <strong>Apoptosis vs Necrosis.</strong> Comparison of apoptosis and necrosis. Apoptosis is an energy-dependent, regulated process characterized by cell shrinkage, chromatin condensation, and formation of apoptotic bodies that are phagocytosed without inflammation. Necrosis is uncontrolled cell death marked by swelling, membrane rupture, and leakage of cellular contents, eliciting inflammation.
              </span>
            }
          />

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm border-collapse font-sans">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-semibold">
                  <th className="p-3">Feature</th>
                  <th className="p-3">Necrosis</th>
                  <th className="p-3">Apoptosis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">Cell Size</td>
                  <td className="p-3">Enlarged (swelling)</td>
                  <td className="p-3">Reduced (shrinkage)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">Nucleus</td>
                  <td className="p-3">Pyknosis &rarr; Karyorrhexis &rarr; Karyolysis</td>
                  <td className="p-3">Fragmentation into nucleosome-sized fragments</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">Plasma Membrane</td>
                  <td className="p-3">Disrupted / leaky</td>
                  <td className="p-3">Intact; altered structure (phagocyte signal)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">Cellular Contents</td>
                  <td className="p-3">Enzymatic digestion; leaks out</td>
                  <td className="p-3">Intact in apoptotic bodies</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">Adjacent Inflammation</td>
                  <td className="p-3">Frequent / Prominent</td>
                  <td className="p-3">Absent</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">Physiologic / Pathologic</td>
                  <td className="p-3">Invariably pathologic</td>
                  <td className="p-3">Often physiologic; can be pathologic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 10. CELLULAR ADAPTATIONS TO STRESS */}
      {currentIndex === 9 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
            10. Cellular Adaptations to Stress
          </h2>

          <ul className="space-y-3 text-slate-700 leading-relaxed font-sans">
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Hypertrophy:
              </strong>
              Increase in cell size leading to increased organ size (e.g., cardiac hypertrophy).
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Hyperplasia:
              </strong>
              Increase in cell number in response to stimulus (e.g., hormonal epidermal hyperplasia).
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Atrophy:
              </strong>
              Decrease in cell size and organ volume due to disuse, denervation, diminished blood supply, or inadequate nutrition.
            </li>
            <li className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl">
              <strong className="text-slate-900 font-semibold block mb-0.5">
                Metaplasia:
              </strong>
              Reversible substitution of one adult cell type for another (e.g., squamous metaplasia of respiratory epithelium in Vitamin A deficiency).
            </li>
          </ul>

          <MetabolismFigure
            src="https://lh3.googleusercontent.com/d/12GAPflFrJW9yqNiWbRBpoqpn8283Opn7"
            alt="Subcellular responses to injury including autophagy cytoskeletal damage and lipid accumulation"
            caption={
              <span>
                <strong>Subcellular Responses to Injury.</strong> Subcellular responses to injury. Autophagy removes damaged organelles through lysosomal degradation. Cytoskeletal injury disrupts cellular structure and transport. Lipid accumulation (steatosis) occurs when injured cells cannot adequately metabolize or export lipids, producing visible vacuoles within the cytoplasm.
              </span>
            }
          />
        </section>
      )}

      {/* 11. PRACTICAL PATHOLOGY GALLERY */}
      {currentIndex === 10 && (
        <section className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              11. Practical Pathology Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-sans">
              Curated gross and microscopic cases demonstrating patterns of cell injury and death.
            </p>
          </div>

          <CellInjuryGallery />
        </section>
      )}

      {/* 12. TEST YOURSELF */}
      {currentIndex === 11 && (
        <section className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              12. Test Yourself
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-sans">
              Interactive knowledge check testing your understanding of cell injury mechanisms, necrosis patterns, and apoptosis pathways.
            </p>
          </div>

          <CellInjuryQuiz />
        </section>
      )}

      {/* 13. VIDEOS & FURTHER LEARNING */}
      {currentIndex === 12 && (
        <section className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              13. Videos &amp; Further Learning
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-sans">
              Curated multimedia lectures and bilingual educational resources.
            </p>
          </div>

          <CellInjuryVideos />
        </section>
      )}
    </CellInjuryLayout>
  );
};
