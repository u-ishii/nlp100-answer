export { }

const shuffleString = (source: string): string => {
    const result = source.split('')
    for (let i = result.length; i > 0; i--) {
        const j: number = Math.floor(Math.random() * i)
        const tmp = result[i]
        result[i] = result[j]
        result[j] = tmp
    }
    return result.join('')
}

const source = 'I couldn’t believe that I could actually understand what I was reading : the phenomenal power of the human mind .'

console.log(
    source
        .split(' ')
        .map(word => {
            if (word.length <= 4)
                return word
            else
                return word[0] + shuffleString(word.slice(1, word.length - 1)) + word[word.length - 1]
        })
        .join(' ')
)
