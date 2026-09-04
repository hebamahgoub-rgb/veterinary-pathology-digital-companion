import { ScreenView } from './types';

const DEFAULT_VIEW: ScreenView = { type: 'home' };

export function viewToHash(view: ScreenView): string {
  switch (view.type) {
    case 'home':
      return '#/';
    case 'general_pathology':
      return '#/general-pathology';
    case 'topic_detail':
      return `#/topic/${encodeURIComponent(view.topicId)}`;
    case 'lesson':
      return `#/lesson/${encodeURIComponent(view.lessonId)}`;
    case 'systemic_pathology':
      return '#/systemic-pathology';
    case 'infectious_diseases':
      return '#/infectious-diseases';
    case 'image_atlas':
      return view.initialImageId
        ? `#/image-atlas/${encodeURIComponent(view.initialImageId)}`
        : '#/image-atlas';
    case 'search':
      return view.query
        ? `#/search/${encodeURIComponent(view.query)}`
        : '#/search';
    case 'videos':
      return view.filterTopic
        ? `#/videos/${encodeURIComponent(view.filterTopic)}`
        : '#/videos';
    case 'saved':
      return '#/saved';
  }
}

export function hashToView(hash: string): ScreenView {
  const path = hash.replace(/^#\/?/, '');
  const [section = '', encodedValue] = path.split('/');
  let value: string | undefined;
  try {
    value = encodedValue ? decodeURIComponent(encodedValue) : undefined;
  } catch {
    return DEFAULT_VIEW;
  }

  switch (section) {
    case '':
      return DEFAULT_VIEW;
    case 'general-pathology':
      return { type: 'general_pathology' };
    case 'topic':
      return value ? { type: 'topic_detail', topicId: value } : DEFAULT_VIEW;
    case 'lesson':
      return value ? { type: 'lesson', lessonId: value } : DEFAULT_VIEW;
    case 'systemic-pathology':
      return { type: 'systemic_pathology' };
    case 'infectious-diseases':
      return { type: 'infectious_diseases' };
    case 'image-atlas':
      return { type: 'image_atlas', initialImageId: value };
    case 'search':
      return { type: 'search', query: value };
    case 'videos':
      return { type: 'videos', filterTopic: value };
    case 'saved':
      return { type: 'saved' };
    default:
      return DEFAULT_VIEW;
  }
}

export function tabForView(view: ScreenView) {
  switch (view.type) {
    case 'search':
      return 'search' as const;
    case 'videos':
      return 'videos' as const;
    case 'saved':
      return 'saved' as const;
    default:
      return 'home' as const;
  }
}
