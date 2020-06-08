import { getEnglandArticle } from './share/get-england-article'
import { splitByIndices } from './helper/string-helper'
import { AssertionError } from 'assert'

const basicInfoOpenRegex = /\{\{基礎情報 国/g
const article = getEnglandArticle()

article.slice(article.search(basicInfoOpenRegex) + 8)

const searchBracketIndex = (open: string, close: string, text: string, fromIndex: number = 0): [number, number] => {
    const openIndex = text.indexOf(open, fromIndex)
    if (openIndex == -1)
        return [-1, -1]
    const searchCloseIndex = (index: number, nestLevel: number): number => {
        if (nestLevel == 0)
            return index - close.length
        const innerOpenIndex = article.indexOf(open, index)
        const innerCloseIndex = article.indexOf(close, index)
        if (innerOpenIndex != -1 && innerOpenIndex < innerCloseIndex)
            return searchCloseIndex(innerOpenIndex + open.length, nestLevel + 1)
        return searchCloseIndex(innerCloseIndex + close.length, nestLevel - 1)
    }
    return [openIndex, searchCloseIndex(openIndex + open.length, 1)]
}

const basicInfoOpenIndex = article.search(basicInfoOpenRegex)
const [, basicInfoCloseIndex] = searchBracketIndex('{{', '}}', article, basicInfoOpenIndex)
const basicInfoText = article.slice(basicInfoOpenIndex + 8, basicInfoCloseIndex).trim()

const searchDelimiterIndices = (delimiter: string, text: string, fromIndex: number = 0): Array<number> => {
    const loopSearch = (index: number): Array<number> => {
        const delimiterIndex = text.indexOf(delimiter, index)
        if (delimiterIndex == -1)
            return []
        const [openIndex, closeIndex] =
            [['{{', '}}'], ['[[', ']]']]
                .map(([open, close]) => searchBracketIndex(open, close, text, index))
                .filter(([openIndex,]) => openIndex != -1)
                .sort(([openIndexA,], [openIndexB,]) => openIndexA - openIndexB)[0] || [-1, -1]
        if (openIndex != -1 && openIndex < delimiterIndex)
            return loopSearch(closeIndex + 1)
        else
            return [delimiterIndex, ...loopSearch(delimiterIndex + delimiter.length)]
    }
    return loopSearch(fromIndex)
}

console.log(
    splitByIndices(basicInfoText, searchDelimiterIndices('|', basicInfoText))
)

// const items =
//     new Map(
//         splitByIndices(basicInfoText, searchDelimiterIndices('|', basicInfoText))
//             .filter(s => s.length != 0)
//             .map(itemText => splitByIndices(itemText, searchDelimiterIndices('=', itemText)))
//             .map(([key, value]) => [key.trim(), value.trim()])
//     )

// console.log(items)