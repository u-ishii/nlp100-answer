import fs from 'fs'

export { getEnglandArticle }

const getEnglandArticle = (): string => {
    return fs.readFileSync('./res/jawiki-country.json', 'utf-8')
        .split('\n')
        .filter(row => row.length > 0)
        .map(row => JSON.parse(row))
        .filter(({ title, }) => title == 'イギリス')[0].text
}
