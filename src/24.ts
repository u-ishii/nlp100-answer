import { getEnglandArticle } from './share/get-england-article'
import { notEmpty } from './helper/iterable-helper'

type Section = {name: string, level: number}

const solve24 = async (): Promise<Array<string>> => {
    const fileRegex = /\[\[ファイル\:[^\]]+\]\]/
    return (await getEnglandArticle())
        .split('\n')
        .map(row => row.match(fileRegex))
        .filter(notEmpty)
        .map(match => match[0])
}

solve24().then(console.log)
