import { promises as fs } from 'fs'

const solve14 = async (size: number): Promise<string> => {
    const popularNames: string = await fs.readFile('./res/popular-names.txt', 'utf-8')
    const popularNameRows = popularNames.split('\n')
    return popularNameRows.slice(0, size).join('\n')
}

solve14(10).then(console.log)
