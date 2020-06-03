import { getEnglandArticle } from './share/get-england-article'
import { splitByIndices } from './helper/string-helper'

const basicInfoOpenRegex = /\{\{基礎情報 国/g
const open = /\{\{/g
const close = /\}\}/g
const article = getEnglandArticle()

article.slice(article.search(basicInfoOpenRegex) + 8)

const searchBasicInfoClose = (index: number, nestLevel: number): number => {
    if (nestLevel == 0)
        return index - 2
    const openIndex = article.indexOf('{{', index)
    const closeIndex = article.indexOf('}}', index)
    if (openIndex != -1 && openIndex < closeIndex)
        return searchBasicInfoClose(openIndex + 2, nestLevel + 1)
    return searchBasicInfoClose(closeIndex + 2, nestLevel - 1)
}

const basicInfoOpenIndex = article.search(basicInfoOpenRegex)
const basicInfoCloseIndex = searchBasicInfoClose(basicInfoOpenIndex + 2, 1)
const basicInfoText = article.slice(basicInfoOpenIndex + 8, basicInfoCloseIndex).trim()

const searchDelimiters = (index: number): Array<number> => {
    const delimiterIndex = basicInfoText.indexOf('|', index)
    if (delimiterIndex == -1)
        return []
    const [openIndex, closeIndex] = [
        ['{{', '}}'],
        ['[[', ']]'],
    ]
        .map<[number, string]>(([open, close]) => [basicInfoText.indexOf(open, index), close])
        .filter(([openIndex, _]) => openIndex != -1)
        .map<[number, number]>(([openIndex, close]) => [openIndex, basicInfoText.indexOf(close, openIndex)])
        .sort(([openIndexA, _A], [openIndexB, _B]) => openIndexA - openIndexB)[0] || [-1, -1]
    if (openIndex != -1 && openIndex < delimiterIndex)
        return searchDelimiters(closeIndex + 2)
    return [delimiterIndex, ...searchDelimiters(delimiterIndex + 1)]
}

const items =
    new Map(
        splitByIndices(basicInfoText, searchDelimiters(0))
            .filter(s => s.length != 0)
            .map(itemText => itemText.split(/\s*=\s*/))
            .map(([key, value]) => [key, value.trim()])
    )

console.log(items)