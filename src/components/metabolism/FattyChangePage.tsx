import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import { MetabolismFigure } from './MetabolismFigure';
import { MetabolismVideoCard } from './MetabolismVideoCard';
import { SegmentedLessonLayout } from './SegmentedLessonLayout';
import { LessonSectionItem } from './LessonSectionNavigator';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FattyChangePageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

const FATTY_CHANGE_SECTIONS: LessonSectionItem[] = [
  {
    id: 'overview-terminology',
    title: 'A. Definition and Terminology',
    shortTitle: 'Definition & Terminology',
    badge: 'Core Concept',
  },
  {
    id: 'video-overview',
    title: 'Video Overview: Hepatic Lipidosis',
    shortTitle: 'Video Overview',
    badge: '8-Min Walkthrough',
  },
  {
    id: 'pathogenesis-mechanisms',
    title: 'Pathogenesis & Mechanisms of Accumulation',
    shortTitle: 'Pathogenesis & Mechanisms',
    badge: 'Biochemical Pathways',
  },
  {
    id: 'etiology-examples',
    title: 'Etiology and Veterinary Examples',
    shortTitle: 'Etiology & Species Examples',
    badge: 'Veterinary Conditions',
  },
  {
    id: 'gross-pathology',
    title: 'Gross Pathology of Fatty Liver',
    shortTitle: 'Gross Pathology',
    badge: 'Gross Morphology',
  },
  {
    id: 'histopathology',
    title: 'Histopathology & Microscopic Patterns',
    shortTitle: 'Histopathology & Morphology',
    badge: 'H&E Morphology',
  },
  {
    id: 'diagnostic-stains',
    title: 'Histochemical Demonstration of Lipid (Special Stains)',
    shortTitle: 'Diagnostic Special Stains',
    badge: 'Special Stains',
  },
  {
    id: 'consequences-reversibility',
    title: 'Consequences and Reversibility',
    shortTitle: 'Clinical Significance',
    badge: 'Pathophysiology',
  },
  {
    id: 'summary-knowledge-check',
    title: 'Summary & Knowledge Check',
    shortTitle: 'Takeaways & Self-Assessment',
    badge: 'Self-Assessment',
  },
];

export const FattyChangePage: React.FC<FattyChangePageProps> = ({
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

  const scrollToTop = () => {
    const anchor = document.getElementById('lesson-content-top');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectSection = (index: number) => {
    if (index < 0 || index >= FATTY_CHANGE_SECTIONS.length) return;
    setCompletedSections((prev) =>
      prev.includes(currentSectionIndex) ? prev : [...prev, currentSectionIndex]
    );
    setCurrentSectionIndex(index);
    scrollToTop();
  };

  const handleNextSection = () => {
    if (currentSectionIndex < FATTY_CHANGE_SECTIONS.length - 1) {
      const nextIndex = currentSectionIndex + 1;
      setCompletedSections((prev) =>
        prev.includes(currentSectionIndex) ? prev : [...prev, currentSectionIndex]
      );
      setCurrentSectionIndex(nextIndex);
      scrollToTop();
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      scrollToTop();
    }
  };

  const handleCompleteLesson = () => {
    // Mark final section complete and navigate back to DICM topic
    setCompletedSections((prev) =>
      prev.includes(currentSectionIndex) ? prev : [...prev, currentSectionIndex]
    );
    onNavigate({
      type: 'topic_detail',
      topicId: 'disturbance-cell-metabolism',
    });
  };

  const fontClass =
    fontSize === 'scholar'
      ? 'font-serif-academic text-base sm:text-lg'
      : fontSize === 'large'
      ? 'text-base sm:text-lg'
      : 'text-sm sm:text-base';

  // Render content of current segment
  const renderCurrentSegment = () => {
    switch (currentSectionIndex) {
      case 0:
        // Segment 1: Definition and Terminology
        return (
          <section
            id="segment-overview-terminology"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                A. Definition and Terminology
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Fatty change refers to the abnormal accumulation of neutral triglycerides within non-adipose parenchymal cells. While most frequently encountered in the liver, it also affects the myocardium, skeletal muscle, and renal tubular epithelium.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <strong className="text-teal-950 text-xs sm:text-sm block font-bold mb-1">
                  Fatty Change
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  General morphological term for intracellular lipid accumulation in parenchymal cells.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <strong className="text-teal-950 text-xs sm:text-sm block font-bold mb-1">
                  Steatosis
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Synonymous medical term commonly used for hepatic lipid accumulation.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <strong className="text-teal-950 text-xs sm:text-sm block font-bold mb-1">
                  Lipidosis
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Broad clinical/pathological term applied to metabolic lipid storage (e.g., Feline Hepatic Lipidosis).
                </p>
              </div>
            </div>
          </section>
        );

      case 1:
        // Segment 2: Video Overview
        return (
          <section
            id="segment-video-overview"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5 mb-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Video Overview: Hepatic Lipidosis
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Watch this focused walkthrough on how fat accumulates in the liver, covering free fatty acid mobilization, lipoprotein export blocks, and characteristic pathology.
              </p>
            </div>

            <MetabolismVideoCard
              videoId="JWjg6rhiwoQ"
              title="Hepatic Lipidosis (Steatosis): How Fat Accumulates in the Liver"
              description="Review the major mechanisms of triglyceride accumulation and the characteristic gross and microscopic appearance of hepatic fatty change."
              badge="English Micro-Lesson"
              keyPoints={[
                'Increased FFA mobilization from adipose tissue during negative energy balance.',
                'Impaired beta-oxidation or reduced apoprotein synthesis disrupts VLDL packaging.',
                'Grossly produces an enlarged, pale yellow, friable liver with rounded borders that floats in water.',
              ]}
            />
          </section>
        );

      case 2:
        // Segment 3: Pathogenesis & Mechanisms
        return (
          <section
            id="segment-pathogenesis-mechanisms"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Pathogenesis &amp; Mechanisms of Accumulation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Neutral triglycerides accumulate whenever hepatic lipid entry/synthesis exceeds hepatic oxidation, esterification, or lipoprotein export:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  1. Increased FFA Delivery
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Excessive mobilization of free fatty acids (FFAs) from adipose tissue during negative energy balance, starvation, or obesity.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  2. Impaired FFA Oxidation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mitochondrial hypoxia or toxin-induced inhibition preventing beta-oxidation of fatty acids into acetyl-CoA.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  3. Reduced Apoprotein Synthesis
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inadequate apoprotein production due to protein-calorie malnutrition or hepatotoxins (e.g., carbon tetrachloride, phosphorus).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 border-t-4 border-t-teal-700 bg-white shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  4. Impaired Lipoprotein Export
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Defects in packaging triglycerides with apoproteins into Very Low-Density Lipoproteins (VLDL) or blockades in exocytosis.
                </p>
              </div>
            </div>

            {/* Figure 1: Schematic */}
            <div className="pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1QwbiMrPqwNBO6_Cf7Nu6lMGZIo1yyvNa"
                alt="Mechanisms leading to hepatic steatosis"
                caption="Mechanisms leading to hepatic steatosis. Fatty change results from defects in any step from fatty acid uptake to lipoprotein export. Causes include increased fatty acid mobilization (starvation), decreased apoprotein synthesis (protein malnutrition), metabolic disease, hypoxia, and hepatotoxic injury (e.g., CCl₄). These disruptions lead to intracellular triglyceride accumulation."
              />
            </div>
          </section>
        );

      case 3:
        // Segment 4: Etiology and Veterinary Examples
        return (
          <section
            id="segment-etiology-examples"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Etiology and Veterinary Examples
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Fatty change develops in diverse clinical contexts across livestock and companion animals, reflecting characteristic metabolic disruptions:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Negative Energy Balance &amp; Starvation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Massive peripheral adipose mobilization exceeding metabolic capacity (e.g., prolonged anorexia in obese cats, starvation).
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Feline Hepatic Lipidosis
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Idiopathic syndrome in overweight cats undergoing acute anorexia, leading to severe liver failure and icterus.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Bovine Periparturient Fatty Liver
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-yielding dairy cattle during early lactation experiencing high energy demands and intense fat mobilization.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Pregnancy Toxemia in Small Ruminants
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ewes and does carrying twins/triplets in late gestation experiencing metabolic energy deficits.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Hypoxia &amp; Toxins
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Severe anemia, chronic passive congestion, or hepatotoxic chemicals damaging mitochondrial oxidation pathways.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold text-teal-950 mb-1">
                  Endocrine Disorders
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Diabetes mellitus or equine metabolic syndrome altering insulin regulation and lipolysis.
                </p>
              </div>
            </div>
          </section>
        );

      case 4:
        // Segment 5: Gross Pathology
        return (
          <section
            id="segment-gross-pathology"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Gross Pathology of Fatty Liver
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Macroscopic alterations produced by diffuse triglyceride deposition within hepatocytes.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/70">
              <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">
                Key Macroscopic Criteria
              </h3>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                <li><strong>Organ Size &amp; Weight:</strong> Diffusely enlarged, heavy liver.</li>
                <li><strong>Color:</strong> Pale-yellow, yellow-orange, or light tan.</li>
                <li><strong>Texture &amp; Consistency:</strong> Soft, friable, greasy texture when handled.</li>
                <li><strong>Margins:</strong> Rounded liver capsule borders.</li>
                <li><strong>Cut Surface:</strong> Bulges, feels greasy, and small tissue fragments float in water/fixative if severe.</li>
              </ul>
            </div>

            {/* Figure 2: Gross Appearance */}
            <div className="pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1PqzTuw1T8Dcyq6185zSD7hYl6xdXLWPC"
                alt="Gross appearance of hepatic fatty change (steatosis)"
                caption="Gross appearance of hepatic fatty change (steatosis). The liver is enlarged with rounded borders and displays a tan-to-yellow discoloration. The cut surface bulges outward and appears greasy and dull, reflecting intracellular triglyceride accumulation in hepatocytes. These changes correspond to progressive fatty change described in veterinary pathology."
              />
            </div>
          </section>
        );

      case 5:
        // Segment 6: Histopathology & Microscopic Patterns
        return (
          <section
            id="segment-histopathology"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-5 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Histopathology &amp; Microscopic Patterns
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Microscopic hallmarks of lipid accumulation evaluated on routine hematoxylin and eosin (H&amp;E) stained sections.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/70">
              <h3 className="text-sm font-bold text-teal-950 mb-2 font-sans">
                Microscopic Morphology (H&amp;E)
              </h3>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                <li><strong>Microvesicular Form:</strong> Multiple tiny, clear cytoplasmic vacuoles without displacing the central nucleus.</li>
                <li><strong>Macrovesicular Form:</strong> Single large, sharply demarcated, optically clear vacuole filling cytoplasm and displacing the nucleus to the cell periphery.</li>
                <li><strong>Distributions:</strong> Zonal (centrilobular in hypoxia/toxins, periportal in starvation) or diffuse.</li>
                <li><strong>Vacuole Appearance:</strong> Sharply demarcated, circular clear spaces.</li>
              </ul>
            </div>

            {/* Figures 3 & 4 */}
            <div className="space-y-4">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1hKAw6adAUnRfuCq8iUYDH00bYnQ8wSce"
                alt="Microvesicular and macrovesicular hepatic fatty change"
                caption="Histologic patterns of fatty change in hepatocytes. Macrovesicular fatty change features large cytoplasmic lipid vacuoles that compress and displace nuclei, whereas microvesicular fatty change consists of multiple small vacuoles that do not significantly displace nuclei. These patterns reflect different pathogenic mechanisms, with macrovesicular change often metabolic and microvesicular change frequently toxin-associated."
              />

              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/1GpmAO5BB4WENKnvPlv0ibMLYx2jxBUPZ"
                alt="Zonal distribution of hepatic fatty change"
                caption="Zonal patterns of hepatic fatty change. Fatty change may be focal, zonal (centrilobular or periportal), or diffuse. Zonal patterns are often treatment-related or associated with specific metabolic or toxic disturbances, whereas focal lesions may occur spontaneously."
              />
            </div>

            {/* Morphology Focus Case */}
            <div className="pt-2 border-t border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-900 font-sans">
                Morphology Focus: Hepatic Steatosis
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                <div className="md:col-span-1">
                  <MetabolismFigure
                    src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Fatty%20change%20liver%20-%20Lipid%20steatosis%2040X.jpg"
                    alt="Liver histology showing hepatocytes distended by variably sized clear cytoplasmic lipid vacuoles, H&E."
                    caption="Hepatic fatty change. Hepatocytes contain variably sized clear lipid vacuoles; some vacuoles displace the nucleus peripherally. H&E, 40×."
                    citation="Department of Pathology, Calicut Medical College."
                    sourceUrl="https://commons.wikimedia.org/wiki/File:Fatty_change_liver_-_Lipid_steatosis_40X.jpg"
                    sourceTitle="Wikimedia Commons"
                    licenseText="CC BY-SA 4.0"
                    licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/"
                  />
                </div>

                <div className="md:col-span-2 space-y-2.5">
                  <h4 className="text-sm sm:text-base font-bold text-teal-950 font-sans">
                    Hepatic Steatosis Case Evaluation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The section shows hepatocytes containing multiple variably sized, optically clear cytoplasmic vacuoles. In more severely affected cells, the vacuoles coalesce and may displace the nucleus toward the cell periphery. Lipid appears empty in routine paraffin sections because it is dissolved during tissue processing.
                  </p>
                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl">
                    <strong className="text-amber-950 text-xs sm:text-sm block font-bold mb-1">
                      Veterinary Relevance:
                    </strong>
                    <p className="text-xs text-amber-900 leading-relaxed">
                      The same fundamental morphological pattern occurs in veterinary conditions such as feline hepatic lipidosis, bovine periparturient fatty liver, pregnancy toxemia of ewes and does, and toxin- or hypoxia-associated hepatic injury.
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-teal-950 pt-1">
                    Morphological diagnosis: Diffuse hepatocellular fatty change (hepatic steatosis).
                  </p>
                </div>
              </div>
            </div>
          </section>
        );

      case 6:
        // Segment 7: Diagnostic Methods & Special Stains
        return (
          <section
            id="segment-diagnostic-stains"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Histochemical Demonstration of Lipid
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Routine histological tissue processing utilizes organic solvents (alcohol, xylene) that dissolve and extract neutral lipids, leaving empty, optically clear vacuoles on standard H&amp;E stains.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Standard H&amp;E (Paraffin)
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lipid is dissolved away; leaves sharply demarcated, empty cytoplasmic vacuoles.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Oil Red O / Sudan III
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Performed on frozen unfixed sections; stains neutral triglycerides vivid red/orange.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-teal-950 block text-xs sm:text-sm font-bold mb-1">
                  Osmium Tetroxide
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fixative that reacts chemically with unsaturated lipids, staining them dense black.
                </p>
              </div>
            </div>

            {/* Figure 5: Special Stains Comparison */}
            <div className="pt-2">
              <MetabolismFigure
                src="https://lh3.googleusercontent.com/d/17O5tB68_zD1_7mwG_cn_ESPcsfvrKL-6"
                alt="Special stains differentiating lipid, glycogen, and water vacuoles"
                caption="Special stains used to differentiate clear cytoplasmic vacuoles. Lipid vacuoles require frozen sections and stain positively with Sudan IV or Oil Red O. Glycogen vacuoles stain magenta with PAS. Water vacuoles remain negative for both lipid and PAS stains. These techniques allow differentiation of intracellular accumulations that appear similar on routine H&E."
              />
            </div>
          </section>
        );

      case 7:
        // Segment 8: Consequences and Reversibility
        return (
          <section
            id="segment-consequences-reversibility"
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-200"
          >
            <div className="border-l-4 border-teal-700 pl-3.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                Consequences and Reversibility
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                Fatty change is inherently a <strong>reversible lesion</strong> if the underlying metabolic, nutritional, or toxic cause is corrected. However, if severe and persistent:
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-sans">
                Pathological Progression in Severe / Chronic Cases
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-5">
                <li>
                  Rupture of heavily laden hepatocytes forms extracellular <strong>fat cysts</strong>.
                </li>
                <li>
                  Severe swelling causes sinusoidal compression, leading to intrahepatic cholestasis and icterus.
                </li>
                <li>
                  Increases susceptibility to secondary cell injury, lipid peroxidation, inflammation, and hepatic failure.
                </li>
              </ul>
            </div>
          </section>
        );

      case 8:
        // Segment 9: Summary & Knowledge Check
        return (
          <section
            id="segment-summary-knowledge-check"
            className="space-y-5 animate-in fade-in duration-200"
          >
            <div className="bg-teal-50/80 border-l-4 border-teal-700 border border-teal-200 rounded-2xl p-4 sm:p-5 shadow-xs">
              <h3 className="text-sm sm:text-base font-bold text-teal-950 mb-2">
                Key Takeaways
              </h3>
              <ul className="text-xs sm:text-sm text-teal-900 space-y-1.5 list-disc pl-5">
                <li>Fatty change is the accumulation of neutral triglycerides within non-adipose parenchymal cells (predominantly liver).</li>
                <li>Mechanisms include increased FFA influx, reduced oxidation, decreased apoprotein synthesis, or defective VLDL secretion.</li>
                <li>Microscopically forms sharply demarcated clear vacuoles that displace nuclei (macrovesicular); confirmed via Oil Red O on frozen tissue.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                Knowledge Check (Self-Assessment)
              </h3>
              <p className="text-xs text-slate-500">
                Click each clinical question to reveal the verified diagnostic explanation:
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('fc_kc_1')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                  >
                    <span>1. Why do routine paraffin-embedded H&amp;E sections show empty vacuoles in fatty liver tissue?</span>
                    {openDetails['fc_kc_1'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
                    )}
                  </button>
                  {openDetails['fc_kc_1'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Organic processing solvents (alcohol and xylene) dissolve and extract neutral lipids during paraffin embedding, leaving clear spaces where lipid was located.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('fc_kc_2')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                  >
                    <span>2. What key nuclear change distinguishes macrovesicular fatty change from microvesicular fatty change?</span>
                    {openDetails['fc_kc_2'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
                    )}
                  </button>
                  {openDetails['fc_kc_2'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      In macrovesicular fatty change, a single large lipid droplet pushes the nucleus to the cell periphery. In microvesicular, multiple small droplets surround a central nucleus.
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('fc_kc_3')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                  >
                    <span>3. Is fatty change reversible?</span>
                    {openDetails['fc_kc_3'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
                    )}
                  </button>
                  {openDetails['fc_kc_3'] && (
                    <p className="mt-2 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Yes. Fatty change is inherently a reversible metabolic alteration if the inciting cause (e.g., anorexia, energy deficit, or toxin) is resolved before irreversible necrosis occurs.
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
      lessonTitle="Fatty Change (Lipidosis / Steatosis)"
      header={
        <MetabolismHeader
          title="Fatty Change (Lipidosis / Steatosis)"
          subtitle="Abnormal accumulation of neutral triglycerides within parenchymal cells."
          category="General Pathology"
          lessonId="fatty-change"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={FATTY_CHANGE_SECTIONS}
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
          previous={{
            id: 'intracellular-accumulations',
            title: 'Intracellular Accumulations',
          }}
          next={{
            id: 'glycogen-accumulation',
            title: 'Glycogen Accumulation',
          }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
