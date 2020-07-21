import math
from typing import List

from .helper.file_helper import read_string

source = read_string("./res/popular-names.txt")


def solve16(result_len: int) -> List[str]:
    rows = source.split("\n")
    rows_len = len(rows)
    part_size = math.ceil(rows_len / result_len)
    return list("\n".join(rows[start : (start + part_size)]) for start in range(0, rows_len, part_size))


print(solve16(100)[0])
print()
print(solve16(100)[-1])
