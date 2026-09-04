#!/usr/bin/env python3
import sys
import os
import json

sys.path.insert(0, os.path.dirname(__file__))
import generate_all as g

metadata = [
    {
        'file': 'src/components/infectious/bacterial/GramPositivePage.tsx',
        'component': 'GramPositivePage',
        'props': 'GramPositivePageProps',
        'proc': g.process_gram_positive,
        'title': 'Gram-Positive Bacterial Diseases',
        'subtitle': 'Pyogenic cocci, coryneform bacilli, and spore-forming anaerobes',
        'sectionCode': 'INF-01',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
        'lessonId': 'gram-positive-bacterial-diseases',
        'previousLesson': 'undefined',
        'nextLesson': '{"id": "gram-negative-bacterial-diseases", "title": "Gram-Negative Bacterial Diseases"}',
    },
    {
        'file': 'src/components/infectious/bacterial/GramNegativePage.tsx',
        'component': 'GramNegativePage',
        'props': 'GramNegativePageProps',
        'proc': g.process_gram_negative,
        'title': 'Gram-Negative Bacterial Diseases',
        'subtitle': 'Endotoxins, enterobacteriaceae, pasteurellosis, and vascular injury',
        'sectionCode': 'INF-02',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
        'lessonId': 'gram-negative-bacterial-diseases',
        'previousLesson': '{"id": "gram-positive-bacterial-diseases", "title": "Gram-Positive Bacterial Diseases"}',
        'nextLesson': '{"id": "mycobacterial-diseases", "title": "Mycobacterial Diseases"}',
    },
    {
        'file': 'src/components/infectious/bacterial/MycobacterialPage.tsx',
        'component': 'MycobacterialPage',
        'props': 'MycobacterialPageProps',
        'proc': g.process_mycobacterial,
        'title': 'Mycobacterial Diseases',
        'subtitle': 'Acid-fast bacilli, granulomatous inflammation, bovine tuberculosis, and paratuberculosis',
        'sectionCode': 'INF-03',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
        'lessonId': 'mycobacterial-diseases',
        'previousLesson': '{"id": "gram-negative-bacterial-diseases", "title": "Gram-Negative Bacterial Diseases"}',
        'nextLesson': '{"id": "spirochetal-atypical-bacterial-diseases", "title": "Spirochetal & Atypical Bacterial Diseases"}',
    },
    {
        'file': 'src/components/infectious/bacterial/SpirochetalAtypicalPage.tsx',
        'component': 'SpirochetalAtypicalPage',
        'props': 'SpirochetalAtypicalPageProps',
        'proc': g.process_spirochetal,
        'title': 'Spirochetal & Atypical Bacterial Diseases',
        'subtitle': 'Spirochetes, mycoplasmas, chlamydiae, and rickettsial agents',
        'sectionCode': 'INF-04',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
        'lessonId': 'spirochetal-atypical-bacterial-diseases',
        'previousLesson': '{"id": "mycobacterial-diseases", "title": "Mycobacterial Diseases"}',
        'nextLesson': '{"id": "superficial-cutaneous-mycoses", "title": "Superficial & Cutaneous Mycoses"}',
    },
    {
        'file': 'src/components/infectious/mycotic/SuperficialCutaneousPage.tsx',
        'component': 'SuperficialCutaneousPage',
        'props': 'SuperficialCutaneousPageProps',
        'proc': g.process_superficial,
        'title': 'Superficial & Cutaneous Mycoses',
        'subtitle': 'Dermatophytosis, Malassezia dermatitis, and keratinized tissue invasion',
        'sectionCode': 'MYC-01',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
        'lessonId': 'superficial-cutaneous-mycoses',
        'previousLesson': 'undefined',
        'nextLesson': '{"id": "subcutaneous-mycoses", "title": "Subcutaneous Mycoses"}',
    },
    {
        'file': 'src/components/infectious/mycotic/SubcutaneousPage.tsx',
        'component': 'SubcutaneousPage',
        'props': 'SubcutaneousPageProps',
        'proc': g.process_subcutaneous,
        'title': 'Subcutaneous Mycoses',
        'subtitle': 'Sporotrichosis, mycetomas, and chromoblastomycosis following traumatic inoculation',
        'sectionCode': 'MYC-02',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
        'lessonId': 'subcutaneous-mycoses',
        'previousLesson': '{"id": "superficial-cutaneous-mycoses", "title": "Superficial & Cutaneous Mycoses"}',
        'nextLesson': '{"id": "systemic-deep-mycoses", "title": "Systemic & Deep Mycoses"}',
    },
    {
        'file': 'src/components/infectious/mycotic/SystemicDeepPage.tsx',
        'component': 'SystemicDeepPage',
        'props': 'SystemicDeepPageProps',
        'proc': g.process_systemic,
        'title': 'Systemic & Deep Mycoses',
        'subtitle': 'Blastomycosis, histoplasmosis, coccidioidomycosis, and cryptococcosis',
        'sectionCode': 'MYC-03',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
        'lessonId': 'systemic-deep-mycoses',
        'previousLesson': '{"id": "subcutaneous-mycoses", "title": "Subcutaneous Mycoses"}',
        'nextLesson': '{"id": "opportunistic-mycoses", "title": "Opportunistic Mycoses"}',
    },
    {
        'file': 'src/components/infectious/mycotic/OpportunisticPage.tsx',
        'component': 'OpportunisticPage',
        'props': 'OpportunisticPageProps',
        'proc': g.process_opportunistic,
        'title': 'Opportunistic Mycoses',
        'subtitle': 'Aspergillosis, candidiasis, and zygomycosis/mucormycosis in compromised hosts',
        'sectionCode': 'MYC-04',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
        'lessonId': 'opportunistic-mycoses',
        'previousLesson': '{"id": "systemic-deep-mycoses", "title": "Systemic & Deep Mycoses"}',
        'nextLesson': '{"id": "bacterial-diseases-poultry", "title": "Bacterial Diseases of Poultry"}',
    },
    {
        'file': 'src/components/infectious/poultry/PoultryBacterialPage.tsx',
        'component': 'PoultryBacterialPage',
        'props': 'PoultryBacterialPageProps',
        'proc': g.process_poultry_bacterial,
        'title': 'Bacterial Diseases of Poultry',
        'subtitle': 'Colibacillosis, fowl cholera, salmonellosis, and infectious coryza',
        'sectionCode': 'PLT-01',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'lessonId': 'bacterial-diseases-poultry',
        'previousLesson': 'undefined',
        'nextLesson': '{"id": "viral-diseases-poultry", "title": "Viral Diseases of Poultry"}',
    },
    {
        'file': 'src/components/infectious/poultry/PoultryViralPage.tsx',
        'component': 'PoultryViralPage',
        'props': 'PoultryViralPageProps',
        'proc': g.process_poultry_viral,
        'title': 'Viral Diseases of Poultry',
        'subtitle': 'Marek\'s disease, avian influenza, Newcastle disease, IBV, and ILTV',
        'sectionCode': 'PLT-02',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'lessonId': 'viral-diseases-poultry',
        'previousLesson': '{"id": "bacterial-diseases-poultry", "title": "Bacterial Diseases of Poultry"}',
        'nextLesson': '{"id": "mycotic-diseases-poultry", "title": "Mycotic Diseases & Mycotoxicoses of Poultry"}',
    },
    {
        'file': 'src/components/infectious/poultry/PoultryMycoticPage.tsx',
        'component': 'PoultryMycoticPage',
        'props': 'PoultryMycoticPageProps',
        'proc': g.process_poultry_mycotic,
        'title': 'Mycotic Diseases & Mycotoxicoses of Poultry',
        'subtitle': 'Aspergillosis, candidiasis, aflatoxicosis, and ochratoxicosis',
        'sectionCode': 'PLT-03',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'lessonId': 'mycotic-diseases-poultry',
        'previousLesson': '{"id": "viral-diseases-poultry", "title": "Viral Diseases of Poultry"}',
        'nextLesson': '{"id": "parasitic-diseases-poultry", "title": "Parasitic Diseases of Poultry"}',
    },
    {
        'file': 'src/components/infectious/poultry/PoultryParasiticPage.tsx',
        'component': 'PoultryParasiticPage',
        'props': 'PoultryParasiticPageProps',
        'proc': g.process_poultry_parasitic,
        'title': 'Parasitic Diseases of Poultry',
        'subtitle': 'Coccidiosis, histomoniasis, nematodes, and ectoparasites',
        'sectionCode': 'PLT-04',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'lessonId': 'parasitic-diseases-poultry',
        'previousLesson': '{"id": "mycotic-diseases-poultry", "title": "Mycotic Diseases & Mycotoxicoses of Poultry"}',
        'nextLesson': '{"id": "nutritional-metabolic-poultry", "title": "Nutritional, Metabolic and Management-Related Disorders"}',
    },
    {
        'file': 'src/components/infectious/poultry/PoultryNutritionalMetabolicPage.tsx',
        'component': 'PoultryNutritionalMetabolicPage',
        'props': 'PoultryNutritionalMetabolicPageProps',
        'proc': g.process_poultry_nutritional,
        'title': 'Nutritional, Metabolic and Management-Related Disorders',
        'subtitle': 'Ascites syndrome, sudden death, rickets, and tibial dyschondroplasia',
        'sectionCode': 'PLT-05',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'lessonId': 'nutritional-metabolic-poultry',
        'previousLesson': '{"id": "parasitic-diseases-poultry", "title": "Parasitic Diseases of Poultry"}',
        'nextLesson': 'undefined',
    },
]

for item in metadata:
    filepath = item['file']
    sections = item['proc']()
    
    sections_code = "export const SECTIONS: InfectiousLessonSection[] = [\n"
    for s in sections:
        title_json = json.dumps(s['title'])
        short_title_json = json.dumps(s['shortTitle'])
        cat_json = json.dumps(s['category'])
        id_str = s['id']
        html_str = s['html']
        
        sections_code += f"""  {{
    id: '{id_str}',
    title: {title_json},
    shortTitle: {short_title_json},
    category: {cat_json},
    html: `{html_str}`,
  }},
"""
    sections_code += "];\n"

    comp_name = item['component']
    props_name = item['props']
    title_str = item['title']
    sub_str = item['subtitle']
    code_str = item['sectionCode']
    cat_str = item['category']
    topic_str = item['topicId']
    lesson_str = item['lessonId']
    prev_str = item['previousLesson']
    next_str = item['nextLesson']

    header_block = (
        "import React from 'react';\n"
        "import { ScreenView } from '../../../types';\n"
        "import { InfectiousLessonPage, InfectiousLessonSection } from '../InfectiousLessonPage';\n\n"
        f"interface {props_name} {{\n"
        "  onNavigate: (view: ScreenView) => void;\n"
        "  onSelectLesson?: (lessonId: string) => void;\n"
        "  isSaved?: boolean;\n"
        "  onToggleSave?: (lesson: { id: string; title: string; category: string }) => void;\n"
        "  initialSectionId?: string;\n"
        "}\n\n"
    )

    comp_block = (
        f"{sections_code}\n"
        f"export const {comp_name}: React.FC<{props_name}> = ({{\n"
        "  onNavigate,\n"
        "  onSelectLesson,\n"
        "  isSaved,\n"
        "  onToggleSave,\n"
        "  initialSectionId,\n"
        "}) => {\n"
        "  return (\n"
        "    <InfectiousLessonPage\n"
        f'      title="{title_str}"\n'
        f'      subtitle="{sub_str}"\n'
        f'      sectionCode="{code_str}"\n'
        f'      category="{cat_str}"\n'
        f'      topicId="{topic_str}"\n'
        f'      lessonId="{lesson_str}"\n'
        "      sections={SECTIONS}\n"
        "      initialSectionId={initialSectionId}\n"
        "      onNavigate={onNavigate}\n"
        "      onSelectLesson={onSelectLesson}\n"
        "      isSaved={isSaved}\n"
        "      onToggleSave={onToggleSave}\n"
        f"      previousLesson={{{prev_str}}}\n"
        f"      nextLesson={{{next_str}}}\n"
        "    />\n"
        "  );\n"
        "};\n"
    )

    full_content = header_block + comp_block
    with open(filepath, 'w') as f:
        f.write(full_content)
    print(f"Successfully wrote {filepath}")

print("All 13 files written successfully!")
