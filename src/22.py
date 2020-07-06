import re

from share.get_england_text import get_england_text

text = get_england_text()
category_regex = re.compile(r"\[\[Category\:([^\]|]+)(?:|\*)?\]\]")
print("\n".join(category_regex.findall(text)))
