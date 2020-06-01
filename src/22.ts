import { promises as fs } from 'fs'

const solve22 = async (): Promise<Array<string>> => {
    return (await fs.readFile('./res/jawiki-has-category.json', 'utf-8'))
        .split('\n')
        .map(row => {
            const { text }: { title: string, text: string } = JSON.parse(row)
            const categoryRegex = /\[\[Category\:([^\]]+)\]\]/
            return ([...text.match(categoryRegex) || []][1]).split('|')[0]
        })
}

solve22().then(console.log)
