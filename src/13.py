# paste res/col1.txt res/col2.txt

from helper.file_helper import read_string, write_string

source = read_string('./res/popular-names.txt')
rows1 = read_string('./res/col1.txt')
rows2 = read_string('./res/col2.txt')
merged = '\n'.join(
    f'{row1}\t{row2}'
    for row1, row2 in zip(rows1.split('\n'), rows2.split('\n'))
)
write_string('./res/merged.txt', merged)
