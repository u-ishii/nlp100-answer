import { promises as fs } from 'fs'

const solve15 = async (size: number): Promise<string> => {
    const popularNames: string = await fs.readFile('./res/popular-names.txt', 'utf-8')
    const popularNameRows = popularNames.split('\n')
    return popularNameRows
        .reverse()
        .slice(0, size)
        .reverse()
        .join('\n')
}

solve15(10).then(console.log)
