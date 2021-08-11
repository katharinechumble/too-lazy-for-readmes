const fs = require('fs');

const inquirer = require('inquirer');
const generateReadme = require('../utils/generateMarkdown.js');

const promptUser = () => {
return inquirer.prompt(
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
    message: "Who collaborated on this project? (Required)",
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
 ])

.then(
function(data) {
const template = `
## ${data.title}

## Second Header
`;

  
  fs.generateReadme(README.md, template, function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
}