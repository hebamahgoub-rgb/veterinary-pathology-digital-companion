import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import {
  LessonSectionNavigator,
  LessonSectionItem,
} from '../metabolism/LessonSectionNavigator';
import { ReadAloudControls } from '../metabolism/ReadAloudControls';

export type { LessonSectionItem };

export interface SegmentedLessonLayoutProps {
  header: React.ReactNode;
  lessonTitle: string;
  sections: LessonSectionItem[];
  currentIndex: number;
  completedIndices: number[];
  onSelectSection: (index: number) => void;
  onNextSection: () => void;
  onPreviousSection: () => void;
  onCompleteLesson: () => void;
  onBackToCurriculum?: () => void;
  children: React.ReactNode;
  footerNav?: React.ReactNode;
  fontSize?: 'standard' | 'large' | 'scholar';
  containerId?: string;
}

export const SegmentedLessonLayout: React.FC<SegmentedLessonLayoutProps> = ({
  header,
  lessonTitle,
  sections,
  currentIndex,
  completedIndices,
  onSelectSection,
  onNextSection,
  onPreviousSection,
  onCompleteLesson,
  onBackToCurriculum,
  children,
  footerNav,
  fontSize = 'standard',
  containerId = 'segmented-lesson-container',
}) => {
  const isLastSection = currentIndex === sections.length - 1;
  const currentSection = sections[currentIndex] || sections[0];
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div
      id={containerId}
      className="pb-24 pt-3 px-4 max-w-4xl mx-auto space-y-5"
    >
      {/* Scroll anchor for smooth transition between segments */}
      <div id="lesson-content-top" className="scroll-mt-20 -mb-5" />

      {/* Lesson Header with Breadcrumbs, Title, Bookmark & Text Size Controls */}
      {header}

      {/* Compact Section Navigator directly beneath the header */}
      <LessonSectionNavigator
        sections={sections}
        currentIndex={currentIndex}
        completedIndices={completedIndices}
        onSelectSection={onSelectSection}
      />

      {/* Accessible Study Segment Read Aloud Tool */}
      <ReadAloudControls
        segmentContainerId={`segment-content-${currentSection.id}`}
        segmentId={currentSection.id}
        sectionTitle={currentSection.title}
      />

      {/* Active Segment Content */}
      <main
        id={`segment-content-${currentSection.id}`}
        data-typography-mode={fontSize}
        className={`space-y-5 academic-content-container typography-mode-${fontSize}`}
      >
        {children}
      </main>

      {/* Intra-Lesson Segment Navigation Card */}
      <div
        id="segment-bottom-nav"
        className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        {/* Previous Section Button */}
        {prevSection ? (
          <button
            id="prev-section-btn"
            onClick={onPreviousSection}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-slate-500 flex-shrink-0" />
            <div className="text-left">
              <span className="block text-[10px] text-slate-400 font-normal">
                Previous Segment
              </span>
              <span className="truncate max-w-[200px] block">
                {prevSection.shortTitle || prevSection.title}
              </span>
            </div>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Next Section or Complete Lesson Button */}
        {nextSection ? (
          <button
            id="next-section-btn"
            onClick={onNextSection}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <div className="text-right">
              <span className="block text-[10px] text-teal-200 font-normal">
                Next Segment
              </span>
              <span className="truncate max-w-[200px] block">
                {nextSection.shortTitle || nextSection.title}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-teal-200 flex-shrink-0" />
          </button>
        ) : (
          <button
            id="complete-lesson-btn"
            onClick={onCompleteLesson}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <span>Complete {lessonTitle}</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-200 flex-shrink-0" />
          </button>
        )}
      </div>

      {/* Return to General Pathology Curriculum Footer */}
      {footerNav}
    </div>
  );
};
