// packages and modules
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// begin inquirer prompts for userAnswers

const questions =
 [{
    type: "input",
    name: "title",
    message: "What is the name of your project? (Required)",
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a title for your project!');
          return false;
        }
      }
  },
  {
    type: "input",
    name: "authors",
    message: "Who contributed to this project? (Required)",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please at least one name who worked on this project!');
          return false;
        }
      }
  },
  {
    type: "input",
    message: "Enter a description of your project. (Required)",
    name: "description",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
  },
  {
    type: "input",
    message: "If applicable, describe how to install the application.",
    name: "install"
  },
  {
    type: "input",
    message: "Give instructions for using the application.  Include screenshots as needed.",
    name: "usage"
  },
  {
    type: "input",
    message: "If applicable, describe any testing done.  Include tests you've written and examples on how to run them",
    name: "tests"
  },
  {
    type: "list",
    message: "Choose a license for your project",
    name: "license",
    choices: ['GNU AGPL v3.0', 'CC', 'MS PL', 'MIT', 'MPL 2.0', 'OSL 3.0', 'Unlicense', 'BSL 1.0']
  },
  {
    type: "input",
    message: "Describe what to do if user has issues.",
    name: "issues"
  },
  {
    type: "input",
    message: "Enter your GitHub Username. (Required)",
    name: "username",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a valid GitHub Username!');
          return false;
        }
      }
  },
  {
    type: "input",
    message: "Enter your email address. (Required)",
    name: "email",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
  }
 ]

 function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err => {
     if (err) {
       return console.log(err);
     } else {
       console.log("Your Readme has been successfully generated!")
     }
   });
 }

const writeFileAsync = util.promisify(writeToFile);

// main function
async function init() {
  try {
    // prompt inquirer questions
    const userAnswers = await inquirer.prompt(questions);
    console.log(userAnswers);

    //pass userAnswers through to generate Readme
    const generateReadme = generateMarkdown(userAnswers);
    console.log(generateReadme);

    //write to file

    await writeFileAsync('README.md', generateReadme);
} catch (err) {
  console.log(err);
}
};

init();