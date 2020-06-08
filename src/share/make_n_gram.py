from typing import Tuple, Iterable


def make_n_gram(size: int, source: Iterable[str]) -> Tuple[Tuple[str]]:
    end = len(source) - size + 1
    return tuple(map(
        lambda i: tuple(source[i:(i + size)]),
        range(end),
    ))


def make_word_n_gram(size: int, source: str) -> Tuple[Tuple[str]]:
    return make_n_gram(size, source.split(' '))


def make_char_n_gram(size: int, source: str) -> Tuple[str]:
    return tuple(map(
        ''.join,
        make_n_gram(size, tuple(source)),
    ))
