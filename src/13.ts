import fs from 'fs'
import { range } from './helper/iterable-helper'

const rows1 = fs.readFileSync('./res/col1.txt', 'utf-8').split('\n')
const rows2 = fs.readFileSync('./res/col2.txt', 'utf-8').split('\n')
const merged =
    range(rows1.length)
        .map(i => `${rows1[i]}\t${rows2[i]}`)
        .join('\n')
fs.writeFileSync('./res/merged.txt', merged)
