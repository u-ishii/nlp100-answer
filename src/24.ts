import { promises as fs } from 'fs'
import { AssertionError } from 'assert'

type Section = {name: string, level: number}

const solve23 = async (): Promise<Array<string>> => {
    return (await fs.readFile('./res/jawiki-england.json', 'utf-8'))
        .split('\n')
        .map(row => {
            const { text }: { title: string, text: string } = JSON.parse(row)
            const fileRegex = /\[\[(?:ファイル|File)\:[^\]]+\]\]/
            return [...text.matchAll(fileRegex)]
                .map(match => match[0])
        })
        .reduce((merged, files) => [...merged, ...files])
}

solve23().then(console.log)
