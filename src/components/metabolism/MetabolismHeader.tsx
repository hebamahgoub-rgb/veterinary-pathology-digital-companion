import React, { useState, useEffect, useRef } from 'react';
import {
  Bookmark,
  Share2,
  Check,
  ChevronLeft,
  Sliders,
  Award,
} from 'lucide-react';
import { ScreenView } from '../../types';

interface MetabolismHeaderProps {
  title: string;
  subtitle: string;
  category?: string;
  lessonId: string;
  onNavigate: (view: ScreenView) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  fontSize?: 'standard' | 'large' | 'scholar';
  onChangeFontSize?: (size: 'standard' | 'large' | 'scholar') => void;
}

export const MetabolismHeader: React.FC<MetabolismHeaderProps> = ({
  title,
  subtitle,
  category = 'General Pathology',
  lessonId,
  onNavigate,
  isSaved = false,
  onToggleSave,
  fontSize = 'standard',
  onChangeFontSize,
}) => {
  const [copiedFeedback, setCopiedFeedback] = useState(false);
  const [showFontMenu, setShowFontMenu] = useState(false);
  const fontMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showFontMenu) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (fontMenuRef.current && !fontMenuRef.current.contains(event.target as Node)) {
        setShowFontMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowFontMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showFontMenu]);

  const handleShare = () => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        setCopiedFeedback(true);
        setTimeout(() => setCopiedFeedback(false), 2000);
      }
    } catch {
      // Ignore clipboard error
    }
  };

  return (
    <header className="space-y-3 relative z-40 overflow-visible">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto no-scrollbar py-0.5">
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
          {category}
        </button>
        <span>/</span>
        <button
          onClick={() =>
            onNavigate({
              type: 'topic_detail',
              topicId: 'disturbance-cell-metabolism',
            })
          }
          className="hover:text-teal-800 transition-colors whitespace-nowrap text-teal-800 font-medium"
        >
          Disturbance in Cell Metabolism
        </button>
        <span>/</span>
        <span className="font-semibold text-slate-800 whitespace-nowrap truncate max-w-[200px]">
          {title}
        </span>
      </nav>

      {/* Main Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs relative overflow-visible">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full font-mono-code">
                GEN-01
              </span>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-300/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Available
              </span>
              <span className="text-[11px] text-slate-500">
                Disturbance in Cell Metabolism
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-academic leading-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Font size control */}
            {onChangeFontSize && (
              <div className="relative z-[70]" ref={fontMenuRef}>
                <button
                  type="button"
                  onClick={() => setShowFontMenu(!showFontMenu)}
                  className={`p-2 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer ${
                    showFontMenu
                      ? 'bg-teal-50 border-teal-300 text-teal-800'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                  title="Adjust typography"
                  aria-label="Adjust typography settings"
                  aria-haspopup="menu"
                  aria-expanded={showFontMenu}
                >
                  <Sliders className="w-4 h-4" />
                </button>

                {showFontMenu && (
                  <div
                    role="menu"
                    aria-label="Typography options"
                    aria-orientation="vertical"
                    className="absolute right-0 top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl p-1.5 z-[70] min-w-[165px] sm:min-w-[180px] max-w-[calc(100vw-2rem)] max-h-[70vh] overflow-y-auto space-y-1 animate-in fade-in zoom-in-95 duration-150"
                  >
                    <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans border-b border-slate-100 mb-1">
                      Text Display
                    </div>
                    <button
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        onChangeFontSize('standard');
                        setShowFontMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center justify-between gap-2.5 cursor-pointer ${
                        fontSize === 'standard'
                          ? 'bg-teal-50 text-teal-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate">Standard (14px)</span>
                      {fontSize === 'standard' && (
                        <Check className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                      )}
                    </button>
                    <button
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        onChangeFontSize('large');
                        setShowFontMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center justify-between gap-2.5 cursor-pointer ${
                        fontSize === 'large'
                          ? 'bg-teal-50 text-teal-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate">Large (17px)</span>
                      {fontSize === 'large' && (
                        <Check className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                      )}
                    </button>
                    <button
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        onChangeFontSize('scholar');
                        setShowFontMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center justify-between gap-2.5 cursor-pointer ${
                        fontSize === 'scholar'
                          ? 'bg-teal-50 text-teal-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate font-serif-academic text-xs sm:text-sm">Academic Serif</span>
                      {fontSize === 'scholar' && (
                        <Check className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Bookmark / Save */}
            {onToggleSave && (
              <button
                onClick={() =>
                  onToggleSave({
                    id: lessonId,
                    title,
                    category: 'Disturbance in Cell Metabolism',
                  })
                }
                className={`p-2 rounded-xl border transition-colors ${
                  isSaved
                    ? 'bg-amber-50 border-amber-300 text-amber-700'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
                title={isSaved ? 'Bookmarked' : 'Save lesson'}
                aria-label={isSaved ? 'Remove bookmark' : 'Bookmark lesson'}
              >
                <Bookmark
                  className={`w-4 h-4 ${isSaved ? 'fill-amber-500 text-amber-600' : ''}`}
                />
              </button>
            )}

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
              title="Copy share link"
              aria-label="Share lesson"
            >
              {copiedFeedback ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
