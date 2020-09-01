const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
// array of questions for user
const questions = [
{
    type: "input",
    name: "Name",
    message: "What is the name of your application?"
},
{
    type: "input",
    name: "Description",
    message: "Please enter a brief description of your application:"
},
{
    type: "list",
    name: "Table of Contents",
    choices: ["Installation", "Usage", "License", "Contributors", "Tests", "Questions"]
},
{
    type: "input",
    name: "Installation",
    message: "Installation info"
},
{
    type: "input",
    name: "Usage",
    message: "How to use the application"
},
{
    type: "list",
    name: "License",
    message: "Choose the correct license for your project",
    choices: ["MIT", "BSD", "None"]
},
{
    type: "input",
    name: "Contributors",
    message: "Who contributed to creating this app"
},
{
    type: "input",
    name: "Tests",
    message: "Tests"
},
// {
//     type: "input",
//     name: "GitHub Username",
//     message: "What is your GitHub username? Add your GitHub profile link here:"
// },
// {
//     type: "input",
//     name: "Email",
//     message: "What is your email address? Add instructions on how to reach you with additional questions here:"
// },
{
    type: "input",
    name: "Question1",
    message: 
        "What is your GitHub username? Add your GitHub profile link here:"
},
{
    type: "input",
    name: "Question2",
    message: "What is your email address? Add instructions on how to reach you with additional questions here:"
}
];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data) 
console.log("writeToFile")
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
