def cipher_08(base: int, source: str) -> str:
    result = ""
    for source_char in source:
        code = ord(source_char)
        if ord("a") <= code <= ord("z"):
            result += chr(base - code)
        else:
            result += source_char
    return result


ciphered = cipher_08(219, "The quick brown fox jumps over the lazy dog")
print(ciphered)
deciphered = cipher_08(219, ciphered)
print(deciphered)
