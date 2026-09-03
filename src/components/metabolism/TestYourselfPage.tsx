import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from './SegmentedLessonLayout';
import { RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

interface TestYourselfPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

interface Question {
  question: string;
  options: string[];
  correct: number;
  exp: string;
}

const QUIZ_DATA: Question[] = [
  {
    question: '1. What is the primary biochemical mechanism driving early cellular swelling (hydropic change)?',
    options: [
      'A) Activation of cell membrane sodium channels leading to enzymatic lysis',
      'B) ATP depletion causing failure of the Na+/K+-ATPase membrane pump',
      'C) Excessive accumulation of neutral triglycerides within the cytoplasm',
      'D) Lysosomal enzyme failure causing indigestible substrate retention',
    ],
    correct: 1,
    exp: 'Cellular swelling is driven by ATP depletion (from hypoxia or toxicity), causing failure of the energy-dependent Na+/K+-ATPase pump. Sodium and water flood into the cytoplasm, expanding the cell.',
  },
  {
    question: '2. Which histological feature on routine H&E staining helps distinguish macrovesicular fatty change from glycogen accumulation?',
    options: [
      'A) Fatty change produces feathery cytoplasmic spaces; glycogen produces sharp vacuoles',
      'B) Macrovesicular fatty change displaces the nucleus to the cell periphery; glycogen retains a central nucleus',
      'C) Glycogen accumulation stains intensely basophilic; fatty change stains eosinophilic',
      'D) Fatty change is strictly extracellular; glycogen accumulation is strictly nuclear',
    ],
    correct: 1,
    exp: 'Macrovesicular fatty change forms a large, single lipid vacuole that pushes the nucleus to the cell periphery. Glycogen storage forms feathery clear spaces while keeping the nucleus central.',
  },
  {
    question: '3. Why must Oil Red O staining for lipid demonstration be performed on frozen unfixed tissue sections?',
    options: [
      'A) Formalin fixatives chemically degrade triglycerides into free fatty acids',
      'B) Organic solvents used in routine paraffin embedding dissolve and extract neutral lipids',
      'C) Paraffin embedding causes water influx, converting lipid into hydropic vacuoles',
      'D) Frozen tissue prevents autolytic breakdown of cell nuclei',
    ],
    correct: 1,
    exp: 'Organic solvents (alcohol, xylene) used during routine paraffin processing dissolve neutral lipids. Frozen sections bypass these solvents, preserving lipid for Oil Red O staining.',
  },
  {
    question: '4. A dog undergoing long-term prednisone therapy develops marked hepatomegaly. Biopsy confirms steroid hepatopathy. What special stain combination proves glycogen storage?',
    options: [
      "A) Perls' Prussian Blue positivity that is negative on H&E",
      'B) Congo Red orange-red staining exhibiting apple-green birefringence',
      'C) Periodic Acid-Schiff (PAS) positivity that is eliminated by diastase pre-treatment (PAS-D)',
      'D) Von Kossa black staining that resists hydrogen peroxide bleaching',
    ],
    correct: 2,
    exp: 'Glycogen is PAS-positive (magenta). Pre-treatment with diastase enzyme digests glycogen away; loss of staining on the PAS-D slide confirms glycogen.',
  },
  {
    question: '5. Which statement accurately describes "hyaline change"?',
    options: [
      'A) It is a specific chemical compound formed during carbohydrate degradation',
      'B) It is a descriptive morphological term for homogeneous, glassy, bright pink material on H&E',
      'C) It refers exclusively to extracellular amyloid deposits in renal glomeruli',
      'D) It is a pathognomonic diagnostic feature of acute lipid peroxidative injury',
    ],
    correct: 1,
    exp: "'Hyaline' is purely a physical/optical descriptor for smooth, homogeneous, glassy, bright pink material on H&E. It is not a single chemical substance.",
  },
  {
    question: '6. Dystrophic calcification differs from metastatic calcification in that dystrophic calcification:',
    options: [
      'A) Occurs in normal viable tissues secondary to systemic hypercalcemia',
      'B) Occurs locally in dead or necrotic tissues despite normal serum calcium levels',
      'C) Affects only the gastric mucosa, lungs, and renal tubular membranes',
      'D) Is caused exclusively by Vitamin D rodenticide toxicity or calcinogenic plants',
    ],
    correct: 1,
    exp: 'Dystrophic calcification occurs locally in dead or necrotic tissues despite normal systemic calcium levels. Metastatic calcification requires systemic hypercalcemia.',
  },
  {
    question: '7. What color does pathological calcium mineral deposit appear on standard H&E-stained tissue sections?',
    options: [
      'A) Bright golden-yellow',
      'B) Deeply basophilic (dark purple to blue-black)',
      'C) Pale green with birefringence',
      'D) Uniform light tan to clear',
    ],
    correct: 1,
    exp: 'Calcium mineral deposits attract hematoxylin stain and appear deeply basophilic (dark purple to blue-black) on standard H&E sections.',
  },
  {
    question: "8. Perls' Prussian Blue histochemical reaction reacts with ferric iron to confirm the presence of which endogenous pigment?",
    options: [
      'A) Melanin',
      'B) Lipofuscin',
      'C) Hemosiderin',
      'D) Bilirubin',
    ],
    correct: 2,
    exp: "Perls' Prussian Blue reaction detects ferric iron in hemosiderin, producing a vivid bright blue reaction product.",
  },
  {
    question: '9. In domestic animals, reactive systemic AA amyloidosis develops secondary to:',
    options: [
      'A) Chronic inflammatory diseases driving excessive hepatic Serum Amyloid A (SAA) synthesis',
      'B) Plasma cell dyscrasias causing systemic immunoglobulin light chain overproduction',
      'C) Islet cell tumors co-secreting excessive Islet Amyloid Polypeptide (IAPP)',
      'D) Inhaled atmospheric carbon particles accumulating in bronchial lymph nodes',
    ],
    correct: 0,
    exp: 'Reactive AA amyloidosis is driven by elevated acute-phase Serum Amyloid A (SAA) produced by the liver during chronic inflammatory or infectious conditions.',
  },
  {
    question: '10. What optical finding is pathognomonic for amyloid when a Congo Red-stained tissue section is viewed under polarized light?',
    options: [
      'A) Bright blue fluorescence',
      'B) Apple-green birefringence',
      'C) Dark black granular extinction',
      'D) Golden-yellow refractivity',
    ],
    correct: 1,
    exp: 'When Congo Red-stained amyloid is viewed under cross-polarized light, the antiparallel beta-pleated sheet structure produces pathognomonic apple-green birefringence.',
  },
];

const TEST_SECTIONS: LessonSectionItem[] = [
  {
    id: 'questions-1-3',
    title: 'Questions 1–3: Swelling & Steatosis',
    shortLabel: 'Q1–Q3',
  },
  {
    id: 'questions-4-6',
    title: 'Questions 4–6: Glycogen, Hyaline & Calcification',
    shortLabel: 'Q4–Q6',
  },
  {
    id: 'questions-7-10',
    title: 'Questions 7–10: Pigments & Amyloidosis',
    shortLabel: 'Q7–Q10',
  },
  {
    id: 'score-summary',
    title: 'Scorecard & Performance Summary',
    shortLabel: 'Scorecard',
  },
];

export const TestYourselfPage: React.FC<TestYourselfPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [completedSections, setCompletedSections] = useState<number[]>([0]);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(QUIZ_DATA.length).fill(null));

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    if (answers[qIdx] !== null) return; // Prevent re-answering
    const updated = [...answers];
    updated[qIdx] = optIdx;
    setAnswers(updated);
  };

  const handleReset = () => {
    setAnswers(new Array(QUIZ_DATA.length).fill(null));
    setCurrentSectionIndex(0);
    setCompletedSections([0]);
  };

  const handleSelectSection = (index: number) => {
    setCurrentSectionIndex(index);
    setCompletedSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  const handleNextSection = () => {
    if (currentSectionIndex < TEST_SECTIONS.length - 1) {
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

  const answeredCount = answers.filter((a) => a !== null).length;
  const score = answers.reduce<number>((acc, ans, idx) => {
    return ans === QUIZ_DATA[idx].correct ? acc + 1 : acc;
  }, 0);
  const percentage = Math.round((score / QUIZ_DATA.length) * 100);

  const fontClass =
    fontSize === 'scholar'
      ? 'font-serif-academic text-base sm:text-lg'
      : fontSize === 'large'
      ? 'text-base sm:text-lg'
      : 'text-sm sm:text-base';

  const renderScoreBar = () => (
    <div className="bg-white border-2 border-teal-800 rounded-2xl p-4 sm:p-5 text-center shadow-xs space-y-2">
      <h2 className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
        Module Quiz Score
      </h2>
      <div className="text-3xl sm:text-4xl font-black text-teal-800 tracking-tight">
        {score} / {QUIZ_DATA.length} ({percentage}%)
      </div>
      <p className="text-xs sm:text-sm text-slate-600">
        {answeredCount === QUIZ_DATA.length ? (
          percentage >= 90 ? (
            <span className="text-emerald-700 font-semibold">Outstanding! Mastered all concepts in Disturbance in Cell Metabolism.</span>
          ) : percentage >= 70 ? (
            <span className="text-teal-800 font-semibold">Good job! Solid understanding. Review missed topics in the module.</span>
          ) : (
            <span className="text-amber-800 font-semibold">Keep reviewing! Re-read the sub-pages and try the quiz again.</span>
          )
        ) : (
          `Progress: ${answeredCount} of ${QUIZ_DATA.length} questions answered.`
        )}
      </p>
    </div>
  );

  const renderQuestionCard = (qIdx: number) => {
    const q = QUIZ_DATA[qIdx];
    const userAnswer = answers[qIdx];
    const isAnswered = userAnswer !== null;
    const isCorrect = userAnswer === q.correct;

    return (
      <div
        key={qIdx}
        id={`quiz-card-${qIdx}`}
        className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3"
      >
        <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-sans leading-snug">
          {q.question}
        </h3>

        <div className="space-y-2">
          {q.options.map((opt, optIdx) => {
            let optStyle =
              'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';

            if (isAnswered) {
              if (optIdx === q.correct) {
                optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500';
              } else if (optIdx === userAnswer) {
                optStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-medium ring-1 ring-rose-400';
              } else {
                optStyle = 'bg-slate-50/50 border-slate-200/60 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={optIdx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(qIdx, optIdx)}
                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all duration-150 leading-relaxed cursor-pointer ${optStyle}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation Box */}
        {isAnswered && (
          <div
            className={`p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 ${
              isCorrect
                ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                : 'bg-rose-50/90 border-rose-200 text-rose-950'
            }`}
          >
            {isCorrect ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
            )}
            <div>
              <span className="font-bold block mb-0.5">
                {isCorrect
                  ? 'Correct!'
                  : `Incorrect. Option ${String.fromCharCode(65 + q.correct)} is the correct answer.`}
              </span>
              {q.exp}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCurrentSegment = () => {
    switch (currentSectionIndex) {
      case 0:
        // Questions 1–3
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Instructions */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
              <div className="border-l-4 border-teal-700 pl-3.5">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Instructions:</strong> Select the single best answer for each of the questions below. Instant feedback and detailed rationale will be displayed upon selecting an answer. Track your progress with the live score bar.
                </p>
              </div>
            </section>

            {renderScoreBar()}

            <div className="space-y-5">
              {[0, 1, 2].map(renderQuestionCard)}
            </div>
          </div>
        );

      case 1:
        // Questions 4–6
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {renderScoreBar()}

            <div className="space-y-5">
              {[3, 4, 5].map(renderQuestionCard)}
            </div>
          </div>
        );

      case 2:
        // Questions 7–10
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {renderScoreBar()}

            <div className="space-y-5">
              {[6, 7, 8, 9].map(renderQuestionCard)}
            </div>
          </div>
        );

      case 3:
        // Scorecard & Summary
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {renderScoreBar()}

            {/* Performance breakdown table */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Question Breakdown &amp; Review
              </h2>

              <div className="divide-y divide-slate-100">
                {QUIZ_DATA.map((q, idx) => {
                  const ans = answers[idx];
                  const isAns = ans !== null;
                  const isCorr = ans === q.correct;
                  const segmentTarget = idx < 3 ? 0 : idx < 6 ? 1 : 2;

                  return (
                    <div key={idx} className="py-3 flex items-center justify-between gap-3 text-xs sm:text-sm">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {isAns ? (
                          isCorr ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          )
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                        )}
                        <span className="truncate text-slate-800 font-medium">
                          Question {idx + 1}: {q.question.replace(/^\d+\.\s*/, '')}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`font-semibold text-xs px-2 py-0.5 rounded-full ${
                            !isAns
                              ? 'bg-slate-100 text-slate-500'
                              : isCorr
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-rose-50 text-rose-700'
                          }`}
                        >
                          {!isAns ? 'Unanswered' : isCorr ? 'Correct' : 'Incorrect'}
                        </span>
                        <button
                          onClick={() => handleSelectSection(segmentTarget)}
                          className="text-xs text-teal-700 hover:text-teal-900 underline font-semibold cursor-pointer"
                        >
                          Review
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Reset Quiz Button */}
            <div className="text-center pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-800 text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-teal-900 transition-colors shadow-2xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Quiz &amp; Retake
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
      lessonTitle="Test Yourself"
      header={
        <MetabolismHeader
          title="Test Yourself: Self-Assessment Knowledge Check"
          subtitle="Evaluate your mastery of cellular metabolism disturbances, intracellular accumulations, pigments, calcification, and amyloidosis."
          category="General Pathology"
          lessonId="test-yourself"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={TEST_SECTIONS}
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
          previous={{ id: 'practical-pathology-gallery', title: 'Practical Pathology Gallery' }}
          next={{ id: 'videos-further-learning', title: 'Videos and Further Learning' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
