import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const GROWTH_QUESTIONS: QuizQuestion[] = [
  {
    id: 'gro-q1',
    question: 'What is the fundamental embryological distinction between organ hypoplasia and organ atrophy?',
    options: [
      'Hypoplasia is reversible; atrophy is always permanent',
      'Hypoplasia is a failure of an organ to develop to its normal adult size due to reduced cell division; atrophy is a reduction in size of an organ that previously reached full normal adult size',
      'Hypoplasia occurs only in endocrine glands; atrophy occurs only in skeletal muscle',
      'Hypoplasia is characterized by extensive neoplastic transformation',
    ],
    correctIndex: 1,
    explanation:
      'Hypoplasia is a developmental defect where an organ never reached normal maturity or cell numbers, whereas atrophy is an acquired reduction in cell size and/or number after reaching adult dimensions.',
  },
  {
    id: 'gro-q2',
    question: 'In utero infection of a pregnant queen with Feline Panleukopenia Virus (parvovirus) targets rapidly dividing neuroblasts in the external germinal layer, resulting in which congenital developmental defect in kittens?',
    options: [
      'Hydrocephalus',
      'Cerebellar hypoplasia',
      'Cerebral aplasia',
      'Spina bifida',
    ],
    correctIndex: 1,
    explanation:
      'Parvovirus has a predilection for rapidly dividing cells; intrauterine infection destroys the external germinal layer of the fetal cerebellum, resulting in severe cerebellar hypoplasia and intention tremors.',
  },
  {
    id: 'gro-q3',
    question: 'At the cellular level, what intracellular proteolytic pathway is responsible for the accelerated degradation of structural proteins during disuse or denervation atrophy of skeletal muscle?',
    options: [
      'Ubiquitin-proteasome pathway (and autophagy)',
      'Complement cascade',
      'Extrinsic apoptosis caspase pathway',
      'Anaerobic glycolysis',
    ],
    correctIndex: 0,
    explanation:
      'Ubiquitin ligases tag cellular proteins for rapid degradation within the 26S proteasome, while autophagic vacuoles digest organelles, reducing cell mass during atrophy.',
  },
  {
    id: 'gro-q4',
    question: 'In feline hypertrophic cardiomyopathy (HCM), what hemodynamic pattern of cardiac remodeling develops in the left ventricle?',
    options: [
      'Eccentric hypertrophy characterized by ventricular dilation and wall thinning due to volume overload',
      'Concentric hypertrophy characterized by marked wall thickening and diminished lumen volume due to pressure overload or sarcomeric mutation',
      'Diffuse myocardial hypoplasia',
      'Transmural myocardial liquefactive necrosis',
    ],
    correctIndex: 1,
    explanation:
      'Concentric hypertrophy involves addition of new sarcomeres in parallel, thickening the ventricular wall inward and reducing chamber lumen volume, typical of pressure overload and HCM.',
  },
  {
    id: 'gro-q5',
    question: 'Why does adult skeletal muscle and cardiac muscle respond to increased workload with hypertrophy rather than hyperplasia?',
    options: [
      'They lack mitochondria needed for cell division',
      'They are permanent tissues composed of terminally differentiated post-mitotic cells that cannot undergo mitotic division',
      'They lack cellular receptors for growth factors',
      'They are completely avascular',
    ],
    correctIndex: 1,
    explanation:
      'Permanent post-mitotic cells (cardiac and skeletal myocytes, neurons) cannot undergo division (hyperplasia) and can only increase functional mass by synthesizing more organelles and myofilaments (hypertrophy).',
  },
  {
    id: 'gro-q6',
    question: 'Which of the following describes benign prostatic hyperplasia (BPH) commonly seen in older intact male dogs?',
    options: [
      'A malignant glandular adenocarcinoma infiltrating the pelvic canal',
      'Hormonal hyperplasia driven by dihydrotestosterone (DHT), producing symmetrical glandular and stromal enlargement',
      'Congenital agenesis of prostatic acini',
      'Ischemic infarction of the pelvic urethra',
    ],
    correctIndex: 1,
    explanation:
      'Androgen-dependent (DHT) stimulation of prostatic epithelial and stromal cells produces symmetrical enlargement and cystic changes in intact male dogs, responding rapidly to castration.',
  },
  {
    id: 'gro-q7',
    question: 'What is the definition of epithelial metaplasia?',
    options: [
      'A reversible change in which one adult, differentiated cell type is replaced by another adult differentiated cell type better suited to withstand environmental stress',
      'An irreversible neoplastic transformation with loss of cellular differentiation',
      'Total absence of an organ or tissue primordium',
      'Expansion of immature embryonic cells in a germline organ',
    ],
    correctIndex: 0,
    explanation:
      'Metaplasia is a reversible adaptive substitution of one mature cell type by another (e.g., pseudostratified ciliated columnar respiratory epithelium replaced by stratified squamous epithelium in chronic irritation).',
  },
  {
    id: 'gro-q8',
    question: 'Chronic hypovitaminosis A in psittacines, reptiles, and cattle classically causes which cellular adaptation in the mucosal and glandular epithelia?',
    options: [
      'Intestinal hypoplasia',
      'Squamous metaplasia of glandular and ductal epithelium with keratin plugging',
      'Cerebellar agenesis',
      'Renal amyloidosis',
    ],
    correctIndex: 1,
    explanation:
      'Vitamin A is essential for maintaining differentiated columnar and cuboidal secretory epithelia; deficiency induces squamous metaplasia and hyperkeratosis, blocking ducts and creating white plaques in the mouth and esophagus.',
  },
  {
    id: 'gro-q9',
    question: 'What is a choristoma (such as an ocular corneal dermoid)?',
    options: [
      'A malignant, metastasizing teratoma of embryonic origin',
      'A congenital anomaly consisting of normal, mature, differentiated tissue in an abnormal (heterotopic) anatomical location',
      'An overgrowth of mature native tissue disorganized within its normal anatomical site',
      'A localized area of caseous necrosis',
    ],
    correctIndex: 1,
    explanation:
      'A choristoma is an island of normal, histologically mature tissue in an abnormal anatomical site, such as a corneal dermoid containing haired skin, sebaceous glands, and fat on the cornea.',
  },
  {
    id: 'gro-q10',
    question: 'How does cellular dysplasia differ fundamentally from anaplasia?',
    options: [
      'Dysplasia refers to disorderly cellular proliferation with loss of architectural orientation, often reversible; anaplasia implies complete lack of differentiation and is a hallmark of malignancy',
      'Dysplasia is only seen in cardiac muscle; anaplasia occurs only in bone',
      'Dysplasia is always fatal within 24 hours; anaplasia is benign',
      'There is no difference between the two terms',
    ],
    correctIndex: 0,
    explanation:
      'Dysplasia is disordered growth and maturation (pleomorphism, hyperchromasia, loss of polarity) that may precede neoplasia but can be reversible, whereas anaplasia is irreversible, complete loss of structural and functional differentiation characteristic of malignant neoplasms.',
  },
];

export const GrowthQuiz: React.FC = () => {
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
    const q = GROWTH_QUESTIONS.find((item) => item.id === qid);
    return q && q.correctIndex === idx;
  }).length;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-800" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
              Disorders of Growth Self-Assessment
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            10 interactive self-assessment questions distinguishing developmental anomalies, atrophy, hypertrophy, hyperplasia, metaplasia, dysplasia, and hamartomas.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono-code">
            Score: {correctCount} / {GROWTH_QUESTIONS.length}
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
        {GROWTH_QUESTIONS.map((q, qIndex) => {
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
