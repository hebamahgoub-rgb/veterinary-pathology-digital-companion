import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { COMPANION_SECTIONS, COMPANION_WEBSITE } from '../data/companionSections';
import { COMPANION_FIGURES } from '../data/companionFigures';
import type { ScreenView } from '../types';

type SectionView = Extract<ScreenView, { type: 'companion_section' }>;

export function CompanionSectionView({ view, onNavigate }: {
  view: SectionView;
  onNavigate: (view: ScreenView) => void;
}) {
  const section = COMPANION_SECTIONS[view.sectionId];
  const page = section.pages.find((item) => item.id === view.pageId);
  const reading = page ?? section;
  const figures = COMPANION_FIGURES[reading.id] ?? [];
  const children = section.pages.filter((item) => item.parent === page?.id);

  return (
    <div className="mx-auto max-w-2xl space-y-4 px-4 pt-4 pb-24">
      <section className="rounded-2xl border border-teal-950 bg-teal-900 p-5 text-white">
        <h2 className="font-serif-academic text-2xl font-bold">{reading.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-teal-50">{reading.summary}</p>
      </section>

      {page?.blocks?.map((block) => (
        <section key={block.title} className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold text-slate-900">{block.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{block.text}</p>
        </section>
      ))}

      {page?.article && (
        <article className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-base leading-relaxed text-slate-800">
          {page.article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {!!page.article.references?.length && (
            <section aria-label="Sources">
              <h3 className="font-semibold">Sources</h3>
              <ul className="list-disc pl-5">
                {page.article.references.map(({ label, url }) => (
                  <li key={url}><a href={url} className="text-teal-800 underline">{label}</a></li>
                ))}
              </ul>
            </section>
          )}
        </article>
      )}

      {figures.map((figure) => {
        const src = import.meta.env.BASE_URL + 'images/companion/' + figure.file;
        return (
          <figure key={figure.file} className="rounded-2xl border border-slate-200 bg-white p-4">
            <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Enlarge: ${figure.alt}`} className="block rounded focus-visible:outline-2 focus-visible:outline-teal-700">
              <img src={src} alt={figure.alt} loading="lazy" className="mx-auto h-auto w-full max-w-xl" />
            </a>
            <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">{figure.caption}</figcaption>
          </figure>
        );
      })}

      {children.map((child) => (
        <button
          key={child.id}
          type="button"
          onClick={() => onNavigate({ ...view, pageId: child.id })}
          className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:border-teal-500 focus-visible:outline-2 focus-visible:outline-teal-700"
        >
          <span className="flex-1">
            <span className="block font-semibold text-teal-900">{child.title}</span>
            <span className="mt-1 block text-sm leading-relaxed text-slate-600">{child.summary}</span>
          </span>
          <ChevronRight aria-hidden="true" className="h-5 w-5 shrink-0 text-teal-700" />
        </button>
      ))}

      <a
        href={COMPANION_WEBSITE + (reading.path ?? section.path)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-teal-900 hover:underline focus-visible:outline-2 focus-visible:outline-teal-700"
      >
        {reading.path ? 'View source page on the website' : 'View magazine on the website'}
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
    </div>
  );
}
