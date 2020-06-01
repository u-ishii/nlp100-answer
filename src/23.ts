import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

const sectionRegex = /(?<open>==+) *(?<name>[^= ]+) *(?<close>==+)/g
const article = getEnglandArticle()
console.log(
    [...article.matchAll(sectionRegex)]
        .map(match => match.groups)
        .filter(notEmpty)
        .map(({ name, open }) => ({
            name,
            level: open.length - 1,
        }))
)
