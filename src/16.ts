import { promises as fs } from 'fs'
import { range } from './share/iterable-helper'

const solve16 = async (size: number): Promise<Array<string>> => {
    const popularNames: string = await fs.readFile('./res/popular-names.txt', 'utf-8')
    const popularNameRows = popularNames.split('\n')
    const blockCount = Math.ceil(popularNameRows.length / size)
    return range(blockCount)
        .map(i => popularNameRows
            .slice(size * i, size * (i + 1))
            .join('\n')
        )
}

solve16(10).then(console.log)
