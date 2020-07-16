import re
from operator import methodcaller
from typing import List, Match, cast, Dict, Tuple

from share.get_england_text import get_england_text

text = get_england_text()

basic_info_open_regex = re.compile(r"^\{\{基礎情報 国", flags=re.MULTILINE)
basic_info_close_regex = re.compile(r"^\}\}", flags=re.MULTILINE)
basic_info_open_match = cast(Match[str], basic_info_open_regex.search(text))
basic_info_close_match = cast(
    Match[str], basic_info_close_regex.search(text, pos=basic_info_open_match.end())
)
basic_info_text = text[
    basic_info_open_match.end() : basic_info_close_match.start()
].strip()

basic_info_item_separator_regex = re.compile(r"^\|", flags=re.MULTILINE)
basic_info_item_texts: List[str] = list(
    filter(
        None,
        map(
            methodcaller("strip"),
            basic_info_item_separator_regex.split(basic_info_text),
        ),
    )
)


def pick_key_value(text: str) -> Tuple[str, str]:
    key, value = basic_info_item_connector_regex.split(text, maxsplit=1)
    return (key, value)


basic_info_item_connector_regex = re.compile(r"\s*=\s*")
basic_info_items: Dict[str, str] = dict(
    map(
        pick_key_value,
        basic_info_item_texts,
    )
)

print(basic_info_items)
