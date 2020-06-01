import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

const fileRegex = /\[\[ファイル\:[^\]]+\]\]/
console.log(
    getEnglandArticle()
        .split('\n')
        .map(row => row.match(fileRegex))
        .filter(notEmpty)
        .map(match => match[0])
)