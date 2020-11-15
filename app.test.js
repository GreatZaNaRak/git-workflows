const { add, sub } = require('./app')

describe('common logic test', () => {
    test('add A and B', () => {
        expect(add(1, 2)).toBe(3)
    })
    
    test('subtract A by B', () => {
        expect(sub(3, 2)).toBe(1)
    })

    test('should do something wrong', () => {
        expect(add(1, 2)).toBe(3)
    });
})