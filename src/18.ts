import fs from 'fs'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
const compare = (a: number, b: number) => {
    if (a < b) return -1
    if (a > b) return +1
    return 0
}
const pickNumber = (row: string) =>
    Number(row.split('\t')[2])
console.log(
    source
    .split('\n')
    .sort((a, b) => compare(pickNumber(b), pickNumber(a)))
    .join('\n')
)
