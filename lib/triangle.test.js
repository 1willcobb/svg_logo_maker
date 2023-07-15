const Triangle = require('./triangle')

describe('Triangle', () => {
    describe('color', () => {
        it('should return the correct color triangle', () => {
            const shape = new Triangle("blue");
            const colorCheck = "blue"
            expect(shape.render())
                .toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${colorCheck}" />`)
        })
    })
})
