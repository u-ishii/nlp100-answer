# tail -n 10 res/popular-names.txt

from .helper.file_helper import read_string

source = read_string("./res/popular-names.txt")


def solve15(size: int) -> str:
    return "\n".join(source.split("\n")[-size:])


print(solve15(10))
