import { range } from './iterable-helper'

export { splitByIndices }

const splitByIndices = (target: string, indices: Array<number>): Array<string> => {
    return [
        [0, indices[0]],
        ...(
            range(indices.length - 1)
                .map<[number, number]>(i => [indices[i] + 1, indices[i + 1]])
        ),
        [indices[indices.length - 1] + 1, target.length],
    ].map(([start, end]) => target.slice(start, end))
}
