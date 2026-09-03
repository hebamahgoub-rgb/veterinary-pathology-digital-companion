import React, { useState } from 'react';
import { ScreenView } from '../../types';
import { MetabolismHeader } from './MetabolismHeader';
import { MetabolismFooterNav } from './MetabolismFooterNav';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from './SegmentedLessonLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PracticalPathologyGalleryPageProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
}

interface GalleryCase {
  id: string;
  category: string;
  badge: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  caption: string;
  citationText: string;
  sourceUrl?: string;
  licenseText?: string;
  licenseUrl?: string;
  context: string;
  morphology: string;
  diagnosis: string;
  teachingPoint: string;
}

const GALLERY_CASES: GalleryCase[] = [
  {
    id: 'case-01',
    category: 'Case 01 • Cellular Swelling',
    badge: 'Comparative Slide',
    title: 'Hepatocellular Ballooning',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Jl2KREyBWFPhhlmtjQ6qtU7D2hOVRfde',
    imageAlt: 'High-magnification liver micrograph demonstrating enlarged ballooned hepatocytes in steatohepatitis.',
    caption: 'Hepatocellular ballooning in steatohepatitis, trichrome stain.',
    citationText: 'Image: Nephron; annotated version uploaded by Signimu, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ballooning_degeneration_high_mag_cropped_annotated.jpg',
    licenseText: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    context: 'Representative liver section demonstrating marked cellular swelling associated with hepatocellular injury.',
    morphology: 'Enlarged hepatocytes have pale, rarefied cytoplasm, illustrating loss of normal cytoplasmic density.',
    diagnosis: 'Hepatocellular ballooning (cellular swelling).',
    teachingPoint: 'Cellular swelling reflects disturbed ionic and water homeostasis. Ballooning degeneration is a morphologically advanced form of cell swelling and should not be attributed to a particular cause without clinical context.',
  },
  {
    id: 'case-02',
    category: 'Case 02 • Fatty Change',
    badge: 'Comparative Slide',
    title: 'Hepatic Lipid Steatosis',
    imageUrl: 'https://lh3.googleusercontent.com/d/1VsdJlgbzNEWsISNp-o4DNY2s28kp9V3C',
    imageAlt: 'Liver section showing hepatocytes containing variably sized clear lipid vacuoles, with some nuclei displaced toward the cell periphery, H&E, 40×.',
    caption: 'Hepatic lipid steatosis, H&E, 40×.',
    citationText: 'Image: Department of Pathology, Calicut Medical College, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fatty_change_liver_-_Lipid_steatosis_40X.jpg',
    licenseText: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    context: 'Representative teaching section demonstrating intracellular lipid accumulation in hepatocytes.',
    morphology: 'Variably sized clear cytoplasmic vacuoles; larger vacuoles displace hepatocyte nuclei toward the periphery.',
    diagnosis: 'Hepatic lipid steatosis (fatty change).',
    teachingPoint: 'Routine tissue processing removes neutral lipid, leaving optically clear vacuoles. Lipid can be demonstrated in frozen sections using stains such as Oil Red O.',
  },
  {
    id: 'case-03',
    category: 'Case 03 • Glycogen',
    badge: 'Comparative Slide',
    title: 'Hepatic Glycogen Accumulation',
    imageUrl: 'https://lh3.googleusercontent.com/d/1ZD0Nw2VIjhrnjX4V3P-_sJUGTb_D1ODT',
    imageAlt: 'Liver biopsy showing uniformly distended hepatocytes with clear to pale eosinophilic cytoplasm caused by glycogen accumulation, H&E, 20×.',
    caption: 'Hepatic glycogen accumulation, H&E, 20×.',
    citationText: 'Image: Department of Pathology, Calicut Medical College, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Liver_biopsy_of_glycogen_storage_disorder_20X.jpg',
    licenseText: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    context: 'Liver biopsy demonstrating a glycogen-storage disorder.',
    morphology: 'Hepatocytes are uniformly distended by clear to pale eosinophilic cytoplasm.',
    diagnosis: 'Hepatocellular glycogen accumulation.',
    teachingPoint: 'Glycogen commonly produces diffuse, feathery cytoplasmic clearing while nuclei remain relatively central. PAS positivity that is removed by diastase supports glycogen identification.',
  },
  {
    id: 'case-04',
    category: 'Case 04 • Hyaline Change',
    badge: 'Comparative Slide',
    title: 'Mallory–Denk Body',
    imageUrl: 'https://lh3.googleusercontent.com/d/1EYsm0C33tx8cw57Fpjl91vQs6m3cE64v',
    imageAlt: 'High-magnification liver micrograph showing an eosinophilic rope-like Mallory–Denk body within a hepatocyte, H&E.',
    caption: 'Mallory–Denk body in a liver biopsy, H&E, original magnification 400×.',
    citationText: 'Image: Nephron, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mallory_body_high_mag.jpg',
    licenseText: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    context: 'Liver biopsy demonstrating an intracellular protein aggregate.',
    morphology: 'Irregular eosinophilic, rope-like cytoplasmic inclusion within an injured hepatocyte.',
    diagnosis: 'Mallory–Denk body, an example of intracellular hyaline change.',
    teachingPoint: '“Hyaline” is a descriptive light-microscopic term rather than a specific substance. Mallory–Denk bodies contain aggregated cytoskeletal proteins.',
  },
  {
    id: 'case-05',
    category: 'Case 05 • Dystrophic Calcification',
    badge: 'Comparative Slide',
    title: 'Dystrophic Calcification in Atherosclerosis',
    imageUrl: 'https://lh3.googleusercontent.com/d/1D6V1X4-At877uGpPZJRKrtGyb6ncq-Sq',
    imageAlt: 'Histological section of an advanced atherosclerotic plaque containing dystrophic calcification, H&E.',
    caption: 'Advanced atherosclerosis with dystrophic calcification, H&E.',
    citationText: 'Image: Patho, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Atherosclerosis,_HE_7.JPG',
    licenseText: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    context: 'Advanced atherosclerotic lesion containing mineral deposition within chronically damaged tissue.',
    morphology: 'Basophilic mineral is deposited within an area of tissue injury and plaque degeneration.',
    diagnosis: 'Dystrophic calcification associated with atherosclerosis.',
    teachingPoint: 'Dystrophic calcification occurs locally in damaged or necrotic tissue and does not require systemic hypercalcaemia.',
  },
  {
    id: 'case-06',
    category: 'Case 06 • Metastatic Calcification',
    badge: 'Comparative Slide',
    title: 'Metastatic Pulmonary Calcification',
    imageUrl: 'https://lh3.googleusercontent.com/d/1BDMVk3eQ8UzRqH-NjGfN7CH1uXEHrAO8',
    imageAlt: 'Lung micrograph showing metastatic calcification involving alveolar walls and blood vessels in an area of acute pneumonitis.',
    caption: 'Metastatic calcification of pulmonary alveolar walls and blood vessels.',
    citationText: 'Image: Yale Rosen, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Metastatic_calcification_Case_141_(4962399264).jpg',
    licenseText: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    context: 'Pulmonary tissue demonstrating mineral deposition along alveolar walls and blood vessels.',
    morphology: 'Basophilic mineral outlines portions of the alveolar septa and vascular walls.',
    diagnosis: 'Metastatic pulmonary calcification.',
    teachingPoint: 'In contrast to dystrophic calcification, metastatic calcification results from disturbed calcium–phosphate metabolism and tends to involve otherwise viable tissues.',
  },
  {
    id: 'case-07',
    category: 'Case 07 • Pigment',
    badge: 'Comparative Slide',
    title: 'Pulmonary Hemosiderosis',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Je57NOpyjukfg5ShWla7SvVu7Z4v-dCy',
    imageAlt: 'Congested lung containing alveolar macrophages filled with coarse golden-brown hemosiderin granules, H&E, 40×.',
    caption: 'Hemosiderin-laden macrophages in chronic pulmonary venous congestion, H&E, 40×.',
    citationText: 'Image: Department of Pathology, Calicut Medical College, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hemosiderin_laden_macrophages_in_chronic_venous_congestion_of_lung_40X.jpg',
    licenseText: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    context: 'Chronic pulmonary venous congestion with recurrent leakage of erythrocytes into alveoli.',
    morphology: 'Alveolar macrophages contain coarse golden-brown cytoplasmic pigment.',
    diagnosis: 'Pulmonary hemosiderosis.',
    teachingPoint: 'Hemosiderin represents stored iron derived from haemoglobin. Perls’ Prussian blue stain can confirm iron by producing a blue reaction product.',
  },
  {
    id: 'case-08',
    category: 'Case 08 • Pigment',
    badge: 'Comparative Slide',
    title: 'Pulmonary Anthracosis',
    imageUrl: 'https://lh3.googleusercontent.com/d/1D6V1X4-At877uGpPZJRKrtGyb6ncq-Sq',
    imageAlt: 'Lung tissue containing alveolar macrophages filled with coarse black carbon pigment without a prominent surrounding inflammatory response, H&E, 100×.',
    caption: 'Carbon-laden alveolar macrophages in pulmonary anthracosis, H&E, 100×.',
    citationText: 'Image: Department of Pathology, Calicut Medical College, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carbon_laden_macrophages_in_lung,_H%26E_100X.jpg',
    licenseText: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    context: 'Inhaled environmental carbon particles phagocytosed by pulmonary macrophages.',
    morphology: 'Coarse black pigment is present within alveolar macrophages without a prominent surrounding inflammatory response.',
    diagnosis: 'Pulmonary anthracosis.',
    teachingPoint: 'Carbon is an exogenous, chemically inert pigment transported by macrophages from the lung toward regional lymphatics.',
  },
  {
    id: 'case-09',
    category: 'Case 09 • Amyloidosis',
    badge: 'Comparative Slide',
    title: 'Hepatic Amyloidosis',
    imageUrl: 'https://lh3.googleusercontent.com/d/1ah6QFFCoFp4lpjXLz_PGI4NvGfMfywFS',
    imageAlt: 'Liver section stained with Congo red and viewed through crossed polarizing filters, showing characteristic orange-green birefringence of amyloid deposits.',
    caption: 'Hepatic amyloid stained with Congo red and viewed through crossed polarizing filters; 20× objective, scale bar 100 µm.',
    citationText: 'Image: Tulemo, Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Amyloid_Liver_Congo_Red_Bar%3D100um.jpg',
    licenseText: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    context: 'Liver section examined using Congo red and crossed polarizing filters.',
    morphology: 'Extracellular amyloid deposits demonstrate characteristic orange-to-green birefringence under polarized light.',
    diagnosis: 'Hepatic amyloidosis.',
    teachingPoint: 'Congo-red positivity together with characteristic birefringence under crossed polarized light supports the identification of amyloid.',
  },
];

const GALLERY_SECTIONS: LessonSectionItem[] = [
  {
    id: 'cases-swelling-fatty-glycogen',
    title: 'Cases 01–03: Swelling, Steatosis & Glycogen',
    shortLabel: 'Cases 01–03',
  },
  {
    id: 'cases-hyaline-calcification',
    title: 'Cases 04–06: Hyaline & Pathological Calcification',
    shortLabel: 'Cases 04–06',
  },
  {
    id: 'cases-pigments-amyloid',
    title: 'Cases 07–09: Pigments & Amyloidosis',
    shortLabel: 'Cases 07–09',
  },
  {
    id: 'gallery-self-assessment',
    title: 'Gallery Self-Assessment',
    shortLabel: 'Assessment',
  },
];

export const PracticalPathologyGalleryPage: React.FC<PracticalPathologyGalleryPageProps> = ({
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
    if (currentSectionIndex < GALLERY_SECTIONS.length - 1) {
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

  const renderCaseCard = (item: GalleryCase) => (
    <article
      key={item.id}
      id={item.id}
      className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
    >
      <div>
        {/* Header */}
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-[11px] font-semibold bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-full whitespace-nowrap">
            {item.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="px-4 pt-3 pb-2 text-sm sm:text-base font-bold text-slate-900 font-sans">
          {item.title}
        </h3>

        {/* Image & Caption */}
        <div className="border-y border-slate-200 bg-slate-100">
          <img
            src={item.imageUrl}
            alt={item.imageAlt}
            className="w-full h-52 object-contain bg-slate-100"
            loading="lazy"
          />
          <div className="px-3 py-2 text-[11px] text-slate-600 bg-slate-50/90 leading-tight">
            <p>{item.caption}</p>
            <p className="text-slate-500 mt-0.5">
              {item.citationText}{' '}
              {item.sourceUrl && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline hover:text-teal-900"
                >
                  Source
                </a>
              )}
              {item.licenseText && item.licenseUrl && (
                <>
                  {' · '}
                  <a
                    href={item.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 underline hover:text-teal-900"
                  >
                    {item.licenseText}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Metadata */}
        <div className="p-4 space-y-2 text-xs sm:text-sm text-slate-700">
          <p><strong>Context:</strong> {item.context}</p>
          <p><strong>Morphology:</strong> {item.morphology}</p>
          <p><strong>Diagnosis:</strong> <span className="font-semibold text-slate-900">{item.diagnosis}</span></p>
        </div>
      </div>

      {/* Teaching Point */}
      <div className="p-4 pt-0">
        <div className="bg-teal-50/80 border-l-4 border-teal-700 p-3 rounded-r-xl text-xs text-teal-950 leading-relaxed">
          <strong className="text-teal-900 font-bold block mb-0.5">Teaching point:</strong>
          {item.teachingPoint}
        </div>
      </div>
    </article>
  );

  const renderCurrentSegment = () => {
    switch (currentSectionIndex) {
      case 0:
        // Cases 01–03
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Intro statement */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="border-l-4 border-teal-700 pl-3.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans mb-1">
                  Practical Pathology Micrograph Gallery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Review high-resolution comparative micrographs spanning the major lesions of cellular disturbance: swelling, lipid steatosis, glycogen, hyaline changes, pathological calcification, pigments, and amyloidosis. Each case includes key morphological criteria and practical diagnostic pearls.
                </p>
              </div>
            </section>

            {/* Cases 1-3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GALLERY_CASES.slice(0, 3).map(renderCaseCard)}
            </div>
          </div>
        );

      case 1:
        // Cases 04–06
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GALLERY_CASES.slice(3, 6).map(renderCaseCard)}
            </div>
          </div>
        );

      case 2:
        // Cases 07–09
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GALLERY_CASES.slice(6, 9).map(renderCaseCard)}
            </div>
          </div>
        );

      case 3:
        // Self-Assessment Section
        return (
          <div className="space-y-6 animate-in fade-in duration-200">
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-sans border-b border-slate-200 pb-2">
                Self-Assessment
              </h2>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('gal_sa_1')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                  >
                    <span>1. Which morphological feature best separates hepatic lipid steatosis (Case 2) from hepatic glycogen accumulation (Case 3)?</span>
                    {openDetails['gal_sa_1'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {openDetails['gal_sa_1'] && (
                    <p className="mt-2.5 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      In lipid steatosis, sharply defined vacuoles may displace the nucleus toward the cell periphery. Glycogen more often produces diffuse or feathery cytoplasmic clearing with relatively central nuclei.
                    </p>
                  )}
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('gal_sa_2')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                  >
                    <span>2. Which special stain can distinguish the golden-brown pigment in Case 7 from the black exogenous pigment in Case 8?</span>
                    {openDetails['gal_sa_2'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {openDetails['gal_sa_2'] && (
                    <p className="mt-2.5 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      Perls’ Prussian blue stains hemosiderin blue because it contains iron. Carbon does not produce this reaction.
                    </p>
                  )}
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <button
                    onClick={() => toggleDetail('gal_sa_3')}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-900 cursor-pointer"
                  >
                    <span>3. What optical equipment is required to demonstrate the characteristic birefringence of Congo-red-stained amyloid in Case 9?</span>
                    {openDetails['gal_sa_3'] ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {openDetails['gal_sa_3'] && (
                    <p className="mt-2.5 text-xs sm:text-sm text-teal-950 bg-teal-50/80 border border-teal-200 rounded-lg p-2.5 leading-relaxed">
                      A microscope equipped with crossed polarizing filters.
                    </p>
                  )}
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
      lessonTitle="Practical Pathology Gallery"
      header={
        <MetabolismHeader
          title="Practical Pathology Gallery"
          subtitle="Comparative slide gallery and self-assessment for Disturbance in Cell Metabolism."
          category="General Pathology"
          lessonId="practical-pathology-gallery"
          onNavigate={onNavigate}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
        />
      }
      sections={GALLERY_SECTIONS}
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
          previous={{ id: 'crystals-and-urates', title: 'Crystals and Urates' }}
          next={{ id: 'test-yourself', title: 'Test Yourself' }}
          onSelectLesson={onSelectLesson}
          onNavigate={onNavigate}
        />
      }
    >
      {renderCurrentSegment()}
    </SegmentedLessonLayout>
  );
};
