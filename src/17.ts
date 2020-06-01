import fs from 'fs'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
console.log(
    [...new Set(
        source
            .split('\n')
            .filter(row => row.length > 0)
            .map(row => row[0])
    )].sort()
)