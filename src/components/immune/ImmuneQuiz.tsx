import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const IMMUNE_QUESTIONS: QuizQuestion[] = [
  {
    id: 'imm-q1',
    question: 'Which of the following immune mechanisms defines a Type I hypersensitivity reaction?',
    options: [
      'Deposition of circulating antigen-antibody immune complexes in small vessel walls',
      'Antigen cross-linking of specific IgE antibodies bound to FcεRI on mast cells and basophils, triggering immediate degranulation',
      'Cytotoxic CD8+ T lymphocyte mediated direct cell lysis',
      'IgG or IgM autoantibody binding directly to cell surface antigens',
    ],
    correctIndex: 1,
    explanation:
      'Type I (immediate) hypersensitivity is mediated by IgE antibodies primed on mast cells and basophils; upon allergen re-exposure, cross-linking triggers release of preformed histamine and newly synthesized eicosanoids.',
  },
  {
    id: 'imm-q2',
    question: 'In canine Immune-Mediated Hemolytic Anemia (IMHA), what diagnostic morphological finding on a routine blood smear is virtually pathognomonic for immune-mediated erythrocyte destruction?',
    options: [
      'Heinz bodies',
      'Prominent spherocytes (small, spherical, hyperdense red cells lacking central pallor)',
      'Basophilic stippling',
      'Echinocytes (burr cells)',
    ],
    correctIndex: 1,
    explanation:
      'Spherocytes form when splenic macrophages phagocytose portions of the IgG- or C3b-opsonized erythrocyte membrane, forcing the red cell into a smaller, rigid sphere without central pallor.',
  },
  {
    id: 'imm-q3',
    question: 'What immunologic test detects antibodies or complement factors bound directly to the surface of a patient\'s circulating red blood cells in suspected IMHA?',
    options: [
      'Indirect Coombs test',
      'Direct Antiglobulin (Direct Coombs) Test',
      'Enzyme-linked immunosorbent assay (ELISA) for ANA',
      'Agar gel immunodiffusion (Coggins test)',
    ],
    correctIndex: 1,
    explanation:
      'The Direct Coombs test utilizes species-specific antiglobulins (anti-IgG, anti-IgM, anti-C3) added to washed patient red cells to demonstrate in vivo surface sensitization via macroscopic agglutination.',
  },
  {
    id: 'imm-q4',
    question: 'Equine Purpura Hemorrhagica is a classic manifestation of which hypersensitivity mechanism occurring weeks after Streptococcus equi subsp. equi (strangles) infection?',
    options: [
      'Type I (Anaphylactic)',
      'Type II (Antibody-mediated cytotoxic)',
      'Type III (Immune-complex mediated leukocytoclastic vasculitis)',
      'Type IV (Delayed-type cell-mediated)',
    ],
    correctIndex: 2,
    explanation:
      'Purpura hemorrhagica is a Type III hypersensitivity where circulating S. equi M-protein / IgA or IgG immune complexes deposit in microvascular walls, fixing complement and recruiting neutrophils (leukocytoclastic vasculitis).',
  },
  {
    id: 'imm-q5',
    question: 'Which molecular target is attacked by autoantibodies in Pemphigus Foliaceus, resulting in subcorneal pustules and acantholysis in dogs and horses?',
    options: [
      'Type IV collagen in the glomerular basement membrane',
      'Desmocollin-1 (or desmoglein-1), leading to loss of cohesion between keratinocytes (acantholysis)',
      'Acetylcholine receptors on the neuromuscular junction',
      'Thyroid peroxidase in follicular epithelial cells',
    ],
    correctIndex: 1,
    explanation:
      'Pemphigus foliaceus produces autoantibodies against keratinocyte desmosomal cadherins (primarily Desmocollin-1 in dogs), disrupting cell-to-cell adhesion and releasing rounded acantholytic cells into superficial blisters.',
  },
  {
    id: 'imm-q6',
    question: 'Which breed of horse is genetically predisposed to severe combined immunodeficiency (SCID) due to an autosomal recessive defect in DNA-dependent protein kinase (DNA-PKcs)?',
    options: [
      'Thoroughbred',
      'Arabian',
      'Quarter Horse',
      'Standardbred',
    ],
    correctIndex: 1,
    explanation:
      'Arabian foals can inherit SCID as an autosomal recessive mutation in DNA-PKcs, preventing V(D)J gene rearrangement and producing an absence of functional T and B lymphocytes and thymic hypoplasia.',
  },
  {
    id: 'imm-q7',
    question: 'What histological feature characterizes the tuberculin skin test used in cattle to identify Mycobacterium bovis infection?',
    options: [
      'Immediate wheal-and-flare reaction peaking at 20 minutes',
      'Delayed-type hypersensitivity (Type IV) peaking at 48 to 72 hours, characterized by perivascular cuffs of CD4+ Th1 lymphocytes and activated macrophages',
      'Massive accumulation of eosinophils and Charcot-Leyden crystals',
      'Deposition of fibrinoid necrosis and microvascular thrombi only',
    ],
    correctIndex: 1,
    explanation:
      'The tuberculin reaction is a classic Type IV cell-mediated response; sensitized memory Th1 cells secrete IFN-gamma, recruiting mononuclear phagocytes over 48 to 72 hours.',
  },
  {
    id: 'imm-q8',
    question: 'Which of the following describes secondary (reactive) amyloidosis (AA amyloid) commonly observed in domestic animals with chronic inflammatory conditions?',
    options: [
      'Deposition of immunoglobulin light chains secreted by malignant plasma cells',
      'Proteolytic cleavage and extracellular deposition of Serum Amyloid A (SAA), an acute-phase apolipoprotein synthesized by the liver during chronic inflammation',
      'Precipitation of abnormal islet amyloid polypeptide (IAPP) in feline pancreatic islets',
      'Intracellular aggregates of hyperphosphorylated tau proteins',
    ],
    correctIndex: 1,
    explanation:
      'Reactive systemic amyloidosis is composed of fibrils derived from Serum Amyloid A (SAA), upregulated by hepatocytes in response to IL-1, TNF, and IL-6 during chronic suppurative or granulomatous disease.',
  },
  {
    id: 'imm-q9',
    question: 'Under polarized light microscopy, what optical property confirms the diagnosis of amyloid in a tissue section stained with Congo red?',
    options: [
      'Bright golden-brown autofluorescence',
      'Apple-green birefringence',
      'Deep purple metachromasia',
      'Dark black silver precipitation',
    ],
    correctIndex: 1,
    explanation:
      'The parallel beta-pleated sheet conformation of amyloid binds Congo red dye in an orderly alignment, producing pathognomonic apple-green birefringence under cross-polarized light.',
  },
  {
    id: 'imm-q10',
    question: 'Major Histocompatibility Complex (MHC) Class I molecules present endogenous peptides to which subset of T lymphocytes?',
    options: [
      'CD4+ T helper lymphocytes',
      'CD8+ Cytotoxic T lymphocytes',
      'B lymphocytes',
      'Natural Killer (NK) cells exclusively',
    ],
    correctIndex: 1,
    explanation:
      'MHC Class I molecules (expressed on all nucleated cells) present peptides derived from cytosolic antigens (e.g., viral proteins) to CD8+ cytotoxic T lymphocytes.',
  },
];

export const ImmuneQuiz: React.FC = () => {
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
    const q = IMMUNE_QUESTIONS.find((item) => item.id === qid);
    return q && q.correctIndex === idx;
  }).length;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-800" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
              Immune System Diseases Self-Assessment
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            10 interactive self-assessment questions on hypersensitivities I-IV, autoimmune diseases, Coombs testing, SCID, and amyloidosis.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono-code">
            Score: {correctCount} / {IMMUNE_QUESTIONS.length}
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
        {IMMUNE_QUESTIONS.map((q, qIndex) => {
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
