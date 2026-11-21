import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import type { ScreenView } from '../types';

import { MAGAZINE_PAGES as pages } from '../data/magazinePages';

function MagazineArticle({ page }: { page: (typeof pages)[number] }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [height, setHeight] = useState(640);

  useEffect(() => () => observer.current?.disconnect(), []);

  function fitDocument() {
    observer.current?.disconnect();
    const body = frame.current?.contentDocument?.body;
    if (!body) return;
    const measure = () => setHeight(Math.ceil(body.getBoundingClientRect().height) + 2);
    measure();
    observer.current = new ResizeObserver(measure);
    observer.current.observe(body);
  }

  return (
    <iframe
      ref={frame}
      title={page.title}
      src={import.meta.env.BASE_URL + 'magazine/' + page.id + '.html'}
      sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      onLoad={fitDocument}
      className="block w-full rounded-xl border border-slate-200 bg-white"
      style={{ height }}
    />
  );
}

export function MagazineView({ pageId, onNavigate }: {
  pageId?: string;
  onNavigate: (view: ScreenView) => void;
}) {
  const page = pages.find((entry) => entry.id === pageId);
  const open = (id?: string) => onNavigate({ type: 'companion_section', sectionId: 'magazine', pageId: id });

  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 pt-4 pb-24">
      {page ? (
        <>
          <button type="button" onClick={() => open()} className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold text-teal-900 hover:underline">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to VetPath Magazine
          </button>
          <MagazineArticle key={page.id} page={page} />
        </>
      ) : (
        <>
          <section className="rounded-2xl border border-teal-950 bg-teal-900 p-5 text-white">
            <h2 className="font-serif-academic text-2xl font-bold">VetPath Magazine</h2>
            <p className="mt-2 text-sm leading-relaxed text-teal-50">Veterinary science, animal health, economics, and public policy in Egypt and internationally.</p>
          </section>
          {pages.map((entry) => (
            <button key={entry.id} type="button" onClick={() => open(entry.id)} className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:border-teal-500 focus-visible:outline-2 focus-visible:outline-teal-700">
              <span className="flex-1">
                <span className="block text-xs font-medium text-slate-600">{entry.topic}</span>
                <span className="mt-1 block font-semibold text-teal-900">{entry.title}</span>
              </span>
              <ChevronRight aria-hidden="true" className="h-5 w-5 shrink-0 text-teal-700" />
            </button>
          ))}
        </>
      )}
    </div>
  );
}
