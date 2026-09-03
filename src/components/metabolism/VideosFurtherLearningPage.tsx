import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismVideoCard } from './MetabolismVideoCard';
import { SegmentedLessonLayout } from './SegmentedLessonLayout';
import { LessonSectionItem } from './LessonSectionNavigator';
import {
  BookOpen,
  Video,
  ExternalLink,
  Layers,
  FileText,
  CheckCircle2,
  Library,
  Globe,
  Compass,
  GraduationCap,
} from 'lucide-react';

interface VideosFurtherLearningPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const SECTIONS: LessonSectionItem[] = [
  {
    id: 'overview-guidance',
    title: 'Introduction & Learning Guidance',
    shortTitle: 'Overview & Guidance',
    shortLabel: 'Overview',
    badge: 'Module Review',
  },
  {
    id: 'cellular-swelling-video',
    title: 'Cellular Swelling Video',
    shortTitle: 'Cellular Swelling',
    shortLabel: 'Swelling',
    badge: 'Reversible Injury',
  },
  {
    id: 'fatty-change-video',
    title: 'Fatty Change Video',
    shortTitle: 'Fatty Change',
    shortLabel: 'Steatosis',
    badge: 'Lipid Accumulation',
  },
  {
    id: 'calcification-videos',
    title: 'Pathological Calcification Videos',
    shortTitle: 'Calcification (6 Videos)',
    shortLabel: 'Calcification',
    badge: '6 Videos',
  },
  {
    id: 'amyloidosis-videos',
    title: 'Amyloidosis Videos',
    shortTitle: 'Amyloidosis (4 Videos)',
    shortLabel: 'Amyloidosis',
    badge: '4 Videos',
  },
  {
    id: 'further-learning-references',
    title: 'Further Learning and References',
    shortTitle: 'Textbooks & Atlases',
    shortLabel: 'References',
    badge: 'Standard Literature',
  },
];

export const VideosFurtherLearningPage: React.FC<VideosFurtherLearningPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [completedSections, setCompletedSections] = useState<number[]>([0]);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSection = (index: number) => {
    setCurrentSectionIndex(index);
    setCompletedSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
    scrollToTop();
  };

  const handleNextSection = () => {
    if (currentSectionIndex < SECTIONS.length - 1) {
      const nextIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIndex);
      setCompletedSections((prev) => (prev.includes(nextIndex) ? prev : [...prev, nextIndex]));
      scrollToTop();
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      scrollToTop();
    }
  };

  const handleCompleteLesson = () => {
    setCompletedSections((prev) =>
      prev.includes(currentSectionIndex) ? prev : [...prev, currentSectionIndex]
    );
    onNavigate({
      type: 'topic_detail',
      topicId: 'disturbance-cell-metabolism',
    });
  };

  const fontClass =
    fontSize === 'scholar'
      ? 'font-serif-academic text-base sm:text-lg'
      : fontSize === 'large'
      ? 'text-base sm:text-lg'
      : 'text-sm sm:text-base';

  const renderCurrentSegment = () => {
    switch (SECTIONS[currentSectionIndex].id) {
      case 'overview-guidance':
        return (
          <div id="segment-overview-guidance" className="space-y-5">
            {/* Overview Intro Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full font-mono-code">
                  DICM Study Unit 13
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded-full font-mono-code">
                  12 Curated Videos Available
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
                Curated Multimedia &amp; Academic Reference Directory
              </h2>
              <p className={`text-slate-700 leading-relaxed ${fontClass}`}>
                Welcome to the final study unit of Disturbance in Cell Metabolism. This comprehensive directory brings together 12 curated microlearning video walkthroughs, authoritative veterinary pathology textbook readings, and interactive digital histopathology slide collections to reinforce and extend your diagnostic knowledge.
              </p>
            </div>

            {/* Video Curriculum Quick Matrix */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-sans">
                <Video className="w-4 h-4 text-teal-700" />
                <span>12 Curated Video Resources Across 4 Core Themes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100">
                  <div className="text-xs font-bold text-teal-900 mb-1">
                    1. Reversible Cell Injury &amp; Swelling (1 Video)
                  </div>
                  <p className="text-xs text-slate-600">
                    ATP depletion, Na⁺/K⁺ pump failure, and hydropic degeneration.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-100">
                  <div className="text-xs font-bold text-amber-900 mb-1">
                    2. Intracellular Lipid Storage (1 Video)
                  </div>
                  <p className="text-xs text-slate-600">
                    Hepatic lipidosis mechanisms, NEFA entry, and apoprotein assembly.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    3. Pathological Calcification (6 Videos)
                  </div>
                  <p className="text-xs text-slate-600">
                    Full comparative lecture, dystrophic vs. metastatic mechanisms, target sites, and veterinary examples.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <div className="text-xs font-bold text-emerald-900 mb-1">
                    4. Amyloidosis &amp; Protein Misfolding (4 Videos)
                  </div>
                  <p className="text-xs text-slate-600">
                    Complete lecture, molecular misfolding, Congo Red staining, and apple-green birefringence.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Module Review Summary Box (from Authoritative Source) */}
            <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-teal-800 rounded-xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal-800" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Final Module Review Summary
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-900 shrink-0">Step 1:</span>
                  <span>
                    Re-examine the <strong>Module Overview</strong> to ensure you can define all 4 major mechanisms of accumulation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-900 shrink-0">Step 2:</span>
                  <span>
                    Review the <strong>Differential Diagnosis Tables</strong> across sub-pages to reinforce vacuole border shapes and nuclear positions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-900 shrink-0">Step 3:</span>
                  <span>
                    Re-visit the <strong>Practical Pathology Gallery</strong> cases to test your ability to diagnose lesions without looking at labels.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-900 shrink-0">Step 4:</span>
                  <span>
                    Re-take the <strong>Test Yourself Quiz</strong> to verify your readiness for course examinations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'cellular-swelling-video':
        return (
          <div id="segment-cellular-swelling" className="space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full font-mono-code">
                Video 1 of 12
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                1. Reversible Cell Injury &amp; Swelling
              </h2>
              <p className={`text-slate-700 leading-relaxed ${fontClass}`}>
                Visual overview of ATP depletion, sodium-potassium pump failure, organelle dilation, and hydropic degeneration pathogenesis.
              </p>
            </div>

            <MetabolismVideoCard
              videoId="8F-PuSjacXo"
              title="1. Reversible Cell Injury & Swelling"
              badge="Why Do Injured Cells Swell? | Cellular Swelling Explained"
              description="Visual overview of ATP depletion, sodium-potassium pump failure, organelle dilation, and hydropic degeneration pathogenesis."
              keyPoints={[
                'ATP depletion from acute hypoxia or metabolic toxins inhibits the plasma membrane Na+/K+ ATPase pump.',
                'Intracellular sodium retention drives secondary osmotic water influx into the cytosol and cisternae.',
                'Endoplasmic reticulum cisternae distend into microvacuoles, producing classic hydropic change.',
              ]}
            />
          </div>
        );

      case 'fatty-change-video':
        return (
          <div id="segment-fatty-change" className="space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded-full font-mono-code">
                Video 2 of 12
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                2. Intracellular Lipid Storage (Steatosis)
              </h2>
              <p className={`text-slate-700 leading-relaxed ${fontClass}`}>
                Detailed walk-through of free fatty acid entry, apoprotein synthesis defects, and micro vs. macrovesicular hepatic lipidosis.
              </p>
            </div>

            <MetabolismVideoCard
              videoId="JWjg6rhiwoQ"
              title="2. Intracellular Lipid Storage (Steatosis)"
              badge="Hepatic Lipidosis (Steatosis) | How Fat Accumulates in the Liver"
              description="Detailed walk-through of free fatty acid entry, apoprotein synthesis defects, and micro vs. macrovesicular hepatic lipidosis."
              keyPoints={[
                'Excessive non-esterified fatty acid (NEFA) influx into hepatocytes exceeds mitochondrial beta-oxidation capacity.',
                'Impaired assembly or secretion of very low-density lipoproteins (VLDL) due to methionine or choline deficiencies.',
                'Triglycerides coalesce into macrovesicular droplets that displace the hepatocyte nucleus to the cell periphery.',
              ]}
            />
          </div>
        );

      case 'calcification-videos':
        return (
          <div id="segment-calcification-videos" className="space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded-full font-mono-code">
                Videos 3–8 of 12 · 6 Videos
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Pathological Calcification: Full Lesson &amp; Microlearning Series
              </h2>
              <p className={`text-slate-700 leading-relaxed ${fontClass}`}>
                Comprehensive video series contrasting dystrophic mineralization in damaged or necrotic tissues (with normal serum calcium) with metastatic mineralization in systemic mineral imbalance (hypercalcemia or hyperphosphatemia).
              </p>
            </div>

            {/* Video 3 */}
            <MetabolismVideoCard
              videoId="aUxQQDIx9GE"
              title="3. Pathological Calcification — Full Lesson"
              badge="Comprehensive Video Lecture"
              description="Comprehensive comparison of dystrophic and metastatic calcification, including causes, mechanisms, distribution, and pathological lesions."
              keyPoints={[
                'Contrasts local necrotic calcification (dystrophic) with systemic mineral imbalance (metastatic).',
                'Explains crystal initiation on membrane phospholipids and propagation into hydroxyapatite crystals.',
                'Confirmatory diagnostic stains: Von Kossa (black silver reduction) and Alizarin Red S (red chelation).',
              ]}
            />

            {/* Video 4 */}
            <MetabolismVideoCard
              videoId="D3kJmXrbgio"
              title="4. Dystrophic vs Metastatic Calcification"
              badge="60-Second Core Difference"
              description="60-second overview of the key distinction: dystrophic calcification affects damaged or necrotic tissue with normal serum calcium, while metastatic calcification affects previously normal tissue in systemic mineral imbalance."
            />

            {/* Video 5 */}
            <MetabolismVideoCard
              videoId="U1EKTnONxm4"
              title="5. Dystrophic Calcification: Where It Happens & Why"
              badge="60-Second Microlearning"
              description="Focused microlearning review of dystrophic mineralization in dead, dying, or degenerate tissues despite normal systemic calcium levels."
            />

            {/* Video 6 */}
            <MetabolismVideoCard
              videoId="dAwuHU_8G3w"
              title="6. How Dystrophic Calcification Forms"
              badge="60-Second Mechanism"
              description="60-second mechanism review showing membrane injury, calcium influx, mitochondrial accumulation, crystal formation, and localized mineral deposition."
            />

            {/* Video 7 */}
            <MetabolismVideoCard
              videoId="J8xGaVIxDqc"
              title="7. Examples of Dystrophic Calcification"
              badge="1-Minute Pathology Review"
              description="One-minute pathology review of classic examples of localized calcification in injured or necrotic tissues."
            />

            {/* Video 8 */}
            <MetabolismVideoCard
              videoId="nkTX0Zy_vLw"
              title="8. Metastatic Calcification: Where It Happens & Why"
              badge="1-Minute Pathology Review"
              description="One-minute review emphasizing systemic hypercalcemia or altered calcium-phosphorus balance and the characteristic sites of metastatic mineralization."
            />
          </div>
        );

      case 'amyloidosis-videos':
        return (
          <div id="segment-amyloidosis-videos" className="space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full font-mono-code">
                Videos 9–12 of 12 · 4 Videos
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Amyloidosis &amp; Protein Misfolding Video Suite
              </h2>
              <p className={`text-slate-700 leading-relaxed ${fontClass}`}>
                Complete lecture and focused microlearning walkthroughs exploring β-pleated sheet architecture, Congo Red staining, and diagnostic apple-green birefringence under polarized light.
              </p>
            </div>

            {/* Video 9 */}
            <MetabolismVideoCard
              videoId="839UcPB0YHA"
              title="9. Amyloidosis & Protein Misfolding"
              badge="Complete Lesson Walkthrough"
              description="Complete lesson covering β-pleated sheet protein structures, Serum Amyloid A (SAA), Congo Red staining, and apple-green birefringence."
              keyPoints={[
                'Precursor protein misfolding into antiparallel beta-pleated fibrillar arrays resistant to enzymatic degradation.',
                'Systemic reactive AA amyloidosis secondary to chronic inflammation vs. primary AL amyloidosis in plasma cell disorders.',
                'Glomerular deposition leading to proteinuria, nephrotic syndrome, and waxy, enlarged kidneys.',
              ]}
            />

            {/* Video 10 */}
            <MetabolismVideoCard
              videoId="MhWTwe0VmeI"
              title="10. What Exactly Is Amyloid?"
              badge="Pathology in 60 Seconds"
              description="60-second microlearning review of protein misfolding, fibril formation, extracellular deposition, and the structural basis of amyloid."
            />

            {/* Video 11 */}
            <MetabolismVideoCard
              videoId="-TessFhJD4g"
              title="11. Why Proteins Misfold in Amyloidosis"
              badge="Pathology in 60 Seconds"
              description="60-second microlearning review of how normally soluble proteins become unstable, misfold, and adopt aggregation-prone conformations that initiate amyloid formation."
            />

            {/* Video 12 */}
            <MetabolismVideoCard
              videoId="4tancbY-8r4"
              title="12. Why Amyloid Glows Apple-Green"
              badge="Diagnostic Microlearning"
              description="60-second diagnostic microlearning focused on Congo Red staining and the characteristic apple-green birefringence of amyloid under polarized light."
            />
          </div>
        );

      case 'further-learning-references':
        return (
          <div id="segment-further-learning" className="space-y-5">
            {/* Standard Textbooks Section */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Library className="w-5 h-5 text-teal-800" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Recommended Standard Textbooks
                </h2>
              </div>
              <p className={`text-slate-600 leading-relaxed ${fontClass}`}>
                Authoritative reference textbooks recommended for veterinary pathology coursework, board preparation, and comparative pathology study.
              </p>

              <div className="grid grid-cols-1 gap-3.5 pt-1">
                {/* Zachary */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 font-serif-academic">
                    Zachary, J. F. (2022)
                  </h3>
                  <p className="text-xs text-slate-700 mt-0.5">
                    <em>Pathologic Basis of Veterinary Disease</em> (7th ed.). Elsevier.
                  </p>
                  <div className="mt-2 text-xs text-slate-600">
                    <strong className="text-teal-900">Key Chapters: </strong>
                    Chapter 1 – Mechanisms and Morphology of Cellular Injury, Degradation, and Accumulation.
                  </div>
                </div>

                {/* Maxie */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 font-serif-academic">
                    Maxie, M. G. (2016)
                  </h3>
                  <p className="text-xs text-slate-700 mt-0.5">
                    <em>Jubb, Kennedy &amp; Palmer's Pathology of Domestic Animals</em> (6th ed.). Elsevier.
                  </p>
                  <div className="mt-2 text-xs text-slate-600">
                    <strong className="text-teal-900">Key Chapters: </strong>
                    Volume 1 – Liver and Biliary System (Hepatic Lipidosis) &amp; Urinary System (Renal Amyloidosis &amp; Mineralization).
                  </div>
                </div>

                {/* Kumar */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 font-serif-academic">
                    Kumar, V., et al. (2021)
                  </h3>
                  <p className="text-xs text-slate-700 mt-0.5">
                    <em>Robbins &amp; Cotran Pathologic Basis of Disease</em> (10th ed.). Elsevier.
                  </p>
                  <div className="mt-2 text-xs text-slate-600">
                    <strong className="text-teal-900">Key Chapters: </strong>
                    Chapter 2 – Cell Injury, Cell Death, and Adaptations (Intracellular Accumulations &amp; Calcification).
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Histopathology Atlases & Slide Repositories */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-800" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Digital Histopathology Atlases &amp; Slide Repositories
                </h2>
              </div>
              <p className={`text-slate-600 leading-relaxed ${fontClass}`}>
                High-resolution digital whole-slide scanners and curated gross pathology databases for self-guided virtual microscopy practice.
              </p>

              <div className="space-y-3">
                {/* JPC */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 border-l-4 border-l-teal-700 shadow-2xs">
                  <strong className="text-sm font-bold text-slate-900 block font-sans">
                    Joint Pathology Center (JPC) Veterinary Pathology System
                  </strong>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Access digitized whole slide images of veterinary metabolic disturbances, hepatic lipidosis, and amyloidosis cases.
                  </p>
                </div>

                {/* Noah's Arkive */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 border-l-4 border-l-teal-700 shadow-2xs">
                  <strong className="text-sm font-bold text-slate-900 block font-sans">
                    Noah's Arkive – Veterinary Pathology Database
                  </strong>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Searchable gross pathology image repository managed by the University of Georgia, featuring classical gross lesions of steatosis, anthracosis, and calcification.
                  </p>
                </div>

                {/* WebPath */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 border-l-4 border-l-teal-700 shadow-2xs">
                  <strong className="text-sm font-bold text-slate-900 block font-sans">
                    WebPath: The Internet Pathology Laboratory
                  </strong>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Educational resource providing high-resolution microscopic figures and histochemical stain comparisons for cellular accumulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Module Completion Congratulations Card */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 shadow-xs text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-emerald-950">
                Disturbance in Cell Metabolism Curriculum Completed
              </h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                You have completed all 13 study units in Disturbance in Cell Metabolism (GEN-01), including foundational mechanisms, histology atlases, self-assessments, and video lectures.
              </p>
              <button
                onClick={handleCompleteLesson}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold hover:bg-emerald-900 transition-colors shadow-xs cursor-pointer"
              >
                <span>Return to Module Landing Page</span>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <SegmentedLessonLayout
      lessonTitle="Videos and Further Learning"
      header={
        <MetabolismHeader
          title="Videos and Further Learning"
          subtitle="Curated multimedia lectures, recommended veterinary pathology textbooks, and digital histopathology atlases."
          category="General Pathology"
          lessonId="videos-further-learning"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={SECTIONS}
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
          previous={{ id: 'test-yourself', title: 'Test Yourself' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
