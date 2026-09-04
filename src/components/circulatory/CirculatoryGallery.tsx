import React, { useState } from 'react';
import { ExternalLink, ZoomIn, X, Info, Video } from 'lucide-react';

interface CirculatoryCase {
  id: string;
  title: string;
  organ: string;
  lesionType: string;
  appearance: string;
  description: string;
  teachingPoint: string;
  imageUrl?: string;
  videoEmbedUrl?: string;
  sourceUrl: string;
  sourceLabel: string;
}

const CIRCULATORY_CASES: CirculatoryCase[] = [
  {
    id: 'cir-case-1',
    title: 'Nutmeg Liver (Chronic Passive Congestion)',
    organ: 'Liver',
    lesionType: 'Congestion',
    appearance: 'Gross specimen, cut surface',
    description:
      'Alternating dark red areas (severe sinusoidal congestion and necrosis around central veins) and yellow-tan areas (fatty change of periportal hepatocytes) produce a characteristic reticulated "nutmeg" pattern secondary to chronic right-sided congestive heart failure.',
    teachingPoint:
      'Nutmeg liver results from retrograde hepatic venous hypertension. Persistent centrilobular hypoxia leads to atrophy and necrosis of centrilobular hepatocytes, while less severely hypoxic periportal hepatocytes undergo reversible fatty degeneration.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1CAh4tU1mybi6I5fYyoRRD2qyT0QbHUJY',
    sourceUrl: 'https://drive.google.com/file/d/1CAh4tU1mybi6I5fYyoRRD2qyT0QbHUJY/view?usp=sharing',
    sourceLabel: 'Nutmeg liver gross',
  },
  {
    id: 'cir-case-2',
    title: 'Pulmonary Edema',
    organ: 'Lung',
    lesionType: 'Edema',
    appearance: 'Histopathology, H&E (low power)',
    description:
      'Alveolar spaces and expanded interlobular septa are filled with pale, homogenous pink (eosinophilic) proteinaceous transudate. Capillaries in alveolar septa are prominently congested.',
    teachingPoint:
      'Cardiogenic pulmonary edema occurs when elevated pulmonary venous pressure exceeds oncotic pressure, forcing transudate into alveolar spaces. Non-cardiogenic edema occurs when toxic or inflammatory endothelial injury allows protein-rich exudate into alveoli.',
    imageUrl: 'https://lh3.googleusercontent.com/d/18G2DsL_MIOE4BSFlva20FN9Wth11SxJr',
    sourceUrl: 'https://drive.google.com/file/d/18G2DsL_MIOE4BSFlva20FN9Wth11SxJr/view?usp=sharing',
    sourceLabel: 'Pulmonary edema histology',
  },
  {
    id: 'cir-case-3',
    title: 'Petechial Hemorrhages ("Turkey-Egg Kidney")',
    organ: 'Kidney',
    lesionType: 'Hemorrhage (Petechiae)',
    appearance: 'Gross specimen (Swine)',
    description:
      'Numerous discrete pinpoint to 2 mm dark red petechial hemorrhages scattered densely across the renal cortical surface, producing the classic "turkey-egg kidney" appearance in classical swine fever (CSF) or African swine fever (ASF).',
    teachingPoint:
      'Viral endotheliotropism (Pestivirus or Asfavirus) causes widespread microvascular endothelial necrosis, thrombocytopenia, and platelet consumption, resulting in profuse petechial and ecchymotic hemorrhages.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1rSRFP30Cj9SSABGqppUFlEIJ5in2c5lQ',
    sourceUrl: 'https://drive.google.com/file/d/1rSRFP30Cj9SSABGqppUFlEIJ5in2c5lQ/view?usp=sharing',
    sourceLabel: 'Petechial hemorrhages kidney',
  },
  {
    id: 'cir-case-4',
    title: 'Left Atrial Thrombus (Feline Aortic Thromboembolism)',
    organ: 'Heart (Left Atrium / Auricle)',
    lesionType: 'Thrombosis',
    appearance: 'Echocardiographic video recording (Cat)',
    description:
      'Echocardiographic demonstration of a large intracardiac thrombus adhering to the wall of a markedly dilated left atrium in a cat with hypertrophic cardiomyopathy (HCM). Portions of such thrombi frequently dislodge into the systemic circulation.',
    teachingPoint:
      'Dilated atrium creates blood stasis (smoke / spontaneous echocontrast), and endocardial stretching exposes procoagulant collagen. Embolization into the terminal aortic bifurcation causes feline aortic thromboembolism (FATE / saddle thrombus).',
    videoEmbedUrl: 'https://drive.google.com/file/d/1OvhU6jpqMjusKOMcmXpnhfypyH2JO4Se/preview',
    sourceUrl: 'https://drive.google.com/file/d/1OvhU6jpqMjusKOMcmXpnhfypyH2JO4Se/view?usp=sharing',
    sourceLabel: 'Left atrial thrombus echocardiogram',
  },
  {
    id: 'cir-case-5',
    title: 'Saddle Pulmonary Thromboembolus',
    organ: 'Lung / Pulmonary Artery',
    lesionType: 'Thromboembolism',
    appearance: 'Gross autopsy specimen',
    description:
      'A large, dark red-gray cylindrical, laminated thromboembolus straddling the bifurcation of the main pulmonary artery trunk, completely occluding arterial outflow to both pulmonary lobes.',
    teachingPoint:
      'Pulmonary thromboembolism (PTE) arises from dislodged venous thrombi (e.g., jugular catheterization, heartworm disease, hyperadrenocorticism, or immune-mediated hemolytic anemia). A saddle embolus produces sudden acute right ventricular failure and asphyxial death.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1OD4QzvtpiFP8tAZy6_jC5poQbAnT8q8Y',
    sourceUrl: 'https://drive.google.com/file/d/1OD4QzvtpiFP8tAZy6_jC5poQbAnT8q8Y/view?usp=sharing',
    sourceLabel: 'Pulmonary thromboembolus',
  },
  {
    id: 'cir-case-6',
    title: 'Pale Renal Cortical Infarction',
    organ: 'Kidney',
    lesionType: 'Infarction (Ischemic Necrosis)',
    appearance: 'Gross specimen, coronal section',
    description:
      'Sharply demarcated, wedge-shaped pale white-tan area of coagulative necrosis in the renal cortex with its base against the capsule and apex pointing toward the medulla, surrounded by a hyperemic red border.',
    teachingPoint:
      'Kidneys possess functional end-arterial circulations without collateral anastomoses. Occlusion of an interlobar or arcuate artery by a thromboembolus produces ischemic coagulative necrosis of tubular and glomerular architecture.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1sEh_JT7c7RQddmwlhMQNbSVwIfImHNQY',
    sourceUrl: 'https://drive.google.com/file/d/1sEh_JT7c7RQddmwlhMQNbSVwIfImHNQY/view?usp=sharing',
    sourceLabel: 'Renal cortical infarct',
  },
  {
    id: 'cir-case-7',
    title: 'Diffuse Alveolar Damage ("Shock Lung" / ARDS)',
    organ: 'Lung',
    lesionType: 'Shock / Acute Respiratory Distress',
    appearance: 'Histopathology, H&E (medium power)',
    description:
      'Microscopic section showing prominent, bright pink, dense, glassy hyaline membranes lining dilated alveolar ducts and alveoli, accompanied by alveolar wall microvascular congestion and interstitial edema.',
    teachingPoint:
      'Systemic shock and sepsis trigger widespread alveolar-capillary endothelial damage and Type I pneumocyte necrosis. High-molecular-weight plasma proteins and necrotic cellular debris precipitate into intra-alveolar hyaline membranes.',
    imageUrl: 'https://lh3.googleusercontent.com/d/12oaQh6dy4VAQVty2PmEB3-IPb8mS9YO5',
    sourceUrl: 'https://drive.google.com/file/d/12oaQh6dy4VAQVty2PmEB3-IPb8mS9YO5/view?usp=sharing',
    sourceLabel: 'Shock lung hyaline membranes',
  },
];

export const CirculatoryGallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CirculatoryCase | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic">
          Circulatory Pathology Specimen Atlas
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Seven high-yield veterinary pathology cases illustrating active and passive hemodynamic disturbances, Starling forces failure, Virchow&apos;s triad in action, ischemic infarcts, and shock lesions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {CIRCULATORY_CASES.map((c) => (
          <article
            key={c.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {c.videoEmbedUrl ? (
                <div className="relative aspect-video bg-slate-950 overflow-hidden">
                  <iframe
                    src={c.videoEmbedUrl}
                    title={c.title}
                    loading="lazy"
                    allow="autoplay"
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <div
                  onClick={() => setSelectedCase(c)}
                  className="relative aspect-video sm:h-52 bg-slate-100 overflow-hidden cursor-pointer group"
                >
                  <img
                    src={c.imageUrl}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                    <ZoomIn className="w-4 h-4" />
                    <span>Enlarge Specimen</span>
                  </div>
                </div>
              )}

              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full font-mono-code">
                    {c.lesionType}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {c.appearance}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-serif-academic leading-snug">
                  {c.title}
                </h4>

                <p className="text-xs text-slate-500 font-medium font-sans">
                  <strong>Organ:</strong> {c.organ}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {c.description}
                </p>

                <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-200/80 text-xs text-indigo-950 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-indigo-900">
                    <Info className="w-3.5 h-3.5" /> Teaching Point
                  </span>
                  <p className="leading-relaxed font-sans">{c.teachingPoint}</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 pt-0">
              <a
                href={c.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-900 transition-colors"
              >
                <span>Full resolution reference: {c.sourceLabel}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-serif-academic">
                  {selectedCase.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {selectedCase.organ} · {selectedCase.lesionType}
                </p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-950 flex items-center justify-center">
              <img
                src={selectedCase.imageUrl}
                alt={selectedCase.title}
                className="max-h-[60vh] object-contain rounded-lg"
              />
            </div>

            <div className="p-5 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {selectedCase.description}
              </p>
              <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs sm:text-sm text-indigo-950">
                <strong>Teaching Point: </strong>
                {selectedCase.teachingPoint}
              </div>
              <div className="pt-2">
                <a
                  href={selectedCase.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-900 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>Open Drive Source ({selectedCase.sourceLabel})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
