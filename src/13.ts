import { promises as fs } from 'fs'
import { range } from './share/iterable-helper'

const solve11 = async (): Promise<void> => {
    const rows1 = (await fs.readFile('./res/col1.txt', 'utf-8'))
        .split('\n')
    const rows2 = (await fs.readFile('./res/col2.txt', 'utf-8'))
        .split('\n')
    const merged =
        range(rows1.length)
            .map(i => `${rows1[i]}\t${rows2[i]}`)
            .join('\n')
    await fs.writeFile('./res/merged.txt', merged)
}

solve11()
