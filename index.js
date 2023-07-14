const inquirer = require('inquirer')
//const shape = require('./lib/shape')
//const square = require('./lib/square')
const Circle = require('./lib/circle')
//const triangle = require('./lib/triangle')
const fs = require('fs')
const { error } = require('console')



//TODO - PROMPT i can enter up to 3 characters for the text for my SVG 
const intro_questions = [
,
    {
        name: 'chars',
        message: 'Enter up to 3 chars to represent my logo'
    },

]



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


const init = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'welcome',
                message: 'Welcome to the SVG logo generator.\nDo you want to make your own SVG?'
            },
        ])
        .then(({ welcome }) => {
            if (welcome) {
                console.log(welcome)
                console.log("okay, bye for now")
                prompt.ui.close()
            }
        })
        .catch((error) => {
            console.log(error)
            console.log("not an option")
        })
        .then(() => {
            inquirer
        .prompt([
            {
                name: 'chars',
                message: 'Enter up to 3 chars to represent my logo: '
            },
            {
                name: 'textColor',
                message: 'Enter text color (name a color or a hex number 0x00FFAA): '
            },
            {
                name: 'shapeChoice',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square'],
                type: 'list'
            },
            {
                name: 'shapeColor',
                message: 'Enter the shape color (name a color or a hex number 0x00FFAA): '
            }

        ])
        .then(({ chars, textColor, shapeChoice, shapeColor }) => {
            const userShape = chooseShape(shapeChoice, shapeColor)
            console.log(userShape.render())
            //fs.writeFileSync('svg.svg', user_svg)
        })
        .then(() => {

        })
        .catch((err) => {
            console.log(err)
            console.log("hmm... something didn't work...")
        })
        })
    
}



//TODO - Shape with LIST of shapes: circle, triangle, square

//TODO - prompted for text color: i can respond with color name OR hex number

//TODO - at the end an SVG file is generated with title 'logo.svg'

//TODO - command line statement stating "generated logo.svg"
//console.log("Generated logo.svg")

//TODO when i open the file i am shown a 300x200 pixel images that matches what i went through

init();