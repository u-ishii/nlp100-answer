import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

type Section = {name: string, level: number}

const solve23 = async (): Promise<Array<Section>> => {
    const sectionRegex = /(?<open>==+) *(?<name>[^= ]+) *(?<close>==+)/
    return (await getEnglandArticle())
        .split('\n')
        .map(row => row.match(sectionRegex))
        .filter(notEmpty)
        .map(match => match.groups)
        .filter(notEmpty)
        .map(({name, open}) => ({
            name,
            level: open.length - 1,
        }))
}

solve23().then(console.log)
