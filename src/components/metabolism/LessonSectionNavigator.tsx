import React, { useState } from 'react';
import {
  List,
  X,
  CheckCircle2,
  ChevronRight,
  Compass,
  Layers,
} from 'lucide-react';

export interface LessonSectionItem {
  id: string;
  title: string;
  shortTitle?: string;
  shortLabel?: string;
  badge?: string;
}

export interface LessonSectionNavigatorProps {
  sections: LessonSectionItem[];
  currentIndex: number;
  completedIndices: number[];
  onSelectSection: (index: number) => void;
  className?: string;
}

export const LessonSectionNavigator: React.FC<LessonSectionNavigatorProps> = ({
  sections,
  currentIndex,
  completedIndices,
  onSelectSection,
  className = '',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentSection = sections[currentIndex] || sections[0];
  const progressPercent = Math.round(
    ((currentIndex + 1) / sections.length) * 100
  );
  const completedCount = completedIndices.length;

  const handleSelect = (index: number) => {
    onSelectSection(index);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Compact Section Navigator Bar */}
      <div
        id="lesson-section-navigator"
        className={`sticky top-14 z-30 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-xs transition-all ${className}`}
      >
        <div className="flex items-center justify-between gap-2.5">
          {/* Left: Counter & Title */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[11px] font-bold text-teal-900 bg-teal-50 border border-teal-200/90 px-2 py-0.5 rounded-full font-mono-code whitespace-nowrap">
                {currentIndex + 1} of {sections.length}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider hidden xs:inline">
                Current Section
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate font-sans">
              {currentSection.title}
            </h3>
          </div>

          {/* Right: Sections Button */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              id="sections-menu-button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open lesson sections menu"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
            >
              <List className="w-3.5 h-3.5 text-teal-800" />
              <span>Sections</span>
              <span className="text-[10px] font-mono-code font-bold bg-teal-800 text-white rounded-full px-1.5 py-0.2">
                {sections.length}
              </span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2.5 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium mb-1">
            <span>Lesson Progress</span>
            <span className="font-mono-code font-semibold text-teal-900">
              {progressPercent}% · {completedCount} of {sections.length} done
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
            <div
              className="bg-teal-700 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Sections Modal / Bottom Sheet */}
      {isMenuOpen && (
        <div
          id="sections-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            id="sections-modal-content"
            className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between gap-3 bg-slate-50/70">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 font-mono-code">
                    Lesson Outline
                  </span>
                  <span>•</span>
                  <span className="text-xs text-slate-500 font-medium">
                    {completedCount} of {sections.length} completed
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans mt-0.5 truncate">
                  Study Segments
                </h3>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 transition-colors"
                aria-label="Close outline"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sections List */}
            <div className="p-3 sm:p-4 overflow-y-auto space-y-1.5 flex-1 divide-y divide-slate-100">
              {sections.map((section, idx) => {
                const isCurrent = idx === currentIndex;
                const isCompleted = completedIndices.includes(idx);

                return (
                  <button
                    key={section.id}
                    id={`section-select-item-${idx}`}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 group cursor-pointer ${
                      isCurrent
                        ? 'bg-teal-50/80 border border-teal-300 text-teal-950 font-semibold'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono-code font-bold flex-shrink-0 transition-colors ${
                          isCurrent
                            ? 'bg-teal-800 text-white shadow-xs'
                            : isCompleted
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}
                      >
                        {isCompleted && !isCurrent ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                        ) : (
                          String(idx + 1).padStart(2, '0')
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-medium leading-snug truncate block">
                            {section.title}
                          </span>
                        </div>
                        {section.badge && (
                          <span className="text-[10px] text-slate-500 font-normal">
                            {section.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {isCurrent ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-white border border-teal-300 px-2 py-0.5 rounded-full font-mono-code shadow-2xs">
                          Current
                        </span>
                      ) : isCompleted ? (
                        <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1">
                          Done
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span>Select any segment to jump directly</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
