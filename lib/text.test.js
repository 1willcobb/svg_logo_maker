const Txt = require('./text')

describe('Txt', () => {
    describe('textContent', () => {
        it('should return the text passed in', () => {
            const text = new Txt("hey", "black")
            const testTxt = "hey"
            expect(text.txt)
                .toEqual(testTxt)
        })
    })
    describe('color', () => {
        it('should return the color passed in', () => {
            const text = new Txt("hey", "black")
            const testColor = "black"
            expect(text.textColor)
                .toEqual(testColor)
        })
    })
})