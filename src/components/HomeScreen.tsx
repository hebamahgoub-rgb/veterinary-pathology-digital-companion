import React from 'react';
import {
  BookOpen,
  Layers,
  Bug,
  Image as ImageIcon,
  Video,
  Search,
  ChevronRight,
  ArrowUpRight,
  Award,
  Microscope,
  Clock,
} from 'lucide-react';
import { ScreenView } from '../types';

interface HomeScreenProps {
  onNavigate: (view: ScreenView) => void;
  onOpenAmyloidosis?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
}) => {
  const primaryCards = [
    {
      id: 'card-general-pathology',
      title: 'General Pathology',
      subtitle: 'Cell injury, metabolism, inflammation, circulatory & neoplasia',
      badge: 'Content migration',
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-300/80',
      icon: BookOpen,
      iconBg: 'bg-teal-800 text-teal-100',
      borderHover: 'hover:border-teal-500',
      action: () => onNavigate({ type: 'general_pathology' }),
      highlight: true,
      statusLine: '13 study units available',
    },
    {
      id: 'card-infectious-diseases',
      title: 'Infectious Diseases',
      subtitle: '3 sections in content migration · 3 under development',
      badge: '3 in migration · 3 under dev',
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-300/80',
      icon: Bug,
      iconBg: 'bg-rose-900 text-rose-100',
      borderHover: 'hover:border-rose-500',
      action: () => onNavigate({ type: 'infectious_diseases' }),
      highlight: false,
      statusLine: '3 sections in content migration · 3 under development',
    },
    {
      id: 'card-systemic-pathology',
      title: 'Systemic Pathology',
      subtitle: 'Organ-system pathology · Under development',
      badge: 'Under development',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
      icon: Layers,
      iconBg: 'bg-slate-800 text-slate-100',
      borderHover: 'hover:border-slate-500',
      action: () => onNavigate({ type: 'systemic_pathology' }),
      highlight: false,
      statusLine: 'Under development',
    },
    {
      id: 'card-image-collection',
      title: 'Pathology Image Collection',
      subtitle: 'Resources awaiting migration',
      badge: 'Supplementary resources',
      badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-300/80',
      icon: ImageIcon,
      iconBg: 'bg-emerald-900 text-emerald-100',
      borderHover: 'hover:border-emerald-500',
      action: () => onNavigate({ type: 'image_atlas' }),
      highlight: false,
      statusLine: 'Resources awaiting migration',
    },
    {
      id: 'card-microlearning-videos',
      title: 'Microlearning Videos',
      subtitle: '12 videos available',
      badge: 'Supplementary resources',
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-300/80',
      icon: Video,
      iconBg: 'bg-amber-800 text-amber-100',
      borderHover: 'hover:border-amber-500',
      action: () => onNavigate({ type: 'videos' }),
      highlight: false,
      statusLine: '12 videos available',
    },
    {
      id: 'card-search-index',
      title: 'Search',
      subtitle: 'Search terms, lesions, stains, and pathology concepts',
      badge: 'Search',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      icon: Search,
      iconBg: 'bg-slate-800 text-slate-100',
      borderHover: 'hover:border-slate-500',
      action: () => onNavigate({ type: 'search' }),
      highlight: false,
      statusLine: 'Curriculum Index',
    },
  ];

  return (
    <div id="home-screen-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 text-white rounded-2xl p-4 sm:p-5 shadow-sm border border-teal-950 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10 pointer-events-none">
          <Microscope className="w-44 h-44 text-teal-300" />
        </div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-800/80 text-teal-200 border border-teal-700/60 backdrop-blur-xs">
              <Award className="w-3 h-3 text-teal-300" />
              Academic Companion
            </span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif-academic">
              Veterinary Pathology Digital Companion
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg leading-relaxed">
              Mobile study companion for veterinary pathology education.
            </p>
          </div>

          {/* Quick jump to General Pathology curriculum */}
          <div className="pt-1">
            <button
              id="quick-start-general-pathology-btn"
              onClick={() => onNavigate({ type: 'general_pathology' })}
              className="w-full bg-teal-500/20 hover:bg-teal-500/30 active:bg-teal-500/40 border border-teal-400/40 rounded-xl p-3 text-left flex items-center justify-between gap-3 transition-all group"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-200 text-amber-950 font-sans">
                    Content Migration
                  </span>
                  <span className="text-xs text-teal-200 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-300" /> In Progress
                  </span>
                </div>
                <p className="text-sm font-semibold text-white mt-1 group-hover:text-teal-200 transition-colors truncate">
                  General Pathology
                </p>
                <p className="text-[11px] text-slate-300 truncate">
                  13 study units available · Explore General Pathology
                </p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform font-bold">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Touch-Friendly Primary Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-2.5 px-0.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
            Primary Modules
          </h3>
          <span className="text-[11px] font-medium text-slate-400">
            Navigation
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {primaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                id={card.id}
                onClick={card.action}
                className={`w-full text-left p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all duration-150 active:scale-[0.985] group flex flex-col justify-between relative overflow-hidden ${card.borderHover} ${
                  card.highlight ? 'ring-1 ring-teal-600/30' : ''
                }`}
              >
                {/* Top Row: Icon + Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 ${card.iconBg}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Body: Title + Description */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-900 transition-colors flex items-center gap-1.5 font-sans">
                    {card.title}
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-700 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {card.subtitle}
                  </p>
                </div>

                {/* Bottom indicator strip */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-semibold">
                  <span className="flex items-center gap-1">
                    {card.highlight && <Clock className="w-3.5 h-3.5 text-amber-600" />}
                    {card.statusLine}
                  </span>
                  <span className="text-xs text-teal-800 font-medium">Explore →</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Note Callout */}
      <div className="bg-slate-100/90 border border-slate-200/80 rounded-xl p-3.5 flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg bg-teal-900 text-teal-200 flex items-center justify-center flex-shrink-0 mt-0.5">
          <BookOpen className="w-3.5 h-3.5" />
        </div>
        <div className="text-xs text-slate-600 leading-relaxed">
          <span className="font-bold text-slate-900">Curriculum Structure: </span>
          Explore available Disturbance in Cell Metabolism study units, General Pathology and Infectious Diseases sections in content migration, and curriculum outlines under development. Microlearning videos are available as supplementary resources, with additional resources added following review.
        </div>
      </div>
    </div>
  );
};
