import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

const sectionRegex = /(?<open>==+) *(?<name>[^= ]+) *(?<close>==+)/
console.log(
    getEnglandArticle()
        .split('\n')
        .map(row => row.match(sectionRegex))
        .filter(notEmpty)
        .map(match => match.groups)
        .filter(notEmpty)
        .map(({ name, open }) => ({
            name,
            level: open.length - 1,
        }))
)
