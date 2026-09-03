import React, { useState } from 'react';
import {
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Share2,
  Sparkles,
  Info,
  Layers,
  HelpCircle,
  Award,
  Eye,
  Sliders,
  FileText,
  Volume2,
  Microscope,
  CheckCircle2,
  XCircle,
  Video as VideoIcon,
  Image as ImageIcon,
} from 'lucide-react';
import {
  SAMPLE_AMYLOIDOSIS_LESSON,
  OTHER_SAMPLE_LESSONS,
  isLessonPublished,
} from '../data/pathologyData';
import { LessonData, ScreenView } from '../types';
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
  fontSize = 'standard',
}) => {
  // State for interactive features in fallback/other lessons
  const [polarizedMode, setPolarizedMode] = useState<boolean>(false);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<Record<string, boolean>>({});
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [copiedFeedback, setCopiedFeedback] = useState<boolean>(false);

  // If lesson is unpublished, do NOT display Amyloidosis fallback
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
              Content migration
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

  // Route to the 12 Disturbance in Cell Metabolism (GEN-01) components
  switch (lessonId) {
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
    default:
      break;
  }

  // State for interactive features in fallback/other lessons
  const lessonData: LessonData = SAMPLE_AMYLOIDOSIS_LESSON;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedFeedback(true);
    setTimeout(() => setCopiedFeedback(false), 2000);
  };

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    setSelectedQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    setShowQuizResults((prev) => ({ ...prev, [questionId]: true }));
  };

  // Font size styling
  const contentTextSize =
    fontSize === 'large'
      ? 'text-base sm:text-lg leading-relaxed'
      : fontSize === 'scholar'
      ? 'text-sm sm:text-base font-serif-academic leading-relaxed'
      : 'text-sm sm:text-base leading-relaxed';

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
        <button
          onClick={() =>
            onNavigate({
              type: 'topic_detail',
              topicId: lessonData.topicId || 'disturbance-cell-metabolism',
            })
          }
          className="hover:text-teal-800 transition-colors whitespace-nowrap"
        >
          {lessonData.topicTitle || 'Cell Metabolism'}
        </button>
        <span>/</span>
        <span className="font-semibold text-slate-800 truncate whitespace-nowrap">
          {lessonData.title}
        </span>
      </div>

      {/* Lesson Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono-code">
              {lessonData.difficulty || 'Core Clinical'}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {lessonData.readTime}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id="lesson-share-btn"
              onClick={handleShare}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 active:bg-slate-200 transition-colors relative"
              title="Copy Lesson Link"
              aria-label="Share lesson"
            >
              {copiedFeedback ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            <button
              id="lesson-bookmark-btn"
              onClick={() =>
                onToggleSave({
                  id: lessonData.id,
                  title: lessonData.title,
                  category: lessonData.category,
                })
              }
              className={`p-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-semibold ${
                isSaved
                  ? 'bg-teal-100 text-teal-800 border border-teal-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              aria-label="Save for review"
            >
              <Bookmark
                className={`w-4 h-4 ${isSaved ? 'fill-teal-700 text-teal-700' : ''}`}
              />
              <span className="hidden xs:inline">
                {isSaved ? 'Saved' : 'Save'}
              </span>
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight font-serif-academic">
            {lessonData.title}
          </h1>
          <p className="text-xs sm:text-sm text-teal-800 font-medium mt-1 font-sans">
            {lessonData.subtitle}
          </p>
        </div>

        {/* Species tags */}
        {lessonData.speciesTags && lessonData.speciesTags.length > 0 && (
          <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
              Species Relevance:
            </span>
            {lessonData.speciesTags.map((sp, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
              >
                {sp}
              </span>
            ))}
          </div>
        )}

        {/* Quick Executive Summary */}
        <div className="bg-slate-50 border-l-3 border-teal-700 p-3 rounded-r-xl">
          <p className="text-xs text-slate-700 leading-relaxed font-sans">
            <strong className="text-slate-900 font-semibold">Summary: </strong>
            {lessonData.summary}
          </p>
        </div>
      </div>

      {/* Interactive Specimen & Polarized Light Comparator Placeholder */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <Microscope className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-sans">
                Image placeholder — Specimen to be added
              </h3>
              <p className="text-[11px] text-slate-400">
                Histopathology & Special Stain Placeholder
              </p>
            </div>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">
            Slide Placeholder
          </span>
        </div>

        {/* Interactive Viewer Visual Stage */}
        <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[16/10] sm:aspect-[2/1] flex flex-col justify-between p-3 select-none">
          {/* Background simulated field */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              polarizedMode
                ? 'bg-slate-950 opacity-95'
                : 'bg-rose-950/40 opacity-80'
            }`}
          />

          {/* Microscopic visual simulation layers */}
          <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
            <div className="w-full max-w-xs aspect-square rounded-full border border-slate-700/60 p-4 flex items-center justify-center relative">
              <div
                className={`w-36 h-36 rounded-3xl border-4 transition-all duration-500 flex items-center justify-center text-center p-3 ${
                  polarizedMode
                    ? 'border-emerald-400 bg-emerald-950/40 text-emerald-300 apple-green-glow'
                    : 'border-rose-400/80 bg-rose-900/30 text-rose-200'
                }`}
              >
                <div className="space-y-1">
                  <p className="text-xs font-bold font-mono-code">
                    {polarizedMode
                      ? '✦ Apple-Green Birefringence'
                      : 'Congo Red Staining'}
                  </p>
                  <p className="text-[10px] opacity-80">
                    {polarizedMode
                      ? 'Cross-polarized light'
                      : 'Brightfield view'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay top badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded-md border border-white/10">
              Image placeholder
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                polarizedMode
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-rose-500/80 text-white'
              }`}
            >
              {polarizedMode ? 'Polarized Light ON' : 'Brightfield Mode'}
            </span>
          </div>

          {/* Polarized Light Switcher Trigger */}
          <div className="relative z-10 bg-black/70 backdrop-blur-md rounded-xl p-2 border border-white/10 flex items-center justify-between gap-2">
            <div className="text-[11px] text-slate-300 truncate">
              <span className="font-semibold text-white">Diagnostic Optical Test:</span>{' '}
              {polarizedMode
                ? 'Apple-green birefringence under cross-polarized light'
                : 'Salmon-pink staining under brightfield light'}
            </div>

            <button
              id="toggle-polarization-filter-btn"
              onClick={() => setPolarizedMode(!polarizedMode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 active:scale-95 ${
                polarizedMode
                  ? 'bg-emerald-400 text-slate-950 shadow-sm shadow-emerald-500/50'
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              {polarizedMode ? 'Reset Filter' : 'Apply Polarizer'}
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed italic">
          <strong>Exam Diagnostic Rule:</strong> Amyloid stained with Congo Red demonstrates salmon-pink on brightfield light and diagnostic apple-green birefringence under cross-polarized light.
        </p>
      </div>

      {/* Short Readable Content Sections */}
      <div className="space-y-3">
        {lessonData.sections.map((section) => (
          <article
            key={section.id}
            id={`content-section-${section.id}`}
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3"
          >
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic border-b border-slate-100 pb-2">
              {section.title}
            </h3>

            <div className={`space-y-2.5 text-slate-700 ${contentTextSize}`}>
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Subpoints breakdown if any */}
            {section.subpoints && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {section.subpoints.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-slate-50 border border-slate-200/80 rounded-xl p-3"
                  >
                    <span className="text-xs font-bold text-teal-900 block mb-1 font-sans">
                      {sub.label}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {sub.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Species Clinical Callout if any */}
            {section.clinicalSpeciesCallout && (
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-800 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950 font-sans leading-relaxed">
                  <strong className="font-bold text-amber-900">
                    {section.clinicalSpeciesCallout.species}:{' '}
                  </strong>
                  {section.clinicalSpeciesCallout.note}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Microlearning Video Card Component */}
      {lessonData.video && (
        <div
          id="microlearning-video-card"
          className="bg-white border border-amber-200/90 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 bg-gradient-to-b from-amber-50/40 via-white to-white"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-700 text-amber-100 flex items-center justify-center shadow-xs">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 font-sans">
                  Microlearning Video
                </span>
                <h3 className="text-sm font-bold text-slate-900 font-sans">
                  {lessonData.video.title}
                </h3>
              </div>
            </div>

            <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full font-mono-code">
              {lessonData.video.duration}
            </span>
          </div>

          {/* Video Player Neutral Placeholder */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 border border-slate-800 group flex items-center justify-center shadow-inner">
            <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-4 text-center">
              <VideoIcon className="w-10 h-10 text-slate-600 mb-2" />
              <p className="text-xs font-semibold text-slate-300">
                Video placeholder
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Video content to be added
              </p>
            </div>

            {!videoPlaying ? (
              <button
                id="play-microlearning-video-btn"
                onClick={() => setVideoPlaying(true)}
                className="relative z-10 w-12 h-12 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-lg shadow-teal-500/40 hover:scale-105 active:scale-95 transition-transform font-bold"
                aria-label="Play microlearning video placeholder"
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            ) : (
              <div className="relative z-10 w-full h-full p-4 flex flex-col justify-between text-white bg-slate-950/95 backdrop-blur-xs">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-teal-300">
                    {lessonData.video.title}
                  </span>
                  <button
                    onClick={() => setVideoPlaying(false)}
                    className="text-xs bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded"
                  >
                    Close
                  </button>
                </div>

                <div className="text-center space-y-1">
                  <p className="text-xs text-slate-300">
                    {lessonData.video.speaker}
                  </p>
                  <p className="text-[11px] text-teal-400">
                    {lessonData.video.institution}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-teal-400 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono-code">
                    <span>Video placeholder</span>
                    <span>{lessonData.video.duration}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-slate-400 pointer-events-none">
              <span className="truncate">{lessonData.video.speaker}</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {lessonData.video.summary}
          </p>

          {/* Key Timestamps Placeholder */}
          {lessonData.video.keyTakeaways && (
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                Key Video Topics:
              </p>
              <div className="space-y-1">
                {lessonData.video.keyTakeaways.map((takeaway, tIdx) => (
                  <div
                    key={tIdx}
                    className="text-xs text-slate-700 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1.5 flex items-center gap-2 font-sans"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Key Point Box (Golden Review Callout) */}
      <div
        id="key-point-box"
        className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-md border border-teal-800 space-y-3"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal-400 text-slate-950 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 font-sans">
              High-Yield Summary
            </span>
            <h3 className="text-base font-bold text-white font-sans">
              Key Points
            </h3>
          </div>
        </div>

        <ul className="space-y-2 pt-1 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
          {lessonData.keyPoints.map((point, kIdx) => (
            <li key={kIdx} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-teal-800/80 text-teal-200 border border-teal-600/60 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                {kIdx + 1}
              </span>
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Self-Assessment Quick Knowledge Check */}
      {lessonData.quiz && lessonData.quiz.length > 0 && (
        <div
          id="lesson-quiz-container"
          className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4"
        >
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-800" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                Quick Knowledge Check ({lessonData.quiz.length} Question{lessonData.quiz.length > 1 ? 's' : ''})
              </h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
              Self-Test
            </span>
          </div>

          <div className="space-y-4">
            {lessonData.quiz.map((q, qIdx) => {
              const answeredIndex = selectedQuizAnswers[q.id];
              const isAnswered = showQuizResults[q.id];
              const isCorrect = answeredIndex === q.correctIndex;

              return (
                <div
                  key={q.id}
                  id={`quiz-question-${q.id}`}
                  className="space-y-2.5 border border-slate-100 rounded-xl p-3.5 bg-slate-50/50"
                >
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                    <span className="text-teal-800 font-mono-code mr-1">
                      Q{qIdx + 1}.
                    </span>
                    {q.question}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {q.options.map((option, optIdx) => {
                      const isSelected = answeredIndex === optIdx;
                      let optionClasses =
                        'w-full text-left p-2.5 rounded-xl text-xs transition-all border font-medium flex items-center justify-between gap-2 ';

                      if (!isAnswered) {
                        optionClasses +=
                          'bg-white border-slate-200 hover:border-teal-400 active:bg-teal-50 text-slate-800';
                      } else {
                        if (optIdx === q.correctIndex) {
                          optionClasses +=
                            'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-500/20';
                        } else if (isSelected) {
                          optionClasses +=
                            'bg-rose-50 border-rose-400 text-rose-950 line-through';
                        } else {
                          optionClasses +=
                            'bg-white/60 border-slate-200 text-slate-400 opacity-70';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          id={`quiz-${q.id}-opt-${optIdx}`}
                          disabled={isAnswered}
                          onClick={() => handleAnswerSelect(q.id, optIdx)}
                          className={optionClasses}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{option}</span>
                          </div>

                          {isAnswered && optIdx === q.correctIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          )}
                          {isAnswered && isSelected && optIdx !== q.correctIndex && (
                            <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div
                      className={`p-3 rounded-xl text-xs leading-relaxed border ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                          : 'bg-amber-50 text-amber-950 border-amber-200'
                      }`}
                    >
                      <strong className="block mb-0.5">
                        {isCorrect ? '✓ Correct! ' : 'Note: '}
                      </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Previous / Next Navigation Bar or Topic Return */}
      {lessonData.previousLesson || lessonData.nextLesson ? (
        <div
          id="lesson-prev-next-nav"
          className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-stretch justify-between gap-2.5"
        >
          {lessonData.previousLesson && isLessonPublished(lessonData.previousLesson.id) ? (
            <button
              id="lesson-prev-button"
              onClick={() => onSelectLesson(lessonData.previousLesson!.id)}
              className="flex-1 p-3 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50/20 active:bg-teal-50 transition-all text-left group flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-teal-100 text-slate-500 group-hover:text-teal-800 flex items-center justify-center flex-shrink-0 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">
                  Previous Lesson
                </span>
                <p className="text-xs font-bold text-slate-800 group-hover:text-teal-900 truncate mt-1">
                  {lessonData.previousLesson.title}
                </p>
              </div>
            </button>
          ) : (
            <div className="flex-1" />
          )}

          {lessonData.nextLesson && isLessonPublished(lessonData.nextLesson.id) ? (
            <button
              id="lesson-next-button"
              onClick={() => onSelectLesson(lessonData.nextLesson!.id)}
              className="flex-1 p-3 rounded-xl border border-teal-200 bg-teal-50/40 hover:bg-teal-50 hover:border-teal-500 active:bg-teal-100 transition-all text-right group flex items-center justify-end gap-2.5"
            >
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-teal-700 block leading-none">
                  Next Lesson
                </span>
                <p className="text-xs font-bold text-slate-900 group-hover:text-teal-900 truncate mt-1">
                  {lessonData.nextLesson.title}
                </p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-teal-800 text-white flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      ) : (
        <div
          id="lesson-return-bar"
          className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3"
        >
          <button
            onClick={() => onNavigate({ type: 'topic_detail', topicId: lessonData.topicId || 'disturbance-cell-metabolism' })}
            className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to {lessonData.topicTitle || 'Cell Metabolism'}
          </button>
          <button
            onClick={() => onNavigate({ type: 'general_pathology' })}
            className="text-xs font-semibold text-slate-600 hover:text-teal-900"
          >
            General Pathology Overview →
          </button>
        </div>
      )}
    </div>
  );
};
