import fs from 'fs'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
const table = source
    .split('\n')
    .map(row => row.split('\t'))
const pickColumn = (i: number): string =>
    table.map(row => row[i]).join('\n')
fs.writeFileSync('./res/col1.txt', pickColumn(0))
fs.writeFileSync('./res/col2.txt', pickColumn(1))
