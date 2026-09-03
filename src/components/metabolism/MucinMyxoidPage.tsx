import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface MucinMyxoidPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const MUCIN_MYXOID_SECTIONS: LessonSectionItem[] = [
  {
    id: 'overview',
    title: 'Overview & Normal Functions',
    shortLabel: 'Overview',
  },
  {
    id: 'epithelial-mucin',
    title: 'Epithelial Mucin Accumulation',
    shortLabel: 'Epithelial Mucin',
  },
  {
    id: 'myxoid-change',
    title: 'Myxoid or Mucoid Change',
    shortLabel: 'Myxoid Change',
  },
  {
    id: 'comparisons',
    title: 'Comparative Analysis & Tables',
    shortLabel: 'Comparisons',
  },
  {
    id: 'methods-and-examples',
    title: 'Histochemical Methods & Veterinary Examples',
    shortLabel: 'Methods & Examples',
  },
  {
    id: 'case-study',
    title: 'Practical Case Study & Pitfalls',
    shortLabel: 'Case Study',
  },
  {
    id: 'knowledge-check',
    title: 'Summary & Knowledge Check',
    shortLabel: 'Knowledge Check',
  },
];

export const MucinMyxoidPage: React.FC<MucinMyxoidPageProps> = ({
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
    if (currentSectionIndex < MUCIN_MYXOID_SECTIONS.length - 1) {
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
        // Segment 1: Overview & Normal Functions
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Intro statement */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="border-l-4 border-teal-700 pl-3.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                  Core Concept
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Mucin accumulation and myxoid change represent distinct disturbances in extracellular or intracellular macromolecular substances. Accurate diagnosis requires differentiating epithelial glycoprotein mucins from mesenchymal glycosaminoglycan-rich myxoid ground substance.
                </p>
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Learning Outcomes
              </h2>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                <li>Define mucin accumulation and myxoid change.</li>
                <li>Differentiate epithelial mucin from extracellular myxoid matrix.</li>
                <li>Explain the mechanisms responsible for their accumulation.</li>
                <li>Describe their gross and microscopic appearances.</li>
                <li>Select suitable histochemical methods.</li>
                <li>Differentiate mucin, myxoid matrix, and hyaline material.</li>
                <li>Apply the distinction to veterinary pathological cases.</li>
              </ul>
            </section>

            {/* Normal Functions */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Normal Mucin and Extracellular-Matrix Functions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Epithelial Mucins
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-molecular-weight glycoproteins produced by goblet cells and glandular epithelial cells. They lubricate, protect, and hydrate epithelial surfaces.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Glycosaminoglycans (GAGs)
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Major components of extracellular connective-tissue matrix. They bind water and determine tissue hydration and biomechanical consistency.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Pathological Accumulation
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Develops when production accelerates, ductal outflow is obstructed, degradation is impaired, or matrix composition becomes abnormal.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );

      case 1:
        // Segment 2: Epithelial Mucin Accumulation
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Epithelial Mucin Accumulation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Epithelial mucin may accumulate within goblet or glandular epithelial cells, within glandular lumina, within obstructed ducts, within cystic lesions, within mucin-producing tumours, or on mucosal surfaces following excessive secretion.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Mechanisms of Accumulation</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Epithelial hypersecretion</li>
                    <li>Chronic mucosal irritation</li>
                    <li>Obstruction of glandular or ductal outflow</li>
                    <li>Cyst formation</li>
                    <li>Neoplastic mucin production</li>
                    <li>Impaired mucociliary clearance</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Morphological Features</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                    <li><strong>Gross:</strong> Clear, translucent, white or pale material; viscid, stringy or gelatinous consistency; distension of glands, ducts or cystic structures; accumulation on mucosal surfaces.</li>
                    <li><strong>Microscopic (H&amp;E):</strong> Pale or lightly basophilic intracellular material; distended goblet or glandular cells; mucin within lumina; cystic spaces containing pale material; possible displacement of nuclei in heavily distended cells.</li>
                  </ul>
                </div>
              </div>

              {/* Figures 1 & 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/10QrovhwgpIyY5EjQCfTL61d05x1_OrVv"
                  alt="Mucinous metaplasia in epithelial cells"
                  caption="Mucinous metaplasia in epithelial cells. Epithelial cells transform into mucin-producing cells, developing large mucin-filled vacuoles that displace the nucleus. This change is commonly seen in chronic irritation and inflammatory conditions of mucosal surfaces."
                />

                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/14BHwqOFsWiydkuuZMlKVAxNjZ-JV60YU"
                  alt="Excessive mucin accumulation in mucous glands"
                  caption="Excessive mucin accumulation in mucous glands. Chronic irritation or inflammation can lead to increased mucin production and glandular dilation. Acini become distended with mucin, and nuclei are compressed against the cell membrane. This change contributes to the grossly gelatinous appearance of affected tissues."
                />
              </div>
            </section>
          </div>
        );

      case 2:
        // Segment 3: Myxoid or Mucoid Change
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Myxoid or Mucoid Change
              </h2>

              <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-xs sm:text-sm text-teal-950 leading-relaxed">
                <strong>Definition:</strong> Myxoid change refers to the excessive extracellular accumulation of glycosaminoglycan-rich matrix that separates connective-tissue cells and collagen fibres.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Pathological Settings</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Connective-tissue degeneration</li>
                    <li>Myxoedema</li>
                    <li>Myxoid neoplasms</li>
                    <li>Stromal change within tumours</li>
                    <li>Reparative or developmental connective tissue</li>
                    <li>Selected chronic tissue disturbances</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">Morphological Features</h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                    <li><strong>Gross:</strong> Soft, gelatinous or slippery tissue; pale grey or translucent appearance; poorly defined gelatinous areas; increased tissue water content.</li>
                    <li><strong>Microscopic (H&amp;E):</strong> Loose pale basophilic extracellular matrix; separation of collagen fibres; scattered spindle-shaped or stellate cells; fine stringy or fibrillar background; increased spacing among connective-tissue elements.</li>
                  </ul>
                </div>
              </div>

              {/* Figures 3 & 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/1-G00JpNA-DBg8_6UgHz1pziCFC4XPxf6"
                  alt="Myxoid change in connective tissue"
                  caption="Myxoid change in connective tissue. Fibroblasts become stellate and are surrounded by excessive myxoid (mucoid) ground substance. Collagen fibers are dispersed, giving the tissue a loose, gelatinous appearance. Myxoid change is typical in degenerative processes and certain tumors."
                />

                <MetabolismFigure
                  src="https://lh3.googleusercontent.com/d/1NwyJnT740G-CW9D3caO-HP7Gs3fL22Ag"
                  alt="Myxoid degeneration in a soft tissue tumor"
                  caption="Myxoid degeneration in a soft tissue tumor. Some mesenchymal tumors exhibit myxoid change, characterized by tumor cells suspended in abundant myxoid matrix. This pattern is important diagnostically and may be seen in myxosarcomas or myxoid variants of other tumors."
                />
              </div>
            </section>
          </div>
        );

      case 3:
        // Segment 4: Comparative Analysis & Tables
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Comparison Table 1: Epithelial Mucin vs Myxoid Matrix */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Epithelial Mucin versus Myxoid Matrix
              </h2>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-[580px] border-collapse text-xs sm:text-sm text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300">
                      <th className="p-2.5 font-bold text-slate-800">Feature</th>
                      <th className="p-2.5 font-bold text-teal-900">Epithelial Mucin</th>
                      <th className="p-2.5 font-bold text-blue-900">Myxoid Matrix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Principal Material</td>
                      <td className="p-2.5 text-slate-700">Glycoprotein</td>
                      <td className="p-2.5 text-slate-700">Glycosaminoglycan-rich extracellular matrix</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Main Producer</td>
                      <td className="p-2.5 text-slate-700">Epithelial or glandular cells</td>
                      <td className="p-2.5 text-slate-700">Mesenchymal cells</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Location</td>
                      <td className="p-2.5 text-slate-700">Intracellular, luminal, ductal or cystic</td>
                      <td className="p-2.5 text-slate-700">Extracellular connective tissue</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Common Setting</td>
                      <td className="p-2.5 text-slate-700">Hypersecretion, obstruction, cysts or tumours</td>
                      <td className="p-2.5 text-slate-700">Myxoid degeneration or neoplasia</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Gross Appearance</td>
                      <td className="p-2.5 text-slate-700">Viscid or stringy</td>
                      <td className="p-2.5 text-slate-700">Soft and gelatinous</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">H&amp;E Appearance</td>
                      <td className="p-2.5 text-slate-700">Pale intracellular or luminal material</td>
                      <td className="p-2.5 text-slate-700">Pale basophilic matrix separating collagen fibres</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">Helpful Stain</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-teal-800">Mucicarmine or Alcian blue</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-blue-800">Alcian blue</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Figure 5 */}
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1_NhFUW_tDNKBSnCsAnE4enNNOu0CoZdo"
                alt="Comparison between mucinous and myxoid change"
                caption="Comparison between mucinous and myxoid change. Mucinous change occurs within epithelial cells, forming intracellular mucin vacuoles. Myxoid change occurs in the extracellular matrix of connective tissue, producing abundant mucoid ground substance. This illustration highlights the cellular versus stromal nature of each process."
              />
            </section>

            {/* Comparison with Hyaline & Amyloid */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Comparison with Hyaline Change and Amyloid
              </h2>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                Hyaline describes homogeneous, glassy and usually eosinophilic material. Myxoid matrix is generally pale, loose, basophilic and glycosaminoglycan-rich. The terms should not be used interchangeably.
              </div>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-[620px] border-collapse text-xs sm:text-sm text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300">
                      <th className="p-2.5 font-bold text-slate-800">Material</th>
                      <th className="p-2.5 font-bold text-slate-800">Location</th>
                      <th className="p-2.5 font-bold text-slate-800">H&amp;E Appearance</th>
                      <th className="p-2.5 font-bold text-slate-800">Chemical Nature</th>
                      <th className="p-2.5 font-bold text-slate-800">Helpful Stain</th>
                      <th className="p-2.5 font-bold text-slate-800">Principal Diagnostic Clue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-teal-950">Mucin</td>
                      <td className="p-2.5 text-slate-700">Intracellular, luminal or cystic</td>
                      <td className="p-2.5 text-slate-700">Pale, lightly basophilic</td>
                      <td className="p-2.5 text-slate-700">Glycoprotein</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-teal-800">Mucicarmine / Alcian blue / PAS</td>
                      <td className="p-2.5 text-slate-700">Epithelial context, goblet/glandular location</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-blue-950">Myxoid Matrix</td>
                      <td className="p-2.5 text-slate-700">Extracellular matrix</td>
                      <td className="p-2.5 text-slate-700">Loose, pale basophilic, fibrillar</td>
                      <td className="p-2.5 text-slate-700">Glycosaminoglycans (GAGs)</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-blue-800">Alcian blue</td>
                      <td className="p-2.5 text-slate-700">Separation of collagen fibres, stellate stromal cells</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-rose-950">Hyaline</td>
                      <td className="p-2.5 text-slate-700">Intra- or extracellular</td>
                      <td className="p-2.5 text-slate-700">Homogeneous, glassy, bright eosinophilic</td>
                      <td className="p-2.5 text-slate-700">Condensed protein/collagen</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-rose-800">Masson's trichrome / H&amp;E</td>
                      <td className="p-2.5 text-slate-700">Smooth, structureless, dense eosinophilic appearance</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-amber-950">Amyloid</td>
                      <td className="p-2.5 text-slate-700">Extracellular matrix/vessels</td>
                      <td className="p-2.5 text-slate-700">Amorphous, pale pink, acellular</td>
                      <td className="p-2.5 text-slate-700">β-pleated sheet protein</td>
                      <td className="p-2.5 font-mono-code text-[11px] text-amber-800">Congo Red (polarized)</td>
                      <td className="p-2.5 text-slate-700">Apple-green birefringence under cross-polarized light</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        );

      case 4:
        // Segment 5: Histochemical Methods & Veterinary Examples
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Histochemical Methods */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Histochemical Methods
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The appropriate histochemical method depends on the suspected material and tissue location. Stain results must always be interpreted in conjunction with cellular morphology:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl border border-slate-200">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Mucicarmine
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demonstrates many epithelial mucins, staining them bright pink-red.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl border border-slate-200">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Alcian Blue
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demonstrates acidic mucins and glycosaminoglycans, depending on method and pH (staining blue).
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border-l-4 border-teal-700 rounded-r-xl border border-slate-200">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Periodic Acid-Schiff (PAS)
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demonstrates neutral or carbohydrate-rich mucosubstances (staining magenta).
                  </p>
                </div>
              </div>
            </section>

            {/* Veterinary Examples */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Veterinary Examples
              </h2>
              <p className="text-xs text-slate-500 italic">
                These examples illustrate mucin accumulation and matrix alteration within the broader chapter theme of metabolic and structural disturbances:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Epithelial Irritation
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Excess respiratory or intestinal mucus secondary to chronic mucosal irritation or infection.
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Glandular / Ductal Obstruction
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mucin retention in obstructed glands or ducts (e.g., salivary mucocele/ranula).
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Cystic Lesions
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mucin-filled cystic structures resulting from ductal blockades or developmental anomalies.
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Mucin-Producing Neoplasms
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mucinous adenocarcinomas producing abundant intracellular or luminal mucin pools.
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Connective Tissue Myxoid Change
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Degenerative myxoid changes in cardiac valvular stroma (myxomatous valvular degeneration).
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Mesenchymal Neoplasms
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Myxoid stroma within mesenchymal tumors (e.g., myxoma, myxosarcoma).
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl sm:col-span-2 md:col-span-1">
                  <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                    Endocrine Myxoedema
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Myxoedematous connective-tissue alterations associated with severe hypothyroidism.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );

      case 5:
        // Segment 6: Practical Case Study & Pitfalls
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Practical Case Study */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Practical Case Study: Myxoid Matrix in an Atrial Myxoma
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This comparative pathology example shows an atrial myxoma containing abundant extracellular myxoid matrix. Although the illustrated specimen is of human origin, it provides a clear demonstration of the morphological features used to recognise myxoid tissue. Myxoma and myxosarcoma are also recognised in veterinary species.
              </p>

              <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-xs sm:text-sm text-teal-950 leading-relaxed">
                <strong>Teaching note:</strong> The pale material in this lesion is extracellular myxoid matrix rather than epithelial mucin. Interpretation depends on its extracellular location, loose texture, and association with scattered mesenchymal cells.
              </div>

              {/* Self Assessment Questions */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Diagnostic Self-Assessment Questions:
                </div>
                <ol className="text-xs sm:text-sm text-slate-700 list-decimal pl-5 space-y-1">
                  <li>Is the pale material primarily intracellular, luminal or extracellular?</li>
                  <li>Which features support identification as myxoid matrix?</li>
                  <li>What is the likely cellular lineage of the lesional cells?</li>
                  <li>How does this material differ from epithelial mucin?</li>
                  <li>Which histochemical stain could help demonstrate its acidic glycosaminoglycan-rich matrix?</li>
                  <li>How would myxoid matrix differ from hyaline material on H&amp;E?</li>
                </ol>

                <div className="pt-2">
                  <button
                    onClick={() => toggleDetail('mm_case_ans')}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{openDetails['mm_case_ans'] ? 'Hide Suggested Interpretation' : 'Show Suggested Interpretation'}</span>
                    {openDetails['mm_case_ans'] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  {openDetails['mm_case_ans'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      The material is extracellular and separates sparsely distributed mesenchymal cells. Its loose, pale to lightly basophilic appearance supports myxoid matrix. Alcian blue may demonstrate acidic glycosaminoglycans. In contrast, epithelial mucin is usually intracellular, luminal or cystic and occurs in an epithelial or glandular context. Hyaline material is denser, homogeneous, glassy and usually strongly eosinophilic.
                    </p>
                  )}
                </div>
              </div>

              {/* Gallery Grid (3 images) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <MetabolismFigure
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Atrial_myxoma_low_mag.jpg?width=1280"
                  alt="Low-magnification H&E micrograph of an atrial myxoma with abundant hypocellular myxoid matrix."
                  caption="Low-power H&E showing the broad, hypocellular architecture of an atrial myxoma and its abundant pale myxoid matrix."
                  citation="Nephron, via Wikimedia Commons."
                  sourceUrl="https://commons.wikimedia.org/wiki/File:Atrial_myxoma_low_mag.jpg"
                  sourceTitle="Wikimedia Commons"
                  licenseText="CC BY-SA 3.0"
                  licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
                />

                <MetabolismFigure
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Atrial_myxoma_intermed_mag.jpg?width=1280"
                  alt="Intermediate-magnification H&E micrograph showing cells dispersed within the myxoid matrix of an atrial myxoma."
                  caption="Intermediate-power H&E showing scattered lesional cells suspended within loose extracellular myxoid matrix."
                  citation="Nephron, via Wikimedia Commons."
                  sourceUrl="https://commons.wikimedia.org/wiki/File:Atrial_myxoma_intermed_mag.jpg"
                  sourceTitle="Wikimedia Commons"
                  licenseText="CC BY-SA 3.0"
                  licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
                />

                <MetabolismFigure
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Atrial_myxoma_high_mag.jpg?width=1280"
                  alt="High-magnification H&E micrograph of atrial myxoma cells within pale extracellular myxoid matrix."
                  caption="High-power H&E showing polygonal to elongated myxoma cells, including perivascular arrangements, within the myxoid background."
                  citation="Nephron, via Wikimedia Commons."
                  sourceUrl="https://commons.wikimedia.org/wiki/File:Atrial_myxoma_high_mag.jpg"
                  sourceTitle="Wikimedia Commons"
                  licenseText="CC BY-SA 3.0"
                  licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
                />
              </div>
            </section>

            {/* Diagnostic Pitfalls */}
            <section className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm sm:text-base font-sans">
                <AlertCircle className="w-4 h-4 text-amber-800" />
                <h3>Diagnostic Pitfalls</h3>
              </div>
              <ul className="text-xs sm:text-sm text-amber-900 space-y-1.5 list-disc pl-5 leading-relaxed">
                <li>Do not call every pale extracellular matrix "mucin."</li>
                <li>Do not use "mucoid," "myxoid" and "hyaline" interchangeably.</li>
                <li>Determine whether the material is epithelial or mesenchymal in origin.</li>
                <li>Determine whether it is intracellular, luminal or extracellular.</li>
                <li>Processing artefact and tissue oedema may produce pale spaces but do not represent true mucin accumulation.</li>
                <li>Interpret special histochemical stains in conjunction with cellular morphology and anatomical location.</li>
              </ul>
            </section>
          </div>
        );

      case 6:
        // Segment 7: Summary & Knowledge Check
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="space-y-4">
              <div className="bg-teal-50/80 border-l-4 border-teal-700 border border-teal-200 rounded-2xl p-4 sm:p-5 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-2">
                  Key Takeaways
                </h3>
                <ul className="text-xs sm:text-sm text-teal-900 space-y-1.5 list-disc pl-5">
                  <li>Epithelial mucin is produced by epithelial and glandular cells (intracellular, luminal or cystic).</li>
                  <li>Myxoid matrix is extracellular, rich in glycosaminoglycans, and produced by mesenchymal cells.</li>
                  <li>Both can bind water and appear pale or gelatinous, but differ structurally and pathologically.</li>
                  <li>Mucin and myxoid matrix differ fundamentally from glassy, eosinophilic hyaline material.</li>
                  <li>Mucicarmine, Alcian blue and PAS answer different diagnostic questions depending on pH and material.</li>
                  <li>Anatomical location and tissue context are essential for accurate diagnosis.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                  Knowledge Check
                </h3>

                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('mm_kc_1')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>1. What is the principal cellular source of epithelial mucin?</span>
                      {openDetails['mm_kc_1'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['mm_kc_1'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Goblet cells and glandular epithelial cells.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('mm_kc_2')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>2. Is myxoid matrix intracellular or extracellular?</span>
                      {openDetails['mm_kc_2'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['mm_kc_2'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Extracellular (located in the connective tissue matrix separating fibers and cells).
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('mm_kc_3')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>3. How does myxoid matrix generally appear on H&amp;E?</span>
                      {openDetails['mm_kc_3'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['mm_kc_3'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Loose, pale basophilic, fine stringy/fibrillar background matrix separating collagen fibers and spindle/stellate cells.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('mm_kc_4')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>4. Name one stain that may demonstrate acidic mucin or glycosaminoglycans.</span>
                      {openDetails['mm_kc_4'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['mm_kc_4'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Alcian blue.
                      </p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleDetail('mm_kc_5')}
                      className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                    >
                      <span>5. What feature helps distinguish myxoid change from hyaline change?</span>
                      {openDetails['mm_kc_5'] ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openDetails['mm_kc_5'] && (
                      <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                        Myxoid matrix is loose, pale basophilic, and GAG-rich, whereas hyaline is dense, smooth, homogeneous, glassy, and intensely eosinophilic (pink).
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
      lessonTitle="Mucin and Myxoid Change"
      header={
        <MetabolismHeader
          title="Mucin and Myxoid Change"
          subtitle="Distinguishing epithelial mucin accumulation from extracellular glycosaminoglycan-rich myxoid matrix."
          category="General Pathology"
          lessonId="mucin-myxoid-change"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={MUCIN_MYXOID_SECTIONS}
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
          previous={{ id: 'amyloidosis', title: 'Amyloidosis' }}
          next={{ id: 'pathological-pigments', title: 'Pathological Pigments' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
