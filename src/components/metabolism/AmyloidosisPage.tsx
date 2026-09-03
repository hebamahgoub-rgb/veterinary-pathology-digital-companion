import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import { MetabolismVideoCard } from './MetabolismVideoCard';
import { SegmentedLessonLayout, LessonSectionItem } from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AmyloidosisPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const AMYLOIDOSIS_SECTIONS: LessonSectionItem[] = [
  { id: 'definition-concept', title: 'A. Definition & Concept', shortTitle: 'Definition' },
  { id: 'video-learning', title: 'Video Learning & Microlearning', shortTitle: 'Videos' },
  { id: 'structural-basis', title: 'B. Structural Basis & Properties', shortTitle: 'Structure' },
  { id: 'classification-pathogenesis', title: 'C. Classification & Pathogenesis', shortTitle: 'Pathogenesis' },
  { id: 'target-organs', title: 'D. Common Target Organs', shortTitle: 'Target Organs' },
  { id: 'morphological-features', title: 'E. Morphological Features', shortTitle: 'Morphology' },
  { id: 'histochemical-confirmation', title: 'F. Histochemical & Optical Confirmation', shortTitle: 'Stains & Optics' },
  { id: 'functional-consequences', title: 'G. Functional & Clinical Consequences', shortTitle: 'Clinical Effects' },
  { id: 'differential-diagnosis', title: 'H. Differential Diagnosis', shortTitle: 'Differential' },
  { id: 'morphology-focus-canine', title: 'I. Morphology Focus: Canine Kidney', shortTitle: 'Canine Kidney' },
  { id: 'summary-knowledge-check', title: 'Summary & Knowledge Check', shortTitle: 'Review' },
];

export const AmyloidosisPage: React.FC<AmyloidosisPageProps> = ({
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [completedSections, setCompletedSections] = useState<number[]>([0]);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const toggleDetail = (key: string) => {
    setOpenDetails((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectSection = (index: number) => {
    setCurrentSectionIndex(index);
    setCompletedSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  const handleNextSection = () => {
    if (currentSectionIndex < AMYLOIDOSIS_SECTIONS.length - 1) {
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

  const fontClass =
    fontSize === 'scholar'
      ? 'font-serif-academic text-base sm:text-lg'
      : fontSize === 'large'
      ? 'text-base sm:text-lg'
      : 'text-sm sm:text-base';

  const renderCurrentSegment = () => {
    switch (currentSectionIndex) {
      case 0:
        // Segment 1: A. Definition
        return (
          <section
            id="segment-definition"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                A. Definition
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Amyloidosis is a disease group characterized by the extracellular deposition of <strong>amyloid</strong>—a pathological, insoluble proteinaceous substance formed by non-branching fibrillar aggregates of misfolded proteins. Progressive extracellular deposition causes pressure atrophy and compression breakdown of adjacent parenchymal cells.
              </p>
            </div>

            {/* Figure 1: What amyloid is */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/1MEzyrbxW7wnS6HUtD0MGNjXifAqmE0dx"
              alt="What amyloid is"
              caption="Amyloid is an extracellular deposit of misfolded proteins arranged in non-branching fibrils with a cross-β-sheet structure. These rigid fibrils accumulate outside cells and distort normal tissue architecture."
            />
          </section>
        );

      case 1:
        // Segment 2: Video Learning Section
        return (
          <section
            id="segment-video-learning"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Video Learning
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Choose the complete lesson for a fuller overview, or use the three focused 60-second microlearning videos for rapid review and retrieval practice.
              </p>
            </div>

            {/* Featured Video */}
            <div className="max-w-2xl mx-auto">
              <MetabolismVideoCard
                videoId="839UcPB0YHA"
                title="Amyloidosis & Protein Misfolding Explained"
                description="A fuller overview of amyloid formation, extracellular deposition, classification, organ distribution, morphology, and diagnostic significance."
                label="Complete lesson"
              />
            </div>

            {/* Microlearning Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <MetabolismVideoCard
                videoId="MhWTwe0VmeI"
                title="What Exactly Is Amyloid?"
                description="Rapid review of the core concept: misfolded protein, fibril formation, extracellular deposition, and structural basis."
                label="60-second microlearning"
              />
              <MetabolismVideoCard
                videoId="-TessFhJD4g"
                title="Why Proteins Misfold in Amyloidosis"
                description="Focused review of how normally soluble proteins become structurally unstable, misfold, and acquire aggregation-prone conformations."
                label="60-second microlearning"
              />
              <MetabolismVideoCard
                videoId="4tancbY-8r4"
                title="Why Amyloid Glows Apple-Green"
                description="Focused diagnostic review of Congo red staining and the characteristic birefringence of amyloid under polarized light."
                label="60-second microlearning"
              />
            </div>
          </section>
        );

      case 2:
        // Segment 3: B. Structural Basis & Biophysical Properties
        return (
          <section
            id="segment-structural-basis"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              B. Structural Basis &amp; Biophysical Properties
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Protein Misfolding
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Soluble native proteins undergo conformational changes into insoluble, misfolded monomers.
                </p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Beta-Pleated Sheet Structure
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Misfolded monomers aggregate into antiparallel β-pleated sheets, giving amyloid its uniform physical properties.
                </p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Non-Branching Fibrils
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assembles into rigid, unbranched 7–10 nm ultrastructural fibrils resistant to enzymatic proteolysis.
                </p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Extracellular Accumulation
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Progressively accumulates in extracellular interstitial matrix, basement membranes, and vessel walls.
                </p>
              </div>
            </div>
          </section>
        );

      case 3:
        // Segment 4: C. Classification and Pathogenesis
        return (
          <section
            id="segment-classification-pathogenesis"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              C. Classification and Pathogenesis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-1 font-sans">
                  1. Reactive Systemic Amyloidosis (AA)
                </h3>
                <p className="text-xs text-slate-600 mb-2">The most common form encountered in domestic animals (dogs, cattle, cats, horses).</p>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li><strong>Precursor Protein:</strong> Serum Amyloid A (SAA), an acute-phase apolipoprotein synthesized by the liver.</li>
                  <li><strong>Trigger:</strong> Chronic inflammatory, infectious, or neoplastic diseases (e.g., chronic pyoderma, osteomyelitis, tuberculosis).</li>
                  <li><strong>Sequence:</strong> Persistent inflammation → elevated IL-1/IL-6/TNF-α → massive hepatic SAA synthesis → incomplete proteolysis → AA fibril deposition in multiple organs.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-1 font-sans">
                  2. Localized Amyloidosis
                </h3>
                <p className="text-xs text-slate-600 mb-2">Amyloid deposition confined to a single organ or tissue type without systemic involvement.</p>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li><strong>Islet Amyloidosis (IAPP / Amylin):</strong> Deposition in pancreatic islets of Langerhans in diabetic cats, derived from Islet Amyloid Polypeptide co-secreted with insulin.</li>
                  <li><strong>Endocrine-Associated:</strong> Amyloid stroma within thyroid medullary carcinomas or pituitary adenomas.</li>
                  <li><strong>Nasal / Cutaneous:</strong> Localized amyloid nodules in the nasal mucosa of horses or skin of dogs.</li>
                </ul>
              </div>
            </div>

            {/* Figures 2 & 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1_1Snn7LZ43QXex04_nlXDL2gQJEvFwyJ"
                alt="Major amyloid types in veterinary species"
                caption="Major amyloid types in veterinary species. AA amyloid arises from Serum Amyloid A during chronic inflammation; AL amyloid from immunoglobulin light chains; islet amyloid from islet amyloid polypeptide in cats; localized forms occur in endocrine organs, nerves, or skin."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1yjA77y6XRP62GKrNV10iLo1h_Vtz349O"
                alt="Pathogenesis of reactive systemic amyloidosis"
                caption="Pathogenesis of reactive systemic (AA) amyloidosis. Persistent inflammation increases Serum Amyloid A, but deposition requires genetic susceptibility and sufficient duration."
              />
            </div>

            <div className="p-3.5 rounded-xl border border-dashed border-teal-300 bg-teal-50/50 text-xs text-teal-950 leading-relaxed">
              <strong>Enrichment Note: Hereditary &amp; Familial Amyloidosis:</strong> Specific breeds exhibit familial reactive systemic AA amyloidosis without preceding chronic inflammation, including Shar-Pei dogs (Shar-Pei fever syndrome) and Abyssinian / Siamese cats, predisposing them to early-onset severe renal or hepatic amyloidosis.
            </div>
          </section>
        );

      case 4:
        // Segment 5: D. Common Target Organs
        return (
          <section
            id="segment-target-organs"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              D. Common Target Organs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Kidney
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Primary site in dogs and cattle. Deposited in glomerular basement membranes, mesangium, and medullary interstitium.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Liver
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Primary site in Shar-Pei dogs and cats. Deposited in the Space of Disse, compressing hepatic cords.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Spleen
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deposited in follicular red pulp (sago spleen) or diffusely throughout red pulp sinusoidal walls (lardaceous spleen).
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  GI &amp; Endocrine
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deposited in mucosal lamina propria microvessels, adrenal cortex, and pancreatic islets.
                </p>
              </div>
            </div>

            {/* Figure 4 */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/1HvSNuD_tsN6GNyUhiL_Y62SRSMzk7ohK"
              alt="Common organ distribution of amyloid"
              caption="Common organ distribution of amyloid. Kidney, liver, and spleen are frequently affected. Glomerular deposition is clinically important because it disrupts filtration and causes protein-losing nephropathy."
            />
          </section>
        );

      case 5:
        // Segment 6: E. Morphological Features
        return (
          <section
            id="segment-morphological-features"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              E. Morphological Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Gross Morphology</h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li><strong>Organ Size:</strong> Diffusely enlarged, pale, firm, and waxy organ (renomegaly, hepatomegaly, splenomegaly).</li>
                  <li><strong>Consistency:</strong> Firm, rubbery, or doughy; friable in severe feline hepatic cases (prone to rupture).</li>
                  <li><strong>Color:</strong> Pale tan, semi-translucent, greasy, or waxy appearance.</li>
                  <li><strong>Gross Iodine Reaction:</strong> Lugol's iodine applied to cut surface stains amyloid foci dark brown-black (reaction enhanced by dilute sulfuric acid).</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Microscopic Morphology (H&amp;E)</h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li><strong>Location:</strong> Strictly <strong>extracellular</strong> deposition.</li>
                  <li><strong>Appearance on H&amp;E:</strong> Homogeneous, amorphous, acellular, light pink (eosinophilic) material.</li>
                  <li><strong>Glomerular Pattern:</strong> Expands glomerular mesangium, thickens capillary basement membranes, and obliterates capillary loops.</li>
                  <li><strong>Interstitial Pattern:</strong> Expands perivascular spaces and depresses adjacent parenchymal cell cords (pressure atrophy).</li>
                </ul>
              </div>
            </div>

            {/* Figures 5 & 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/13kiucv-4ylKwk_EPgcVjQR4gudVHCDLG"
                alt="Gross morphology of amyloid deposition in the spleen"
                caption="Gross appearance of amyloid deposition. Affected organs become pale, firm, and waxy. In the spleen, amyloid may accentuate follicles (“sago spleen”) or diffusely expand red pulp (“lardaceous spleen”)."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1JFU1fCTpQLffWxFK_KXsZFRV0Mz6xNeT"
                alt="Microscopic morphology of amyloid on H&E and Congo red"
                caption="Microscopic features of amyloid. On H&E, amyloid appears as extracellular eosinophilic, amorphous to finely fibrillar material. Congo red staining with apple-green birefringence under polarized light is the classic confirmation."
              />
            </div>
          </section>
        );

      case 6:
        // Segment 7: F. Histochemical & Optical Confirmation
        return (
          <section
            id="segment-histochemical-confirmation"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              F. Histochemical &amp; Optical Confirmation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Because light pink amorphous material on H&amp;E can mimic hyaline or collagen, histochemical confirmation is mandatory:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl border border-slate-200">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Congo Red Stain
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stains amyloid dull orange-red under standard brightfield light microscopy.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl border border-slate-200">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Polarized Light Microscopy
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Congo Red-stained sections examined under cross-polarized light display pathognomonic apple-green birefringence.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl border border-slate-200">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Thioflavin T / S
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fluorescent dyes binding β-pleated sheets, exhibiting bright yellow-green fluorescence under UV light.
                </p>
              </div>
            </div>

            {/* Figures 7 & 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1faK9iVcEeCYPvXXE_WRJ30QZjY6CdKYi"
                alt="Congo red special stain in context"
                caption="High-yield special stains for metabolic and matrix disturbances. Congo red with polarized light confirms amyloid and distinguishes it from other eosinophilic deposits."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1_PLJFcf8r9S5cjCtzSivB9sBKKh4ljhO"
                alt="Diagnostic workflow for identifying amyloid"
                caption="Practical diagnostic workflow for deposits. Identification of amyloid requires description, classification, Congo red staining, integration of species and clinical context, and assessment of functional significance."
              />
            </div>
          </section>
        );

      case 7:
        // Segment 8: G. Functional & Clinical Consequences
        return (
          <section
            id="segment-functional-consequences"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              G. Functional &amp; Clinical Consequences
            </h2>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>The clinical manifestations of amyloidosis depend directly on the primary organ involved and the anatomical site of deposition:</p>
              <ul className="space-y-2 list-disc pl-4 pt-1">
                <li><strong>Renal Glomerular Amyloidosis:</strong> Destruction of the glomerular filtration barrier leads to severe <strong>proteinuria</strong>, hypoalbuminemia, generalized edema (nephrotic syndrome), and end-stage renal failure.</li>
                <li><strong>Hepatic Amyloidosis:</strong> Compression of hepatocytes in the Space of Disse causes hepatic failure, icterus, and increased risk of fatal intra-abdominal hemorrhage due to liver fracture.</li>
                <li><strong>Pancreatic Islet Amyloidosis:</strong> Progressive destruction of insulin-producing beta cells leads to overt type II diabetes mellitus in cats.</li>
              </ul>
            </div>

            {/* Figure 9 */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/1FaeFWi7313oTwsRI7zSGI9Q7C9NteYgf"
              alt="Reactive renal amyloidosis in a dog"
              caption="Reactive renal amyloidosis. Chronic inflammation leads to AA amyloid deposition in glomeruli, producing protein-losing nephropathy with proteinuria and hypoalbuminaemia."
            />
          </section>
        );

      case 8:
        // Segment 9: H. Differential Diagnosis Table
        return (
          <section
            id="segment-differential-diagnosis"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              H. Differential Diagnosis Table
            </h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[620px] border-collapse text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300">
                    <th className="p-2.5 font-bold text-slate-800">Material</th>
                    <th className="p-2.5 font-bold text-slate-800">Distribution</th>
                    <th className="p-2.5 font-bold text-slate-800">H&amp;E Appearance</th>
                    <th className="p-2.5 font-bold text-slate-800">Congo Red Reaction</th>
                    <th className="p-2.5 font-bold text-slate-800">Polarized Light Finding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-amber-900">Amyloid</td>
                    <td className="p-2.5 text-slate-700">Extracellular</td>
                    <td className="p-2.5 text-slate-700">Amorphous, pale pink</td>
                    <td className="p-2.5 text-rose-700 font-semibold">Positive (Orange-Red)</td>
                    <td className="p-2.5 text-emerald-800 font-semibold">Apple-green birefringence</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-800">Hyaline (Intracellular)</td>
                    <td className="p-2.5 text-slate-700">Intracellular</td>
                    <td className="p-2.5 text-slate-700">Homogeneous, bright pink droplets</td>
                    <td className="p-2.5 text-slate-500">Negative</td>
                    <td className="p-2.5 text-slate-500">No birefringence</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-800">Dense Collagen / Scar</td>
                    <td className="p-2.5 text-slate-700">Extracellular</td>
                    <td className="p-2.5 text-slate-700">Bundled, fibrillar pink matrix</td>
                    <td className="p-2.5 text-slate-500">Negative (or light orange)</td>
                    <td className="p-2.5 text-slate-500">Pale white/yellow birefringence</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-800">Fibrin Deposits</td>
                    <td className="p-2.5 text-slate-700">Extracellular</td>
                    <td className="p-2.5 text-slate-700">Fibrillar or mesh-like dark pink</td>
                    <td className="p-2.5 text-slate-500">Negative</td>
                    <td className="p-2.5 text-slate-500">No green birefringence</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-800">Basement Membrane Thickening</td>
                    <td className="p-2.5 text-slate-700">Extracellular</td>
                    <td className="p-2.5 text-slate-700">Linear pink capillary outline</td>
                    <td className="p-2.5 text-slate-500">Negative</td>
                    <td className="p-2.5 text-slate-500">No green birefringence</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Figure 10 */}
            <MetabolismFigure
              src="https://lh3.googleusercontent.com/d/1gxZ4hZ27metPfBvfq06x9ca4zvf4mS3Z"
              alt="Differential diagnosis of eosinophilic extracellular material"
              caption="Differentiating amyloid from other eosinophilic materials. Collagen, fibrin, basement membrane, and plasma proteins may mimic amyloid on H&E. Location and Congo red birefringence are essential for confirmation."
            />
          </section>
        );

      case 9:
        // Segment 10: I. Morphology Focus: Canine Renal Amyloidosis
        return (
          <section
            id="segment-morphology-focus-canine"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
              Morphology Focus: Canine Renal Amyloidosis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              <div className="md:col-span-1">
                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/1GFAZc4wJ2m2CVkE3cQYEF1NMzHX2rYaE"
                  alt="Canine kidney with severe glomerular amyloid deposition showing green birefringence after Congo red staining under polarized light."
                  caption="Severe canine renal glomerular amyloidosis. Congo-red-positive deposits exhibit green birefringence under polarized light. Figure 4F from the Atlas of Renal Lesions in Proteinuric Dogs."
                  citation="Atlas of Renal Lesions in Proteinuric Dogs, edited by Rachel Cianciolo, The Ohio State University."
                  sourceUrl="https://ohiostate.pressbooks.pub/vetrenalpathatlas/chapter/chapter-1/"
                  sourceTitle="Atlas of Renal Lesions"
                  licenseText="CC BY-NC-ND 4.0"
                  licenseUrl="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 font-sans">
                  Severe Glomerular Amyloidosis in a Dog
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Congo-red-stained renal tissue viewed under polarized light demonstrates green birefringence within severely affected glomeruli. This optical property results from the ordered binding of Congo red molecules to the beta-pleated sheet structure of amyloid fibrils. In advanced disease, amyloid can replace large portions of the glomerular tuft, compress capillary lumina, and impair glomerular filtration.
                </p>
                <div className="p-3 bg-teal-50/70 border border-teal-200 rounded-xl">
                  <strong className="text-teal-950 text-xs sm:text-sm block font-bold mb-1">
                    Veterinary relevance:
                  </strong>
                  <p className="text-xs text-teal-900 leading-relaxed">
                    The kidney is a major site of amyloid deposition in dogs. Glomerular involvement commonly produces marked proteinuria and may progress to protein-losing nephropathy and chronic kidney disease. Reactive AA amyloidosis can occur in association with persistent inflammatory disease, while familial amyloidosis is recognized in predisposed breeds, including the Chinese Shar-Pei.
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-bold text-teal-950 pt-1">
                  Morphological diagnosis: Severe glomerular renal amyloidosis, canine.
                </p>
              </div>
            </div>
          </section>
        );

      case 10:
        // Segment 11: Summary & Knowledge Check
        return (
          <section
            id="segment-summary-knowledge-check"
            className="space-y-4 animate-in fade-in duration-200"
          >
            <div className="bg-teal-50/80 border-l-4 border-teal-700 border border-teal-200 rounded-2xl p-4 sm:p-5 shadow-xs">
              <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-2">
                Key Takeaways
              </h3>
              <ul className="text-xs sm:text-sm text-teal-900 space-y-1.5 list-disc pl-5">
                <li>Amyloidosis is the extracellular accumulation of misfolded β-pleated sheet protein fibrils.</li>
                <li>Reactive systemic AA amyloidosis is the main veterinary form, secondary to chronic inflammatory diseases elevating SAA.</li>
                <li>Definitively confirmed by Congo Red staining demonstrating pathognomonic apple-green birefringence under polarized light.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                Knowledge Check
              </h3>

              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('am_kc_1')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>1. What precursor protein is responsible for reactive systemic (AA) amyloidosis in domestic animals?</span>
                    {openDetails['am_kc_1'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['am_kc_1'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Serum Amyloid A (SAA), an acute-phase apolipoprotein produced by the liver during chronic inflammatory states.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('am_kc_2')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>2. What is the pathognomonic optical finding when Congo Red-stained amyloid is viewed under cross-polarized light?</span>
                    {openDetails['am_kc_2'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['am_kc_2'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Apple-green birefringence.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('am_kc_3')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900"
                  >
                    <span>3. What major clinical syndrome results from glomerular renal amyloidosis in dogs?</span>
                    {openDetails['am_kc_3'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openDetails['am_kc_3'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Nephrotic syndrome (characterized by severe proteinuria, hypoalbuminemia, hypercholesterolemia, and generalized edema) progressing to renal failure.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <SegmentedLessonLayout
      lessonTitle="Amyloidosis"
      header={
        <MetabolismHeader
          title="Amyloidosis"
          subtitle="Pathological extracellular accumulation of abnormally folded fibrillar proteins leading to organ dysfunction."
          category="General Pathology"
          lessonId="amyloidosis"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={AMYLOIDOSIS_SECTIONS}
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
          previous={{ id: 'protein-accumulation-hyaline', title: 'Protein Accumulations & Hyaline Change' }}
          next={{ id: 'mucin-myxoid-change', title: 'Mucin and Myxoid Change' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
