const inquirer = require('inquirer')
const fs = require('fs')
const svg = require("./svg");
const shape = require("./shapes");

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

//1) generate SVG code
//2) pass code into function to create and populate new svg file

function myNewFile(svgCode) {
    fs.writeFile('logo.svg',svgCode,function (err){
        if (err) throw err
        else {console.log('Generated logo.svg ★')};
    })
}

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        myNewFile(answers)
    })
}

init()