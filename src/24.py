import re

from .share.get_england_text import get_england_text

text = get_england_text()
file_regex = re.compile(r"\[\[ファイル\:[^\]]+\]\]")
print("\n".join(file_regex.findall(text)))
