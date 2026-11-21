export type CompanionSectionId = 'comparative-atlas' | 'postgraduate-pathology' | 'magazine';

interface ReadingPage {
  id: string;
  parent?: string;
  title: string;
  summary: string;
  path?: string;
  blocks?: { title: string; text: string }[];
  article?: {
    paragraphs: string[];
    references?: { label: string; url: string }[];
  };
}

interface CompanionSection {
  id: CompanionSectionId;
  title: string;
  summary: string;
  path: string;
  pages: ReadingPage[];
}

export const COMPANION_WEBSITE = 'https://sites.google.com/view/veterinary-pathology-companion';

export const COMPANION_SECTIONS: Record<CompanionSectionId, CompanionSection> = {
  'comparative-atlas': {
    id: 'comparative-atlas',
    title: 'Comparative Atlas',
    summary: 'Compare normal anatomy and histology with selected lesions, starting with the canine head and neck.',
    path: '/comparative-atlas',
    pages: [
      {
        id: 'head-and-neck',
        title: 'Head & Neck',
        summary: 'Locate structures by region and use normal landmarks to orient gross and microscopic examination.',
        path: '/comparative-atlas/head-and-neck',
        blocks: [
          { title: 'Start with the salivary glands', text: 'Use the zygomatic arch, masseter, angle of the jaw, and floor of the mouth as landmarks. Follow each gland to its duct opening before comparing normal tissues with a saliva-filled lesion.' },
          { title: 'Other regions planned', text: 'Thorax, abdomen, pelvis and perineum, vertebral column and back, forelimbs, hindlimbs, and tail.' },
        ],
      },
      {
        id: 'salivary-glands',
        parent: 'head-and-neck',
        title: 'Salivary Glands and Ducts',
        summary: 'Canine gross orientation, normal histology, and the distinction between salivary extravasation and ductal retention.',
        path: '/comparative-atlas/head-and-neck/salivary-glands-and-ducts',
        blocks: [
          { title: 'Gross orientation', text: 'Find the parotid at the base of the ear and follow its duct across the masseter to the oral vestibule near the upper fourth premolar. The zygomatic gland lies deep to the zygomatic arch. The mandibular and monostomatic sublingual glands share a capsule near the angle of the jaw. The mandibular lymph nodes lie outside that capsule.' },
          { title: 'Floor of the mouth', text: 'The mandibular and major sublingual ducts approach the sublingual caruncle. Multiple short ducts drain the polystomatic sublingual portion along the sublingual fold.' },
          { title: 'Normal histology', text: 'Identify secretory end pieces and follow their drainage through ducts. Examine the lining and position within the lobule when distinguishing duct profiles from secretory units.' },
          { title: 'Mucocele and retention cyst', text: 'In a mucocele, extravasated saliva is surrounded by reactive tissue without a true epithelial lining. A retention cyst represents a dilated duct and retains an epithelial lining where preserved. Sample the wall to make the distinction.' },
        ],
      },
    ],
  },
  'postgraduate-pathology': {
    id: 'postgraduate-pathology',
    title: 'Postgraduate Pathology',
    summary: 'Connect disease mechanisms with lesion patterns, progression, and diagnostic reasoning.',
    path: '/postgraduate-pathology',
    pages: [
      {
        id: 'mammary-pathology',
        title: 'Mammary Pathology',
        summary: 'Start with mastitis and follow inflammation from the mammary lumen to changes in the surrounding tissue.',
        path: '/postgraduate-pathology/pg-36-mammary-pathology',
      },
      {
        id: 'mastitis',
        parent: 'mammary-pathology',
        title: 'Mastitis Pathogenesis, Morphologic Patterns & Tissue Remodeling',
        summary: 'Relate the distribution and composition of lesions to disease stage and likely outcomes.',
        path: '/postgraduate-pathology/pg-36-mammary-pathology/mastitis-pathogenesis-patterns',
        blocks: [
          { title: 'Initiation and early lesions', text: 'When infection ascends through the teat canal, the response can involve ducts and alveoli. Look for luminal neutrophils and changes in the secretory epithelium. Describe the distribution and the extent of injury before assigning a lesion pattern.' },
          { title: 'Morphologic patterns', text: 'Assess which features dominate, including suppuration, fibrin, hemorrhage, and necrosis. Record whether the response is centered on lumina, extends into the interstitium, or involves both compartments.' },
          { title: 'Remodeling and interpretation', text: 'Persistent inflammation may accompany loss of secretory tissue, fibrosis, and distortion of lobular architecture. Interpret histology with sampling location, chronicity, and microbiology when available.' },
        ],
      },
    ],
  },
  magazine: {
    id: 'magazine',
    title: 'VetPath Magazine',
    summary: 'Veterinary science, animal health, economics, and public policy in Egypt and internationally.',
    path: '/magazine',
    pages: [
      {
        id: 'opening-collection',
        title: 'When Animal Disease Becomes a Public Issue',
        summary: 'November 2026 opening collection on foot-and-mouth disease. The magazine lists the three articles below as in preparation.',
      },
      {
        id: 'economics-and-trade',
        title: 'Economics & Trade',
        summary: 'Livestock and poultry markets, disease costs, food prices, and trade measures.',
        blocks: [{ title: 'Opening collection · In preparation', text: 'FMD SAT1 and vaccine policy in Egypt. The planned analysis looks at livestock vaccination, smallholder herds, and domestic red-meat supply.' }],
      },
      {
        id: 'policy-and-public-affairs',
        title: 'Policy & Public Affairs',
        summary: 'Veterinary legislation, government measures, public funding, and animal welfare policy.',
        blocks: [{ title: 'Opening collection · In preparation', text: 'The trade consequences of losing foot-and-mouth disease-free status in Europe. The planned explainer looks at export restrictions and recovery of official status.' }],
      },
      {
        id: 'research-and-pathology',
        title: 'Research & Pathology',
        summary: 'Studies, illustrated pathology features, and explanations of scientific methods.',
        blocks: [{ title: 'Opening collection · In preparation', text: 'A planned pathology explainer on foot-and-mouth disease lesions, including epithelial vesicles and calf myocarditis, alongside the significance of serotypes for diagnosis and vaccination.' }],
      },
      {
        id: 'public-health',
        title: 'Public Health & One Health',
        summary: 'Upcoming coverage of zoonoses, food safety, antimicrobial resistance, and environmental health.',
      },
      {
        id: 'practice-and-education',
        title: 'Veterinary Practice & Education',
        summary: 'Upcoming coverage of diagnostic services, the veterinary workforce, curricula, and continuing education.',
      },
      {
        id: 'about',
        title: 'About VetPath Magazine',
        summary: 'An English-language publication within the Veterinary Pathology Digital Companion.',
        blocks: [{ title: 'Editorial information', text: 'The magazine distinguishes News, Explainer, Analysis, and Opinion. Its editorial information covers sourcing, attribution for original-language material, and corrections.' }],
      },
    ],
  },
};
