const inquirer = require('inquirer')
//const shape = require('./lib/shape')
//const square = require('./lib/square')
//const circle = require('./lib/circle')
//const triangle = require('./lib/triangle')
const fs = require('fs')

//TODO - PROMPT i can enter up to 3 characters for the text for my SVG 
const intro_questions = [
,
    {
        name: 'chars',
        message: 'Enter up to 3 chars to represent my logo'
    },
    {
        name: 'text_color',
        message: 'Text color (Color name or hex number)'
    },
    {
        name: 'shape_choice',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
        type: 'list'
    }
]



const svg = (txt, shape, bg_color) => {
    return (`
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="200" fill="${bg_color}"/>
        ${shape}
        ${txt}
    </svg>
    `)
}

const init = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'welcome',
                message: 'Welcome to the SVG logo generator.\ndo you want to make your own SVG?'
            },
            {
                name: 'chars',
                message: 'Enter up to 3 chars to represent my logo'
            }
        ])
        .then(() => {
            
            fs.writeFileSync('svg.svg', user_svg)
            
        })
}



//TODO - Shape with LIST of shapes: circle, triangle, square

//TODO - prompted for text color: i can respond with color name OR hex number

//TODO - at the end an SVG file is generated with title 'logo.svg'

//TODO - command line statement stating "generated logo.svg"
//console.log("Generated logo.svg")

//TODO when i open the file i am shown a 300x200 pixel images that matches what i went through

init();