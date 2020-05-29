const solve03 = (source: string): Array<number> => {
    return source.split(' ').map(word => word.length)
}

console.log(solve03('Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.'))
