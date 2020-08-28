const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "title"
},
{
    type: "input",
    name: "description",
    message: "Add your description"
},
{
    type: "list",
    name: "license",
    message: "Choose the correct license for your project",
    choices: ["MIT", "BSD", "None"]
}
];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(responses){
        console.log(responses)
    const data = generateMarkdown(responses)
    writeToFile("newreadme.md", data)
    })
    
}

// function call to initialize program
init();
