# cut -c 1 res/popular-names.txt | sort | uniq
from operator import itemgetter

from .helper.file_helper import read_string

source = read_string("./res/popular-names.txt")
print("\n".join(sorted(set(map(itemgetter(0), source.split("\n"))))))
