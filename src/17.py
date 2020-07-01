from typing import List
from operator import itemgetter
from helper.file_helper import read_string
import math

source = read_string("./res/popular-names.txt")
print(
    '\n'.join(
        sorted(set(map(itemgetter(0), source.split('\n'))))
    )
)