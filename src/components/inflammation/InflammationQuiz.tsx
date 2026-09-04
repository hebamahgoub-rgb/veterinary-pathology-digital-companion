import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const INFLAMMATION_QUESTIONS: QuizQuestion[] = [
  {
    id: 'inf-q1',
    question: 'Which of the following is the fundamental biochemical differentiator between an inflammatory exudate and a non-inflammatory transudate?',
    options: [
      'Exudate has a lower specific gravity (< 1.012) and low protein content (< 1.5 g/dL)',
      'Exudate results from increased vascular permeability, producing high protein content (> 3.0 g/dL) and high cellularity',
      'Transudate contains abundant fibrinogen and numerous degenerate neutrophils',
      'Exudate is caused solely by decreased plasma colloid osmotic pressure',
    ],
    correctIndex: 1,
    explanation:
      'Exudates develop when endothelial gaps widen due to inflammatory mediators, allowing protein-rich fluid (> 3.0 g/dL, specific gravity > 1.020) and leukocytes to leave the microvasculature.',
  },
  {
    id: 'inf-q2',
    question: 'During leukocyte recruitment, which adhesion molecules mediate the initial, transient "rolling" of leukocytes along activated endothelial cells?',
    options: [
      'Integrins (LFA-1, Mac-1)',
      'Platelet Endothelial Cell Adhesion Molecule-1 (PECAM-1 / CD31)',
      'Selectins (E-selectin, P-selectin, L-selectin)',
      'Intercellular Adhesion Molecule-1 (ICAM-1)',
    ],
    correctIndex: 2,
    explanation:
      'Selectins mediate low-affinity rolling interactions, slowing down circulating leukocytes before high-affinity integrin-mediated firm adhesion occurs.',
  },
  {
    id: 'inf-q3',
    question: 'Which molecule plays the primary role in leukocyte transmigration (diapedesis) through endothelial junctions and across the basement membrane?',
    options: [
      'PECAM-1 (CD31)',
      'Histamine',
      'P-selectin',
      'Leukotriene B4 (LTB4)',
    ],
    correctIndex: 0,
    explanation:
      'Platelet endothelial cell adhesion molecule-1 (PECAM-1, or CD31) is expressed on both leukocytes and endothelial junctions and physically facilitates transmigration through intercellular junctions.',
  },
  {
    id: 'inf-q4',
    question: 'Which chemical mediator derived from the complement cascade functions as both a potent anaphylatoxin and a powerful chemoattractant for neutrophils?',
    options: [
      'C3b',
      'C5a',
      'C5b-9 (Membrane Attack Complex)',
      'C1q',
    ],
    correctIndex: 1,
    explanation:
      'C5a is a major chemoattractant for neutrophils, monocytes, and eosinophils, while also acting as an anaphylatoxin triggering mast cell degranulation.',
  },
  {
    id: 'inf-q5',
    question: 'What is the characteristic cellular hallmark of a granulomatous inflammatory reaction?',
    options: [
      'Massive accumulation of degenerate neutrophils forming purulent liquefaction',
      'Focal collections of activated epithelioid macrophages surrounded by lymphocytes, plasma cells, and multinucleated giant cells',
      'Widespread intra-alveolar eosinophilic fibrin strands without cellular infiltration',
      'Proliferation of endothelial cells without inflammatory leukocytes',
    ],
    correctIndex: 1,
    explanation:
      'Granulomas are specialized chronic inflammatory foci dominated by modified macrophages (epithelioid macrophages) that may fuse into multinucleated giant cells (Langhans or foreign-body type).',
  },
  {
    id: 'inf-q6',
    question: 'How can a pathologist grossly distinguish an acute fibrinous pericarditis from chronic fibrous pericardial adhesions?',
    options: [
      'Fibrin is non-vascularized, dull, shaggy, and easily peeled away from underlying serosa; fibrous adhesions are firm, organized, vascular connective tissue that tears parenchyma when separated',
      'Fibrin is always hard and calcified; fibrous tissue is soft and watery',
      'Fibrous tissue dissolves easily with saline rinse; fibrin cannot be washed off',
      'Fibrinous pericarditis only occurs in avians; fibrous adhesions occur in mammals',
    ],
    correctIndex: 0,
    explanation:
      'Acute fibrin is an extracellular protein precipitate that can be stripped off cleanly without tearing; chronic fibrous adhesions contain collagen, fibroblasts, and capillaries that firmly bind the tissue layers.',
  },
  {
    id: 'inf-q7',
    question: 'Which substance synthesized in the anterior hypothalamus acts as the ultimate mediator of fever during the acute-phase systemic reaction?',
    options: [
      'Prostaglandin E2 (PGE2)',
      'Bradykinin',
      'Leukotriene C4 (LTC4)',
      'Serotonin',
    ],
    correctIndex: 0,
    explanation:
      'Pyrogenic cytokines (IL-1, TNF, IL-6) stimulate hypothalamic vascular endothelial cells to produce Prostaglandin E2 (PGE2), which elevates the thermoregulatory set-point in the hypothalamus.',
  },
  {
    id: 'inf-q8',
    question: 'Suppurative (purulent) inflammation is characterized by the presence of pus. What is the primary constituent of pus?',
    options: [
      'Viable and degenerate (necrotic) neutrophils, cellular debris, and edema fluid',
      'Hypersecreted mucus and desquamated goblet cells',
      'Abundant red blood cells with severe vascular necrosis',
      'Extracellular sheets of amyloid fibrils',
    ],
    correctIndex: 0,
    explanation:
      'Pus is composed of liquefied necrotic parenchymal tissue, proteinaceous exudate fluid, and large numbers of viable and dying neutrophils recruited by pyogenic organisms.',
  },
  {
    id: 'inf-q9',
    question: 'What specialized cell type is responsible for wound contraction during healing by secondary intention?',
    options: [
      'Myofibroblasts',
      'Endothelial pericytes',
      'Squamous epithelial cells',
      'Epithelioid macrophages',
    ],
    correctIndex: 0,
    explanation:
      'Myofibroblasts contain alpha-smooth muscle actin and contract the wound margins inward, substantially reducing the surface area of extensive tissue defects.',
  },
  {
    id: 'inf-q10',
    question: 'Who added the fifth cardinal sign of inflammation—functio laesa (loss of function)—to Celsus\'s original four signs (rubor, calor, tumor, dolor)?',
    options: [
      'Rudolf Virchow',
      'Julius Cohnheim',
      'William Osler',
      'Robert Koch',
    ],
    correctIndex: 0,
    explanation:
      'Rudolf Virchow added the 5th cardinal sign, functio laesa (loss of function), recognizing that inflamed organs cannot maintain normal physiological function.',
  },
];

export const InflammationQuiz: React.FC = () => {
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
    const q = INFLAMMATION_QUESTIONS.find((item) => item.id === qid);
    return q && q.correctIndex === idx;
  }).length;

  return (
    <div className="space-y-6">
      {/* Quiz Header & Progress */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-800" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
              Inflammation Self-Assessment
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            10 interactive self-assessment questions on vascular dynamics, leukocyte recruitment, chemical mediators, and morphological exudates.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono-code">
            Score: {correctCount} / {INFLAMMATION_QUESTIONS.length}
          </div>
          {answeredCount > 0 && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-teal-900 transition-colors font-medium cursor-pointer"
              title="Reset all questions"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-5">
        {INFLAMMATION_QUESTIONS.map((q, qIndex) => {
          const isAnswered = showResults[q.id];
          const selectedOption = selectedAnswers[q.id];

          return (
            <article
              key={q.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold font-mono-code flex items-center justify-center flex-shrink-0 mt-0.5">
                  {qIndex + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed font-sans">
                  {q.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 pt-1 pl-9">
                {q.options.map((option, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = q.correctIndex === optIdx;

                  let optionStyle =
                    'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-700';

                  if (isAnswered) {
                    if (isCorrect) {
                      optionStyle =
                        'border-emerald-300 bg-emerald-50 text-emerald-950 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optionStyle =
                        'border-rose-300 bg-rose-50 text-rose-950';
                    } else {
                      optionStyle = 'border-slate-200 bg-slate-50 opacity-60 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isAnswered}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 cursor-pointer ${optionStyle}`}
                    >
                      <span className="leading-relaxed">{option}</span>
                      {isAnswered && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {isAnswered && (
                <div className="ml-9 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    {selectedOption === q.correctIndex ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct!
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect
                      </span>
                    )}
                  </div>
                  <p className="leading-relaxed text-slate-600 font-sans">
                    {q.explanation}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};
