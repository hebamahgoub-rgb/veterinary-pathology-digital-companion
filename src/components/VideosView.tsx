import React, { useState } from 'react';
import {
  Video as VideoIcon,
  Clock,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ScreenView } from '../types';

interface VideoItem {
  id: string;
  videoId: string;
  title: string;
  category: 'Metabolism' | 'Cell Injury' | 'Inflammation' | 'Circulatory' | 'Immune' | 'Growth';
  badge: string;
  duration: string;
  description: string;
  lessonId: string;
  lessonTitle: string;
  keyPoints?: string[];
  isDrive?: boolean;
  driveEmbedUrl?: string;
  driveWatchUrl?: string;
}

export const DICM_VIDEOS: VideoItem[] = [
  {
    id: 'vid-swelling',
    videoId: '8F-PuSjacXo',
    title: 'Why Do Injured Cells Swell? - General Pathology in Minutes',
    category: 'Metabolism',
    badge: 'GEN-01 Overview · 4 Min Video',
    duration: '4:15',
    description:
      'Core physiological explanation of ATP depletion, failure of the Na+/K+ ATPase pump, sodium influx, and osmotic swelling leading to hydropic degeneration.',
    lessonId: 'module-overview',
    lessonTitle: 'Cellular Swelling and Hydropic Change',
    keyPoints: [
      'Cellular swelling is the earliest universal morphological indicator of acute, reversible cell injury.',
      'Loss of ATP inhibits energy-dependent Na+/K+ ion transporters in the plasma membrane.',
      'Net water influx distends cisternae of the endoplasmic reticulum and mitochondria.',
    ],
  },
  {
    id: 'vid-lipidosis',
    videoId: 'JWjg6rhiwoQ',
    title: 'Hepatic Lipidosis (Steatosis): How Fat Accumulates in the Liver',
    category: 'Metabolism',
    badge: 'GEN-01 Lipidosis Video Walkthrough',
    duration: '8:40',
    description:
      'Comprehensive pathophysiology video demonstrating free fatty acid influx, impaired beta-oxidation, decreased apolipoprotein synthesis, and microscopic clear vacuole formation in hepatocytes.',
    lessonId: 'fatty-change',
    lessonTitle: 'Fatty Change (Lipidosis)',
    keyPoints: [
      'Excess mobilization of non-esterified fatty acids (NEFAs) from adipose reserves during starvation or lactation.',
      'Hepatocytes accumulate intracytoplasmic triglycerides, displacing the nucleus peripherally.',
      'Differentiating microvesicular vs. macrovesicular steatosis.',
    ],
  },
  {
    id: 'vid-amyloid-full',
    videoId: '839UcPB0YHA',
    title: 'Amyloidosis & Protein Misfolding Explained',
    category: 'Metabolism',
    badge: 'Core Clinical Walkthrough · Complete Lesson',
    duration: '11:20',
    description:
      'Detailed lecture on the pathogenesis of amyloid fibril formation, secondary reactive AA amyloidosis during chronic inflammation, and renal amyloidosis pathology.',
    lessonId: 'amyloidosis',
    lessonTitle: 'Amyloidosis',
    keyPoints: [
      'Precursor proteins misfold into insoluble antiparallel beta-pleated sheet conformations.',
      'AA amyloid derives from Serum Amyloid A (SAA) during sustained chronic inflammation.',
      'AL amyloid arises from monoclonal light chains secreted by plasma cell dyscrasias.',
    ],
  },
  {
    id: 'vid-amyloid-short-1',
    videoId: 'MhWTwe0VmeI',
    title: 'What Exactly Is Amyloid?',
    category: 'Metabolism',
    badge: '60-Second Microlearning',
    duration: '1:00',
    description:
      'Quick visual overview of extracellular insoluble fibrillar protein deposition and its physical characteristics in organs.',
    lessonId: 'amyloidosis',
    lessonTitle: 'Amyloidosis',
  },
  {
    id: 'vid-amyloid-short-2',
    videoId: '-TessFhJD4g',
    title: 'Why Proteins Misfold in Amyloidosis',
    category: 'Metabolism',
    badge: '60-Second Microlearning',
    duration: '1:00',
    description:
      'Micro-lecture on primary protein conformational failure and cross-beta sheet stability resistant to enzymatic digestion.',
    lessonId: 'amyloidosis',
    lessonTitle: 'Amyloidosis',
  },
  {
    id: 'vid-amyloid-short-3',
    videoId: '4tancbY-8r4',
    title: 'Why Amyloid Glows Apple-Green Under Polarized Light',
    category: 'Metabolism',
    badge: '60-Second Microlearning',
    duration: '1:00',
    description:
      'High-yield microscopic demonstration of Congo Red dye intercalation and apple-green birefringence under cross-polarizers.',
    lessonId: 'amyloidosis',
    lessonTitle: 'Amyloidosis',
  },
  {
    id: 'vid-calc-full',
    videoId: 'aUxQQDIx9GE',
    title: 'Full Lesson: Pathological Calcification',
    category: 'Metabolism',
    badge: 'Comprehensive Lesson',
    duration: '14:30',
    description:
      'Complete walkthrough differentiating dystrophic calcification from metastatic calcification with veterinary gross and histopathologic examples.',
    lessonId: 'pathological-calcification',
    lessonTitle: 'Pathological Calcification',
    keyPoints: [
      'Dystrophic occurs with normal serum calcium in necrotic or dying tissue.',
      'Metastatic occurs with elevated serum calcium in previously normal tissues.',
      'Von Kossa (silver reduction) and Alizarin Red are confirmatory special stains.',
    ],
  },
  {
    id: 'vid-calc-part-1',
    videoId: 'D3kJmXrbgio',
    title: '1. Dystrophic vs Metastatic Calcification',
    category: 'Metabolism',
    badge: 'Microlearning Video 1',
    duration: '2:15',
    description:
      'Fundamental contrast between local tissue necrosis calcification and systemic hypercalcemia.',
    lessonId: 'pathological-calcification',
    lessonTitle: 'Pathological Calcification',
  },
  {
    id: 'vid-calc-part-2',
    videoId: 'U1EKTnONxm4',
    title: '2. Dystrophic Calcification: Where It Happens & Why',
    category: 'Metabolism',
    badge: 'Microlearning Video 2',
    duration: '2:45',
    description:
      'Target tissue locations including caseous granulomas, necrotic skeletal muscle, and chronic abscesses.',
    lessonId: 'pathological-calcification',
    lessonTitle: 'Pathological Calcification',
  },
  {
    id: 'vid-calc-part-3',
    videoId: 'dAwuHU_8G3w',
    title: '3. How Dystrophic Calcification Forms',
    category: 'Metabolism',
    badge: 'Microlearning Video 3',
    duration: '3:10',
    description:
      'Membrane-bound calcium binding, phosphate interaction, and hydroxyapatite crystal propagation in dead cells.',
    lessonId: 'pathological-calcification',
    lessonTitle: 'Pathological Calcification',
  },
  {
    id: 'vid-calc-part-4',
    videoId: 'J8xGaVIxDqc',
    title: '4. Examples of Dystrophic Calcification',
    category: 'Metabolism',
    badge: 'Microlearning Video 4',
    duration: '2:50',
    description:
      'Gross pathology specimens: calcinosis cutis, tuberculosis granulomas, and parasitic cyst calcification.',
    lessonId: 'pathological-calcification',
    lessonTitle: 'Pathological Calcification',
  },
  {
    id: 'vid-calc-part-5',
    videoId: 'nkTX0Zy_vLw',
    title: '5. Metastatic Calcification: Where It Happens & Why',
    category: 'Metabolism',
    badge: 'Microlearning Video 5',
    duration: '3:05',
    description:
      'Internal elastic lamina of arteries, gastric mucosa, pulmonary alveolar septa, and renal tubular basement membranes.',
    lessonId: 'pathological-calcification',
    lessonTitle: 'Pathological Calcification',
  },
  // Cell Injury and Cell Death (GEN-02)
  {
    id: 'vid-cid-en',
    videoId: 'FQCodmYhwqk',
    title: 'Cell Injury & Cell Death Explained (English Lesson)',
    category: 'Cell Injury',
    badge: 'GEN-02 English Lecture',
    duration: '9:30',
    description:
      'A concise English overview of the causes and mechanisms of cell injury, reversible and irreversible damage, necrosis patterns, and apoptotic pathways.',
    lessonId: 'cell-injury-cell-death',
    lessonTitle: 'Cell Injury and Cell Death',
    keyPoints: [
      'Point of no return defined by irreversible mitochondrial dysfunction and plasma membrane permeability.',
      'Necrosis results in cell swelling, enzymatic digestion, plasma membrane rupture, and acute inflammation.',
      'Apoptosis is an energy-dependent programmed cellular suicide maintaining membrane integrity.',
    ],
  },
  {
    id: 'vid-cid-bilingual',
    videoId: 'xKGJW-pVxGk',
    title: 'Cell Injury and Cell Death (Bilingual Teaching Version)',
    category: 'Cell Injury',
    badge: 'GEN-02 Bilingual Lecture',
    duration: '14:20',
    description:
      'In-depth bilingual veterinary pathology lesson preserving formal English pathology terminology with contextual Arabic explanations for difficult biochemical cascades.',
    lessonId: 'cell-injury-cell-death',
    lessonTitle: 'Cell Injury and Cell Death',
    keyPoints: [
      'Comprehensive exploration of ATP depletion, reactive oxygen species generation, and intracellular calcium influx.',
      'Comparison between coagulative, liquefactive, caseous, fat, and gangrenous necrosis.',
    ],
  },
  // Inflammation (GEN-03)
  {
    id: 'vid-inf-immunity',
    videoId: '5nFy6FUY0xU',
    title: 'Immunity Background & Innate Defense',
    category: 'Inflammation',
    badge: 'GEN-03 Foundational',
    duration: '8:15',
    description:
      'Non-specific physical, chemical, and cellular defense mechanisms recognizing microbial invaders and injury before cellular and vascular inflammatory cascades ignite.',
    lessonId: 'inflammation',
    lessonTitle: 'Inflammation',
    keyPoints: [
      'PAMP and DAMP recognition by Toll-like receptors and NOD-like receptors.',
      'Initiation of early vascular responses and endothelial activation.',
    ],
  },
  {
    id: 'vid-inf-acute',
    videoId: 'HAq00u1hNkg',
    title: 'Acute Inflammation Overview: Vascular & Cellular Dynamics',
    category: 'Inflammation',
    badge: 'GEN-03 Core Lecture',
    duration: '12:40',
    description:
      'Visual pathology lecture covering hemodynamic changes, endothelial gap formation, leukocyte margination, transmigration, and the five cardinal signs.',
    lessonId: 'inflammation',
    lessonTitle: 'Inflammation',
    keyPoints: [
      'Cardinal signs: Rubor, calor, tumor, dolor, and functio laesa.',
      'Leukocyte recruitment cascade: rolling, activation, stable adhesion, and transmigration (diapedesis).',
    ],
  },
  {
    id: 'vid-inf-cytokines',
    videoId: 'yzYnI1al64Q',
    title: 'Cytokines and Chemokines Network in Tissue Inflammation',
    category: 'Inflammation',
    badge: 'GEN-03 Mediators',
    duration: '10:05',
    description:
      'Chemical mediator cascades orchestrating local endothelial adhesion molecule upregulation and systemic acute-phase reactions during tissue injury.',
    lessonId: 'inflammation',
    lessonTitle: 'Inflammation',
    keyPoints: [
      'TNF-alpha and IL-1 as master drivers of endothelial activation and systemic fever.',
      'Chemokines establishing chemotactic gradients directing leukocyte migration.',
    ],
  },
  {
    id: 'vid-inf-repair',
    videoId: 'OiF_Dh7YWDc',
    title: 'Tissue Repair: Regeneration, Granulation Tissue & Scarring',
    category: 'Inflammation',
    badge: 'GEN-03 Repair & Healing',
    duration: '11:50',
    description:
      'Mechanisms of tissue healing: parenchymal regeneration vs. connective tissue scar replacement, angiogenesis, and collagen remodeling.',
    lessonId: 'inflammation',
    lessonTitle: 'Inflammation',
    keyPoints: [
      'Granulation tissue composed of proliferating capillaries, loose ECM, and fibroblasts.',
      'Transition from Type III to Type I collagen during scar maturation.',
    ],
  },
  // Circulatory Disturbances (GEN-04)
  {
    id: 'vid-cir-echo',
    videoId: '1OvhU6jpqMjusKOMcmXpnhfypyH2JO4Se',
    title: 'Feline Left Atrial Thrombus (Hypertrophic Cardiomyopathy)',
    category: 'Circulatory',
    badge: 'GEN-04 Clinical Echo',
    duration: '3:20',
    description:
      'Echocardiographic demonstration of an intracardiac thrombus adhering to the left atrial wall in a cat with HCM, predisposing to aortic saddle thromboembolism.',
    lessonId: 'circulatory-disturbances',
    lessonTitle: 'Circulatory Disturbances',
    isDrive: true,
    driveEmbedUrl: 'https://drive.google.com/file/d/1OvhU6jpqMjusKOMcmXpnhfypyH2JO4Se/preview',
    driveWatchUrl: 'https://drive.google.com/file/d/1OvhU6jpqMjusKOMcmXpnhfypyH2JO4Se/view?usp=sharing',
    keyPoints: [
      'Endothelial stretch and blood stasis in dilated left atrium triggering thrombus formation.',
      'Fragmentation produces saddle thrombus occluding the aortic trifurcation.',
    ],
  },
];

interface VideosViewProps {
  onSelectLesson?: (id: string) => void;
  onNavigate?: (view: ScreenView) => void;
}

export const VideosView: React.FC<VideosViewProps> = ({
  onSelectLesson,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: `All Videos (${DICM_VIDEOS.length})`, value: 'All' },
    { label: 'Metabolism (12)', value: 'Metabolism' },
    { label: 'Cell Injury (2)', value: 'Cell Injury' },
    { label: 'Inflammation (4)', value: 'Inflammation' },
    { label: 'Circulatory (1)', value: 'Circulatory' },
  ];

  const filteredVideos =
    selectedCategory === 'All'
      ? DICM_VIDEOS
      : DICM_VIDEOS.filter((v) => v.category === selectedCategory);

  return (
    <div id="videos-view-container" className="pb-24 pt-3 px-4 max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider font-sans flex-wrap">
          <span>Supplementary resources</span>
          <span>•</span>
          <span className="bg-emerald-50 text-emerald-900 border border-emerald-300/80 px-2 py-0.5 rounded-full text-[10px] font-semibold normal-case tracking-normal">
            {DICM_VIDEOS.length} Curated Videos Available
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5 font-serif-academic">
          Microlearning Videos
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Short video walkthroughs, clinical echocardiograms, board exam highlights, and pathology demonstrations embedded across General Pathology modules (GEN-01 through GEN-06).
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.value
                ? 'bg-teal-800 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Video Cards Grid / List */}
      <div className="space-y-4">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            id={video.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col"
          >
            {/* 16:9 Responsive Embed */}
            <div className="relative w-full pb-[56.25%] bg-slate-950">
              <iframe
                src={
                  video.isDrive && video.driveEmbedUrl
                    ? video.driveEmbedUrl
                    : `https://www.youtube.com/embed/${video.videoId}`
                }
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>

            {/* Video Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full font-mono-code">
                  {video.badge}
                </span>
                <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {video.duration}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                {video.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {video.description}
              </p>

              {video.keyPoints && video.keyPoints.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-sans">
                    Key Pathology Concepts:
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                    {video.keyPoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lesson Direct Link Button */}
              {onSelectLesson && (
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 truncate max-w-[220px]">
                    Lesson: <strong className="text-slate-700">{video.lessonTitle}</strong>
                  </span>
                  <button
                    onClick={() => onSelectLesson(video.lessonId)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <span>Open Lesson</span>
                    <ChevronRight className="w-3.5 h-3.5 text-teal-700" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Supplementary Resources Notice for Remaining Modules */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-300/80 px-2 py-0.5 rounded-full font-mono-code">
          Supplementary Resources Status
        </span>
        <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
          Pathology Image Collection and Microlearning Videos remain supplementary resources. Additional video demonstrations for other General Pathology and Infectious Diseases sections will be imported as those modules undergo migration.
        </p>
        {onNavigate && (
          <div className="pt-2">
            <button
              onClick={() => onNavigate({ type: 'general_pathology' })}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-teal-800" />
              <span>View General Pathology Curriculum</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
