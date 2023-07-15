const Shape = require('./shape')

class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/>`
    }
}

module.exports = Square