# cut -f 1 res/popular-names.txt | sort | uniq -c | sort -nr

from helper.file_helper import read_string

source = read_string("./res/popular-names.txt")
names = tuple(map(lambda row: row.split("\t")[0], source.split("\n")))
uniq_names = frozenset(names)
print("\n".join(sorted(uniq_names, key=lambda name: names.count(name), reverse=True)))
