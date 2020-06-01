import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

const fileRegex = /\[\[ファイル\:[^\]]+\]\]/g
const article = getEnglandArticle()
console.log(
    [...article.matchAll(fileRegex)]
        .filter(notEmpty)
        .map(match => match[0])
)