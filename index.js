//Dependencies 
const inquirer = require('inquirer')
const fs = require('fs')
const SVG = require("./lib/svg");
const { Square, Triangle, Circle } = require("./lib/shapes");

//Array of questions to gather user input with Inquirer
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like in your logo? (Max 3 characters)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be? (Color or Hex)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to have?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What color would you like your logo's shape to be? (Color or Hex)"
    }
]

//Function to create new SVG file
function makeNewFile(svgCode) {
    fs.writeFile('logo.svg',svgCode,function (err){
        if (err) throw err
        else {console.log('Generated logo.svg ★')};
    })
}
//Function to generate code that will be in new SVG file
function createSVGCode (data) {
    const mySVGCode = new SVG()
    mySVGCode.setText(data.text, data.textColor)
    var logoShape;
        if (data.shape === 'Circle') { var logoShape = new Circle()}
        else if (data.shape === 'Square') { var logoShape = new Square()}
        else if (data.shape === 'Triangle') { var logoShape = new Triangle()}
    logoShape.setColor(data.shapeColor)
    mySVGCode.setShape(logoShape)
    return mySVGCode.render()
} 

//Function to start app
function init() {
    inquirer.prompt(questions)
    .then(answers => {makeNewFile(createSVGCode(answers))})
}

init()

