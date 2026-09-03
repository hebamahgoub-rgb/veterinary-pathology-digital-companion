export type NavigationTab = 'home' | 'search' | 'videos' | 'saved';

export type ScreenView =
  | { type: 'home' }
  | { type: 'general_pathology' }
  | { type: 'topic_detail'; topicId: string }
  | { type: 'lesson'; lessonId: string }
  | { type: 'systemic_pathology' }
  | { type: 'infectious_diseases' }
  | { type: 'image_atlas'; initialImageId?: string }
  | { type: 'search'; query?: string }
  | { type: 'videos'; filterTopic?: string }
  | { type: 'saved' };

export interface MicrolearningVideo {
  id: string;
  title: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl?: string;
  topicTag: string;
  speaker: string;
  institution: string;
  summary: string;
  keyTakeaways: string[];
}

export interface SpecimenImage {
  id: string;
  title: string;
  organ: string;
  species: string;
  type: 'Gross' | 'Histopathology' | 'Special Stain' | 'Ultrastructure';
  stain?: string;
  imageUrl: string;
  polarizationUrl?: string;
  description: string;
  diagnosticFeatures: string[];
  etiology?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonContentSection {
  id: string;
  title: string;
  content: string[];
  subpoints?: { label: string; text: string }[];
  clinicalSpeciesCallout?: {
    species: string;
    note: string;
  };
}

export interface LessonData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  topicId: string;
  topicTitle: string;
  readTime: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Core Clinical';
  speciesTags: string[];
  summary: string;
  sections: LessonContentSection[];
  keyPoints: string[];
  video?: MicrolearningVideo;
  specimens?: SpecimenImage[];
  quiz?: QuizQuestion[];
  previousLesson?: { id: string; title: string };
  nextLesson?: { id: string; title: string };
}

export interface TopicSection {
  id: string;
  title: string;
  code: string;
  shortDesc: string;
  iconName: string;
  colorTheme: string;
  lessonCount: number;
  status?: 'Content migration' | 'Under development' | 'Available';
  moduleType?: 'general_pathology' | 'infectious_diseases';
  lessons: {
    id: string;
    title: string;
    summary: string;
    readTime: string;
    species: string[];
    isAvailable: boolean;
  }[];
}

export interface GeneralPathologyCategory {
  id: string;
  title: string;
  subtitle: string;
  topics: TopicSection[];
}
