import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const CELL_INJURY_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ci-q1',
    question: 'What is the primary biochemical cause of cellular swelling (hydropic change) in acute ischemic injury?',
    options: [
      'Activation of executioner caspases',
      'ATP depletion leading to failure of the plasma membrane Na+/K+ ATPase pump',
      'Extracellular accumulation of insoluble beta-pleated fibrillar amyloid',
      'Excessive lipid peroxidation induced by vitamin E deficiency',
    ],
    correctIndex: 1,
    explanation:
      'Failure of the ATP-dependent Na+/K+ pump leads to sodium and water retention inside the cell, producing distended endoplasmic reticulum and cellular swelling.',
  },
  {
    id: 'ci-q2',
    question: 'In which organ is ischemic injury (infarction) characterized by liquefactive necrosis rather than coagulative necrosis?',
    options: [
      'Kidney',
      'Myocardium',
      'Central Nervous System (Brain and Spinal Cord)',
      'Spleen',
    ],
    correctIndex: 2,
    explanation:
      'Unlike solid visceral organs where coagulative necrosis predominates, ischemic necrosis in the CNS results in rapid enzymatic digestion (malacia/liquefactive necrosis) and cavitation.',
  },
  {
    id: 'ci-q3',
    question: 'Which morphologic pattern of necrosis is classic for infection by Corynebacterium pseudotuberculosis in small ruminants?',
    options: [
      'Fibrinoid necrosis',
      'Caseous necrosis',
      'Enzymatic fat necrosis',
      'Dry gangrene',
    ],
    correctIndex: 1,
    explanation:
      'Caseous lymphadenitis produces thick, friable, cheese-like acellular debris with laminated or "onion-ring" architecture typical of caseous necrosis.',
  },
  {
    id: 'ci-q4',
    question: 'Which of the following fundamentally differentiates apoptosis from necrosis?',
    options: [
      'Apoptosis is always accompanied by extensive neutrophil infiltration',
      'Apoptosis causes early loss of plasma membrane integrity and cellular swelling',
      'Apoptosis is an energy-dependent, regulated process with intact membrane apoptotic bodies that does not elicit inflammation',
      'Apoptosis exclusively affects contiguous groups of parenchymal cells simultaneously',
    ],
    correctIndex: 2,
    explanation:
      'Apoptosis is an energy-dependent, regulated cell death pathway resulting in cell shrinkage and apoptotic bodies cleared quietly by phagocytes without eliciting an inflammatory response.',
  },
  {
    id: 'ci-q5',
    question: 'What biochemical phenomenon produces chalky-white grossly visible deposits in pancreatic fat necrosis?',
    options: [
      'Free fatty acids combine with calcium to form insoluble soaps (saponification)',
      'Precipitation of uric acid crystals within synovial fluid',
      'Polymerization of amyloid light chains around capillaries',
      'Deposition of glycogen in renal tubular epithelial cells',
    ],
    correctIndex: 0,
    explanation:
      'Activated pancreatic lipases hydrolyze triglycerides into free fatty acids that bind calcium ions, producing macroscopic, chalky-white calcium soaps (saponification).',
  },
];

export const CellInjuryQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const handleSelect = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    setShowResults((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults({});
  };

  const answeredCount = Object.keys(showResults).length;
  const correctCount = Object.entries(selectedAnswers).filter(([qid, idx]) => {
    const q = CELL_INJURY_QUESTIONS.find((item) => item.id === qid);
    return q && q.correctIndex === idx;
  }).length;

  return (
    <div className="space-y-5">
      {/* Intro Note as written in the source text */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-950 leading-relaxed font-sans">
        Self-assessment quizzes and interactive image identification cases for cell injury patterns will be featured here.
      </div>

      {/* Progress & Reset bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-amber-800" />
          <span className="font-semibold text-slate-800 font-sans">
            Knowledge Check: {answeredCount} of {CELL_INJURY_QUESTIONS.length} Answered
          </span>
          {answeredCount > 0 && (
            <span className="font-mono-code font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
              Score: {correctCount} / {answeredCount}
            </span>
          )}
        </div>

        {answeredCount > 0 && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 text-xs font-medium cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Quiz</span>
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {CELL_INJURY_QUESTIONS.map((q, qIdx) => {
          const isAnswered = showResults[q.id];
          const selectedIdx = selectedAnswers[q.id];
          const isCorrect = selectedIdx === q.correctIndex;

          return (
            <div
              key={q.id}
              id={`quiz-question-${q.id}`}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3"
            >
              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug font-sans flex items-start gap-2">
                <span className="text-amber-800 font-mono-code flex-shrink-0">
                  Q{qIdx + 1}.
                </span>
                <span>{q.question}</span>
              </h4>

              <div className="space-y-1.5 pt-1">
                {q.options.map((option, optIdx) => {
                  let btnClass =
                    'w-full text-left p-3 rounded-xl text-xs sm:text-sm transition-all border font-medium flex items-center justify-between gap-2.5 cursor-pointer ';

                  if (!isAnswered) {
                    btnClass +=
                      'bg-white border-slate-200 hover:border-amber-400 active:bg-amber-50 text-slate-800';
                  } else {
                    if (optIdx === q.correctIndex) {
                      btnClass +=
                        'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-500/20';
                    } else if (selectedIdx === optIdx) {
                      btnClass +=
                        'bg-rose-50 border-rose-400 text-rose-950 line-through';
                    } else {
                      btnClass +=
                        'bg-white/60 border-slate-200 text-slate-400 opacity-70';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      id={`quiz-${q.id}-opt-${optIdx}`}
                      disabled={isAnswered}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={btnClass}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-bold font-mono-code flex-shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </div>

                      {isAnswered && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      )}
                      {isAnswered && selectedIdx === optIdx && optIdx !== q.correctIndex && (
                        <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div
                  className={`p-3 rounded-xl text-xs leading-relaxed border font-sans ${
                    isCorrect
                      ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                      : 'bg-amber-50 text-amber-950 border-amber-200'
                  }`}
                >
                  <strong className="block mb-0.5">
                    {isCorrect ? '✓ Correct! ' : 'Note: '}
                  </strong>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
