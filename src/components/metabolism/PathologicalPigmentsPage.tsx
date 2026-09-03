import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PathologicalPigmentsPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const PIGMENTS_SECTIONS: LessonSectionItem[] = [
  {
    id: 'classification-melanin',
    title: 'Overview & Melanin',
    shortLabel: 'Melanin',
  },
  {
    id: 'lipofuscin-ceroid',
    title: 'Lipofuscin & Ceroid',
    shortLabel: 'Lipofuscin',
  },
  {
    id: 'hemosiderin',
    title: 'Hemosiderin & Iron',
    shortLabel: 'Hemosiderin',
  },
  {
    id: 'bilirubin-hematoidin',
    title: 'Bilirubin & Hematoidin',
    shortLabel: 'Bilirubin',
  },
  {
    id: 'exogenous-pigments',
    title: 'Exogenous Pigments (Anthracosis & Carotenoids)',
    shortLabel: 'Exogenous Pigments',
  },
  {
    id: 'differentiation-table',
    title: 'Pigment Identification & Differentiation Table',
    shortLabel: 'Summary Table',
  },
  {
    id: 'practical-challenge',
    title: 'Practical Pigment Identification Challenge',
    shortLabel: 'Case Challenge',
  },
  {
    id: 'summary-quiz',
    title: 'Summary & Knowledge Check',
    shortLabel: 'Knowledge Check',
  },
];

export const PathologicalPigmentsPage: React.FC<PathologicalPigmentsPageProps> = ({
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
    if (currentSectionIndex < PIGMENTS_SECTIONS.length - 1) {
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
        // Segment 1: Overview & Melanin
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Classification Overview */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="border-l-4 border-teal-700 pl-3.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                  Classification Overview
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Pigments are colored substances (either normal or abnormal) that accumulate within cells or extracellular matrix. Pathological pigments are classified according to their origin into <strong>endogenous pigments</strong> (synthesized within the host organism) and <strong>exogenous pigments</strong> (introduced into the body from the external environment).
                </p>
              </div>
            </section>

            {/* Endogenous: 1. Melanin */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                1. Melanin
              </h2>
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Brown-black, membrane-bound pigment synthesized by melanocytes from tyrosine via tyrosinase. Functions normally to absorb ultraviolet light.
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                  <li><strong>Normal vs. Pathological:</strong> Present in skin, hair, and irises. Pathological forms include hyperpigmentation (chronic inflammation), congenital <strong>melanosis</strong> (incidental dark brown patches in lungs, meninges, or aorta of calves/pigs), and melanocytic neoplasms (melanoma).</li>
                  <li><strong>Staining &amp; Bleaching:</strong> Confirmed using Fontana-Masson stain (black). Can be bleached using melanin-bleaching agents (hydrogen peroxide / potassium permanganate) to differentiate from hemosiderin or carbon.</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <MetabolismFigure
                    src="https://lh3.googleusercontent.com/d/1thHOkO9JTezP_hCv5jVfKh5YIiHjJtLl"
                    alt="Microscopic melanin pigment in basal epidermis"
                    caption="Melanin pigment in the basal epidermis. Fontana-Masson stain highlights normal melanocytic distribution."
                  />
                  <MetabolismFigure
                    src="https://lh3.googleusercontent.com/d/194X_xhIY5vARnHqatwFs7MR4-bDqcUmO"
                    alt="Gross melanosis of canine oral mucosa"
                    caption="Melanosis of the oral mucosa in a dog. Benign focal accumulation of melanin produces a well-defined black patch."
                  />
                </div>
              </div>
            </section>
          </div>
        );

      case 1:
        // Segment 2: Lipofuscin & Ceroid
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                2. Lipofuscin and Ceroid
              </h2>
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Yellow-brown, insoluble, finely granular cytoplasmic pigment composed of polymers of lipids and phospholipids complexed with protein ("wear-and-tear" or "aging" pigment).
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                  <li><strong>Pathogenesis:</strong> Derived from free radical-induced lipid peroxidation of autophagocytosed organellar membranes; accumulates within lysosomal residual bodies.</li>
                  <li><strong>Clinical Context:</strong> Associated with aging, chronic atrophy, cachexia, and nutritional deficiencies (e.g., Vitamin E/Selenium deficiency). Highly prominent in post-mitotic cells such as cardiomyocytes and neurons.</li>
                  <li><strong>Ceroid:</strong> A pathologically related lipofuscin-like pigment associated with severe oxidative stress, fat necrosis, or lipofuscinosis storage diseases.</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <MetabolismFigure
                    src="https://lh3.googleusercontent.com/d/1ylGGLpyIGZ1sYgfMP_Md8D_Q3LLPObuU"
                    alt="Microscopic lipofuscin pigment in cardiac myocytes"
                    caption="Lipofuscin pigment in cardiac myocytes of an aged animal. Fine golden-brown perinuclear granules represent accumulated oxidative damage and residual bodies."
                  />
                  <MetabolismFigure
                    src="https://lh3.googleusercontent.com/d/1Bx88I4Zcnw1BPfWJwKMvEvZyRK9Q6-vC"
                    alt="Gross brown atrophy of the heart associated with lipofuscin"
                    caption="Brown atrophy of the heart in an elderly dog. Lipofuscin accumulation causes a subtle brown discoloration and reflects chronic cellular wear-and-tear."
                  />
                </div>
              </div>
            </section>
          </div>
        );

      case 2:
        // Segment 3: Hemosiderin & Iron
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                3. Hemosiderin
              </h2>
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Golden-brown to yellow-brown, coarsely granular intracellular pigment representing aggregate iron (ferric hydroxide) bound to apoferritin within lysosomal phagolysosomes.
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                  <li><strong>Derivation &amp; Mechanisms:</strong> Derived from hemoglobin breakdown following erythrocyte destruction. Local accumulation occurs following tissue hemorrhage (e.g., hematomas, chronic passive pulmonary congestion/"heart failure cells"). Systemic accumulation occurs during intravascular or extravascular hemolysis (IMHA, hemolytic toxins) or iron overload (hemosiderosis).</li>
                  <li><strong>Histochemical Identification:</strong> Confirmed using <strong>Perls' Prussian Blue reaction</strong>, which reacts with ferric iron to yield a vivid bright blue color.</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <MetabolismFigure
                    src="https://lh3.googleusercontent.com/d/1cPQP3k7V3Ca8rvqMiwmjJWRr3tFjoH9k"
                    alt="Microscopic hemosiderin-laden splenic macrophages"
                    caption="Hemosiderin-laden macrophages in the spleen. Prussian blue stain confirms iron storage following erythrocyte breakdown."
                  />
                  <MetabolismFigure
                    src="https://lh3.googleusercontent.com/d/1lvzIdrOxqfqBCjUUelYgaUf9G36qdUI7"
                    alt="Gross splenic hemosiderosis"
                    caption="Hemosiderosis of the spleen. Chronic hemolysis leads to excessive iron deposition, producing a dark brown discoloration."
                  />
                </div>
              </div>
            </section>
          </div>
        );

      case 3:
        // Segment 4: Bilirubin & Hematoidin
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* 4. Bilirubin and Bile Pigment */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                4. Bilirubin and Bile Pigment
              </h2>
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Yellow-green to orange-brown amorphous or crystalline pigment derived from the iron-free porphyrin ring of hemoglobin following macrophage degradation.
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                  <li><strong>Pathogenesis &amp; Jaundice:</strong> Systemic accumulation leads to yellow discoloration of tissues (icterus/jaundice) secondary to excessive hemolysis (pre-hepatic), hepatocellular injury (hepatic), or biliary obstruction (post-hepatic).</li>
                  <li><strong>Microscopic Morphology:</strong> Appears on H&amp;E as bright greenish-yellow to orange-brown plugs within hepatic bile canaliculi (cholestasis) or within Kupffer cells and renal tubular epithelium.</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <MetabolismFigure
                    src="https://lh3.googleusercontent.com/d/1aCPFXVxHaNKz_-EHVdViedE7OUUxlOSI"
                    alt="Microscopic bilirubin accumulation in hepatocytes and bile canaliculi"
                    caption="Bilirubin accumulation in hepatocytes and bile canaliculi during cholestasis. Yellow-green pigment indicates impaired bile flow."
                  />
                  <MetabolismFigure
                    src="https://lh3.googleusercontent.com/d/1rnaeOZp1Gfirk07Nu0kAOuIS4c2X-4L8"
                    alt="Clinical icterus in a cat"
                    caption="Icterus in a cat. Systemic bilirubin accumulation causes yellow discoloration of mucous membranes and sclera."
                  />
                </div>
              </div>
            </section>

            {/* 5. Hematoidin */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-teal-950 font-sans border-b border-slate-200 pb-2">
                5. Hematoidin
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Bright golden-yellow to orange, crystalline or globular extracellular pigment formed at sites of severe tissue hemorrhage and hypoxia.
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                <li><strong>Characteristics:</strong> Chemically identical or closely related to bilirubin, but formed locally in tissues independent of hepatic processing.</li>
                <li><strong>Iron Status:</strong> Does <strong>not contain iron</strong>, and therefore remains strictly negative on Perls' Prussian Blue reaction (distinguishing it from hemosiderin).</li>
              </ul>
            </section>
          </div>
        );

      case 4:
        // Segment 5: Exogenous Pigments
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Exogenous Pigments
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                    Carbon (Anthracosis)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Inhaled atmospheric carbon particles phagocytosed by alveolar macrophages. Appears as insoluble, dense black intracellular and interstitial deposits in pulmonary parenchyma and draining tracheobronchial lymph nodes. Resists bleaching and special stains.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                    Other Environmental Pigments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Includes inhaled silica dust (silicosis), iron dust (siderosis), ingested lead/copper particles, or topically introduced tattoo pigments in dermal macrophages.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1 font-sans">
                    Carotenoids
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Exogenous fat-soluble plant pigments (beta-carotene) causing yellow discoloration of adipose tissue in horses, cattle, and poultry. Important gross differential diagnosis for icterus/jaundice.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/1wqoyKYQKK-8pMWVGK6AogXXUpjQxnKcH"
                  alt="Microscopic anthracotic pigment in alveolar macrophages"
                  caption="Anthracotic pigment in alveolar macrophages. Inhaled carbon particles accumulate in lung tissue and draining lymphatics."
                />
                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/18f2nir7OswneTUXvpkMvSEwsyBUWHpOF"
                  alt="Gross pulmonary anthracosis"
                  caption="Anthracosis in the lung. Inhaled carbon produces black subpleural deposits, commonly seen in animals living in polluted environments."
                />
              </div>
            </section>
          </div>
        );

      case 5:
        // Segment 6: Differentiation Table
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Pigment Identification &amp; Differentiation Table
              </h2>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-[640px] border-collapse text-xs sm:text-sm text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300">
                      <th className="p-2.5 font-bold text-slate-800">Pigment</th>
                      <th className="p-2.5 font-bold text-slate-800">H&amp;E Color</th>
                      <th className="p-2.5 font-bold text-slate-800">Predominant Location</th>
                      <th className="p-2.5 font-bold text-slate-800">Associated Process</th>
                      <th className="p-2.5 font-bold text-slate-800">Special Stain / Feature</th>
                      <th className="p-2.5 font-bold text-slate-800">Principal Differential</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-900">Melanin</td>
                      <td className="p-2.5 text-slate-700">Brown to Black</td>
                      <td className="p-2.5 text-slate-700">Intracellular (Melanocytes, Melanophages)</td>
                      <td className="p-2.5 text-slate-700">Melanosis, Melanoma, Hyperpigmentation</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-teal-800">Fontana-Masson (black); Bleached by H₂O₂</td>
                      <td className="p-2.5 text-slate-600">Hemosiderin, Carbon</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-amber-950">Lipofuscin</td>
                      <td className="p-2.5 text-slate-700">Yellow to Brown</td>
                      <td className="p-2.5 text-slate-700">Intracellular (Perinuclear, Cardiomyocytes, Neurons)</td>
                      <td className="p-2.5 text-slate-700">Aging, Cachexia, Atrophy, Lipid Peroxidation</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-amber-800">Sudan Black B / Acid-Fast positive; Autofluorescent</td>
                      <td className="p-2.5 text-slate-600">Hemosiderin</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-amber-800">Hemosiderin</td>
                      <td className="p-2.5 text-slate-700">Golden-Brown</td>
                      <td className="p-2.5 text-slate-700">Intracellular (Macrophages, Kupffer cells)</td>
                      <td className="p-2.5 text-slate-700">Hemorrhage, Hemolysis, Congestion, Iron Overload</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-blue-800 font-bold">Perls' Prussian Blue (Deep Blue)</td>
                      <td className="p-2.5 text-slate-600">Melanin, Lipofuscin</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-emerald-900">Bilirubin</td>
                      <td className="p-2.5 text-slate-700">Yellow-Green / Orange</td>
                      <td className="p-2.5 text-slate-700">Intra/Extracellular (Bile Canaliculi, Hepatocytes)</td>
                      <td className="p-2.5 text-slate-700">Icterus, Hemolysis, Hepatic/Biliary Disease</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-emerald-800">Hall's Stain (Green); Bleaches on exposure</td>
                      <td className="p-2.5 text-slate-600">Lipofuscin, Carotenoids</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-orange-950">Hematoidin</td>
                      <td className="p-2.5 text-slate-700">Bright Yellow-Orange</td>
                      <td className="p-2.5 text-slate-700">Extracellular (Old Hemorrhagic Foci)</td>
                      <td className="p-2.5 text-slate-700">Chronic Hemorrhage &amp; Local Hypoxia</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-rose-800">Prussian Blue Negative (Iron-free)</td>
                      <td className="p-2.5 text-slate-600">Hemosiderin</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-950">Carbon</td>
                      <td className="p-2.5 text-slate-700">Dense Black</td>
                      <td className="p-2.5 text-slate-700">Intra/Extracellular (Lung Macrophages, Lymph Nodes)</td>
                      <td className="p-2.5 text-slate-700">Anthracosis (Inhaled Air Pollution)</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-slate-700">Insoluble; Negative for all stains/bleaches</td>
                      <td className="p-2.5 text-slate-600">Melanin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        );

      case 6:
        // Segment 7: Case Challenge
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Practical Pigment Identification Challenge
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Examine each unlabeled pigment image. Identify the pigment based on color, location, and staining properties, then expand the details box to check your answer:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {/* Case 1 */}
                <div className="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between space-y-2">
                  <div>
                    <div className="overflow-hidden rounded-lg bg-slate-100 mb-2">
                      <img
                        src="https://lh3.googleusercontent.com/d/1FoYfpaYQjYIchHqHgbXOcSYUasb237f_"
                        alt="Intra-alveolar hemosiderin deposition (Prussian blue stain)"
                        className="w-full h-36 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>Special stain:</strong> Coarse vivid-blue deposits are present within alveolar macrophages after pulmonary haemorrhage.
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Yale Rosen, via Wikimedia Commons, CC BY-SA 2.0.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => toggleDetail('pig_c1')}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center justify-between w-full cursor-pointer"
                    >
                      <span>Reveal Answer</span>
                      {openDetails['pig_c1'] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    {openDetails['pig_c1'] && (
                      <p className="mt-1.5 text-xs text-teal-950 bg-teal-50/80 border border-teal-200 rounded p-2">
                        <strong>Hemosiderin:</strong> Iron-containing pigment positive for Perls' Prussian blue reaction ("heart failure cells").
                      </p>
                    )}
                  </div>
                </div>

                {/* Case 2 */}
                <div className="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between space-y-2">
                  <div>
                    <div className="overflow-hidden rounded-lg bg-slate-100 mb-2">
                      <img
                        src="https://lh3.googleusercontent.com/d/1L9HA49x-Ri1_lRX2yD5vjDII1ZhB2qud"
                        alt="Nodular melanoma with heavy melanin pigmentation"
                        className="w-full h-36 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>H&amp;E:</strong> A nodular neoplasm contains abundant brown-black intracellular pigment.
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Image courtesy of Dr Ahmet Cemil Kaur; Kutlubay et al., via Wikimedia Commons, CC BY 3.0.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => toggleDetail('pig_c2')}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center justify-between w-full cursor-pointer"
                    >
                      <span>Reveal Answer</span>
                      {openDetails['pig_c2'] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    {openDetails['pig_c2'] && (
                      <p className="mt-1.5 text-xs text-teal-950 bg-teal-50/80 border border-teal-200 rounded p-2">
                        <strong>Melanin:</strong> Tyrosinase-derived pigment in melanocytes, staining black with Fontana-Masson.
                      </p>
                    )}
                  </div>
                </div>

                {/* Case 3 */}
                <div className="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between space-y-2">
                  <div>
                    <div className="overflow-hidden rounded-lg bg-slate-100 mb-2">
                      <img
                        src="https://lh3.googleusercontent.com/d/1Q1Q2GZpl68KqQDiRIieToYaOxvFbb1Ue"
                        alt="Cardiac myocyte showing lipofuscin pigment"
                        className="w-full h-36 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>H&amp;E:</strong> Fine yellow-brown granules are concentrated in the perinuclear cytoplasm of a cardiac myocyte.
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Department of Pathology, Calicut Medical College, via Wikimedia Commons, CC BY-SA 4.0.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => toggleDetail('pig_c3')}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center justify-between w-full cursor-pointer"
                    >
                      <span>Reveal Answer</span>
                      {openDetails['pig_c3'] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    {openDetails['pig_c3'] && (
                      <p className="mt-1.5 text-xs text-teal-950 bg-teal-50/80 border border-teal-200 rounded p-2">
                        <strong>Lipofuscin:</strong> Wear-and-tear aging pigment derived from autocytophagocytosed membrane lipid peroxidation.
                      </p>
                    )}
                  </div>
                </div>

                {/* Case 4 */}
                <div className="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between space-y-2">
                  <div>
                    <div className="overflow-hidden rounded-lg bg-slate-100 mb-2">
                      <img
                        src="https://lh3.googleusercontent.com/d/19hCnMQ18j88nSI5tRTscUMOjTtC-yYPm"
                        alt="Cholestasis high magnification showing bile plugs"
                        className="w-full h-36 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>H&amp;E:</strong> Yellow-brown to greenish canalicular plugs are present between hepatocytes.
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Nephron, via Wikimedia Commons, CC BY-SA 3.0.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => toggleDetail('pig_c4')}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center justify-between w-full cursor-pointer"
                    >
                      <span>Reveal Answer</span>
                      {openDetails['pig_c4'] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    {openDetails['pig_c4'] && (
                      <p className="mt-1.5 text-xs text-teal-950 bg-teal-50/80 border border-teal-200 rounded p-2">
                        <strong>Bilirubin:</strong> Hemoglobin-derived iron-free porphyrin metabolite accumulating during cholestasis.
                      </p>
                    )}
                  </div>
                </div>

                {/* Case 5 */}
                <div className="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between space-y-2 sm:col-span-2 md:col-span-1">
                  <div>
                    <div className="overflow-hidden rounded-lg bg-slate-100 mb-2">
                      <img
                        src="https://lh3.googleusercontent.com/d/17OmZfxVPKR9W8AIdD8etjRkq9_MmSt9K"
                        alt="Histopathology of pulmonary anthracosis"
                        className="w-full h-36 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>H&amp;E:</strong> Dense black inert carbon granules in lung macrophages and interstitial spaces.
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Histopathology of Pulmonary Anthracosis
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => toggleDetail('pig_c5')}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center justify-between w-full cursor-pointer"
                    >
                      <span>Reveal Answer</span>
                      {openDetails['pig_c5'] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    {openDetails['pig_c5'] && (
                      <p className="mt-1.5 text-xs text-teal-950 bg-teal-50/80 border border-teal-200 rounded p-2">
                        <strong>Carbon (Anthracosis):</strong> Exogenous inhaled particulate matter that resists chemical bleaching and special stains.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 7:
        // Segment 8: Summary & Knowledge Check
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="space-y-4">
              <div className="bg-teal-50/80 border-l-4 border-teal-700 border border-teal-200 rounded-2xl p-4 sm:p-5 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-2">
                  Key Takeaways
                </h3>
                <ul className="text-xs sm:text-sm text-teal-900 space-y-1.5 list-disc pl-5">
                  <li>Endogenous pigments include melanin (brown/black), lipofuscin (yellow/brown), hemosiderin (golden/brown), and bilirubin (yellow/green).</li>
                  <li>Perls' Prussian Blue stains hemosiderin ferric iron vivid blue; Fontana-Masson stains melanin black.</li>
                  <li>Anthracosis (carbon) is an inert, insoluble exogenous black pigment that does not stain or bleach.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                  Knowledge Check
                </h3>

                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('pig_kc_1')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>1. Which histochemical stain distinguishes golden-brown hemosiderin from golden-brown lipofuscin?</span>
                      {openDetails['pig_kc_1'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['pig_kc_1'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Perls' Prussian Blue reaction. Hemosiderin contains ferric iron and turns bright blue, whereas lipofuscin remains negative.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('pig_kc_2')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>2. What is the pathogenetic origin of lipofuscin pigment in cardiomyocytes?</span>
                      {openDetails['pig_kc_2'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['pig_kc_2'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Free radical-induced lipid peroxidation of membrane phospholipids during cellular aging or atrophy, stored within lysosomal residual bodies.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('pig_kc_3')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>3. Why is hematoidin negative on Perls' Prussian Blue staining, despite forming at sites of old hemorrhage?</span>
                      {openDetails['pig_kc_3'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['pig_kc_3'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Hematoidin is an iron-free breakdown product of hemoglobin (chemically similar to bilirubin) formed locally in avascular hypoxic tissues.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <SegmentedLessonLayout
      lessonTitle="Pathological Pigments"
      header={
        <MetabolismHeader
          title="Pathological Pigments"
          subtitle="Classification, pathogenesis, and identification of colored endogenous and exogenous substances in animal tissues."
          category="General Pathology"
          lessonId="pathological-pigments"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={PIGMENTS_SECTIONS}
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
          previous={{ id: 'mucin-myxoid-change', title: 'Mucin and Myxoid Change' }}
          next={{ id: 'pathological-calcification', title: 'Pathological Calcification' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
