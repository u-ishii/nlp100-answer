const solve02 = (source: string): string => {
    return [1, 3, 5, 7].map(i => source[i]).join('')
}

console.log(solve02('パタトクカシーー'))
