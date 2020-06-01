import { promises as fs } from 'fs'

const solve11 = async (): Promise<void> => {
    const table = (await fs.readFile('./res/popular-names.txt', 'utf-8'))
        .split('\n')
        .map(row => row.split('\t'))
    const pickColumn = (i: number): string =>
        table.map(row => row[i]).join('\n')
    fs.writeFile('./res/col1.txt', pickColumn(0))
    fs.writeFile('./res/col2.txt', pickColumn(1))
}

solve11()
