const solve01 = (source: string): string => {
    return source.split('').reduceRight((result, char) => result + char)
}

console.log(solve01('stressed'))
