import { getEnglandArticle } from './share/get-england-article'

const solve21 = async (): Promise<Array<string>> => {
    const categoryRegex = /\[\[Category\:[^\]]+\]\]/
    return (await getEnglandArticle())
        .split('\n')
        .filter(row => categoryRegex.test(row))
}

solve21().then(console.log)
