import re
from operator import methodcaller

from share.get_england_text import get_england_text

text = get_england_text()

basic_info_open_regex = re.compile(r"^\{\{基礎情報 国", flags=re.MULTILINE)
basic_info_close_regex = re.compile(r"^\}\}", flags=re.MULTILINE)
basic_info_open_match = basic_info_open_regex.search(text)
basic_info_close_match = basic_info_close_regex.search(
    text, pos=basic_info_open_match.end()
)
basic_info_text = text[
    basic_info_open_match.end() : basic_info_close_match.start()
].strip()

basic_info_item_separator_regex = re.compile(r"^\|", flags=re.MULTILINE)
basic_info_item_texts = filter(
    None,
    map(methodcaller("strip"), basic_info_item_separator_regex.split(basic_info_text),),
)

basic_info_item_connector_regex = re.compile(r"\s*=\s*")
basic_info_items = dict(
    map(
        lambda item_text: basic_info_item_connector_regex.split(item_text, maxsplit=1),
        basic_info_item_texts,
    )
)

print(basic_info_items)
