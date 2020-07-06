from share.make_n_gram import make_char_n_gram

set_a = set(make_char_n_gram(2, "paraparaparadise"))
set_b = set(make_char_n_gram(2, "paragraph"))
print(set_a | set_b)
print(set_a - set_b)
print(set_a & set_b)
print("se" in (set_a & set_b))
