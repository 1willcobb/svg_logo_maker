class Shape {
    constructor(color) {
        this.color = color
      }

    render() {
        throw new Error('Child class must implement a render() method.')           
    }
}

module.exports = Shape
