#!/usr/bin/env python3
import re
import os

def clean_html(html):
    # Remove breadcrumb navigation
    html = re.sub(r'<!-- BREADCRUMB NAVIGATION -->\s*<nav class=\"breadcrumb\".*?</nav>', '', html, flags=re.DOTALL)
    html = re.sub(r'<nav class=\"breadcrumb\".*?</nav>', '', html, flags=re.DOTALL)
    # Remove site footer
    html = re.sub(r'<!-- 5\. FOOTER & NAVIGATION -->\s*<footer class=\"site-footer\".*?</footer>', '', html, flags=re.DOTALL)
    html = re.sub(r'<footer class=\"site-footer\".*?</footer>', '', html, flags=re.DOTALL)
    return html.strip()

def extract_hero(html):
    hero_start = html.find('<header class="hero">')
    first_art = html.find('<article')
    if hero_start == -1 or first_art == -1:
        raise ValueError("Could not locate hero or first article")
    hero_part = html[hero_start:first_art].strip()
    # clean trailing unclosed section-block or pathogens-heading
    hero_part = re.sub(r'<section class=\"section-block\"[^>]*>\s*<h2[^>]*>.*?</h2>\s*$', '', hero_part, flags=re.DOTALL)
    hero_part = re.sub(r'<section class=\"section-block\"[^>]*>\s*$', '', hero_part)
    return hero_part.strip()

def parse_with_trailing_figures(html, article_ids):
    units = {}
    for i, aid in enumerate(article_ids):
        start = html.find(f'id="{aid}"')
        art_start = html.rfind('<article', 0, start)
        if i + 1 < len(article_ids):
            next_aid = article_ids[i+1]
            next_start = html.find(f'id="{next_aid}"')
            next_art_start = html.rfind('<article', 0, next_start)
            units[aid] = html[art_start:next_art_start].strip()
        else:
            diag_pos = html.find('<aside class="diagnostic-panel"')
            if diag_pos != -1:
                units[aid] = html[art_start:diag_pos].strip()
                units[aid] = re.sub(r'</section>\s*$', '', units[aid]).strip()
            else:
                units[aid] = html[art_start:].strip()
    return units

def process_gram_positive():
    with open('src/components/infectious/bacterial/GramPositivePage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)
    diag_m = re.search(r'(<aside class=\"diagnostic-panel\".*?</aside>)', html, re.DOTALL)
    diag_part = diag_m.group(1).strip() if diag_m else ''

    return [
        {
            'id': 'gpos-overview',
            'title': '1. Overview & Morphologic Patterns of Gram-Positive Bacteria',
            'shortTitle': '1. Overview & Cocci',
            'category': 'Bacterial Diseases',
            'html': hero_part
        },
        {
            'id': 'gpos-staph-botryomycosis',
            'title': '2. Staphylococcal Infections & Botryomycosis',
            'shortTitle': '2. Staph & Botryomycosis',
            'category': 'Bacterial Diseases',
            'html': articles['staph'] + '\n\n' + articles['botryomycosis']
        },
        {
            'id': 'gpos-strep-mastitis',
            'title': '3. Streptococcal Infections & Streptococcal Mastitis',
            'shortTitle': '3. Strep & Mastitis',
            'category': 'Bacterial Diseases',
            'html': articles['strep'] + '\n\n' + articles['streptococcal-mastitis']
        },
        {
            'id': 'gpos-coryne-rhodococcus',
            'title': '4. Corynebacterium, Trueperella & Rhodococcus equi',
            'shortTitle': '4. Coryne & Rhodococcus',
            'category': 'Bacterial Diseases',
            'html': articles['coryne'] + '\n\n' + articles['rhodococcus'] + '\n\n' + articles['coryne-extra']
        },
        {
            'id': 'gpos-clostridial',
            'title': '5. Clostridial Diseases & Disease Spectrum',
            'shortTitle': '5. Clostridial Diseases',
            'category': 'Bacterial Diseases',
            'html': articles['clostridium'] + '\n\n' + articles['clostridial-spectrum']
        },
        {
            'id': 'gpos-bacillus-anthrax',
            'title': '6. Bacillus anthracis (Anthrax)',
            'shortTitle': '6. Anthrax (Bacillus)',
            'category': 'Bacterial Diseases',
            'html': articles['bacillus']
        },
        {
            'id': 'gpos-listeria-erysipelothrix',
            'title': '7. Listeria monocytogenes & Erysipelothrix rhusiopathiae',
            'shortTitle': '7. Listeria & Erysipelas',
            'category': 'Bacterial Diseases',
            'html': articles['listeria']
        },
        {
            'id': 'gpos-actinomycosis-mycobacteria',
            'title': '8. Actinomycosis (Lumpy Jaw) & Mycobacterial Lineage',
            'shortTitle': '8. Actinomycosis & TB Lineage',
            'category': 'Bacterial Diseases',
            'html': articles['actinomycosis'] + '\n\n' + articles['mycobacteria']
        },
        {
            'id': 'gpos-granulomatous-diagnostic',
            'title': '9. Granulomatous Pathology Comparison & Diagnostic Key',
            'shortTitle': '9. Comparative Key',
            'category': 'Bacterial Diseases',
            'html': articles['granulomatous-comparison'] + '\n\n<section class="section-block">\n' + diag_part + '\n</section>'
        }
    ]

def process_gram_negative():
    with open('src/components/infectious/bacterial/GramNegativePage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)

    pos_necro = html.find('</article>', html.find('id="necrobacillosis"'))
    pos_gran = html.find('<article id="granulomatous-comparison"')
    between = html[pos_necro+10:pos_gran].strip()

    diag_m = re.search(r'(<aside class=\"diagnostic-panel\".*?</aside>)', html, re.DOTALL)
    diag_part = diag_m.group(1).strip() if diag_m else ''

    return [
        {
            'id': 'gneg-overview',
            'title': '1. Overview & Endotoxin Pathogenesis of Gram-Negative Bacteria',
            'shortTitle': '1. Overview & LPS',
            'category': 'Bacterial Diseases',
            'html': hero_part
        },
        {
            'id': 'gneg-enterobacteriaceae',
            'title': '2. Enterobacteriaceae (Escherichia coli & Salmonella)',
            'shortTitle': '2. E. coli & Salmonella',
            'category': 'Bacterial Diseases',
            'html': articles['enterobacteriaceae']
        },
        {
            'id': 'gneg-pasteurellaceae',
            'title': '3. Pasteurellaceae (Mannheimia haemolytica & Pasteurella multocida)',
            'shortTitle': '3. Pasteurellaceae',
            'category': 'Bacterial Diseases',
            'html': articles['pasteurellaceae']
        },
        {
            'id': 'gneg-histophilus-haemophilus',
            'title': '4. Histophilus somni & Glaesserella (Haemophilus) parasuis',
            'shortTitle': '4. Histophilus & Glaesserella',
            'category': 'Bacterial Diseases',
            'html': articles['histophilus-haemophilus']
        },
        {
            'id': 'gneg-pseudomonas-burkholderia',
            'title': '5. Pseudomonas aeruginosa & Burkholderia mallei (Glanders)',
            'shortTitle': '5. Pseudomonas & Glanders',
            'category': 'Bacterial Diseases',
            'html': articles['pseudomonas-burkholderia']
        },
        {
            'id': 'gneg-brucella-francisella',
            'title': '6. Brucella spp. & Francisella tularensis',
            'shortTitle': '6. Brucella & Francisella',
            'category': 'Bacterial Diseases',
            'html': articles['brucella-francisella']
        },
        {
            'id': 'gneg-campylobacter-lawsonia',
            'title': '7. Campylobacter fetus & Lawsonia intracellularis',
            'shortTitle': '7. Campylobacter & Lawsonia',
            'category': 'Bacterial Diseases',
            'html': articles['campylobacter-lawsonia']
        },
        {
            'id': 'gneg-actinobacillus-necrobacillosis',
            'title': '8. Actinobacillus, Leptospira & Necrobacillosis',
            'shortTitle': '8. Actinobacillus & Foot Rot',
            'category': 'Bacterial Diseases',
            'html': articles['actinobacillus'] + '\n\n' + articles['leptospirosis'] + '\n\n' + articles['necrobacillosis']
        },
        {
            'id': 'gneg-comparison-diagnostic',
            'title': '9. Additional Illustrated Examples & Diagnostic Key',
            'shortTitle': '9. Comparative Key',
            'category': 'Bacterial Diseases',
            'html': between + '\n\n' + articles['granulomatous-comparison'] + '\n\n<section class="section-block">\n' + diag_part + '\n</section>'
        }
    ]

def process_mycobacterial():
    with open('src/components/infectious/bacterial/MycobacterialPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)

    last_art = html.rfind('</article>')
    after = html[last_art+10:].strip()
    after = re.sub(r'^\s*</section>', '', after).strip()
    after = re.sub(r'</section>\s*$', '', after).strip()

    return [
        {
            'id': 'myco-overview',
            'title': '1. Overview & Acid-Fast Cell Wall Structure',
            'shortTitle': '1. Overview & Cell Wall',
            'category': 'Bacterial Diseases',
            'html': hero_part
        },
        {
            'id': 'myco-bovine-tb',
            'title': '2. Bovine Tuberculosis (Mycobacterium bovis)',
            'shortTitle': '2. Bovine TB',
            'category': 'Bacterial Diseases',
            'html': articles['bovine-tb']
        },
        {
            'id': 'myco-johnes',
            'title': '3. Johne\'s Disease / Paratuberculosis (MAP)',
            'shortTitle': '3. Johne\'s Disease',
            'category': 'Bacterial Diseases',
            'html': articles['johnes']
        },
        {
            'id': 'myco-avian-tb',
            'title': '4. Avian Mycobacteriosis (M. avium complex)',
            'shortTitle': '4. Avian TB',
            'category': 'Bacterial Diseases',
            'html': articles['avian-tb']
        },
        {
            'id': 'myco-atypical-feline',
            'title': '5. Feline Leprosy & Opportunistic Mycobacterioses',
            'shortTitle': '5. Feline Leprosy',
            'category': 'Bacterial Diseases',
            'html': articles['atypical']
        },
        {
            'id': 'myco-gallery-diagnostic',
            'title': '6. Educational Illustrations & Diagnostic Approach',
            'shortTitle': '6. Gallery & Diagnostic Key',
            'category': 'Bacterial Diseases',
            'html': after
        }
    ]

def process_spirochetal():
    with open('src/components/infectious/bacterial/SpirochetalAtypicalPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)
    diag_m = re.search(r'(<aside class=\"diagnostic-panel\".*?</aside>)', html, re.DOTALL)
    diag_part = diag_m.group(1).strip() if diag_m else ''

    return [
        {
            'id': 'spir-overview',
            'title': '1. Overview & Unique Cell Biology of Spirochetes and Atypical Bacteria',
            'shortTitle': '1. Overview',
            'category': 'Bacterial Diseases',
            'html': hero_part
        },
        {
            'id': 'spir-leptospira',
            'title': '2. Leptospirosis (Leptospira interrogans)',
            'shortTitle': '2. Leptospirosis',
            'category': 'Bacterial Diseases',
            'html': articles['leptospira']
        },
        {
            'id': 'spir-brachyspira-borrelia',
            'title': '3. Brachyspira & Borrelia Infections (Swine Dysentery & Lyme Disease)',
            'shortTitle': '3. Brachyspira & Borrelia',
            'category': 'Bacterial Diseases',
            'html': articles['brachyspira-borrelia']
        },
        {
            'id': 'spir-mycoplasma',
            'title': '4. Mycoplasma & Ureaplasma Infections',
            'shortTitle': '4. Mycoplasma & Ureaplasma',
            'category': 'Bacterial Diseases',
            'html': articles['mycoplasma']
        },
        {
            'id': 'spir-chlamydia',
            'title': '5. Chlamydial Diseases (Chlamydia abortus & C. psittaci)',
            'shortTitle': '5. Chlamydia',
            'category': 'Bacterial Diseases',
            'html': articles['chlamydia']
        },
        {
            'id': 'spir-anaplasmataceae',
            'title': '6. Anaplasmataceae & Rickettsiales (Ehrlichia & Anaplasma)',
            'shortTitle': '6. Anaplasma & Ehrlichia',
            'category': 'Bacterial Diseases',
            'html': articles['anaplasmataceae']
        },
        {
            'id': 'spir-coxiella-diagnostic',
            'title': '7. Coxiella burnetii (Q Fever) & Diagnostic Approach Key',
            'shortTitle': '7. Q Fever & Key',
            'category': 'Bacterial Diseases',
            'html': articles['coxiella'] + '\n\n<section class="section-block">\n' + diag_part + '\n</section>'
        }
    ]

def process_superficial():
    with open('src/components/infectious/mycotic/SuperficialCutaneousPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)
    diag_m = re.search(r'(<aside class=\"diagnostic-panel\".*?</aside>)', html, re.DOTALL)
    diag_part = diag_m.group(1).strip() if diag_m else ''

    return [
        {
            'id': 'derm-overview',
            'title': '1. Overview & Keratinophilic Fungal Pathogenesis',
            'shortTitle': '1. Overview',
            'category': 'Mycotic Diseases',
            'html': hero_part
        },
        {
            'id': 'derm-microsporum',
            'title': '2. Microsporum Dermatophytosis (Ringworm)',
            'shortTitle': '2. Microsporum',
            'category': 'Mycotic Diseases',
            'html': articles['microsporum']
        },
        {
            'id': 'derm-trichophyton',
            'title': '3. Trichophyton Dermatophytosis (Ringworm)',
            'shortTitle': '3. Trichophyton',
            'category': 'Mycotic Diseases',
            'html': articles['trichophyton']
        },
        {
            'id': 'derm-malassezia',
            'title': '4. Malassezia Dermatitis & Otitis',
            'shortTitle': '4. Malassezia',
            'category': 'Mycotic Diseases',
            'html': articles['malassezia']
        },
        {
            'id': 'derm-candida-diagnostic',
            'title': '5. Cutaneous Candidiasis & Diagnostic Key',
            'shortTitle': '5. Candida & Key',
            'category': 'Mycotic Diseases',
            'html': articles['candida-cutaneous'] + '\n\n<section class="section-block">\n' + diag_part + '\n</section>'
        }
    ]

def process_subcutaneous():
    with open('src/components/infectious/mycotic/SubcutaneousPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    hero_part = extract_hero(html)
    units = parse_with_trailing_figures(html, ['sporotrichosis', 'pythiosis', 'mycetoma', 'phaeohyphomycosis'])

    diag_m = re.search(r'(<aside class=\"diagnostic-panel\".*?</aside>)', html, re.DOTALL)
    diag_part = diag_m.group(1).strip() if diag_m else ''

    return [
        {
            'id': 'subc-overview',
            'title': '1. Overview & Traumatic Implantation Pathogenesis',
            'shortTitle': '1. Overview',
            'category': 'Mycotic Diseases',
            'html': hero_part
        },
        {
            'id': 'subc-sporotrichosis',
            'title': '2. Sporotrichosis (Sporothrix schenckii complex)',
            'shortTitle': '2. Sporotrichosis',
            'category': 'Mycotic Diseases',
            'html': units['sporotrichosis']
        },
        {
            'id': 'subc-pythiosis',
            'title': '3. Pythiosis & Lagenidiosis (Oomycetes)',
            'shortTitle': '3. Pythiosis',
            'category': 'Mycotic Diseases',
            'html': units['pythiosis']
        },
        {
            'id': 'subc-mycetoma',
            'title': '4. Eumycotic Mycetoma',
            'shortTitle': '4. Mycetoma',
            'category': 'Mycotic Diseases',
            'html': units['mycetoma']
        },
        {
            'id': 'subc-phaeo-diagnostic',
            'title': '5. Phaeohyphomycosis, Chromoblastomycosis & Diagnostic Key',
            'shortTitle': '5. Phaeohyphomycosis & Key',
            'category': 'Mycotic Diseases',
            'html': units['phaeohyphomycosis'] + '\n\n<section class="section-block">\n' + diag_part + '\n</section>'
        }
    ]

def process_systemic():
    with open('src/components/infectious/mycotic/SystemicDeepPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    hero_part = extract_hero(html)
    units = parse_with_trailing_figures(html, ['blastomyces', 'coccidioides', 'histoplasma', 'cryptococcus'])

    diag_m = re.search(r'(<aside class=\"diagnostic-panel\".*?</aside>)', html, re.DOTALL)
    diag_part = diag_m.group(1).strip() if diag_m else ''

    return [
        {
            'id': 'sysm-overview',
            'title': '1. Overview & Thermal Dimorphism of Systemic Mycoses',
            'shortTitle': '1. Overview',
            'category': 'Mycotic Diseases',
            'html': hero_part
        },
        {
            'id': 'sysm-blastomyces',
            'title': '2. Blastomycosis (Blastomyces dermatitidis)',
            'shortTitle': '2. Blastomycosis',
            'category': 'Mycotic Diseases',
            'html': units['blastomyces']
        },
        {
            'id': 'sysm-coccidioides',
            'title': '3. Coccidioidomycosis (Valley Fever)',
            'shortTitle': '3. Coccidioidomycosis',
            'category': 'Mycotic Diseases',
            'html': units['coccidioides']
        },
        {
            'id': 'sysm-histoplasma',
            'title': '4. Histoplasmosis (Histoplasma capsulatum)',
            'shortTitle': '4. Histoplasmosis',
            'category': 'Mycotic Diseases',
            'html': units['histoplasma']
        },
        {
            'id': 'sysm-cryptococcus-diagnostic',
            'title': '5. Cryptococcosis & Diagnostic Approach Key',
            'shortTitle': '5. Cryptococcus & Key',
            'category': 'Mycotic Diseases',
            'html': units['cryptococcus'] + '\n\n<section class="section-block">\n' + diag_part + '\n</section>'
        }
    ]

def process_opportunistic():
    with open('src/components/infectious/mycotic/OpportunisticPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    hero_part = extract_hero(html)
    units = parse_with_trailing_figures(html, ['aspergillus', 'mucorales', 'candida-visceral', 'pneumocystis'])

    diag_m = re.search(r'(<aside class=\"diagnostic-panel\".*?</aside>)', html, re.DOTALL)
    diag_part = diag_m.group(1).strip() if diag_m else ''

    return [
        {
            'id': 'oppm-overview',
            'title': '1. Overview & Opportunistic Mycoses in Immunocompromised Hosts',
            'shortTitle': '1. Overview',
            'category': 'Mycotic Diseases',
            'html': hero_part
        },
        {
            'id': 'oppm-aspergillus',
            'title': '2. Aspergillosis (Aspergillus fumigatus)',
            'shortTitle': '2. Aspergillosis',
            'category': 'Mycotic Diseases',
            'html': units['aspergillus']
        },
        {
            'id': 'oppm-mucorales',
            'title': '3. Mucormycosis / Zygomycosis (Rhizopus, Mucor, Absidia)',
            'shortTitle': '3. Mucormycosis',
            'category': 'Mycotic Diseases',
            'html': units['mucorales']
        },
        {
            'id': 'oppm-candida-visceral',
            'title': '4. Systemic & Visceral Candidiasis (Candida albicans)',
            'shortTitle': '4. Visceral Candidiasis',
            'category': 'Mycotic Diseases',
            'html': units['candida-visceral']
        },
        {
            'id': 'oppm-pneumocystis-diagnostic',
            'title': '5. Pneumocystosis & Diagnostic Approach Key',
            'shortTitle': '5. Pneumocystis & Key',
            'category': 'Mycotic Diseases',
            'html': units['pneumocystis'] + '\n\n<section class="section-block">\n' + diag_part + '\n</section>'
        }
    ]

def process_poultry_bacterial():
    with open('src/components/infectious/poultry/PoultryBacterialPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)

    last_art = html.rfind('</article>')
    after = html[last_art+10:].strip()
    after = re.sub(r'^\s*</section>', '', after).strip()
    after = re.sub(r'</section>\s*$', '', after).strip()

    return [
        {
            'id': 'pbact-overview',
            'title': '1. Overview & Avian Flock Bacteriology',
            'shortTitle': '1. Overview',
            'category': 'Poultry Diseases',
            'html': hero_part
        },
        {
            'id': 'pbact-salmonellosis',
            'title': '2. Avian Salmonelloses (Pullorum Disease, Fowl Typhoid, Paratyphoid)',
            'shortTitle': '2. Avian Salmonelloses',
            'category': 'Poultry Diseases',
            'html': articles['salmonellosis']
        },
        {
            'id': 'pbact-colibacillosis-cholera',
            'title': '3. Avian Colibacillosis & Fowl Cholera (Pasteurella multocida)',
            'shortTitle': '3. Colibacillosis & Cholera',
            'category': 'Poultry Diseases',
            'html': articles['colibacillosis'] + '\n\n' + articles['fowl-cholera']
        },
        {
            'id': 'pbact-riemerella-tb',
            'title': '4. Riemerella anatipestifer Infection & Avian Tuberculosis',
            'shortTitle': '4. Riemerella & Avian TB',
            'category': 'Poultry Diseases',
            'html': articles['riemerella'] + '\n\n' + articles['avian-tuberculosis']
        },
        {
            'id': 'pbact-coryzas',
            'title': '5. Respiratory Coryzas (Infectious Coryza & Avian Bordetellosis)',
            'shortTitle': '5. Infectious Coryza',
            'category': 'Poultry Diseases',
            'html': articles['coryza'] + '\n\n' + articles['bordetellosis']
        },
        {
            'id': 'pbact-mycoplasmosis',
            'title': '6. Avian Mycoplasmosis (MG & MS)',
            'shortTitle': '6. Mycoplasmosis',
            'category': 'Poultry Diseases',
            'html': articles['mycoplasmosis']
        },
        {
            'id': 'pbact-staph-botulism',
            'title': '7. Staphylococcosis & Botulism (Limberneck)',
            'shortTitle': '7. Staph & Botulism',
            'category': 'Poultry Diseases',
            'html': articles['staphylococcosis'] + '\n\n' + articles['botulism']
        },
        {
            'id': 'pbact-clostridial',
            'title': '8. Clostridial Enteritides & Gangrenous Dermatitis',
            'shortTitle': '8. Clostridial Diseases',
            'category': 'Poultry Diseases',
            'html': articles['ulcerative-enteritis'] + '\n\n' + articles['necrotic-enteritis'] + '\n\n' + articles['gangrenous-dermatitis']
        },
        {
            'id': 'pbact-spirochetosis-chlamydiosis',
            'title': '9. Avian Spirochetosis (Borreliosis) & Avian Chlamydiosis',
            'shortTitle': '9. Borrelia & Chlamydia',
            'category': 'Poultry Diseases',
            'html': articles['spirochetosis'] + '\n\n' + articles['chlamydiosis']
        },
        {
            'id': 'pbact-gallery-diagnostic',
            'title': '10. Additional Illustrated Entities & Diagnostic Key',
            'shortTitle': '10. Gallery & Key',
            'category': 'Poultry Diseases',
            'html': after
        }
    ]

def process_poultry_viral():
    with open('src/components/infectious/poultry/PoultryViralPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)
    diag_m = re.search(r'(<aside class=\"diagnostic-panel\".*?</aside>)', html, re.DOTALL)
    diag_part = diag_m.group(1).strip() if diag_m else ''

    return [
        {
            'id': 'pviral-overview',
            'title': '1. Overview & Avian Viral Flock Pathology',
            'shortTitle': '1. Overview',
            'category': 'Poultry Diseases',
            'html': hero_part
        },
        {
            'id': 'pviral-neoplastic',
            'title': '2. Neoplastic Viral Diseases (Marek\'s Disease & Lymphoid Leukosis)',
            'shortTitle': '2. Marek\'s & Leukosis',
            'category': 'Poultry Diseases',
            'html': articles['mareks'] + '\n\n' + articles['lymphoid-leukosis']
        },
        {
            'id': 'pviral-hpai-ndv',
            'title': '3. Systemic Vaso-Destructive Viruses (HPAI & Newcastle Disease)',
            'shortTitle': '3. HPAI & Newcastle',
            'category': 'Poultry Diseases',
            'html': articles['hpai-ndv']
        },
        {
            'id': 'pviral-immunosuppressive',
            'title': '4. Immunosuppressive Viruses (Infectious Bursal Disease & CAV)',
            'shortTitle': '4. IBD & CAV',
            'category': 'Poultry Diseases',
            'html': articles['ibd'] + '\n\n' + articles['cav']
        },
        {
            'id': 'pviral-respiratory',
            'title': '5. Respiratory Viruses (Infectious Bronchitis & Laryngotracheitis)',
            'shortTitle': '5. IBV & ILTV',
            'category': 'Poultry Diseases',
            'html': articles['respiratory-viruses']
        },
        {
            'id': 'pviral-pox-reovirus',
            'title': '6. Cutaneous & Musculoskeletal Viruses (Fowlpox & Viral Arthritis)',
            'shortTitle': '6. Fowlpox & Reovirus',
            'category': 'Poultry Diseases',
            'html': articles['fowlpox'] + '\n\n' + articles['viral-arthritis']
        },
        {
            'id': 'pviral-neurotropic',
            'title': '7. Neurotropic Viruses (Epidemic Tremor / Avian Encephalomyelitis)',
            'shortTitle': '7. Epidemic Tremor',
            'category': 'Poultry Diseases',
            'html': articles['epidemic-tremor']
        },
        {
            'id': 'pviral-waterfowl-diagnostic',
            'title': '8. Waterfowl Viruses (Duck Plague & Hepatitis) & Diagnostic Key',
            'shortTitle': '8. Waterfowl & Key',
            'category': 'Poultry Diseases',
            'html': articles['duck-plague'] + '\n\n' + articles['duck-hepatitis'] + '\n\n<section class="section-block">\n' + diag_part + '\n</section>'
        }
    ]

def process_poultry_mycotic():
    with open('src/components/infectious/poultry/PoultryMycoticPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)

    last_art = html.rfind('</article>')
    after = html[last_art+10:].strip()
    after = re.sub(r'^\s*</section>', '', after).strip()
    after = re.sub(r'</section>\s*$', '', after).strip()

    return [
        {
            'id': 'pmyco-overview',
            'title': '1. Overview & Principles of Avian Mycology and Mycotoxicology',
            'shortTitle': '1. Overview',
            'category': 'Poultry Diseases',
            'html': hero_part
        },
        {
            'id': 'pmyco-aspergillosis',
            'title': '2. Avian Aspergillosis (Brooder Pneumonia)',
            'shortTitle': '2. Aspergillosis',
            'category': 'Poultry Diseases',
            'html': articles['aspergillosis']
        },
        {
            'id': 'pmyco-candidiasis',
            'title': '3. Avian Candidiasis (Crop Thrush / Sour Crop)',
            'shortTitle': '3. Candidiasis (Thrush)',
            'category': 'Poultry Diseases',
            'html': articles['candidiasis']
        },
        {
            'id': 'pmyco-aflatoxicosis',
            'title': '4. Hepatotoxic Mycotoxicoses (Aflatoxicosis)',
            'shortTitle': '4. Aflatoxicosis',
            'category': 'Poultry Diseases',
            'html': articles['aflatoxicosis']
        },
        {
            'id': 'pmyco-ochratoxicosis',
            'title': '5. Nephrotoxic Mycotoxicoses (Ochratoxicosis)',
            'shortTitle': '5. Ochratoxicosis',
            'category': 'Poultry Diseases',
            'html': articles['ochratoxicosis']
        },
        {
            'id': 'pmyco-fusariotoxins',
            'title': '6. Fusariotoxins (Trichothecenes, Fumonisins & Zearalenone)',
            'shortTitle': '6. Fusariotoxins',
            'category': 'Poultry Diseases',
            'html': articles['trichothecenes'] + '\n\n' + articles['fumonisins'] + '\n\n' + articles['zearalenone']
        },
        {
            'id': 'pmyco-gallery-diagnostic',
            'title': '7. Additional Illustrated Entities & Diagnostic Key',
            'shortTitle': '7. Gallery & Key',
            'category': 'Poultry Diseases',
            'html': after
        }
    ]

def process_poultry_parasitic():
    with open('src/components/infectious/poultry/PoultryParasiticPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)

    last_art = html.rfind('</article>')
    after = html[last_art+10:].strip()
    after = re.sub(r'^\s*</section>', '', after).strip()
    after = re.sub(r'</section>\s*$', '', after).strip()

    return [
        {
            'id': 'ppara-overview',
            'title': '1. Overview & Pathophysiology of Avian Parasitoses',
            'shortTitle': '1. Overview',
            'category': 'Poultry Diseases',
            'html': hero_part
        },
        {
            'id': 'ppara-coccidiosis',
            'title': '2. Avian Coccidioses (Chickens & Geese)',
            'shortTitle': '2. Coccidiosis',
            'category': 'Poultry Diseases',
            'html': articles['chicken-coccidiosis'] + '\n\n' + articles['goose-coccidiosis']
        },
        {
            'id': 'ppara-histomoniasis',
            'title': '3. Histomoniasis (Blackhead Disease / Enterohepatitis)',
            'shortTitle': '3. Histomoniasis',
            'category': 'Poultry Diseases',
            'html': articles['histomoniasis']
        },
        {
            'id': 'ppara-helminthiasis',
            'title': '4. Avian Helminthiases (Syngamiasis & Intestinal Nematodiasis)',
            'shortTitle': '4. Helminthiases',
            'category': 'Poultry Diseases',
            'html': articles['syngamiasis'] + '\n\n' + articles['intestinal-nematodes']
        },
        {
            'id': 'ppara-ectoparasites',
            'title': '5. Avian Ectoparasitosis (Mites & Lice)',
            'shortTitle': '5. Ectoparasitosis',
            'category': 'Poultry Diseases',
            'html': articles['ectoparasites']
        },
        {
            'id': 'ppara-gallery-diagnostic',
            'title': '6. Additional Illustrated Entities & Diagnostic Key',
            'shortTitle': '6. Gallery & Key',
            'category': 'Poultry Diseases',
            'html': after
        }
    ]

def process_poultry_nutritional():
    with open('src/components/infectious/poultry/PoultryNutritionalMetabolicPage.tsx') as f:
        src = f.read()
    m = re.search(r'const HTML_CONTENT = \`(.*?)\`;', src, re.DOTALL)
    html = clean_html(m.group(1))

    articles = {}
    for art_m in re.finditer(r'(<article\s+id=[\"\']([^\"\']+)[\"\'][^>]*>.*?</article>)', html, re.DOTALL):
        articles[art_m.group(2)] = art_m.group(1).strip()

    hero_part = extract_hero(html)

    last_art = html.rfind('</article>')
    after = html[last_art+10:].strip()
    after = re.sub(r'^\s*</section>', '', after).strip()
    after = re.sub(r'</section>\s*$', '', after).strip()

    return [
        {
            'id': 'pnutr-overview',
            'title': '1. Overview & Avian Metabolic Dynamics',
            'shortTitle': '1. Overview',
            'category': 'Poultry Diseases',
            'html': hero_part
        },
        {
            'id': 'pnutr-vitamins',
            'title': '2. Hypovitaminoses (Vitamins A, D₃, K, B₁, and B₂)',
            'shortTitle': '2. Hypovitaminoses',
            'category': 'Poultry Diseases',
            'html': articles['vitamin-a'] + '\n\n' + articles['vitamin-d'] + '\n\n' + articles['vitamin-k'] + '\n\n' + articles['thiamine'] + '\n\n' + articles['riboflavin']
        },
        {
            'id': 'pnutr-cardiopulmonary',
            'title': '3. Cardiopulmonary Disorders (Ascites Syndrome & Sudden Death Syndrome)',
            'shortTitle': '3. Ascites & SDS',
            'category': 'Poultry Diseases',
            'html': articles['ascites'] + '\n\n' + articles['sds']
        },
        {
            'id': 'pnutr-hepatic-renal',
            'title': '4. Hepatic & Renal Disorders (Fatty Liver Hemorrhagic Syndrome & Gout)',
            'shortTitle': '4. FLHS & Gout',
            'category': 'Poultry Diseases',
            'html': articles['flhs'] + '\n\n' + articles['gout']
        },
        {
            'id': 'pnutr-skeletal',
            'title': '5. Skeletal & Locomotor Disorders (Tibial Dyschondroplasia & Layer Osteoporosis)',
            'shortTitle': '5. Skeletal Disorders',
            'category': 'Poultry Diseases',
            'html': articles['td'] + '\n\n' + articles['layer-osteoporosis']
        },
        {
            'id': 'pnutr-gallery-diagnostic',
            'title': '6. Additional Illustrated Entities & Diagnostic Key',
            'shortTitle': '6. Gallery & Key',
            'category': 'Poultry Diseases',
            'html': after
        }
    ]

print("Updated processors defined")
