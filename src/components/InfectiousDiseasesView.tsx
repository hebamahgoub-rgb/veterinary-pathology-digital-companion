import React from 'react';
import {
  Bug,
  ShieldAlert,
  ChevronRight,
  Activity,
  Flame,
  Sparkles,
  Lock,
} from 'lucide-react';
import { ScreenView } from '../types';
import { INFECTIOUS_DISEASES_SECTIONS } from '../data/pathologyData';

interface InfectiousDiseasesViewProps {
  onNavigate: (view: ScreenView) => void;
  onSelectTopic?: (topicId: string) => void;
}

export const InfectiousDiseasesView: React.FC<InfectiousDiseasesViewProps> = ({
  onNavigate,
  onSelectTopic,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bug':
        return Bug;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Activity':
        return Activity;
      case 'Flame':
        return Flame;
      case 'Sparkles':
        return Sparkles;
      default:
        return Bug;
    }
  };

  const ongoingSections = INFECTIOUS_DISEASES_SECTIONS.filter(
    (s) => s.status === 'Content migration'
  );
  const futureSections = INFECTIOUS_DISEASES_SECTIONS.filter(
    (s) => s.status === 'Under development'
  );

  return (
    <div id="infectious-diseases-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider font-sans flex-wrap">
          <span>Curriculum Module</span>
          <span>•</span>
          <span>6 Sections</span>
          <span>•</span>
          <span className="bg-amber-50 text-amber-900 border border-amber-300/80 px-2 py-0.5 rounded-full text-[10px] font-semibold normal-case tracking-normal">
            3 sections in content migration · 3 under development
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5 font-serif-academic">
          Infectious Diseases
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Veterinary infectious disease etiologies, lesion patterns, host-pathogen interactions, and diagnostic pathology across species.
        </p>
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>3 sections in content migration · 3 under development</span>
        </div>
      </div>

      {/* Ongoing Sections */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-0.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
            Ongoing Sections
          </h3>
          <span className="text-[11px] text-amber-900 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            Content migration
          </span>
        </div>

        {ongoingSections.map((section) => {
          const Icon = getIcon(section.iconName);

          return (
            <button
              key={section.id}
              id={`infectious-section-${section.id}`}
              onClick={() => onSelectTopic && onSelectTopic(section.id)}
              className="w-full text-left p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-150 active:scale-[0.985] group shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-teal-800 text-teal-100 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-teal-800 font-mono-code">
                        {section.code}
                      </span>
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-300/80 px-1.5 py-0.2 rounded-sm tracking-wide">
                        Content migration
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-900 transition-colors mt-0.5 font-sans">
                      {section.title}
                    </h4>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-teal-100 text-slate-400 group-hover:text-teal-800 flex items-center justify-center flex-shrink-0 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed pl-13">
                Curriculum content awaiting migration.
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 pl-13">
                <span className="font-semibold text-slate-700">
                  Curriculum content awaiting migration.
                </span>
                <span className="text-teal-800 font-semibold group-hover:underline">
                  Open Section →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Future Sections */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-0.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
            Future Sections
          </h3>
          <span className="text-[11px] text-slate-600 font-semibold bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
            Under development
          </span>
        </div>

        {futureSections.map((section) => {
          const Icon = getIcon(section.iconName);

          return (
            <div
              key={section.id}
              id={`infectious-section-${section.id}`}
              className="w-full text-left p-4 rounded-2xl bg-slate-50/75 border border-slate-200 opacity-80 flex flex-col justify-between select-none cursor-not-allowed"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-500 font-mono-code">
                        {section.code}
                      </span>
                      <span className="text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-300 px-1.5 py-0.2 rounded-sm tracking-wide">
                        Under development
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-700 mt-0.5 font-sans">
                      {section.title}
                    </h4>
                  </div>
                </div>

                <div
                  className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0"
                  title="Section under development — not available to open"
                >
                  <Lock className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed pl-13">
                {section.shortDesc}
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 pl-13">
                <span className="font-medium text-slate-500 italic">
                  Under development
                </span>
                <span className="text-slate-400 font-medium">
                  Not available to open
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
