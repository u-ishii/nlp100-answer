import { getEnglandArticle } from './share/get-england-article'

const categoryRegex = /\[\[Category\:[^\]]+\]\]/
const article = getEnglandArticle()
console.log(
    article
        .split('\n')
        .filter(row => categoryRegex.test(row))
)
