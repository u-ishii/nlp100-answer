import { promises as fs } from 'fs'

export { getEnglandArticle }

const getEnglandArticle = async (): Promise<string> => {
    return (await fs.readFile('./res/jawiki-country.json', 'utf-8'))
        .split('\n')
        .filter(row => row.length > 0)
        .map(row => JSON.parse(row))
        .filter(({ title, }) => title == 'イギリス')[0].text
}
