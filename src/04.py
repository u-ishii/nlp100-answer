source = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."  # noqa: E501
single_char_indices = {1, 5, 6, 7, 8, 9, 15, 16, 19}
print(
    dict(
        [word[0:1], i] if i in single_char_indices else [word[0:2], i]
        for i, word in enumerate(source.split(" "))
    )
)
