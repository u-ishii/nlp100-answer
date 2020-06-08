from helper.file_helper import read_string

source = read_string('./res/popular-names.txt')
print(
    source.replace('\t', ' ')
)
