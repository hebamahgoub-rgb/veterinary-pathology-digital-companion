import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { GeneralPathologyView } from './components/GeneralPathologyView';
import { TopicDetailView } from './components/TopicDetailView';
import { LessonView } from './components/LessonView';
import { SearchView } from './components/SearchView';
import { VideosView } from './components/VideosView';
import { SavedView } from './components/SavedView';
import { ImageAtlasView } from './components/ImageAtlasView';
import { SystemicPathologyView } from './components/SystemicPathologyView';
import { InfectiousDiseasesView } from './components/InfectiousDiseasesView';
import { NavigationTab, ScreenView } from './types';

interface SavedLesson {
  id: string;
  title: string;
  category: string;
  savedAt: string;
}

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<ScreenView>({ type: 'home' });
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');

  // Saved Bookmarks with LocalStorage persistence (begins empty for new user)
  const [savedLessons, setSavedLessons] = useState<SavedLesson[]>(() => {
    try {
      const saved = localStorage.getItem('vetpath_saved_lessons');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Filter out legacy default placeholder bookmarks
          return parsed.filter((item: SavedLesson) => item.id !== 'amyloidosis');
        }
      }
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }
    // Saved begins empty for a new user
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('vetpath_saved_lessons', JSON.stringify(savedLessons));
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }, [savedLessons]);

  // Scroll to top on navigation changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Sync tab with view
  const handleTabSelect = (tab: NavigationTab) => {
    setCurrentTab(tab);
    switch (tab) {
      case 'home':
        setCurrentView({ type: 'home' });
        break;
      case 'search':
        setCurrentView({ type: 'search' });
        break;
      case 'videos':
        setCurrentView({ type: 'videos' });
        break;
      case 'saved':
        setCurrentView({ type: 'saved' });
        break;
    }
  };

  const handleNavigate = (view: ScreenView) => {
    if (view.type === 'topic_detail' && view.topicId === 'cell-injury-cell-death') {
      setCurrentView({ type: 'lesson', lessonId: 'cell-injury-cell-death' });
      setCurrentTab('home');
      return;
    }
    setCurrentView(view);
    if (view.type === 'home' || view.type === 'general_pathology' || view.type === 'topic_detail' || view.type === 'lesson' || view.type === 'systemic_pathology' || view.type === 'infectious_diseases' || view.type === 'image_atlas') {
      setCurrentTab('home');
    } else if (view.type === 'search') {
      setCurrentTab('search');
    } else if (view.type === 'videos') {
      setCurrentTab('videos');
    } else if (view.type === 'saved') {
      setCurrentTab('saved');
    }
  };

  const handleSelectLesson = (lessonId: string) => {
    setCurrentView({ type: 'lesson', lessonId });
    setCurrentTab('home');
  };

  const handleSelectTopic = (topicId: string) => {
    if (topicId === 'cell-injury-cell-death') {
      setCurrentView({ type: 'lesson', lessonId: 'cell-injury-cell-death' });
      setCurrentTab('home');
      return;
    }
    setCurrentView({ type: 'topic_detail', topicId });
    setCurrentTab('home');
  };

  const handleToggleSave = (lesson: { id: string; title: string; category: string }) => {
    setSavedLessons((prev) => {
      const exists = prev.some((item) => item.id === lesson.id);
      if (exists) {
        return prev.filter((item) => item.id !== lesson.id);
      } else {
        const dateStr = new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        });
        return [
          ...prev,
          {
            id: lesson.id,
            title: lesson.title,
            category: lesson.category,
            savedAt: dateStr,
          },
        ];
      }
    });
  };

  const handleRemoveSaved = (id: string) => {
    setSavedLessons((prev) => prev.filter((item) => item.id !== id));
  };

  // Render current screen content
  const renderScreen = () => {
    switch (currentView.type) {
      case 'home':
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenAmyloidosis={() => handleSelectLesson('amyloidosis')}
          />
        );
      case 'general_pathology':
        return (
          <GeneralPathologyView
            onSelectTopic={handleSelectTopic}
            onNavigate={handleNavigate}
          />
        );
      case 'topic_detail':
        return (
          <TopicDetailView
            topicId={currentView.topicId}
            onSelectLesson={handleSelectLesson}
            onNavigate={handleNavigate}
          />
        );
      case 'lesson': {
        const isCurrentSaved = savedLessons.some(
          (item) => item.id === currentView.lessonId
        );
        return (
          <LessonView
            lessonId={currentView.lessonId}
            onNavigate={handleNavigate}
            onSelectLesson={handleSelectLesson}
            isSaved={isCurrentSaved}
            onToggleSave={handleToggleSave}
          />
        );
      }
      case 'systemic_pathology':
        return <SystemicPathologyView onNavigate={handleNavigate} />;
      case 'infectious_diseases':
        return (
          <InfectiousDiseasesView
            onNavigate={handleNavigate}
            onSelectTopic={handleSelectTopic}
          />
        );
      case 'image_atlas':
        return <ImageAtlasView onNavigate={handleNavigate} />;
      case 'search':
        return (
          <SearchView
            onNavigate={handleNavigate}
            onSelectLesson={handleSelectLesson}
          />
        );
      case 'videos':
        return (
          <VideosView
            onSelectLesson={handleSelectLesson}
            onNavigate={handleNavigate}
          />
        );
      case 'saved':
        return (
          <SavedView
            savedItems={savedLessons}
            onRemoveSaved={handleRemoveSaved}
            onSelectLesson={handleSelectLesson}
            onNavigate={handleNavigate}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenAmyloidosis={() => handleSelectLesson('amyloidosis')}
          />
        );
    }
  };

  return (
    <div id="vetpath-app-root" className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-teal-100 selection:text-teal-900">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        savedCount={savedLessons.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">{renderScreen()}</main>

      {/* Persistent Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        onSelectTab={handleTabSelect}
        savedCount={savedLessons.length}
      />
    </div>
  );
}
