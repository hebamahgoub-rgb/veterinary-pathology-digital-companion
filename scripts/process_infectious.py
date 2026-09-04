import os
import re
import json

# Ensure directories exist
os.makedirs('src/components/infectious/bacterial', exist_ok=True)
os.makedirs('src/components/infectious/mycotic', exist_ok=True)
os.makedirs('src/components/infectious/poultry', exist_ok=True)
os.makedirs('public/images', exist_ok=True)

# 1. Process 4.3.2 to extract the 2 base64 images if not already saved
viral_content = open('4.3.2- Viral Diseases of Poultry.txt', encoding='utf-8').read()
import base64
b64_matches = re.findall(r'src=[\"\'](data:image\/([a-zA-Z0-9\+\-]+);base64,([^\"]+))[\"\']', viral_content)
for i, (full_src, ext, b64_data) in enumerate(b64_matches):
    filename = f'public/images/poultry_viral_{i+1}.jpeg'
    if not os.path.exists(filename):
        with open(filename, 'wb') as f:
            f.write(base64.b64decode(b64_data))
        print(f'Saved {filename}')

def extract_and_clean_container(filepath):
    content = open(filepath, encoding='utf-8').read()
    
    # Replace base64 images with local image paths
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

print("Extraction script prepared successfully.")
