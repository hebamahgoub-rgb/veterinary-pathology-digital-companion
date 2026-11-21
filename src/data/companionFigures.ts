interface CompanionFigure {
  file: string;
  alt: string;
  caption: string;
}

export const COMPANION_FIGURES: Record<string, CompanionFigure[]> = {
  "comparative-atlas": [
    {
      "file": "comparative-atlas-1.svg",
      "alt": "Comparative Atlas, then Head & Neck, then Salivary Glands and Ducts",
      "caption": "Follow the first teaching route from region to anatomical component."
    }
  ],
  "head-and-neck": [
    {
      "file": "head-and-neck-1.svg",
      "alt": "Gross orientation, then Normal histology, then Lesion comparison",
      "caption": "The first lesson progresses from anatomical landmarks to microscopic distinctions."
    }
  ],
  "salivary-glands": [
    {
      "file": "salivary-glands-1.svg",
      "alt": "Two-part anatomical schematic of canine salivary glands and ducts: Panel A (left lateral head view, rostral to the left) shows a lighter dashed internal mandibular bone landmark and an external lower jaw-neck skin contour passing beneath two mandibular lymph nodes that sit outside the dashed shared capsule enclosing the caudodorsal mandibular gland and rostroventral monostomatic sublingual gland, alongside the parotid gland and duct opening opposite upper P4 and the zygomatic gland opening near the last upper molar; Panel B (floor-of-mouth inset) shows five polystomatic sublingual lobules positioned dorsal to and clear of the major sublingual duct, each opening via its own short duct onto the crest of the sublingual fold, while the major sublingual duct and mandibular duct run as distinct parallel trunks to separate openings on the sublingual caruncle beside the lingual frenulum.",
      "caption": "Canine salivary glands in left lateral view and a schematic of the oral floor. The major ducts are shown with separate openings. A shared opening can also occur."
    },
    {
      "file": "salivary-glands-2.svg",
      "alt": "Three-panel histological schematic comparing serous parotid acini in Panel A, mixed mucous tubules with serous demilunes in Panel B, and intralobular striated versus interlobular excretory ducts in Panel C",
      "caption": "Teaching schematic showing serous and mucous secretory units and representative duct profiles."
    },
    {
      "file": "salivary-glands-3.svg",
      "alt": "Two-panel schematic comparison showing Panel A, a salivary mucocele where saliva leaks through a ruptured duct into tissue and is surrounded by granulation tissue and foamy muciphages without epithelium, and Panel B, a true salivary retention cyst where an obstructed duct dilates intraluminally and retains an intact attenuated epithelial lining",
      "caption": "Teaching schematic comparing leaked saliva surrounded by reactive tissue with retained saliva within an epithelial-lined duct."
    }
  ],
  "mammary-pathology": [
    {
      "file": "mammary-pathology-1.svg",
      "alt": "Schematic diagram showing secretory alveolus with epithelium, myoepithelium, and basement membrane, branching duct and cisternal pathway, teat canal barrier, and interlobular stroma with vessels and lymphatics",
      "caption": "Schematic diagram showing the structural relationship among the alveolar secretory unit, interlobular stroma and lymphatics, collecting ducts and cisterns, and the teat or nipple canal barrier."
    },
    {
      "file": "mammary-pathology-2.svg",
      "alt": "Schematic comparison of duct-centered lobular mosaic distribution, diffuse interstitial or vascular distribution, and discrete focal or cavitary mass localization",
      "caption": "Schematic diagram comparing duct-centered lobular mosaic lesions, diffuse interstitial or septal expansion, and discrete focal masses or cavitary nodules within a mammary gland."
    }
  ],
  "mastitis": [
    {
      "file": "mastitis-1.svg",
      "alt": "Routes of entry in mastitis",
      "caption": "Ascending canalicular entry into the ductal and alveolar lumen compared with hematogenous spread from interalveolar capillaries into the stroma."
    },
    {
      "file": "mastitis-2.svg",
      "alt": "Acute suppurative and gangrenous mastitis",
      "caption": "Intraluminal neutrophils and preserved alveolar contours in suppurative mastitis compared with coagulative necrosis, hemorrhage, and vascular thrombosis in gangrenous mastitis."
    },
    {
      "file": "mastitis-3.svg",
      "alt": "Chronic fibrosing mastitis, granulomatous inflammation, and mammary abscess",
      "caption": "Comparison of collagen bands and acinar atrophy, epithelioid and giant-cell nodules, and a pus cavity enclosed by a fibrous wall."
    }
  ]
};
