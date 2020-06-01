import { promises as fs } from 'fs'

const solve15 = async (size: number): Promise<string> => {
    return (await fs.readFile('./res/popular-names.txt', 'utf-8'))
        .split('\n')
        .reverse()
        .slice(0, size)
        .reverse()
        .join('\n')
}

solve15(10).then(console.log)
