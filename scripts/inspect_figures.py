import glob, re

for f in sorted(glob.glob("src/components/infectious/*/*.tsx")):
    with open(f) as fp:
        c = fp.read()
    m = re.search(r"const HTML_CONTENT = \`(.*?)\`;", c, re.DOTALL)
    if not m:
        continue
    html = m.group(1)
    # find all articles
    arts = list(re.finditer(r"<article\s+id=[\"']([^\"']+)[\"'][^>]*>(.*?)</article>", html, re.DOTALL))
    all_imgs = re.findall(r"<img[^>]+src=[\"']([^\"']+)[\"']", html)
    
    art_imgs = 0
    for a in arts:
        art_imgs += len(re.findall(r"<img[^>]+src=[\"']([^\"']+)[\"']", a.group(2)))
    
    first_art_pos = html.find("<article")
    hero_imgs = 0
    if first_art_pos != -1:
        hero_imgs = len(re.findall(r"<img[^>]+src=[\"']([^\"']+)[\"']", html[:first_art_pos]))
        
    last_art_pos = html.rfind("</article>")
    after_imgs = 0
    if last_art_pos != -1:
        after_imgs = len(re.findall(r"<img[^>]+src=[\"']([^\"']+)[\"']", html[last_art_pos+10:]))
        
    between_imgs = len(all_imgs) - (hero_imgs + art_imgs + after_imgs)
    print(f"{f.split('/')[-1]}: Total {len(all_imgs)}, Hero {hero_imgs}, Inside Articles {art_imgs}, After Last Art {after_imgs}, Between Arts {between_imgs}")
