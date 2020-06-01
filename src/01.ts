
export { }

const source = 'stressed'
console.log(
    source.split('').reduceRight((result, char) => result + char)
)
