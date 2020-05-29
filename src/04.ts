const solve04 = (source: string): Map<string, number> => {
    const singleCharIndices = [1, 5, 6, 7, 8, 9, 15, 16, 19]
    return new Map(
        source.split(' ')
            .map((word, i) => {
                if (singleCharIndices.indexOf(i) != -1)
                    return [word[0], i]
                else
                    return [word[0] + word[1], i]
            })
    )
}

console.log(solve04('Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.'))
