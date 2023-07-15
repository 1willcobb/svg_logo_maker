const Circle = require('./circle')

describe('Circle', () => {
    describe('color', () => {
        it('should return the correct color circle', () => {
            const shape = new Circle("blue");
            const colorCheck = "blue"
            expect(shape.render())
                .toEqual(`<circle cx="150" cy="100" r="75" fill="${colorCheck}"/>`)
        })
    })
})