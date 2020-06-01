import fs from 'fs'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
const solve15 = (size: number): string => {
    return source
        .split('\n')
        .reverse()
        .slice(0, size)
        .reverse()
        .join('\n')
}
console.log(
    solve15(10)
)
