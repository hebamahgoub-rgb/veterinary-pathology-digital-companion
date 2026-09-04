import React, { useState, useEffect } from 'react';
import {
  Heart,
  Droplets,
  Activity,
  AlertTriangle,
  HelpCircle,
  Video as VideoIcon,
  Layers,
  Info,
} from 'lucide-react';
import { ScreenView } from '../../types';
import { LessonHeader } from '../common/LessonHeader';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from '../common/SegmentedLessonLayout';
import { CirculatoryGallery } from './CirculatoryGallery';
import { CirculatoryQuiz } from './CirculatoryQuiz';
import { CirculatoryVideos } from './CirculatoryVideos';

interface CirculatoryPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

const CIRCULATORY_SECTIONS: LessonSectionItem[] = [
  {
    id: 'cir-start-here',
    number: '01',
    title: '1. Start Here: Maintaining Vascular Flow and Tissue Perfusion',
    shortTitle: '1. Start Here',
    description: 'Hemodynamic homeostasis, Starling forces equilibrium, and consequences of circulatory failure.',
  },
  {
    id: 'cir-hyperemia-congestion',
    number: '02',
    title: '2. Hyperemia and Congestion',
    shortTitle: '2. Hyperemia & Congestion',
    description: 'Active arteriolar dilation vs passive venous engorgement, acute vs chronic hepatic/pulmonary congestion.',
  },
  {
    id: 'cir-edema',
    number: '03',
    title: '3. Edema',
    shortTitle: '3. Edema',
    description: 'Pathophysiologic mechanisms of excess interstitial fluid: hydrostatic, oncotic, vascular permeability, lymphatic.',
  },
  {
    id: 'cir-hemorrhage',
    number: '04',
    title: '4. Hemorrhage',
    shortTitle: '4. Hemorrhage',
    description: 'Hemorrhage per rhexis vs per diapedesis, size classifications (petechiae, purpura, ecchymoses, hematoma).',
  },
  {
    id: 'cir-hemostasis',
    number: '05',
    title: '5. Hemostasis',
    shortTitle: '5. Hemostasis',
    description: 'Physiologic balance: primary hemostasis (platelet plug), secondary hemostasis (coagulation cascade), fibrinolysis.',
  },
  {
    id: 'cir-thrombosis',
    number: '06',
    title: '6. Thrombosis',
    shortTitle: '6. Thrombosis',
    description: "Virchow's triad (endothelial injury, abnormal flow, hypercoagulability), arterial vs venous thrombi, outcomes.",
  },
  {
    id: 'cir-embolism',
    number: '07',
    title: '7. Embolism',
    shortTitle: '7. Embolism',
    description: 'Intravascular transport of detached physical masses: thromboemboli, fat, gas, bacterial, neoplastic emboli.',
  },
  {
    id: 'cir-ischemia',
    number: '08',
    title: '8. Ischemia',
    shortTitle: '8. Ischemia',
    description: 'Inadequate arterial blood supply relative to metabolic demand, cellular hypoxia, reperfusion injury.',
  },
  {
    id: 'cir-infarction',
    number: '09',
    title: '9. Infarction',
    shortTitle: '9. Infarction',
    description: 'Ischemic coagulative necrosis: pale (anemic/white) vs red (hemorrhagic) infarcts, organ susceptibility.',
  },
  {
    id: 'cir-shock',
    number: '10',
    title: '10. Shock',
    shortTitle: '10. Shock',
    description: 'Systemic hypoperfusion: cardiogenic, hypovolemic, distributive (septic, anaphylactic, neurogenic), clinical stages.',
  },
  {
    id: 'cir-dic',
    number: '11',
    title: '11. Disseminated Intravascular Coagulation (DIC)',
    shortTitle: '11. DIC',
    description: 'Systemic microthrombosis coupled with consumptive coagulopathy and diffuse hemorrhagic diathesis.',
  },
  {
    id: 'cir-practical-gallery',
    number: '12',
    title: '12. Practical Pathology Gallery',
    shortTitle: '12. Gallery',
    description: 'Seven diagnostic cases: nutmeg liver, pulmonary edema, petechial kidney, atrial thrombus, saddle embolus, renal infarct, shock lung.',
  },
  {
    id: 'cir-test-yourself',
    number: '13',
    title: '13. Test Yourself',
    shortTitle: '13. Self-Test',
    description: '10 interactive self-assessment questions with detailed feedback on hemodynamics and pathology.',
  },
  {
    id: 'cir-videos-learning',
    number: '14',
    title: '14. Videos & Further Learning',
    shortTitle: '14. Videos & References',
    description: 'Clinical echocardiography video, Virchow triad lectures, and authoritative veterinary textbooks.',
  },
];

export const CirculatoryPage: React.FC<CirculatoryPageProps> = ({
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
      const targetIdx = CIRCULATORY_SECTIONS.findIndex(
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
    if (currentIndex < CIRCULATORY_SECTIONS.length - 1) {
      handleSelectSection(currentIndex + 1);
    }
  };

  const handlePreviousSection = () => {
    if (currentIndex > 0) {
      handleSelectSection(currentIndex - 1);
    }
  };

  const handleCompleteLesson = () => {
    setCompletedIndices(CIRCULATORY_SECTIONS.map((_, i) => i));
    onNavigate({ type: 'general_pathology' });
  };

  const currentSection = CIRCULATORY_SECTIONS[currentIndex];

  const header = (
    <LessonHeader
      title="Circulatory Disturbances"
      subtitle="General Pathology Module 4 — Hemodynamic principles, fluid shifts, thrombosis, ischemia, and shock."
      sectionCode="Section: 04"
      category="General Pathology"
      lessonId="circulatory-disturbances"
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
      lessonTitle="Circulatory Disturbances"
      sections={CIRCULATORY_SECTIONS}
      currentIndex={currentIndex}
      completedIndices={completedIndices}
      onSelectSection={handleSelectSection}
      onNextSection={handleNextSection}
      onPreviousSection={handlePreviousSection}
      onCompleteLesson={handleCompleteLesson}
      onBackToCurriculum={() => onNavigate({ type: 'general_pathology' })}
      fontSize={fontSize}
      containerId="segmented-circulatory-container"
    >
      {/* SECTION 1: START HERE */}
      {currentSection.id === 'cir-start-here' && (
        <div className="space-y-5">
          <div className="bg-indigo-50 border-l-4 border-indigo-800 p-5 rounded-r-2xl space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-100/80 px-2.5 py-0.5 rounded-full font-mono-code">
              Fundamental Hemodynamic Principle
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              1. Start Here: Maintaining Vascular Flow and Tissue Perfusion
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
              Normal cellular survival depends upon an uninterrupted supply of oxygenated blood, nutrients, and the continuous removal of metabolic wastes. This equilibrium requires intact, patent vascular conduits, normal cardiac pumping action, finely balanced hydrostatic and oncotic pressures, and a responsive hemostatic system capable of preventing hemorrhage while maintaining fluid blood within the vascular tree.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-serif-academic">
              Consequences of Circulatory Derangements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-indigo-900 font-mono-code uppercase block">
                  Fluid Distribution Disorders
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Imbalances between vascular hydrostatic pressure, interstitial oncotic pressure, and lymphatic drainage produce <strong>hyperemia</strong>, <strong>passive congestion</strong>, and <strong>edema</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-indigo-900 font-mono-code uppercase block">
                  Intravascular Patency &amp; Perfusion Failure
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Loss of endothelial integrity or procoagulant activation produces <strong>hemorrhage</strong>, <strong>thrombosis</strong>, <strong>embolism</strong>, <strong>infarction</strong>, and terminal systemic <strong>shock</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: HYPEREMIA AND CONGESTION */}
      {currentSection.id === 'cir-hyperemia-congestion' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              2. Hyperemia and Congestion
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Both hyperemia and congestion denote an increased volume of blood within a specific tissue or organ, but they arise from fundamentally distinct physiological and pathological mechanisms:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-2">
                <h4 className="text-sm font-bold text-rose-950 font-serif-academic">
                  Active Hyperemia (Arteriolar Inflow)
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  An <em>active</em> physiological or pathological process resulting from arteriolar dilation, leading to increased blood inflow into microvascular beds. Tissues become bright red (erythematous) and warm.
                </p>
                <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1 font-sans">
                  <li><strong>Physiologic:</strong> Skeletal muscle during vigorous exercise; cutaneous flushing for heat dissipation; GI tract during digestion.</li>
                  <li><strong>Pathologic:</strong> Acute inflammation triggered by histamine, nitric oxide, and neurogenic reflexes.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/80 space-y-2">
                <h4 className="text-sm font-bold text-indigo-950 font-serif-academic">
                  Passive Congestion (Venous Outflow Impairment)
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  A <em>passive</em> pathological process resulting from impaired venous outflow from a tissue. Blood pools in capillaries and venules, deoxygenates, and produces a dark blue-red (cyanotic) discoloration.
                </p>
                <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1 font-sans">
                  <li><strong>Local Congestion:</strong> Venous obstruction by a thrombus, neoplastic compression, or organ volvulus / torsion.</li>
                  <li><strong>Generalized Congestion:</strong> Congestive heart failure (right-sided &rarr; systemic and hepatic congestion; left-sided &rarr; pulmonary congestion).</li>
                </ul>
              </div>
            </div>

            {/* Illustration: Hyperemia vs Congestion */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1hsYFrr9PQXsRfBzrlgAc7yWXB48XXETy"
                alt="Illustration comparing active hyperemia with passive congestion"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Active hyperemia (increased arteriolar inflow into open capillary beds) versus passive congestion (decreased venous outflow leading to capillary distension and cyanosis).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: EDEMA */}
      {currentSection.id === 'cir-edema' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              3. Edema
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Edema is the abnormal accumulation of fluid in the interstitial tissue spaces or pre-existing body cavities (hydrothorax / pleural effusion, hydropericardium / pericardial effusion, ascites / hydroperitoneum; generalized severe subcutaneous edema is termed <strong>anasarca</strong>).
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 font-mono-code">
                Four Major Pathophysiological Mechanisms of Edema
              </h3>
              <ol className="text-xs text-slate-700 space-y-2 list-decimal pl-5 font-sans leading-relaxed">
                <li>
                  <strong>Increased Intravascular Hydrostatic Pressure:</strong> Excessive pressure pushing fluid out of vessels. Caused by impaired venous return (congestive heart failure, venous thrombosis, portal hypertension).
                </li>
                <li>
                  <strong>Decreased Plasma Colloid Osmotic (Oncotic) Pressure:</strong> Insufficient albumin to retain fluid in vessels. Occurs when serum albumin drops below 1.5 g/dL due to decreased synthesis (liver cirrhosis, starvation) or accelerated loss (nephrotic syndrome, protein-losing enteropathy, severe burns).
                </li>
                <li>
                  <strong>Lymphatic Obstruction (Lymphedema):</strong> Impaired removal of interstitial fluid and protein. Caused by neoplastic infiltration of lymph nodes, surgical lymphadenectomy, trauma, or filariasis.
                </li>
                <li>
                  <strong>Increased Microvascular Permeability:</strong> Direct damage to endothelial cells or widening of intercellular junctions in acute inflammation, allergic reactions, burns, or septic toxins.
                </li>
              </ol>
            </div>

            {/* Illustration: Mechanisms of Edema */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1CGpYjfQvhe80E_RTqxTbUScw71AJxluv"
                alt="Illustration of the major mechanisms of edema formation"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Derangements in Starling forces governing transcapillary fluid exchange and interstitial accumulation.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: HEMORRHAGE */}
      {currentSection.id === 'cir-hemorrhage' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              4. Hemorrhage
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Hemorrhage denotes the escape of blood from the cardiovascular system into the extravascular tissue spaces, body cavities, or external environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <strong className="text-xs text-slate-900 font-serif-academic">Hemorrhage per rhexis</strong>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Extravasation resulting from a physical break or rupture of the vascular wall (trauma, aneurysm rupture, necrotizing vasculitis).
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <strong className="text-xs text-slate-900 font-serif-academic">Hemorrhage per diapedesis</strong>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Extravasation of red blood cells through intact endothelial junctions under conditions of severe congestion, endothelial hypoxia, or toxic damage.
                </p>
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-900 font-serif-academic pt-2">
              Morphological Size Classification of Hemorrhages
            </h3>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-5 font-sans leading-relaxed">
              <li><strong>Petechiae:</strong> Minute pinpoint hemorrhages (1 to 2 mm in diameter) into skin, mucous membranes, or serosal surfaces. Typically associated with thrombocytopenia or platelet dysfunction.</li>
              <li><strong>Purpura:</strong> Hemorrhages measuring 3 mm to 1 cm in diameter, commonly seen in vasculitis and coagulation factor deficits.</li>
              <li><strong>Ecchymoses:</strong> Larger macular hemorrhages (1 to 2 cm in diameter), commonly referred to as bruises or subcutaneous contusions.</li>
              <li><strong>Suffusion:</strong> Confluent, broad, flat areas of hemorrhage resembling paint brushed onto a mucosal or serosal surface.</li>
              <li><strong>Hematoma:</strong> A three-dimensional mass or accumulation of blood within a tissue (e.g., auricular hematoma in dogs).</li>
            </ul>

            {/* Illustration: Morphological types of hemorrhage */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1hZ-TYF4roOPby45kGRDgTiVRMMjHMR_R"
                alt="Illustration of morphological types of hemorrhage"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Size classification and spatial patterns of hemorrhage across epithelial and serosal surfaces.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: HEMOSTASIS */}
      {currentSection.id === 'cir-hemostasis' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              5. Hemostasis
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Normal hemostasis is a tightly regulated physiological process that maintains blood in a fluid state in normal vessels while rapidly forming a localized hemostatic plug at vascular injury sites.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-indigo-900 font-mono-code">
                  1. Arteriolar Vasoconstriction
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Occurs immediately upon injury via neurogenic reflex mechanisms and local secretion of <em>endothelin</em>, transiently retarding blood loss.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-indigo-900 font-mono-code">
                  2. Primary Hemostasis (Platelet Plug Formation)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Subendothelial von Willebrand factor (vWF) binds platelet GpIb receptors (adhesion). Platelets activate, secrete granules (ADP, TxA2), and express GpIIb/IIIa receptors that cross-link with fibrinogen (aggregation), creating the primary hemostatic plug.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-indigo-900 font-mono-code">
                  3. Secondary Hemostasis (Fibrin Meshwork Deposition)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Tissue factor (Factor III / thromboplastin) is exposed, activating Factor VII to initiate the extrinsic coagulation cascade. Thrombin (Factor IIa) converts soluble fibrinogen into insoluble fibrin monomers that polymerize and are cross-linked by Factor XIIIa.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-indigo-900 font-mono-code">
                  4. Antithrombotic Counter-Regulation &amp; Fibrinolysis
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Tissue plasminogen activator (t-PA) converts plasminogen to plasmin, cleaving fibrin into fibrin degradation products (FDPs and D-dimers) to confine the clot strictly to the site of injury.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: THROMBOSIS */}
      {currentSection.id === 'cir-thrombosis' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              6. Thrombosis
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Thrombosis is the inappropriate, pathological formation of a solid or semi-solid aggregate of blood elements (platelets, fibrin, entrapped erythrocytes and leukocytes) within the lumen of an intact or injured blood vessel or cardiac chamber during life.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 font-mono-code">
                Virchow&apos;s Triad (The 3 Primary Drivers)
              </h3>
              <ol className="text-xs text-slate-700 space-y-1.5 list-decimal pl-5 font-sans leading-relaxed">
                <li><strong>Endothelial Injury:</strong> The single most critical factor. Loss of endothelial integrity exposes thrombogenic subendothelial collagen and vWF.</li>
                <li><strong>Abnormal Blood Flow (Stasis or Turbulence):</strong> Stasis prevents dilution of activated clotting factors and brings platelets into contact with endothelium; turbulence causes endothelial wear.</li>
                <li><strong>Hypercoagulability (Thrombophilia):</strong> Alteration of coagulation pathways that predisposes to thrombosis (loss of antithrombin III in nephrotic syndrome, hyperadrenocorticism, septicemia).</li>
              </ol>
            </div>

            {/* Illustration: Thrombus formation and outcomes */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1Ta3eAX6E6GRMW1_DOL93orRB9w7ZGKNf"
                alt="Illustration of thrombus formation and possible outcomes"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Possible fates of a thrombus: propagation, dissolution (fibrinolysis), organization and recanalization, or detachment causing thromboembolism.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 7: EMBOLISM */}
      {currentSection.id === 'cir-embolism' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              7. Embolism
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              An embolus is an intravascular physical mass (solid, liquid, or gas) carried by blood to a site distant from its origin, where it lodges and obstructs vascular flow.
            </p>

            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
              <li><strong>Thromboembolism:</strong> Dislodged fragment of an antemortem thrombus (&gt; 95% of clinical emboli).</li>
              <li><strong>Fat Embolism:</strong> Bone marrow fat released into venous sinusoids following long-bone fractures.</li>
              <li><strong>Gas Embolism:</strong> Air entrained through ruptured jugular veins or during surgical intervention.</li>
              <li><strong>Bacterial / Septic Emboli:</strong> Fragments of infected cardiac valvular vegetations (endocarditis) dislodging into downstream capillary beds.</li>
              <li><strong>Tumor Emboli:</strong> Malignant cells intravasating and seeding distant organs (metastasis).</li>
              <li><strong>Fibrocartilaginous Embolism (FCE):</strong> Degenerated intervertebral disc nucleus pulposus material entering spinal cord vasculature, causing acute spinal cord infarction in dogs.</li>
            </ul>

            {/* Illustration: Types of Emboli */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1WX8c0gWHDarpCJICaPNlxfRIw719avCj"
                alt="Illustration showing types of emboli and their consequences"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Pathophysiologic types of emboli and downstream vascular occlusion patterns.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 8: ISCHEMIA */}
      {currentSection.id === 'cir-ischemia' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              8. Ischemia
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Ischemia is a reduction or interruption in arterial blood flow resulting in inadequate tissue perfusion relative to metabolic demand. Unlike simple hypoxemia (decreased oxygen in arterial blood), ischemia compromises not only oxygen delivery but also the delivery of glucose and nutrients, while simultaneously blocking the washout of toxic lactic acid and metabolic byproducts.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 font-mono-code">
                Tissue Vulnerability to Ischemia
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Neurons undergo irreversible ischemic necrosis within 3 to 5 minutes of circulatory arrest. Myocardial cells tolerate ischemia for 20 to 30 minutes before irreversible injury occurs. Renal proximal tubular epithelium is highly vulnerable (hypoxic acute tubular injury), whereas fibroblasts, chondrocytes, and epidermis can withstand several hours of ischemia.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 9: INFARCTION */}
      {currentSection.id === 'cir-infarction' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              9. Infarction
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              An infarct is a localized area of ischemic coagulative necrosis (or liquefactive necrosis in the central nervous system) caused by occlusion of either the arterial supply or the venous drainage in a particular tissue.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-slate-900 font-serif-academic">
                  Pale (White / Anemic) Infarcts
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Occur with arterial occlusions in solid visceral organs with end-arterial circulations (kidney, spleen, heart). Coagulated tissue prevents blood from leaking into the necrotic zone, rendering the wedge-shaped lesion pale white-tan with a hyperemic border.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-rose-950 font-serif-academic">
                  Red (Hemorrhagic) Infarcts
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Occur with venous occlusions (torsion/volvulus of intestine, ovarian/testicular torsion), in loose spongy tissues (lung), in tissues with dual blood supplies (liver, lung), or upon reperfusion of a previously ischemic site.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 10: SHOCK */}
      {currentSection.id === 'cir-shock' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              10. Shock (Cardiovascular Collapse)
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Shock is a state of profound, systemic hypoperfusion characterized by reduced effective circulating blood volume, impaired cellular energy production, and widespread tissue hypoxia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-indigo-950 font-serif-academic">
                  Cardiogenic Shock
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Failure of the myocardial pump (myocardial infarction, dilated cardiomyopathy, severe arrhythmias, cardiac tamponade).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-indigo-950 font-serif-academic">
                  Hypovolemic Shock
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Loss of circulating intravascular fluid volume (massive hemorrhage, severe dehydration, extensive burns).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-rose-950 font-serif-academic">
                  Septic Shock (Distributive)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Endotoxins / exotoxins trigger massive systemic cytokine release (TNF, IL-1), widespread vasodilation, and microvascular pooling.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-indigo-950 font-serif-academic">
                  Anaphylactic &amp; Neurogenic Shock
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  IgE-mediated systemic histamine degranulation (anaphylaxis) or loss of vascular sympathetic tone (severe spinal trauma).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 11: DIC */}
      {currentSection.id === 'cir-dic' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              11. Disseminated Intravascular Coagulation (DIC)
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              DIC (consumptive coagulopathy) is not a primary disease but a life-threatening thrombohemorrhagic disorder characterized by widespread microvascular activation of the coagulation cascade.
            </p>

            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-950 font-mono-code">
                The Paradoxical Pathogenesis of DIC
              </h3>
              <p className="text-xs text-rose-950 leading-relaxed font-sans">
                Widespread endothelial damage or massive release of tissue factor into the circulation initiates systemic microvascular fibrin thrombus deposition throughout kidneys, lungs, and brain. This widespread thrombosis rapidly <strong>consumes</strong> available platelets, fibrinogen, and coagulation factors. Concurrently, secondary fibrinolysis is vigorously activated. The patient paradoxically develops severe, uncontrollable hemorrhage (petechiae, ecchymoses, hematuria, bleeding from puncture sites).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 12: PRACTICAL PATHOLOGY GALLERY */}
      {currentSection.id === 'cir-practical-gallery' && <CirculatoryGallery />}

      {/* SECTION 13: TEST YOURSELF */}
      {currentSection.id === 'cir-test-yourself' && <CirculatoryQuiz />}

      {/* SECTION 14: VIDEOS & FURTHER LEARNING */}
      {currentSection.id === 'cir-videos-learning' && <CirculatoryVideos />}
    </SegmentedLessonLayout>
  );
};
