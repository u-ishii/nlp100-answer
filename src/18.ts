import { promises as fs } from 'fs'

const solve18 = async (): Promise<string> => {
    const popularNames: string = await fs.readFile('./res/popular-names.txt', 'utf-8')
    const popularNameRows = popularNames.split('\n')
    const compare = (a: number, b: number) => {
        if (a < b) return -1
        if (a > b) return +1
        return 0
    }
    const pickNumber = (row: string) =>
        Number(row.split('\t')[2])
    return popularNameRows
        .sort((a, b) => compare(pickNumber(b), pickNumber(a)))
        .join('\n')
}

solve18().then(console.log)
