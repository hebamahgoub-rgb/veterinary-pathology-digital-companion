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
    first_art = html.find('<article')
    first_sec = html.find('<section class="section-block"')
    cutoff = len(html)
    if first_art != -1:
        cutoff = min(cutoff, first_art)
    if first_sec != -1 and first_sec < cutoff:
        # Check if this section-block is before the first article
        cutoff = min(cutoff, first_sec)
    
    hero_part = html[:cutoff].strip()
    # clean trailing unclosed section-block or pathogens-heading
    hero_part = re.sub(r'<section class=\"section-block\"[^>]*>\s*$', '', hero_part)
    hero_part = re.sub(r'<h2 id=\"[^\"]+\">Pathological Profiles</h2>\s*$', '', hero_part)
    return hero_part.strip(), html[cutoff:].strip()

print("Script template ready")
