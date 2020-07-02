# cut -f 1 res/popular-names.txt
# cut -f 2 res/popular-names.txt

from helper.file_helper import read_string, write_string

source = read_string('./res/popular-names.txt')
table = tuple(map(lambda row: tuple(row.split('\t')), source.split('\n')))
transposed = tuple(zip(*table))
write_string('./res/col1.txt', '\n'.join(transposed[0]))
write_string('./res/col2.txt', '\n'.join(transposed[1]))
