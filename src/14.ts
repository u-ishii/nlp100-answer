import { promises as fs } from 'fs'

const solve14 = async (size: number): Promise<string> => {
    return (await fs.readFile('./res/popular-names.txt', 'utf-8'))
        .split('\n')
        .slice(0, size)
        .join('\n')
}

solve14(10).then(console.log)
