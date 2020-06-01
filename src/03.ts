export { }

const source = 'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.'
console.log(
    source.split(' ').map(word => word.length)
)
