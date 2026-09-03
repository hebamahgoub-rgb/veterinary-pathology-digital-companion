import React from 'react';
import { Home, Search, Video, Bookmark } from 'lucide-react';
import { NavigationTab, ScreenView } from '../types';
import { DICM_VIDEOS } from './VideosView';

interface BottomNavProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  savedCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onSelectTab,
  savedCount,
}) => {
  const tabs = [
    {
      id: 'home' as NavigationTab,
      label: 'Home',
      icon: Home,
      action: () => onSelectTab('home'),
      badge: null,
    },
    {
      id: 'search' as NavigationTab,
      label: 'Search',
      icon: Search,
      action: () => onSelectTab('search'),
      badge: null,
    },
    {
      id: 'videos' as NavigationTab,
      label: 'Videos',
      icon: Video,
      action: () => onSelectTab('videos'),
      badge: `${DICM_VIDEOS.length}`,
    },
    {
      id: 'saved' as NavigationTab,
      label: 'Saved',
      icon: Bookmark,
      action: () => onSelectTab('saved'),
      badge: savedCount > 0 ? `${savedCount}` : null,
    },
  ];

  return (
    <nav
      id="persistent-bottom-nav"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-2xl mx-auto px-3 h-16 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`bottom-nav-${tab.id}`}
              onClick={tab.action}
              className={`flex-1 h-full flex flex-col items-center justify-center gap-1 relative transition-all duration-150 active:scale-95 ${
                isActive
                  ? 'text-teal-800 font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative">
                <div
                  className={`w-9 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-teal-100/80 text-teal-800' : 'text-slate-500'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'scale-105 stroke-[2.4]' : 'stroke-[1.8]'
                    }`}
                  />
                </div>

                {tab.badge && (
                  <span
                    className={`absolute -top-1 -right-1 text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-4 text-center leading-tight shadow-xs ${
                      isActive
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-[11px] leading-none tracking-tight transition-colors ${
                  isActive ? 'font-bold text-teal-900' : 'font-medium'
                }`}
              >
                {tab.label}
              </span>

              {isActive && (
                <div className="w-4 h-0.5 bg-teal-700 rounded-full absolute bottom-1" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
