export { range, notEmpty }

const range = (end: number): Array<number> =>
    [...Array(end).keys()]

const notEmpty = <T>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined;
}
