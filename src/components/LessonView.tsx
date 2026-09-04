import React from 'react';
import { ChevronLeft, Info } from 'lucide-react';
import { isLessonPublished } from '../data/pathologyData';
import { ScreenView } from '../types';
import { ModuleOverviewPage } from './metabolism/ModuleOverviewPage';
import { IntracellularAccumulationsPage } from './metabolism/IntracellularAccumulationsPage';
import { FattyChangePage } from './metabolism/FattyChangePage';
import { GlycogenAccumulationPage } from './metabolism/GlycogenAccumulationPage';
import { ProteinHyalinePage } from './metabolism/ProteinHyalinePage';
import { AmyloidosisPage } from './metabolism/AmyloidosisPage';
import { MucinMyxoidPage } from './metabolism/MucinMyxoidPage';
import { PathologicalPigmentsPage } from './metabolism/PathologicalPigmentsPage';
import { PathologicalCalcificationPage } from './metabolism/PathologicalCalcificationPage';
import { CrystalsUratesPage } from './metabolism/CrystalsUratesPage';
import { PracticalPathologyGalleryPage } from './metabolism/PracticalPathologyGalleryPage';
import { TestYourselfPage } from './metabolism/TestYourselfPage';
import { VideosFurtherLearningPage } from './metabolism/VideosFurtherLearningPage';
import { CellInjuryPage } from './cell-injury/CellInjuryPage';
import { InflammationPage } from './inflammation/InflammationPage';
import { CirculatoryPage } from './circulatory/CirculatoryPage';
import { ImmunePage } from './immune/ImmunePage';
import { GrowthPage } from './growth/GrowthPage';

interface LessonViewProps {
  lessonId: string;
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
  isSaved: boolean;
  onToggleSave: (lesson: { id: string; title: string; category: string }) => void;
  fontSize?: 'standard' | 'large' | 'scholar';
}

export const LessonView: React.FC<LessonViewProps> = ({
  lessonId,
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
}) => {
  // If lesson is unpublished or unrecognized, display neutral notice
  if (!isLessonPublished(lessonId)) {
    return (
      <div id="lesson-page-container" className="pb-28 pt-2 px-4 max-w-2xl mx-auto space-y-4">
        {/* Breadcrumb path */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-teal-800 transition-colors whitespace-nowrap"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate({ type: 'general_pathology' })}
            className="hover:text-teal-800 transition-colors whitespace-nowrap"
          >
            General Pathology
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-800 truncate whitespace-nowrap">
            Unpublished Lesson
          </span>
        </div>

        {/* Unpublished notice card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center mx-auto">
            <Info className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <span className="text-[11px] font-bold text-amber-900 bg-amber-50 border border-amber-300/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono-code">
              Content Migration
            </span>
            <h2 className="text-xl font-bold text-slate-900 font-serif-academic pt-1">
              Not yet published
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              This lesson is not yet published. It will become available after its reviewed text and required illustrations are imported.
            </p>
          </div>

          <div className="pt-3">
            <button
              id="return-to-general-pathology-btn"
              onClick={() => onNavigate({ type: 'general_pathology' })}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-medium text-sm transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              Return to General Pathology
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Route to published modules
  switch (lessonId) {
    // 1. Disturbance in Cell Metabolism (GEN-01)
    case 'module-overview':
    case 'overview':
      return (
        <ModuleOverviewPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'intracellular-accumulations':
      return (
        <IntracellularAccumulationsPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'fatty-change':
      return (
        <FattyChangePage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'glycogen-accumulation':
      return (
        <GlycogenAccumulationPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'protein-accumulation-hyaline':
      return (
        <ProteinHyalinePage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'amyloidosis':
      return (
        <AmyloidosisPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'mucin-myxoid-change':
      return (
        <MucinMyxoidPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'pathological-pigments':
      return (
        <PathologicalPigmentsPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'pathological-calcification':
      return (
        <PathologicalCalcificationPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'crystals-and-urates':
      return (
        <CrystalsUratesPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'practical-pathology-gallery':
      return (
        <PracticalPathologyGalleryPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'test-yourself':
      return (
        <TestYourselfPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );
    case 'videos-further-learning':
      return (
        <VideosFurtherLearningPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      );

    // 2. Cell Injury and Cell Death (GEN-02)
    case 'cell-injury-cell-death':
    case 'cid-start-here':
    case 'cid-causes':
    case 'cid-mechanisms':
    case 'cid-reversible-injury':
    case 'cid-irreversible-injury':
    case 'cid-necrosis':
    case 'cid-patterns-of-necrosis':
    case 'cid-apoptosis':
    case 'cid-necrosis-vs-apoptosis':
    case 'cid-cellular-adaptations':
    case 'cid-practical-gallery':
    case 'cid-test-yourself':
    case 'cid-videos-learning':
    case 'reversible-injury-hydropic':
    case 'necrosis-subtypes':
    case 'fat-gangrenous-necrosis':
    case 'apoptosis-vs-necrosis': {
      let initialSectionId: string | undefined;
      if (lessonId.startsWith('cid-')) {
        initialSectionId = lessonId;
      } else if (lessonId === 'reversible-injury-hydropic') {
        initialSectionId = 'cid-reversible-injury';
      } else if (lessonId === 'necrosis-subtypes') {
        initialSectionId = 'cid-patterns-of-necrosis';
      } else if (lessonId === 'fat-gangrenous-necrosis') {
        initialSectionId = 'cid-patterns-of-necrosis';
      } else if (lessonId === 'apoptosis-vs-necrosis') {
        initialSectionId = 'cid-necrosis-vs-apoptosis';
      }
      return (
        <CellInjuryPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          initialSectionId={initialSectionId}
        />
      );
    }

    // 3. Inflammation (GEN-03)
    case 'inflammation':
    case 'inf-start-here':
    case 'inf-immunity-bg':
    case 'inf-definition-causes-signs':
    case 'inf-overview':
    case 'inf-acute-overview':
    case 'inf-vascular':
    case 'inf-vascular-events':
    case 'inf-cellular':
    case 'inf-leukocyte-recruitment':
    case 'inf-leukocyte-activation':
    case 'inf-mediators':
    case 'inf-plasma-mediators':
    case 'inf-morphologic-patterns':
    case 'inf-morphological-patterns':
    case 'inf-serous-fibrinous':
    case 'inf-suppurative':
    case 'inf-outcomes':
    case 'inf-chronic-inflammation':
    case 'inf-granulomatous':
    case 'inf-systemic-effects':
    case 'inf-healing-repair':
    case 'inf-tissue-repair':
    case 'inf-practical-gallery':
    case 'inf-test-yourself':
    case 'inf-further-learning':
    case 'acute-vascular-cellular':
    case 'exudate-classification':
    case 'granulomatous-inflammation':
    case 'chemical-mediators':
    case 'tissue-repair-fibrosis': {
      let initialSectionId: string | undefined;
      if (lessonId === 'inflammation') {
        initialSectionId = undefined;
      } else if (lessonId === 'acute-vascular-cellular' || lessonId === 'inf-vascular') {
        initialSectionId = 'inf-vascular-events';
      } else if (lessonId === 'inf-cellular' || lessonId === 'inf-leukocyte-activation') {
        initialSectionId = 'inf-leukocyte-recruitment';
      } else if (lessonId === 'chemical-mediators' || lessonId === 'inf-plasma-mediators') {
        initialSectionId = 'inf-mediators';
      } else if (
        lessonId === 'exudate-classification' ||
        lessonId === 'inf-morphologic-patterns' ||
        lessonId === 'inf-serous-fibrinous' ||
        lessonId === 'inf-suppurative'
      ) {
        initialSectionId = 'inf-morphological-patterns';
      } else if (lessonId === 'granulomatous-inflammation') {
        initialSectionId = 'inf-granulomatous';
      } else if (lessonId === 'tissue-repair-fibrosis' || lessonId === 'inf-tissue-repair') {
        initialSectionId = 'inf-healing-repair';
      } else if (lessonId === 'inf-overview') {
        initialSectionId = 'inf-acute-overview';
      } else if (lessonId.startsWith('inf-')) {
        initialSectionId = lessonId;
      }
      return (
        <InflammationPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          initialSectionId={initialSectionId}
        />
      );
    }

    // 4. Circulatory Disturbances (GEN-04)
    case 'circulatory-disturbances':
    case 'cir-start-here':
    case 'cir-overview':
    case 'cir-hyperemia-congestion':
    case 'cir-edema':
    case 'cir-edema-pathogenesis':
    case 'cir-hemorrhage':
    case 'cir-hemostasis':
    case 'cir-thrombosis':
    case 'cir-thrombus-morphology':
    case 'cir-embolism':
    case 'cir-ischemia':
    case 'cir-infarction':
    case 'cir-shock':
    case 'cir-dic':
    case 'cir-practical-gallery':
    case 'cir-test-yourself':
    case 'cir-further-learning':
    case 'cir-videos-learning':
    case 'hyperemia-congestion':
    case 'edema-pathogenesis':
    case 'hemorrhage-hemostasis':
    case 'thrombosis-virchow-triad':
    case 'infarction-shock': {
      let initialSectionId: string | undefined;
      if (lessonId === 'circulatory-disturbances') {
        initialSectionId = undefined;
      } else if (lessonId === 'hyperemia-congestion') {
        initialSectionId = 'cir-hyperemia-congestion';
      } else if (lessonId === 'edema-pathogenesis' || lessonId === 'cir-edema-pathogenesis') {
        initialSectionId = 'cir-edema';
      } else if (lessonId === 'hemorrhage-hemostasis') {
        initialSectionId = 'cir-hemostasis';
      } else if (lessonId === 'thrombosis-virchow-triad' || lessonId === 'cir-thrombus-morphology') {
        initialSectionId = 'cir-thrombosis';
      } else if (lessonId === 'infarction-shock') {
        initialSectionId = 'cir-infarction';
      } else if (lessonId === 'cir-further-learning') {
        initialSectionId = 'cir-videos-learning';
      } else if (lessonId === 'cir-overview') {
        initialSectionId = 'cir-start-here';
      } else if (lessonId.startsWith('cir-')) {
        initialSectionId = lessonId;
      }
      return (
        <CirculatoryPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          initialSectionId={initialSectionId}
        />
      );
    }

    // 5. Disorders of the Immune System (GEN-05)
    case 'disorders-of-the-immune-system':
    case 'immune-system':
    case 'imm-start-here':
    case 'imm-overview':
    case 'imm-cells':
    case 'imm-tissues':
    case 'imm-cytokines':
    case 'imm-mhc':
    case 'imm-hypersensitivity':
    case 'imm-autoimmune':
    case 'imm-immunodeficiency':
    case 'imm-amyloidosis':
    case 'imm-practical-gallery':
    case 'imm-test-yourself':
    case 'imm-further-learning':
    case 'hypersensitivity-reactions':
    case 'autoimmune-diseases':
    case 'immunodeficiency-disorders': {
      let initialSectionId: string | undefined;
      if (lessonId === 'disorders-of-the-immune-system' || lessonId === 'immune-system') {
        initialSectionId = undefined;
      } else if (lessonId === 'hypersensitivity-reactions') {
        initialSectionId = 'imm-hypersensitivity';
      } else if (lessonId === 'autoimmune-diseases') {
        initialSectionId = 'imm-autoimmune';
      } else if (lessonId === 'immunodeficiency-disorders') {
        initialSectionId = 'imm-immunodeficiency';
      } else if (lessonId.startsWith('imm-')) {
        initialSectionId = lessonId;
      }
      return (
        <ImmunePage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          initialSectionId={initialSectionId}
        />
      );
    }

    // 6. Disorders of Growth (GEN-06)
    case 'disorders-of-growth':
    case 'gro-start-here':
    case 'gro-adaptations':
    case 'gro-developmental':
    case 'gro-atrophy':
    case 'gro-hypertrophy':
    case 'gro-hyperplasia':
    case 'gro-metaplasia':
    case 'gro-dysplasia':
    case 'gro-neoplasia-overview':
    case 'gro-practical-gallery':
    case 'gro-test-yourself':
    case 'gro-further-learning':
    case 'gro-reference-table':
    case 'developmental-anomalies':
    case 'atrophy-hypertrophy-hyperplasia':
    case 'metaplasia-dysplasia':
    case 'intracellular-signaling-growth': {
      let initialSectionId: string | undefined;
      if (lessonId === 'disorders-of-growth') {
        initialSectionId = undefined;
      } else if (lessonId === 'developmental-anomalies') {
        initialSectionId = 'gro-developmental';
      } else if (lessonId === 'atrophy-hypertrophy-hyperplasia' || lessonId === 'intracellular-signaling-growth') {
        initialSectionId = 'gro-adaptations';
      } else if (lessonId === 'metaplasia-dysplasia') {
        initialSectionId = 'gro-metaplasia';
      } else if (lessonId.startsWith('gro-')) {
        initialSectionId = lessonId;
      }
      return (
        <GrowthPage
          onNavigate={onNavigate}
          onSelectLesson={onSelectLesson}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          initialSectionId={initialSectionId}
        />
      );
    }

    default:
      return (
        <div id="lesson-page-container" className="pb-28 pt-2 px-4 max-w-2xl mx-auto space-y-4">
          {/* Breadcrumb path */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="hover:text-teal-800 transition-colors whitespace-nowrap"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate({ type: 'general_pathology' })}
              className="hover:text-teal-800 transition-colors whitespace-nowrap"
            >
              General Pathology
            </button>
            <span>/</span>
            <span className="font-semibold text-slate-800 truncate whitespace-nowrap">
              Not Yet Published
            </span>
          </div>

          {/* Unpublished notice card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center mx-auto">
              <Info className="w-6 h-6" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <span className="text-[11px] font-bold text-amber-900 bg-amber-50 border border-amber-300/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono-code">
                Content Migration
              </span>
              <h2 className="text-xl font-bold text-slate-900 font-serif-academic pt-1">
                Not yet published
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                This curriculum module is currently under development or awaiting content migration. It will become available after its reviewed text and required illustrations are imported.
              </p>
            </div>

            <div className="pt-3">
              <button
                id="return-to-general-pathology-btn"
                onClick={() => onNavigate({ type: 'general_pathology' })}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-medium text-sm transition-colors shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
                Return to General Pathology
              </button>
            </div>
          </div>
        </div>
      );
  }
};
