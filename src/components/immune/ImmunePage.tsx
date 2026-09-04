import React, { useState, useEffect } from 'react';
import {
  Shield,
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
import { ImmuneGallery } from './ImmuneGallery';
import { ImmuneQuiz } from './ImmuneQuiz';
import { ImmuneVideos } from './ImmuneVideos';

interface ImmunePageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  initialSectionId?: string;
}

const IMMUNE_SECTIONS: LessonSectionItem[] = [
  {
    id: 'imm-start-here',
    number: '01',
    title: '1. Start Here: The Two Arms of Host Defense',
    shortTitle: '1. Start Here',
    description: 'Immune equilibrium, self-tolerance, and mechanisms of immunopathology.',
  },
  {
    id: 'imm-overview',
    number: '02',
    title: '2. Overview of the Immune System',
    shortTitle: '2. Immune Overview',
    description: 'Innate vs adaptive immunity, antigen recognition, and secondary lymphoid organs.',
  },
  {
    id: 'imm-cells',
    number: '03',
    title: '3. Cells of the Immune System',
    shortTitle: '3. Immune Cells',
    description: 'T lymphocytes (CD4+/CD8+), B lymphocytes, plasma cells, NK cells, and dendritic cells.',
  },
  {
    id: 'imm-tissues',
    number: '04',
    title: '4. Tissues of the Immune System',
    shortTitle: '4. Lymphoid Tissues',
    description: 'Primary (bone marrow, thymus) and secondary (lymph nodes, spleen, MALT) lymphoid organs.',
  },
  {
    id: 'imm-cytokines',
    number: '05',
    title: '5. Cytokines: Messengers of the Immune System',
    shortTitle: '5. Cytokines',
    description: 'Interleukins, interferons, chemokines, and TNF in immune coordination and cross-talk.',
  },
  {
    id: 'imm-mhc',
    number: '06',
    title: '6. Major Histocompatibility Complex (MHC)',
    shortTitle: '6. MHC System',
    description: 'MHC Class I vs Class II processing, antigen presentation, and self-restriction.',
  },
  {
    id: 'imm-hypersensitivity',
    number: '07',
    title: '7. Hypersensitivity Reactions',
    shortTitle: '7. Hypersensitivity I–IV',
    description: 'Gell & Coombs classification: Type I (immediate), Type II (cytotoxic), Type III (complexes), Type IV (delayed).',
  },
  {
    id: 'imm-autoimmune',
    number: '08',
    title: '8. Autoimmune Diseases',
    shortTitle: '8. Autoimmunity',
    description: 'Loss of self-tolerance, IMHA, systemic lupus erythematosus (SLE), and pemphigus foliaceus.',
  },
  {
    id: 'imm-immunodeficiency',
    number: '09',
    title: '9. Immunologic Deficiency Syndromes',
    shortTitle: '9. Immunodeficiency',
    description: 'Primary (equine SCID) vs secondary (FIV, BVDV, canine distemper, malnutrition) immunodeficiencies.',
  },
  {
    id: 'imm-amyloidosis',
    number: '10',
    title: '10. Amyloidosis',
    shortTitle: '10. Amyloidosis',
    description: 'Insoluble beta-pleated protein fibrils: primary AL, reactive systemic AA, Congo red apple-green birefringence.',
  },
  {
    id: 'imm-practical-gallery',
    number: '11',
    title: '11. Practical Pathology Gallery',
    shortTitle: '11. Gallery',
    description: 'Eight diagnostic cases: canine IMHA, purpura hemorrhagica, strangles, pemphigus, FIV, glomerulonephritis, tuberculin test.',
  },
  {
    id: 'imm-test-yourself',
    number: '12',
    title: '12. Test Yourself',
    shortTitle: '12. Self-Test',
    description: '10 interactive self-assessment questions on hypersensitivities, autoimmunity, and diagnostic laboratory tests.',
  },
  {
    id: 'imm-further-learning',
    number: '13',
    title: '13. Further Learning',
    shortTitle: '13. Further Learning',
    description: 'Lectures on Coombs testing, hypersensitivity mechanisms, and authoritative veterinary references.',
  },
];

export const ImmunePage: React.FC<ImmunePageProps> = ({
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
      const targetIdx = IMMUNE_SECTIONS.findIndex(
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
    if (currentIndex < IMMUNE_SECTIONS.length - 1) {
      handleSelectSection(currentIndex + 1);
    }
  };

  const handlePreviousSection = () => {
    if (currentIndex > 0) {
      handleSelectSection(currentIndex - 1);
    }
  };

  const handleCompleteLesson = () => {
    setCompletedIndices(IMMUNE_SECTIONS.map((_, i) => i));
    onNavigate({ type: 'general_pathology' });
  };

  const currentSection = IMMUNE_SECTIONS[currentIndex];

  const header = (
    <LessonHeader
      title="Diseases of the Immune System"
      subtitle="General Pathology Module 5 — Immunopathology, hypersensitivity reactions, autoimmunity, and immunodeficiencies."
      sectionCode="Section: 05"
      category="General Pathology"
      lessonId="disorders-of-the-immune-system"
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
      lessonTitle="Diseases of the Immune System"
      sections={IMMUNE_SECTIONS}
      currentIndex={currentIndex}
      completedIndices={completedIndices}
      onSelectSection={handleSelectSection}
      onNextSection={handleNextSection}
      onPreviousSection={handlePreviousSection}
      onCompleteLesson={handleCompleteLesson}
      onBackToCurriculum={() => onNavigate({ type: 'general_pathology' })}
      fontSize={fontSize}
      containerId="segmented-immune-container"
    >
      {/* SECTION 1: START HERE */}
      {currentSection.id === 'imm-start-here' && (
        <div className="space-y-5">
          <div className="bg-teal-50 border-l-4 border-teal-800 p-5 rounded-r-2xl space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-100/80 px-2.5 py-0.5 rounded-full font-mono-code">
              Fundamental Immunological Principle
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              1. Start Here: The Two Arms of Host Defense
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
              The immune system has evolved as a sophisticated network of cells, tissues, and soluble molecules designed to distinguish &quot;self&quot; from &quot;non-self&quot; and protect the animal host from invading microbes and neoplastic transformations. When functioning normally, it eliminates pathogens while sparing self-tissues through immunologic tolerance. When deregulated, it causes severe collateral tissue damage through <strong>hypersensitivity</strong>, attacks its own tissues via <strong>autoimmunity</strong>, or leaves the host vulnerable to fatal infections through <strong>immunodeficiency</strong>.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-serif-academic">
              Spectrum of Immunopathology
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-serif-academic block">
                  Hypersensitivity
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Excessive or inappropriate immune responses to environmental antigens (allergens) or microbes, damaging bystander tissues.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-rose-900 font-serif-academic block">
                  Autoimmunity
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Breakdown in central or peripheral self-tolerance, leading to humoral autoantibodies or autoreactive T-cell destruction of self-tissues.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-amber-900 font-serif-academic block">
                  Immunodeficiency
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Congenital (genetic) or acquired defects in immune elements, resulting in recurrent, severe, or opportunistic infections.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: OVERVIEW OF THE IMMUNE SYSTEM */}
      {currentSection.id === 'imm-overview' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              2. Overview of the Immune System
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Host immunity is organized into two cooperating branches: <strong>Innate Immunity</strong> (immediate, non-specific, lacking memory) and <strong>Adaptive Immunity</strong> (delayed, antigen-specific, exhibiting immunologic memory).
            </p>

            {/* Illustration 1: Innate vs Adaptive */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-2">
              <img
                src="https://lh3.googleusercontent.com/d/1RDet3GqpFN-Rxe8-DAagUVbG7En3welf"
                alt="Illustration comparing innate and adaptive immunity in animals"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Comparative mechanisms, cell types, and kinetics of the innate and adaptive immune branches.
              </div>
            </div>

            {/* Illustration 2: Lymph node and spleen architecture */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1ubzCkAQ_Zjb-vq4yRqdTQQhIcxK3U1j3"
                alt="Illustration of lymph node and spleen architecture"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Microarchitecture of secondary lymphoid organs: lymph node cortex (B follicles), paracortex (T cell zone), and splenic red/white pulp.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: CELLS OF THE IMMUNE SYSTEM */}
      {currentSection.id === 'imm-cells' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              3. Cells of the Immune System
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              The cellular effectors and regulators of immunity include:
            </p>

            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
              <li>
                <strong>T Lymphocytes:</strong> Mature in the thymus; express TCRs. Subdivided into <strong>CD4+ Helper T cells</strong> (Th1: IFN-&gamma; cell-mediated; Th2: IL-4/IL-5 humoral/IgE; Th17: IL-17 neutrophil recruitment; Treg: IL-10/TGF-&beta; immune suppression) and <strong>CD8+ Cytotoxic T Lymphocytes (CTLs)</strong> (induce apoptosis in virus-infected and neoplastic cells via perforin/granzymes).
              </li>
              <li>
                <strong>B Lymphocytes &amp; Plasma Cells:</strong> Mature in bone marrow (or bursa of Fabricius in birds); recognize native antigens via surface BCRs and differentiate into antibody-secreting plasma cells.
              </li>
              <li>
                <strong>Natural Killer (NK) Cells:</strong> Large granular lymphocytes of innate immunity that recognize cells lacking MHC Class I (&quot;missing-self&quot; hypothesis) or antibody-coated targets (ADCC).
              </li>
              <li>
                <strong>Dendritic Cells (DCs):</strong> Professional antigen-presenting cells (APCs) with high levels of MHC Class II and co-stimulatory molecules (CD80/CD86); capture peripheral antigens and migrate to regional lymph nodes to activate naive T cells.
              </li>
              <li>
                <strong>Macrophages:</strong> Phagocytic cells that present antigens, clean cellular debris, and produce cytokines.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* SECTION 4: TISSUES OF THE IMMUNE SYSTEM */}
      {currentSection.id === 'imm-tissues' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              4. Tissues of the Immune System
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Lymphoid tissues are anatomically segregated into primary (generative) and secondary (peripheral) organs:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Primary (Generative) Lymphoid Organs
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-sans leading-relaxed">
                  <li><strong>Bone Marrow:</strong> Site of hematopoiesis and initial B-lymphocyte maturation (mammals).</li>
                  <li><strong>Thymus:</strong> Site of T-lymphocyte maturation and negative/positive selection to eliminate self-reactive clones. Undergoes physiological involution after puberty.</li>
                  <li><strong>Bursa of Fabricius:</strong> Avian-specific primary organ for B-lymphocyte differentiation.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Secondary (Peripheral) Lymphoid Organs
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-sans leading-relaxed">
                  <li><strong>Lymph Nodes:</strong> Encapsulated filters along lymphatic channels where naive lymphocytes encounter lymph-borne antigens.</li>
                  <li><strong>Spleen:</strong> Red pulp filters blood and removes senescent erythrocytes; white pulp (PALS and lymphoid follicles) monitors blood-borne pathogens.</li>
                  <li><strong>Mucosa-Associated Lymphoid Tissue (MALT):</strong> Peyer&apos;s patches, tonsils, bronchus-associated lymphoid tissue (BALT).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: CYTOKINES */}
      {currentSection.id === 'imm-cytokines' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              5. Cytokines: Messengers of the Immune System
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Cytokines are soluble proteins or glycoproteins that act as chemical signals mediating communication between immune and somatic cells. They act in an autocrine, paracrine, or endocrine fashion, exhibiting pleiotropy (one cytokine having multiple actions) and redundancy (multiple cytokines sharing similar effects).
            </p>

            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
              <li><strong>Interleukins (ILs):</strong> Mediate leukocyte communication (IL-2: T-cell growth factor; IL-4: IgE class switching; IL-10: immunosuppression).</li>
              <li><strong>Interferons (IFNs):</strong> Type I (IFN-&alpha;, IFN-&beta;) induce anti-viral cellular state; Type II (IFN-&gamma;) is the master activator of macrophages.</li>
              <li><strong>Tumor Necrosis Factor (TNF-&alpha;):</strong> Induces acute inflammation, endothelial activation, and systemic acute-phase reactions.</li>
              <li><strong>Chemokines:</strong> Low-molecular-weight chemoattractants (IL-8 / CXCL8, CCL2 / MCP-1) guiding leukocyte trafficking.</li>
            </ul>
          </div>
        </div>
      )}

      {/* SECTION 6: MHC */}
      {currentSection.id === 'imm-mhc' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              6. Major Histocompatibility Complex (MHC)
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              The MHC is a cluster of highly polymorphic genes encoding cell surface glycoproteins whose physiological role is to present peptide fragments to T lymphocytes (MHC restriction).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  MHC Class I
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Expressed on virtually all nucleated cells. Presents <strong>endogenous (cytosolic) peptides</strong> (e.g., viral proteins, intracellular bacteria, mutated tumor antigens) processed by the proteasome and TAP transporter to <strong>CD8+ Cytotoxic T Cells</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  MHC Class II
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Restricted to professional APCs (dendritic cells, macrophages, B lymphocytes). Presents <strong>exogenous peptides</strong> internalized via endocytosis/phagocytosis into endosomes and cleaved by lysosomal proteases to <strong>CD4+ Helper T Cells</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 7: HYPERSENSITIVITY REACTIONS */}
      {currentSection.id === 'imm-hypersensitivity' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              7. Hypersensitivity Reactions
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              The classic Gell and Coombs classification subdivides immunologic tissue injury into four mechanistic categories:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-rose-950 font-serif-academic">
                  Type I: Immediate (IgE-Mediated)
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Allergen cross-links IgE on sensitized mast cells/basophils &rarr; histamine and leukotriene release. <em>Examples: Anaphylaxis, flea allergy dermatitis, feline asthma, urticaria.</em>
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-indigo-950 font-serif-academic">
                  Type II: Antibody-Mediated (Cytotoxic)
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  IgG or IgM binds surface antigens on cells/tissues &rarr; phagocytosis, complement lysis (MAC), or ADCC. <em>Examples: Canine IMHA, neonatal isoerythrolysis (NIE), pemphigus foliaceus, myasthenia gravis.</em>
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-amber-950 font-serif-academic">
                  Type III: Immune Complex-Mediated
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Circulating antigen-antibody complexes deposit in microvascular walls &rarr; complement activation and neutrophil infiltration. <em>Examples: Equine purpura hemorrhagica, immune-complex glomerulonephritis, systemic lupus erythematosus (SLE).</em>
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <span className="text-xs font-bold text-teal-950 font-serif-academic">
                  Type IV: Cell-Mediated (Delayed)
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Sensitized CD4+ Th1 cells release IFN-&gamma; to recruit macrophages, or CD8+ CTLs directly lyse cells (48–72 hr). <em>Examples: Tuberculin skin test, contact allergy (poison ivy), granulomas in Johne&apos;s disease.</em>
                </p>
              </div>
            </div>

            {/* Illustration 3: Hypersensitivity types */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1RQkXbrhxX08-Ks4e_iWjeXN7zuSqSHMe"
                alt="Illustration of the four types of hypersensitivity reactions"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Pathomechanisms of Types I, II, III, and IV hypersensitivity reactions in veterinary medicine.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 8: AUTOIMMUNE DISEASES */}
      {currentSection.id === 'imm-autoimmune' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              8. Autoimmune Diseases
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Autoimmunity results from a breakdown in the mechanisms of self-tolerance (central thymic deletion, peripheral anergy, or regulatory T cell failure). Clinical veterinary examples:
            </p>

            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-sans leading-relaxed">
              <li>
                <strong>Immune-Mediated Hemolytic Anemia (IMHA):</strong> Most common autoimmune disease of dogs. Anti-erythrocyte autoantibodies (IgG/IgM) cause extravascular hemolysis in the spleen and intravascular complement lysis. Marked by spherocytes, positive Coombs test, autoagglutination, and high risk of pulmonary thromboembolism.
              </li>
              <li>
                <strong>Systemic Lupus Erythematosus (SLE):</strong> Prototype systemic autoimmune disease characterized by antinuclear antibodies (ANA) targeting nuclear chromatin and DNA, generating circulating immune complexes causing polyarthritis, glomerulonephritis, dermatitis, and thrombocytopenia.
              </li>
              <li>
                <strong>Pemphigus Foliaceus:</strong> Autoantibodies target desmocollin-1 / desmoglein-1, leading to loss of cohesion between epidermal keratinocytes (acantholysis) and subcorneal pustules on nasal planum, footpads, and pinnae.
              </li>
            </ul>

            {/* Illustration 4: IMHA mechanisms */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/1s1_0UvwzJaABTfTkrey1ftNEPxiWsm2l"
                alt="Illustration of immune-mediated hemolytic anemia mechanisms"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Pathophysiology of canine IMHA: IgG opsonization, partial macrophage phagocytosis yielding spherocytes, complement-mediated intravascular lysis, and agglutination.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 9: IMMUNOLOGIC DEFICIENCY SYNDROMES */}
      {currentSection.id === 'imm-immunodeficiency' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              9. Immunologic Deficiency Syndromes
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Immunodeficiencies are categorized as primary (congenital / genetic) or secondary (acquired):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-teal-900 font-serif-academic">
                  Primary Immunodeficiencies
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-sans leading-relaxed">
                  <li><strong>Severe Combined Immunodeficiency (SCID):</strong> Autosomal recessive defect in DNA-PKcs in Arabian foals or IL2RG in Basset Hounds, leading to total absence of functional T and B cells, severe thymic hypoplasia, and fatal adenoviral/Pneumocystis infections.</li>
                  <li><strong>Bovine Leukocyte Adhesion Deficiency (BLAD):</strong> CD18 integrin defect in Holstein calves preventing leukocyte extravasation; marked by profound neutrophilia and fatal bacterial infections.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <h4 className="text-sm font-bold text-rose-950 font-serif-academic">
                  Secondary Immunodeficiencies
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-sans leading-relaxed">
                  <li><strong>Viral Infections:</strong> Feline Immunodeficiency Virus (FIV - CD4+ T cell depletion), Canine Distemper Virus (lymphoid necrosis), Bovine Viral Diarrhea Virus (BVDV - mucosal disease and immunosuppression).</li>
                  <li><strong>Iatrogenic / Metabolic:</strong> Prolonged corticosteroid therapy, chemotherapy, protein-calorie malnutrition, chronic renal failure.</li>
                </ul>
              </div>
            </div>

            {/* Illustration 5: Primary vs Secondary Immunodeficiency */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mt-3">
              <img
                src="https://lh3.googleusercontent.com/d/155Rvd3raU5SiigDDVneMYRI33J02K3Xu"
                alt="Illustration comparing primary and secondary immunodeficiency"
                className="w-full h-auto object-cover max-h-96"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-sans">
                <strong className="text-slate-800">Diagram:</strong> Pathophysiology comparing genetic developmental arrest of lymphocytes (SCID) with retroviral acquired lymphoid depletion (FIV).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 10: AMYLOIDOSIS */}
      {currentSection.id === 'imm-amyloidosis' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-academic">
              10. Amyloidosis
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Amyloidosis refers to a group of biochemical diseases characterized by the extracellular deposition of insoluble, abnormal, proteinaceous fibrillar material with a cross-beta pleated sheet configuration, disrupting normal tissue architecture and function.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-mono-code">
                  1. Reactive Systemic (Secondary) Amyloidosis (AA Amyloid)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  The most common form in veterinary medicine. Derived from <strong>Serum Amyloid A (SAA)</strong>, an acute-phase apolipoprotein produced in massive quantities by the liver in response to IL-1, TNF, and IL-6 during chronic suppurative or granulomatous inflammation. Deposits preferentially in renal glomeruli (causing proteinuria) and hepatic sinusoids.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-mono-code">
                  2. Primary Amyloidosis (AL Amyloid)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Derived from monoclonal immunoglobulin light chains synthesized by neoplastic plasma cells in multiple myeloma or extramedullary plasmacytomas.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-900 font-mono-code">
                  3. Diagnostic Staining (Congo Red)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Amyloid appears as amorphous, eosinophilic, hyaline extracellular deposits on H&amp;E. Definitive diagnosis requires <strong>Congo red stain</strong>, which imparts a salmon-pink color under standard light and exhibits pathognomonic <strong>apple-green birefringence</strong> under cross-polarized light microscopy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 11: PRACTICAL PATHOLOGY GALLERY */}
      {currentSection.id === 'imm-practical-gallery' && <ImmuneGallery />}

      {/* SECTION 12: TEST YOURSELF */}
      {currentSection.id === 'imm-test-yourself' && <ImmuneQuiz />}

      {/* SECTION 13: FURTHER LEARNING */}
      {currentSection.id === 'imm-further-learning' && <ImmuneVideos />}
    </SegmentedLessonLayout>
  );
};
