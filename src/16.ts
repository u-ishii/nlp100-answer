import fs from 'fs'
import { range } from './helper/iterable-helper'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
const solve16 = (size: number): Array<string> => {
    const rows = source.split('\n')
    const blockCount = Math.ceil(rows.length / size)
    return range(blockCount)
        .map(i => rows
            .slice(size * i, size * (i + 1))
            .join('\n')
        )
}
console.log(
    solve16(10)
)
