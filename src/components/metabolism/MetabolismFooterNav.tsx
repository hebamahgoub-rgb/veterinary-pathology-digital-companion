import React from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { ScreenView } from '../../types';

interface NavTarget {
  id: string;
  title: string;
}

interface MetabolismFooterNavProps {
  previous?: NavTarget;
  next?: NavTarget;
  onSelectLesson: (id: string) => void;
  onNavigate: (view: ScreenView) => void;
}

export const MetabolismFooterNav: React.FC<MetabolismFooterNavProps> = ({
  previous,
  next,
  onSelectLesson,
  onNavigate,
}) => {
  return (
    <footer className="mt-8 pt-4 border-t border-slate-200 space-y-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
        {previous ? (
          <button
            onClick={() => onSelectLesson(previous.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-slate-400" />
            <span className="truncate max-w-[200px]">← {previous.title}</span>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        <button
          onClick={() =>
            onNavigate({
              type: 'topic_detail',
              topicId: 'disturbance-cell-metabolism',
            })
          }
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-teal-800 hover:bg-slate-100 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Module Landing Page</span>
        </button>

        {next ? (
          <button
            onClick={() => onSelectLesson(next.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-end gap-2 px-4 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <span className="truncate max-w-[200px]">{next.title} →</span>
            <ChevronRight className="w-4 h-4 text-teal-200" />
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </footer>
  );
};
