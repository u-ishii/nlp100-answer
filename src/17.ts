import { promises as fs } from 'fs'

const solve17 = async (): Promise<Array<string>> => {
    const popularNames: string = await fs.readFile('./res/popular-names.txt', 'utf-8')
    const popularNameRows = popularNames.split('\n')
    const headChars = popularNameRows
        .filter(row => row.length > 0)
        .map(row => row[0])
    return [...new Set(headChars)].sort()
}

solve17().then(console.log)
