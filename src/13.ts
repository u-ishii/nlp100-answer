import { promises as fs } from 'fs'
import { range } from './share/iterable-helper'

const solve11 = async (): Promise<void> => {
    const col1: string = await fs.readFile('./res/col1.txt', 'utf-8')
    const col2: string = await fs.readFile('./res/col2.txt', 'utf-8')
    const rows1 = col1.split('\n')
    const rows2 = col2.split('\n')
    const merged =
        range(rows1.length)
            .map(i => `${rows1[i]}\t${rows2[i]}`)
            .join('\n')
    fs.writeFile('./res/merged.txt', merged)
}

solve11()
