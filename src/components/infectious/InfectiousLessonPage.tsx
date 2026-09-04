import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { ScreenView } from '../../types';
import { InfectiousLessonHeader } from './InfectiousLessonHeader';
import {
  SegmentedLessonLayout,
  LessonSectionItem,
} from '../common/SegmentedLessonLayout';

export type InfectiousLessonSection = {
  id: string;
  title: string;
  shortTitle?: string;
  category?: string;
  html: string;
};

interface InfectiousLessonPageProps {
  title: string;
  subtitle: string;
  sectionCode: string;
  category: string;
  topicId: 'bacterial-diseases' | 'mycotic-diseases' | 'poultry-pathology';
  lessonId: string;
  sections?: InfectiousLessonSection[];
  htmlContent?: string;
  initialSectionId?: string;
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;
  previousLesson?: { id: string; title: string };
  nextLesson?: { id: string; title: string };
}

export const InfectiousLessonPage: React.FC<InfectiousLessonPageProps> = ({
  title,
  subtitle,
  sectionCode,
  category,
  topicId,
  lessonId,
  sections,
  htmlContent,
  initialSectionId,
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
  previousLesson,
  nextLesson,
}) => {
  // Normalize sections: if sections passed, use them; otherwise create a single fallback section
  const effectiveSections: InfectiousLessonSection[] = React.useMemo(() => {
    if (sections && sections.length > 0) {
      return sections;
    }
    if (htmlContent) {
      return [
        {
          id: 'overview',
          title: title,
          shortTitle: 'Overview',
          category,
          html: htmlContent,
        },
      ];
    }
    return [
      {
        id: 'overview',
        title: title,
        shortTitle: 'Overview',
        category,
        html: '<p class="text-slate-600">Content loading...</p>',
      },
    ];
  }, [sections, htmlContent, title, category]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [completedIndices, setCompletedIndices] = useState<number[]>([0]);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'scholar'>('standard');

  // Jump to initialSectionId if provided
  useEffect(() => {
    if (initialSectionId) {
      const targetIdx = effectiveSections.findIndex(
        (s) =>
          s.id === initialSectionId ||
          s.html.includes(`id="${initialSectionId}"`) ||
          s.html.includes(`id='${initialSectionId}'`)
      );
      if (targetIdx !== -1) {
        setCurrentIndex(targetIdx);
        setCompletedIndices((prev) =>
          prev.includes(targetIdx) ? prev : [...prev, targetIdx]
        );
      }
    }
  }, [initialSectionId, effectiveSections]);

  const handleSelectSection = (index: number) => {
    setCurrentIndex(index);
    setCompletedIndices((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );
    const targetElement = document.getElementById('lesson-content-top');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Convert to LessonSectionItem for SegmentedLessonLayout
  const layoutSections: LessonSectionItem[] = React.useMemo(() => {
    return effectiveSections.map((sec, idx) => ({
      id: sec.id,
      number: String(idx + 1).padStart(2, '0'),
      title: sec.title,
      shortTitle: sec.shortTitle || `${idx + 1}. ${sec.title.slice(0, 24)}...`,
      category: sec.category || category,
    }));
  }, [effectiveSections, category]);

  // Handle all internal companion link clicks seamlessly
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href) return;

    // Handle hash jumps (organism quick jump pills, internal links)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      // Check if targetId matches a section id or is inside a section
      const targetSecIdx = effectiveSections.findIndex(
        (sec) =>
          sec.id === targetId ||
          sec.html.includes(`id="${targetId}"`) ||
          sec.html.includes(`id='${targetId}'`)
      );
      if (targetSecIdx !== -1) {
        handleSelectSection(targetSecIdx);
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Handle internal cross-links within the companion
    if (href.includes('bacterial-diseases/gram-positive')) {
      e.preventDefault();
      onSelectLesson?.('gram-positive-bacterial-diseases');
    } else if (href.includes('bacterial-diseases/gram-negative')) {
      e.preventDefault();
      onSelectLesson?.('gram-negative-bacterial-diseases');
    } else if (href.includes('bacterial-diseases/mycobacterial')) {
      e.preventDefault();
      onSelectLesson?.('mycobacterial-diseases');
    } else if (href.includes('bacterial-diseases/spirochetal')) {
      e.preventDefault();
      onSelectLesson?.('spirochetal-atypical-bacterial-diseases');
    } else if (href.includes('mycotic-diseases/superficial')) {
      e.preventDefault();
      onSelectLesson?.('superficial-cutaneous-mycoses');
    } else if (href.includes('mycotic-diseases/subcutaneous')) {
      e.preventDefault();
      onSelectLesson?.('subcutaneous-mycoses');
    } else if (href.includes('mycotic-diseases/systemic')) {
      e.preventDefault();
      onSelectLesson?.('systemic-deep-mycoses');
    } else if (href.includes('mycotic-diseases/opportunistic')) {
      e.preventDefault();
      onSelectLesson?.('opportunistic-mycoses');
    } else if (href.includes('poultry-diseases/bacterial')) {
      e.preventDefault();
      onSelectLesson?.('bacterial-diseases-poultry');
    } else if (href.includes('poultry-diseases/viral')) {
      e.preventDefault();
      onSelectLesson?.('viral-diseases-poultry');
    } else if (href.includes('poultry-diseases/mycotic')) {
      e.preventDefault();
      onSelectLesson?.('mycotic-diseases-poultry');
    } else if (href.includes('poultry-diseases/parasitic')) {
      e.preventDefault();
      onSelectLesson?.('parasitic-diseases-poultry');
    } else if (
      href.includes('poultry-diseases/nutritional') ||
      href.includes('poultry-diseases/metabolic')
    ) {
      e.preventDefault();
      onSelectLesson?.('nutritional-metabolic-poultry');
    } else if (href.includes('infectious-diseases/bacterial-diseases')) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'bacterial-diseases' });
    } else if (href.includes('infectious-diseases/mycotic-diseases')) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'mycotic-diseases' });
    } else if (href.includes('infectious-diseases/poultry-diseases')) {
      e.preventDefault();
      onNavigate({ type: 'topic_detail', topicId: 'poultry-pathology' });
    } else if (
      href.endsWith('infectious-diseases') ||
      href.includes('/infectious-diseases#') ||
      href.includes('/infectious-diseases?')
    ) {
      e.preventDefault();
      onNavigate({ type: 'infectious_diseases' });
    } else if (
      href.includes('/home') ||
      href.endsWith('veterinary-pathology-companion/home')
    ) {
      e.preventDefault();
      onNavigate({ type: 'home' });
    }
  };

  const currentSection = effectiveSections[currentIndex] || effectiveSections[0];

  const headerNode = (
    <InfectiousLessonHeader
      title={title}
      subtitle={subtitle}
      sectionCode={sectionCode}
      category={category}
      topicId={topicId}
      lessonId={lessonId}
      onNavigate={onNavigate}
      isSaved={isSaved}
      onToggleSave={onToggleSave}
      fontSize={fontSize}
      onChangeFontSize={setFontSize}
    />
  );

  const footerNavNode = (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold">
      <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
        {previousLesson ? (
          <button
            onClick={() => onSelectLesson?.(previousLesson.id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="truncate max-w-[140px]">{previousLesson.title}</span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate({ type: 'topic_detail', topicId })}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to {category}</span>
          </button>
        )}

        <button
          onClick={() => onNavigate({ type: 'infectious_diseases' })}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-teal-200 bg-teal-50 hover:bg-teal-100 text-teal-900 transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-teal-700" />
          <span>Infectious Diseases Hub</span>
        </button>
      </div>

      {nextLesson && (
        <button
          onClick={() => onSelectLesson?.(nextLesson.id)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white transition-colors cursor-pointer shadow-xs"
        >
          <span className="truncate max-w-[180px]">Next: {nextLesson.title}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );

  return (
    <div className="pb-20 pt-2 px-3 sm:px-4 max-w-5xl mx-auto space-y-4">
      <SegmentedLessonLayout
        sections={layoutSections}
        currentIndex={currentIndex}
        completedIndices={completedIndices}
        onSelectSection={handleSelectSection}
        header={headerNode}
        footerNav={footerNavNode}
        fontSize={fontSize}
        onCompleteLesson={() => {
          if (nextLesson) {
            onSelectLesson?.(nextLesson.id);
          } else {
            onNavigate({ type: 'topic_detail', topicId });
          }
        }}
      >
        <div
          className="infectious-page space-y-4"
          data-font-size={fontSize}
          onClick={handleContainerClick}
          dangerouslySetInnerHTML={{ __html: currentSection.html }}
        />
      </SegmentedLessonLayout>
    </div>
  );
};
