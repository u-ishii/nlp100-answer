import gzip


def read_string(path: str) -> str:
    with open(path) as file:
        return file.read().strip()


def write_string(path: str, content: str):
    with open(path, mode="w") as file:
        return file.write(path, content)


def read_gzip_string(path: str) -> str:
    with gzip.open(path, mode="rt") as file:
        return file.read().strip()
