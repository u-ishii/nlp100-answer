from typing import List


def make_n_gram(size: int, source: List[str]) -> List[List[str]]:
    end = len(source) - size + 1
    return list(map(lambda i: list(source[i : (i + size)]), range(end)))


def make_word_n_gram(size: int, source: str) -> List[List[str]]:
    return make_n_gram(size, source.split(" "))


def make_char_n_gram(size: int, source: str) -> List[str]:
    return list(map("".join, make_n_gram(size, list(source))))
