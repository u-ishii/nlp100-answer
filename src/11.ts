import fs from 'fs'

const source = fs.readFileSync('./res/popular-names.txt', 'utf-8')
console.log(
    source.replace(/\t/, ' ')
)