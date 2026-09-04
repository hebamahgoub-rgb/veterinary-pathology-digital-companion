import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const CIRCULATORY_QUESTIONS: QuizQuestion[] = [
  {
    id: 'cir-q1',
    question: 'Which of the following triad of primary abnormalities constitutes Virchow\'s Triad in the pathogenesis of thrombosis?',
    options: [
      'Vasodilation, increased capillary permeability, and neutrophil extravasation',
      'Endothelial injury, stasis or turbulent blood flow, and blood hypercoagulability',
      'Hypocalcemia, hypoproteinemia, and thrombocytopenia',
      'Hypertension, lymphadenopathy, and vascular calcification',
    ],
    correctIndex: 1,
    explanation:
      'Virchow\'s triad consists of: (1) Endothelial injury (most critical), (2) Alterations in normal blood flow (stasis or turbulence), and (3) Hypercoagulability of blood.',
  },
  {
    id: 'cir-q2',
    question: 'What is the characteristic macroscopic appearance of chronic passive hepatic congestion ("nutmeg liver") caused by right-sided heart failure?',
    options: [
      'Uniformly pale, swollen, greasy liver with rounded borders',
      'Centrilobular congestion and necrosis (dark red) alternating with surrounding periportal fatty degeneration (tan-yellow)',
      'Multiple firm, white umbilicated nodular masses throughout all hepatic lobes',
      'Extensive subcapsular hematomas with diffuse parenchymal liquefaction',
    ],
    correctIndex: 1,
    explanation:
      'In nutmeg liver, backward venous hypertension causes severe centrilobular sinusoidal engorgement and ischemic hepatocyte atrophy (dark red), contrasting sharply with lighter, fatty degenerated periportal hepatocytes (tan-yellow).',
  },
  {
    id: 'cir-q3',
    question: 'Which physiological disturbance in Starling forces is the primary driver of generalized subcutaneous edema (anasarca) and ascites in nephrotic syndrome or severe protein-losing enteropathy?',
    options: [
      'Increased microvascular hydrostatic pressure',
      'Decreased plasma colloid osmotic (oncotic) pressure due to profound hypoalbuminemia',
      'Extensive lymphatic obstruction by metastatic neoplasia',
      'Increased endothelial permeability caused by histamine release',
    ],
    correctIndex: 1,
    explanation:
      'Loss of albumin into urine or the intestinal lumen causes severe hypoalbuminemia (&lt; 1.5 g/dL), dropping plasma oncotic pressure and causing net fluid extravasation into the interstitium and body cavities.',
  },
  {
    id: 'cir-q4',
    question: 'What is the morphological designation for flat, irregularly shaped hemorrhages measuring 1 to 2 cm in diameter on serosal or mucosal surfaces?',
    options: [
      'Petechiae',
      'Ecchymoses',
      'Hematoma',
      'Epistaxis',
    ],
    correctIndex: 1,
    explanation:
      'Pinpoint hemorrhages (1–2 mm) are petechiae; hemorrhages measuring 3 mm to 1 cm are purpura; larger macular hemorrhages (1–2 cm) are ecchymoses; and confluent, paint-brush hemorrhages are suffusions.',
  },
  {
    id: 'cir-q5',
    question: 'Why do arterial infarcts in the kidney, spleen, and heart typically produce pale (anemic / white) infarcts rather than red (hemorrhagic) infarcts?',
    options: [
      'They occur in solid visceral organs with single end-arterial circulations where adjacent blood cannot easily reperfuse the necrotic ischemic zone',
      'They have dual blood supplies that immediately wash out necrotic erythrocytes',
      'They are caused by extensive venous thrombosis rather than arterial occlusion',
      'The tissue liquefies immediately and drains via the ureter or lymphatics',
    ],
    correctIndex: 0,
    explanation:
      'Solid parenchymal organs with terminal end-arterial supplies (kidney, spleen, heart) experience wedge-shaped ischemic coagulative necrosis with limits to collateral blood entry, yielding pale infarcts.',
  },
  {
    id: 'cir-q6',
    question: 'In cats with hypertrophic cardiomyopathy (HCM), where does an arterial thromboembolus most characteristically lodge when it detaches from the left atrium (saddle thrombus)?',
    options: [
      'Anterior mesenteric artery',
      'Bifurcation of the terminal abdominal aorta into the external iliac arteries',
      'Basilar artery supplying the cerebellum',
      'Cranial vena cava',
    ],
    correctIndex: 1,
    explanation:
      'Feline aortic thromboembolism (FATE) classically lodges at the aortic trifurcation (saddle thrombus), acutely cutting off arterial perfusion to both hindlimbs (paralysis, hypothermia, absent femoral pulses).',
  },
  {
    id: 'cir-q7',
    question: 'Which of the following forms of shock is categorized as distributive shock and characterized by systemic microvascular vasodilation and endothelial injury induced by bacterial endotoxin (LPS)?',
    options: [
      'Cardiogenic shock',
      'Hypovolemic shock',
      'Septic shock',
      'Obstructive shock',
    ],
    correctIndex: 2,
    explanation:
      'Septic shock is a form of distributive shock driven by widespread endothelial activation, cytokine release (TNF, IL-1), systemic vasodilation, microvascular pooling, and disseminated intravascular coagulation.',
  },
  {
    id: 'cir-q8',
    question: 'What paradoxical clinicopathological emergency is characterized by systemic microvascular thrombosis coupled simultaneously with severe consumptive coagulopathy and uncontrollable bleeding?',
    options: [
      'Von Willebrand disease',
      'Disseminated Intravascular Coagulation (DIC)',
      'Immune-mediated thrombocytopenia',
      'Hemophilia A',
    ],
    correctIndex: 1,
    explanation:
      'DIC begins with widespread microvascular activation and fibrin thrombus deposition, which rapidly exhausts (consumes) platelets and coagulation factors, leading to secondary fibrinolysis and diffuse hemorrhagic diathesis.',
  },
  {
    id: 'cir-q9',
    question: 'What microscopic hallmark distinguishes an antemortem thrombus from a postmortem "currant-jelly" or "chicken-fat" blood clot?',
    options: [
      'Lines of Zahn (alternating pale layers of platelets/fibrin and darker layers of erythrocytes) and endothelial attachment',
      'Complete lack of any cellular elements',
      'Antemortem thrombi are always gelatinous and never adhere to vascular walls',
      'Presence of bacterial spores only',
    ],
    correctIndex: 0,
    explanation:
      'Antemortem thrombi are laminated with visible Lines of Zahn, are dry, friable, and adherent to the underlying injured endothelium, whereas postmortem clots are smooth, glistening, non-adherent, and mold to the vessel lumen.',
  },
  {
    id: 'cir-q10',
    question: 'In acute respiratory distress syndrome (shock lung), what histological lesion forms along the alveolar septa as a consequence of diffuse alveolar-capillary endothelial and epithelial injury?',
    options: [
      'Amyloid casts',
      'Eosinophilic hyaline membranes composed of fibrin-rich edema fluid and necrotic pneumocyte debris',
      'Cholesterol clefts surrounded by foreign-body giant cells',
      'Caseous necrosis with concentric laminations',
    ],
    correctIndex: 1,
    explanation:
      'Diffuse alveolar damage in shock lung leads to severe vascular leakage into alveolar spaces; high-molecular-weight fibrinogen and necrotic cell fragments condense along alveolar walls forming dense eosinophilic hyaline membranes.',
  },
];

export const CirculatoryQuiz: React.FC = () => {
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
    const q = CIRCULATORY_QUESTIONS.find((item) => item.id === qid);
    return q && q.correctIndex === idx;
  }).length;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-800" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
              Circulatory Disturbances Self-Assessment
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            10 interactive self-assessment questions covering Starling forces, Virchow&apos;s triad, hemorrhage classifications, infarcts, shock types, and DIC.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono-code">
            Score: {correctCount} / {CIRCULATORY_QUESTIONS.length}
          </div>
          {answeredCount > 0 && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-teal-900 transition-colors font-medium cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-5">
        {CIRCULATORY_QUESTIONS.map((q, qIndex) => {
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
                      optionStyle = 'border-rose-300 bg-rose-50 text-rose-950';
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
