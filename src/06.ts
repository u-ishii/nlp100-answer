import {makeCharNGram} from './05'

const unionSet = (setA: Set<string>, setB: Set<string>): Set<string> => {
    return new Set([...setA, ...setB])
}

const diffSet = (setA: Set<string>, setB: Set<string>): Set<string> => {
    return new Set([...setA].filter(a => !setB.has(a)))
}

const intersectSet = (setA: Set<string>, setB: Set<string>): Set<string> => {
    return new Set([...setA].filter(a => setB.has(a)))
}

{
    const setA = new Set(makeCharNGram(2, 'paraparaparadise'))
    const setB = new Set(makeCharNGram(2, 'paragraph'))
    console.log(unionSet(setA, setB))
    console.log(diffSet(setA, setB))
    console.log(intersectSet(setA, setB))
    console.log(intersectSet(setA, setB).has('se'))
}
