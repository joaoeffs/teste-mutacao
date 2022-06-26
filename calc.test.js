const { sum, sub, mult, div } = require('./calc')

test('sums 2 numbers', () => {
    expect(sum(1, 2)).toBe(3)
})

test('subs 2 numbers', () => {
    expect(sub(2, 1)).toBe(1)
})

test('mults 2 numbers', () => {
    expect(mult(2, 2)).toBe(4)
})

test('divs 2 numbers', () => {
    expect(div(2, 1)).toBe(2)
})

test('divs 2 numbers', () => {
    expect(div(2, 0)).toBe(Infinity)
})