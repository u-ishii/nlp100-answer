import { promises as fs } from 'fs'

const solve21 = async (): Promise<void> => {
    const hasCategoryArticles: Array<string> = (await fs.readFile('./res/jawiki-england.json', 'utf-8'))
        .split('\n')
        .filter(row => {
            const { text }: { title: string, text: string } = JSON.parse(row)
            const categoryRegex = /\[\[Category\:[^\]]+\]\]/
            return categoryRegex.test(text)
        })
    await fs.writeFile('./res/jawiki-has-category.json', hasCategoryArticles.join('\n'))
}

solve21()
