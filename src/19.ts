import { promises as fs } from 'fs'

const solve19 = async (): Promise<Array<[string, number]>> => {
    return [
        ...(await fs.readFile('./res/popular-names.txt', 'utf-8'))
            .split('\n')
            .map(row => row.split('\t')[0])
            .reduce((countMap: Map<string, number>, name) => {
                countMap.set(name, (countMap.get(name) || 0) + 1)
                return countMap
            }, new Map())
            .entries()
    ]
        .sort(([nameA, countA], [nameB, countB]) => countB - countA)
}

solve19().then(console.log)
