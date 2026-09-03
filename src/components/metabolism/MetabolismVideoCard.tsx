import React from 'react';

interface MetabolismVideoCardProps {
  videoId: string;
  title: string;
  description: string;
  badge?: string;
  keyPoints?: string[];
}

export const MetabolismVideoCard: React.FC<MetabolismVideoCardProps> = ({
  videoId,
  title,
  description,
  badge,
  keyPoints,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col my-4">
      {/* 16:9 Responsive Embed */}
      <div className="relative w-full pb-[56.25%] bg-slate-950">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {badge && (
          <span className="self-start text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full mb-1.5 font-mono-code">
            {badge}
          </span>
        )}
        <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
          {title}
        </h3>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed flex-grow">
          {description}
        </p>

        {keyPoints && keyPoints.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-slate-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-sans">
              Key Pathology Concepts:
            </p>
            <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
              {keyPoints.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
