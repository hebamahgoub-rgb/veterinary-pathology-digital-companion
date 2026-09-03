import React, { useState } from 'react';
import { ExternalLink, Maximize2, X } from 'lucide-react';

interface MetabolismFigureProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  citation?: string;
  sourceUrl?: string;
  sourceTitle?: string;
  licenseText?: string;
  licenseUrl?: string;
  className?: string;
}

export const MetabolismFigure: React.FC<MetabolismFigureProps> = ({
  src,
  alt,
  caption,
  citation,
  sourceUrl,
  sourceTitle,
  licenseText,
  licenseUrl,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className={`my-4 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs ${className}`}>
        <div className="relative group bg-slate-900 flex items-center justify-center overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full max-h-[420px] object-contain cursor-pointer transition-transform duration-200 group-hover:scale-[1.01]"
            onClick={() => setIsOpen(true)}
          />
          <button
            onClick={() => setIsOpen(true)}
            className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white/90 text-xs backdrop-blur-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
            aria-label="Enlarge image"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium pr-0.5">Enlarge</span>
          </button>
        </div>

        {(caption || citation || sourceUrl || licenseText) && (
          <figcaption className="p-3 sm:p-3.5 text-xs text-slate-600 bg-slate-50/70 border-t border-slate-100 leading-relaxed">
            {caption && <div className="text-slate-800 font-medium mb-1">{caption}</div>}
            <div className="text-[11px] text-slate-500 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 mt-0.5">
              {citation && <span>{citation}</span>}
              {sourceUrl && sourceTitle && (
                <>
                  <span>•</span>
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:underline inline-flex items-center gap-0.5 font-medium"
                  >
                    <span>{sourceTitle}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}
              {licenseText && (
                <>
                  <span>•</span>
                  {licenseUrl ? (
                    <a
                      href={licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 underline font-medium"
                    >
                      {licenseText}
                    </a>
                  ) : (
                    <span>{licenseText}</span>
                  )}
                </>
              )}
            </div>
          </figcaption>
        )}
      </figure>

      {/* Fullscreen Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 p-1.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={src}
              alt={alt}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className="mt-3 text-center text-xs text-slate-300 max-w-2xl px-2"
              onClick={(e) => e.stopPropagation()}
            >
              {caption}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
