import React from 'react';
import {
  Bookmark,
  BookOpen,
  Trash2,
  ChevronRight,
  Sparkles,
  Award,
} from 'lucide-react';
import { ScreenView } from '../types';

interface SavedItem {
  id: string;
  title: string;
  category: string;
  savedAt: string;
}

interface SavedViewProps {
  savedItems: SavedItem[];
  onRemoveSaved: (id: string) => void;
  onSelectLesson: (id: string) => void;
  onNavigate: (view: ScreenView) => void;
}

export const SavedView: React.FC<SavedViewProps> = ({
  savedItems,
  onRemoveSaved,
  onSelectLesson,
  onNavigate,
}) => {
  return (
    <div id="saved-view-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider font-sans">
          <span>Personal Study List</span>
          <span>•</span>
          <span>{savedItems.length} Saved Lessons</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-serif-academic">
          Saved & Bookmarks
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Quickly access your bookmarked veterinary pathology topics, key board exam points, and review material.
        </p>
      </div>

      {/* Saved Items List */}
      <div className="space-y-2.5">
        {savedItems.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Bookmark className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-800">
                No Bookmarked Lessons Yet
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Bookmarked lessons will appear here for fast revision once reviewed lessons are published.
              </p>
            </div>
            <button
              id="saved-view-explore-curriculum-btn"
              onClick={() => onNavigate({ type: 'general_pathology' })}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-teal-800 text-white rounded-xl text-xs font-bold hover:bg-teal-900 active:scale-95 transition-all shadow-xs"
            >
              <BookOpen className="w-4 h-4" />
              Explore General Pathology Curriculum
            </button>
          </div>
        ) : (
          savedItems.map((item) => (
            <div
              key={item.id}
              id={`saved-item-${item.id}`}
              className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 transition-all shadow-xs flex items-center justify-between gap-3 group"
            >
              <button
                onClick={() => onSelectLesson(item.id)}
                className="flex-1 text-left min-w-0"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.2 rounded font-mono-code">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-900 transition-colors font-sans truncate mt-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Saved on {item.savedAt}
                </p>
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  id={`remove-saved-${item.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveSaved(item.id);
                  }}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title="Remove from saved"
                  aria-label="Remove saved lesson"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectLesson(item.id)}
                  className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-teal-100 text-slate-400 group-hover:text-teal-800 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
