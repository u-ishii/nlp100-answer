const isSmallLatinAlphabet = (char: string) => {
    const smallACode = 'a'.charCodeAt(0)
    const smallZCode = 'z'.charCodeAt(0)
    const charCode = char.charCodeAt(0)
    return charCode >= smallACode && charCode <= smallZCode
}

const cipher08 = (base: number, source: string): string => {
    return source
        .split('')
        .map((char): string => {
            if (isSmallLatinAlphabet(char))
                return String.fromCharCode(base - char.charCodeAt(0))
            else
                return char
        })
        .join('')
}

{
    const ciphered = cipher08(219, 'The quick brown fox jumps over the lazy dog')
    console.log(ciphered)
    const deciphered = cipher08(219, ciphered)
    console.log(deciphered)
}