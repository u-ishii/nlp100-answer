import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

const solve22 = async (): Promise<Array<string>> => {
    const categoryRegex = /\[\[Category\:([^\]]+)\]\]/
    return (await getEnglandArticle())
        .split('\n')
        .map(row => row.match(categoryRegex))
        .filter(notEmpty)
        .map(match => match[1].split('|')[0])
}

solve22().then(console.log)
