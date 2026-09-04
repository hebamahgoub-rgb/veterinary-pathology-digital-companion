import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
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
import { GrowthGallery } from './GrowthGallery';
import { GrowthQuiz } from './GrowthQuiz';
import { GrowthVideos } from './GrowthVideos';

interface GrowthPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

const GROWTH_SECTIONS: LessonSectionItem[] = [
  {
    id: 'gro-start-here',
    number: '01',
    title: '1. Start Here: Patterns of Altered Tissue Mass and Architecture',
    shortTitle: '1. Start Here',
    description: 'Biological equilibrium between cell proliferation, differentiation, and apoptosis in tissue homeostasis.',
  },
  {
    id: 'gro-adaptations',
    number: '02',
    title: '2. Cellular Adaptations of Growth',
    shortTitle: '2. Cellular Adaptations',
    description: 'Reversible functional adaptations to physiological stress and pathological stimuli.',
  },
  {
    id: 'gro-developmental',
    number: '03',
    title: '3. Developmental Anomalies and Disorders of Growth',
    shortTitle: '3. Developmental Anomalies',
    description: 'Agenesis, aplasia, hypoplasia, choristomas, and hamartomas in domestic animals.',
  },
  {
    id: 'gro-atrophy',
    number: '04',
    title: '4. Atrophy',
    shortTitle: '4. Atrophy',
    description: 'Reduction in cell size/number: disuse, denervation, ischemia, malnutrition, endocrine, and pressure atrophy.',
  },
  {
    id: 'gro-hypertrophy',
    number: '05',
    title: '5. Hypertrophy',
    shortTitle: '5. Hypertrophy',
    description: 'Increase in individual cell size without cell division: physiological vs pathological, concentric vs eccentric.',
  },
  {
    id: 'gro-hyperplasia',
    number: '06',
    title: '6. Hyperplasia',
    shortTitle: '6. Hyperplasia',
    description: 'Increase in cell number in mitotic tissues: hormonal, compensatory, and pathological hyperplasia.',
  },
  {
    id: 'gro-metaplasia',
    number: '07',
    title: '7. Metaplasia',
    shortTitle: '7. Metaplasia',
    description: 'Reversible phenotypic change replacing one adult cell type with another better suited to stress.',
  },
  {
    id: 'gro-dysplasia',
    number: '08',
    title: '8. Dysplasia',
    shortTitle: '8. Dysplasia',
    description: 'Disordered tissue growth and atypical architecture: developmental vs pre-neoplastic epithelial dysplasia.',
  },
  {
    id: 'gro-neoplasia-overview',
    number: '09',
    title: '9. Anaplasia and Neoplasia Overview',
    shortTitle: '9. Anaplasia & Neoplasia',
    description: 'Loss of structural differentiation, pleomorphism, abnormal mitoses, and autonomous uncontrolled growth.',
  },
  {
    id: 'gro-practical-gallery',
    number: '10',
    title: '10. Practical Pathology Gallery',
    shortTitle: '10. Gallery',
    description: 'Five diagnostic cases: feline cerebellar hypoplasia, cardiac hypertrophy, canine BPH, squamous metaplasia, corneal dermoid.',
  },
  {
    id: 'gro-test-yourself',
    number: '11',
    title: '11. Test Yourself',
    shortTitle: '11. Self-Test',
    description: '10 interactive self-assessment questions distinguishing developmental defects, adaptations, and dysplasia.',
  },
  {
    id: 'gro-further-learning',
    number: '12',
    title: '12. Further Learning',
    shortTitle: '12. Further Learning',
    description: 'Video lectures on cellular adaptations, cardiac remodeling, and authoritative veterinary pathology textbooks.',
  },
  {
    id: 'gro-reference-table',
    number: '13',
    title: '13. Comparative Reference Table',
    shortTitle: '13. Summary Matrix',
    description: 'Systematic comparison matrix of all growth alterations, reversibility, cell kinetics, and veterinary examples.',
  },
];

export const GrowthPage: React.FC<GrowthPageProps> = ({
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
      const targetIdx = GROWTH_SECTIONS.findIndex(
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
    if (currentIndex < GROWTH_SECTIONS.length - 1) {
      handleSelectSection(currentIndex + 1);
    }
  };

  const handlePreviousSection = () => {
    if (currentIndex > 0) {
      handleSelectSection(currentIndex - 1);
    }
  };

  const handleCompleteLesson = () => {
    setCompletedIndices(GROWTH_SECTIONS.map((_, i) => i));
    onNavigate({ type: 'general_pathology' });
  };

  const currentSection = GROWTH_SECTIONS[currentIndex];

  const header = (
    <LessonHeader
      title="Disorders of Growth"
      subtitle="General Pathology Module 6 — Developmental anomalies, cellular adaptations, atrophy, hypertrophy, metaplasia, and dysplasia."
      sectionCode="Section: 06"
      category="General Pathology"
      lessonId="disorders-of-growth"
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
      lessonTitle="Disorders of Growth"
      sections={GROWTH_SECTIONS}
      currentIndex={currentIndex}
      completedIndices={completedIndices}
      onSelectSection={handleSelectSection}
      onNextSection={handleNextSection}
      onPreviousSection={handlePreviousSection}
      onCompleteLesson={handleCompleteLesson}
      onBackToCurriculum={() => onNavigate({ type: 'general_pathology' })}
      fontSize={fontSize}
      containerId="segmented-growth-container"
    >
      {/* SECTION 1: START HERE */}
      {currentSection.id === 'gro-start-here' && (
        <div className="space-y-5">
          <div className="bg-teal-50 border-l-4 border-teal-800 p-5 rounded-r-2xl space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-100/80 px-2.5 py-0.5 rounded-full font-mono-code">
              Fundamental Biological Homeostasis
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              1. Start Here: Patterns of Altered Tissue Mass and Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
              In adult animals, normal organ size and structural architecture are maintained in dynamic equilibrium through a precise balance between cell proliferation (mitosis), differentiation, and programmed cell death (apoptosis). When environmental demands, workload, hormonal stimulation, or trophic signals change, cells respond with reversible adaptations of growth and differentiation. When developmental programming fails or when control over proliferation is irreversibly lost, anomalies, dysplasia, or autonomous neoplasms emerge.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-serif-academic">
              Two Fundamental Categories of Growth Abnormalities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-teal-900 font-mono-code uppercase block">
                  1. Non-Neoplastic Adaptations &amp; Anomalies
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Regulated responses to physiological or pathological stimuli (atrophy, hypertrophy, hyperplasia, metaplasia) and developmental embryonic failures (agenesis, aplasia, hypoplasia). Cease when the stimulus is removed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-teal-900 font-mono-code uppercase block">
                  2. Disordered &amp; Neoplastic Transformations
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Loss of normal maturation and architecture (dysplasia) or irreversible genetic transformations yielding autonomous, uncoordinated, non-responsive proliferation (benign and malignant neoplasia).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: CELLULAR ADAPTATIONS OF GROWTH */}
      {currentSection.id === 'gro-adaptations' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              2. Cellular Adaptations of Growth
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Adaptations are reversible functional and structural responses to physiological stresses (e.g., pregnancy, exercise) and pathological stimuli, during which new altered steady states are achieved, allowing the cell to survive and continue to function.
            </p>

            {/* Illustration 1: Adaptations comparison */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1eYyQE1bTdt18aFjSZjG8m3V1Knd2NKee"
                alt="Illustration comparing hypertrophy, hyperplasia, atrophy, metaplasia, and dysplasia"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Cellular morphological alterations: normal cell versus atrophy (reduced size), hypertrophy (increased size), hyperplasia (increased number), metaplasia (altered cell type), and dysplasia (loss of architectural uniformity).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: DEVELOPMENTAL ANOMALIES */}
      {currentSection.id === 'gro-developmental' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              3. Developmental Anomalies and Disorders of Growth
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Failures during embryogenesis and fetal organogenesis produce characteristic congenital structural defects:
            </p>

            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
              <li><strong>Agenesis:</strong> Complete absence of an organ and its embryological primordium / anlage (e.g., unilateral renal agenesis).</li>
              <li><strong>Aplasia:</strong> Absence of an organ due to failure of the embryonic anlage / rudiment to develop (e.g., segmental aplasia of the paramesonephric / uterine duct).</li>
              <li><strong>Hypoplasia:</strong> Failure of an organ to develop to its full normal adult size due to incomplete development or reduced cell division (e.g., cerebellar hypoplasia in kittens infected with panleukopenia virus).</li>
              <li><strong>Choristoma:</strong> Histologically normal, mature tissue found in an abnormal anatomical site (e.g., corneal dermoid with haired skin on the cornea).</li>
              <li><strong>Hamartoma:</strong> An excessive, focal, disorganized overgrowth of mature native tissues normally found in that organ (e.g., vascular hamartoma).</li>
            </ul>

            {/* Illustration 2: Renal agenesis vs hypoplasia */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1SgTFCHvQaGsLiV7s5t5GSS69GasPJTFW"
                alt="Illustration of renal agenesis versus hypoplasia"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Embryological spectrum: normal paired renal development, unilateral renal agenesis (complete developmental absence), and renal hypoplasia (developmental undergrowth).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: ATROPHY */}
      {currentSection.id === 'gro-atrophy' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              4. Atrophy
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Atrophy is an acquired reduction in the size and/or number of cells in an organ that had previously reached full normal adult dimensions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-teal-950 font-serif-academic">
                  Disuse Atrophy
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Skeletal muscle immobilization following fracture cast placement or joint fixation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-teal-950 font-serif-academic">
                  Denervation Atrophy (Neurogenic)
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Loss of motor nerve supply (e.g., recurrent laryngeal neuropathy causing atrophy of the cricoarytenoideus dorsalis muscle in equine laryngeal hemiplegia / &quot;roaring&quot;).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-teal-950 font-serif-academic">
                  Endocrine Atrophy
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Bilateral adrenal cortical atrophy following prolonged exogenous corticosteroid therapy or functional adrenal adenoma.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-teal-950 font-serif-academic">
                  Pressure Atrophy
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Renal parenchyma compression in hydronephrosis or cerebral cortical thinning in internal hydrocephalus.
                </p>
              </div>
            </div>

            {/* Illustration 3: Cellular mechanisms of atrophy */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1A2EENYflk73XsgP6BMR6eeLKTdKzfrRs"
                alt="Illustration of cellular mechanisms of atrophy"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Intracellular mechanisms of atrophy: ubiquitin-proteasome protein degradation and autophagic vacuole digestion of organelles.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: HYPERTROPHY */}
      {currentSection.id === 'gro-hypertrophy' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              5. Hypertrophy
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Hypertrophy is an increase in the physical size of individual cells resulting in an overall increase in the size and functional capacity of the organ. It occurs in tissues composed of permanent post-mitotic cells (cardiac myocytes, skeletal muscle fibers) that cannot divide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Concentric Cardiac Hypertrophy
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Induced by <strong>pressure overload</strong> (systemic hypertension, aortic stenosis, feline HCM). Sarcomeres are added <em>in parallel</em>, producing thick ventricular walls with a diminished chamber lumen.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Eccentric Cardiac Hypertrophy
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Induced by <strong>volume overload</strong> (mitral regurgitation, ventricular septal defect, dilated cardiomyopathy). Sarcomeres are added <em>in series</em>, resulting in chamber dilation with normal or attenuated wall thickness.
                </p>
              </div>
            </div>

            {/* Illustration 4: Concentric vs eccentric hypertrophy */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1G312qqSFJzE9NjTB_9Yy0Y7Pc3O49a6Q"
                alt="Illustration of concentric versus eccentric cardiac hypertrophy"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Pathophysiology of concentric (pressure-induced) versus eccentric (volume-induced) ventricular remodeling.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: HYPERPLASIA */}
      {currentSection.id === 'gro-hyperplasia' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              6. Hyperplasia
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Hyperplasia is an increase in the number of parenchymal cells in an organ or tissue. It can only occur in labile or stable cell populations capable of mitotic replication (e.g., epidermis, bone marrow, liver, glandular epithelium).
            </p>

            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
              <li>
                <strong>Physiological Hormonal Hyperplasia:</strong> Proliferation of mammary glandular epithelium during pregnancy and lactation; uterine smooth muscle hyperplasia under estrogenic stimulation.
              </li>
              <li>
                <strong>Physiological Compensatory Hyperplasia:</strong> Rapid hepatocyte regeneration following partial surgical hepatectomy or toxic necrosis.
              </li>
              <li>
                <strong>Pathological Hyperplasia:</strong> Caused by excessive hormonal stimulation or persistent growth factor activity:
                <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                  <li><em>Benign Prostatic Hyperplasia (BPH):</em> Driven by dihydrotestosterone (DHT) in older intact male dogs.</li>
                  <li><em>Cystic Endometrial Hyperplasia (CEH):</em> Progesterone stimulation following estrogen priming in intact female dogs, predisposing to pyometra.</li>
                  <li><em>Thyroid Hyperplasia (Goiter):</em> Iodine deficiency or goitrogens producing low T3/T4, stimulating persistent pituitary TSH release.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* SECTION 7: METAPLASIA */}
      {currentSection.id === 'gro-metaplasia' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              7. Metaplasia
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Metaplasia is a reversible adaptive change in which one adult differentiated cell type (epithelial or mesenchymal) is replaced by another adult differentiated cell type better equipped to withstand environmental stress.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-900 font-mono-code">
                Classic Metaplasia Patterns in Animals
              </h3>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-5 font-sans leading-relaxed">
                <li>
                  <strong>Respiratory Squamous Metaplasia:</strong> Delicate pseudostratified ciliated columnar respiratory epithelium is replaced by rugged stratified squamous epithelium in response to chronic smoke inhalation or mechanical irritation. While more resistant to trauma, the protective mucociliary escalator is lost.
                </li>
                <li>
                  <strong>Hypovitaminosis A Squamous Metaplasia:</strong> Vitamin A deficiency causes glandular secretory epithelium in salivary ducts and esophageal glands of birds and reptiles to transform into stratified squamous keratinized epithelium with keratin plugs.
                </li>
                <li>
                  <strong>Osseous / Cartilaginous Metaplasia:</strong> Fibroblasts in chronically traumatized soft tissues differentiate into chondroblasts or osteoblasts, depositing ectopic bone or cartilage (e.g., canine mixed mammary tumors or dura mater ossification).
                </li>
              </ul>
            </div>

            {/* Illustration 5: Squamous Metaplasia */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1BhmfOQbPULXTZ9p9qWLGhcqQ2tHlZVNx"
                alt="Illustration of squamous metaplasia in respiratory epithelium"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Pseudostratified ciliated columnar respiratory epithelium transdifferentiating into stratified squamous epithelium under chronic toxic insult.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 8: DYSPLASIA */}
      {currentSection.id === 'gro-dysplasia' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              8. Dysplasia
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              The term <em>dysplasia</em> is used in two distinct pathology contexts:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  1. Developmental Dysplasia
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Disordered structural development of an organ or tissue during embryogenesis or growth. <em>Examples: Canine hip dysplasia (coxofemoral joint incongruity and secondary osteoarthritis), renal dysplasia (persistence of fetal glomeruli and metanephric ducts).</em>
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-rose-950 font-serif-academic">
                  2. Epithelial (Pre-Neoplastic) Dysplasia
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Disordered cellular growth and maturation, characterized by cellular pleomorphism, nuclear hyperchromasia, loss of polarity, and increased atypical mitoses without invasion through the basement membrane (e.g., actinic keratosis on non-pigmented skin of white cats).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 9: ANAPLASIA AND NEOPLASIA OVERVIEW */}
      {currentSection.id === 'gro-neoplasia-overview' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              9. Anaplasia and Neoplasia Overview
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              A neoplasm is an abnormal mass of tissue, the growth of which exceeds and is uncoordinated with that of normal tissues and persists in the same excessive manner after cessation of the stimuli which evoked the change (Sir Rupert Willis).
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-950 font-mono-code">
                Anaplasia: The Morphological Hallmark of Malignancy
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Anaplasia literally means &quot;backward formation&quot; and indicates complete loss of structural and functional differentiation:
              </p>
              <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5 font-sans">
                <li><strong>Pleomorphism:</strong> Marked variation in cellular size and shape (anisocytosis) and nuclear size/shape (anisokaryosis).</li>
                <li><strong>Abnormal nuclear morphology:</strong> Extremely high nuclear-to-cytoplasmic (N:C) ratio (1:1 instead of 1:4 to 1:6), hyperchromatism, and prominent multiple nucleoli.</li>
                <li><strong>Atypical mitoses:</strong> Tripolar, quadripolar, or bizarre mitotic figures.</li>
                <li><strong>Loss of polarity:</strong> Disorganized sheets of cells with complete loss of normal glandular or stratified architecture.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 10: PRACTICAL PATHOLOGY GALLERY */}
      {currentSection.id === 'gro-practical-gallery' && <GrowthGallery />}

      {/* SECTION 11: TEST YOURSELF */}
      {currentSection.id === 'gro-test-yourself' && <GrowthQuiz />}

      {/* SECTION 12: FURTHER LEARNING */}
      {currentSection.id === 'gro-further-learning' && <GrowthVideos />}

      {/* SECTION 13: COMPARATIVE REFERENCE TABLE */}
      {currentSection.id === 'gro-reference-table' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              13. Comparative Reference Table: Cellular Alterations of Growth
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Systematic summary contrasting mechanism, reversibility, cell types involved, and representative clinical veterinary entities:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-teal-950 font-bold font-mono-code">
                    <th className="p-2.5 border border-slate-200">Process</th>
                    <th className="p-2.5 border border-slate-200">Primary Mechanism</th>
                    <th className="p-2.5 border border-slate-200">Reversibility</th>
                    <th className="p-2.5 border border-slate-200">Classic Veterinary Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-sans">
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Hypoplasia</td>
                    <td className="p-2.5">Developmental failure to reach adult size</td>
                    <td className="p-2.5">Irreversible (congenital)</td>
                    <td className="p-2.5">Feline panleukopenia cerebellar hypoplasia</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Atrophy</td>
                    <td className="p-2.5">Reduction in cell size / number after normal development</td>
                    <td className="p-2.5">Often reversible if stimulus removed</td>
                    <td className="p-2.5">Equine laryngeal hemiplegia (roaring)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Hypertrophy</td>
                    <td className="p-2.5">Increase in cell size without cell division</td>
                    <td className="p-2.5">Reversible if workload normalizes</td>
                    <td className="p-2.5">Feline hypertrophic cardiomyopathy (HCM)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Hyperplasia</td>
                    <td className="p-2.5">Increase in cell number in mitotic tissues</td>
                    <td className="p-2.5">Reversible upon withdrawal of hormones</td>
                    <td className="p-2.5">Canine benign prostatic hyperplasia (BPH)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Metaplasia</td>
                    <td className="p-2.5">Replacement of one adult cell type with another</td>
                    <td className="p-2.5">Reversible upon restoration of environment</td>
                    <td className="p-2.5">Avian esophageal hypovitaminosis A metaplasia</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Dysplasia</td>
                    <td className="p-2.5">Disordered cellular growth and maturation</td>
                    <td className="p-2.5">May revert or progress to neoplasia</td>
                    <td className="p-2.5">Canine solar elastosis / actinic keratosis</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Choristoma</td>
                    <td className="p-2.5">Normal mature tissue in abnormal anatomical location</td>
                    <td className="p-2.5">Permanent developmental heterotopia</td>
                    <td className="p-2.5">Bovine corneal dermoid</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50">Anaplasia</td>
                    <td className="p-2.5">Complete loss of cellular differentiation</td>
                    <td className="p-2.5">Irreversible (malignant neoplasia)</td>
                    <td className="p-2.5">Canine osteosarcoma, feline fibrosarcoma</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </SegmentedLessonLayout>
  );
};
