import {promises as fs} from 'fs'

const solve11 = async (): Promise<string> => {
    const popularNames: string = await fs.readFile('./res/popular-names.txt', 'utf-8')
    return popularNames.replace(/\t/, ' ')
}

solve11().then(console.log)
