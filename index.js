const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the name of your application?"
},
{
    type: "input",
    name: "description",
    message: "Please enter a brief description of your application:"
},
{
    type: "list",
    name: "Table of Contents",
    choices: ["Installation", "Usage", "License", "Contributors", "Tests", "Questions"]
},
{
    type: "input",
    name: "installation",
    message: "Installation info"
},
{
    type: "input",
    name: "usage",
    message: "How to use the application"
},
{
    type: "list",
    name: "license",
    message: "Choose the correct license for your project",
    choices: ["MIT", "BSD", "None"]
},
{
    type: "input",
    name: "contributors",
    message: "Who contributed to creating this app"
},
{
    type: "input",
    name: "tests",
    message: "Tests"
},
{
    type: "input",
    name: "question",
    message: 
        "What is your GitHub username? Add your GitHub profile link here:"
},
{
    type: "input",
    name: "questions",
    message: "What is your email address? Add instructions on how to reach you with additional questions here:"
}
];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data) 
// console.log("writeToFile")
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(responses){
        console.log(responses)
    const data = generateMarkdown({...responses})
        console.log(data)
    writeToFile("newreadme.md", data)
    })   
}

// function call to initialize program
init();
