const inquirer = require('inquirer')
const fs = require('fs')

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

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        if (answers.text.length > 3) {
            const textError = new Error("Text can't exceed 3 characters!");
            console.log(textError)
        }else {console.log(answers)}
    })
}

init()