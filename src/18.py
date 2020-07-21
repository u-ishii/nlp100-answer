# sort -t$'\t' -k3nr res/popular-names.txt

from .helper.file_helper import read_string

source = read_string("./res/popular-names.txt")

print("\n".join(sorted(source.split("\n"), key=lambda row: int(row.split("\t")[2]), reverse=True,)))
