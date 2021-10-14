// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkDown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        name:"user",
        type:"input",
        message:"Please enter your GitHub username",
    },
    {
        name:"email",
        type:"input",
        message:"Please enter your email address",
    },
    {
        name:"title",
        type:"input",
        message:"What is your project's name?",
    },
    {
        name:"description",
        type:"input",
        message:"Please write a short description of your project",
    },
    {
        name:"badge",
        type:"list",
        message:"what kind of license should your project have?",
        choices:["Apache 2.0","MIT", "GPL v3","BSD 3", "No License"]
    },
    {
        name:"installation",
        type:"input",
        message:"What command should be run to install dependencies?",
    },
    {
        name:"tests",
        type:"input",
        message:"What command should be run to run tests?",
    },
    {
        name:"usage",
        type:"input",
        message:"What does the user need to know about using the repo?",
    },
    {
        name:"contributing",
        type:"input",
        message:"What dose the user need to know about contributing to the repo?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContents = generateMarkDown(data);
    fs.writeFile(fileName,readmeContents,(err)=>{
        if (err) {
            console.log(err);
            console.log(
              "Uh oh. Something went wrong. Could not create README.md. Scroll up for details."
            );
            return process.exit(1);
          }
          console.log("Success! Created README.md");
        });

    }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        console.log(data);
        writeToFile('./output/README.md',data);

    });
}

// Function call to initialize app
init();
