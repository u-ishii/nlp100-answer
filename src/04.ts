export { }

const source = 'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.'
const singleCharIndices = [1, 5, 6, 7, 8, 9, 15, 16, 19]
console.log(
    new Map(
        source.split(' ')
            .map((word, i) => {
                if (singleCharIndices.indexOf(i) != -1)
                    return [word[0], i]
                else
                    return [word[0] + word[1], i]
            })
    )
)
