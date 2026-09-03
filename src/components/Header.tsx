import React from 'react';
import {
  ArrowLeft,
  Bookmark,
  Search,
  BookOpen,
} from 'lucide-react';
import { ScreenView } from '../types';

interface HeaderProps {
  currentView: ScreenView;
  onNavigate: (view: ScreenView) => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  savedCount,
}) => {
  const isHome = currentView.type === 'home';

  const getTitleAndBack = () => {
    switch (currentView.type) {
      case 'general_pathology':
        return {
          title: 'General Pathology',
          backTarget: { type: 'home' } as ScreenView,
          subtitle: 'Core Mechanisms of Disease',
        };
      case 'topic_detail':
        return {
          title: 'Disturbance in Cell Metabolism',
          backTarget: { type: 'general_pathology' } as ScreenView,
          subtitle: 'General Pathology · Section 01',
        };
      case 'lesson':
        return {
          title: 'Lesson Reading',
          backTarget: {
            type: 'topic_detail',
            topicId: 'disturbance-cell-metabolism',
          } as ScreenView,
          subtitle: 'Veterinary Pathology Companion',
        };
      case 'systemic_pathology':
        return {
          title: 'Systemic Pathology',
          backTarget: { type: 'home' } as ScreenView,
          subtitle: 'Organ Systems & Diseases',
        };
      case 'infectious_diseases':
        return {
          title: 'Infectious Diseases',
          backTarget: { type: 'home' } as ScreenView,
          subtitle: 'Viral, Bacterial & Parasitic Agents',
        };
      case 'image_atlas':
        return {
          title: 'Pathology Image Collection',
          backTarget: { type: 'home' } as ScreenView,
          subtitle: 'Gross & Histopathology Atlas',
        };
      case 'search':
        return {
          title: 'Pathology Search',
          backTarget: { type: 'home' } as ScreenView,
          subtitle: 'Index & Keyword Browser',
        };
      case 'videos':
        return {
          title: 'Microlearning Videos',
          backTarget: { type: 'home' } as ScreenView,
          subtitle: 'High-Yield Clinical Cases',
        };
      case 'saved':
        return {
          title: 'Saved & Bookmarks',
          backTarget: { type: 'home' } as ScreenView,
          subtitle: 'Personal Study Collection',
        };
      default:
        return {
          title: 'Veterinary Pathology',
          backTarget: null,
          subtitle: 'Digital Companion',
        };
    }
  };

  const navInfo = getTitleAndBack();

  return (
    <header
      id="app-header"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all"
    >
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
        {/* Left: Back button or Academic Crest */}
        <div className="flex items-center gap-2.5 min-w-0">
          {!isHome && navInfo.backTarget ? (
            <button
              id="header-back-button"
              onClick={() => onNavigate(navInfo.backTarget!)}
              className="p-2 -ml-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors flex items-center gap-1.5"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-slate-700" />
              <span className="text-xs font-semibold text-slate-600 hidden xs:inline">
                Back
              </span>
            </button>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-teal-800 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-4 h-4 text-teal-200" />
            </div>
          )}

          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-bold text-slate-900 leading-tight truncate font-sans">
              {isHome ? 'VetPath Companion' : navInfo.title}
            </h1>
            <p className="text-[11px] font-medium text-slate-500 truncate leading-none mt-0.5">
              {navInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
          {isHome && (
            <button
              id="header-search-icon-btn"
              onClick={() => onNavigate({ type: 'search' })}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors"
              aria-label="Search pathology content"
            >
              <Search className="w-4 h-4 text-slate-700" />
            </button>
          )}

          <button
            id="header-saved-icon-btn"
            onClick={() => onNavigate({ type: 'saved' })}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors relative"
            aria-label="Saved items"
          >
            <Bookmark className="w-4 h-4 text-slate-700" />
            {savedCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal-600 rounded-full ring-2 ring-white animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
