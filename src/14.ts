import fs from 'fs'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
const solve14 = (size: number): string => {
    return source
        .split('\n')
        .slice(0, size)
        .join('\n')
}
console.log(
    solve14(10)
)
