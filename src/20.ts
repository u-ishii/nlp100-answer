import { promises as fs } from 'fs'

const solve20 = async (): Promise<void> => {
    const englandArticles: Array<string> = (await fs.readFile('./res/jawiki-country.json', 'utf-8'))
        .split('\n')
        .filter(row => {
            if (row.trim().length == 0)
                return false
            const { title, text }: { title: string, text: string } = JSON.parse(row)
            const englandRegex = /イギリス/i
            return englandRegex.test(title) || englandRegex.test(text)
        })
    await fs.writeFile('./res/jawiki-england.json', englandArticles.join('\n'))
}

solve20()
