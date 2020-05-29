export { makeCharNGram }

const makeNGram = (size: number, source: Array<string>): Array<Array<string>> => {
    const end = source.length - size + 1
    return [...Array(end).keys()]
        .map(i => source.slice(i, i + size))
}

const makeWordNGram = (size: number, source: string): Array<Array<string>> => {
    return makeNGram(size, source.split(' '))
}

const makeCharNGram = (size: number, source: string): Array<string> => {
    return makeNGram(size, source.split('')).map(chars => chars.join(''))
}

console.log(makeWordNGram(2, 'I am an NLPer'))
console.log(makeCharNGram(2, 'I am an NLPer'))
