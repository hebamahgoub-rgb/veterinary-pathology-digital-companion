import React from 'react';
import {
  Activity,
  ShieldAlert,
  Flame,
  HeartPulse,
  TrendingUp,
  Dna,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { GENERAL_PATHOLOGY_SECTIONS } from '../data/pathologyData';
import { ScreenView, TopicSection } from '../types';

interface GeneralPathologyViewProps {
  onSelectTopic: (topicId: string) => void;
  onNavigate: (view: ScreenView) => void;
}

export const GeneralPathologyView: React.FC<GeneralPathologyViewProps> = ({
  onSelectTopic,
  onNavigate,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return Activity;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Flame':
        return Flame;
      case 'HeartPulse':
        return HeartPulse;
      case 'TrendingUp':
        return TrendingUp;
      case 'Dna':
        return Dna;
      default:
        return BookOpen;
    }
  };

  return (
    <div id="general-pathology-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Section Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider font-sans">
          <span>Curriculum Module</span>
          <span>•</span>
          <span>6 Core Sections</span>
          <span>•</span>
          <span className="bg-amber-50 text-amber-900 border border-amber-300/80 px-2 py-0.5 rounded-full text-[10px] font-semibold normal-case tracking-normal">
            Content migration
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5 font-serif-academic">
          General Pathology
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Fundamental disease processes, cellular responses to sublethal and lethal injury, tissue alterations, hemodynamics, and neoplastic transformation in domestic animals.
        </p>
      </div>

      {/* 6 Sections List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-0.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
            Section Modules
          </h3>
          <span className="text-[11px] text-slate-400 font-medium">
            Select to view curriculum outline
          </span>
        </div>

        {GENERAL_PATHOLOGY_SECTIONS.map((section) => {
          const Icon = getIcon(section.iconName);
          const isMetabolism = section.id === 'disturbance-cell-metabolism';

          return (
            <button
              key={section.id}
              id={`general-section-${section.id}`}
              onClick={() => onSelectTopic(section.id)}
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
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.2 rounded-sm tracking-wide border ${
                          isMetabolism || section.status === 'Available'
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-300/80'
                            : 'bg-amber-50 text-amber-900 border-amber-300/80'
                        }`}
                      >
                        {isMetabolism || section.status === 'Available' ? 'Available' : 'Content migration'}
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
                {section.shortDesc}
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 pl-13">
                <span className="font-semibold text-slate-700">
                  {isMetabolism ? '13 study units available' : 'Content migration'}
                </span>
                <span className="text-teal-800 font-semibold group-hover:underline">
                  View Lessons →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
