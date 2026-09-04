import React, { useMemo, useRef, useState } from 'react';

export interface DirectoryTab {
  id: string;
  label: string;
  sectionIds: string[];
}

interface TabbedDirectoryContentProps {
  htmlContent: string;
  tabs: DirectoryTab[];
  ariaLabel: string;
}

interface ParsedDirectoryContent {
  heroHtml: string;
  panels: Record<string, string>;
}

const parseDirectoryContent = (
  htmlContent: string,
  tabs: DirectoryTab[]
): ParsedDirectoryContent => {
  if (typeof DOMParser === 'undefined') {
    return {
      heroHtml: '',
      panels: { [tabs[0]?.id ?? 'explore']: htmlContent },
    };
  }

  const document = new DOMParser().parseFromString(
    `<div id="directory-source">${htmlContent}</div>`,
    'text/html'
  );
  const source = document.querySelector('#directory-source');
  const heroHtml = source?.querySelector('.hero')?.outerHTML ?? '';
  const panels: Record<string, string> = {};

  tabs.forEach((tab) => {
    panels[tab.id] = tab.sectionIds
      .map((sectionId) =>
        source
          ?.querySelector(`section[aria-labelledby="${sectionId}"]`)
          ?.outerHTML ?? ''
      )
      .filter(Boolean)
      .join('');
  });

  return { heroHtml, panels };
};

export const TabbedDirectoryContent: React.FC<TabbedDirectoryContentProps> = ({
  htmlContent,
  tabs,
  ariaLabel,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '');
  const panelTopRef = useRef<HTMLDivElement>(null);
  const parsed = useMemo(
    () => parseDirectoryContent(htmlContent, tabs),
    [htmlContent, tabs]
  );

  const selectTab = (tabId: string) => {
    setActiveTab(tabId);
    window.requestAnimationFrame(() => {
      panelTopRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;

    selectTab(tabs[nextIndex].id);
    document.getElementById(`${ariaLabel}-tab-${tabs[nextIndex].id}`)?.focus();
  };

  return (
    <div className="infectious-page rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden">
      {parsed.heroHtml && (
        <div dangerouslySetInnerHTML={{ __html: parsed.heroHtml }} />
      )}

      <div ref={panelTopRef} className="scroll-mt-20 border-y border-slate-200 bg-slate-50/90 px-3 py-3">
        <div
          role="tablist"
          aria-label={ariaLabel}
          className="flex gap-2 overflow-x-auto no-scrollbar"
        >
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                id={`${ariaLabel}-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${ariaLabel}-panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectTab(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`flex-shrink-0 rounded-xl border px-3.5 py-2 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 ${
                  isActive
                    ? 'border-teal-800 bg-teal-800 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <div
            key={tab.id}
            id={`${ariaLabel}-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${ariaLabel}-tab-${tab.id}`}
            hidden={!isActive}
            tabIndex={0}
            dangerouslySetInnerHTML={{ __html: parsed.panels[tab.id] ?? '' }}
          />
        );
      })}
    </div>
  );
};
