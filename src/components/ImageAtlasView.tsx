import React from 'react';
import { Image as ImageIcon, Clock } from 'lucide-react';
import { ScreenView } from '../types';

interface ImageAtlasViewProps {
  onNavigate?: (view: ScreenView) => void;
  onOpenAmyloidosis?: () => void;
}

export const ImageAtlasView: React.FC<ImageAtlasViewProps> = () => {
  return (
    <div id="image-atlas-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider font-sans flex-wrap">
          <span>Supplementary resources</span>
          <span>•</span>
          <span className="bg-amber-50 text-amber-900 border border-amber-300/80 px-2 py-0.5 rounded-full text-[10px] font-semibold normal-case tracking-normal">
            Resources awaiting migration
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5 font-serif-academic">
          Pathology Image Collection
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Gross pathology specimens, histopathology slides, and special stain photomicrographs for veterinary pathology study.
        </p>
      </div>

      {/* Clear Empty-State Message */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-4 shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto">
          <ImageIcon className="w-7 h-7" />
        </div>

        <div className="space-y-2 max-w-sm mx-auto">
          <span className="text-[11px] font-bold text-amber-900 bg-amber-50 border border-amber-300/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono-code">
            Supplementary resources
          </span>
          <h3 className="text-lg font-bold text-slate-900 font-sans pt-1">
            Resources awaiting migration
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-resolution gross pathology specimens, special histochemical stains, and histological micrographs are awaiting transfer into the companion application.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-100 max-w-xs mx-auto text-[11px] text-slate-400 flex items-center justify-center gap-1.5 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>Awaiting source pathology specimen image import</span>
        </div>
      </div>
    </div>
  );
};
