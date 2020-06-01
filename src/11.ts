import { promises as fs } from 'fs'

const solve11 = async (): Promise<string> => {
    return (await fs.readFile('./res/popular-names.txt', 'utf-8'))
        .replace(/\t/, ' ')
}

solve11().then(console.log)
