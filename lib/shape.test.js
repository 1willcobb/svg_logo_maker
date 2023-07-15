const Shape = require('./shape')

describe('Shape', () => {
    describe('render', () => {
        it('throws an error when called directly on the base class', () => {
        const shape = new Shape('red');
        expect(() => shape.render()).toThrowError(
            'Child class must implement a render() method.'
        );
        });

        it('does not throw an error when implemented in a child class', () => {
        class Circle extends Shape {
            render() {
            return 'Rendered Circle';
            }
        }

        const circle = new Circle('blue');
        expect(() => circle.render()).not.toThrowError(
            'Child class must implement a render() method.'
        );
        });
    });
    });