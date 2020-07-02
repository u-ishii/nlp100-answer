import json
from helper.file_helper import read_gzip_string

def get_england_text() -> str:
    return next(
        filter(
            lambda article: article['title'] == 'イギリス',
            map(
                json.loads,
                read_gzip_string("./res/jawiki-country.json.gz").split('\n'),
            ),
        )
    )['text']
