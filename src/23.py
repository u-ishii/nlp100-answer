import re

from share.get_england_text import get_england_text

text = get_england_text()
section_regex = re.compile(r"(?P<open>==+) *(?P<name>[^= ]+) *(?P=open)")
print(
    "\n".join(
        map(
            lambda section: f"{section[1]} {len(section[0]) - 1}",
            section_regex.findall(text),
        )
    )
)
