import React from 'react';
import {
  Clock,
  ChevronRight,
  BookOpen,
  Layers,
  Lock,
} from 'lucide-react';
import { ALL_TOPIC_SECTIONS, GENERAL_PATHOLOGY_SECTIONS, isLessonPublished } from '../data/pathologyData';
import { ScreenView } from '../types';

interface TopicDetailViewProps {
  topicId: string;
  onSelectLesson: (lessonId: string) => void;
  onNavigate: (view: ScreenView) => void;
}

export const TopicDetailView: React.FC<TopicDetailViewProps> = ({
  topicId,
  onSelectLesson,
  onNavigate,
}) => {
  const currentTopic =
    ALL_TOPIC_SECTIONS.find((s) => s.id === topicId) ||
    GENERAL_PATHOLOGY_SECTIONS[0];

  const isInfectious = currentTopic.moduleType === 'infectious_diseases';

  const getStainBadge = (lessonId: string) => {
    switch (lessonId) {
      case 'module-overview':
        return { label: 'H&E / Ultrastructure', color: 'bg-teal-50 text-teal-900 border-teal-200' };
      case 'intracellular-accumulations':
        return { label: 'Mechanisms Matrix', color: 'bg-indigo-50 text-indigo-900 border-indigo-200' };
      case 'fatty-change':
        return { label: 'Oil Red O / Sudan III', color: 'bg-amber-50 text-amber-900 border-amber-200' };
      case 'glycogen-accumulation':
        return { label: 'PAS ± Diastase', color: 'bg-fuchsia-50 text-fuchsia-900 border-fuchsia-200' };
      case 'protein-accumulation-hyaline':
        return { label: 'Eosinophilic / H&E', color: 'bg-rose-50 text-rose-900 border-rose-200' };
      case 'amyloidosis':
        return { label: 'Congo Red + Polarized Light', color: 'bg-emerald-50 text-emerald-900 border-emerald-300' };
      case 'mucin-myxoid-change':
        return { label: 'Alcian Blue / Mucicarmine', color: 'bg-cyan-50 text-cyan-900 border-cyan-200' };
      case 'pathological-pigments':
        return { label: "Perls' Prussian Blue / Fontana", color: 'bg-blue-50 text-blue-900 border-blue-200' };
      case 'pathological-calcification':
        return { label: 'Von Kossa / Alizarin Red', color: 'bg-slate-100 text-slate-900 border-slate-300' };
      case 'crystals-and-urates':
        return { label: 'Polarized / De Galantha', color: 'bg-amber-50 text-amber-900 border-amber-200' };
      case 'practical-pathology-gallery':
        return { label: 'Multi-Stain Atlas', color: 'bg-teal-50 text-teal-900 border-teal-300' };
      case 'test-yourself':
        return { label: 'Self-Assessment (10 Q)', color: 'bg-emerald-50 text-emerald-900 border-emerald-300' };
      case 'videos-further-learning':
        return { label: '12 Videos & References', color: 'bg-amber-50 text-amber-900 border-amber-300' };
      default:
        return null;
    }
  };

  return (
    <div id="topic-detail-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Breadcrumb strip */}
      <div className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto no-scrollbar py-0.5">
        <button
          onClick={() => onNavigate({ type: 'home' })}
          className="hover:text-teal-800 transition-colors whitespace-nowrap"
        >
          Home
        </button>
        <span>/</span>
        <button
          onClick={() => onNavigate({ type: isInfectious ? 'infectious_diseases' : 'general_pathology' })}
          className="hover:text-teal-800 transition-colors whitespace-nowrap"
        >
          {isInfectious ? 'Infectious Diseases' : 'General Pathology'}
        </button>
        <span>/</span>
        <span className="font-semibold text-slate-800 whitespace-nowrap">
          {currentTopic.title}
        </span>
      </div>

      {/* Topic Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full font-mono-code">
            {currentTopic.code}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
              currentTopic.status === 'Available'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-300/80'
                : 'bg-amber-50 text-amber-900 border border-amber-300/80'
            }`}
          >
            {currentTopic.status || 'Content migration'}
          </span>
          {currentTopic.lessons.length > 0 && (
            <span className="text-xs font-semibold text-slate-500">
              {currentTopic.id === 'disturbance-cell-metabolism'
                ? '13 study units'
                : `${currentTopic.lessons.length} study units`}
            </span>
          )}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-academic">
          {currentTopic.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
          {currentTopic.shortDesc}
        </p>

        {/* Quick Diagnostic Stains Matrix Bar for Disturbance in Cell Metabolism */}
        {currentTopic.id === 'disturbance-cell-metabolism' && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 font-sans">
              Special Stains Reference
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                Fat: <strong>Oil Red O</strong>
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                Glycogen: <strong>PAS + Diastase</strong>
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-teal-50 text-teal-900 font-medium border border-teal-200">
                Amyloid: <strong>Congo Red (Apple-Green)</strong>
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                Calcium: <strong>Von Kossa</strong>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Lesson Cards List or Migration-Stage Empty State */}
      {currentTopic.lessons.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200/80 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-300/80 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono-code">
              Content migration
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
              Curriculum content awaiting migration.
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curriculum content awaiting migration.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-100 max-w-xs mx-auto text-[11px] text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>Curriculum content awaiting migration.</span>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-0.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
              Lessons in this Section
            </h3>
            <span className="text-[11px] text-slate-500 font-medium">
              {currentTopic.id === 'disturbance-cell-metabolism'
                ? '13 study units available'
                : `${currentTopic.lessons.length} Lessons`}
            </span>
          </div>

          {currentTopic.lessons.map((lesson, idx) => {
            const stainBadge = getStainBadge(lesson.id);
            const isPublished = isLessonPublished(lesson.id);

            return isPublished ? (
              <button
                key={lesson.id}
                id={`lesson-card-${lesson.id}`}
                onClick={() => onSelectLesson(lesson.id)}
                className="w-full text-left p-4 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:shadow-sm transition-all duration-150 active:scale-[0.99] flex flex-col justify-between group cursor-pointer"
              >
                {/* Header inside card */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-bold text-teal-800 font-mono-code">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-300/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Available
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {lesson.readTime}
                      </span>
                    </div>

                    <h4 className="text-base font-bold font-sans text-slate-900 group-hover:text-teal-900 transition-colors">
                      {lesson.title}
                    </h4>
                  </div>

                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-teal-50 text-teal-800 group-hover:bg-teal-800 group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {lesson.summary}
                </p>

                {/* Bottom Tags: Stain & Species */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  {stainBadge && (
                    <span
                      className={`px-2 py-0.5 rounded-md border font-medium text-[10px] ${stainBadge.color}`}
                    >
                      {stainBadge.label}
                    </span>
                  )}

                  {lesson.species && lesson.species.length > 0 && (
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        Species:
                      </span>
                      <span className="text-[11px] text-slate-600 font-medium">
                        {lesson.species.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </button>
            ) : (
              <div
                key={lesson.id}
                id={`lesson-card-${lesson.id}`}
                className="w-full text-left p-4 rounded-2xl border border-slate-200 bg-slate-50/70 relative overflow-hidden flex flex-col justify-between select-none"
              >
                {/* Header inside card */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-bold text-slate-400 font-mono-code">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-300/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Content migration
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        Not yet published
                      </span>
                    </div>

                    <h4 className="text-base font-bold font-sans text-slate-700">
                      {lesson.title}
                    </h4>
                  </div>

                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-200/80 text-slate-400"
                    title="Not yet published — Content migration in progress"
                  >
                    <Lock className="w-4 h-4" />
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {lesson.summary}
                </p>

                {/* Bottom Tags: Stain & Species */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  {stainBadge && (
                    <span
                      className={`px-2 py-0.5 rounded-md border font-medium text-[10px] ${stainBadge.color}`}
                    >
                      {stainBadge.label}
                    </span>
                  )}

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      Species:
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      To be added with reviewed content
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
