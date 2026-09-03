import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import {
  LessonSectionNavigator,
  LessonSectionItem,
} from './LessonSectionNavigator';
import { ReadAloudControls } from './ReadAloudControls';

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
  children: React.ReactNode;
  footerNav?: React.ReactNode;
  fontClass?: string;
  fontSize?: 'standard' | 'large' | 'scholar';
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
  children,
  footerNav,
  fontClass = '',
  fontSize = 'standard',
}) => {
  const isFirstSection = currentIndex === 0;
  const isLastSection = currentIndex === sections.length - 1;
  const currentSection = sections[currentIndex] || sections[0];
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div
      id="segmented-lesson-container"
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
            <div className="text-left min-w-0">
              <span className="text-[10px] text-slate-400 block font-normal leading-none mb-0.5">
                Previous section
              </span>
              <span className="truncate block max-w-[180px] sm:max-w-[200px]">
                {prevSection.shortTitle || prevSection.title}
              </span>
            </div>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Center Progress Text */}
        <div className="text-center text-xs text-slate-500 font-medium hidden md:block">
          Section <strong className="text-teal-900">{currentIndex + 1}</strong> of{' '}
          <strong>{sections.length}</strong>
        </div>

        {/* Next Section or Complete Lesson Button */}
        {nextSection ? (
          <button
            id="next-section-btn"
            onClick={onNextSection}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer ml-auto"
          >
            <div className="text-right min-w-0">
              <span className="text-[10px] text-teal-200 block font-normal leading-none mb-0.5">
                Next section
              </span>
              <span className="truncate block max-w-[180px] sm:max-w-[200px]">
                {nextSection.shortTitle || nextSection.title}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-teal-200 flex-shrink-0" />
          </button>
        ) : (
          <button
            id="complete-lesson-btn"
            onClick={onCompleteLesson}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer ml-auto"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-200 flex-shrink-0" />
            <span>Complete Lesson · Return to DICM</span>
          </button>
        )}
      </div>

      {/* Completion Card & Inter-Lesson Navigation: ONLY shown on the final segment */}
      {isLastSection && (
        <div id="final-segment-footer-group" className="space-y-4 pt-2">
          {/* Study Milestone Badge */}
          <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-emerald-950 font-sans">
                  Lesson Completed!
                </h4>
                <p className="text-xs text-emerald-800 mt-0.5">
                  You have reviewed all {sections.length} study segments of {lessonTitle}.
                </p>
              </div>
            </div>
            <button
              onClick={onCompleteLesson}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition-colors shadow-2xs whitespace-nowrap"
            >
              <span>DICM Curriculum</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
            </button>
          </div>

          {/* Inter-Lesson Navigation (between Fatty Change and other DICM lessons) */}
          {footerNav}
        </div>
      )}
    </div>
  );
};
