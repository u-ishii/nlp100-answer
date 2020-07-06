from random import randrange


def shuffle_string(source: str) -> str:
    result = list(source)
    for i in range(len(result) - 1, 0, -1):
        j = randrange(0, i)
        tmp = result[i]
        result[i] = result[j]
        result[j] = tmp
    return "".join(result)


source = "I couldn’t believe that I could actually understand what I was reading : the phenomenal power of the human mind ."  # noqa: E501

print(
    " ".join(
        map(
            lambda word: (word[0] + shuffle_string(word[1:-1]) + word[-1])
            if len(word) >= 4
            else word,
            source.split(" "),
        )
    )
)
