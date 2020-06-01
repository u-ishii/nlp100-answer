import { promises as fs } from 'fs'
import { AssertionError } from 'assert'

type Section = {name: string, level: number}

const solve23 = async (): Promise<Array<Section>> => {
    return (await fs.readFile('./res/jawiki-england.json', 'utf-8'))
        .split('\n')
        .map(row => {
            const { text }: { title: string, text: string } = JSON.parse(row)
            const sectionRegex = /(?<open>==+) *(?<name>[^= ]+) *(?<close>==+)/
            const match = text.match(sectionRegex)
            if (match == null || match.groups == undefined)
                throw new AssertionError
            const {name, open} = match.groups
            return {
                name,
                level: open.length,
            }
        })

}

solve23()
    .then(console.log)
