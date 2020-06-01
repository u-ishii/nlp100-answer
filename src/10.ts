import { promises as fs } from 'fs'

const solve10 = async (): Promise<number> => {
    return ((await fs.readFile('./res/popular-names.txt', 'utf-8')).match(/\n/g) || []).length + 1
}

solve10().then(console.log)
