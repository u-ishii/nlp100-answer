import { range } from '../helper/iterable-helper'

export { makeWordNGram, makeCharNGram }

const makeNGram = (size: number, source: Array<string>): Array<Array<string>> => {
    const end = source.length - size + 1
    return range(end)
        .map(i => source.slice(i, i + size))
}

const makeWordNGram = (size: number, source: string): Array<Array<string>> => {
    return makeNGram(size, source.split(' '))
}

const makeCharNGram = (size: number, source: string): Array<string> => {
    return makeNGram(size, source.split('')).map(chars => chars.join(''))
}
