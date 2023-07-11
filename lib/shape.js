class Shape {
    constructor(name){
        this.name = name;
    }

    render() {
        throw new Error('You must rename the error')           
    }
}

module.exports = Shape
