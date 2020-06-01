import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

const categoryRegex = /\[\[Category\:([^\]]+)\]\]/
console.log(
    getEnglandArticle()
        .split('\n')
        .map(row => row.match(categoryRegex))
        .filter(notEmpty)
        .map(match => match[1].split('|')[0])
)
