import fs from 'fs'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
const match = source.trim().match(/\n/g)
console.log(match ? match.length + 1 : 1)
