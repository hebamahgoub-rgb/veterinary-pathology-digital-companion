import React, { useState } from 'react';
import {
  Search as SearchIcon,
  X,
  ChevronRight,
  Sparkles,
  Lock,
} from 'lucide-react';
import { SEARCH_INDEX, isLessonPublished, INFECTIOUS_DISEASES_SECTIONS } from '../data/pathologyData';
import { ScreenView } from '../types';

interface SearchViewProps {
  onNavigate: (view: ScreenView) => void;
  onSelectLesson: (id: string) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({
  onNavigate,
  onSelectLesson,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterChips = ['All', 'General Pathology', 'Infectious Diseases', 'Topics', 'Lessons'];

  const filteredResults = SEARCH_INDEX.filter((item) => {
    const matchesQuery =
      searchTerm.trim() === '' ||
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesQuery) return false;

    if (activeFilter === 'All') return true;
    if (activeFilter === 'General Pathology') return item.category === 'General Pathology';
    if (activeFilter === 'Infectious Diseases') return item.category === 'Infectious Diseases';
    if (activeFilter === 'Topics') return item.type === 'Topic';
    if (activeFilter === 'Lessons') return item.type === 'Lesson' || item.type === 'Study Segment';

    return true;
  });

  const popularSearches = [
    'Amyloidosis',
    'Bacterial Diseases',
    'Cell Injury and Cell Death',
    'Inflammation',
    'Mycotic Diseases',
    'Neoplasia',
    'Poultry Pathology',
  ];

  const handleResultClick = (item: typeof SEARCH_INDEX[0]) => {
    if (item.type === 'Lesson' || item.type === 'Study Segment') {
      if (isLessonPublished(item.id)) {
        onSelectLesson(item.id);
      }
      // Unpublished lessons remain disabled and cannot open
    } else if (item.type === 'Topic') {
      const directLessonTopics = [
        'cell-injury-cell-death',
        'inflammation',
        'circulatory-disturbances',
        'disorders-of-the-immune-system',
        'disorders-of-growth',
      ];
      if (directLessonTopics.includes(item.id)) {
        onSelectLesson(item.id);
        return;
      }
      // Check if this is a future section under development
      const infSection = INFECTIOUS_DISEASES_SECTIONS.find((s) => s.id === item.id);
      if (infSection && infSection.status === 'Under development') {
        // Disabled from opening
        return;
      }
      onNavigate({ type: 'topic_detail', topicId: item.id });
    }
  };

  return (
    <div id="search-view-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <SearchIcon className="w-5 h-5 text-slate-400" />
        </div>
        <input
          id="search-input-field"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search curriculum topics and lesson outlines..."
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-teal-700/30 focus:border-teal-700 text-sm placeholder:text-slate-400 font-sans"
        />
        {searchTerm && (
          <button
            id="clear-search-btn"
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Chips Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {filterChips.map((chip) => (
          <button
            key={chip}
            id={`filter-chip-${chip.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            onClick={() => setActiveFilter(chip)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === chip
                ? 'bg-teal-800 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Suggested Searches */}
      {searchTerm === '' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Curriculum Topics</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => setSearchTerm(term)}
                className="text-xs bg-slate-50 hover:bg-teal-50 hover:text-teal-900 hover:border-teal-300 border border-slate-200 text-slate-700 px-2.5 py-1.5 rounded-xl transition-all font-medium"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results List */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-0.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
            Results ({filteredResults.length})
          </h3>
          <span className="text-[11px] text-slate-400 font-medium">
            Curriculum Index
          </span>
        </div>

        {filteredResults.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-2">
            <p className="text-sm font-semibold text-slate-700">No matching curriculum entries found</p>
            <p className="text-xs text-slate-500">
              Try searching for terms like "Metabolism", "Inflammation", "Bacterial", or "Neoplasia".
            </p>
          </div>
        ) : (
          filteredResults.map((item, idx) => {
            const isLesson = item.type === 'Lesson';
            const isSegment = item.type === 'Study Segment';
            const isCellInjuryTopic = item.id === 'cell-injury-cell-death';
            const isDicmTopic = item.id === 'disturbance-cell-metabolism';
            const isDicmLesson = isLesson && item.topic === 'Disturbance in Cell Metabolism';
            const isPublished = (isLesson || isSegment) && isLessonPublished(item.id);
            const infSection = INFECTIOUS_DISEASES_SECTIONS.find((s) => s.id === item.id);
            const isUnderDev = infSection && infSection.status === 'Under development';
            const isClickable = (isLesson || isSegment) ? isPublished : !isUnderDev;

            return (
              <button
                key={idx}
                id={`search-result-${idx}`}
                disabled={!isClickable}
                onClick={() => {
                  if (isClickable) {
                    handleResultClick(item);
                  }
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all shadow-xs flex items-center justify-between gap-3 ${
                  isClickable
                    ? 'bg-white border-slate-200 hover:border-teal-400 hover:bg-teal-50/10 active:scale-[0.99] group cursor-pointer'
                    : 'bg-slate-50/80 border-slate-200 opacity-80 cursor-not-allowed select-none'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className={`text-[10px] font-bold px-2 py-0.2 rounded font-mono-code border ${
                      isSegment 
                        ? 'text-amber-800 bg-amber-50 border-amber-300' 
                        : 'text-teal-800 bg-teal-50 border-teal-200'
                    }`}>
                      {item.type}
                    </span>
                    {isCellInjuryTopic ? (
                      <>
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-300/80 px-2 py-0.2 rounded uppercase tracking-wider">
                          Available
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          1 lesson · 13 study segments
                        </span>
                      </>
                    ) : isDicmTopic ? (
                      <>
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-300/80 px-2 py-0.2 rounded uppercase tracking-wider">
                          Available
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          13 study units available
                        </span>
                      </>
                    ) : isSegment ? (
                      <>
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-300/80 px-2 py-0.2 rounded uppercase tracking-wider">
                          Available
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          Cell Injury & Cell Death
                        </span>
                      </>
                    ) : isDicmLesson || isPublished ? (
                      <span className="text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-300/80 px-2 py-0.2 rounded uppercase tracking-wider">
                        Available
                      </span>
                    ) : isLesson ? (
                      <>
                        <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-300/80 px-2 py-0.2 rounded uppercase tracking-wider">
                          Content migration
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          Not yet published
                        </span>
                      </>
                    ) : isUnderDev ? (
                      <span className="text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.2 rounded uppercase tracking-wider">
                        Under development
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-300/80 px-2 py-0.2 rounded uppercase tracking-wider">
                        Content migration
                      </span>
                    )}
                    <span className="text-[11px] text-slate-500 truncate">
                      {isSegment ? `General Pathology · Cell Injury and Cell Death (Segment)` : `${item.category} · ${item.topic}`}
                    </span>
                  </div>
                  <h4
                    className={`text-sm font-bold font-sans truncate ${
                      isClickable
                        ? 'text-slate-900 group-hover:text-teal-900 transition-colors'
                        : 'text-slate-700'
                    }`}
                  >
                    {item.term}
                  </h4>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isClickable
                      ? 'bg-slate-50 group-hover:bg-teal-100 text-slate-400 group-hover:text-teal-800'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {isClickable ? (
                    <ChevronRight className="w-4 h-4" />
                  ) : (
                    <Lock className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};
