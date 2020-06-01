import fs from 'fs'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
console.log(
    [
        ...source
            .split('\n')
            .map(row => row.split('\t')[0])
            .reduce((countMap: Map<string, number>, name) => {
                countMap.set(name, (countMap.get(name) || 0) + 1)
                return countMap
            }, new Map())
            .entries()
    ]
        .sort(([nameA, countA], [nameB, countB]) => countB - countA)
)