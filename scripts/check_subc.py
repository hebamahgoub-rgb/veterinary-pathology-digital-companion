import re

with open("src/components/infectious/mycotic/SubcutaneousPage.tsx") as f:
    text = f.read()

m = re.search(r"const HTML_CONTENT = \`(.*?)\`;", text, re.DOTALL)
html = m.group(1)

all_imgs = re.findall(r"<img[^>]+src=[\"\']([^\"\']+)[\"\']", html)
print(f"Total imgs in SubcutaneousPage HTML_CONTENT: {len(all_imgs)}")
for img in all_imgs:
    pos = html.find(img)
    print("Img pos:", pos)
    print("Context:", html[max(0, pos-120):pos+120].replace("\n", " "))
