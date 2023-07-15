const inquirer = require('inquirer')
const Square = require('./lib/square')
const Circle = require('./lib/circle')
const Triangle = require('./lib/triangle')
const fs = require('fs')
const Txt = require('./lib/text')
const colorString = require('color-string');

const createSVG = (txt, shape, bg_color) => {
    return (`
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="200" fill="${bg_color}"/>
        ${shape}
        ${txt}
    </svg>
    `)
}

const chooseShape = (shape, shapeColor) => {
    if (shape === 'circle') {
        return new Circle(shapeColor)
    } else if (shape === 'square') {
        return new Square(shapeColor)
    } else if (shape === 'triangle') {
        return new Triangle(shapeColor)
    } else {
        return "not a valid shape"
    }
}

const validateTxt = (txt) => {
    if ((txt.length > 0 && txt.length < 4)) {
        return true;
    } else {
        return 'Must enter at least 1 but no more than 3 chars.'
    }
}

const validateColor = (color) => {
    const convertedColor = colorString.get(color)
    if (convertedColor !== null) {
        return true;
    } else {
        return 'Not a valid color'
    }
}



const Questions = [
    {
        name: 'txt',
        message: 'Welcome to the SVG creator.\nEnter up to 3 chars to represent the logo: ',
        validate: validateTxt
    },
    {
        name: 'textColor',
        message: 'Enter a text color (name or hex format: #00FFAA): ',
        validate: validateColor
    },
    {
        name: 'shapeChoice',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
        type: 'list'
    },
    {
        name: 'shapeColor',
        message: 'Enter a shape color (name or hex format: #00FFAA): ',
        validate: validateColor
    },
    {
        name: 'bg_color',
        message: 'Enter a background color (name or hex format: #00FFAA): ',
        validate: validateColor
    }
]


const init = () => {
    inquirer
        .prompt(Questions)
        .then(({ txt, textColor, shapeChoice, shapeColor, bg_color}) => {
            const userShape = chooseShape(shapeChoice, shapeColor)
            const userText = new Txt(txt, textColor)
            const userSVG = createSVG(userText.render(), userShape.render(), bg_color)
            fs.writeFileSync('./examples/logo.svg', userSVG)
        })
        .then(()=>{
            console.log('Generated logo.svg')
        })
        .catch((err) => {
            console.log(err)
            console.log("hmm... something didn't work...")
        })
}
    

init();