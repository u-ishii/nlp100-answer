import { getEnglandArticle } from './share/get-england-article'

const categoryRegex = /\[\[Category\:[^\]]+\]\]/
console.log(
    getEnglandArticle()
        .split('\n')
        .filter(row => categoryRegex.test(row))
)
