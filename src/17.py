# cut -c 1 res/popular-names.txt | sort | uniq
import math
from operator import itemgetter
from typing import List

from helper.file_helper import read_string

source = read_string("./res/popular-names.txt")
print("\n".join(sorted(set(map(itemgetter(0), source.split("\n"))))))
