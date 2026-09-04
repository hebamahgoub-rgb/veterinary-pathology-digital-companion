import os
import re
import json

def clean_html_string(html):
    # Escape backticks and ${ for template literals
    # First escape backslashes, then backticks, then ${
    html = html.replace('\\', '\\\\')
    html = html.replace('`', '\\`')
    html = html.replace('${', '\\${')
    return html

def extract_and_clean_container(filepath):
    content = open(filepath, encoding='utf-8').read()
    
    # In 4.3.2 replace base64 images with local image paths
    if '4.3.2' in filepath:
        counter = [1]
        def replace_b64(m):
            idx = counter[0]
            counter[0] += 1
            return f'src="/images/poultry_viral_{idx}.jpeg"'
        content = re.sub(r'src=[\"\']data:image\/[a-zA-Z0-9\+\-]+;base64,[^\"]+[\"\']', replace_b64, content)

    # Extract inside container
    m = re.search(r'<div class=[\"\']container[\"\']>(.*?)<\/div>\s*<\/body>', content, re.DOTALL)
    if m:
        html = m.group(1).strip()
    else:
        m2 = re.search(r'<body>(.*?)<\/body>', content, re.DOTALL)
        html = m2.group(1).strip() if m2 else content.strip()

    # Add referrerpolicy and loading to img tags
    html = re.sub(r'<img\b(?![^>]*\breferrerpolicy=)', '<img referrerpolicy="no-referrer"', html)
    html = re.sub(r'<img\b(?![^>]*\bloading=)', '<img loading="lazy"', html)

    return html

lessons = [
    {
        'file': '4.1.1- Gram-Positive Bacterial Diseases.txt',
        'out': 'src/components/infectious/bacterial/GramPositivePage.tsx',
        'component': 'GramPositivePage',
        'lessonId': 'gram-positive-bacterial-diseases',
        'title': 'Gram-Positive Bacterial Diseases',
        'subtitle': 'Pyogenic cocci, coryneform bacilli, and spore-forming anaerobes',
        'sectionCode': 'INF-01',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
        'prev': None,
        'next': {'id': 'gram-negative-bacterial-diseases', 'title': 'Gram-Negative Bacterial Diseases'}
    },
    {
        'file': '4.1.2- Gram-Negative Bacterial Diseases.txt',
        'out': 'src/components/infectious/bacterial/GramNegativePage.tsx',
        'component': 'GramNegativePage',
        'lessonId': 'gram-negative-bacterial-diseases',
        'title': 'Gram-Negative Bacterial Diseases',
        'subtitle': 'Enteric, respiratory, and septicaemic pathogens with endotoxin-mediated injury',
        'sectionCode': 'INF-02',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
        'prev': {'id': 'gram-positive-bacterial-diseases', 'title': 'Gram-Positive Bacterial Diseases'},
        'next': {'id': 'mycobacterial-diseases', 'title': 'Mycobacterial Diseases'}
    },
    {
        'file': '4.1.3- Mycobacterial Diseases.txt',
        'out': 'src/components/infectious/bacterial/MycobacterialPage.tsx',
        'component': 'MycobacterialPage',
        'lessonId': 'mycobacterial-diseases',
        'title': 'Mycobacterial Diseases',
        'subtitle': 'Acid-fast bacilli, granulomatous inflammation, bovine tuberculosis, and paratuberculosis',
        'sectionCode': 'INF-03',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
        'prev': {'id': 'gram-negative-bacterial-diseases', 'title': 'Gram-Negative Bacterial Diseases'},
        'next': {'id': 'spirochetal-atypical-bacterial-diseases', 'title': 'Spirochetal & Atypical Bacterial Diseases'}
    },
    {
        'file': '4.1.4- Spirochetal and Atypical Bacterial Diseases + illustrations.txt',
        'out': 'src/components/infectious/bacterial/SpirochetalAtypicalPage.tsx',
        'component': 'SpirochetalAtypicalPage',
        'lessonId': 'spirochetal-atypical-bacterial-diseases',
        'title': 'Spirochetal & Atypical Bacterial Diseases',
        'subtitle': 'Spirochetes, mycoplasmas, chlamydiae, and rickettsial agents',
        'sectionCode': 'INF-04',
        'category': 'Bacterial Diseases',
        'topicId': 'bacterial-diseases',
        'prev': {'id': 'mycobacterial-diseases', 'title': 'Mycobacterial Diseases'},
        'next': {'id': 'superficial-cutaneous-mycoses', 'title': 'Superficial & Cutaneous Mycoses'}
    },
    {
        'file': '4.2.1_Superficial_and_Cutaneous_Mycoses_updated_with_4_illustrations.txt',
        'out': 'src/components/infectious/mycotic/SuperficialCutaneousPage.tsx',
        'component': 'SuperficialCutaneousPage',
        'lessonId': 'superficial-cutaneous-mycoses',
        'title': 'Superficial & Cutaneous Mycoses',
        'subtitle': 'Dermatophytosis, Malassezia dermatitis, and keratinized tissue invasion',
        'sectionCode': 'MYC-01',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
        'prev': None,
        'next': {'id': 'subcutaneous-mycoses', 'title': 'Subcutaneous Mycoses'}
    },
    {
        'file': '4.2.2_Subcutaneous_Mycoses_updated_with_4_illustrations.txt',
        'out': 'src/components/infectious/mycotic/SubcutaneousPage.tsx',
        'component': 'SubcutaneousPage',
        'lessonId': 'subcutaneous-mycoses',
        'title': 'Subcutaneous Mycoses',
        'subtitle': 'Sporotrichosis, mycetomas, and chromoblastomycosis following traumatic inoculation',
        'sectionCode': 'MYC-02',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
        'prev': {'id': 'superficial-cutaneous-mycoses', 'title': 'Superficial & Cutaneous Mycoses'},
        'next': {'id': 'systemic-deep-mycoses', 'title': 'Systemic & Deep Mycoses'}
    },
    {
        'file': '4.2.3_Systemic_and_Deep_Mycoses_updated_with_4_illustrations.txt',
        'out': 'src/components/infectious/mycotic/SystemicDeepPage.tsx',
        'component': 'SystemicDeepPage',
        'lessonId': 'systemic-deep-mycoses',
        'title': 'Systemic & Deep Mycoses',
        'subtitle': 'Blastomycosis, histoplasmosis, coccidioidomycosis, and cryptococcosis',
        'sectionCode': 'MYC-03',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
        'prev': {'id': 'subcutaneous-mycoses', 'title': 'Subcutaneous Mycoses'},
        'next': {'id': 'opportunistic-mycoses', 'title': 'Opportunistic Mycoses'}
    },
    {
        'file': '4.2.4_Opportunistic_Mycoses_updated_with_4_illustrations.txt',
        'out': 'src/components/infectious/mycotic/OpportunisticPage.tsx',
        'component': 'OpportunisticPage',
        'lessonId': 'opportunistic-mycoses',
        'title': 'Opportunistic Mycoses',
        'subtitle': 'Aspergillosis, candidiasis, and zygomycosis/mucormycosis in compromised hosts',
        'sectionCode': 'MYC-04',
        'category': 'Mycotic Diseases',
        'topicId': 'mycotic-diseases',
        'prev': {'id': 'systemic-deep-mycoses', 'title': 'Systemic & Deep Mycoses'},
        'next': {'id': 'bacterial-diseases-poultry', 'title': 'Bacterial Diseases of Poultry'}
    },
    {
        'file': '4.3.1_Bacterial_Diseases_of_Poultry_full_width_illustrations.txt',
        'out': 'src/components/infectious/poultry/PoultryBacterialPage.tsx',
        'component': 'PoultryBacterialPage',
        'lessonId': 'bacterial-diseases-poultry',
        'title': 'Bacterial Diseases of Poultry',
        'subtitle': 'Colibacillosis, fowl cholera, salmonellosis, and infectious coryza',
        'sectionCode': 'PLT-01',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'prev': None,
        'next': {'id': 'viral-diseases-poultry', 'title': 'Viral Diseases of Poultry'}
    },
    {
        'file': '4.3.2- Viral Diseases of Poultry.txt',
        'out': 'src/components/infectious/poultry/PoultryViralPage.tsx',
        'component': 'PoultryViralPage',
        'lessonId': 'viral-diseases-poultry',
        'title': 'Viral Diseases of Poultry',
        'subtitle': "Marek's disease, avian influenza, Newcastle disease, IBV, and ILTV",
        'sectionCode': 'PLT-02',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'prev': {'id': 'bacterial-diseases-poultry', 'title': 'Bacterial Diseases of Poultry'},
        'next': {'id': 'mycotic-diseases-poultry', 'title': 'Mycotic Diseases & Mycotoxicoses of Poultry'}
    },
    {
        'file': '4.3.3_Mycotic_Diseases_and_Mycotoxicoses_with_full_width_illustrations.txt',
        'out': 'src/components/infectious/poultry/PoultryMycoticPage.tsx',
        'component': 'PoultryMycoticPage',
        'lessonId': 'mycotic-diseases-poultry',
        'title': 'Mycotic Diseases & Mycotoxicoses of Poultry',
        'subtitle': 'Aspergillosis, candidiasis, aflatoxicosis, and ochratoxicosis',
        'sectionCode': 'PLT-03',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'prev': {'id': 'viral-diseases-poultry', 'title': 'Viral Diseases of Poultry'},
        'next': {'id': 'parasitic-diseases-poultry', 'title': 'Parasitic Diseases of Poultry'}
    },
    {
        'file': '4.3.4_Parasitic_Diseases_of_Poultry_with_full_width_illustrations.txt',
        'out': 'src/components/infectious/poultry/PoultryParasiticPage.tsx',
        'component': 'PoultryParasiticPage',
        'lessonId': 'parasitic-diseases-poultry',
        'title': 'Parasitic Diseases of Poultry',
        'subtitle': 'Coccidiosis, histomoniasis, nematodes, and ectoparasites',
        'sectionCode': 'PLT-04',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'prev': {'id': 'mycotic-diseases-poultry', 'title': 'Mycotic Diseases & Mycotoxicoses of Poultry'},
        'next': {'id': 'nutritional-metabolic-poultry', 'title': 'Nutritional, Metabolic and Management-Related Disorders'}
    },
    {
        'file': '4.3.5_Nutritional_Metabolic_Management_Disorders_with_full_width_illustrations.txt',
        'out': 'src/components/infectious/poultry/PoultryNutritionalMetabolicPage.tsx',
        'component': 'PoultryNutritionalMetabolicPage',
        'lessonId': 'nutritional-metabolic-poultry',
        'title': 'Nutritional, Metabolic and Management-Related Disorders',
        'subtitle': 'Ascites syndrome, sudden death, rickets, and tibial dyschondroplasia',
        'sectionCode': 'PLT-05',
        'category': 'Poultry Diseases',
        'topicId': 'poultry-pathology',
        'prev': {'id': 'parasitic-diseases-poultry', 'title': 'Parasitic Diseases of Poultry'},
        'next': None
    },
]

for l in lessons:
    html = extract_and_clean_container(l['file'])
    clean_html = clean_html_string(html)
    
    prev_str = json.dumps(l['prev']) if l['prev'] else 'undefined'
    next_str = json.dumps(l['next']) if l['next'] else 'undefined'
    
    code = f'''import React from 'react';
import {{ ScreenView }} from '../../../types';
import {{ InfectiousLessonPage }} from '../InfectiousLessonPage';

interface {l['component']}Props {{
  onNavigate: (view: ScreenView) => void;
  onSelectLesson?: (lessonId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (lesson: {{ id: string; title: string; category: string }}) => void;
}}

const HTML_CONTENT = `{clean_html}`;

export const {l['component']}: React.FC<{l['component']}Props> = ({{
  onNavigate,
  onSelectLesson,
  isSaved,
  onToggleSave,
}}) => {{
  return (
    <InfectiousLessonPage
      title="{l['title']}"
      subtitle="{l['subtitle']}"
      sectionCode="{l['sectionCode']}"
      category="{l['category']}"
      topicId="{l['topicId']}"
      lessonId="{l['lessonId']}"
      htmlContent={{HTML_CONTENT}}
      onNavigate={{onNavigate}}
      onSelectLesson={{onSelectLesson}}
      isSaved={{isSaved}}
      onToggleSave={{onToggleSave}}
      previousLesson={{{prev_str}}}
      nextLesson={{{next_str}}}
    />
  );
}};
'''
    with open(l['out'], 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Generated {l['out']}")

print("All 13 lesson components generated successfully.")
