import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

const categoryRegex = /\[\[Category\:([^\]]+)\]\]/g
const article = getEnglandArticle()
console.log(
    [...article.matchAll(categoryRegex)]
        .map(match => match[1].split('|')[0])
)
