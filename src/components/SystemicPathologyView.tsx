import React from 'react';
import {
  Heart,
  Wind,
  Utensils,
  Droplet,
  Brain,
  Bone,
  Lock,
} from 'lucide-react';
import { ScreenView } from '../types';

interface SystemicPathologyViewProps {
  onNavigate: (view: ScreenView) => void;
}

export const SystemicPathologyView: React.FC<SystemicPathologyViewProps> = () => {
  const organSystems = [
    {
      id: 'alimentary',
      title: 'Alimentary System',
      desc: 'Oral cavity, stomach, intestines, liver, pancreas & peritoneum.',
      icon: Utensils,
      color: 'bg-amber-100 text-amber-800',
    },
    {
      id: 'respiratory',
      title: 'Respiratory System',
      desc: 'Nasal cavity, larynx, trachea, lungs & pleura.',
      icon: Wind,
      color: 'bg-sky-100 text-sky-800',
    },
    {
      id: 'cardiovascular',
      title: 'Cardiovascular System',
      desc: 'Heart, endocardium, myocardium, pericardium & vascular system.',
      icon: Heart,
      color: 'bg-rose-100 text-rose-800',
    },
    {
      id: 'urinary',
      title: 'Urinary System',
      desc: 'Kidneys, glomeruli, tubules, interstitium & lower urinary tract.',
      icon: Droplet,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'nervous',
      title: 'Nervous System',
      desc: 'Central and peripheral nervous system pathology.',
      icon: Brain,
      color: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'musculoskeletal',
      title: 'Musculoskeletal System',
      desc: 'Bones, joints, and skeletal muscle pathology.',
      icon: Bone,
      color: 'bg-slate-100 text-slate-800',
    },
  ];

  return (
    <div id="systemic-pathology-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider font-sans">
            Curriculum Module
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Under development
          </span>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-academic">
            Systemic Pathology
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            Organ-specific disease entities, histopathology, gross lesions, and structural dysfunction across veterinary organ systems. Complete educational content is currently under development.
          </p>
        </div>
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>All 6 organ-system sections under development</span>
        </div>
      </div>

      {/* Systems Grid */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-0.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
            Organ Systems
          </h3>
          <span className="text-[11px] text-slate-500 font-medium">
            Curriculum Structure
          </span>
        </div>

        {organSystems.map((system) => {
          const Icon = system.icon;
          return (
            <div
              key={system.id}
              className="p-4 rounded-2xl bg-slate-50/75 border border-slate-200 opacity-85 shadow-xs flex items-start justify-between gap-3 select-none cursor-not-allowed"
            >
              <div className="flex items-start gap-3 min-w-0">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${system.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-slate-800 font-sans">
                      {system.title}
                    </h4>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-300 px-1.5 py-0.2 rounded-sm tracking-wide">
                      Under development
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {system.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 text-slate-400">
                <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline italic">
                  Under development
                </span>
                <div
                  className="w-7 h-7 rounded-lg bg-slate-200/70 text-slate-400 flex items-center justify-center"
                  title="Section under development — not available to open"
                >
                  <Lock className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
