const Square = require('./square')

describe('Square', () => {
    describe('color', () => {
        it('should return the correct color square', () => {
            const shape = new Square("blue");
            const colorCheck = "blue"
            expect(shape.render())
                .toEqual(`<rect x="75" y="25" width="150" height="150" fill="${colorCheck}"/>`)
        })
    })
})
